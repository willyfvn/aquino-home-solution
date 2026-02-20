import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema, fileMetaSchema } from "@/lib/validation";
import { FILE_CONSTRAINTS, RATE_LIMIT, BUSINESS, SERVICES } from "@/lib/constants";

export const runtime = "nodejs";

// In-memory rate limiter
interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Cleanup stale entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now - entry.windowStart > RATE_LIMIT.windowSeconds * 1000) {
      rateLimitMap.delete(key);
    }
  }
}, RATE_LIMIT.cleanupIntervalMs);

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT.windowSeconds * 1000) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (entry.count >= RATE_LIMIT.maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  // Validate text fields
  const fields = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    zip: formData.get("zip") || undefined,
    service: formData.get("service"),
    message: formData.get("message") || undefined,
  };

  const parsed = leadFormSchema.safeParse(fields);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.issues },
      { status: 422 }
    );
  }

  const { name, phone, email, zip, service, message } = parsed.data;
  // zip is optional — only present if submitted

  // Validate files
  const photoEntries = formData.getAll("photos");
  const validFiles: File[] = [];

  for (const entry of photoEntries) {
    if (!(entry instanceof File) || entry.size === 0) continue;
    validFiles.push(entry);
  }

  if (validFiles.length > FILE_CONSTRAINTS.maxFiles) {
    return NextResponse.json(
      { error: `Maximum ${FILE_CONSTRAINTS.maxFiles} photos allowed.` },
      { status: 422 }
    );
  }

  for (const file of validFiles) {
    const fileMeta = fileMetaSchema.safeParse({
      name: file.name,
      type: file.type,
      size: file.size,
    });
    if (!fileMeta.success) {
      return NextResponse.json(
        {
          error: `Invalid file "${file.name}". Only JPG, PNG, and WebP under ${FILE_CONSTRAINTS.maxSizeMB}MB are accepted.`,
        },
        { status: 422 }
      );
    }
  }

  // Convert files to base64 attachments
  const attachments: Array<{ filename: string; content: string }> = [];
  for (const file of validFiles) {
    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    attachments.push({ filename: file.name, content: base64 });
  }

  // Build email
  const serviceName = SERVICES.find((s) => s.id === service)?.title || service;
  const subject = `New Lead: ${serviceName} — ${name}${zip ? ` (${zip})` : ""}`;

  const htmlBody = `
    <h2>New Quote Request</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px;font-weight:bold;border:1px solid #e2e8f0">Name</td><td style="padding:8px;border:1px solid #e2e8f0">${name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border:1px solid #e2e8f0">Phone</td><td style="padding:8px;border:1px solid #e2e8f0"><a href="tel:${phone}">${phone}</a></td></tr>
      <tr><td style="padding:8px;font-weight:bold;border:1px solid #e2e8f0">Email</td><td style="padding:8px;border:1px solid #e2e8f0"><a href="mailto:${email}">${email}</a></td></tr>
      ${zip ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #e2e8f0">ZIP Code</td><td style="padding:8px;border:1px solid #e2e8f0">${zip}</td></tr>` : ""}
      <tr><td style="padding:8px;font-weight:bold;border:1px solid #e2e8f0">Service</td><td style="padding:8px;border:1px solid #e2e8f0">${serviceName}</td></tr>
      ${message ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #e2e8f0">Message</td><td style="padding:8px;border:1px solid #e2e8f0">${message}</td></tr>` : ""}
      ${validFiles.length > 0 ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #e2e8f0">Photos</td><td style="padding:8px;border:1px solid #e2e8f0">${validFiles.length} photo(s) attached</td></tr>` : ""}
    </table>
    <p style="margin-top:16px;color:#64748b;font-size:14px">Sent via Aquino Home Solutions website</p>
  `;

  const toEmail = process.env.LEADS_TO_EMAIL || BUSINESS.email;
  const fromEmail =
    process.env.LEADS_FROM_EMAIL || "leads@aquinohomesolutions.com";

  try {
    const { resend } = await import("@/lib/resend");
    await resend.emails.send({
      from: `${BUSINESS.name} Leads <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html: htmlBody,
      attachments,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or call us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

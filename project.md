# Aquino Home Solutions — Next.js Rebuild (With Image Upload + Resend Email)

This project rebuilds the Aquino Home Solutions website using **Next.js App Router**, optimized for performance, local SEO, and high lead conversion.

---

# 🎯 Core Objectives

* ⚡ Ultra-fast performance (90+ Lighthouse mobile)
* 📞 Maximize call + quote conversions
* 🗺 Rank locally for HVAC + Water Heater + Lowell MA
* 📸 Allow customers to upload **photos of their issue**
* 📧 Send leads (with attachments) via **Resend email API**

---

# 🏗 Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Resend (email delivery)
* Google Tag Manager (conversion tracking)

---

# 📋 Lead Form Requirements

We will build a **high-converting quote form** with:

### Required Fields:

* Name
* Phone
* Email
* Zip Code
* Service Needed (dropdown)
* Message (optional)
* 📸 **Photo Upload (1–5 images)**

---

# 📸 Image Upload Requirements

* Accept file types: `.jpg`, `.jpeg`, `.png`, `.webp`
* Max file size per image: **5MB**
* Max total files: **5**
* Validate on:

  * Frontend (UX)
  * Backend (security)
* Convert file to Buffer
* Attach images to email via Resend

---

# 📧 Email Delivery via Resend

We will use **Resend API** to send form submissions to:

```
contact@aquinosolutions.com
```

The email must include:

* All form fields formatted clearly
* Attached uploaded images
* Timestamp
* IP (optional)
* User agent (optional)

---

# 🔐 Security Requirements

* Validate file type on backend
* Reject oversized files
* Sanitize inputs
* Use rate limiting (recommended)
* Never trust frontend validation alone

---

# 📁 Folder Structure

```
app/
  layout.tsx
  page.tsx
  services/
  service-areas/
  contact/page.tsx
  api/
    lead/
      route.ts  ← Handles form submission + file upload + email send
components/
  CTAForm.tsx
  MobileStickyBar.tsx
lib/
  resend.ts
  validation.ts
  constants.ts
```

---

# ⚙ Environment Variables

Create `.env.local`:

```
RESEND_API_KEY=your_resend_api_key
LEADS_TO_EMAIL=contact@aquinosolutions.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

---

# 📨 API Route Logic (app/api/lead/route.ts)

### Flow:

1. Parse `FormData`
2. Extract fields
3. Extract files
4. Validate file size/type
5. Convert files to Buffer
6. Send email using Resend
7. Return JSON success response

---

# 🧠 Example Email Structure

Subject:

```
🚨 New HVAC Lead - Aquino Home Solutions
```

Body:

```
Name:
Phone:
Email:
Zip:
Service:
Message:

Submitted at:
```

Attachments:

* Uploaded images (if any)

---

# 📊 Conversion Tracking

Track the following events:

* click_call
* click_whatsapp
* submit_quote_form
* upload_photo

Fire event only after successful submission.

---

# 📱 UX Requirements

* Sticky bottom mobile bar:

  * Call
  * Get Estimate
  * WhatsApp
* Drag & Drop upload support
* Show file preview thumbnails
* Show loading spinner during submission
* Success confirmation screen:
  “Thank you! We will contact you shortly.”

---

# 🧾 SEO Requirements

* Add LocalBusiness schema
* Use proper metadata in layout.tsx
* One H1 per page
* Service + City structured pages

---

# 🧪 Testing Checklist

* Submit form without image → works
* Submit with 1 image → works
* Submit with 5 images → works
* Reject 6 images → fails properly
* Reject file > 5MB → fails properly
* Email received with attachments
* Events fire in GTM

---

# 🚀 Deployment Notes

Recommended:

* Vercel hosting
* Edge runtime disabled for this route (use Node runtime for file handling)
* Ensure body size limit allows multipart uploads

---

# ✅ MVP Done When

* Homepage + service pages live
* Form works with image upload
* Emails delivered with attachments
* Events tracked
* Lighthouse mobile 90+

---

This site must feel:

* Professional
* Fast
* Trustworthy
* Local
* Conversion-focused

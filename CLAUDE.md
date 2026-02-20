# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production build locally
npm run lint     # Run ESLint
```

No test runner is configured. Refer to the manual testing checklist in `project.md`.

## Environment Variables

Create `.env.local` with:

```
RESEND_API_KEY=          # Resend API key
LEADS_TO_EMAIL=          # Destination address for leads
LEADS_FROM_EMAIL=        # Verified sender domain/email (optional)
NEXT_PUBLIC_GTM_ID=      # GTM container ID (optional)
```

## Architecture

This is a **Next.js App Router** site for a local HVAC/water heater business (Lowell, MA). The goal is high conversion rate, local SEO, and 90+ Lighthouse mobile score.

### Planned directory layout

```
app/
  layout.tsx            # Root layout with GTM, metadata, LocalBusiness schema
  page.tsx              # Homepage
  contact/page.tsx
  services/             # Service-specific pages
  service-areas/        # City/area pages for local SEO
  api/lead/route.ts     # Lead form API (Node runtime, NOT Edge)
components/
  CTAForm.tsx           # Quote form: name, phone, email, zip, service, message, photo upload
  MobileStickyBar.tsx   # Sticky bottom bar: Call | Get Estimate | WhatsApp
lib/
  resend.ts             # Resend email client
  validation.ts         # Zod schemas shared between client and server
  constants.ts          # Service list, area list, config constants
  gtm.ts                # GTM event helper
```

### Lead API (`POST /api/lead`)

The route at `app/api/lead/route.ts` must use the **Node.js runtime** (not Edge) to handle multipart file uploads:

```ts
export const runtime = 'nodejs';
```

Flow: parse `FormData` → validate fields (Zod) → validate files (type/size/count) → convert to base64 → send via Resend with attachments → return JSON → apply in-memory rate limiting.

File constraints enforced on both frontend and backend:
- Types: `.jpg`, `.jpeg`, `.png`, `.webp`
- Max 5MB per file, max 5 files total

### GTM events

Fire these events on user interaction (only after successful form submission for `submit_quote_form`):

- `click_call`
- `click_whatsapp`
- `submit_quote_form`
- `upload_photo`

### Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Resend v6 (email with attachments)
- Zod v4 (validation)
- shadcn/ui (planned, not yet installed)

### Deployment

Deploy to Vercel. Ensure `next.config.ts` does not restrict body size in a way that blocks multipart uploads.

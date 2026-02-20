# Aquino Home Solutions

Next.js App Router rebuild for a local HVAC + water heater business website with:

- conversion-focused quote form
- photo upload (1-5 files)
- backend file validation
- lead email delivery via Resend
- GTM event hooks

## Setup

1. Install dependencies:

```bash
npm install
```

2. Add environment variables:

```bash
cp .env.example .env.local
```

3. Run local development:

```bash
npm run dev
```

App runs at `http://localhost:3000`.

## Environment Variables

`RESEND_API_KEY`: API key from Resend  
`LEADS_TO_EMAIL`: destination address for form leads  
`LEADS_FROM_EMAIL`: verified sender domain/email for Resend (optional fallback included)  
`NEXT_PUBLIC_GTM_ID`: GTM container ID (optional)

## Project Structure

`app/` page routes and API route  
`components/` shared UI pieces (`CTAForm`, `MobileStickyBar`)  
`lib/` constants, validation, GTM helper, and Resend integration

## Lead API

`POST /api/lead`

- validates required fields
- validates file type/count/size
- converts files to base64 attachments
- sends a lead email via Resend
- applies basic in-memory rate limiting

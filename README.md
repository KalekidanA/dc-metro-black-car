# DC Black Car — Rank & Rent Website

A Next.js (App Router + TypeScript + Tailwind CSS) lead-generation website for
premium black car / executive transportation in Washington, DC. Built as a
**rank-and-rent asset**: the site, domain, and SEO equity are owned
long-term, while the business identity that fulfills leads (name, phone,
email, bio) can be swapped to a different operator/tenant at any time.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run lint     # ESLint
```

## How to Swap Tenants (the whole point of this project)

Every page pulls business identity from **one file**:
[`config/tenant.ts`](config/tenant.ts). To move the site from one operator to
another:

1. Open `config/tenant.ts` and update:
   - `businessName`, `shortName`, `tagline`
   - `phone.number` / `phone.display` (see Call Tracking below)
   - `email` and `booking.leadEmailTo`
   - `operator` bio, years of experience, license type, and credentials
   - `serviceArea` if the new tenant covers a different region
   - `reviews` — replace placeholder testimonials with real ones (each
     review has an `isPlaceholder` flag; set it to `false` once it's a real,
     verified review)
   - `site.domain` if the domain changes, and `site.gaMeasurementId` for
     Google Analytics (see below)
2. Replace image placeholders in `/public/images` (the site currently uses
   `ImagePlaceholder` components — search the codebase for
   `ImagePlaceholder` to find every spot expecting a real fleet/driver photo,
   then swap those components for `next/image`).
3. Commit and redeploy.

**Nothing else needs to change.** No page, component, or piece of structured
data hardcodes business identity — it all flows through `config/tenant.ts`,
including the JSON-LD structured data in `lib/schema.tsx`.

## Where to Plug In Later

### Call Tracking (e.g. CallRail)

`tenant.phone.number` (E.164 format, used for `tel:` links and JSON-LD) and
`tenant.phone.display` (human-readable) are the only two values that render
phone numbers anywhere on the site, via the `PhoneLink` component
(`components/PhoneLink.tsx`). When you're ready to add call tracking:

- **Static swap (simplest):** replace these two values with the tracking
  number your provider issues.
- **Dynamic Number Insertion (DNI) script:** if your provider needs a JS
  snippet that swaps the number client-side, add it in `app/layout.tsx` next
  to the existing GA4 placeholder block — it can inject without touching any
  page content.

### Google Analytics 4

Set `tenant.site.gaMeasurementId` in `config/tenant.ts` to your GA4
Measurement ID (e.g. `"G-XXXXXXXXXX"`). The gtag.js snippet in
`app/layout.tsx` is already wired to load automatically once that value is
set — leave it `null` to keep analytics off.

### Google Business Profile

Keep `config/tenant.ts` (`address`, `phone.display`, `businessName`) in sync
with your Google Business Profile listing for NAP (Name/Address/Phone)
consistency, which matters for local SEO. Once you have a profile URL, add
it to `tenant.social.googleBusinessProfileUrl`.

### Contact Form → Email Delivery

The reservation form (`/contact`) posts to `app/api/contact/route.ts`, which
sends the lead via [Resend](https://resend.com):

1. Create a Resend account and API key.
2. Set the environment variable `RESEND_API_KEY` (in Vercel: Project
   Settings → Environment Variables).
3. Optionally set `RESEND_FROM_EMAIL` once you've verified a sending domain
   in Resend (defaults to Resend's shared `onboarding@resend.dev` sender,
   fine for testing).
4. Leads are emailed to `tenant.booking.leadEmailTo` in `config/tenant.ts`.

**Without `RESEND_API_KEY` set**, submissions are not lost — the API route
logs the full lead to the server console instead, so you can verify the form
works end-to-end in development before wiring up real email delivery.

### Online Booking Tool

`tenant.booking.onlineBookingUrl` is `null` by default (phone + contact form
only, per the current scope). When an online booking tool is added later,
set this to its URL — this is a reserved slot for a future enhancement, not
yet wired into any component.

### DFHV License Number

`tenant.operator.licenseNumberPlaceholder` and the disclaimer text in
`tenant.legal.disclaimer` are placeholders — add your real DFHV license
number and remove the disclaimer language before public launch.

## Deploying to Vercel

```bash
npm install -g vercel   # if you don't already have the CLI
vercel                  # first deploy, follow the prompts
vercel --prod            # subsequent production deploys
```

Or connect the GitHub repo directly in the [Vercel dashboard](https://vercel.com/new) for
automatic deploys on push. Set `RESEND_API_KEY` (and `RESEND_FROM_EMAIL` if
applicable) as environment variables in the Vercel project settings.

After deploying, update `tenant.site.domain` in `config/tenant.ts` to match
your production domain — it's used to build canonical URLs, Open Graph tags,
the sitemap, and JSON-LD.

## Project Structure

```
config/tenant.ts       Central business-identity config (see above)
lib/seo.ts              Metadata builder (title/description/OG/canonical)
lib/schema.tsx           JSON-LD structured data builders
components/              Shared UI: Header, Footer, sticky call button,
                         CallToAction, TrustBadges, Testimonials,
                         FAQAccordion, ContactForm, ImagePlaceholder, etc.
app/                     One route per page (App Router), each with its own
                         metadata + JSON-LD
app/api/contact/route.ts Contact form submission handler
app/sitemap.ts            Auto-generated sitemap.xml
app/robots.ts              Auto-generated robots.txt
```

## SEO Notes

- Every page sets unique title/description via `buildMetadata()` in
  `lib/seo.ts`, including canonical URLs and Open Graph/Twitter card tags.
- LocalBusiness (`LimousineService`) JSON-LD is emitted site-wide from the
  root layout; page-specific `Service`, `FAQPage`, and `BreadcrumbList`
  JSON-LD is added per page via `lib/schema.tsx`.
- Airport transfer content is split into a hub page (`/airport-transfers`)
  plus one dedicated page per airport (`/airport-transfers/reagan-dca`,
  `/dulles-iad`, `/bwi`) — this is the highest search-intent content on the
  site and is built out accordingly.
- `aggregateRating` in the LocalBusiness schema currently reflects
  placeholder review data (see `tenant.reviews`) — update it once real,
  verified reviews are collected. Shipping placeholder rating data to
  production search results is against Google's structured data guidelines,
  so don't launch with `isPlaceholder: true` reviews still in place.

## Out of Scope (by design)

Online payment processing, real-time booking/dispatch integration,
multi-language support, and the future limo-company sister site are
intentionally not part of this project.

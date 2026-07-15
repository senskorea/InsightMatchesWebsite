## Referral Program page

Add a new lead-capture page at `/referral` following the same pattern as the NextRise form (Cloud table + admin view).

### 1. Database

New table `public.referral_signups`:
- `full_name` (text, required)
- `work_email` (text, required)
- `linkedin_url` (text, nullable)
- standard `id`, `created_at`

RLS: public `INSERT` allowed (anonymous submissions), `SELECT` restricted to admins via existing `has_role(auth.uid(), 'admin')`. GRANTs: `INSERT` to anon + authenticated, `ALL` to service_role, `SELECT` to authenticated (guarded by policy).

### 2. Page — `src/pages/Referral.tsx`

Route: `/referral`. Uses existing Navbar + Footer, Inter font, mint/lavender accents to match the site's Swiss-minimalist system (not raw HTML from the draft — restyled).

Sections:
- Hero: "Refer InsightMatches. Earn 10% Every Time." + subtitle + CTA scrolling to form.
- How It Works: 3 numbered cards (Sign Up → Share → Earn 10%).
- Rewards: single 10% commission callout.
- Form card: Full Name, Work Email, LinkedIn (optional), submit button.
  - zod validation (trim, email, max lengths).
  - On success: insert into `referral_signups`, show a success state ("Thanks — we'll email your unique referral link within 24h"). No auto-generated link.
  - Error → sonner toast.
- Localized copy via `useTranslation` (EN / KO / FR keys added to `src/translations/index.ts`).

### 3. Navigation

Add a top-level "Refer & Earn" link in `src/components/Navbar.tsx` next to the Request Demo button (both desktop and mobile menus). New translation key `referAndEarn`.

### 4. Admin view

Extend `src/pages/Admin.tsx` with a new tab/section "Referral Signups" that lists rows from `referral_signups` (same pattern as existing NextRise + demo_requests tabs).

### 5. Routing

Register `/referral` in `src/App.tsx`. Language-prefixed variants are not added in this pass (the form itself is localized, matching how `/request-demo` is handled).

### Technical notes

- Insert uses the public anon client — no auth required for submission.
- Types file (`src/integrations/supabase/types.ts`) regenerates after migration approval; Admin + Referral page code lands after that.
- No tracking-link generation logic yet; that can be a follow-up once the commission/attribution system is decided.


ALTER TABLE public.nextrise_signups
  ADD COLUMN full_name text NOT NULL DEFAULT '',
  ADD COLUMN email text NOT NULL DEFAULT '',
  ADD COLUMN website text NOT NULL DEFAULT '',
  ADD COLUMN role text NOT NULL DEFAULT '',
  ADD COLUMN country text NOT NULL DEFAULT '',
  ADD COLUMN linkedin_url text,
  ADD COLUMN phone text;

ALTER TABLE public.nextrise_signups
  ALTER COLUMN full_name DROP DEFAULT,
  ALTER COLUMN email DROP DEFAULT,
  ALTER COLUMN website DROP DEFAULT,
  ALTER COLUMN role DROP DEFAULT,
  ALTER COLUMN country DROP DEFAULT;

DROP POLICY IF EXISTS "Anyone can submit a nextrise signup" ON public.nextrise_signups;

CREATE POLICY "Anyone can submit a nextrise signup"
ON public.nextrise_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(company_name) BETWEEN 1 AND 200
  AND length(full_name) BETWEEN 1 AND 200
  AND length(email) BETWEEN 3 AND 320
  AND length(website) BETWEEN 1 AND 500
  AND length(role) BETWEEN 1 AND 200
  AND length(country) BETWEEN 1 AND 100
  AND (linkedin_url IS NULL OR length(linkedin_url) <= 500)
  AND (phone IS NULL OR length(phone) <= 50)
  AND (other_area IS NULL OR length(other_area) <= 500)
  AND length(grant_status) BETWEEN 1 AND 100
  AND array_length(research_areas, 1) IS NOT NULL
);

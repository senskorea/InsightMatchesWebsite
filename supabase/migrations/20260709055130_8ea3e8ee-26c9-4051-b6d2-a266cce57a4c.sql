DROP POLICY IF EXISTS "Anyone can submit referral signup" ON public.referral_signups;
CREATE POLICY "Anyone can submit referral signup" ON public.referral_signups
FOR INSERT WITH CHECK (
  length(full_name) >= 1 AND length(full_name) <= 200
  AND length(work_email) >= 3 AND length(work_email) <= 320
  AND (linkedin_url IS NULL OR length(linkedin_url) <= 500)
);
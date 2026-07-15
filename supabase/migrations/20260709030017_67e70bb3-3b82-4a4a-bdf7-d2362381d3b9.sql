CREATE TABLE public.referral_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  work_email text NOT NULL,
  linkedin_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.referral_signups TO anon, authenticated;
GRANT SELECT ON public.referral_signups TO authenticated;
GRANT ALL ON public.referral_signups TO service_role;

ALTER TABLE public.referral_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit referral signup"
  ON public.referral_signups FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view referral signups"
  ON public.referral_signups FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
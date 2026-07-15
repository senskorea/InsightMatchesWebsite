CREATE TABLE public.nextrise_signups (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name text NOT NULL,
  research_areas text[] NOT NULL DEFAULT '{}',
  other_area text,
  grant_status text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.nextrise_signups TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.nextrise_signups TO authenticated;
GRANT ALL ON public.nextrise_signups TO service_role;

ALTER TABLE public.nextrise_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a nextrise signup"
ON public.nextrise_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(company_name) >= 1 AND length(company_name) <= 200
  AND (other_area IS NULL OR length(other_area) <= 500)
  AND length(grant_status) >= 1 AND length(grant_status) <= 100
  AND array_length(research_areas, 1) IS NOT NULL
);

CREATE POLICY "Admins can view nextrise signups"
ON public.nextrise_signups
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update nextrise signups"
ON public.nextrise_signups
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete nextrise signups"
ON public.nextrise_signups
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));
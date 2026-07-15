import { Helmet } from 'react-helmet-async';

interface AlternateLink {
  hreflang: string;
  href: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  alternates?: AlternateLink[];
  jsonLd?: object | object[];
  noindex?: boolean;
  lang?: string;
}

const SITE = 'https://www.insightmatches.com';
const DEFAULT_OG = `${SITE}/og-image.jpg`;

export const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG,
  ogType = 'website',
  alternates,
  jsonLd,
  noindex = false,
  lang = 'en',
}: SEOProps) => {
  const fullCanonical = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE}${canonical}`
    : undefined;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="InsightMatches" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* hreflang alternates */}
      {alternates?.map((a) => (
        <link key={a.hreflang} rel="alternate" hrefLang={a.hreflang} href={a.href} />
      ))}

      {/* JSON-LD */}
      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

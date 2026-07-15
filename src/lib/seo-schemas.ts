// Reusable Schema.org JSON-LD definitions for InsightMatches.
// Used by SEO component to inject structured data for GEO + SEO.

const SITE = 'https://www.insightmatches.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InsightMatches',
  alternateName: 'InsightMatches AI',
  url: SITE,
  logo: `${SITE}/favicon.png`,
  description:
    'AI-powered platform connecting Korean researchers, universities and SMEs with European Horizon Europe consortium partners and R&D funding opportunities.',
  foundingDate: '2024',
  areaServed: ['EU', 'KR', 'Worldwide'],
  knowsAbout: [
    'Horizon Europe',
    'EU R&D funding',
    'Consortium building',
    'Korea-EU research collaboration',
    'Grant matchmaking',
  ],
  sameAs: [
    'https://www.linkedin.com/company/insightmatches',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: `${SITE}/about`,
      availableLanguage: ['English', 'Korean', 'French'],
    },
  ],
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'InsightMatches',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Research Funding & Consortium Matchmaking',
  operatingSystem: 'Web',
  url: SITE,
  description:
    'AI grant platform that helps Korean and European researchers find Horizon Europe partners, identify relevant calls, and build winning consortia.',
  featureList: [
    'AI-powered consortium partner matching',
    'Horizon Europe call discovery',
    'EU-Korea R&D collaboration intelligence',
    'SENS event matchmaking',
    'Multilingual support (EN, KO, FR)',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Researchers, Universities, SMEs, Research institutions',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Free demo available; paid tiers for institutions.',
  },
  provider: { '@type': 'Organization', name: 'InsightMatches', url: SITE },
};

export const sensServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Event Matchmaking',
  name: 'SENS — EU-Korea R&D Event Matchmaking',
  provider: { '@type': 'Organization', name: 'InsightMatches', url: SITE },
  areaServed: ['EU', 'KR'],
  description:
    'AI matchmaking tool that pairs participants of EU-Korea R&D events with the most relevant collaborators based on research topics, calls and capabilities.',
  url: `${SITE}/sens`,
  audience: {
    '@type': 'Audience',
    audienceType: 'Researchers, Innovators, Funding agencies',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'InsightMatches',
  url: SITE,
  inLanguage: ['en', 'ko', 'fr'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE}/resources?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const buildFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const buildArticleSchema = (opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  inLanguage?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.title,
  description: opts.description,
  inLanguage: opts.inLanguage || 'en',
  datePublished: opts.datePublished,
  dateModified: opts.dateModified || opts.datePublished,
  image: opts.image || `${SITE}/favicon.png`,
  mainEntityOfPage: opts.url,
  author: { '@type': 'Organization', name: 'InsightMatches', url: SITE },
  publisher: {
    '@type': 'Organization',
    name: 'InsightMatches',
    logo: { '@type': 'ImageObject', url: `${SITE}/favicon.png` },
  },
});

export const buildBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About InsightMatches',
  url: `${SITE}/about`,
  description:
    "InsightMatches bridges Europe and Asia with AI-powered tools for Horizon Europe funding, consortium building, and proposal preparation. €20M+ funding secured, success rate 2× the EU average.",
  inLanguage: 'en',
  mainEntity: {
    '@type': 'Organization',
    name: 'InsightMatches',
    url: SITE,
    foundingDate: '2024',
    description:
      'AI platform helping Korean researchers, universities and SMEs find Horizon Europe consortium partners and EU R&D funding.',
    areaServed: ['EU', 'KR'],
  },
};




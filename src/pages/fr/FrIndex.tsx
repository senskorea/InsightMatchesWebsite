import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { HomeContent } from '@/pages/Index';
import { useTranslation } from '@/hooks/useTranslation';
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
  sensServiceSchema,
} from '@/lib/seo-schemas';

const SITE = 'https://www.insightmatches.com';

const FrIndex = () => {
  const { changeLanguage, t } = useTranslation();

  useEffect(() => {
    changeLanguage('fr');
  }, [changeLanguage]);

  useEffect(() => {
    document.title = t('heroTitle');
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="fr"
        title={t('heroTitle')}
        description={t('heroDescription')}
        canonical="/fr/"
        alternates={[
          { hreflang: 'en', href: `${SITE}/` },
          { hreflang: 'ko', href: `${SITE}/ko/` },
          { hreflang: 'fr', href: `${SITE}/fr/` },
          { hreflang: 'x-default', href: `${SITE}/` },
        ]}
        jsonLd={[organizationSchema, softwareApplicationSchema, websiteSchema, sensServiceSchema]}
      />
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default FrIndex;

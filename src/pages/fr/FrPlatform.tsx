import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductFeatures } from '@/components/ProductFeatures';
import { BentoGrid } from '@/components/BentoGrid';
import { EnhancedCTA } from '@/components/EnhancedCTA';
import { SEO } from '@/components/SEO';

const FrPlatform = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'La plateforme — InsightMatches';
  }, []);

  if (currentLanguage !== 'fr') {
    return <Navigate to="/platform" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="fr"
        title="La plateforme — IA InsightMatches pour Horizon Europe"
        description="Découvrez la plateforme InsightMatches : trouvez vos financements, construisez vos consortiums avec les institutions européennes et rédigez vos propositions Horizon Europe gagnantes grâce à l'IA."
        canonical="/fr/platform"
        alternates={[
          { hreflang: 'en', href: 'https://www.insightmatches.com/platform' },
          { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/platform' },
        ]}
      />
      <Navbar />
      <main lang="fr">
        <section className="pt-32 pb-12 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            La plateforme InsightMatches
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Des outils dopés à l'IA pour trouver des financements, constituer des consortiums avec
            les institutions de l'UE et rédiger des propositions Horizon Europe gagnantes.
          </p>
        </section>
        <ProductFeatures />
        <BentoGrid />
        <EnhancedCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FrPlatform;

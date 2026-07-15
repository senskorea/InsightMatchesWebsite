import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProductFeatures } from '../components/ProductFeatures';
import { BentoGrid } from '../components/BentoGrid';
import { EnhancedCTA } from '../components/EnhancedCTA';
import { SEO } from '../components/SEO';

const Platform = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'Platform — InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/platform" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/platform" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Platform — InsightMatches AI for Horizon Europe"
        description="Explore the InsightMatches platform: find funding, build consortia with EU institutions, and draft winning Horizon Europe proposals with AI."
        canonical="/platform"
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-12 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            The InsightMatches Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered tools to find funding, form consortia with EU institutions, and draft winning proposals.
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

export default Platform;

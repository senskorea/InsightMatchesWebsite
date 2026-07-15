import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductFeatures } from '@/components/ProductFeatures';
import { BentoGrid } from '@/components/BentoGrid';
import { EnhancedCTA } from '@/components/EnhancedCTA';
import { SEO } from '@/components/SEO';

const KoPlatform = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = '플랫폼 — InsightMatches';
  }, []);

  if (currentLanguage !== 'ko') {
    return <Navigate to="/platform" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="ko"
        title="플랫폼 — 호라이즌 유럽을 위한 InsightMatches AI"
        description="InsightMatches 플랫폼: 자금 찾기, EU 기관과 컨소시엄 구성, AI로 호라이즌 유럽 제안서 작성."
        canonical="/ko/platform"
        alternates={[
          { hreflang: 'en', href: 'https://www.insightmatches.com/platform' },
          { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/platform' },
          { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/platform' },
        ]}
      />
      <Navbar />
      <main lang="ko">
        <section className="pt-32 pb-12 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            InsightMatches 플랫폼
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            자금을 찾고, EU 기관과 컨소시엄을 구성하고, 우승하는 제안서를 작성하는 AI 도구.
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

export default KoPlatform;

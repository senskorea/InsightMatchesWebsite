import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';

import { HeroSection } from '../components/HeroSection';

import { ProductFeatures } from '../components/ProductFeatures';
import { ClientLogosMarquee } from '../components/ClientLogosMarquee';
import { FunnelSteps } from '../components/FunnelSteps';
import { ProgrammesStrip } from '../components/ProgrammesStrip';

import { BentoGrid } from '../components/BentoGrid';
import { HardStats } from '../components/HardStats';
import { PricingSection } from '../components/PricingSection';

import { EnhancedCTA } from '../components/EnhancedCTA';
import { Footer } from '../components/Footer';
import { useTranslation } from '../hooks/useTranslation';
import { SEO } from '../components/SEO';
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
  sensServiceSchema,
} from '../lib/seo-schemas';

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('heroTitle');
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="InsightMatches — AI for Horizon Europe & EU-Korea R&D Partners"
        description="Find Horizon Europe consortium partners and EU R&D funding opportunities with AI matchmaking built for Korean researchers, universities and SMEs."
        canonical="/"
        alternates={[
          { hreflang: 'en', href: 'https://www.insightmatches.com/' },
          { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/' },
          { hreflang: 'x-default', href: 'https://www.insightmatches.com/' },
        ]}
        jsonLd={[organizationSchema, softwareApplicationSchema, websiteSchema, sensServiceSchema]}
      />
      <Navbar />
      
      {/* 1. Hero: The Main Promise */}
      <HeroSection />

      {/* 2. Social proof — named client logos */}
      <ClientLogosMarquee />

      {/* 2b. Programmes we cover */}
      <ProgrammesStrip />

      {/* 3. How it works — 3-step funnel */}
      <div id="how-it-works">
        <FunnelSteps />
      </div>

      {/* 4. Product in Action (Top Features) */}
      <ProductFeatures />


      {/* 5. Bento Box Grid (Everything Else) */}
      <div id="features">
        <BentoGrid />
      </div>


      {/* 6. Pricing */}
      <PricingSection />

      {/* 7. Hard Stats Closer - hidden until data is updated */}
      {/* <HardStats /> */}
      
      {/* 8. Final CTA */}
      <EnhancedCTA />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default Index;

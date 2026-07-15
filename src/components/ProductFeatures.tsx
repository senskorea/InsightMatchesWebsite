import React from 'react';
import { Radar, Users, FileText, Sparkles, ArrowRight, Lightbulb } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const FeatureListItem = ({ item, colorClass }: { item: string; colorClass: string }) => (
  <li className="flex items-center gap-3 text-foreground">
    <div className={`w-5 h-5 rounded-full ${colorClass} flex items-center justify-center`}>
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          colorClass.includes('mint')
            ? 'bg-mint-500'
            : colorClass.includes('lavender')
              ? 'bg-lavender-500'
              : 'bg-gold-500'
        }`}
      />
    </div>
    {item}
  </li>
);

export const ProductFeatures = () => {
  const { t } = useTranslation();

  const discoveryFeatures = [t('discoveryFeature1'), t('discoveryFeature2'), t('discoveryFeature3')];
  const consortiumFeatures = [t('consortiumFeature1'), t('consortiumFeature2'), t('consortiumFeature3')];
  const draftingFeatures = [t('draftingFeature1'), t('draftingFeature2'), t('draftingFeature3')];

  return (
    <section id="product-demo" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1: Discovery Engine - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-mint-50 to-lavender-50 dark:from-charcoal-800 dark:to-charcoal-900 rounded-2xl p-3 sm:p-4 border border-border overflow-hidden">
              <video
                src="/videos/find-funds.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Find funds demo"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint-100 dark:bg-mint-900/30 text-mint-700 dark:text-mint-300 text-xs font-medium mb-4">
              <Radar className="w-3.5 h-3.5" />
              {t('smartDiscovery')}
            </div>
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              {t('findFundingTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('findFundingDesc')}
            </p>
            <ul className="space-y-3 mb-8">
              {discoveryFeatures.map((item) => (
                <FeatureListItem key={item} item={item} colorClass="bg-mint-100 dark:bg-mint-900/30" />
              ))}
            </ul>
            <a href="#features" className="inline-flex items-center gap-2 text-mint-600 dark:text-mint-400 font-medium hover:gap-3 transition-all">
              {t('exploreDiscovery')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature 1.5: Conceptualize Your Idea */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender-100 dark:bg-lavender-900/30 text-lavender-700 dark:text-lavender-300 text-xs font-medium mb-4">
              <Lightbulb className="w-3.5 h-3.5" />
              Idea Conceptualization
            </div>
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Shape your idea into a fundable concept
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Turn a rough research direction into a clear, call-aligned project narrative. Our AI helps you frame objectives, impact, and methodology that resonate with EU evaluators.
            </p>
            <ul className="space-y-3 mb-8">
              <FeatureListItem item="Map your idea to the right Horizon Europe call" colorClass="bg-lavender-100 dark:bg-lavender-900/30" />
              <FeatureListItem item="Refine objectives, impact, and methodology" colorClass="bg-lavender-100 dark:bg-lavender-900/30" />
              <FeatureListItem item="Get evaluator-ready concept notes in minutes" colorClass="bg-lavender-100 dark:bg-lavender-900/30" />
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lavender-50 to-mint-50 dark:from-charcoal-800 dark:to-charcoal-900 rounded-2xl p-3 sm:p-4 border border-border overflow-hidden">
              <video
                src="/videos/get-idea.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Conceptualize your idea demo"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Consortium Builder - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender-100 dark:bg-lavender-900/30 text-lavender-700 dark:text-lavender-300 text-xs font-medium mb-4">
              <Users className="w-3.5 h-3.5" />
              {t('consortiumBuilder')}
            </div>
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              {t('buildTeamTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('buildTeamDesc')}
            </p>
            <ul className="space-y-3 mb-8">
              {consortiumFeatures.map((item) => (
                <FeatureListItem key={item} item={item} colorClass="bg-lavender-100 dark:bg-lavender-900/30" />
              ))}
            </ul>
            <a href="#features" className="inline-flex items-center gap-2 text-lavender-600 dark:text-lavender-400 font-medium hover:gap-3 transition-all">
              {t('explorePartners')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lavender-50 to-mint-50 dark:from-charcoal-800 dark:to-charcoal-900 rounded-2xl p-3 sm:p-4 border border-border overflow-hidden">
              <video
                src="/videos/make-the-team.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Build your dream team demo"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Feature 3: AI Drafting - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gold-50 to-mint-50 dark:from-charcoal-800 dark:to-charcoal-900 rounded-2xl p-3 sm:p-4 border border-border overflow-hidden">
              <video
                src="/videos/write-proposal.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Draft winning proposals demo"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 text-xs font-medium mb-4">
              <FileText className="w-3.5 h-3.5" />
              {t('aiDrafting')}
            </div>
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              {t('draftProposalsTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('draftProposalsDesc')}
            </p>
            <ul className="space-y-3 mb-8">
              {draftingFeatures.map((item) => (
                <FeatureListItem key={item} item={item} colorClass="bg-gold-100 dark:bg-gold-900/30" />
              ))}
            </ul>
            <a href="#features" className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 font-medium hover:gap-3 transition-all">
              {t('exploreAIDrafting')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Check, Rocket, Building2, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { cn } from '@/lib/utils';
import { formatTierPrice } from '@/lib/pricing';


const tierStyles = {
  starter: {
    topBorder: 'border-t-sky-400 dark:border-t-sky-500',
    iconBg: 'bg-sky-50 dark:bg-sky-900/20',
    iconBorder: 'border-sky-200 dark:border-sky-800',
    iconText: 'text-sky-600 dark:text-sky-400',
    check: 'text-sky-500 dark:text-sky-400',
    cta:
      'bg-secondary border border-sky-400 text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-900/20',
  },
  pro: {
    topBorder: 'border-t-slate-500 dark:border-t-slate-400',
    iconBg: 'bg-slate-100/60 dark:bg-slate-900/30',
    iconBorder: 'border-slate-300 dark:border-slate-700',
    iconText: 'text-slate-600 dark:text-slate-400',
    check: 'text-slate-500 dark:text-slate-400',
    cta: 'bg-primary hover:opacity-90 text-primary-foreground shadow-lg',
  },
  enterprise: {
    topBorder: 'border-t-gold-400 dark:border-t-gold-500',
    iconBg: 'bg-gold-50 dark:bg-gold-900/20',
    iconBorder: 'border-gold-200 dark:border-gold-800',
    iconText: 'text-gold-600 dark:text-gold-400',
    check: 'text-gold-500 dark:text-gold-400',
    cta:
      'bg-secondary border border-gold-400 text-gold-700 dark:text-gold-300 hover:bg-gold-50 dark:hover:bg-gold-900/20',
  },
};

export const PricingSection = () => {
  const { t, currentLanguage } = useTranslation();

  const proPrice = formatTierPrice('pro', currentLanguage);
  const entPrice = formatTierPrice('enterprise', currentLanguage);

  const tiers = [
    {
      name: t('pricingFreeTier'),
      description: t('pricingFreeTierDesc'),
      price: t('pricingFreeTierPrice'),
      priceSecondary: '',
      subtitle: t('pricingFreeTierSubtitle'),
      note: t('pricingFreeTierNote'),
      features: [
        t('pricingFreeTierFeature1'),
        t('pricingFreeTierFeature2'),
        t('pricingFreeTierFeature3'),
        t('pricingFreeTierFeature4'),
      ],
      cta: t('pricingFreeTierCta'),
      icon: Users,
      highlighted: false,
      theme: tierStyles.starter,
    },
    {
      name: t('pricingProTier'),
      description: t('pricingProTierDesc'),
      price: proPrice.primary,
      priceSecondary: proPrice.secondary,
      subtitle: t('pricingProTierSubtitle'),
      note: '',
      features: [
        t('pricingProTierFeature1'),
        t('pricingProTierFeature2'),
        t('pricingProTierFeature3'),
        t('pricingProTierFeature4'),
      ],
      cta: t('pricingProTierCta'),
      icon: Rocket,
      highlighted: true,
      theme: tierStyles.pro,
    },
    {
      name: t('pricingEnterpriseTier'),
      description: t('pricingEnterpriseTierDesc'),
      price: entPrice.primary,
      priceSecondary: entPrice.secondary,
      subtitle: t('pricingEnterpriseTierSubtitle'),
      note: '',
      features: [
        t('pricingEnterpriseTierFeature1'),
        t('pricingEnterpriseTierFeature2'),
        t('pricingEnterpriseTierFeature3'),
        t('pricingEnterpriseTierFeature4'),
      ],
      cta: t('pricingEnterpriseTierCta'),
      icon: Building2,
      highlighted: false,
      theme: tierStyles.enterprise,
    },
  ];


  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('pricingTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'bg-card rounded-xl shadow-sm p-6 lg:p-8 flex flex-col h-full transition-all duration-300 border-t-4',
                tier.theme.topBorder,
                tier.highlighted
                  ? 'border-2 border-slate-200 dark:border-slate-800 relative md:scale-[1.02] lg:scale-105 hover:shadow-xl bg-gradient-to-b from-slate-50/60 via-card to-card dark:from-slate-950/25 dark:via-card dark:to-card'
                  : 'border border-border hover:shadow-lg'
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-slate-500 text-slate-50 font-semibold text-xs rounded-full shadow-lg">
                  {t('pricingRecommended')}
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div
                  className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center border',
                    tier.theme.iconBg,
                    tier.theme.iconBorder
                  )}
                >
                  <tier.icon
                    className={cn('w-5 h-5', tier.theme.iconText)}
                  />
                </div>
                <h3 className="text-2xl text-foreground font-bold">{tier.name}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl lg:text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.priceSecondary && (
                    <span className="text-sm text-muted-foreground">
                      {tier.priceSecondary}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-3">{tier.subtitle}</p>
              </div>

              <div className="h-px bg-border w-full mb-8"></div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className={cn('mt-0.5 w-5 h-5 flex-shrink-0', tier.theme.check)} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="/request-demo"
                  className={cn(
                    'w-full py-4 rounded-lg font-semibold text-sm transition-all duration-200 text-center block',
                    tier.theme.cta
                  )}
                >
                  {tier.cta}
                </a>
                {tier.note && (
                  <p className="mt-3 text-xs text-muted-foreground text-center">
                    {tier.note}
                  </p>
                )}
              </div>

            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          {t('pricingCtaNote')}
        </p>
      </div>
    </section>
  );
};

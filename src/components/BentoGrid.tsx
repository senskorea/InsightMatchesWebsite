import React from 'react';
import { Key, Shield, Download, Filter, Users, Zap } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const colorClasses = {
  mint: {
    bg: 'bg-mint-100 dark:bg-mint-900/30',
    icon: 'text-mint-600 dark:text-mint-400',
    border: 'hover:border-mint-300 dark:hover:border-mint-700',
  },
  lavender: {
    bg: 'bg-lavender-100 dark:bg-lavender-900/30',
    icon: 'text-lavender-600 dark:text-lavender-400',
    border: 'hover:border-lavender-300 dark:hover:border-lavender-700',
  },
  gold: {
    bg: 'bg-gold-100 dark:bg-gold-900/30',
    icon: 'text-gold-600 dark:text-gold-400',
    border: 'hover:border-gold-300 dark:hover:border-gold-700',
  },
};

export const BentoGrid = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: t('velocityTitle'),
      description: t('velocityDesc'),
      color: 'mint' as const,
    },
    {
      icon: Shield,
      title: t('complianceTitle'),
      description: t('complianceDesc'),
      color: 'lavender' as const,
    },
    {
      icon: Key,
      title: t('apiTitle'),
      description: t('apiDesc'),
      color: 'gold' as const,
    },
    {
      icon: Download,
      title: t('exportTitle'),
      description: t('exportDesc'),
      color: 'mint' as const,
    },
    {
      icon: Filter,
      title: t('filterTitle'),
      description: t('filterDesc'),
      color: 'lavender' as const,
    },
    {
      icon: Users,
      title: t('teamTitle'),
      description: t('teamDesc'),
      color: 'gold' as const,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {t('bentoTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('bentoSubtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const colors = colorClasses[feature.color];
            return (
              <div
                key={feature.title}
                className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${colors.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="font-inter text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

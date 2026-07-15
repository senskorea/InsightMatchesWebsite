import React from 'react';
import { FileText, Sparkles, FileCheck2, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const FunnelSteps: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: FileText,
      title: t('funnelStep1Title'),
      desc: t('funnelStep1Desc'),
    },
    {
      icon: Sparkles,
      title: t('funnelStep2Title'),
      desc: t('funnelStep2Desc'),
    },
    {
      icon: FileCheck2,
      title: t('funnelStep3Title'),
      desc: t('funnelStep3Desc'),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-mint-600 dark:text-mint-400 mb-3">
            {t('funnelEyebrow')}
          </p>
          <h2 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t('funnelTitle')}
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <li
                key={idx}
                className="relative rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-mint-500 to-lavender-500 text-white font-bold text-lg shadow-md">
                    {idx + 1}
                  </div>
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-6 h-6 text-muted-foreground/50" />
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-12 text-center">
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-foreground dark:bg-white dark:text-charcoal-900 hover:opacity-90 shadow-lg transition-all duration-300"
          >
            {t('ctaSeeHowItWorks')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

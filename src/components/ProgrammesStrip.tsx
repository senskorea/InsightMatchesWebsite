import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const ProgrammesStrip: React.FC = () => {
  const { t } = useTranslation();
  const programmes = [
    { label: t('programmeHorizon'), color: 'mint' as const },
    { label: t('programmeEIC'), color: 'lavender' as const },
    { label: t('programmeErasmus'), color: 'gold' as const },
    { label: t('programmeInterreg'), color: 'mint' as const },
  ];
  const colorMap = {
    mint: 'border-mint-300 dark:border-mint-700 text-mint-700 dark:text-mint-300 bg-mint-50/60 dark:bg-mint-900/20',
    lavender: 'border-lavender-300 dark:border-lavender-700 text-lavender-700 dark:text-lavender-300 bg-lavender-50/60 dark:bg-lavender-900/20',
    gold: 'border-gold-300 dark:border-gold-700 text-gold-700 dark:text-gold-300 bg-gold-50/60 dark:bg-gold-900/20',
  };
  return (
    <section className="py-10 lg:py-14 bg-background border-y border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
          {t('programmesEyebrow')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {programmes.map((p) => (
            <span
              key={p.label}
              className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium ${colorMap[p.color]}`}
            >
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

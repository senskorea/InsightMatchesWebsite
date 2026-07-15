import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const ProgrammesStrip: React.FC = () => {
  const { t } = useTranslation();
  const programmes = [
    { label: t('programmeHorizon'), color: 'sky' as const },
    { label: t('programmeEIC'), color: 'slate' as const },
    { label: t('programmeErasmus'), color: 'gold' as const },
    { label: t('programmeInterreg'), color: 'sky' as const },
  ];
  const colorMap = {
    sky: 'border-sky-300 dark:border-sky-700 text-sky-700 dark:text-sky-300 bg-sky-50/60 dark:bg-sky-900/20',
    slate: 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50/60 dark:bg-slate-900/20',
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

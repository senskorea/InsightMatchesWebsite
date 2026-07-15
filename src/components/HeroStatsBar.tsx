import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const HeroStatsBar: React.FC = () => {
  const { t } = useTranslation();
  const stats = [
    t('statPipeline'),
    t('statSuccessRate'),
    t('statWaitlist'),
    t('statPartners'),
  ];
  return (
    <div className="mt-10 mx-auto max-w-4xl">
      <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
          {stats.map((s, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-slate-500" />
              <span className="font-medium text-foreground/80">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

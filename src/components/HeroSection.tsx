import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { MockupInterface } from './MockupInterface';
import { HeroStatsBar } from './HeroStatsBar';


export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/30 via-background to-background dark:from-slate-900/50 dark:via-background" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 animate-fade-in">
          {/* Audience badge — Korean deep-tech */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
            {t('heroBadge')}
          </div>

          {/* Result-focused headline — single primary framing */}
          <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">{t('heroHeadline1')}</span>
            <span className="bg-gradient-to-r from-sky-500 via-sky-400 to-slate-500 bg-clip-text text-transparent">
              {t('heroHeadline2')}
            </span>
          </h1>

          {/* Sub-headline — outcome + programme breadth */}
          <p className="font-inter text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>

          {/* Demoted secondary audience line */}
          <p className="text-sm text-muted-foreground/70 mb-8">
            {t('heroSecondaryLine')}
          </p>

          {/* Single primary CTA + low-emphasis secondary scroll link */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/request-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-foreground dark:bg-white dark:text-slate-900 hover:opacity-90 shadow-lg transition-all duration-300 button-hover"
            >
              {t('applyEarlyAccess')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('seeHowItWorks')} →
            </a>
          </div>

          {/* Hard stats proof bar */}
          <HeroStatsBar />
        </div>



        {/* Hero Dashboard Mockup with Shadow */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
          {/* Glow effect behind mockup */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-sky-400/40 to-slate-400/40 rounded-full" />
          </div>
          
          <MockupInterface />
        </div>
      </div>
    </section>
  );
};

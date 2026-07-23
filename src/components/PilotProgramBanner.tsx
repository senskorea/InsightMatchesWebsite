import React from 'react';
import { Link } from "react-router-dom";
import { Calendar, Lightbulb, Target } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const PilotProgramBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-inter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#6B7FE8] to-[#8B9FFF] bg-clip-text text-transparent">
              {t('pilotTitle')}
            </span>
            <br />
            <span className="text-foreground">{t('pilotSubtitle')}</span>
            <span className="inline-block ml-3 animate-bounce-gentle">🚀</span>
          </h1>
          <p className="font-inter text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('pilotDescription')}
          </p>
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Card 1: At a Glance */}
          <div className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900/30 dark:to-sky-800/30">
                <Calendar className="w-6 h-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="font-inter text-2xl font-bold text-foreground">{t('atAGlance')}</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('dates')}</p>
                    <p className="text-muted-foreground">{t('pilotDates')}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('forLabel')}</p>
                    <p className="text-muted-foreground">{t('pilotFor')}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('cost')}</p>
                    <p className="text-muted-foreground font-bold">{t('pilotCost')}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 2: What You'll Experience */}
          <div className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900/30 dark:to-slate-800/30">
                <Lightbulb className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="font-inter text-2xl font-bold text-foreground">{t('whatYoullExperience')}</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">🔭 {t('smartFundDiscovery')}</p>
                    <p className="text-muted-foreground">{t('smartFundDiscoveryDesc')}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">🤝 {t('instantConsortium')}</p>
                    <p className="text-muted-foreground">{t('instantConsortiumDesc')}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">📝 {t('grantCoPilot')}</p>
                    <p className="text-muted-foreground">{t('grantCoPilotDesc')}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 3: Our Pilot Goals */}
          <div className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-sky-100 to-slate-100 dark:from-sky-900/30 dark:to-slate-900/30">
                <Target className="w-6 h-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="font-inter text-2xl font-bold text-foreground">{t('ourPilotGoals')}</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('elevateUserExperience')}</p>
                    <p className="text-muted-foreground">{t('elevateUserExperienceDesc')}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('validateEfficiency')}</p>
                    <p className="text-muted-foreground">{t('validateEfficiencyDesc')}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('buildTheNetwork')}</p>
                    <p className="text-muted-foreground">{t('buildTheNetworkDesc')}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Footer Button */}
        <div className="text-center animate-fade-in">
          <Link to="/request-demo"
            className="inline-flex items-center justify-center px-10 py-5 rounded-lg font-bold font-inter text-lg bg-gradient-to-r from-sky-500 to-slate-500 text-white shadow-2xl hover:shadow-glow transition-all duration-300 button-hover focus-sky"
          >
            <span className="mr-2">✨</span>
            {t('joinPilotWaitlist')}
          </Link>
        </div>
      </div>
    </section>
  );
};

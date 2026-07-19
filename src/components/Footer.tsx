import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Logo variant="compact" />
            <p className="mt-4 text-muted-foreground text-sm max-w-md">
              {t('heroSubtitle')}
            </p>
            <div className="mt-6">
              <LanguageSelector />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('about')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/about/gep" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('genderEqualityPlan')}
                </Link>
              </li>
              <li>
                <Link to="/eu-pic" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('legalInformation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('resources')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dissemination" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('dissemination')}
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('features')}
                </Link>
              </li>

              <li>
                <Link to="/education" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('educationTitle')}
                </Link>
              </li>
              <li>
                <Link to="/referral" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  💚 Refer & Earn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} InsightMatches. {t('allRightsReserved')}
          </p>
          <a
            href="/request-demo"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-foreground dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
          >
            {t('applyEarlyAccess')}
          </a>
        </div>

      </div>
    </footer>
  );
};

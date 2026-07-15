import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const EnhancedCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mint-500/10 via-lavender-500/5 to-mint-400/10 dark:from-mint-900/20 dark:via-lavender-900/10 dark:to-mint-800/20" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glassmorphic p-10 sm:p-12 rounded-3xl space-y-8 hover:shadow-2xl transition-all duration-500">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
              {t('ctaHeadline')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
              {t('ctaParagraphNew')}
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="/request-demo"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-mint-500 to-lavender-500 shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              {t('applyEarlyAccess')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('ctaSecondaryNote')}{' '}
            <a
              href="mailto:info@insightmatches.com"
              className="text-mint-600 dark:text-mint-400 hover:underline font-medium"
            >
              info@insightmatches.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

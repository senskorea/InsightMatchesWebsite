
import React from 'react';
import { Navbar } from '../components/Navbar';
import { useTranslation } from '../hooks/useTranslation';

const NetworkBusan = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-slate-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <Navbar />
      
      <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-tight">
              {t('cafeTitle')}
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* What */}
            <div className="glassmorphic p-8 rounded-2xl">
              <h2 className="text-2xl font-bold gradient-text mb-4">
                {t('cafeWhat')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('cafeWhatDescription')}
              </p>
            </div>

            {/* When */}
            <div className="glassmorphic p-8 rounded-2xl">
              <h2 className="text-2xl font-bold gradient-text mb-4">
                {t('cafeWhen')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('cafeWhenDescription')}
              </p>
            </div>

            {/* Where */}
            <div className="glassmorphic p-8 rounded-2xl">
              <h2 className="text-2xl font-bold gradient-text mb-4">
                {t('cafeWhere')}
              </h2>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-center"
                >
                  {t('cafeKakaoMaps')}
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors text-center"
                >
                  {t('cafeGoogleMaps')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkBusan;

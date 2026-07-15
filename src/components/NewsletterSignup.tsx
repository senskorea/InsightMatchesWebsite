import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const NewsletterSignup = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Load Tally embed script
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = () => {
        if (typeof window !== 'undefined' && (window as any).Tally) {
          (window as any).Tally.loadEmbeds();
        } else {
          // Fallback: manually load iframes
          document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: any) => {
            iframe.src = iframe.dataset.tallySrc;
          });
        }
      };
      script.onerror = () => {
        // Fallback on error
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: any) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      };
      document.body.appendChild(script);
    } else {
      // Script already exists, just load embeds
      if (typeof window !== 'undefined' && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-mint-50/50 to-lavender-50/50 dark:from-charcoal-800 dark:to-charcoal-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get the latest insights on European research funding opportunities delivered straight to your inbox.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <iframe 
            data-tally-src="https://tally.so/embed/w4006A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="277" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Newsletter sign-up"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
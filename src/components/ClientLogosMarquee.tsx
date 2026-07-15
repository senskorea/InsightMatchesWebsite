import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

type ClientLogo = { name: string; src: string };

const logos: ClientLogo[] = [
  { name: 'Kcell', src: '/clients/kcell.png' },
  { name: 'University of Latvia', src: '/clients/latvia.png' },
  { name: 'Latvijas Universitāte', src: '/clients/latvia_university.png' },
  { name: 'Riga Technical University', src: '/clients/riga.png' },
  { name: 'HAII Corp', src: '/clients/haii.png' },
  { name: 'Cogito', src: '/clients/cogito.png' },
  { name: 'Changwon National University', src: '/clients/changwon.png' },
  { name: 'STMicroelectronics', src: '/clients/stmicro.png' },
  { name: 'SpeakDuo', src: '/clients/speakduo.png' },
  { name: 'Institut Pasteur', src: '/clients/pasteur.png' },
];

export const ClientLogosMarquee: React.FC = () => {
  const { t } = useTranslation();

  if (logos.length === 0) return null;

  const loop = [...logos, ...logos];

  return (
    <section className="py-12 lg:py-16 border-y border-border/40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium tracking-wide uppercase">
          {t('clientsMarqueeTitle')}
        </p>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div
            className="flex w-max items-center gap-6 py-6 group-hover:[animation-play-state:paused]"
            style={{ animation: 'scroll 50s linear infinite' }}
          >
            {loop.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="relative flex-shrink-0 flex flex-col items-center justify-center h-28 md:h-32 w-44 md:w-52 rounded-xl bg-[#ececec] px-3 py-3 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-125 hover:-translate-y-3 hover:shadow-2xl hover:z-10"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 md:max-h-14 max-w-[80%] object-contain pointer-events-none"
                  loading="lazy"
                />
                <span className="mt-2 text-[11px] md:text-xs font-medium text-slate-700 text-center leading-tight line-clamp-2 pointer-events-none">
                  {logo.name}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

const logos = [
  { name: 'Horizon Europe', initial: 'HE' },
  { name: 'Erasmus+', initial: 'E+' },
  { name: 'EIC Accelerator', initial: 'EIC' },
  { name: 'Marie Curie', initial: 'MC' },
  { name: 'ERC', initial: 'ERC' },
  { name: 'Eurostars', initial: 'ES' },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium tracking-wide uppercase">
          Trusted by researchers applying to
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">{logo.initial}</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground hidden sm:inline">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

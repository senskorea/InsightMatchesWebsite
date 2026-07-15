
import React from 'react';

interface LogoProps {
  variant?: 'standard' | 'compact' | 'mini';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'standard', className = '' }) => {
  const sizes = {
    standard: {
      gap: 'gap-3.5',
      iconSize: 'w-12 h-12',
      textSize: 'text-2xl',
      iconRadius: 'rounded-xl',
      iconBorder: 'w-7 h-7 border-2',
      iconDot: 'w-3 h-3'
    },
    compact: {
      gap: 'gap-2.5',
      iconSize: 'w-10 h-10',
      textSize: 'text-lg',
      iconRadius: 'rounded-lg',
      iconBorder: 'w-6 h-6 border-2',
      iconDot: 'w-2.5 h-2.5'
    },
    mini: {
      gap: 'gap-2',
      iconSize: 'w-8 h-8',
      textSize: 'text-base',
      iconRadius: 'rounded-md',
      iconBorder: 'w-5 h-5 border-2',
      iconDot: 'w-2 h-2'
    }
  };

  const config = sizes[variant];

  return (
    <div className={`inline-flex items-center ${config.gap} transition-all duration-300 hover:-translate-y-0.5 ${className}`}>
      <div className={`
        ${config.iconSize} ${config.iconRadius}
        bg-charcoal-900 dark:bg-charcoal-800
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        transition-all duration-300 relative overflow-hidden
      `}>
        {/* Outer circle border */}
        <div className={`
          ${config.iconBorder}
          rounded-full border-sky-500/60
          absolute
        `}></div>
        {/* Inner dot */}
        <div className={`
          ${config.iconDot}
          bg-sky-500 rounded-full
          shadow-lg shadow-sky-500/50
          absolute
        `}></div>
      </div>
      {variant !== 'mini' && (
        <div className={`
          font-bold ${config.textSize}
          tracking-tight whitespace-nowrap
          text-charcoal-900 dark:text-white
        `}>
          Insight<span className="text-sky-500">Matches</span>
        </div>
      )}
    </div>
  );
};

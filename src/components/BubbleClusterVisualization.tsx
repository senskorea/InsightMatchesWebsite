
import React from 'react';

export const BubbleClusterVisualization: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Central Hub - Main opportunity */}
      <div className="relative z-20 w-20 h-20 rounded-full bg-gradient-to-br from-mint-400 to-lavender-500 shadow-glow animate-zoom flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-primary-foreground/40 animate-pulse"></div>
      </div>

      {/* Primary Research Bubbles - Large opportunities */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Horizon Europe bubble */}
        <div 
          className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-lavender-400 to-mint-400 shadow-glow-lavender animate-float opacity-90"
          style={{
            left: '25%',
            top: '20%',
            animationDelay: '0s',
            animationDuration: '6s'
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-primary-foreground/50"></div>
          </div>
        </div>

        {/* Digital Innovation bubble */}
        <div 
          className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-mint-500 to-gold-400 shadow-glow animate-float opacity-85"
          style={{
            right: '20%',
            top: '30%',
            animationDelay: '1s',
            animationDuration: '7s'
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary-foreground/50"></div>
          </div>
        </div>

        {/* Climate Research bubble */}
        <div 
          className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-lavender-500 shadow-glow animate-float opacity-80"
          style={{
            left: '15%',
            bottom: '25%',
            animationDelay: '2s',
            animationDuration: '5s'
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary-foreground/50"></div>
          </div>
        </div>

        {/* Health Innovation bubble */}
        <div 
          className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-lavender-400 to-mint-500 shadow-glow-lavender animate-float opacity-75"
          style={{
            right: '25%',
            bottom: '20%',
            animationDelay: '1.5s',
            animationDuration: '6.5s'
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary-foreground/50"></div>
          </div>
        </div>
      </div>

      {/* Secondary Research Bubbles - Medium opportunities */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`secondary-${i}`}
            className={`
              absolute rounded-full animate-float
              ${i % 3 === 0 ? 'bg-gradient-to-br from-mint-300 to-mint-500' : 
                i % 3 === 1 ? 'bg-gradient-to-br from-lavender-300 to-lavender-500' : 
                'bg-gradient-to-br from-gold-300 to-gold-500'}
              ${i % 2 === 0 ? 'w-8 h-8' : 'w-6 h-6'}
              opacity-70 shadow-sm
            `}
            style={{
              left: `${15 + (i * 45) % 70}%`,
              top: `${20 + (i * 37) % 60}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + (i % 3)}s`
            }}
          >
            <div className="w-full h-full rounded-full border border-white/20"></div>
          </div>
        ))}
      </div>

      {/* Micro Bubbles - Small opportunities */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`micro-${i}`}
            className={`
              absolute w-3 h-3 rounded-full animate-float opacity-50
              ${i % 4 === 0 ? 'bg-mint-400' : 
                i % 4 === 1 ? 'bg-lavender-400' : 
                i % 4 === 2 ? 'bg-gold-400' : 'bg-mint-300'}
            `}
            style={{
              left: `${10 + (i * 23) % 80}%`,
              top: `${15 + (i * 31) % 70}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 2)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Connection Lines - Animated pathways */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full absolute" viewBox="0 0 400 400">
          {/* Central to primary connections */}
          <line
            x1="200" y1="200"
            x2="100" y2="80"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
            className="animate-pulse"
          />
          <line
            x1="200" y1="200"
            x2="320" y2="120"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <line
            x1="200" y1="200"
            x2="60" y2="300"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <line
            x1="200" y1="200"
            x2="300" y2="320"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
            className="animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#73c1a0" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#9595f2" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-mint-100/20 via-transparent to-lavender-100/20 dark:from-mint-900/10 dark:via-transparent dark:to-lavender-900/10 animate-pulse-slow"></div>
    </div>
  );
};

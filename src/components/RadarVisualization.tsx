
import React from 'react';

export const RadarVisualization: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 border border-mint-400/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute w-48 h-48 border border-lavender-400/30 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-32 h-32 border border-mint-500/40 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Radar Sweep */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full relative overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-mint-500 to-transparent origin-left animate-radar-sweep"
            style={{ transformOrigin: '0 50%' }}
          ></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-2 h-2 rounded-full 
              ${i % 3 === 0 ? 'bg-mint-400' : i % 3 === 1 ? 'bg-lavender-400' : 'bg-gold-400'}
              animate-float
            `}
            style={{
              left: `${20 + (i * 60) % 80}%`,
              top: `${15 + (i * 47) % 70}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Central Hub */}
      <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-mint-400 to-lavender-500 shadow-glow animate-zoom flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-white/30"></div>
      </div>
    </div>
  );
};

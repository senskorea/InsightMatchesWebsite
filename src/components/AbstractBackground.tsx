
import React from 'react';

export const AbstractBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-gradient-radial from-sky-400/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-radial from-slate-400/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-radial from-gold-400/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(115, 193, 160, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(115, 193, 160, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#73c1a0" stopOpacity="0.2"/>
            <stop offset="50%" stopColor="#9595f2" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#73c1a0" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <path
          d="M100,300 Q300,100 500,300 T900,300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse-slow"
        />
        <path
          d="M200,500 Q400,200 600,500 T1000,500"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
};


import React from 'react';
import { Globe, Users, Link, CheckCircle2, ArrowRight } from 'lucide-react';

interface ScientistIllustrationProps {
  className?: string;
}

export const ScientistIllustration: React.FC<ScientistIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-full max-w-sm">
        {/* Partner Network Visualization Mockup */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-mint-500 to-lavender-500 p-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <h3 className="text-white font-semibold text-sm">Partner Network</h3>
            </div>
          </div>
          
          {/* Network Visualization */}
          <div className="p-6 relative">
            {/* Central Node (Your Organization) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-mint-500 to-lavender-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">YOU</span>
              </div>
            </div>
            
            {/* Partner Nodes */}
            <svg className="w-full h-32" viewBox="0 0 200 120">
              {/* Connection Lines */}
              <g stroke="currentColor" strokeWidth="1" className="text-mint-300 dark:text-mint-600" opacity="0.5">
                <line x1="100" y1="60" x2="60" y2="30" />
                <line x1="100" y1="60" x2="140" y2="30" />
                <line x1="100" y1="60" x2="60" y2="90" />
                <line x1="100" y1="60" x2="140" y2="90" />
                <line x1="100" y1="60" x2="30" y2="60" />
                <line x1="100" y1="60" x2="170" y2="60" />
              </g>
              
              {/* Partner Circles */}
              {[
                { x: 60, y: 30, label: 'FR' },
                { x: 140, y: 30, label: 'DE' },
                { x: 60, y: 90, label: 'IT' },
                { x: 140, y: 90, label: 'NL' },
                { x: 30, y: 60, label: 'ES' },
                { x: 170, y: 60, label: 'SE' }
              ].map((partner, index) => (
                <g key={index}>
                  <circle 
                    cx={partner.x} 
                    cy={partner.y} 
                    r="12" 
                    className="fill-lavender-200 dark:fill-lavender-800 stroke-lavender-400 dark:stroke-lavender-600" 
                    strokeWidth="2"
                  />
                  <text 
                    x={partner.x} 
                    y={partner.y + 2} 
                    textAnchor="middle" 
                    className="text-xs font-medium fill-lavender-700 dark:fill-lavender-300"
                  >
                    {partner.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          
          {/* Partner List */}
          <div className="px-4 pb-4 space-y-2">
            <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Matched Partners</h4>
            {[
              { name: 'INRIA (France)', expertise: 'AI Research', match: '94%' },
              { name: 'TU Delft (Netherlands)', expertise: 'Engineering', match: '89%' }
            ].map((partner, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <div className="text-xs font-medium text-gray-900 dark:text-white">{partner.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{partner.expertise}</div>
                </div>
                <div className="text-xs font-bold text-mint-600 dark:text-mint-400">{partner.match}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

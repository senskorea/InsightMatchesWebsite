
import React from 'react';
import { TrendingUp, Euro, Calendar, Bell, Target, Award } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface BusinessWomanIllustrationProps {
  className?: string;
}

export const BusinessWomanIllustration: React.FC<BusinessWomanIllustrationProps> = ({ className = '' }) => {
  const { currentLanguage } = useTranslation();
  
  // Dynamic currency based on language
  const currencyDisplay = currentLanguage === 'ko' ? '₩42억' : '€4.2M';
  
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-full max-w-sm">
        {/* Analytics Dashboard Mockup */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-mint-500 to-lavender-500 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-white" />
                <h3 className="text-white font-semibold text-sm">Success Analytics</h3>
              </div>
              <Bell className="w-4 h-4 text-white" />
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-mint-50 dark:bg-mint-900/20 p-3 rounded-lg text-center">
                <Euro className="w-5 h-5 text-mint-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">{currencyDisplay}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Secured Funding</div>
              </div>
              <div className="bg-lavender-50 dark:bg-lavender-900/20 p-3 rounded-lg text-center">
                <Award className="w-5 h-5 text-lavender-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">87%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </div>
            
            {/* Chart Area */}
            <div className="mb-4">
              <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Funding Timeline</h4>
              <div className="h-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-2 relative overflow-hidden">
                {/* Simple line chart visualization */}
                <svg className="w-full h-full" viewBox="0 0 200 40">
                  <polyline
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    points="10,30 50,25 90,15 130,20 170,10 190,8"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  {/* Data points */}
                  {[10, 50, 90, 130, 170, 190].map((x, index) => (
                    <circle key={index} cx={x} cy={[30, 25, 15, 20, 10, 8][index]} r="2" fill="#10b981" />
                  ))}
                </svg>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300">Recent Activity</h4>
              {[
                { action: 'Proposal submitted', time: '2h ago', status: 'success' },
                { action: 'Partner matched', time: '5h ago', status: 'info' },
                { action: 'Call deadline alert', time: '1d ago', status: 'warning' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'info' ? 'bg-mint-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className="text-xs text-gray-900 dark:text-white">{activity.action}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

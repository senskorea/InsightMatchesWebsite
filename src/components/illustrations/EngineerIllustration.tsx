
import React from 'react';
import { Search, Filter, Globe, Zap, Target, Award } from 'lucide-react';

interface EngineerIllustrationProps {
  className?: string;
}

export const EngineerIllustration: React.FC<EngineerIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-full max-w-sm">
        {/* AI Search Interface Mockup */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-slate-500 p-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              <h3 className="text-white font-semibold text-sm">AI Opportunity Finder</h3>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search funding opportunities..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm border-0 focus:ring-2 focus:ring-sky-500"
                value="Digital Innovation Korea"
                readOnly
              />
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          {/* Results */}
          <div className="p-4 space-y-3">
            {[
              { 
                title: 'Digital Industry & Space',
                match: '95%',
                funding: '€2.4M',
                deadline: '45 days',
                color: 'sky'
              },
              { 
                title: 'AI for Manufacturing',
                match: '87%',
                funding: '€1.8M',
                deadline: '62 days',
                color: 'slate'
              },
              { 
                title: 'Climate Tech Innovation',
                match: '76%',
                funding: '€3.2M',
                deadline: '28 days',
                color: 'sky'
              }
            ].map((opportunity, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{opportunity.title}</h4>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    opportunity.color === 'sky' 
                      ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400'
                      : 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400'
                  }`}>
                    {opportunity.match}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {opportunity.funding}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    {opportunity.deadline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

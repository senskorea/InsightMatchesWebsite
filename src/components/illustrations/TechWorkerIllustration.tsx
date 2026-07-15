
import React from 'react';
import { FileText, Edit3, CheckCircle2, Clock, BarChart3, Sparkles } from 'lucide-react';

interface TechWorkerIllustrationProps {
  className?: string;
}

export const TechWorkerIllustration: React.FC<TechWorkerIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-full max-w-sm">
        {/* Proposal Writing Interface Mockup */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-mint-500 to-lavender-500 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-white" />
                <h3 className="text-white font-semibold text-sm">AI Proposal Writer</h3>
              </div>
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600 dark:text-gray-400">Proposal Progress</span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">73%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="h-2 rounded-full bg-gradient-to-r from-mint-500 to-lavender-500" style={{ width: '73%' }}></div>
            </div>
          </div>
          
          {/* Sections */}
          <div className="p-4 space-y-3">
            {[
              { 
                section: 'Executive Summary',
                status: 'complete',
                words: '480/500',
                icon: CheckCircle2,
                color: 'text-green-500'
              },
              { 
                section: 'Technical Approach',
                status: 'writing',
                words: '1,240/2,000',
                icon: Edit3,
                color: 'text-mint-500'
              },
              { 
                section: 'Budget Planning',
                status: 'pending',
                words: '0/800',
                icon: Clock,
                color: 'text-gray-400'
              }
            ].map((section, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <section.icon className={`w-4 h-4 ${section.color}`} />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{section.section}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{section.words} words</div>
                  </div>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  section.status === 'complete' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : section.status === 'writing'
                    ? 'bg-mint-100 text-mint-700 dark:bg-mint-900/30 dark:text-mint-400'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                }`}>
                  {section.status}
                </div>
              </div>
            ))}
          </div>
          
          {/* AI Suggestions */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-3 h-3 text-lavender-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">AI Quality Score</span>
            </div>
            <div className="text-2xl font-bold gradient-text">8.7/10</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Excellent alignment with call objectives</div>
          </div>
        </div>
      </div>
    </div>
  );
};

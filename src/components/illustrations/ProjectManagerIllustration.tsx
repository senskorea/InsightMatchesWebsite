
import React from 'react';
import { Users, Calendar, FileText, CheckCircle2, TrendingUp } from 'lucide-react';

interface ProjectManagerIllustrationProps {
  className?: string;
}

export const ProjectManagerIllustration: React.FC<ProjectManagerIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-full max-w-sm">
        {/* Project Management Dashboard Mockup */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-mint-500 to-lavender-500 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm">Project Dashboard</h3>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-mint-50 dark:bg-mint-900/20 p-3 rounded-lg">
                <Users className="w-4 h-4 text-mint-600 mb-1" />
                <div className="text-xs text-gray-600 dark:text-gray-400">Partners</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">24</div>
              </div>
              <div className="bg-lavender-50 dark:bg-lavender-900/20 p-3 rounded-lg">
                <TrendingUp className="w-4 h-4 text-lavender-600 mb-1" />
                <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">87%</div>
              </div>
            </div>
            
            {/* Project Timeline */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300">Active Projects</h4>
              {[
                { name: 'Horizon Call Analysis', progress: 75, color: 'mint' },
                { name: 'Partner Matching', progress: 45, color: 'lavender' },
                { name: 'Proposal Writing', progress: 90, color: 'mint' }
              ].map((project, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">{project.name}</span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full bg-gradient-to-r ${
                        project.color === 'mint' 
                          ? 'from-mint-400 to-mint-600' 
                          : 'from-lavender-400 to-lavender-600'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

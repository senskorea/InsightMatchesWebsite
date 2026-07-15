import React from 'react';
import { Users, Calculator, Zap, Shield, Sparkles, Globe, ChevronRight } from 'lucide-react';

export const MockupInterface = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Browser Window Frame */}
      <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-slate-900">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1.5 bg-slate-700 rounded-lg text-xs text-slate-300 font-mono">
              app.insightmatches.com/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-950">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-bold text-sm">
                AE
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    Mission Active
                  </span>
                  <span className="text-xs text-slate-400 font-mono">HORIZON-CL4-2025</span>
                </div>
                <p className="text-white font-semibold text-sm mt-1">AERO-2025: AI for Sustainable Aviation</p>
              </div>
            </div>
            <button className="px-4 py-2 text-xs rounded-lg bg-slate-600 text-white hover:bg-slate-500 transition-colors flex items-center gap-1">
              Resume Pipeline
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <Users className="w-5 h-5 text-slate-400 mb-2" />
              <p className="text-xs text-slate-400">Consortium</p>
              <p className="text-2xl font-bold text-white">12</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex -space-x-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-slate-600 border border-slate-500" />
                  ))}
                </div>
                <span className="text-xs text-slate-500">+8</span>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <Calculator className="w-5 h-5 text-gold-400 mb-2" />
              <p className="text-xs text-slate-400">Budget</p>
              <p className="text-2xl font-bold text-white">€4.2M</p>
              <p className="text-xs text-sky-400 mt-1">100% Allocated</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <Zap className="w-5 h-5 text-sky-400 mb-2" />
              <p className="text-xs text-slate-400">Fit Score</p>
              <p className="text-2xl font-bold text-white">94%</p>
              <p className="text-xs text-sky-400 mt-1">High Match</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <Shield className="w-5 h-5 text-orange-400 mb-2" />
              <p className="text-xs text-slate-400">Deadline</p>
              <p className="text-2xl font-bold text-white">14</p>
              <p className="text-xs text-orange-400 mt-1">days left</p>
            </div>
          </div>

          {/* Pipeline Progress */}
          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 font-medium">Proposal Progress</span>
              <span className="text-xs text-sky-400">78% Complete</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-sky-500 to-slate-500 h-2 rounded-full" style={{ width: '78%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI Snippets */}
      {/* Match Card - Top Left */}
      <div className="absolute -top-4 -left-8 z-20 w-56 animate-float-gentle hidden lg:block" style={{ animationDelay: '0.3s' }}>
        <div className="bg-card dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-border">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-semibold text-sm text-foreground">Fraunhofer Institute</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Globe className="w-3 h-3" />
                Germany • RTO
              </div>
            </div>
            <span className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-xs font-bold rounded-full">98%</span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">
            Strong track record in advanced robotics and AI for manufacturing.
          </p>
        </div>
      </div>

      {/* AI Insight - Bottom Right */}
      <div className="absolute -bottom-6 -right-6 z-20 w-56 animate-float-gentle hidden lg:block" style={{ animationDelay: '0.8s' }}>
        <div className="bg-card dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-border">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-500 to-sky-500 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <p className="font-semibold text-sm text-foreground">AI Analysis</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1 ml-8">Win Probability</p>
            </div>
            <span className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-xs font-bold rounded-full">High</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Consortium covers all 4 key capabilities: AI, Ethics, Pilot Testing, Dissemination.
          </p>
        </div>
      </div>
    </div>
  );
};

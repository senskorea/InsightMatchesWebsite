
import React from 'react';
import { Award, Users, Target, BarChart3, Calendar, Clock, Star, Zap } from 'lucide-react';

export const HeroCardsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24">
      {/* Spotlight effect behind cards - improved for light mode */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[900px] h-[450px] rounded-full bg-gradient-radial from-mint-400/20 via-lavender-500/8 to-transparent dark:from-mint-400/30 dark:via-lavender-500/10 blur-3xl opacity-60 dark:opacity-70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="relative flex h-auto md:h-[400px] lg:h-[430px] items-center justify-center">
          {/* Enhanced spotlight and streaks for better light mode visibility */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 w-[510px] h-[320px] sm:w-[570px] sm:h-[370px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[180px] rounded-full bg-gradient-radial from-lavender-400/25 via-mint-500/15 to-transparent dark:from-lavender-400/40 dark:via-mint-500/20 blur-2xl opacity-70 dark:opacity-80"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-[180px] bg-gradient-to-b from-white/40 via-mint-400/25 to-transparent dark:from-white/60 dark:via-mint-400/40 blur-2xl opacity-40 dark:opacity-50 rotate-[14deg]"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-[120px] bg-gradient-to-tr from-lavender-400/40 via-white/15 to-transparent dark:from-lavender-400/60 dark:via-white/20 blur-2xl opacity-30 dark:opacity-40 -rotate-[23deg]"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-[100px] bg-gradient-to-br from-mint-300/30 via-white/8 to-transparent dark:from-mint-300/40 dark:via-white/10 blur-2xl opacity-35 dark:opacity-40 rotate-[28deg]"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[230px] ring-2 ring-mint-400/15 dark:ring-mint-400/20 rounded-2xl blur-md opacity-60 dark:opacity-70"></div>
          </div>
          
          {/* Overlapping Cards with improved light mode styling */}
          <div className="relative z-50 flex flex-row items-start justify-center w-full md:w-[1200px] md:flex-nowrap md:items-center md:justify-center md:h-[270px]">
            {/* Left Success Story Card */}
            <div 
              tabIndex={0}
              className="relative z-10 card-tilt w-[380px] h-[240px] flex flex-col select-none overflow-hidden rounded-2xl p-5 shadow-xl hidden md:flex translate-x-12
                         bg-white/80 dark:bg-gradient-to-br dark:from-mint-600/20 dark:to-lavender-600/20
                         backdrop-blur-xl border border-gray-200/60 dark:border-white/10
                         text-gray-800 dark:text-white"
              style={{ transform: 'rotate(-8deg) translateX(48px)', zIndex: 10 }}
            >
              <div className="flex mb-5 items-center justify-between">
                <span className="text-xs uppercase font-medium tracking-wider text-gray-600 dark:text-white/90">Success Story</span>
                <Award className="w-5 h-5 text-yellow-500 dark:text-yellow-300/80" />
              </div>
              <div className="flex items-center mt-0 mb-5 space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                  className="w-8 h-8 rounded-full object-cover border-2 border-gray-300 dark:border-white/50" 
                  alt="Korean Researcher"
                />
                <div>
                  <span className="block text-gray-900 dark:text-white text-base font-semibold tracking-tight">Dr. Kim Min-jun</span>
                  <span className="block text-xs text-gray-600 dark:text-white/80">AI Research Lead</span>
                </div>
              </div>
              <div className="mt-0 mb-4">
                <span className="block text-gray-900 dark:text-white text-lg font-semibold tracking-tight leading-tight">Horizon Europe Grant</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-0 mb-5">
                <span className="bg-mint-100 dark:bg-white/20 text-mint-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">AI</span>
                <span className="bg-lavender-100 dark:bg-white/20 text-lavender-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">Machine Learning</span>
                <span className="bg-gold-100 dark:bg-white/20 text-gold-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">Funded</span>
              </div>
              <div className="flex items-center justify-between mt-0 mb-5">
                <span className="text-xs text-gray-600 dark:text-white/80 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 inline-block text-gray-500 dark:text-white/70" />
                  24 months
                </span>
                <span className="bg-gradient-to-r from-mint-500 to-lavender-500 text-xs text-white font-medium px-2 py-0.5 rounded-full shadow">Funded</span>
              </div>
              <div className="flex items-center justify-between mt-0">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-300/90" />
                  <span className="text-xs text-yellow-600 dark:text-yellow-100 font-medium truncate">Excellence Award</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-white/70">
                  <Calendar className="w-3.5 h-3.5 text-gray-500 dark:text-white/70" />
                  2024
                </div>
              </div>
            </div>

            {/* Center Featured Partnership Card */}
            <div 
              tabIndex={0}
              className="relative z-20 card-tilt w-[380px] h-[240px] flex flex-col select-none overflow-hidden rounded-2xl p-6 shadow-2xl mx-auto
                         bg-white/85 dark:bg-gradient-to-br dark:from-lavender-600/20 dark:to-mint-600/20
                         backdrop-blur-xl border border-gray-200/70 dark:border-white/10
                         text-gray-800 dark:text-white"
              style={{ transform: 'rotate(-4deg)', zIndex: 20 }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs uppercase font-semibold tracking-wider text-gray-600 dark:text-white/90">Partnership</span>
                <Users className="w-5 h-5 text-mint-500 dark:text-mint-300/80" />
              </div>
              <div className="flex items-center mt-0 mb-5 space-x-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-mint-400 to-lavender-500 flex items-center justify-center border-2 border-white/80 dark:border-white/50 shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-gray-900 dark:text-white text-lg font-semibold tracking-tight">InsightMatches</span>
                  <span className="block text-xs text-gray-600 dark:text-white/80">EU Research Platform</span>
                </div>
              </div>
              <div className="mt-0 mb-4">
                <span className="block text-gray-900 dark:text-white text-xl font-semibold tracking-tight leading-tight">Korean-EU Bridge</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-0 mb-5">
                <span className="bg-mint-100 dark:bg-white/20 text-mint-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">40+ Projects</span>
                <span className="bg-lavender-100 dark:bg-white/20 text-lavender-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">EU Access</span>
                <span className="bg-gold-100 dark:bg-white/20 text-gold-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center justify-between mt-0 mb-5">
                <span className="text-xs text-gray-600 dark:text-white/80 flex items-center gap-1">
                  <BarChart3 className="w-3.5 h-3.5 inline-block text-gray-500 dark:text-white/70" />
                  85% Success Rate
                </span>
                <span className="text-xs font-medium text-white bg-gray-800 dark:bg-white dark:text-charcoal-900 rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shadow">Leading Platform</span>
              </div>
              <div className="flex items-center justify-between mt-0">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-lavender-500 dark:text-lavender-200/90" />
                  <span className="text-xs text-lavender-600 dark:text-lavender-100 font-medium truncate">Innovation Leader</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-white/70">
                  <Calendar className="w-3.5 h-3.5 text-gray-500 dark:text-white/70" />
                  Since 2024
                </div>
              </div>
            </div>

            {/* Right Opportunity Card */}
            <div 
              tabIndex={0}
              className="relative card-tilt w-[380px] h-[240px] flex flex-col select-none overflow-hidden rounded-2xl p-5 shadow-lg hidden md:flex -translate-x-12
                         bg-white/80 dark:bg-gradient-to-br dark:from-lavender-600/20 dark:to-mint-600/20
                         backdrop-blur-xl border border-gray-200/60 dark:border-white/10
                         text-gray-800 dark:text-white"
              style={{ transform: 'rotate(6deg) translateX(-48px)', zIndex: 30 }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs uppercase font-medium tracking-wider text-gray-600 dark:text-white/90">Opportunity</span>
                <Target className="w-5 h-5 text-mint-500 dark:text-mint-300/80" />
              </div>
              <div className="flex mt-0 mb-5 space-x-2 items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lavender-400 to-mint-500 flex items-center justify-center border-2 border-white/80 dark:border-white/50 shadow-lg">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-gray-900 dark:text-white text-base font-semibold tracking-tight">EU Grant Call</span>
                  <span className="block text-xs text-gray-600 dark:text-white/80">Digital Innovation</span>
                </div>
              </div>
              <div className="mt-0 mb-4">
                <span className="block leading-tight text-lg font-semibold text-gray-900 dark:text-white tracking-tight">Next-Gen Technology</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-0 mb-5">
                <span className="bg-mint-100 dark:bg-white/20 text-mint-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">Large Budget</span>
                <span className="bg-lavender-100 dark:bg-white/20 text-lavender-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">Digital Tech</span>
                <span className="bg-gold-100 dark:bg-white/20 text-gold-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">Open Now</span>
              </div>
              <div className="flex items-center justify-between mt-0 mb-5">
                <span className="text-xs text-gray-600 dark:text-white/80 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 inline-block text-gray-500 dark:text-white/70" />
                  Deadline: 60 days
                </span>
                <span className="bg-gradient-to-r from-lavender-500 to-mint-400 text-xs text-white font-medium px-2 py-0.5 rounded-full shadow">Available</span>
              </div>
              <div className="flex items-center justify-between mt-0">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-lavender-500 dark:text-lavender-200" />
                  <span className="text-xs text-lavender-600 dark:text-lavender-100 font-medium truncate">5 Partners Needed</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-white/70">
                  <Calendar className="w-3.5 h-3.5 text-gray-500 dark:text-white/70" />
                  Dec 2024
                </div>
              </div>
            </div>

            {/* Mobile Stack - Enhanced for better responsiveness */}
            <div className="flex flex-col space-y-3 w-full md:hidden px-2">
              <div className="card-tilt w-full h-auto min-h-[200px] flex flex-col select-none overflow-hidden rounded-xl p-4 shadow-xl
                              bg-white/85 dark:bg-gradient-to-br dark:from-lavender-600/20 dark:to-mint-600/20
                              backdrop-blur-xl border border-gray-200/70 dark:border-white/10
                              text-gray-800 dark:text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-600 dark:text-white/90">Partnership</span>
                  <Users className="w-4 h-4 text-mint-500 dark:text-mint-300/80" />
                </div>
                <div className="flex items-center mb-3 space-x-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-mint-400 to-lavender-500 flex items-center justify-center border-2 border-white/80 dark:border-white/50 shadow-lg">
                    <Target className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <span className="block text-gray-900 dark:text-white text-sm font-semibold tracking-tight">InsightMatches</span>
                    <span className="block text-xs text-gray-600 dark:text-white/80">EU Research Platform</span>
                  </div>
                </div>
                <span className="block text-gray-900 dark:text-white text-base font-semibold tracking-tight leading-tight mb-2">Korean-EU Bridge</span>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-mint-100 dark:bg-white/20 text-mint-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">40+ Projects</span>
                  <span className="bg-lavender-100 dark:bg-white/20 text-lavender-700 dark:text-white/90 text-xs px-2 py-0.5 rounded font-medium">EU Access</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-white/80 flex items-center gap-1">
                    <BarChart3 className="w-3 h-3 inline-block text-gray-500 dark:text-white/70" />
                    85% Success Rate
                  </span>
                  <span className="text-xs font-medium text-white bg-gray-800 dark:bg-white dark:text-charcoal-900 rounded-full px-2 py-0.5 shadow">Leading Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

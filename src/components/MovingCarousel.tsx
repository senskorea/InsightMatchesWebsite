
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Users, Target, BarChart3, Calendar, Clock, Star, Zap } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const successStories = [
  {
    clientName: 'Aptero (FR/KR)',
    location: 'Spatial AI & VR Tech',
    tags: ['SaaS Subscriber', 'Consortium Partner'],
    about: 'Successfully matched for Horizon Europe "Extended Reality" calls.',
    whatWeDid: [
      'Status: SaaS Subscriber & Consortium Partner',
      'Result: Successfully matched for Horizon Europe "Extended Reality" calls'
    ],
    color: 'mint' as const,
    type: 'successStory' as const
  },
  {
    clientName: 'WARESA (Global)',
    location: 'Research Collective',
    tags: ['Network Partner', 'MOU'],
    about: 'Providing access to 2,000+ researchers for pilot testing and consortium formation.',
    whatWeDid: [
      'Status: Network Partner (MOU)',
      'Impact: Providing access to 2,000+ researchers for pilot testing and consortium formation'
    ],
    color: 'lavender' as const,
    type: 'partnership' as const
  },
  {
    clientName: 'Digijeunes (FR)',
    location: 'STEM Education & Digital Literacy',
    tags: ['Pilot Partner', 'Erasmus+'],
    about: 'Collaborating on Erasmus+ "Digital Youth" framework proposals.',
    whatWeDid: [
      'Status: Pilot Partner',
      'Result: Collaborating on Erasmus+ "Digital Youth" framework proposals'
    ],
    color: 'mint' as const,
    type: 'successStory' as const
  },
  {
    clientName: 'Haii Corp (KR)',
    location: 'AI Digital Therapeutics',
    tags: ['Pilot Partner', 'Health Cluster'],
    about: 'Leveraging InsightMatches to identify "Health Cluster" opportunities in mental health tech.',
    whatWeDid: [
      'Status: Pilot Partner',
      'Result: Leveraging InsightMatches to identify "Health Cluster" opportunities in mental health tech'
    ],
    color: 'lavender' as const,
    type: 'successStory' as const
  },
  {
    clientName: 'Sociālās Inovācijas Centrs (LV)',
    location: 'Social Innovation & Ecosystem',
    tags: ['Consortium Partner', 'Dissemination'],
    about: 'Expert partner for "Dissemination & Communication" work packages.',
    whatWeDid: [
      'Status: Consortium Partner',
      'Impact: Expert partner for "Dissemination & Communication" work packages'
    ],
    color: 'gold' as const,
    type: 'partnership' as const
  }
];

export const MovingCarousel: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, successStories.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      // Reset to first slide on resize to prevent out-of-bounds
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, maxIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'successStory': return Award;
      case 'partnership': return Users;
      case 'opportunity': return Target;
      default: return Award;
    }
  };

  const getCardTypeText = (type: string) => {
    switch (type) {
      case 'successStory': return t('successStory');
      case 'partnership': return t('partnership');
      case 'opportunity': return t('opportunity');
      default: return t('successStory');
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-header">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-6">
            {t('earlyPartnersTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('earlyPartnersSubtitle')}
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-mint-500 w-8' 
                      : 'bg-gray-400/50 w-2 hover:bg-gray-400/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl -mx-2">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {successStories.map((story, index) => {
                const Icon = getCardIcon(story.type);
                return (
                  <div 
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                  >
                    <div className={`
                      glassmorphic p-4 sm:p-6 rounded-2xl h-full flex flex-col
                      border-l-4 ${
                        story.color === 'mint' ? 'border-l-mint-500' :
                        story.color === 'lavender' ? 'border-l-lavender-500' :
                        'border-l-gold-500'
                      }
                      hover:shadow-xl transition-all duration-300
                      hover:scale-[1.02] hover:-translate-y-1
                    `}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs uppercase font-medium tracking-wider text-gray-600 dark:text-gray-400">
                          {getCardTypeText(story.type)}
                        </span>
                        <Icon className={`w-5 h-5 ${
                          story.color === 'mint' ? 'text-mint-500' :
                          story.color === 'lavender' ? 'text-lavender-500' :
                          'text-gold-500'
                        }`} />
                      </div>
                      
                      <div className="mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                          {story.clientName}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {story.location}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed line-clamp-3 flex-grow">
                        {story.about}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {story.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium ${
                              story.color === 'mint' ? 'bg-mint-100 text-mint-700 dark:bg-mint-900/30 dark:text-mint-300' :
                              story.color === 'lavender' ? 'bg-lavender-100 text-lavender-700 dark:bg-lavender-900/30 dark:text-lavender-300' :
                              'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            story.color === 'mint' ? 'bg-mint-500' :
                            story.color === 'lavender' ? 'bg-lavender-500' :
                            'bg-gold-500'
                          }`} />
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                            {story.type === 'successStory' ? t('funded') : 
                             story.type === 'partnership' ? t('leadingPlatform') : 
                             t('available')}
                          </span>
                        </div>
                        <Calendar className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-mint-500 to-lavender-500 h-1 rounded-full transition-all duration-700"
                style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

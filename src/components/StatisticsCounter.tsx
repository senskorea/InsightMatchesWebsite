import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, Euro, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="inline-block">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

export const StatisticsCounter: React.FC = () => {
  const { t, currentLanguage } = useTranslation();
  
  console.log('StatisticsCounter rendering with language:', currentLanguage);

  // Updated stats to match KSGC Validation Phase data
  const stats = React.useMemo(() => {
    console.log('StatisticsCounter stats array recreated for language:', currentLanguage);
    return [
      {
        icon: Target,
        value: 2.5,
        prefix: '₩',
        suffix: 'B+',
        label: 'Pipeline Value',
        description: 'Total value of proposals in drafting/submission.'
      },
      {
        icon: Euro,
        value: 135,
        prefix: '₩',
        suffix: ' T',
        label: 'Funding Access',
        description: 'Total Horizon Europe budget unlocked for Korea.'
      },
      {
        icon: Users,
        value: 13,
        suffix: '+',
        label: 'Strategic MOUs',
        description: 'Partnerships signed (including WARESA & Universities).'
      },
      {
        icon: Award,
        value: 500,
        suffix: '+',
        label: 'Active Funds',
        description: 'Annual funding calls tracked and indexed.'
      }
    ];
  }, [t, currentLanguage]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-sky-50/30 to-slate-50/20 dark:from-slate-900/20 dark:to-slate-800/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-3 sm:mb-4 px-2">
            Driving Results Through Innovation
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Real numbers from our KSGC Validation Phase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl glassmorphic hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-500 to-slate-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-2">
                {stat.prefix || ''}<Counter 
                  end={stat.value} 
                  suffix={stat.suffix}
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
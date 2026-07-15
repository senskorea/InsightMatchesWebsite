import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(end * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasAnimated, end, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export const HardStats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: 500,
      suffix: '+',
      label: t('activeFundingCallsLabel'),
      description: t('activeFundingCallsDesc'),
    },
    {
      value: 6000,
      suffix: '+',
      label: t('verifiedPartnersLabel'),
      description: t('verifiedPartnersDesc'),
    },
    {
      value: 85,
      suffix: '%',
      label: t('successRateLabel'),
      description: t('successRateDesc'),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('statsTitle')}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t('statsSubtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-400 to-slate-400 bg-clip-text text-transparent mb-3">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xl font-semibold text-white mb-2">{stat.label}</p>
              <p className="text-sm text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

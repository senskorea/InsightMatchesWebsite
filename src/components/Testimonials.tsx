import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
    ))}
  </div>
);

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t('testimonial1Quote'),
      name: t('testimonial1Name'),
      title: t('testimonial1Title'),
      organization: t('testimonial1Org'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: t('testimonial2Quote'),
      name: t('testimonial2Name'),
      title: t('testimonial2Title'),
      organization: t('testimonial2Org'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: t('testimonial3Quote'),
      name: t('testimonial3Name'),
      title: t('testimonial3Title'),
      organization: t('testimonial3Org'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <StarRating />
              
              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

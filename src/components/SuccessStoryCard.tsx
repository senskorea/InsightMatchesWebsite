
import React, { useState } from 'react';
import { ExternalLink, MapPin, Tag } from 'lucide-react';

interface SuccessStoryCardProps {
  clientName: string;
  location: string;
  tags: string[];
  about: string;
  whatWeDid: string[];
  color: 'mint' | 'lavender' | 'gold';
}

export const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  clientName,
  location,
  tags,
  about,
  whatWeDid,
  color
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    mint: {
      border: 'border-mint-200 dark:border-mint-800',
      accent: 'text-mint-600 dark:text-mint-400',
      bg: 'bg-mint-50 dark:bg-mint-900/20',
      tag: 'bg-mint-100 dark:bg-mint-900/40 text-mint-700 dark:text-mint-300'
    },
    lavender: {
      border: 'border-lavender-200 dark:border-lavender-800',
      accent: 'text-lavender-600 dark:text-lavender-400',
      bg: 'bg-lavender-50 dark:bg-lavender-900/20',
      tag: 'bg-lavender-100 dark:bg-lavender-900/40 text-lavender-700 dark:text-lavender-300'
    },
    gold: {
      border: 'border-gold-200 dark:border-gold-800',
      accent: 'text-gold-600 dark:text-gold-500',
      bg: 'bg-gold-50 dark:bg-gold-900/20',
      tag: 'bg-gold-100 dark:bg-gold-900/40 text-gold-700 dark:text-gold-300'
    }
  };

  const classes = colorClasses[color];

  return (
    <div className={`
      p-6 rounded-xl border-2 ${classes.border} ${classes.bg}
      transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
      cursor-pointer
    `}>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className={`text-xl font-bold ${classes.accent} mb-1`}>{clientName}</h4>
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          <ExternalLink className={`w-5 h-5 ${classes.accent} opacity-60 hover:opacity-100 transition-opacity`} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs font-medium ${classes.tag} flex items-center gap-1`}
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* About */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {about}
        </p>

        {/* Expand/Collapse indicator */}
        <div className={`text-sm font-medium ${classes.accent} flex items-center gap-1`}>
          <span>{isExpanded ? 'Show Less' : 'View What We Did'}</span>
          <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 animate-fade-in">
          <h5 className={`font-semibold ${classes.accent} mb-3`}>What We Did:</h5>
          <ul className="space-y-2">
            {whatWeDid.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${
                  color === 'mint' ? 'from-mint-500 to-mint-600' :
                  color === 'lavender' ? 'from-lavender-500 to-lavender-600' :
                  'from-gold-500 to-gold-600'
                } flex-shrink-0`}></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

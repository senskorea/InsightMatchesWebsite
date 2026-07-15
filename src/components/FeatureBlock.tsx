
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  reverse?: boolean;
  illustrationComponent?: React.ReactNode;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  icon: Icon,
  title,
  description,
  benefits,
  reverse = false,
  illustrationComponent
}) => {
  return (
    <div className={`
      flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
      items-center gap-8 lg:gap-16 py-16
    `}>
      {/* Content Side */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-sky-100 to-slate-100 dark:from-sky-900/30 dark:to-slate-900/30">
            <Icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold gradient-text">{title}</h3>
        </div>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-slate-500 flex-shrink-0"></div>
              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Side */}
      <div className="flex-1 flex justify-center">
        {illustrationComponent || (
          <div className="w-full max-w-md h-64 rounded-2xl glassmorphic flex items-center justify-center">
            <Icon className="w-24 h-24 text-sky-400 opacity-50" />
          </div>
        )}
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useTranslation();
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = (langCode: string) => {
    console.log('Language selector clicked:', langCode);
    changeLanguage(langCode as 'en' | 'ko' | 'fr');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg
          bg-white/5 hover:bg-white/10 
          border border-white/10 hover:border-white/20
          transition-all duration-200
          text-sm font-medium touch-manipulation
        "
      >
        <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
        <span className="sm:hidden text-sm">{currentLang.flag}</span>
        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="
            absolute top-full right-0 mt-2 py-2 w-40 sm:w-48
            bg-white dark:bg-slate-800 rounded-lg shadow-xl
            border border-gray-200 dark:border-slate-600
            z-20
          ">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2 text-left
                  hover:bg-gray-100 dark:hover:bg-slate-700
                  transition-colors duration-150
                  ${currentLanguage === lang.code ? 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400' : ''}
                `}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};


import { useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '../translations';

// Global state for language - this ensures all components share the same state
let globalLanguage: Language = 'en';
let globalSetters: ((lang: Language) => void)[] = [];

// Initialize from localStorage on first load
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('language');
  globalLanguage = (saved as Language) || 'en';
}

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(globalLanguage);

  useEffect(() => {
    // Add this setter to the global list
    globalSetters.push(setCurrentLanguage);
    
    // Cleanup: remove setter when component unmounts
    return () => {
      globalSetters = globalSetters.filter(setter => setter !== setCurrentLanguage);
    };
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', currentLanguage);
    console.log('Language changed to:', currentLanguage);
  }, [currentLanguage]);

  const translate = (key: TranslationKey): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const changeLanguage = (language: Language) => {
    console.log('changeLanguage called with:', language);
    globalLanguage = language;
    
    // Update all components
    globalSetters.forEach(setter => setter(language));
  };

  return {
    currentLanguage,
    translate,
    changeLanguage,
    t: translate // Short alias for translate
  };
};


import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="
        p-3 rounded-xl
        bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10
        border border-white/20 hover:border-white/30 dark:border-white/10 dark:hover:border-white/20
        backdrop-blur-sm
        transition-all duration-300
        hover:scale-110 active:scale-95
        shadow-lg hover:shadow-xl
        group
      "
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun className={`
          w-6 h-6 text-amber-500 absolute inset-0
          transition-all duration-300 group-hover:rotate-12
          ${darkMode ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'}
        `} />
        <Moon className={`
          w-6 h-6 text-blue-400 absolute inset-0
          transition-all duration-300 group-hover:-rotate-12
          ${darkMode ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'}
        `} />
      </div>
    </button>
  );
};

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SignalBars = () => (
  <div className="flex items-end gap-[3px] h-5">
    {[6, 9, 12, 15, 18].map((h, i) => (
      <div
        key={i}
        className="w-[3px] rounded-full bg-white animate-pulse"
        style={{ height: `${h}px`, animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

export const SensNotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('sens_notif_dismissed') === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('sens_notif_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-[40] bg-gradient-to-r from-mint-500 to-lavender-500 text-white shadow-lg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <SignalBars />
            <p className="font-inter text-sm sm:text-base font-medium truncate sm:whitespace-normal">
              <span className="font-bold">SENS is live!</span>
              <span className="hidden sm:inline"> — Turn every room into a network — discover the social infrastructure for events.</span>
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://spark-human-flow.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold font-inter text-sm bg-white text-mint-600 hover:bg-mint-50 transition-all duration-200 whitespace-nowrap"
            >
              Discover SENS →
            </a>
            <button
              onClick={handleDismiss}
              className="p-1 rounded-md hover:bg-white/20 transition-colors duration-200 flex-shrink-0"
              aria-label="Dismiss notification"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

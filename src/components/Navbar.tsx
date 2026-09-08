
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { useTranslation } from '../hooks/useTranslation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, currentLanguage } = useTranslation();
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [isOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Plain top-level links — one destination each, no dropdown. Answers the
  // first two visitor questions (what is it / what does it cost) directly.
  const navLinks = React.useMemo(() => [
    { name: t('platformNav'), href: '/platform' },
    { name: t('pricingNav'), href: '/#pricing' },
    { name: t('about'), href: '/about' },
  ], [t, currentLanguage]);

  // Everything else — content and program pages — lives under one honest
  // "Resources" bucket instead of being split across mismatched labels.
  const resourcesItems = React.useMemo(() => [
    { name: t('newsAnnouncements'), href: '/resources/news' },
    { name: 'Videos', href: '/resources/videos' },
    { name: 'What is Horizon Europe?', href: '/resources/horizon-europe' },
    { name: t('dissemination'), href: '/dissemination' },
    { name: t('educationTitle'), href: '/education' },
    { name: t('networkBusan'), href: '/network-busan' },
  ], [t, currentLanguage]);


  return (
    <nav
      style={{ top: 'var(--demo-banner-h, 0px)' }}
      className={`
      fixed left-0 right-0 z-50 transition-all duration-300
      ${scrolled || isOpen
        ? 'bg-white dark:bg-slate-900 shadow-sm border-b border-border'
        : 'bg-transparent'
      }
    `}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo variant="compact" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="
                  text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400
                  font-medium transition-colors duration-200
                  relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                  after:bg-sky-500 after:transition-all after:duration-300
                  hover:after:w-full outline-none
                "
              >
                {link.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="
                text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400
                font-medium transition-colors duration-200 flex items-center gap-1
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                after:bg-sky-500 after:transition-all after:duration-300
                hover:after:w-full outline-none
              ">
                {t('resourcesNav')} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                {resourcesItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="w-full px-2 py-1.5 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Actions — one primary CTA. Sign In and Refer & Earn stay
              as quiet text links rather than competing buttons; Refer & Earn
              is already prominent in the footer for anyone looking for it. */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <ThemeToggle />

            <Link
              to="/app"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors whitespace-nowrap"
            >
              {t('signIn')}
            </Link>

            <Link to="/request-demo"
              className="
                px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm
                bg-gradient-to-r from-sky-500 to-slate-500
                text-white shadow-lg hover:shadow-glow
                transition-all duration-200 hover:scale-105
                whitespace-nowrap
              "
            >
              {t('requestDemo')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-1 sm:space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="min-h-11 min-w-11 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 touch-manipulation"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden absolute top-full inset-x-0 h-[calc(100dvh-var(--demo-banner-h,0px)-3.5rem)] sm:h-[calc(100dvh-var(--demo-banner-h,0px)-4rem)] bg-white dark:bg-slate-900 z-40 overflow-y-auto overscroll-contain">
            <div className="px-4 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium py-2 border-t border-gray-200 dark:border-slate-700 pt-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('resourcesNav')}</h4>
                {resourcesItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex min-h-11 items-center text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-4">
                <Link
                  to="/app"
                  className="block text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                  onClick={() => setIsOpen(false)}
                >
                  {t('signIn')}
                </Link>

                <Link to="/request-demo"
                  onClick={() => setIsOpen(false)}
                  className="
                    w-full px-6 py-2 rounded-lg font-semibold text-sm
                    bg-gradient-to-r from-sky-500 to-slate-500
                    text-white shadow-lg text-center block
                  "
                >
                  {t('requestDemo')}
                </Link>

                <Link
                  to="/referral"
                  className="block text-center text-sm font-medium text-sky-600 dark:text-sky-400"
                  onClick={() => setIsOpen(false)}
                >
                  💚 Refer &amp; Earn
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

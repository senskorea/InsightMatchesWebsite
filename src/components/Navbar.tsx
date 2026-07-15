
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
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


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation buttons
  const navButtons = React.useMemo(() => [
    {
      name: t('features'),
      items: [
        { name: t('features'), href: '/#features' },
        { name: t('dissemination'), href: '/dissemination' },
        { name: t('newsAnnouncements'), href: '/resources/news' },
        { name: 'What is Horizon Europe?', href: '/resources/horizon-europe' }
      ]
    },
    {
      name: t('about'),
      items: [
        { name: t('about'), href: '/about' },
        { name: t('genderEqualityPlan'), href: '/about/gep' },
        { name: t('legalInformation'), href: '/eu-pic' }
      ]
    },
    {
      name: t('community'),
      items: [
        { name: t('educationTitle'), href: '/education' },
        { name: t('networkBusan'), href: '/network-busan' }
      ]

    }
  ], [t, currentLanguage]);


  return (
    <nav
      style={{ top: 'var(--demo-banner-h, 0px)' }}
      className={`
      fixed left-0 right-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/10' 
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
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Main Navigation Buttons */}
            {navButtons.map((section) => (
              <DropdownMenu key={section.name}>
                <DropdownMenuTrigger className="
                  text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400
                  font-medium transition-colors duration-200 flex items-center gap-1
                  relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                  after:bg-sky-500 after:transition-all after:duration-300
                  hover:after:w-full outline-none
                ">
                  {section.name} <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  {section.items.map((item) => (
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
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ThemeToggle />

            <Link
              to="/app"
              className="
                px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm
                bg-gradient-to-r from-sky-500 to-slate-500
                text-white shadow-lg hover:shadow-glow
                transition-all duration-200 hover:scale-105
                whitespace-nowrap
              "
            >
              {t('signIn')}
            </Link>

            
            <a href="/request-demo"
              className="
                px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm
                bg-gradient-to-r from-sky-500 to-slate-500
                text-white shadow-lg hover:shadow-glow
                transition-all duration-200 hover:scale-105
                whitespace-nowrap
              "
            >
              {t('requestDemo')}
            </a>

            <Link
              to="/referral"
              className="
                px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm
                border border-sky-500 text-sky-600 dark:text-sky-400
                hover:bg-sky-500/10 transition-all duration-200
                whitespace-nowrap
              "
            >
              Refer &amp; Earn
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 touch-manipulation"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden fixed inset-0 bg-white dark:bg-slate-900 z-40 overflow-y-auto top-14`}>
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Sections */}
              {navButtons.map((section) => (
                <div key={section.name} className="border-t border-gray-200 dark:border-slate-700 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">{section.name}</h4>
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              
              <div className="pt-4 space-y-4">
                <Link
                  to="/app"
                  className="
                    w-full px-6 py-2 rounded-lg font-semibold text-sm
                    bg-gradient-to-r from-sky-500 to-slate-500
                    text-white shadow-lg text-center block
                  "
                  onClick={() => setIsOpen(false)}
                >
                  {t('signIn')}
                </Link>

                
                <a href="/request-demo"
                  className="
                    w-full px-6 py-2 rounded-lg font-semibold text-sm
                    bg-gradient-to-r from-sky-500 to-slate-500
                    text-white shadow-lg text-center block
                  "
                >
                  {t('requestDemo')}
                </a>

                <Link
                  to="/referral"
                  className="
                    w-full px-6 py-2 rounded-lg font-semibold text-sm
                    border border-sky-500 text-sky-600 dark:text-sky-400
                    text-center block
                  "
                  onClick={() => setIsOpen(false)}
                >
                  Refer &amp; Earn
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems, type NavigationItem } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

/**
 * Navigation Component
 * Responsive navigation with mobile menu and accessibility features
 */
export function Navigation(): JSX.Element {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const getHref = (item: NavigationItem): string => {
    const sectionMap: Record<NavigationItem, string> = {
      'WHAT WE DO': '/what-we-do',
      'PORTFOLIO': '/portfolio',
      'COMPANY': '/company',
      'CONTACT US': '/contact',
    };
    return sectionMap[item] || '/';
  };

  const isActive = (item: NavigationItem): boolean => {
    const href = getHref(item);
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="relative z-50 w-full" role="navigation" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 flex items-center"
            aria-label="BudGo Home"
          >
            <span 
              className="text-2xl md:text-3xl text-slate-900 dark:text-white transition-colors hover:text-slate-700 dark:hover:text-white/90 font-script"
            >
              BudGo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                className={cn(
                  'text-sm font-medium uppercase tracking-wider transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1',
                  isActive(item)
                    ? 'nav-active text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-white/80 dark:hover:text-white'
                )}
                aria-current={isActive(item) ? 'page' : undefined}
              >
                {item}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 space-y-2 glass-container rounded-lg mt-2"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {navigationItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded',
                  isActive(item)
                    ? 'nav-active text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-white/80 dark:hover:text-white'
                )}
                role="menuitem"
                aria-current={isActive(item) ? 'page' : undefined}
              >
                {item}
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-slate-200 dark:border-white/10 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium uppercase tracking-wider text-slate-800 dark:text-white/80">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


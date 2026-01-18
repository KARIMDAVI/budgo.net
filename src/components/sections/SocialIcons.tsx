'use client';

import { socialLinks } from '@/lib/constants';

/**
 * SocialIcons Component
 * Displays social media links with proper accessibility
 */
export function SocialIcons(): JSX.Element {
  return (
    <div className="flex items-center justify-center gap-4" role="list" aria-label="Social media links">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white transition-all duration-200 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label={social.ariaLabel}
          role="listitem"
        >
          <span className="text-sm font-semibold" aria-hidden="true">{social.icon}</span>
        </a>
      ))}
    </div>
  );
}



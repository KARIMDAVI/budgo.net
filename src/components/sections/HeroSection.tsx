'use client';

import { TerminalHero } from '../organisms/TerminalHero';

/**
 * HeroSection Component
 * Main hero section with "Terminal" interface (Rebrand v2)
 */
export function HeroSection(): JSX.Element {
  return (
    <section 
      className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Brand Header */}
        <h1 className="mb-8 font-mono text-2xl font-bold tracking-widest text-slate-800 dark:text-white/80 md:text-4xl" aria-label="BudGo">
          BUDGO
        </h1>

        {/* Terminal Interface */}
        <TerminalHero />
        
        <p className="mt-8 text-slate-600 dark:text-gray-400 text-sm font-mono">
          Try typing <span className="text-neon-red font-bold">help</span> or <span className="text-neon-blue font-bold">ios</span>
        </p>
      </div>
    </section>
  );
}


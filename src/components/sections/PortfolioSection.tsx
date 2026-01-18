'use client';

import { PortfolioGrid } from '../organisms/PortfolioGrid';

export function PortfolioSection(): JSX.Element {
  return (
    <section 
      id="portfolio" 
      className="relative z-10 py-20"
      aria-labelledby="portfolio-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 
            id="portfolio-heading"
            className="mb-4 font-mono text-3xl font-bold text-slate-800 dark:text-white md:text-4xl"
          >
            ~/projects
          </h2>
          <p className="font-mono text-slate-600 dark:text-gray-400">
            ls -la ./recent-work
          </p>
        </div>

        {/* Portfolio Grid Organism */}
        <PortfolioGrid />
      </div>
    </section>
  );
}


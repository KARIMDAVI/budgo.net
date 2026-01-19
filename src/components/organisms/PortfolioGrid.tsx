import React, { useState, useEffect, useMemo } from 'react';
import { portfolioItems, portfolioCategories, PortfolioCategory, isValidProject } from '@/lib/portfolio-data';
import { ProjectFileCard } from '@/components/molecules/ProjectFileCard';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Validate data and simulate loading
      const validProjects = portfolioItems.filter(isValidProject);
      if (validProjects.length === 0) {
        setError('No valid projects found');
      }
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load portfolio');
      setIsLoading(false);
    }
  }, []);

  const validProjects = useMemo(() => 
    portfolioItems.filter(isValidProject), 
    []
  );

  const filteredItems = useMemo(() => 
    activeCategory === 'ALL'
      ? validProjects
      : validProjects.filter((item) => item.category.includes(activeCategory)),
    [activeCategory, validProjects]
  );

  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center py-20">
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400"></div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-slate-600 dark:text-gray-500 whitespace-nowrap">
              {'// Loading projects...'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center py-20 font-mono">
          <div className="text-red-500 dark:text-red-400 mb-2">
            {'// Error loading portfolio'}
          </div>
          <div className="text-sm text-slate-600 dark:text-gray-500">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* File Explorer Tabs (Categories) */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 text-xs md:text-sm font-mono rounded-t-md transition-all relative",
              activeCategory === category
                ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5 border-b-2 border-accent-red"
                : "text-slate-600 dark:text-gray-500 hover:text-slate-800 dark:hover:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5"
            )}
          >
            {activeCategory === category && (
              <span className="absolute left-2 top-2.5 w-2 h-2 rounded-full bg-accent-red animate-pulse" />
            )}
            <span className={cn(activeCategory === category && "ml-3")}>
              {category === 'ALL' ? 'root' : category.toLowerCase().replace(' ', '_')}
            </span>
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <ProjectFileCard 
              key={item.id} 
              project={item} 
              index={index} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20 font-mono text-slate-600 dark:text-gray-500">
          {'// No files found in this directory...'}
        </div>
      )}
    </div>
  );
};

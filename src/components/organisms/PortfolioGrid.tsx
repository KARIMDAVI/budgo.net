import React, { useState } from 'react';
import { portfolioItems, portfolioCategories, PortfolioCategory } from '@/lib/portfolio-data';
import { ProjectFileCard } from '@/components/molecules/ProjectFileCard';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');

  const filteredItems = activeCategory === 'ALL'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category.includes(activeCategory));

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

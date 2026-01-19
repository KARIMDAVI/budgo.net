import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileJson, Smartphone, Globe, Database, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PortfolioItem } from '@/lib/portfolio-data';

interface ProjectFileCardProps {
  project: PortfolioItem;
  index: number;
}

const getFileIcon = (categories: string[]) => {
  const category = categories[0]?.toLowerCase() || '';
  if (category.includes('mobile')) return <Smartphone className="text-sky-400" size={24} />;
  if (category.includes('web')) return <Globe className="text-teal-400" size={24} />;
  if (category.includes('admin')) return <Monitor className="text-indigo-400" size={24} />;
  if (category.includes('full')) return <Database className="text-purple-400" size={24} />;
  return <FileJson className="text-blue-400" size={24} />;
};

const getFileExtension = (categories: string[]) => {
  const category = categories[0]?.toLowerCase() || '';
  if (category.includes('mobile')) return '.swift';
  if (category.includes('web')) return '.tsx';
  if (category.includes('admin')) return '.admin.tsx';
  if (category.includes('full')) return '.full.ts';
  return '.json';
};

export const ProjectFileCard: React.FC<ProjectFileCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fileName = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + getFileExtension(project.category);

  // Group technologies by category
  const techByCategory = project.technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] // Fluid entrance curve from design research
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative flex flex-col rounded-lg overflow-hidden",
        "bg-slate-100/80 dark:bg-slate-900/40 backdrop-blur-xl",
        "border border-slate-200 dark:border-white/5",
        "hover:border-sky-400/50 dark:hover:border-sky-400/30",
        "transition-all duration-300 cursor-pointer",
        "shadow-lg hover:shadow-2xl hover:shadow-sky-500/10"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Ambient glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header: Icon & Filename */}
      <div className="relative z-10 flex items-center space-x-3 p-4 border-b border-slate-200 dark:border-white/5">
        <div className="p-2 rounded-md bg-slate-200 dark:bg-white/5 group-hover:bg-slate-300 dark:group-hover:bg-white/10 transition-colors">
          {getFileIcon(project.category)}
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-mono text-sm text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate block">
            {fileName}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 mt-1">
              ⭐ Featured
            </span>
          )}
        </div>
      </div>

      <div className="relative z-10 p-4 space-y-4 flex-1">
        {/* Client & Industry */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400">
            <span className="font-semibold">{project.client.name}</span>
            <span className="text-slate-400 dark:text-gray-600">•</span>
            <span>{project.client.industry}</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2">
            {project.title}
          </h3>
        </div>

        {/* Description as code comment */}
        <div className="font-mono text-xs text-slate-600 dark:text-gray-500 select-none">
          <span className="text-slate-400 dark:text-gray-600">{'/**'}</span>
          <br/>
          <span className="text-slate-600 dark:text-gray-500">&nbsp;* {project.description}</span>
          <br/>
          <span className="text-slate-400 dark:text-gray-600">&nbsp;{'*/'}</span>
        </div>

        {/* Key Metrics */}
        <div className="flex flex-wrap gap-2">
          {project.metrics.slice(0, 2).map((metric, idx) => (
            <span 
              key={idx}
              className="text-[10px] font-mono px-2 py-1 rounded-full bg-teal-100 dark:bg-teal-900/20 text-teal-800 dark:text-teal-400 border border-teal-200 dark:border-teal-800/30"
            >
              {metric.label}: <span className="font-semibold">{metric.value}</span>
            </span>
          ))}
        </div>

        {/* Challenge/Solution (collapsible) */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 text-sm pt-3 border-t border-slate-200 dark:border-white/5"
          >
            <div>
              <p className="text-xs font-semibold text-slate-700 dark:text-gray-300 mb-1">Challenge:</p>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-700 dark:text-gray-300 mb-1">Solution:</p>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{project.solution}</p>
            </div>
          </motion.div>
        )}

        {/* Tech Stack by Category */}
        <div className="space-y-2 pt-2">
          {Object.entries(techByCategory).map(([category, techs]) => (
            <div key={category} className="flex flex-wrap gap-1 items-start">
              <span className="text-[10px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wide min-w-[60px]">
                {category}:
              </span>
              <div className="flex flex-wrap gap-1 flex-1">
                {techs.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-gray-400 border border-slate-300 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline & Team */}
        <div className="flex items-center gap-4 text-[10px] text-slate-500 dark:text-gray-500 font-mono pt-2 border-t border-slate-200 dark:border-white/5">
          <span>⏱ {project.timeline}</span>
          {project.team && <span>👥 {project.team}</span>}
        </div>
      </div>

      {/* Expand indicator */}
      <div className="relative z-10 px-4 py-2 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5">
        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-gray-400">
          <span className="font-mono">
            {isExpanded ? '▼ Click to collapse' : '▶ Click for details'}
          </span>
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors font-mono"
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, FileJson, Smartphone, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PortfolioItem } from '@/lib/portfolio-data';

interface ProjectFileCardProps {
  project: PortfolioItem;
  index: number;
}

const getFileIcon = (technologies: string[] = []) => {
  const mainTech = technologies[0]?.toLowerCase() || '';
  if (mainTech.includes('swift') || mainTech.includes('ios')) return <Smartphone className="text-blue-400" size={24} />;
  if (mainTech.includes('react') || mainTech.includes('next')) return <FileCode className="text-cyan-400" size={24} />;
  if (mainTech.includes('figma')) return <PenTool className="text-pink-400" size={24} />;
  return <FileJson className="text-yellow-400" size={24} />;
};

const getFileExtension = (technologies: string[] = []) => {
  const mainTech = technologies[0]?.toLowerCase() || '';
  if (mainTech.includes('swift')) return '.swift';
  if (mainTech.includes('react') || mainTech.includes('next')) return '.tsx';
  if (mainTech.includes('figma')) return '.fig';
  return '.json';
};

export const ProjectFileCard: React.FC<ProjectFileCardProps> = ({ project, index }) => {
  const fileName = project.title.toLowerCase().replace(/\s+/g, '-') + getFileExtension(project.technologies);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "group relative flex flex-col p-4 rounded-lg",
        "bg-slate-100/80 dark:bg-glass-dark border border-slate-200 dark:border-white/5 hover:border-accent-red/50",
        "transition-colors duration-300 cursor-pointer overflow-hidden"
      )}
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header: Icon & Filename */}
      <div className="flex items-center space-x-3 mb-3 z-10">
        <div className="p-2 rounded-md bg-slate-200 dark:bg-white/5 group-hover:bg-slate-300 dark:group-hover:bg-white/10 transition-colors">
          {getFileIcon(project.technologies)}
        </div>
        <span className="font-mono text-sm text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate">
          {fileName}
        </span>
      </div>

      {/* Body: Description as Code Comment */}
      <div className="flex-1 z-10">
        <div className="font-mono text-xs text-slate-600 dark:text-gray-500 mb-2 select-none">
          {'/**'} <br/>
          &nbsp;* {project.description} <br/>
          &nbsp;{'*/'}
        </div>
      </div>

      {/* Footer: Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4 z-10">
        {project.technologies?.slice(0, 3).map((tech) => (
          <span 
            key={tech} 
            className="text-[10px] font-mono px-2 py-1 rounded bg-slate-300/70 dark:bg-white/5 text-slate-800 dark:text-gray-400 border border-slate-400 dark:border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

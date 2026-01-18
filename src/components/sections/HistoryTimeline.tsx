'use client';

import { motion } from 'framer-motion';
import { Calendar, Cpu, Smartphone, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HistoryEvent {
  year: string;
  title: string;
  content: string;
  icon?: React.ElementType;
  side?: 'left' | 'right';
}

const historyData: HistoryEvent[] = [
  {
    year: 'August 2023',
    title: 'BudGo Was Founded',
    content: "Our journey began with a vision to create innovative solutions for the future. We started by developing an initial project aimed at modernizing everyday tasks, setting the foundation for our growth.",
    icon: Calendar,
  },
  {
    year: '2024',
    title: 'Innovative Mobile Solutions',
    content: "We launched our first mobile application, focusing on enhancing productivity and connectivity. This marked a significant step in leveraging cutting-edge technology to meet user needs.",
    icon: Smartphone,
  },
  {
    year: '2025',
    title: 'Cross-platform Application Development',
    content: "Recognizing the importance of cross-platform development, we integrated React Native and Flutter into our toolset. This allowed us to create seamless applications for iOS and Android.",
    icon: Cpu,
  },
  {
    year: '2026',
    title: 'Machine Learning & AI',
    content: "Incorporating machine learning and artificial intelligence (AI) into our projects became a priority. Our team began developing chatbots and predictive analytics tools to revolutionize customer interaction.",
    icon: Zap,
  },
];

export function HistoryTimeline() {
  return (
    <div className="relative py-8">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 dark:from-primary/0 dark:via-primary/50 dark:to-primary/0" />

      <div className="space-y-12">
        {historyData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col md:flex-row items-start md:items-center gap-8",
                isEven ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Content Side */}
              <div className="flex-1 w-full pl-12 md:pl-0 md:w-1/2">
                <div className={cn(
                  "p-6 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/30 transition-colors duration-300",
                  isEven ? "md:text-left" : "md:text-right"
                )}>
                  <div className={cn(
                    "flex flex-col gap-2 mb-3",
                    isEven ? "md:items-start" : "md:items-end"
                  )}>
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {item.content}
                  </p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-bg-dark border-2 border-primary z-10 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                {item.icon ? (
                  <item.icon className="w-4 h-4 text-primary" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>

              {/* Empty Side for Desktop Balance */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

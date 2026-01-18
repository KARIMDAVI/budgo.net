'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassContainer } from '@/components/layout/GlassContainer';
import { History, Users } from 'lucide-react';

export default function CompanyLandingPage() {
  return (
    <div className="pt-24 min-h-screen pb-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-slate-800 dark:text-white font-script"
          >
            Company
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-light"
          >
            Discover our journey and meet the team driving our vision forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* History Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/company/history" className="block h-full">
              <GlassContainer className="h-full p-8 md:p-12 flex flex-col items-center text-center group hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <History className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-primary transition-colors">History</h2>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                  Explore our timeline from 2023 to the present. See how we've evolved with technology.
                </p>
                <div className="mt-8 text-primary font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Timeline 
                </div>
              </GlassContainer>
            </Link>
          </motion.div>

          {/* Management Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/company/management" className="block h-full">
              <GlassContainer className="h-full p-8 md:p-12 flex flex-col items-center text-center group hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-primary transition-colors">Management</h2>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                  Meet the leadership team dedicated to delivering excellence and innovation.
                </p>
                <div className="mt-8 text-primary font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Meet the Team 
                </div>
              </GlassContainer>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

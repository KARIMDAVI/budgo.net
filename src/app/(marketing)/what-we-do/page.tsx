import { Metadata } from 'next';
import Link from 'next/link';
import { GlassContainer } from '@/components/layout/GlassContainer';

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Explore our company offerings including iOS development, Web development, and Consulting.',
};

export default function WhatWeDoPage() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-4 pb-12">
      <GlassContainer className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 dark:text-white tracking-tight leading-tight">
            Full‑stack development <br className="hidden md:block" /> from idea to production
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We handle product strategy, design, development, deployment and ongoing support so you can launch quickly and scale reliably.
          </p>
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">End-to-End Development Solutions</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full opacity-80"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* iOS Development */}
            <div className="group p-6 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <h2 className="text-xl font-bold mb-3 text-primary group-hover:text-slate-900 dark:group-hover:text-white transition-colors">iOS Development</h2>
              <p className="text-slate-600 dark:text-gray-400 group-hover:text-slate-700 dark:group-hover:text-gray-300 text-sm leading-relaxed">
                    Native and cross-platform iOS applications built with Swift and React Native.
                    We deliver high-performance, user-friendly mobile experiences.
                </p>
            </div>

            {/* Web Development */}
            <div className="group p-6 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <h2 className="text-xl font-bold mb-3 text-primary group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Web Development</h2>
              <p className="text-slate-600 dark:text-gray-400 group-hover:text-slate-700 dark:group-hover:text-gray-300 text-sm leading-relaxed">
                    Modern, responsive web applications using Next.js, React, and TypeScript.
                    Scalable and secure solutions for your business.
                </p>
            </div>

            {/* UI/UX Design */}
            <div className="group p-6 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <h2 className="text-xl font-bold mb-3 text-primary group-hover:text-slate-900 dark:group-hover:text-white transition-colors">UI/UX Design</h2>
              <p className="text-slate-600 dark:text-gray-400 group-hover:text-slate-700 dark:group-hover:text-gray-300 text-sm leading-relaxed">
                    User-centric design that drives engagement. We create intuitive interfaces
                    and seamless user experiences.
                </p>
            </div>

            {/* Consulting */}
            <div className="group p-6 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
              <h2 className="text-xl font-bold mb-3 text-primary group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Consulting</h2>
              <p className="text-slate-600 dark:text-gray-400 group-hover:text-slate-700 dark:group-hover:text-gray-300 text-sm leading-relaxed">
                    Expert advice on technology strategy, architecture, and digital transformation.
                </p>
            </div>
        </div>
        
        {/* Call to Action - Reference to Project Estimation */}
        <div className="text-center py-8 border-t border-slate-200 dark:border-white/10">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Have a project in mind?</h3>
          <p className="text-slate-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
                Ready to bring your ideas to life? Request a project estimation and let's get started.
            </p>
            <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/30 uppercase tracking-wider"
            >
                Request a Project Estimation
            </Link>
        </div>
      </GlassContainer>
    </div>
  );
}

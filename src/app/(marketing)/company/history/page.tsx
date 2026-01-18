import { Metadata } from 'next';
import { GlassContainer } from '@/components/layout/GlassContainer';
import { HistoryTimeline } from '@/components/sections/HistoryTimeline';

export const metadata: Metadata = {
  title: 'Company History | BudGo.Net',
  description: 'The history and evolution of BudGo.Net since 1999.',
  openGraph: {
    title: 'Company History | BudGo.Net',
    description: 'The history and evolution of BudGo.Net since 1999.',
    type: 'website',
  },
};

export default function HistoryPage() {
  return (
    <div className="pt-24 min-h-screen pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-800 dark:text-white font-script">
            History
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            A journey of innovation, adaptation, and growth. From Palm Pilot to the future of AI.
          </p>
        </div>
        
        <GlassContainer className="w-full max-w-5xl mx-auto p-4 md:p-10">
          <HistoryTimeline />
        </GlassContainer>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import { TeamSection } from '@/components/sections/TeamSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind BudGo.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <TeamSection />
    </div>
  );
}

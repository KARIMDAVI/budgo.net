import { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our latest projects and case studies.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <PortfolioSection />
    </div>
  );
}

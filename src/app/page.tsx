import { HeroSection } from '@/components/sections/HeroSection';

/**
 * Homepage
 * Main landing page with "Terminal" interface
 */
export default function Home(): JSX.Element {
  return (
    <div className="relative z-10">
      <HeroSection />
    </div>
  );
}

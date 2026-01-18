/**
 * Portfolio data
 * Following TypeScript strict mode
 */

export type PortfolioCategory = 'ALL' | 'WEB DESIGN' | 'LOGO DESIGN' | 'BRANDING' | 'IOS APP';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory[];
  description: string;
  imageUrl: string;
  link?: string;
  technologies?: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: ['WEB DESIGN', 'ALL'],
    description: 'Modern e-commerce solution with React and Next.js',
    imageUrl: '/images/portfolio/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: ['IOS APP', 'ALL'],
    description: 'Secure iOS banking application with biometric authentication',
    imageUrl: '/images/portfolio/banking-app.jpg',
    technologies: ['Swift', 'SwiftUI', 'Core Data'],
  },
  {
    id: '3',
    title: 'Brand Identity Design',
    category: ['BRANDING', 'LOGO DESIGN', 'ALL'],
    description: 'Complete brand identity for tech startup',
    imageUrl: '/images/portfolio/branding.jpg',
    technologies: ['Figma', 'Adobe Illustrator'],
  },
  {
    id: '4',
    title: 'SaaS Dashboard',
    category: ['WEB DESIGN', 'ALL'],
    description: 'Analytics dashboard with real-time data visualization',
    imageUrl: '/images/portfolio/dashboard.jpg',
    technologies: ['React', 'D3.js', 'Node.js'],
  },
  {
    id: '5',
    title: 'Fitness Tracking App',
    category: ['IOS APP', 'ALL'],
    description: 'iOS app for fitness tracking and workout planning',
    imageUrl: '/images/portfolio/fitness-app.jpg',
    technologies: ['React Native', 'Firebase', 'HealthKit'],
  },
  {
    id: '6',
    title: 'Corporate Logo Design',
    category: ['LOGO DESIGN', 'BRANDING', 'ALL'],
    description: 'Modern logo design for enterprise client',
    imageUrl: '/images/portfolio/logo-design.jpg',
    technologies: ['Adobe Illustrator', 'Figma'],
  },
] as const;

export const portfolioCategories: PortfolioCategory[] = [
  'ALL',
  'WEB DESIGN',
  'LOGO DESIGN',
  'BRANDING',
  'IOS APP',
] as const;



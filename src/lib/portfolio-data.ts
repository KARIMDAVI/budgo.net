/**
 * Enterprise Portfolio Data
 * Following TypeScript strict mode with comprehensive project information
 */

export type PortfolioCategory = 'ALL' | 'MOBILE APP' | 'WEB APP' | 'FULL STACK' | 'ADMIN PANEL';

export interface PortfolioClient {
  name: string;
  industry: string;
  website?: string;
}

export interface PortfolioMetric {
  label: string;
  value: string;
  type: 'percentage' | 'currency' | 'number' | 'text';
}

export interface PortfolioTechnology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'tools';
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: PortfolioClient;
  category: PortfolioCategory[];
  description: string;
  challenge: string;
  solution: string;
  metrics: PortfolioMetric[];
  technologies: PortfolioTechnology[];
  timeline: string;
  team?: string;
  imageUrl: string;
  images?: string[];
  link?: string;
  featured?: boolean;
  githubUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'melomo',
    title: 'MeloMo - AI-Powered Music Discovery',
    client: {
      name: 'Personal Project',
      industry: 'Music Tech',
    },
    category: ['MOBILE APP', 'ALL'],
    description: 'iOS app that uses mood-based AI to generate personalized music playlists',
    challenge: 'Users struggle to find music that matches their current mood. Traditional playlist discovery is time-consuming and doesn\'t adapt to emotional states.',
    solution: 'Built an intelligent mood detection system integrated with Apple MusicKit and Spotify APIs. Features 50+ mood categories, real-time playlist generation, and social sharing capabilities.',
    metrics: [
      { label: 'Mood Categories', value: '50+', type: 'number' },
      { label: 'API Integrations', value: '2', type: 'number' },
      { label: 'User Engagement', value: 'High', type: 'text' },
    ],
    technologies: [
      { name: 'SwiftUI', category: 'mobile' },
      { name: 'Swift', category: 'mobile' },
      { name: 'MusicKit', category: 'mobile' },
      { name: 'Spotify API', category: 'backend' },
      { name: 'Firebase', category: 'backend' },
      { name: 'OAuth 2.0', category: 'backend' },
    ],
    timeline: '3 months',
    team: 'Solo developer',
    imageUrl: '/images/portfolio/melomo/hero.jpg',
    images: ['/images/portfolio/melomo/hero.jpg', '/images/portfolio/melomo/moods.jpg'],
    featured: true,
    githubUrl: 'https://github.com/KARIMDAVI/MeloMo',
  },
  {
    id: 'savipets-android',
    title: 'SaviPets Android - Pet Care Platform',
    client: {
      name: 'SaviPets',
      industry: 'Pet Services',
    },
    category: ['MOBILE APP', 'FULL STACK', 'ALL'],
    description: 'Professional pet care service management platform connecting pet owners with trusted sitters',
    challenge: 'Pet owners needed a reliable way to book and track pet care services. Manual booking systems caused scheduling conflicts and lack of real-time updates.',
    solution: 'Developed comprehensive Android app with real-time GPS tracking, secure payment processing via Square, automated booking system, and live visit updates with photo sharing.',
    metrics: [
      { label: 'Real-time Features', value: '5+', type: 'number' },
      { label: 'Payment Integration', value: 'Square', type: 'text' },
      { label: 'GPS Accuracy', value: '95%', type: 'percentage' },
    ],
    technologies: [
      { name: 'Kotlin', category: 'mobile' },
      { name: 'Jetpack Compose', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Firestore', category: 'database' },
      { name: 'Square SDK', category: 'backend' },
      { name: 'Google Maps', category: 'mobile' },
      { name: 'Hilt', category: 'mobile' },
    ],
    timeline: '6 months',
    team: 'Lead Android developer',
    imageUrl: '/images/portfolio/savipets-android/hero.jpg',
    images: ['/images/portfolio/savipets-android/hero.jpg', '/images/portfolio/savipets-android/booking.jpg'],
    featured: true,
    githubUrl: 'https://github.com/KARIMDAVI/savipets-android',
  },
  {
    id: 'savipets-ios',
    title: 'SaviPets iOS - Pet Care Platform',
    client: {
      name: 'SaviPets',
      industry: 'Pet Services',
    },
    category: ['MOBILE APP', 'FULL STACK', 'ALL'],
    description: 'iOS companion app for SaviPets pet care platform with seamless cross-platform experience',
    challenge: 'Needed feature parity with Android while maintaining iOS design standards. Required background location tracking and complex state management.',
    solution: 'Built native iOS app using SwiftUI with advanced features including background location tracking, push notifications, automated booking workflows, and comprehensive analytics.',
    metrics: [
      { label: 'Background Tracking', value: 'Enabled', type: 'text' },
      { label: 'Notification Types', value: '8+', type: 'number' },
      { label: 'Test Coverage', value: '70%', type: 'percentage' },
    ],
    technologies: [
      { name: 'SwiftUI', category: 'mobile' },
      { name: 'Swift', category: 'mobile' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Firestore', category: 'database' },
      { name: 'CloudKit', category: 'cloud' },
      { name: 'CoreLocation', category: 'mobile' },
      { name: 'Combine', category: 'mobile' },
    ],
    timeline: '5 months',
    team: 'Lead iOS developer',
    imageUrl: '/images/portfolio/savipets-ios/hero.jpg',
    images: ['/images/portfolio/savipets-ios/hero.jpg', '/images/portfolio/savipets-ios/dashboard.jpg'],
    featured: true,
    githubUrl: 'https://github.com/KARIMDAVI/savipets-ios',
  },
  {
    id: 'savipets-web-admin',
    title: 'SaviPets Admin Console',
    client: {
      name: 'SaviPets',
      industry: 'Pet Services',
    },
    category: ['WEB APP', 'ADMIN PANEL', 'FULL STACK', 'ALL'],
    description: 'Comprehensive web admin panel for managing pet care operations, users, bookings, and analytics',
    challenge: 'Admins needed centralized control over complex operations including user management, booking oversight, real-time tracking, financial reporting, and compliance monitoring.',
    solution: 'Created enterprise-grade admin dashboard with real-time data visualization, automated reporting, user role management, live GPS tracking integration, and comprehensive audit logs.',
    metrics: [
      { label: 'Dashboard Widgets', value: '15+', type: 'number' },
      { label: 'Real-time Updates', value: 'Live', type: 'text' },
      { label: 'Report Types', value: '10+', type: 'number' },
    ],
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
      { name: 'Ant Design', category: 'frontend' },
      { name: 'Firebase', category: 'backend' },
      { name: 'Firestore', category: 'database' },
      { name: 'Mapbox GL', category: 'frontend' },
      { name: 'Zustand', category: 'frontend' },
    ],
    timeline: '4 months',
    team: 'Full-stack developer',
    imageUrl: '/images/portfolio/savipets-web-admin/hero.jpg',
    images: ['/images/portfolio/savipets-web-admin/hero.jpg', '/images/portfolio/savipets-web-admin/analytics.jpg'],
    featured: true,
    githubUrl: 'https://github.com/KARIMDAVI/savipets-web-admin',
  },
] as const;

export const portfolioCategories: PortfolioCategory[] = [
  'ALL',
  'MOBILE APP',
  'WEB APP',
  'FULL STACK',
  'ADMIN PANEL',
] as const;

/**
 * Validates a portfolio item to ensure all required fields are present
 */
export const isValidProject = (project: PortfolioItem): boolean => {
  return !!(
    project.title &&
    project.client?.name &&
    project.client?.industry &&
    project.description &&
    project.challenge &&
    project.solution &&
    project.metrics?.length > 0 &&
    project.technologies?.length > 0 &&
    project.imageUrl
  );
};



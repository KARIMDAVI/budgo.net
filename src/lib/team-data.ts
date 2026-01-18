/**
 * Team member data
 * Following TypeScript strict mode
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Lead iOS Developer',
    bio: 'Expert in Swift, SwiftUI, and React Native with 8+ years of experience building enterprise mobile applications.',
    imageUrl: '/images/team/john-doe.jpg', // Placeholder - will need actual images
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Senior Web Developer',
    bio: 'Specializes in Next.js, React, and TypeScript. Passionate about creating scalable web applications.',
    imageUrl: '/images/team/jane-smith.jpg',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    role: 'Full-Stack Architect',
    bio: 'Designs and implements end-to-end solutions combining modern frontend and backend technologies.',
    imageUrl: '/images/team/bob-johnson.jpg',
  },
] as const;



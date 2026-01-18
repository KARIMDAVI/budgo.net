export const siteConfig = {
  name: 'BudGo.Net',
  description: 'We craft exceptional iOS applications and web platforms that transform businesses. Our team combines cutting-edge technology with creative design to deliver solutions that exceed expectations.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://budgo.net',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/budgonet',
    github: 'https://github.com/budgonet',
    linkedin: 'https://linkedin.com/company/budgonet',
  },
  company: {
    name: 'BudGo LLC',
    email: 'info@budgo.net',
    phone: '+1 (555) 123-4567',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: 'USA',
    },
  },
};

export type SiteConfig = typeof siteConfig;

# BudGo.Net - Enterprise iOS & Web Development

A modern, production-ready company website built with Next.js 14, TypeScript, and Tailwind CSS. Featuring enterprise-grade architecture, animated backgrounds, and a unique diagonal slider management team showcase.

## ✨ Features

### Design & UX
- 🎨 **Animated Code Background** - Dynamic particle system with syntax-highlighted code snippets
- 🌓 **Light/Dark Theme** - System-aware theme with smooth transitions
- 💎 **Glassmorphism Design** - Modern frosted glass effects throughout
- 🎯 **Diagonal Slider UI** - Innovative skewed panel design for team presentation
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- ♿ **WCAG 2.1 AA Compliant** - Full accessibility support

### Development
- ⚡ **Enterprise Architecture** - Atomic design with src/ directory structure
- 🔒 **Security First** - CSP headers, input sanitization, XSS protection
- 🚀 **Performance Optimized** - Next.js Image, code splitting, lazy loading
- 🎭 **Framer Motion** - Smooth animations with staggered transitions
- 📊 **Portfolio System** - Enterprise-grade project showcase with metrics
- 👥 **Team Management** - Dynamic team profiles with modal views

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript 5+ (strict mode)
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 11+
- **Icons**: Lucide React
- **Fonts**: Inter, Dancing Script (Google Fonts)
- **Image Optimization**: Next.js Image with WebP/AVIF

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KARIMDAVI/budgo.net.git
cd budgo.net
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Configure `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://budgo.net
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 📁 Project Structure

```
budgo-net/
├── src/                      # Source code
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with BackgroundLayer
│   │   ├── page.tsx          # Homepage with terminal interface
│   │   ├── (marketing)/      # Marketing pages group
│   │   │   ├── about/        # About page
│   │   │   ├── company/      # Company pages
│   │   │   │   ├── management/    # Team with diagonal slider
│   │   │   │   └── history/       # Company history timeline
│   │   │   ├── contact/      # Contact page with CLI interface
│   │   │   ├── portfolio/    # Project showcase with filters
│   │   │   └── what-we-do/   # Services page
│   │   └── api/              # API routes
│   │       └── contact/      # Contact form endpoint
│   ├── components/           # React components (Atomic Design)
│   │   ├── atoms/            # Basic building blocks
│   │   ├── molecules/        # Simple component groups
│   │   ├── organisms/        # Complex components
│   │   ├── sections/         # Page sections
│   │   ├── templates/        # Page templates
│   │   ├── layout/           # Layout components
│   │   │   ├── BackgroundLayer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── ui/               # UI components
│   │   └── code-background/  # Animated code background
│   ├── lib/                  # Utilities
│   │   ├── color-system.ts   # Design system colors
│   │   ├── portfolio-data.ts # Portfolio projects
│   │   ├── team-data.ts      # Team information
│   │   └── utils.ts          # Helper functions
│   ├── hooks/                # Custom React hooks
│   ├── config/               # Configuration
│   ├── styles/               # Global styles
│   │   └── globals.css
│   ├── tests/                # Test files
│   └── types/                # TypeScript types
├── public/                   # Static assets
│   ├── images/               # Optimized images
│   │   ├── team/             # Team member photos
│   │   └── portfolio/        # Project screenshots
│   ├── assets/               # Other static files
│   └── robots.txt
├── Assets/                   # Background images
└── ...config files           # Next.js, TypeScript, Tailwind configs
```

## 🎨 Key Pages

- **/** - Homepage with animated terminal interface
- **/about** - Company overview and values
- **/company/management** - Team profiles with diagonal slider UI
- **/company/history** - Interactive timeline
- **/portfolio** - Project showcase with filtering
- **/what-we-do** - Services and capabilities
- **/contact** - CLI-style contact form

## 🔒 Security Features

- Content Security Policy (CSP) headers
- Secure HTTP headers (HSTS, X-Frame-Options, X-Content-Type-Options)
- Input sanitization and validation
- XSS protection
- CSRF protection for forms
- No inline scripts or styles
- Secure environment variable handling

## ⚡ Performance Optimizations

- Next.js Image component with WebP/AVIF support
- Automatic code splitting and lazy loading
- Font optimization with `display: swap`
- Minified CSS and JavaScript
- Tree shaking for smaller bundle sizes
- Static generation where possible
- Image optimization and responsive srcsets
- Preconnect to external domains

## ♿ Accessibility

- Semantic HTML5 elements
- Comprehensive ARIA labels and roles
- Full keyboard navigation support
- Focus indicators on all interactive elements
- Reduced motion support (`prefers-reduced-motion`)
- Screen reader friendly
- Color contrast WCAG AA compliant
- Skip-to-content links

## 🎯 Design System

### Colors (Deep Focus Theme)
- **Primary**: Sky Blue `#38BDF8` - Trust & Logic
- **Secondary**: Teal `#2DD4BF` - Success & Growth  
- **Accent**: Indigo `#818CF8` - Creativity
- **Background**: Deep Slate `#0A0E1A` - The Void
- **Surface**: Slate `#1A1F35` - Elevated layers

### Animations
- **Fluid Entrance**: `cubic-bezier(0.25, 1, 0.5, 1)` - Modals, page loads
- **Snap Focus**: `cubic-bezier(0.19, 1, 0.22, 1)` - Hover states
- **Organic Pulse**: `cubic-bezier(0.34, 1.56, 0.64, 1)` - Notifications

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Documentation

- [Color System Guide](./COLOR_SYSTEM_GUIDE.md)
- [Implementation Summary](./IMPLEMENTATION_SUMMARY.md)
- [Portfolio Enhancement](./PORTFOLIO_ENHANCEMENT_COMPLETE.md)
- [Project Structure](./PROJECT_STRUCTURE.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)

## 🤝 Contributing

This is a private company project. For internal contributions:

1. Pull latest changes from main
2. Make your changes
3. Test thoroughly (`npm run build` and `npm run lint`)
4. Commit to main (we don't use feature branches)
5. Push to origin

## 📄 License

Copyright © 2024-2026 BudGo LLC. All rights reserved.

## 🔗 Links

- **Website**: [https://budgo.net](https://budgo.net)
- **GitHub**: [https://github.com/KARIMDAVI/budgo.net](https://github.com/KARIMDAVI/budgo.net)
- **Email**: sales@budgo.net

---

Built with ❤️ by the BudGo team



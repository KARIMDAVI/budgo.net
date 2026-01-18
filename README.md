# BudGo.Net - iOS & Web Development Company Website

A modern, production-ready website built with Next.js 14, TypeScript, and Tailwind CSS, featuring glassmorphism design and code-themed background animations.

## Features

- ✨ **Glassmorphism Design** - Modern frosted glass effect with browser fallbacks
- 🎨 **Code Background Animation** - Animated code snippets with syntax highlighting
- 📱 **Fully Responsive** - Mobile-first design with accessibility features
- ⚡ **Performance Optimized** - Next.js Image optimization, code splitting, and lazy loading
- 🔒 **Security First** - Content Security Policy, secure headers, and input sanitization
- ♿ **Accessible** - WCAG 2.1 AA compliant with keyboard navigation and screen reader support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter, Dancing Script (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env.local
```

3. Update `.env.local` with your configuration:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
budgo-net/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── layout/            # Layout components
│   ├── hero/              # Hero section components
│   └── code-background/   # Code animation
├── lib/                   # Utilities and constants
├── public/                # Static assets
│   └── Assests/          # Background images
└── ...config files
```

## Security Features

- Content Security Policy headers
- Secure HTTP headers (HSTS, X-Frame-Options, etc.)
- Input sanitization
- XSS protection
- No inline scripts

## Performance Optimizations

- Next.js Image component with WebP/AVIF support
- Code splitting and lazy loading
- Font optimization with `display: swap`
- CSS optimizations
- Production build optimizations

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- Screen reader friendly

## Strategic Rebrand & Implementation Plan

We are currently executing a strategic rebrand to align with high-performance engineering aesthetics (inspired by Devin.ai) while maintaining BudGo's identity.

- [**BudGo Rebrand Plan**](./BUDGO_REBRAND_PLAN.md): The master strategy document covering Design, Tech, UX, and Marketing.
- [**Technical Specification**](./ANALYSIS_AND_SPECIFICATION.md): Deep dive into the architectural patterns we are adopting.
- [**Implementation Roadmap**](./IMPLEMENTATION_ROADMAP.md): Phased execution guide.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 BudGo.Net. All rights reserved.



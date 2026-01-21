<br /> <p align="center"> <a href="https://budgo.net"> <img src="./public/images/logo.png" alt="BudGo Logo" width="200" /> </a> <h3 align="center">Enterprise iOS & Web Development</h3> <p align="center"> Building secure, high-performance digital products with modern architecture. </p> <p align="center"> <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-black" /> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue" /> <img alt="License" src="https://img.shields.io/badge/license-Proprietary-red" /> <img alt="Status" src="https://img.shields.io/badge/status-Production-success" /> </p> <p align="center"> <a href="https://budgo.net">View Website</a> · <a href="https://github.com/KARIMDAVI/budgo.net">GitHub</a> · <a href="mailto:sales@budgo.net">Contact</a> </p> </p> <p align="center"> BudGo.Net is a modern, production-ready enterprise website built with Next.js 14, TypeScript, and Tailwind CSS—designed for performance, security, and scalability. </p>
✨ Features
🎨 Design & UX

Animated code background with syntax-highlighted particles

Glassmorphism UI with layered depth

Light / Dark mode (system aware)

Fully responsive, mobile-first design

Diagonal slider UI for management team showcase

WCAG 2.1 AA accessibility compliance

🚀 Development & Architecture

Enterprise-grade architecture (Atomic Design)

Next.js App Router (14.2+)

Framer Motion animations with staggered transitions

Portfolio system with metrics and filtering

Dynamic team profiles with modal views

CLI-style contact interface

🔒 Security & Performance

CSP and secure HTTP headers

XSS, CSRF, and input sanitization

Next.js Image optimization (WebP / AVIF)

Automatic code splitting & lazy loading

Strict TypeScript mode

Environment-safe configuration

🛠️ Tech Stack
Stack	-	-	-	-	-
Frontend	<p align="center">Next.js 14</p>	<p align="center">TypeScript 5+</p>	<p align="center">Tailwind CSS</p>	<p align="center">Framer Motion</p>	<p align="center">Lucide Icons</p>
Platform	<p align="center">App Router</p>	<p align="center">Edge Ready</p>	<p align="center">Static & SSR</p>	<p align="center">Image Optimization</p>	<p align="center">SEO-Ready</p>
🚀 Quick Start

Run the project locally.

Step 1: Clone the repository
git clone https://github.com/KARIMDAVI/budgo.net.git
cd budgo.net

Step 2: Install dependencies
npm install

Step 3: Setup environment variables
cp .env.local.example .env.local


Update .env.local with valid values:

NEXT_PUBLIC_SITE_URL=https://budgo.net
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key

Step 4: Start development server
npm run dev


Open http://localhost:3000

🏗️ Build for Production
npm run build
npm start

Available Scripts

npm run dev – Development server

npm run build – Production build

npm start – Production server

npm run lint – ESLint

npm run type-check – TypeScript validation

📂 Project Structure
budgo-net/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── (marketing)/
│   │   │   ├── about/
│   │   │   ├── company/
│   │   │   │   ├── management/
│   │   │   │   └── history/
│   │   │   ├── portfolio/
│   │   │   ├── what-we-do/
│   │   │   └── contact/
│   │   └── api/contact/
│   ├── components/         # Atomic Design system
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── tests/
│   └── types/
├── public/
│   ├── images/
│   └── assets/
└── config files

🎯 Key Pages

/ – Homepage with animated terminal interface

/about – Company overview

/company/management – Diagonal team slider

/company/history – Interactive timeline

/portfolio – Filterable project showcase

/what-we-do – Services & capabilities

/contact – CLI-style contact form

♿ Accessibility

Semantic HTML5

ARIA labels and landmarks

Full keyboard navigation

Reduced-motion support

WCAG AA color contrast

Screen-reader optimized

🔐 Security Highlights

Strict CSP headers

No inline scripts or styles

Secure environment handling

XSS & CSRF protection

Input validation & sanitization

HSTS & security headers

🌐 Browser Support

Chrome / Edge 90+

Firefox 88+

Safari 14+

iOS Safari & Android Chrome

📚 Documentation

Color System Guide

Deployment Guide

Project Structure Overview

Portfolio Enhancements

Implementation Summary

🤝 Contributing

This is a private enterprise project.

Internal workflow:

Pull latest main

Make changes

Test (npm run build, npm run lint)

Commit directly to main

Push to origin

📄 License

© 2024–2026 BudGo LLC
All rights reserved.

🔗 Links

🌐 Website: https://budgo.net

💻 GitHub: https://github.com/KARIMDAVI/budgo.net

📧 Email: sales@budgo.net

Made with ❤️, TypeScript, and Next.js by the BudGo Team

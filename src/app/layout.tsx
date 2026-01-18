import type { Metadata } from 'next';
import { Inter, Dancing_Script } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'BudGo.Net - iOS & Web Development',
    template: '%s | BudGo.Net',
  },
  description: 'We craft exceptional iOS applications and web platforms that transform businesses. Our team combines cutting-edge technology with creative design to deliver solutions that exceed expectations.',
  keywords: [
    'iOS development',
    'web development',
    'mobile apps',
    'React Native',
    'Next.js',
    'TypeScript',
    'app development',
    'software development',
  ],
  authors: [{ name: 'BudGo.Net' }],
  creator: 'BudGo.Net',
  publisher: 'BudGo.Net',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://budgo.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'BudGo.Net - iOS & Web Development',
    description: 'We craft exceptional iOS applications and web platforms that transform businesses.',
    siteName: 'BudGo.Net',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BudGo.Net - iOS & Web Development',
    description: 'We craft exceptional iOS applications and web platforms that transform businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { BackgroundLayer } from '@/components/layout/BackgroundLayer';
import { Navigation } from '@/components/layout/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased transition-colors duration-300">
        <ThemeProvider>
          <BackgroundLayer />
          <CustomCursor />
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navigation />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


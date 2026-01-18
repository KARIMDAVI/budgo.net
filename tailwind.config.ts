import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY COLORS (60% - Backgrounds)
        'primary-bg-light': '#F0F7FF',
        'primary-bg-dark': '#0A0E1A',
        'primary-surface-light': '#E3F2FD',
        'primary-surface-dark': '#1A1F35',
        'primary-text-light': '#0F172A',
        'primary-text-dark': '#F8FAFC',
        'primary-text-muted-light': '#475569',
        'primary-text-muted-dark': '#94A3B8',
        
        // SECONDARY COLORS (30% - Accents)
        'secondary-main-light': '#0EA5E9',
        'secondary-hover-light': '#0284C7',
        'secondary-active-light': '#0369A1',
        'secondary-subtle-light': '#BAE6FD',
        'secondary-main-dark': '#38BDF8',
        'secondary-hover-dark': '#7DD3FC',
        'secondary-active-dark': '#0EA5E9',
        'secondary-subtle-dark': '#082F49',
        
        // TERTIARY COLORS (10% - Highlights)
        'tertiary-main-light': '#F43F5E',
        'tertiary-hover-light': '#E11D48',
        'tertiary-active-light': '#BE123C',
        'tertiary-subtle-light': '#FECDD3',
        'tertiary-main-dark': '#FB7185',
        'tertiary-hover-dark': '#FDA4AF',
        'tertiary-active-dark': '#F43F5E',
        'tertiary-subtle-dark': '#4C0519',
        
        // SEMANTIC COLORS
        'success-bg-light': '#DCFCE7',
        'success-text-light': '#166534',
        'success-border-light': '#86EFAC',
        'success-bg-dark': '#052E16',
        'success-text-dark': '#86EFAC',
        'success-border-dark': '#166534',
        
        'error-bg-light': '#FEE2E2',
        'error-text-light': '#991B1B',
        'error-border-light': '#FCA5A5',
        'error-bg-dark': '#450A0A',
        'error-text-dark': '#FCA5A5',
        'error-border-dark': '#991B1B',
        
        // LEGACY COLORS (keep for backward compatibility)
        glass: {
          dark: 'rgba(30, 41, 59, 0.7)',
          light: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(56, 189, 248, 0.1)',
          borderLight: 'rgba(0, 0, 0, 0.05)',
        },
        bg: {
          dark: '#0A0E1A',
          light: '#F0F7FF',
          surface: '#1A1F35',
        },
        primary: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
        },
        secondary: {
          DEFAULT: '#2DD4BF',
        },
        accent: {
          DEFAULT: '#818CF8',
          purple: '#C084FC',
        },
      },
      fontFamily: {
        script: ['var(--font-script)', 'Dancing Script', 'cursive'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backdropBlur: {
        glass: '16px',
      },
      transitionTimingFunction: {
        'fluid': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'snap': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
export default config;



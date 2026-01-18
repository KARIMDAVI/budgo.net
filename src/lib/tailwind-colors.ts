/**
 * BudGo.Net - Enhanced Tailwind Color Configuration
 * Integrates the new color system with existing Tailwind setup
 * 
 * USAGE:
 * Import this into tailwind.config.ts to extend your theme
 */

export const budgoColors = {
  // ============================================
  // PRIMARY COLORS (60% - Backgrounds)
  // ============================================
  primary: {
    // Light theme backgrounds
    'bg-light': '#F0F7FF',
    'surface-light': '#E3F2FD',
    'text-light': '#0F172A',
    'text-muted-light': '#475569',
    
    // Dark theme backgrounds
    'bg-dark': '#0A0E1A',
    'surface-dark': '#1A1F35',
    'text-dark': '#F8FAFC',
    'text-muted-dark': '#94A3B8',
  },

  // ============================================
  // SECONDARY COLORS (30% - Accents)
  // ============================================
  secondary: {
    // Light theme accents
    'main-light': '#0EA5E9',
    'hover-light': '#0284C7',
    'active-light': '#0369A1',
    'subtle-light': '#BAE6FD',
    
    // Dark theme accents
    'main-dark': '#38BDF8',
    'hover-dark': '#7DD3FC',
    'active-dark': '#0EA5E9',
    'subtle-dark': '#082F49',
  },

  // ============================================
  // TERTIARY COLORS (10% - Highlights)
  // ============================================
  tertiary: {
    // Light theme highlights
    'main-light': '#F43F5E',
    'hover-light': '#E11D48',
    'active-light': '#BE123C',
    'subtle-light': '#FECDD3',
    
    // Dark theme highlights
    'main-dark': '#FB7185',
    'hover-dark': '#FDA4AF',
    'active-dark': '#F43F5E',
    'subtle-dark': '#4C0519',
  },

  // ============================================
  // SEMANTIC COLORS (Status & Feedback)
  // ============================================
  success: {
    'bg-light': '#DCFCE7',
    'text-light': '#166534',
    'border-light': '#86EFAC',
    'bg-dark': '#052E16',
    'text-dark': '#86EFAC',
    'border-dark': '#166534',
  },
  warning: {
    'bg-light': '#FEF3C7',
    'text-light': '#92400E',
    'border-light': '#FDE68A',
    'bg-dark': '#451A03',
    'text-dark': '#FDE68A',
    'border-dark': '#92400E',
  },
  error: {
    'bg-light': '#FEE2E2',
    'text-light': '#991B1B',
    'border-light': '#FCA5A5',
    'bg-dark': '#450A0A',
    'text-dark': '#FCA5A5',
    'border-dark': '#991B1B',
  },
  info: {
    'bg-light': '#DBEAFE',
    'text-light': '#1E3A8A',
    'border-light': '#93C5FD',
    'bg-dark': '#082F49',
    'text-dark': '#93C5FD',
    'border-dark': '#1E3A8A',
  },

  // ============================================
  // TERMINAL/CLI SPECIFIC COLORS
  // ============================================
  terminal: {
    // Light theme
    'success-light': '#16A34A',
    'error-light': '#DC2626',
    'warning-light': '#CA8A04',
    'info-light': '#2563EB',
    
    // Dark theme
    'success-dark': '#4ADE80',
    'error-dark': '#F87171',
    'warning-dark': '#FACC15',
    'info-dark': '#60A5FA',
  },
} as const;

// ============================================
// UTILITY CLASSES FOR QUICK ACCESS
// ============================================

export const budgoUtilityClasses = {
  // Background classes
  '.bg-primary': {
    '@apply bg-primary-bg-light dark:bg-primary-bg-dark': {},
  },
  '.bg-surface': {
    '@apply bg-primary-surface-light dark:bg-primary-surface-dark': {},
  },
  
  // Text classes
  '.text-primary': {
    '@apply text-primary-text-light dark:text-primary-text-dark': {},
  },
  '.text-muted': {
    '@apply text-primary-text-muted-light dark:text-primary-text-muted-dark': {},
  },
  
  // Button classes
  '.btn-primary': {
    '@apply bg-secondary-main-light dark:bg-secondary-main-dark': {},
    '@apply hover:bg-secondary-hover-light dark:hover:bg-secondary-hover-dark': {},
    '@apply active:bg-secondary-active-light dark:active:bg-secondary-active-dark': {},
    '@apply text-white dark:text-primary-bg-dark': {},
    '@apply px-6 py-3 rounded-lg font-medium': {},
    '@apply transition-colors duration-200': {},
    '@apply focus:outline-none focus:ring-2 focus:ring-secondary-main-light dark:focus:ring-secondary-main-dark focus:ring-offset-2': {},
  },
  '.btn-cta': {
    '@apply bg-tertiary-main-light dark:bg-tertiary-main-dark': {},
    '@apply hover:bg-tertiary-hover-light dark:hover:bg-tertiary-hover-dark': {},
    '@apply active:bg-tertiary-active-light dark:active:bg-tertiary-active-dark': {},
    '@apply text-white dark:text-primary-bg-dark': {},
    '@apply px-8 py-4 rounded-lg font-bold uppercase tracking-wider': {},
    '@apply shadow-lg shadow-rose-500/20 dark:shadow-rose-500/30': {},
    '@apply transition-all duration-200': {},
    '@apply focus:outline-none focus:ring-2 focus:ring-tertiary-main-light dark:focus:ring-tertiary-main-dark focus:ring-offset-2': {},
  },
  
  // Card classes
  '.card': {
    '@apply bg-primary-surface-light dark:bg-primary-surface-dark': {},
    '@apply border border-secondary-main-light/20 dark:border-secondary-main-dark/15': {},
    '@apply rounded-xl p-6': {},
    '@apply shadow-sm shadow-black/5 dark:shadow-lg dark:shadow-black/30': {},
  },
  
  // Glass effect
  '.glass': {
    '@apply backdrop-blur-xl': {},
    '@apply bg-white/85 dark:bg-primary-surface-dark/70': {},
    '@apply border border-secondary-main-light/20 dark:border-secondary-main-dark/15': {},
  },
  
  // Input classes
  '.input': {
    '@apply bg-primary-bg-light dark:bg-primary-surface-dark': {},
    '@apply border border-secondary-main-light/20 dark:border-secondary-main-dark/15': {},
    '@apply text-primary-text-light dark:text-primary-text-dark': {},
    '@apply placeholder:text-primary-text-muted-light dark:placeholder:text-primary-text-muted-dark': {},
    '@apply focus:border-secondary-main-light dark:focus:border-secondary-main-dark': {},
    '@apply focus:outline-none focus:ring-2 focus:ring-secondary-subtle-light dark:focus:ring-secondary-subtle-dark': {},
    '@apply px-4 py-3 rounded-lg': {},
    '@apply transition-all duration-200': {},
  },
  
  // Status badges
  '.badge-success': {
    '@apply bg-success-bg-light dark:bg-success-bg-dark': {},
    '@apply text-success-text-light dark:text-success-text-dark': {},
    '@apply border border-success-border-light dark:border-success-border-dark': {},
    '@apply px-3 py-1 rounded-full text-sm font-medium': {},
  },
  '.badge-error': {
    '@apply bg-error-bg-light dark:bg-error-bg-dark': {},
    '@apply text-error-text-light dark:text-error-text-dark': {},
    '@apply border border-error-border-light dark:border-error-border-dark': {},
    '@apply px-3 py-1 rounded-full text-sm font-medium': {},
  },
  '.badge-warning': {
    '@apply bg-warning-bg-light dark:bg-warning-bg-dark': {},
    '@apply text-warning-text-light dark:text-warning-text-dark': {},
    '@apply border border-warning-border-light dark:border-warning-border-dark': {},
    '@apply px-3 py-1 rounded-full text-sm font-medium': {},
  },
  '.badge-info': {
    '@apply bg-info-bg-light dark:bg-info-bg-dark': {},
    '@apply text-info-text-light dark:text-info-text-dark': {},
    '@apply border border-info-border-light dark:border-info-border-dark': {},
    '@apply px-3 py-1 rounded-full text-sm font-medium': {},
  },
} as const;

// ============================================
// EXAMPLE COMPONENT USAGE
// ============================================

export const exampleUsage = `
// ========== BASIC USAGE ==========

// 1. Button with theme-aware colors
<button className="
  bg-secondary-main-light dark:bg-secondary-main-dark
  text-white dark:text-primary-bg-dark
  hover:bg-secondary-hover-light dark:hover:bg-secondary-hover-dark
  px-6 py-3 rounded-lg
">
  Click Me
</button>

// 2. Using utility classes
<button className="btn-primary">
  Primary Action
</button>

<button className="btn-cta">
  Start Project
</button>

// 3. Card component
<div className="card">
  <h3 className="text-primary text-xl font-bold mb-2">
    Card Title
  </h3>
  <p className="text-muted">
    Card description text.
  </p>
</div>

// 4. Input field
<input 
  type="text"
  className="input w-full"
  placeholder="Enter text..."
/>

// 5. Status badges
<span className="badge-success">Active</span>
<span className="badge-error">Failed</span>
<span className="badge-warning">Pending</span>
<span className="badge-info">Info</span>

// 6. Glass navigation
<nav className="glass px-6 py-4">
  <a href="/" className="text-muted hover:text-primary">Home</a>
  <a href="/about" className="text-primary">About</a>
</nav>

// ========== ADVANCED USAGE ==========

// Terminal output component
<div className="
  bg-primary-surface-dark
  border border-secondary-main-dark/15
  rounded-lg p-4
  font-mono text-sm
">
  <span className="text-terminal-success-dark">$ </span>
  <span className="text-primary-text-dark">npm run build</span>
  <div className="mt-2 text-primary-text-muted-dark">
    ✓ Build complete
  </div>
</div>

// Hero section with gradient background
<section className="
  bg-gradient-to-br 
  from-primary-bg-light to-secondary-subtle-light
  dark:from-primary-bg-dark dark:to-primary-surface-dark
  min-h-screen
">
  <h1 className="text-primary text-5xl font-black">
    Welcome to BudGo
  </h1>
</section>

// Interactive card with hover effect
<div className="
  card
  hover:border-secondary-main-light dark:hover:border-secondary-main-dark
  hover:shadow-xl hover:shadow-secondary-main-light/10
  dark:hover:shadow-secondary-main-dark/20
  transform hover:-translate-y-1
  transition-all duration-300
  cursor-pointer
">
  <h3 className="text-primary font-bold">Project Title</h3>
  <p className="text-muted mt-2">Description</p>
</div>
` as const;

const budgoTailwindConfig = {
  budgoColors,
  budgoUtilityClasses,
  exampleUsage,
};

export default budgoTailwindConfig;

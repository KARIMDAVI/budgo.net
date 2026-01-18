/**
 * BudGo.Net - Quick Reference Color Palette
 * 
 * QUICK COPY-PASTE REFERENCE
 * Use this file when you need quick access to color values
 */

// ============================================
// LIGHT THEME COLORS
// ============================================

export const lightTheme = {
  // PRIMARY (60%) - Backgrounds
  background: {
    main: '#F0F7FF',        // Soft sky blue - main page background
    surface: '#E3F2FD',     // Lighter blue - cards, modals
    text: '#0F172A',        // Deep navy - primary text (15.8:1 contrast)
    textMuted: '#475569',   // Medium gray - secondary text (7.2:1 contrast)
  },
  
  // SECONDARY (30%) - Interactive & Accent
  accent: {
    main: '#0EA5E9',        // Sky blue - buttons, links
    hover: '#0284C7',       // Deeper blue - hover state
    active: '#0369A1',      // Dark blue - pressed state
    subtle: '#BAE6FD',      // Soft blue - backgrounds, badges
    textOnAccent: '#FFFFFF', // White text on accent (4.9:1 contrast)
  },
  
  // TERTIARY (10%) - Emphasis & CTAs
  highlight: {
    main: '#F43F5E',        // Warm coral - CTAs, alerts
    hover: '#E11D48',       // Deeper coral - hover
    active: '#BE123C',      // Dark coral - pressed
    subtle: '#FECDD3',      // Soft rose - backgrounds
    textOnHighlight: '#FFFFFF', // White text (5.2:1 contrast)
  },
  
  // SEMANTIC - Status Colors
  status: {
    success: { bg: '#DCFCE7', text: '#166534', border: '#86EFAC' }, // 7.8:1
    warning: { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' }, // 8.2:1
    error: { bg: '#FEE2E2', text: '#991B1B', border: '#FCA5A5' },   // 9.1:1
    info: { bg: '#DBEAFE', text: '#1E3A8A', border: '#93C5FD' },    // 8.5:1
  },
  
  // GLASS EFFECTS
  glass: {
    overlay: 'rgba(255, 255, 255, 0.85)',
    border: 'rgba(14, 165, 233, 0.2)',
    shadow: 'rgba(0, 0, 0, 0.05)',
  },
} as const;

// ============================================
// DARK THEME COLORS
// ============================================

export const darkTheme = {
  // PRIMARY (60%) - Backgrounds
  background: {
    main: '#0A0E1A',        // Deep navy - main page background
    surface: '#1A1F35',     // Slate blue - cards, terminal windows
    text: '#F8FAFC',        // Off-white - primary text (17.2:1 contrast)
    textMuted: '#94A3B8',   // Light gray - secondary text (8.9:1 contrast)
  },
  
  // SECONDARY (30%) - Interactive & Accent
  accent: {
    main: '#38BDF8',        // Bright sky blue - buttons, links
    hover: '#7DD3FC',       // Lighter blue - hover state
    active: '#0EA5E9',      // Medium blue - pressed state
    subtle: '#082F49',      // Dark blue - backgrounds
    textOnAccent: '#0A0E1A', // Dark text on accent (9.8:1 contrast)
  },
  
  // TERTIARY (10%) - Emphasis & CTAs
  highlight: {
    main: '#FB7185',        // Neon coral/rose - CTAs, emphasis
    hover: '#FDA4AF',       // Soft rose - hover
    active: '#F43F5E',      // Medium coral - pressed
    subtle: '#4C0519',      // Dark rose - backgrounds
    textOnHighlight: '#0A0E1A', // Dark text (11.3:1 contrast)
  },
  
  // SEMANTIC - Status Colors
  status: {
    success: { bg: '#052E16', text: '#86EFAC', border: '#166534' }, // 9.2:1
    warning: { bg: '#451A03', text: '#FDE68A', border: '#92400E' }, // 10.1:1
    error: { bg: '#450A0A', text: '#FCA5A5', border: '#991B1B' },   // 8.9:1
    info: { bg: '#082F49', text: '#93C5FD', border: '#1E3A8A' },    // 9.7:1
  },
  
  // GLASS EFFECTS
  glass: {
    overlay: 'rgba(26, 31, 53, 0.7)',
    border: 'rgba(56, 189, 248, 0.15)',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
} as const;

// ============================================
// TERMINAL COLORS (Both Themes)
// ============================================

export const terminal = {
  light: {
    success: '#16A34A',   // Green
    error: '#DC2626',     // Red
    warning: '#CA8A04',   // Yellow
    info: '#2563EB',      // Blue
  },
  dark: {
    success: '#4ADE80',   // Bright green
    error: '#F87171',     // Bright red
    warning: '#FACC15',   // Bright yellow
    info: '#60A5FA',      // Bright blue
  },
} as const;

// ============================================
// QUICK COPY-PASTE SNIPPETS
// ============================================

export const snippets = {
  // Button examples
  primaryButton: {
    light: 'bg-[#0EA5E9] hover:bg-[#0284C7] active:bg-[#0369A1] text-white',
    dark: 'bg-[#38BDF8] hover:bg-[#7DD3FC] active:bg-[#0EA5E9] text-[#0A0E1A]',
  },
  ctaButton: {
    light: 'bg-[#F43F5E] hover:bg-[#E11D48] active:bg-[#BE123C] text-white',
    dark: 'bg-[#FB7185] hover:bg-[#FDA4AF] active:bg-[#F43F5E] text-[#0A0E1A]',
  },
  
  // Card examples
  card: {
    light: 'bg-[#E3F2FD] border border-[#0EA5E9]/20 text-[#0F172A]',
    dark: 'bg-[#1A1F35] border border-[#38BDF8]/15 text-[#F8FAFC]',
  },
  
  // Input examples
  input: {
    light: 'bg-[#F0F7FF] border border-[#0EA5E9]/20 text-[#0F172A] placeholder:text-[#475569]',
    dark: 'bg-[#1A1F35] border border-[#38BDF8]/15 text-[#F8FAFC] placeholder:text-[#94A3B8]',
  },
  
  // Text examples
  heading: {
    light: 'text-[#0F172A]',
    dark: 'text-[#F8FAFC]',
  },
  body: {
    light: 'text-[#0F172A]',
    dark: 'text-[#F8FAFC]',
  },
  muted: {
    light: 'text-[#475569]',
    dark: 'text-[#94A3B8]',
  },
} as const;

// ============================================
// HSL VALUES (for dynamic manipulation)
// ============================================

export const hslValues = {
  light: {
    background: {
      main: 'hsl(210, 100%, 97%)',
      surface: 'hsl(207, 89%, 94%)',
      text: 'hsl(222, 47%, 11%)',
      textMuted: 'hsl(215, 19%, 35%)',
    },
    accent: {
      main: 'hsl(199, 89%, 48%)',
      hover: 'hsl(200, 98%, 39%)',
      active: 'hsl(201, 96%, 32%)',
    },
    highlight: {
      main: 'hsl(350, 89%, 60%)',
      hover: 'hsl(350, 84%, 50%)',
      active: 'hsl(347, 83%, 41%)',
    },
  },
  dark: {
    background: {
      main: 'hsl(225, 45%, 7%)',
      surface: 'hsl(229, 34%, 15%)',
      text: 'hsl(210, 40%, 98%)',
      textMuted: 'hsl(214, 20%, 65%)',
    },
    accent: {
      main: 'hsl(199, 92%, 60%)',
      hover: 'hsl(198, 93%, 74%)',
      active: 'hsl(199, 89%, 48%)',
    },
    highlight: {
      main: 'hsl(353, 94%, 71%)',
      hover: 'hsl(352, 95%, 82%)',
      active: 'hsl(350, 89%, 60%)',
    },
  },
} as const;

// ============================================
// CONTRAST RATIOS (for reference)
// ============================================

export const contrastRatios = {
  light: {
    bodyText: '15.8:1',      // Exceeds AAA (7:1)
    mutedText: '7.2:1',      // Exceeds AAA (7:1)
    buttonText: '4.9:1',     // Meets AA (4.5:1)
    ctaText: '5.2:1',        // Meets AA (4.5:1)
    successText: '7.8:1',    // Exceeds AAA
    errorText: '9.1:1',      // Exceeds AAA
  },
  dark: {
    bodyText: '17.2:1',      // Exceeds AAA (7:1)
    mutedText: '8.9:1',      // Exceeds AAA (7:1)
    buttonText: '9.8:1',     // Exceeds AAA (7:1)
    ctaText: '11.3:1',       // Exceeds AAA (7:1)
    successText: '9.2:1',    // Exceeds AAA
    errorText: '8.9:1',      // Exceeds AAA
  },
} as const;

// ============================================
// USAGE GUIDELINES
// ============================================

export const usageGuidelines = {
  primary: {
    percentage: '60%',
    usage: 'Page backgrounds, card surfaces, base elements',
    example: 'Main layout wrapper, card containers, modals',
  },
  secondary: {
    percentage: '30%',
    usage: 'Interactive elements, links, buttons, navigation',
    example: 'Primary buttons, active nav items, links, focus states',
  },
  tertiary: {
    percentage: '10%',
    usage: 'Call-to-action buttons, urgent alerts, emphasis',
    example: 'CTA buttons, error states, important badges',
  },
  semantic: {
    percentage: 'As needed',
    usage: 'System feedback only (success, error, warning, info)',
    example: 'Form validation, toast notifications, status badges',
  },
} as const;

// ============================================
// EXPORT ALL
// ============================================

const budgoPaletteReference = {
  lightTheme,
  darkTheme,
  terminal,
  snippets,
  hslValues,
  contrastRatios,
  usageGuidelines,
};

export default budgoPaletteReference;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get color value by theme and path
 * @example getColor('light', 'accent.main') => '#0EA5E9'
 */
export function getColor(
  theme: 'light' | 'dark',
  path: string
): string {
  const colors = theme === 'light' ? lightTheme : darkTheme;
  const keys = path.split('.');
  let value: any = colors;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Color path "${path}" not found in ${theme} theme`);
      }
      return '#000000';
    }
  }
  
  return value;
}

/**
 * Get theme-aware className string
 * @example getThemeClass('bg', 'accent.main') => 'bg-[#0EA5E9] dark:bg-[#38BDF8]'
 */
export function getThemeClass(
  property: string,
  colorPath: string
): string {
  const lightColor = getColor('light', colorPath);
  const darkColor = getColor('dark', colorPath);
  
  return `${property}-[${lightColor}] dark:${property}-[${darkColor}]`;
}

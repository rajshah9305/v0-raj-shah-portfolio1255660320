import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary heading font - Playfair Display
        'heading-primary': ['var(--font-heading-primary)', 'Georgia', 'serif'],
        // Secondary heading font - Cormorant Garamond
        'heading-secondary': ['var(--font-heading-secondary)', 'Georgia', 'serif'],
        // Body font - Source Serif 4
        'body': ['var(--font-body)', 'Georgia', 'serif'],
        // Monospace font - JetBrains Mono
        'mono': ['var(--font-mono)', 'Menlo', 'Monaco', 'monospace'],
        // Utility aliases for common usage
        'serif': ['var(--font-heading-secondary)', 'Georgia', 'serif'],
        'sans': ['var(--font-body)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-heading-primary)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.15em',
        'ultra-wide': '0.2em',
      },
      lineHeight: {
        'heading': '1.05',
        'tight': '1.15',
        'snug': '1.3',
        'normal': '1.5',
        'relaxed': '1.7',
        'loose': '1.85',
      },
      fontSize: {
        'display-xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-md': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-sm': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
    },
  },
  plugins: [],
}

export default config

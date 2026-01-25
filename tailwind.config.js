import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading-primary': ['var(--font-heading-primary)', 'serif'],
        'heading-secondary': ['var(--font-heading-secondary)', 'serif'],
        'body': ['var(--font-body)', 'serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        'heading': '1.1',
        'tight': '1.2',
        'snug': '1.35',
        'normal': '1.5',
        'relaxed': '1.65',
        'loose': '1.75',
      },
    },
  },
  plugins: [],
}

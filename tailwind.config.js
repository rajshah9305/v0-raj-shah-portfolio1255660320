module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Heading Fonts
                'heading-primary': ['var(--font-heading-primary)', 'serif'],    // H1-H2: DM Serif Display
                'heading-secondary': ['var(--font-heading-secondary)', 'serif'], // H3-H6: Bodoni Moda
                
                // Body & UI Fonts
                'body': ['var(--font-body)', 'serif'],                          // Paragraphs: Crimson Text
                'mono': ['var(--font-mono)', 'monospace'],                      // Code/UI: IBM Plex Mono
            },
            fontSize: {
                // Heading Scales - Responsive
                'h1-sm': ['2rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],      // 32px
                'h1-md': ['4rem', { lineHeight: '0.9', letterSpacing: '-0.03em' }],      // 64px
                'h1-lg': ['6rem', { lineHeight: '0.85', letterSpacing: '-0.03em' }],     // 96px
                'h1-xl': ['8rem', { lineHeight: '0.8', letterSpacing: '-0.04em' }],      // 128px
                
                'h2-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }], // 30px
                'h2-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],  // 36px
                'h2-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],     // 48px
                'h2-xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],     // 64px
                
                'h3-sm': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],   // 24px
                'h3-md': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }], // 30px
                'h3-lg': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],  // 36px
                
                'h4-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0' }],         // 20px
                'h4-md': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],   // 24px
                'h4-lg': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],  // 30px
                
                // Body Text Scales
                'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],      // 14px
                'body-base': ['1rem', { lineHeight: '1.65', letterSpacing: '0' }],       // 16px
                'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],      // 18px
                
                // UI & Labels
                'label-sm': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],  // 10px - Uppercase labels
                'label-md': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.12em' }],   // 12px
                'label-lg': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.1em' }],   // 14px
                
                // Caption & Metadata
                'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0' }],        // 12px
                'micro': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],    // 10px
            },
            fontWeight: {
                // Semantic weights
                'thin': '300',
                'light': '300',
                'normal': '400',
                'medium': '500',
                'semibold': '600',
                'bold': '700',
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
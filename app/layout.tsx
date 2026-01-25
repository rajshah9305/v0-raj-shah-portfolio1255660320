import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Bodoni_Moda, IBM_Plex_Mono, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GlobalBackground } from '@/components/portfolio/global-background'
import './globals.css'

// Premium Primary Heading Font - Bold, Modern Serif for H1-H2
const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-heading-primary'
});

// Sophisticated Secondary Heading Font - Elegant Serif for H3-H6
const bodoniModa = Bodoni_Moda({
  weight: ['400', '500', '600'],
  subsets: ["latin"],
  variable: '--font-heading-secondary'
});

// Refined Professional Mono - IBM Plex Mono for Code, UI, Labels
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ["latin"],
  variable: '--font-mono'
});

// Humanist Serif for Body - Premium, Highly Readable
const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  subsets: ["latin"],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Raj Shah | The Developer Chronicle',
  description: 'Full-Stack Developer & AI Enthusiast crafting the future of intelligent web applications. Explore my journey through code.',
  generator: 'v0.app',
  keywords: ['Raj Shah', 'Full-Stack Developer', 'AI', 'RAJ AI', 'Calgary', 'Web Development'],
  authors: [{ name: 'Raj Shah' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSerifDisplay.variable} ${bodoniModa.variable} ${ibmPlexMono.variable} ${crimsonText.variable} antialiased bg-background text-foreground`}>
        <GlobalBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

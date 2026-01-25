import React from "react"
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import { Playfair_Display, Cormorant_Garamond, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GlobalBackground } from '@/components/portfolio/global-background'
import { cn } from "@/lib/utils";
import './globals.css'

// Primary Heading Font - Condensed, Elegant Serif for H1-H2
const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
// Dramatic Primary Heading Font - High-contrast serif with elegant presence
const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-heading-primary',
  display: 'swap',
});

// Primary Body Font - Clean Sans-Serif
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body'
});

// Monospace for Code & Technical Labels
const jetBrainsMono = JetBrains_Mono({
// Refined Secondary Heading Font - Sophisticated serif with beautiful italics
const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: '--font-heading-secondary',
  display: 'swap',
});

// Modern Body Font - Excellent screen readability with editorial feel
const sourceSerif4 = Source_Serif_4({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

// Developer-focused Mono - Ligatures and excellent code readability
const jetbrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
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
      <body className={cn(
        instrumentSerif.variable,
        inter.variable,
        jetBrainsMono.variable,
        playfairDisplay.variable,
        cormorantGaramond.variable,
        sourceSerif4.variable,
        jetbrainsMono.variable,
        "antialiased bg-background text-foreground"
      )}>
        <GlobalBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

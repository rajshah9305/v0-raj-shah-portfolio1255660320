import React from "react"
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, JetBrains_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GlobalBackground } from '@/components/portfolio/global-background'
import './globals.css'

const instrumentSerif = Instrument_Serif({
    weight: '400',
    subsets: ["latin"],
    variable: '--font-serif'
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: '--font-mono'
});

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-sans'
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
            <body className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
                <GlobalBackground />
                {children}
                <Analytics />
            </body>
        </html>
    )
}

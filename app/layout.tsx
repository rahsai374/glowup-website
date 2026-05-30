import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GlowUp — Your Skin Care Partner',
  description: 'AI skin analysis in 60 seconds. Get a personalized skincare routine built for your skin type. Free. Built for Indian skin.',
  keywords: 'skin care, AI skin analysis, Indian skin, skincare routine, skin score, acne, dark spots',
  openGraph: {
    title: 'GlowUp — Your Skin Care Partner',
    description: 'AI skin analysis in 60 seconds. Personalized routine built for your skin type.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

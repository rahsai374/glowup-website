import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SITE_URL, FAQ_DATA } from './config'

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
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'GlowUp — Your Skin Care Partner',
    template: '%s — GlowUp',
  },
  description: 'AI skin analysis in 60 seconds. Get a personalized skincare routine built for your skin type. Free. Built for Indian skin.',
  keywords: 'skin care, AI skin analysis, Indian skin, skincare routine, skin score, acne, dark spots, personalized skincare, desi remedies',
  openGraph: {
    title: 'GlowUp — Your Skin Care Partner',
    description: 'AI skin analysis in 60 seconds. Personalized routine built for your skin type.',
    type: 'website',
    siteName: 'GlowUp',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlowUp — Your Skin Care Partner',
    description: 'AI skin analysis in 60 seconds. Personalized routine built for your skin type.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'GlowUp',
      url: SITE_URL,
      description: 'AI skin analysis in 60 seconds. Personalized skincare routine built for your skin type.',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'GlowUp',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Android, iOS',
      description: 'AI-powered skin analysis app with personalized skincare routines. Built for Indian skin.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      featureList: [
        'AI Skin Analysis',
        'Personalized Skincare Routine',
        'Skin Score Tracking',
        'Desi Remedies',
        'Hindi + English',
      ],
    },
    {
      '@type': 'Organization',
      name: 'GlowUp',
      url: SITE_URL,
      email: 'glowup.skincarepartner@gmail.com',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_DATA.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}

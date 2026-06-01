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
  metadataBase: new URL('https://glowup-website.vercel.app'),
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
      url: 'https://glowup-website.vercel.app',
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
      url: 'https://glowup-website.vercel.app',
      email: 'glowup.skincarepartner@gmail.com',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is GlowUp really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, GlowUp is completely free — no subscription, no hidden charges, no in-app purchases. Every feature is available to all users.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my selfie photo safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your photo is never stored on our servers. It is processed for AI analysis and immediately discarded. Only the resulting skin scores are saved to your account so you can track progress.',
          },
        },
        {
          '@type': 'Question',
          name: 'What skin types does GlowUp support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GlowUp is built specifically for Indian skin tones — dusky, wheatish, and fair. Our AI is trained to give accurate analysis across all Indian skin types.',
          },
        },
        {
          '@type': 'Question',
          name: 'What languages does the app support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GlowUp supports both Hindi and English. You can switch between languages anytime in the app settings.',
          },
        },
        {
          '@type': 'Question',
          name: 'How accurate is the AI skin analysis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GlowUp analyzes 10 skin metrics including hydration, radiance, dark spots, oiliness, and more. While it provides detailed insights, it is not a medical tool — always consult a dermatologist for medical skin concerns.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of product recommendations do I get?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GlowUp recommends a mix of desi remedies (ubtan, multani mitti, kasturi haldi) and affordable products from brands like Himalaya, Biotique, and Dabur — starting from just ₹75.',
          },
        },
      ],
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

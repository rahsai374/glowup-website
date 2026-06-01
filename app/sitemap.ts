import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glowup-website.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-05-30'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}

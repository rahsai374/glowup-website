import { ImageResponse } from 'next/og'

export const alt = 'GlowUp — AI Skin Analysis in 60 Seconds'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FFF5EE 0%, #F0E6DF 50%, #FFE2D1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: '#E07856',
            fontFamily: 'serif',
            marginBottom: 24,
          }}
        >
          GlowUp
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#2D1810',
            fontFamily: 'serif',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          AI Skin Analysis in 60 Seconds
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#2D1810',
            opacity: 0.7,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Personalized skincare routine built for your skin type. Free. Built for Indian skin.
        </div>
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 40,
          }}
        >
          {['Free Forever', 'Hindi + English', 'Desi Remedies', 'Rs.75 Products'].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(224, 120, 86, 0.15)',
                border: '2px solid rgba(224, 120, 86, 0.3)',
                borderRadius: 999,
                padding: '10px 24px',
                fontSize: 20,
                fontWeight: 700,
                color: '#E07856',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}

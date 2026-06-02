import Link from 'next/link'
import { FAQ_DATA } from './config'

function PhoneMockup() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-[260px] h-[520px]">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-brown rounded-[40px] shadow-[0_30px_80px_-10px_rgba(45,24,16,0.35)]" />
      {/* Screen */}
      <div className="absolute inset-[8px] bg-cream rounded-[34px] overflow-hidden">
        {/* Status bar */}
        <div className="h-8 bg-[#FFF5EE] flex items-center justify-center">
          <div className="w-20 h-4 bg-brown/10 rounded-full" />
        </div>
        {/* Screen content */}
        <div className="px-4 pt-2 pb-4 flex flex-col items-center gap-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brown/50">Skin Analysis Result</p>

          {/* Score ring */}
          <div className="relative w-28 h-28">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#F0E6DF" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="42" fill="none"
                stroke="#E07856" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="263.9"
                strokeDashoffset="66"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-serif font-bold text-brown">78</span>
              <span className="text-[9px] text-brown/50 font-bold uppercase tracking-wider">Score</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="w-full grid grid-cols-2 gap-1.5">
            {[
              { label: 'Hydration', val: 72, color: '#E07856' },
              { label: 'Radiance', val: 80, color: '#D4A574' },
              { label: 'Dark Spots', val: 65, color: '#E07856' },
              { label: 'Oiliness', val: 55, color: '#FB923C' },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-xl p-2 shadow-soft">
                <p className="text-[8px] font-bold text-brown/50 uppercase tracking-wider">{m.label}</p>
                <div className="mt-1 h-1 bg-brown/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${m.val}%`, backgroundColor: m.color }} />
                </div>
                <p className="text-[10px] font-bold text-brown mt-0.5">{m.val}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="w-full bg-primary rounded-xl py-2 text-center">
            <span className="text-white text-[10px] font-bold">See My Routine →</span>
          </div>
        </div>
      </div>
      {/* Notch */}
      <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-20 h-5 bg-brown rounded-b-2xl" />
    </div>
  )
}

function BlobBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-[40%] left-[-80px] w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[-60px] right-[20%] w-72 h-72 rounded-full bg-primary/8 blur-3xl" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-brown overflow-x-hidden">

      {/* NAV */}
      <header>
      <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-brown/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif font-bold text-2xl text-primary">GlowUp</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-brown/70">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </div>
          <a
            href="#download"
            className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-2xl hover:bg-primary/90 transition-colors shadow-soft"
          >
            Download App
          </a>
        </div>
      </nav>
      </header>

      <main>
      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 flex flex-col-reverse md:flex-row items-center gap-12">
        <BlobBackground />
        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            ✨ Free AI Skin Analysis
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl leading-tight text-brown mb-6">
            Glowing Skin<br />for Everyone
          </h1>
          <p className="text-lg text-brown/70 leading-relaxed mb-8 max-w-md">
            AI skin analysis in 60 seconds. Get a personalized morning & night routine built for your skin type — with desi remedies and products from ₹75.
          </p>
          <div id="download" className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="flex items-center gap-3 border-2 border-brown text-brown font-bold px-6 py-3.5 rounded-2xl hover:bg-brown hover:text-cream transition-all"
            >
              <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border-2 border-brown text-brown font-bold px-6 py-3.5 rounded-2xl hover:bg-brown hover:text-cream transition-all"
            >
              <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.25.99.22l.06-.04 11.65-6.73-2.52-2.52-10.18 9.07zm14.55-8.42L14.97 12l2.77-3.34L21 10.9c.93.54.93 1.67 0 2.21l-3.27 2.23zM2.5.88L13.43 11.8l-2.52 2.52L1.26 7.59A1.3 1.3 0 0 1 .5 6.46V1.54C.5 1.1.8.64 1.26.38L2.5.88zm1.35-.65L15.97 6.96 13.43 9.5 3.26.46l.59-.23z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
          <p className="mt-4 text-sm text-brown/50">Free forever · No subscription · Hindi + English</p>
        </div>
        <div className="flex-shrink-0 relative z-10">
          <PhoneMockup />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative bg-[#F0E6DF] py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-40px] left-[10%] w-72 h-72 rounded-full bg-primary/8 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">What You Get</p>
            <h2 className="font-serif font-bold text-4xl text-brown">Everything your skin needs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                ),
                title: 'AI Skin Analysis',
                body: 'Take a selfie. Get a 10-metric skin health report — hydration, glow, acne, dark spots, oiliness, radiance and more. Your personal skin score in 60 seconds.',
              },
              {
                icon: (
                  <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2a10 10 0 1 0 10 10"/>
                    <path d="M12 6v6l4 2"/>
                    <path d="M16 2l4 4-4 4"/>
                  </svg>
                ),
                title: 'Personalized Routine',
                body: 'Morning & night steps built for your skin type and main concern. Includes desi remedies — ubtan, multani mitti, kasturi haldi — alongside affordable products.',
              },
              {
                icon: (
                  <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: 'Track Your Glow',
                body: 'Watch your skin improve week over week with a score trend chart. See exactly which metrics improved and stay motivated with your daily streak.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-gradient-to-br from-[#FFEFE3] to-[#FFE2D1] rounded-3xl p-8 shadow-soft border border-primary/10"
              >
                <div className="w-12 h-12 bg-primary/15 rounded-2xl flex items-center justify-center text-primary mb-5">
                  {f.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-brown mb-3">{f.title}</h3>
                <p className="text-brown/70 leading-relaxed text-sm">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative py-24 bg-cream">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] right-[-60px] w-80 h-80 rounded-full bg-accent/12 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Simple &amp; Fast</p>
            <h2 className="font-serif font-bold text-4xl text-brown">3 steps to glowing skin</h2>
          </div>
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-px border-t-2 border-dashed border-primary/30" />
            {[
              { num: '01', title: 'Take a Selfie', body: 'Open the app and take a front-facing photo in good light. No makeup required.' },
              { num: '02', title: 'Get Your Score', body: 'Our AI analyzes 10 skin metrics and gives you a full health report in under 60 seconds.' },
              { num: '03', title: 'Follow Your Routine', body: 'Get a personalized morning & night routine with desi remedies and affordable products.' },
            ].map((step) => (
              <div key={step.num} className="flex-1 flex flex-col items-center text-center px-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                  <span className="font-serif font-bold text-2xl text-primary">{step.num}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-brown mb-3">{step.title}</h3>
                <p className="text-brown/65 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR INDIAN SKIN */}
      <section className="bg-brown text-cream py-24 relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-40px] right-[-40px] w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Made in India 🇮🇳</p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-cream mb-6">Built for Indian Skin</h2>
          <p className="text-cream/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Recommendations for dusky, wheatish, and fair Indian skin tones. Desi remedies at chemist prices — Himalaya, Biotique, Dabur from ₹75. Full Hindi support.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Ubtan & Multani Mitti', 'Kasturi Haldi & Besan', '₹75–₹240 Products', 'Hindi + English', 'Free Forever', 'No Subscription'].map((tag) => (
              <span key={tag} className="bg-cream/10 border border-cream/20 text-cream text-sm font-semibold px-5 py-2.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3">
            {['Hydration', 'Radiance', 'Dark Spots', 'Oiliness', 'Texture', 'Firmness', 'Redness', 'Blemishes', 'Wrinkles', 'Dark Circles'].map((m) => (
              <div key={m} className="bg-cream/8 border border-cream/10 rounded-2xl py-3 px-2">
                <p className="text-cream/80 text-xs font-semibold">{m}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-cream/40 text-xs">10 metrics tracked in every scan</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Common Questions</p>
            <h2 className="font-serif font-bold text-4xl text-brown">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl border border-brown/8 shadow-soft overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-serif font-bold text-lg text-brown hover:text-primary transition-colors">
                  {faq.q}
                  <span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-6 pb-5 text-brown/65 leading-relaxed text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY CALLOUT */}
      <section className="py-20 bg-[#F0E6DF]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg aria-hidden="true" className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h2 className="font-serif font-bold text-3xl text-brown mb-4">Your selfie stays on your device</h2>
          <p className="text-brown/65 leading-relaxed mb-6">
            We never store your face photos on our servers. Your photo is processed for analysis and immediately discarded. Your data is yours — always.
          </p>
          <Link href="/privacy" className="text-primary font-bold text-sm hover:underline">
            Read our Privacy Policy →
          </Link>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#F0E6DF] border-t border-brown/8 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif font-bold text-2xl text-primary">GlowUp</span>
            <p className="text-brown/50 text-sm mt-1">Your skin care partner</p>
          </div>
          <div className="flex items-center gap-8 text-sm text-brown/60">
            <Link href="/privacy" className="hover:text-primary transition-colors font-medium">Privacy Policy</Link>
            <a href="mailto:glowup.skincarepartner@gmail.com" className="hover:text-primary transition-colors font-medium">Contact</a>
          </div>
          <p className="text-brown/40 text-sm">© 2026 GlowUp. Made with ❤️ in India.</p>
        </div>
      </footer>

    </div>
  )
}

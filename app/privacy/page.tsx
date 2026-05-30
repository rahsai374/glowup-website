import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — GlowUp',
  description: 'GlowUp privacy policy. How we collect, use, and protect your personal data under India\'s DPDPA 2023.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-cream text-brown">
      {/* Nav */}
      <nav className="bg-cream/80 backdrop-blur-md border-b border-brown/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-bold text-2xl text-primary">GlowUp</Link>
          <Link href="/" className="text-sm font-semibold text-brown/60 hover:text-primary transition-colors">← Back to Home</Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1 className="font-serif font-bold text-4xl text-brown mb-4">Privacy Policy</h1>
          <div className="flex flex-wrap gap-4 text-sm text-brown/50">
            <span><strong className="text-brown/70">Effective date:</strong> 28 May 2026</span>
            <span><strong className="text-brown/70">Last updated:</strong> 28 May 2026</span>
            <span><strong className="text-brown/70">App:</strong> GlowUp (com.glowup.app)</span>
          </div>
          <div className="mt-4 bg-primary/8 border border-primary/20 rounded-2xl p-4 text-sm text-brown/70 leading-relaxed">
            <strong className="text-brown">Legal notice:</strong> This is a draft prepared for review. It should be reviewed by a qualified legal professional before publishing. Written in compliance with India's <strong>Digital Personal Data Protection Act (DPDPA) 2023</strong>. GlowUp is currently available to users in India only.
          </div>
        </div>

        <div className="prose-content space-y-10">

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-3">1. Who We Are</h2>
            <p className="text-brown/70 leading-relaxed">
              GlowUp ("we", "us", "our") is a mobile application that provides AI-powered skin analysis and personalised skincare recommendations. The app is developed and operated by Rahul Sharma, an individual developer based in India.
            </p>
            <p className="text-brown/70 leading-relaxed mt-3">
              If you have any questions about this policy, contact us at{' '}
              <a href="mailto:glowup.skincarepartner@gmail.com" className="text-primary font-medium hover:underline">glowup.skincarepartner@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-4">2. What Data We Collect</h2>

            <h3 className="font-serif font-semibold text-lg text-brown mb-3">2.1 Data you provide directly</h3>
            <div className="overflow-x-auto rounded-2xl border border-brown/10">
              <table className="w-full text-sm">
                <thead className="bg-[#FFEFE3]">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-brown">Data</th>
                    <th className="text-left px-4 py-3 font-bold text-brown">Why we collect it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brown/8">
                  {[
                    ['Phone number', 'To verify your identity via one-time password (OTP) during sign-up and login'],
                    ['Name', 'To personalise your in-app experience'],
                    ['Skin type', 'To give you relevant scan context and recommendations'],
                    ['Primary skin concern', 'To tailor AI analysis to what matters most to you'],
                    ['Age range', 'To calibrate skin analysis scoring appropriately'],
                    ['Water intake & sunscreen habits', 'To provide contextually accurate skincare advice'],
                  ].map(([d, w]) => (
                    <tr key={d} className="bg-white even:bg-cream/40">
                      <td className="px-4 py-3 font-semibold text-brown">{d}</td>
                      <td className="px-4 py-3 text-brown/65">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-serif font-semibold text-lg text-brown mt-6 mb-3">2.2 Data we generate from your use</h3>
            <div className="overflow-x-auto rounded-2xl border border-brown/10">
              <table className="w-full text-sm">
                <thead className="bg-[#FFEFE3]">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-brown">Data</th>
                    <th className="text-left px-4 py-3 font-bold text-brown">Why we collect it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brown/8">
                  {[
                    ['Skin scan results', 'Scores and metrics produced by AI analysis of your photo; stored so you can track progress over time'],
                    ['Daily usage streak', 'To help you build a consistent skincare habit'],
                    ['Scan history (up to 50 scans)', 'To show your skin progress over time'],
                  ].map(([d, w]) => (
                    <tr key={d} className="bg-white even:bg-cream/40">
                      <td className="px-4 py-3 font-semibold text-brown">{d}</td>
                      <td className="px-4 py-3 text-brown/65">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-serif font-semibold text-lg text-brown mt-6 mb-3">2.3 Photos</h3>
            <p className="text-brown/70 leading-relaxed mb-3">When you use the Scan feature, you take or upload a photo of your face. This photo is:</p>
            <ul className="space-y-2">
              {[
                'Compressed and converted to a data format suitable for AI analysis',
                'Transmitted to Google\'s Gemini API for processing (see Section 4)',
                'Never stored by us — the photo itself is not saved to our servers or database; only the resulting analysis scores are saved',
                'Temporarily stored on your device as a local file reference, which may be cleared when you update the app or clear device storage',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-brown/70 leading-relaxed">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-3">3. How We Use Your Data</h2>
            <p className="text-brown/70 leading-relaxed mb-4">We use your data solely to provide the GlowUp service:</p>
            <ul className="space-y-2">
              {[
                'Authenticating you securely via phone OTP',
                'Displaying your name and profile in the app',
                'Performing AI skin analysis when you initiate a scan',
                'Storing your scan history so you can track improvement over time',
                'Calculating your usage streak',
                'Showing personalised skincare tips and routines based on your profile',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-brown/70 leading-relaxed">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-brown/70 leading-relaxed">
              We do <strong className="text-brown">not</strong> use your data for advertising, sell it to third parties, or use it to train AI models.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-4">4. Third-Party Services</h2>
            <p className="text-brown/70 leading-relaxed mb-5">GlowUp uses the following third-party services. By using GlowUp, you agree to their respective privacy practices.</p>

            {[
              {
                name: 'Google Firebase (Authentication & Database)',
                items: [
                  { label: 'What we share', val: 'Your phone number is shared with Firebase Authentication to generate and verify OTPs. Your profile data and scan results are stored in Firebase Firestore.' },
                  { label: 'Purpose', val: 'Secure authentication and cloud data storage' },
                  { label: "Google's privacy policy", val: 'https://policies.google.com/privacy', isLink: true },
                  { label: 'Data location', val: 'Google Cloud infrastructure (may include servers outside India)' },
                ],
              },
              {
                name: 'Google Gemini API (AI Skin Analysis)',
                items: [
                  { label: 'What we share', val: 'Your face photo (as image data), along with your age range, skin type, and main concern, are sent to Google\'s Gemini API each time you perform a scan.' },
                  { label: 'Purpose', val: 'AI-powered skin analysis and scoring' },
                  { label: 'Important', val: 'Google may process this data according to its API terms. As of the date of this policy, Google states that data submitted to the Gemini API is not used to train its models when submitted via API. Please review Google\'s Gemini API terms for the most current information.' },
                  { label: "Google's privacy policy", val: 'https://policies.google.com/privacy', isLink: true },
                ],
              },
              {
                name: 'Expo / EAS (App Updates)',
                items: [
                  { label: 'What we share', val: 'No personal data. EAS delivers over-the-air app updates.' },
                  { label: "Expo's privacy policy", val: 'https://expo.dev/privacy', isLink: true },
                ],
              },
            ].map((provider) => (
              <div key={provider.name} className="mb-5 bg-white rounded-2xl border border-brown/8 overflow-hidden shadow-soft">
                <div className="bg-[#FFEFE3] px-5 py-3">
                  <h3 className="font-serif font-semibold text-brown">{provider.name}</h3>
                </div>
                <div className="divide-y divide-brown/6">
                  {provider.items.map((item) => (
                    <div key={item.label} className="px-5 py-3 flex flex-col sm:flex-row gap-1 sm:gap-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brown/50 sm:w-36 flex-shrink-0 pt-0.5">{item.label}</span>
                      {item.isLink ? (
                        <a href={item.val} className="text-sm text-primary hover:underline break-all" target="_blank" rel="noopener noreferrer">{item.val}</a>
                      ) : (
                        <span className="text-sm text-brown/70 leading-relaxed">{item.val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-4">5. Data Storage and Security</h2>
            <ul className="space-y-3">
              {[
                'Your profile and scan results are stored in Google Firebase Firestore, protected by security rules that ensure only you can access your own data.',
                'Your profile data (name, phone number, preferences) is also stored locally on your device using encrypted device storage.',
                'Your phone number and name are stored in plain text in local device storage. On rooted devices, this data may be accessible to other apps. We recommend using GlowUp on non-rooted devices.',
                'We use HTTPS for all network communication.',
                'We do not store face photos on our servers.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-brown/70 leading-relaxed">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-4">6. Your Rights Under the DPDPA 2023</h2>
            <p className="text-brown/70 leading-relaxed mb-5">Under India's Digital Personal Data Protection Act 2023, you have the following rights:</p>
            <div className="space-y-4">
              {[
                { right: 'Right to access', desc: 'You may request a summary of the personal data we hold about you.' },
                { right: 'Right to correction', desc: 'You may update your name, skin type, and other profile data directly in the app (Profile screen). For other corrections, contact us.' },
                { right: 'Right to erasure', desc: 'You may request deletion of your account and all associated data. To delete your account, use the "Delete Account" option in the Profile screen, or email us at glowup.skincarepartner@gmail.com. We will delete your data within 30 days.' },
                { right: 'Right to grievance redressal', desc: 'If you have a complaint about how we handle your data, contact us at glowup.skincarepartner@gmail.com. We will respond within 30 days.' },
                { right: 'Right to nominate', desc: 'You may nominate another individual to exercise your rights in the event of your death or incapacity, as permitted under the DPDPA.' },
              ].map((item) => (
                <div key={item.right} className="bg-white rounded-2xl p-5 border border-brown/8 shadow-soft">
                  <p className="font-serif font-bold text-brown mb-1">{item.right}</p>
                  <p className="text-sm text-brown/65 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-3">7. Children's Privacy</h2>
            <p className="text-brown/70 leading-relaxed">
              GlowUp is not intended for children under the age of 13. We do not knowingly collect personal data from children under 13. If you believe a child under 13 has provided us with their data, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-4">8. Data Retention</h2>
            <div className="overflow-x-auto rounded-2xl border border-brown/10">
              <table className="w-full text-sm">
                <thead className="bg-[#FFEFE3]">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-brown">Data</th>
                    <th className="text-left px-4 py-3 font-bold text-brown">Retention period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brown/8">
                  {[
                    ['Phone number & profile data', 'Until you delete your account'],
                    ['Scan results', 'Until you delete your account, or the 50-scan limit is reached (oldest removed first)'],
                    ['Usage streak', 'Until you delete your account'],
                    ['Face photos', 'Never stored on our servers; local device files may be cleared by the OS'],
                  ].map(([d, r]) => (
                    <tr key={d} className="bg-white even:bg-cream/40">
                      <td className="px-4 py-3 font-semibold text-brown">{d}</td>
                      <td className="px-4 py-3 text-brown/65">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-3">9. International Data Transfers</h2>
            <p className="text-brown/70 leading-relaxed">
              GlowUp is built for users in India. However, some of our third-party service providers (Google Firebase, Google Gemini API) operate infrastructure globally and may process your data on servers located outside India. By using GlowUp, you consent to this transfer. We ensure that such transfers are made to providers who maintain appropriate data protection standards.
            </p>
          </section>

          <section>
            <div className="bg-[#FBF2E0] border border-accent/30 rounded-2xl p-6">
              <h2 className="font-serif font-bold text-2xl text-brown mb-3">10. Important Disclaimer</h2>
              <p className="text-brown/70 leading-relaxed">
                <strong className="text-brown">GlowUp is not a medical application.</strong> The skin analysis, scores, skin age estimates, and recommendations provided by GlowUp are generated by an AI model and are for informational and cosmetic guidance purposes only. They do not constitute medical advice, diagnosis, or treatment. Always consult a qualified dermatologist or healthcare professional for medical concerns about your skin.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-3">11. Changes to This Policy</h2>
            <p className="text-brown/70 leading-relaxed">
              We may update this privacy policy from time to time. When we do, we will update the "Last updated" date at the top of this page. For significant changes, we will notify you within the app. Continued use of GlowUp after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-brown mb-4">12. Contact Us</h2>
            <div className="bg-gradient-to-br from-[#FFEFE3] to-[#FFE2D1] rounded-2xl p-6 border border-primary/10">
              <p className="text-brown/70 mb-2">For any privacy-related questions, requests, or complaints:</p>
              <p className="text-brown font-bold">
                Email:{' '}
                <a href="mailto:glowup.skincarepartner@gmail.com" className="text-primary hover:underline">
                  glowup.skincarepartner@gmail.com
                </a>
              </p>
              <p className="text-brown/60 text-sm mt-1">Response time: Within 30 days</p>
            </div>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-brown/10 text-center">
          <p className="text-brown/40 text-sm italic">GlowUp — Know your skin. Glow your way.</p>
          <Link href="/" className="mt-4 inline-block text-primary text-sm font-semibold hover:underline">← Back to Home</Link>
        </div>
      </main>
    </div>
  )
}

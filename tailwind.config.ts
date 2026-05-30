import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E07856',
        'primary-light': '#F2A68D',
        cream: '#FFF5EE',
        'body-bg': '#F0E6DF',
        brown: '#2D1810',
        accent: '#D4A574',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(45,24,16,0.05)',
        elevated: '0 10px 40px -10px rgba(45,24,16,0.08)',
      },
    },
  },
  plugins: [],
}
export default config

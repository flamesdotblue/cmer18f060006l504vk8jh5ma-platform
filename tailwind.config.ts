import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyanPop: '#00E5FF',
        yellowPop: '#FFD400',
        magentaPop: '#FF2E83',
        purplePop: '#6C2BD9',
        bluePop: '#1FB6FF',
      },
      boxShadow: {
        pop: '0 20px 60px rgba(0,0,0,0.25)'
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      }
    },
  },
  plugins: [],
} satisfies Config

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'POP KICKS — 90s Color Block Sneakers',
  description: 'A flat UI hero showcasing a 3D color-block sneaker in Spline.',
  icons: {
    icon: [
      { url: '/favicon.ico' }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

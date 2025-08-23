import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import '../globals.scss'

export const chalkboardFont = localFont({
  src: [
    {
      path: './fonts/chalkboard.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/chalkboard.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-chalkboard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pooya Badiee - Full Stack Developer',
  description: 'TODO',
  icons: [
    {
      url: '/assets/favicon-light.svg',
      media: '(prefers-color-scheme: dark)',
    },
    {
      url: '/assets/favicon-dark.svg',
      media: '(prefers-color-scheme: light)',
    },
  ],
}

// Since it is a graphical portfolio, we want to disable zooming
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={chalkboardFont.variable}>{children}</body>
    </html>
  )
}

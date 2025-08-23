import type { Metadata, Viewport } from 'next'
import '../globals.scss'

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
      <body>{children}</body>
    </html>
  )
}

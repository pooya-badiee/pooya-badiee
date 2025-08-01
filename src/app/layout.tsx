import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Pooya Badiee - Full Stack Developer',
  description: 'TODO',
  // Since it is a graphical portfolio, we want to disable zooming
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
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

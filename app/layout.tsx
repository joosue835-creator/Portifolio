import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Josué Alberto | Desenvolvedor Web',
  description: 'Portfólio de Josué Alberto - Desenvolvedor Web especializado em criar experiências digitais únicas e modernas.',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    title: 'Josué Alberto | Desenvolvedor Web',
    description: 'Portfólio de Josué Alberto - Desenvolvedor Web especializado em criar experiências digitais únicas e modernas.',
    siteName: 'Josué Alberto Portfolio',
    images: [
      {
        url: 'https://josue-alberto-portfolio.vercel.app/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Josué Alberto - Desenvolvedor Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josué Alberto | Desenvolvedor Web',
    description: 'Portfólio de Josué Alberto - Desenvolvedor Web especializado em criar experiências digitais únicas e modernas.',
    images: ['https://josue-alberto-portfolio.vercel.app/profile.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

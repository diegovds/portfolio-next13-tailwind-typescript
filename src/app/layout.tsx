import { Metadata } from 'next'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import BackToTop from './components/BackToTop'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Toaster from './components/Toaster'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATABASE!),
  title: {
    default: 'Home',
    template: '%s | Diego Dev',
  },
  icons: [
    {
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ],
  openGraph: {
    images: [
      {
        url: '/images/imageMetadata.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

const bricolage = Bricolage_Grotesque({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <Toaster />
        <BackToTop />

        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}

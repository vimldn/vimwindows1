import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'UK Windows Direct | New Windows & Double Glazing Installation',
    template: '%s | UK Windows Direct',
  },
  description: 'Get free quotes for new windows, double glazing & uPVC window installation from trusted local installers across the UK. FENSA certified. 10-year guarantee.',
  keywords: ['new windows', 'double glazing', 'window replacement', 'uPVC windows', 'window installers', 'UK'],
  authors: [{ name: 'UK Windows Direct' }],
  creator: 'UK Windows Direct',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'UK Windows Direct',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

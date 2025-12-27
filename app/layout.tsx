import { Metadata } from 'next'
import Header from '@/components/features/header'
import Footer from '@/components/features/footer'
import ChurchSchema from '@/components/features/seo/church-schema'

import { openSans, raleway } from '@/styles/fonts'

import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://columbiaview.org'),
  title: 'Columbia View Church',
  description:
    'Columbia View Church is a Christ-centered church where the Word of God is shared and people are loved. Advancing the great commission in the spirit of the great commandment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${raleway.variable}`}>
      <body>
          <ChurchSchema />
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}

import { Metadata } from 'next'
import { Box } from '@mui/material'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Providers from 'providers'

import '../globals.css'

export const metadata: Metadata = {
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
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Box
            sx={{
              mb: 5,
              px: '4vw',
              minHeight: '90vh',
            }}
          >
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

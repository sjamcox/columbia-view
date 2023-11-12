import { Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Providers from '../providers'

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

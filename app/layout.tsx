import { Container } from '@mui/material'
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
          <Container
            maxWidth="lg"
            sx={{
              my: 5,
              px: 3,
              minHeight: '90vh',
            }}
          >
            {children}
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

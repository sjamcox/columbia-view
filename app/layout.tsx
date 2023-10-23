import { Container } from '@mui/material'

import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'
import ThemeProvider from '../providers/theme'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

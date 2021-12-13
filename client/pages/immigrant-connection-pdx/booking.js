import { useState } from 'react'
import Head from 'next/head'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from '../../components/Layout'
import Link from 'next/link'

export default function Booking() {
  const [language, setLanguage] = useState(null)
  const [count, setCount] = useState(1)
  return (
    <Layout>
      <Head>
        <title>Book a Consultation | Immigrant Connection PDX</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        {count === 2 && (
          <Box display="flex" justifyContent="center" mb={3}>
            <Link href="/immigrant-connection-pdx">
              <Button variant="text" sx={{ color: 'rgb(57, 171, 225)' }}>
                ← Back to Immigrant Connection
              </Button>
            </Link>
          </Box>
        )}
        {!language && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(80vh - 72px)"
          >
            <Box>
              <Typography component="h1" variant="h2" textAlign="center" mb={3}>
                Schedule Your Consultation
              </Typography>
              <Typography textAlign="center">
                Which language do you prefer?
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{ color: 'white', my: 4, mr: 4 }}
                  onClick={() => setLanguage('english')}
                >
                  English
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{ color: 'white', my: 4 }}
                  onClick={() => setLanguage('spanish')}
                >
                  Español
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {language === 'english' && (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScMERyuJKUzzP3hE-QTt9gBD17nQZKrADt7ShUOJ1D1hiNHQg/viewform?embedded=true"
            width="100%"
            height="1244"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            onLoad={() => {
              window.parent.scrollTo(0, 0)
              setCount(count++)
            }}
          >
            Loading…
          </iframe>
        )}
        {language === 'spanish' && (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfojkYAxMObmL5-5_XJt4ZaXSktTXN92RpxmeIfVxwr_vqFDQ/viewform?embedded=true"
            width="100%"
            height="1244"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            onLoad={() => {
              window.parent.scrollTo(0, 0)
              setCount(count++)
            }}
          >
            Un momento…
          </iframe>
        )}
      </Container>
    </Layout>
  )
}

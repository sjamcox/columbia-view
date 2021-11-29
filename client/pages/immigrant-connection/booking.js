import Head from 'next/head'
import Script from 'next/script'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Layout } from '../../components/Layout'

export default function Booking() {
  return (
    <Layout>
      <Head>
        <title>Book a Consultation | Immigrant Connection PDX</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography></Typography>
      </Container>
    </Layout>
  )
}

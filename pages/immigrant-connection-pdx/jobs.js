import Head from 'next/head'
import { Layout } from '../../components/Layout'
import { Button, Divider, Link, Typography } from '@mui/material'

export default function Jobs() {
  return (
    <Layout>
      <Head>
        <title>Jobs | Immigrant Connection PDX</title>
      </Head>
      <Typography component="h1" variant="h2" sx={{ my: 5 }}>
        Available Positions
      </Typography>
      <Typography variant="h4" gutterBottom>
        Admin Support
      </Typography>
      <Typography paragraph>
        Assists the Legal Team in preparing, submitting, and following-up with
        client cases.
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        sx={{ color: 'white' }}
        href="https://docs.google.com/document/d/1VGq-3iASNoAkeBKDCnC2CQ_aVHH_V99C/view"
      >
        View Position Details
      </Button>
      <Divider sx={{ my: 6 }} />
      <Typography component="h2" variant="h4" paragraph>
        Contact Us
      </Typography>
      <Typography>
        If you have any questions about an open position or are interesting in
        applying, please contact our office:{' '}
        <Link href="tel:503.253.7939">503.253.7939</Link> or{' '}
        <Link href="mailto:office.cvwc@gmail.com">office.cvwc@gmail.com</Link>
      </Typography>
    </Layout>
  )
}

import Head from 'next/head'
import { Button, Container } from '@mui/material'
import { Layout } from '../../components/Layout'

export default function Booking() {
  return (
    <Layout>
      <Head>
        <title>Book a Consultation | Immigrant Connection PDX</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <iframe
          src="https://app.squarespacescheduling.com/schedule.php?owner=25385557"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script>
      </Container>
    </Layout>
  )
}

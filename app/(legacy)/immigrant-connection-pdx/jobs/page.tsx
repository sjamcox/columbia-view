import { Container, Divider, Link, Typography } from '@mui/material'
import Button from '@/components/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jobs | Immigrant Connection PDX',
}

export default function Jobs() {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" sx={{ my: 5 }}>
        Available Positions
      </Typography>
      <Typography variant="h4" gutterBottom>
        Bilingual Legal Assistant
      </Typography>
      <Typography
        sx={{
          mb: 4,
        }}
      >
        This Immigrant Connection PDX staff position starts as a legal assistant
        under the supervision of a DOJ accredited representative with the
        intention that within 12-18 months you will submit your DOJ
        accreditation application.
      </Typography>
      <Button
        color="blue"
        href="https://columbiaview.churchcenter.com/people/forms/981496"
      >
        View Position Details
      </Button>
      <Divider sx={{ my: 6 }} />
      <Typography variant="h4" gutterBottom>
        Admin Support
      </Typography>
      <Typography
        sx={{
          mb: 4,
        }}
      >
        Assists the Legal Team in preparing, submitting, and following-up with
        client cases.
      </Typography>
      <Button
        color="blue"
        href="https://docs.google.com/document/d/1VGq-3iASNoAkeBKDCnC2CQ_aVHH_V99C/view"
      >
        View Position Details
      </Button>
      <Divider sx={{ my: 6 }} />
      <Typography
        component="h2"
        variant="h4"
        sx={{
          mb: 4,
        }}
      >
        Contact Us
      </Typography>
      <Typography>
        If you have any questions about an open position or are interesting in
        applying, please contact our office:{' '}
        <Link href="tel:503.253.7939">503.253.7939</Link> or{' '}
        <Link href="mailto:office.cvwc@gmail.com">office.cvwc@gmail.com</Link>
      </Typography>
    </Container>
  )
}

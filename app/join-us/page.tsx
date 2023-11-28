import type { Metadata } from 'next'
import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'
import testimony from '../../public/sunday/mark-baptism-testimony.webp'
import worship from '../../public/sunday/worship-team.webp'
import kidsSermon from '../../public/sunday/sermon-in-a-sack.webp'
import communion from '../../public/sunday/sermon-communion-table.webp'
import AccordionSection from './AccordionSection'

export const metadata: Metadata = {
  title: 'Join Us | Columbia View Church',
}

export default function VisitUs() {
  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography component="h1" variant="h1" sx={{ mb: 3 }}>
          Visit Us
        </Typography>
        <Typography variant="h4" paragraph>
          We're excited to have you join us for a Sunday morning worship
          service!
        </Typography>
        <Box id="sunday-worship" my={4}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Worship Service
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography paragraph>
                Every Sunday, we gather and worship through music, prayer,
                preaching/teaching of God's word, giving, and testimony. Worship
                for us is the response of a life that is seeking after Jesus. If
                you are a guest with us, we encourage you to come with an open
                heart to what God may want to do in your life, and don't worry,
                we will not embarrass or call on you during worship.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography fontSize={15}>
                <strong>Meeting Time & Location</strong>
              </Typography>
              <Typography fontSize={15} paragraph>
                10:00 AM in the sanctuary
              </Typography>
              <Typography
                fontSize={15}
                sx={{
                  '& a': {
                    textDecoration: 'none',
                    color: 'rgb(57, 171, 225)',
                  },
                }}
              >
                {`We also live stream our worship services via `}
                <a href="https://www.youtube.com/@columbiaviewwesleyanchurch2805/streams">
                  YouTube
                </a>
                {` each Sunday`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ my: 4, borderRadius: '20px', overflow: 'hidden' }}>
        <Grid container spacing={2}>
          <Grid item xs={7} md={8}>
            <Box
              sx={{
                height: {
                  xs: '25vh',
                  md: '35vh',
                },
                position: 'relative',
                '& img': { objectFit: 'cover' },
              }}
            >
              <Image
                src={worship}
                alt="Three guitar players leading worship on a Sunday morning"
                fill
                priority
              />
            </Box>
          </Grid>
          <Grid item xs={5} md={4}>
            <Box
              sx={{
                height: {
                  xs: '25vh',
                  md: '35vh',
                },
                position: 'relative',
                '& img': { objectFit: 'cover' },
              }}
            >
              <Image
                src={testimony}
                alt="A man sharing his testimony"
                fill
                priority
              />
            </Box>
          </Grid>
          <Grid item xs={5} md={4}>
            <Box
              sx={{
                height: {
                  xs: '25vh',
                  md: '35vh',
                },
                position: 'relative',
                '& img': { objectFit: 'cover' },
              }}
            >
              <Image
                src={kidsSermon}
                alt="A pastor teaching a crowd of kids gathered around him"
                fill
                priority
              />
            </Box>
          </Grid>
          <Grid item xs={7} md={8}>
            <Box
              sx={{
                height: {
                  xs: '25vh',
                  md: '35vh',
                },
                position: 'relative',
                '& img': { objectFit: 'cover' },
              }}
            >
              <Image
                src={communion}
                alt='A communion table that reads "Do this in remembrance of me"'
                fill
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <AccordionSection />
    </>
  )
}

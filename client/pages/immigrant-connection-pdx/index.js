import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'
import { Layout } from '../../components/Layout'
import icMap from '../../public/ic-map.webp'
import chart from '../../public/family-workplace-community.webp'
import YouTubePlayer from '../../components/YouTubePlayer'

export default function ImmigrantConnection() {
  return (
    <Layout noContainer>
      <Head>
        <title>Immigrant Connection | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h2" gutterBottom mt={5}>
          Partner With Immigrant Connection PDX
        </Typography>
        <Typography paragraph>
          Immigrant Connection is committed to seeing immigrant families thrive.
          We believe when immigrant families have access to immigration legal
          services, all families can thrive.
        </Typography>
        <Grid container my={4}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              bgcolor: 'primary.main',
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: 'orange', textAlign: 'center' }}
            >
              160+
            </Typography>
            <Typography textAlign="center" color="white" fontWeight={600}>
              clients served
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              bgcolor: 'secondary.main',
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: 'orange', textAlign: 'center' }}
            >
              40+
            </Typography>
            <Typography textAlign="center" color="white" fontWeight={600}>
              citizenships granted
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              bgcolor: 'primary.main',
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: 'orange', textAlign: 'center' }}
            >
              10+
            </Typography>
            <Typography textAlign="center" color="white" fontWeight={600}>
              families reunited
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Typography></Typography>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Image
            src={icMap}
            alt="Map of Immigrant Connection sites across the United States"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Typography p={4} mr={4}>
            Immigrant Connection is a network of Immigration Legal Services
            sites based in both rural and urban areas across the country. Sites
            are church-based and are established in under-resourced communities
            in order to best serve the needs of immigrant families.
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <YouTubePlayer id={'_Px3J78h5x0'} />
        <Typography my={5}>
          As the Immigrant Connection Legal Network provides critical services,
          we can see positive outcomes for immigrant families, the workplace and
          school they are part of, as well as the communities they live in.
          Immigration Legal Services opens pathways for whole communities and
          their residents to thrive.
        </Typography>
        <Stack alignItems="center">
          <Box maxWidth={500}>
            <Image
              src={chart}
              alt="Chart showing key pillars of Immigrant Connection"
            />
          </Box>
        </Stack>
        <Typography component="h2" variant="h3" gutterBottom mt={5}>
          End of Year Giving Campaign
        </Typography>
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          Thank you to Tyson Foods, Inc. for providing a generous $12,000
          matching grant!
        </Typography>
        <Typography mb={5}>
          Our goal is to raise an additional $12,000 by the end of 2022 in order
          to open our office one additional day per week in 2023.
        </Typography>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography>Currently gifted: $5,700</Typography>
          <Typography>Goal: $12,000</Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={48}
          sx={{ height: 40, borderRadius: '100px', mb: 4 }}
        />
        <Stack direction="row" justifyContent="center">
          <Button
            href="https://columbiaview.churchcenter.com/people/forms/34910"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ color: 'white', mt: 2, mr: 2, textAlign: 'center' }}
          >
            Explore ways to partner with us
          </Button>
          <Button
            href="https://columbiaview.churchcenter.com/giving"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ color: 'white', mt: 2, textAlign: 'center' }}
          >
            Donate here
          </Button>
        </Stack>
        <Typography component="h2" variant="h3" gutterBottom mt={5}>
          Our Partners
        </Typography>
        <Typography>
          A heartfelt thank you to each of the organizations below for their
          support. Together we were able to accomplish so much in 2022.
        </Typography>
        <Grid container spacing={1} sx={{ mt: 2, mb: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://riverwest.org/">Riverwest Church</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://www.gracecc.net/">Grace Community Church</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://www.greshambible.org/about/">
              Gresham Bible Church
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://brilliancelabs.org/">Brilliance Labs</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://tipwelcome.com/">
              Tyson Immigration Partnership
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="https://woodvillagebaptist.org/">
              Wood Village Baptist Church
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="http://www.thechapelonline.org/">The Chapel</Link>
          </Grid>
        </Grid>
        <Typography>
          ... and to all of our individual recurring donors!
        </Typography>
      </Container>
    </Layout>
  )
}

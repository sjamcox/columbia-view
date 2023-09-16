import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import { Layout } from '../../components/Layout'
import columbiaKids from '../../public/columbia-kids-sunday.jpeg'
import outdoorBounce from '../../public/outdoor-bounce-house.png'
import nurseryBounce from '../../public/nursery-bounce-house.png'
import nursery from '../../public/nursery.webp'
import kidsRoom from '../../public/kids-room.webp'
import kidsSong from '../../public/kids-song-performance.png'
import checkIn from '../../public/check-in.png'
import ResponsiveImage from '../../components/ResponsiveImage'

export default function Ministries() {
  return (
    <Layout noContainer>
      <Head>
        <title>Columbia Kids | Columbia View Church</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h1" sx={{ mt: 5, mb: 3 }}>
          Columbia Kids
        </Typography>
        <Typography paragraph>
          Columbia View Church partners with parents to pass on faith to the
          next generation by creating fun and safe environments for kids to
          learn about the love of God through the story of the Bible. Our
          nursery and kids teams are incredible and excited to invest in your
          children!
        </Typography>
        <Typography paragraph>
          Each Sunday, the gospel is brought to light through teaching, crafts,
          music, and other fun activities.
        </Typography>
      </Container>
      <Container my={4} maxWidth="lg">
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
              <Image src={columbiaKids} fill priority />
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
              <Image src={outdoorBounce} fill priority />
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
              <Image src={nurseryBounce} fill priority />
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
              <Image src={kidsSong} fill priority />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Stack spacing={4}>
          <Box>
            <Typography component="h2" variant="h4" paragraph>
              Check-in Process
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={9} md={8}>
                <Typography>
                  <strong>Nursery</strong> (ages 0–3)
                </Typography>
                <Typography paragraph>
                  <strong>Kids Room</strong> (age 4–grade 5)
                </Typography>
                <Typography paragraph>
                  Upon arrival, parents are invited to check-in their children
                  at the station to the left of our lobby. But don’t drop off
                  your kids just yet! We invite you to grab a cup of coffee and
                  find a spot in our worship center. The service starts at 10am
                  with everyone together. After the first song, kids will be
                  dismissed to their appropriate classes.
                </Typography>
                <Typography>
                  Parent pick-up happens right after the service, usually
                  between 11:15 and 11:30am. For the safety of your child, you
                  will need to show your matching tag at pick up. We take your
                  child’s safety very seriously; our NextGen workers are here to
                  make this process as smooth as possible!
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3} md={4}>
                <ResponsiveImage src={checkIn} aspectRatio="3:4" />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography component="h2" variant="h4" paragraph>
              Curriculum
            </Typography>
            <Typography>
              Our church utilizes the childrens' curriculum put out by
              life.church. We follow the{' '}
              <Link href="https://open.life.church/schedule">
                “in-step” calendar
              </Link>
              , so you can always view what the current lesson is to find ways
              to integrate what our leaders are teaching with your own home
              spiritual formation efforts. We recommend downloading the “Bible
              App” in either Apple or Google Play stores as the app aligns with
              the curriculum used in our kids class. We truly want to partner
              with parents to pass on faith to the next generation, so please
              let us know how we can specifically partner with you to help your
              kids follow Jesus!
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Container my={4} maxWidth="lg">
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
              <Image src={nursery} fill />
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
              <Image src={kidsRoom} fill />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Stack spacing={4}>
          <Box>
            <Typography component="h2" variant="h4" paragraph>
              Volunteers
            </Typography>
            <Typography>
              As a smaller growing church, we love our NextGen workers so much!
              Each have a cleared yearly background check on file with the
              church office and go through basic training. If you are interested
              in serving our kids, please fill out our{' '}
              <Link href="https://columbiaview.churchcenter.com/people/forms/86247">
                serve team form
              </Link>
              . A volunteer handbook can be presented upon request.
            </Typography>
          </Box>
          <Box>
            <Typography component="h2" variant="h4" paragraph>
              Contact
            </Typography>
            <Typography>
              If you have any questions for either our Nursery or Kids
              Directors, please contact our church office:{' '}
              <Link href="tel:503.253.7939">503.253.7939</Link> or{' '}
              <Link href="mailto:office.cvwc@gmail.com">
                office.cvwc@gmail.com
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Layout>
  )
}

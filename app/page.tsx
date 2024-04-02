import type { Metadata } from 'next'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'

import Hero from '../components/Hero'
import ResponsiveImage from '../components/ResponsiveImage'
import ImageTile from '../components/ImageTile'
import baptism from '../public/sunday/mark-baptism.webp'
import worship from '../public/sunday/worship-team-vertical.webp'
import kids from '../public/kids/kids-activity.webp'
import lifeGroup from '../public/life-groups/ladies-group.webp'
import smilingFamily from '../public/icpdx/smiling-family.webp'
import immigrantFamily from '../public/icpdx/immigrant-family.webp'
import bible from '../public/bible-project-one-story.webp'
import rightnow from '../public/right-now-media.webp'
import lobby from '../public/lobby-group.webp'

import YouTubePlayer from '../components/YouTubePlayer'

export const metadata: Metadata = {
  title: 'Welcome Home | Columbia View Church',
  description:
    'Columbia View Church is a Christ-centered church where the Word of God is shared and people are loved. Advancing the great commission in the spirit of the great commandment.',
}

export default function Index() {
  return (
    <>
      <Hero
        src={lobby}
        alt="Made new"
        title="Made"
        titleHighlight="new"
        subtitle="Abiding in love, living by grace, growing together in Christ"
        buttonText="Join us this Sunday"
        href="/join-us"
      />
      <Box component="section">
        <Container
          sx={{
            py: { xs: 4, md: 12 },
            px: { xs: 3 },
            overflow: { xs: 'hidden', md: 'visible' },
          }}
        >
          <Grid
            container
            display="flex"
            direction={{ xs: 'column-reverse', md: 'row' }}
            justifyContent="space-between"
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{ width: { xs: '100%', md: 'auto' } }}
            >
              <Typography variant="h3" component="h2" color="primary" paragraph>
                Join us Sunday morning online or in person
              </Typography>
              <Typography variant="body1" paragraph>
                If you’re new to the area, new to church, or just looking for a
                new start, our Sunday morning worship services offer you the
                opportunity to build your faith in God and connect with new
                people. Our goal is to be an authentic community of believers
                who are learning to love Jesus and love others more and more
                each day. Regardless of your story, your doubts, or your
                struggles; you are welcome at Columbia View! So come as you are.
              </Typography>
              <Button
                href="/join-us"
                variant="contained"
                size="large"
                color="secondary"
                sx={{ color: 'white', mt: 2 }}
              >
                Join us this Sunday
              </Button>
            </Grid>
            <Grid item xs={4} sx={{ mb: { xs: 4, md: 0 } }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '480px' },
                  width: { xs: '375px', md: '400px' },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    height: '100%',
                    width: { xs: 'calc(100% - 50px)', md: '100%' },
                    bgcolor: '#BCE6FB',
                    top: { xs: 0, md: -40 },
                    left: { xs: 0, md: -40 },
                    borderRadius: '10px',
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    top: { xs: 20, md: 0 },
                    left: { xs: 20, md: 0 },
                    width: '100%',
                    height: { xs: 260, md: 400 },
                    '& img': {
                      borderRadius: '10px',
                      position: 'absolute',
                      objectFit: 'cover',
                    },
                  }}
                >
                  <Image
                    src={baptism}
                    alt="Pastor David baptising a new believer"
                    fill
                    priority
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container
        sx={{
          position: 'relative',
          py: { xs: 5, sm: 8, md: 12 },
          display: 'flex',
          justifyContent: 'center',
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            width: '100%',
            position: 'relative',
          }}
        >
          <YouTubePlayer id="fAGhUIL-LQE" />
        </Box>
      </Container>
      <Box
        component="section"
        sx={{ bgcolor: 'rgb(14, 73, 111)', borderRadius: '20px' }}
      >
        <Container sx={{ py: { xs: 4, md: 12 }, px: 3 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} sm={6}>
              <ResponsiveImage src={rightnow} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="h2" variant="h3" paragraph color="white">
                RightNow Media
              </Typography>
              <Typography component="p" paragraph color="white">
                RightNow Media is the world’s largest streaming library of video
                Bible study resources and is now available to all Columbia View
                members. RightNow Media is a tool that you can use to help you
                live out your faith in every area of your life.
              </Typography>
              <Button
                href="https://app.rightnowmedia.org/join/columbiaviewchurch"
                variant="contained"
                color="secondary"
              >
                Get Access Today
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section">
        <Container sx={{ py: { xs: 4, md: 12 }, px: 3 }}>
          <Stack alignItems="center">
            <Typography component="h2" variant="h2">
              Columbia View Ministries
            </Typography>
            <Typography component="p" variant="body1" paragraph>
              Check out the different ways to get involved
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              sx={{ maxWidth: { xs: '300px', sm: 'sm', lg: '100%' } }}
            >
              <Grid item xs={12} sm={6} lg={3}>
                <ImageTile
                  link="/ministries#sunday-worship"
                  image={worship}
                  alt="Worship band playing"
                  headline="Sunday Worship"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ImageTile
                  link="/ministries/nextgen"
                  image={kids}
                  alt="kids in sunday school"
                  headline="NextGen Ministries"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ImageTile
                  link="/ministries#life-groups"
                  image={lifeGroup}
                  alt="Two women smiling at life group"
                  headline="Life Groups"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ImageTile
                  link="/immigrant-connection-pdx"
                  image={smilingFamily}
                  alt="immigrant man with large hat"
                  headline="Immigrant Connection"
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Box
        component="section"
        sx={{ bgcolor: 'rgb(14, 73, 111)', borderRadius: '20px' }}
      >
        <Container sx={{ py: { xs: 4, md: 12 }, px: 3 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} sm={6}>
              <ResponsiveImage src={bible} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="h2" variant="h3" paragraph color="white">
                Dive deep into Scripture this year
              </Typography>
              <Typography component="p" paragraph color="white">
                Follow along as we journey through the Bible in one year. Join
                our reading plan online or using the YouVersion Bible app.
              </Typography>
              <Button
                href="https://bible.com/p/55820626/47e13a105a1cdaf72278d61eda22961e"
                variant="contained"
                color="secondary"
              >
                Get the Reading Plan
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section">
        <Container
          sx={{
            px: { xs: 0, md: 3 },
            py: { xs: 6, md: 12 },
          }}
        >
          <Box
            sx={{
              height: { xs: 'auto', md: 460 },
              position: { xs: 'static', md: 'relative' },
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Grid
              container
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                direction: 'column',
              }}
            >
              <Grid item xs={0} md={6}></Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: { xs: 'static', md: 'relative' },
                    height: { xs: 0, md: 460 },
                    padding: { xs: '20%', md: 0 },
                    width: '100%',
                    '& img': {
                      position: { xs: 'static', md: 'absolute' },
                      borderRadius: { xs: 'none', md: '10px' },
                      objectFit: 'cover',
                    },
                  }}
                >
                  <Image
                    src={immigrantFamily}
                    alt="Immigrant mother and daughter smiling"
                    fill
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container sx={{ position: { xs: 'static', md: 'absolute' } }}>
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  bgcolor: 'rgb(14, 73, 111)',
                  borderRadius: { xs: 'none', md: '10px' },
                  color: 'white',
                  p: 4,
                }}
              >
                <Box sx={{ maxWidth: 500 }}>
                  <Typography component="h2" variant="h3" paragraph>
                    Immigrant Connection PDX
                  </Typography>
                  <Typography paragraph>
                    Providing church-based, low-cost immigration legal services
                    in underserved communities of the Portland Metro area and
                    beyond.
                  </Typography>
                  <Button
                    href="/immigrant-connection-pdx"
                    variant="contained"
                    size="large"
                    color="secondary"
                    sx={{ color: 'white', mt: 2 }}
                  >
                    Learn more about our services
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={0} md={5}></Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

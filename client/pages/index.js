import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import VideoSection from '../components/VideoSection'
import ImageTile from '../components/ImageTile'
import sermon from '../public/sunday/sermon-david-preaching.webp'
import baptism from '../public/sunday/mark-baptism.webp'
import worship from '../public/sunday/worship-team-vertical.webp'
import kids from '../public/sunday/kids-room-1.webp'
import lifeGroup from '../public/sandra-dani.webp'
import immigrantMan from '../public/icpdx/immigrant-man-with-hat.webp'
import immigrantFamily from '../public/icpdx/immigrant-family.webp'
import bible from '../public/bible-recap.webp'
import rightnow from '../public/right-now-media.webp'

const Index = () => (
  <Layout noContainer>
    <Head>
      <title>Welcome Home | Columbia View</title>
      <meta
        name="description"
        content="Columbia View Wesleyan Church is a Christ-centered church where the Word of God is shared and people are loved. Advancing the great commission in the spirit of the great commandment."
      />
    </Head>
    <Hero
      src={baptism}
      alt="Alt tag"
      title="made"
      titleHighlight="new"
      subtitle="Consistently pursuing a personal knowledge of the heart of God"
      buttonText="Visit us this Sunday"
      href="/visit-us"
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
              people. Our goal is to be an authentic community of believers who
              are learning to love Jesus and love others more and more each day.
              Regardless of your story, your doubts, or your struggles; you are
              welcome at Columbia View! So come as you are.
            </Typography>
            <Link href="/visit-us" passHref>
              <Button
                variant="contained"
                component="a"
                size="large"
                color="secondary"
                sx={{ color: 'white', mt: 2 }}
              >
                Visit us this Sunday
              </Button>
            </Link>
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
                  height: { xs: '260px', md: '400px' },
                  '& span': {
                    borderRadius: '10px',
                  },
                  '& img': {
                    position: 'absolute',
                  },
                }}
              >
                <Image
                  src={sermon}
                  alt="Pastor David teaching from the stage"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <VideoSection id="fAGhUIL-LQE" image={kids} alt="kids in sunday school" />
    <Box component="section" sx={{ bgcolor: 'rgb(14, 73, 111)' }}>
      <Container sx={{ py: { xs: 4, md: 12 }, px: 3 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Image src={rightnow} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography component="h2" variant="h3" paragraph color="white">
              RightNow Media
            </Typography>
            <Typography component="p" variant="p" paragraph color="white">
              RightNow Media is the world’s largest streaming library of video
              Bible study resources and is now available to all Columbia View
              members. RightNow Media is a tool that you can use to help you
              live out your faith in every area of your life.
            </Typography>
            <Link
              href="https://app.rightnowmedia.org/join/columbiaviewchurch"
              passHref
            >
              <Button variant="contained" color="secondary">
                Get Access Today
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box
      component="section"
      sx={{
        background:
          'linear-gradient(180deg, rgba(188, 230, 251, 0.5) 0%, #FFFFFF 100%)',
      }}
    >
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
                link="/ministries#columbia-kids"
                image={kids}
                alt="kids in sunday school"
                headline="Columbia Kids"
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
                image={immigrantMan}
                alt="immigrant man with large hat"
                headline="Immigrant Connection"
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
    <Box component="section" sx={{ bgcolor: 'rgb(14, 73, 111)' }}>
      <Container sx={{ py: { xs: 4, md: 12 }, px: 3 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Image src={bible} layout="responsive" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography component="h2" variant="h3" paragraph color="white">
              Dive deep into Scripture this year
            </Typography>
            <Typography component="p" variant="p" paragraph color="white">
              Follow along as we journey through the Bible chronologically in
              one year. You can join our reading plan online or using the
              YouVersion Bible app.
            </Typography>
            <Link
              href="https://bible.com/p/48212307/30d6728bbce54816de0acaac51415c9a"
              passHref
            >
              <Button variant="contained" color="secondary">
                Get the Reading Plan
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box component="section">
      <Container sx={{ px: { xs: 0, md: 3 }, py: { xs: 0, md: 12 } }}>
        <Box
          sx={{
            height: { xs: 'auto', md: 460 },
            position: { xs: 'static', md: 'relative' },
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
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
                  },
                }}
              >
                <Image
                  src={immigrantFamily}
                  alt="Immigrant mother and daughter smiling"
                  layout="fill"
                  objectFit="cover"
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
                  Providing church-based, low-cost immigration legal services in
                  underserved communities of the Portland Metro area and beyond.
                </Typography>
                <Link href="/immigrant-connection-pdx" passHref>
                  <Button
                    variant="contained"
                    component="a"
                    size="large"
                    color="secondary"
                    sx={{ color: 'white', mt: 2 }}
                  >
                    Learn more about our services
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={0} md={5}></Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  </Layout>
)

export default Index

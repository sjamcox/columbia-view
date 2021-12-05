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

const Index = () => (
  <Layout>
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
    <VideoSection id="fAGhUIL-LQE" image={kids} alt="kids in sunday school" />
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
              Pellentesque et porta est. Quisque varius elementum nisl id
              accumsan. Suspendisse volutpat varius mauris, et posuere dolor
              dignissim sit amet. Donec congue congue purus eget pharetra. Sed
              tincidunt nunc pretium elit auctor molestie. Vestibulum ut
              volutpat arcu. Morbi lobortis eleifend nisi ac eleifend. Nam
              feugiat risus vel lorem vestibulum accumsan. Quisque eu elit eu
              mauris facilisis ultricies. Aliquam a est ut nisl dapibus
              dignissim quis aliquam elit. Nulla aliquet urna non lorem feugiat,
              in vulputate massa hendrerit.
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
                link="/immigrant-connection"
                image={immigrantMan}
                alt="immigrant man with large hat"
                headline="Immigrant Connection"
              />
            </Grid>
          </Grid>
        </Stack>
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
                <Link href="/immigrant-connection" passHref>
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

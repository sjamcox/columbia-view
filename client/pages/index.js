import Image from 'next/image'
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import ReactPlayer from 'react-player'
import testImage from '../public/test.jpg'

const Index = () => (
  <Layout>
    <Hero
      src={testImage}
      alt="Alt tag"
      title="made"
      titleHighlight="new"
      subtitle="Consistently pursuing a personal knowledge of the heart of God"
      buttonText="Visit us this Sunday"
      href="/visit"
    />
    <Box component="section">
      <Container sx={{ py: 12 }}>
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="space-between"
        >
          <Grid item xs={7}>
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
            <Button
              variant="contained"
              component="a"
              size="large"
              color="secondary"
              sx={{ color: 'white' }}
            >
              Visit us this Sunday
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ position: 'relative', height: '480px', width: '400px' }}>
              <Box
                sx={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  bgcolor: '#BCE6FB',
                  top: -40,
                  left: -40,
                  borderRadius: '10px',
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '400px',
                  '& div': {
                    borderRadius: '10px',
                  },
                  '& img': {
                    position: 'absolute',
                  },
                }}
              >
                <Image src={testImage} layout="fill" objectFit="cover" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box component="section" bgcolor="lightblue">
      <Container sx={{ py: 12 }}>
        <Stack alignItems="center">
          <Typography component="h2" variant="h2">
            Columbia View Ministries
          </Typography>
          <Typography component="p" variant="body1" paragraph>
            Check out the different ways to get involved
          </Typography>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  position: 'relative',
                  pb: '133%',
                  '& img': {
                    position: 'absolute',
                  },
                }}
              >
                <Image src={testImage} layout="fill" objectFit="cover" />
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, p: 2 }}>
                  <Typography
                    component="h3"
                    variant="h4"
                    sx={{ color: 'white' }}
                  >
                    Sunday Worship
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  position: 'relative',
                  pb: '133%',
                  '& img': {
                    position: 'absolute',
                  },
                }}
              >
                <Image src={testImage} layout="fill" objectFit="cover" />
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, p: 2 }}>
                  <Typography
                    component="h3"
                    variant="h4"
                    sx={{ color: 'white' }}
                  >
                    Columbia Kids
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  position: 'relative',
                  pb: '133%',
                  '& img': {
                    position: 'absolute',
                  },
                }}
              >
                <Image src={testImage} layout="fill" objectFit="cover" />
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, p: 2 }}>
                  <Typography
                    component="h3"
                    variant="h4"
                    sx={{ color: 'white' }}
                  >
                    Life Groups
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  position: 'relative',
                  pb: '133%',
                  '& img': {
                    position: 'absolute',
                  },
                }}
              >
                <Image src={testImage} layout="fill" objectFit="cover" />
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, p: 2 }}>
                  <Typography
                    component="h3"
                    variant="h4"
                    sx={{ color: 'white' }}
                  >
                    Immigrant Connection
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
    <Box
      component="section"
      sx={{
        position: 'relative',
        '& div > img': { zIndex: -100, opacity: '10%', position: 'absolute' },
      }}
    >
      <Image src={testImage} layout="fill" objectFit="cover" />
      <Container
        sx={{
          position: 'relative',
          py: 12,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 100,
        }}
      >
        <ReactPlayer url="https://www.youtube.com/watch?v=FZTROoxijGE" />
      </Container>
    </Box>
    <Box
      component="section"
      sx={{
        py: 12,
      }}
    >
      <Container>
        <Box
          sx={{
            height: 460,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid container sx={{ position: 'absolute' }}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6} bgcolor="green">
              <Box
                sx={{
                  position: 'relative',
                  height: '460px',
                  width: '100%',
                  '& img': { position: 'absolute' },
                }}
              >
                <Image src={testImage} layout="fill" objectFit="cover" />
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ position: 'absolute' }}>
            <Grid
              item
              xs={7}
              sx={{ bgcolor: 'rgb(14, 73, 111)', p: 4, color: 'white' }}
            >
              <Typography component="h2" variant="h2">
                Immigrant Connection PDX
              </Typography>
              <Typography>
                Our vision is to build bridges for a hope-filled future, and our
                mission is to provide affordable immigration legal services to
                immigrants in our community.
              </Typography>
              <Button
                variant="contained"
                component="a"
                size="large"
                color="secondary"
                sx={{ color: 'white' }}
              >
                Learn more about our services
              </Button>
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  </Layout>
)

export default Index

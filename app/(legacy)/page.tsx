import type { Metadata } from 'next'
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material'
import Image from 'next/image'

import ResponsiveImage from 'components/ResponsiveImage'
import ImageTile from 'components/ImageTile'
import baptism from 'public/sunday/mark-baptism.webp'
import worship from 'public/sunday/worship-team-vertical.webp'
import kids from 'public/kids/kids-activity.webp'
import lifeGroup from 'public/life-groups/ladies-group.webp'
import smilingFamily from 'public/icpdx/smiling-family.webp'
import immigrantFamily from 'public/icpdx/immigrant-family.webp'
import rightnow from 'public/right-now-media.webp'
import lobby from 'public/lobby-group.webp'
import Slideshow from './Slideshow'

export const metadata: Metadata = {
  title: 'Welcome Home | Columbia View Church',
  description:
    'Columbia View Church is a Christ-centered church where the Word of God is shared and people are loved. Advancing the great commission in the spirit of the great commandment.',
}

export default function Index() {
  return (
    <>
      <Slideshow />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          color="secondary"
          href="https://columbiaview.churchcenter.com/calendar/event/181914041"
        >
          Register for the Egg Hunt
        </Button>
      </Box>
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
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid
              size={{
                xs: 12,
                md: 6,
                lg: 6,
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{
                  mb: 4,
                }}
              >
                Join us Sunday morning online or in person
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                }}
              >
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
                sx={{ color: 'white', mt: 2, mr: 3 }}
              >
                Join us this Sunday
              </Button>
              <Button
                href="https://columbiaview.churchcenter.com/people/forms/33687"
                variant="contained"
                size="large"
                color="secondary"
                sx={{ color: 'white', mt: 2 }}
              >
                New Family Registration
              </Button>
            </Grid>
            <Grid sx={{ mb: { xs: 4, md: 0 } }} size={4}>
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
      <Box component="section">
        <Container sx={{ py: { xs: 4, md: 12 }, pt: { md: 0 }, px: 3 }}>
          <Stack
            sx={{
              alignItems: 'center',
            }}
          >
            <Typography component="h2" variant="h2">
              Columbia View Ministries
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                mb: 4,
              }}
            >
              Check out the different ways to get involved
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              sx={{
                width: '100%',
                maxWidth: { xs: '300px', sm: 'sm', lg: '100%' },
              }}
            >
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 3,
                }}
              >
                <ImageTile
                  link="/ministries#sunday-worship"
                  image={worship}
                  alt="Worship band playing"
                  headline="Sunday Worship"
                />
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 3,
                }}
              >
                <ImageTile
                  link="/ministries/nextgen"
                  image={kids}
                  alt="kids in sunday school"
                  headline="NextGen Ministries"
                />
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 3,
                }}
              >
                <ImageTile
                  link="/ministries#life-groups"
                  image={lifeGroup}
                  alt="Two women smiling at life group"
                  headline="Life Groups"
                />
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 3,
                }}
              >
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
          <Grid
            container
            spacing={6}
            sx={{
              alignItems: 'center',
            }}
          >
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <ResponsiveImage src={rightnow} />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <Typography
                component="h2"
                variant="h3"
                color="white"
                sx={{
                  mb: 4,
                }}
              >
                RightNow Media
              </Typography>
              <Typography
                component="p"
                color="white"
                sx={{
                  mb: 4,
                }}
              >
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
                width: '100%',
              }}
            >
              <Grid
                size={{
                  xs: 0,
                  md: 6,
                }}
              ></Grid>
              <Grid
                size={{
                  xs: 12,
                  md: 6,
                }}
              >
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
            <Grid
              container
              sx={{ position: { xs: 'static', md: 'absolute' }, width: '100%' }}
            >
              <Grid
                sx={{
                  bgcolor: 'rgb(14, 73, 111)',
                  borderRadius: { xs: 'none', md: '10px' },
                  color: 'white',
                  p: 4,
                }}
                size={{
                  xs: 12,
                  md: 7,
                }}
              >
                <Box sx={{ maxWidth: 500 }}>
                  <Typography
                    component="h2"
                    variant="h3"
                    sx={{
                      mb: 4,
                    }}
                  >
                    Immigrant Connection PDX
                  </Typography>
                  <Typography
                    sx={{
                      mb: 4,
                    }}
                  >
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
              <Grid
                size={{
                  xs: 0,
                  md: 5,
                }}
              ></Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

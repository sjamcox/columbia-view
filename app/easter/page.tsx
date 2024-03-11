'use client'

import { Metadata } from 'next'
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'

import { anton } from '../../utils/fonts'
import easter from '../../public/easter/easter-temp.png'
import worshipTeam from '../../public/sunday/worship-team.webp'
import bounceHouse from '../../public/outdoor-bounce-house.png'
import lobby from '../../public/lobby-group.webp'
import ResponsiveImage from '../../components/ResponsiveImage'

export const metadata: Metadata = {
  title: 'Easter Sunday | Columbia View Church',
  description: 'need to come up with something',
}

const typography = {
  body: {
    fontSize: 26,
    lineHeight: { xs: 1.3, sm: 1.5 },
  },
  sectionHeader: {
    fontWeight: 700,
    fontSize: {
      xs: 46,
      sm: 66,
    },
  },
  subheader: {
    fontWeight: 700,
    fontSize: {
      xs: 30,
      sm: 40,
    },
    lineHeight: 1.3,
  },
  display: {
    fontFamily: anton.style.fontFamily,
    fontWeight: 700,
    fontSize: {
      xs: 85,
      sm: 240,
    },
    letterSpacing: '3px',
  },
}

export default function Easter() {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.only('xs'))
  const isTabletDown = useMediaQuery((theme: any) =>
    theme.breakpoints.down('md')
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Grid container pt={{ xs: 2, sm: 6 }}>
        <Grid
          item
          xs={12}
          md={5}
          display={isTabletDown ? 'block' : 'flex'}
          justifyContent={!isTabletDown ? 'center' : 'unset'}
          position={!isTabletDown ? 'relative' : 'unset'}
          pb={7}
        >
          {isTabletDown ? (
            <ResponsiveImage
              src={easter}
              alt="colorful Easter text"
              aspectRatio={isMobile ? '4:3' : '16:9'}
              objectFit="cover"
              priority
            />
          ) : (
            <Box
              bgcolor="grey"
              borderRadius={3}
              width={320}
              height={600}
              position="sticky"
              top={70}
            />
          )}
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack spacing={5}>
            {isTabletDown ? (
              <Stack alignItems="center">
                <Box
                  bgcolor="grey"
                  borderRadius={3}
                  width={320}
                  height={600}
                  position="static"
                />
              </Stack>
            ) : (
              <ResponsiveImage
                src={easter}
                alt="colorful Easter text"
                aspectRatio="16:9"
                objectFit="cover"
                priority
              />
            )}
            <ResponsiveImage
              src={worshipTeam}
              alt="Worship team leading songs"
              aspectRatio={isMobile ? '4:3' : '8:3'}
              objectFit="cover"
              objectPosition="0 0"
            />
            <Stack>
              <Typography align="right" sx={typography.sectionHeader}>
                COME AND SEE
              </Typography>
              <Typography
                align="right"
                sx={{
                  fontSize: {
                    xs: 46,
                    sm: 36,
                  },
                  fontWeight: 700,
                  color: '#6A6A6A',
                  lineHeight: 1,
                }}
              >
                THIS EASTER
              </Typography>
              <Typography
                align="right"
                sx={{
                  fontSize: {
                    xs: 46,
                    sm: 36,
                  },
                  fontWeight: 700,
                }}
              >
                MARCH 31ST @ 10:00 AM
              </Typography>
            </Stack>
            <ResponsiveImage
              src={bounceHouse}
              alt="Young girl and boy smiling in a bounce house on a warm summer day"
              aspectRatio={isMobile ? '4:3' : '8:3'}
              objectFit="cover"
            />
            <Typography sx={typography.sectionHeader} lineHeight={1}>
              GREAT FOR KIDS!
            </Typography>
            <Stack pl={{ xs: 0, sm: 8 }}>
              <Typography sx={typography.subheader} mb={4}>
                Be sure to bring everybody!
              </Typography>
              <Typography sx={typography.body} mb={4}>
                There’s a separate ministry just for kids with fun, engaging
                activities. We work hard to create a fun and safe environment
                for kids to learn about the love of God through the story of the
                Bible, and Easter is no exception!
              </Typography>
              <Typography sx={typography.body} mb={4}>
                PLUS…After our Easter Service stay for a great on-site egg hunt
                for your kids!
              </Typography>
              <Typography sx={typography.subheader} mb={2}>
                Let us know you’re coming & Pre-register your kids to make
                check-in even easier!{' '}
                <Typography
                  component="span"
                  sx={{
                    ...typography.subheader,
                    fontWeight: 400,
                    color: '#909090',
                  }}
                >
                  Available for Kids 0-5th Grade.
                </Typography>
              </Typography>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  href="/join-us"
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{
                    fontSize: 34,
                    fontWeight: 400,
                    color: 'white',
                    mt: 2,
                    py: 4,
                    px: 7,
                    textAlign: 'center',
                    lineHeight: 1.5,
                  }}
                >
                  Pre-Register your Kids
                </Button>
              </Box>
            </Stack>
            <ResponsiveImage
              src={lobby}
              alt="People chatting in the foyer"
              aspectRatio={isMobile ? '4:3' : '8:3'}
              objectFit="cover"
            />
            <Typography sx={typography.sectionHeader} lineHeight={1} mb={4}>
              WHEN YOU GET HERE…
            </Typography>
            <Stack pl={{ xs: 0, sm: 8 }}>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={typography.subheader}
              >
                Be sure to Grab a coffee and drop off your kids
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                mb={4}
                sx={typography.body}
              >
                We’re here to celebrate, worship, make friends, and walk life
                together. You can relax and we know you’ll feel at home.
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={typography.subheader}
              >
                Find any seat you’d like in the sanctuary.
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                mb={8}
                sx={typography.body}
              >
                There’s one{' '}
                <span style={{ textDecoration: 'underline' }}>just</span> for
                you!
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Box bgcolor="grey" borderRadius={3} width="100%" height={256} />
      <Stack alignItems="center" py={5}>
        <Typography
          align="center"
          lineHeight={1}
          mb={7}
          sx={typography.sectionHeader}
        >
          COME AND SEE FOR YOURSELF!
        </Typography>
        <Typography align="center" lineHeight={1} sx={typography.display}>
          EASTER
        </Typography>
        <Typography align="center" sx={typography.subheader}>
          with Columbia View Church
        </Typography>
        <Typography align="center" mb={4} sx={typography.subheader}>
          March 31st @ 10:00am
        </Typography>
        <Typography align="center" sx={typography.body}>
          16700 NE Halsey Street
        </Typography>
        <Typography align="center" mb={4} sx={typography.body}>
          Portland, OR 97230
        </Typography>
        <Button
          href="/join-us"
          variant="contained"
          size="large"
          color="secondary"
          sx={{
            fontSize: 34,
            fontWeight: 400,
            color: 'white',
            mt: 2,
            py: 4,
            px: 7,
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Get Directions
        </Button>
      </Stack>
    </motion.div>
  )
}

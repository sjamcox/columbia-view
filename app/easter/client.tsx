'use client'

import {
  Box,
  Button,
  Grid2 as Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'

import { typography } from './typography'
import ResponsiveImage from 'components/ResponsiveImage'
import easter from 'public/easter/easter.jpg'
import worshipTeam from 'public/sunday/worship-team.webp'
import bounceHouse from 'public/outdoor-bounce-house.png'
import lobby from 'public/lobby-group.webp'
import colors from 'public/easter/colors.jpg'

export default function Client() {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.only('xs'))
  const isTabletDown = useMediaQuery((theme: any) =>
    theme.breakpoints.down('md')
  )

  return (
    (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Grid
        container
        sx={{
          pt: { xs: 2, sm: 6 },
        }}
      >
        <Grid
          sx={{
            display: isTabletDown ? 'block' : 'flex',
            justifyContent: !isTabletDown ? 'center' : 'unset',
            position: !isTabletDown ? 'relative' : 'unset',
            pb: 7,
          }}
          size={{
            xs: 12,
            md: 5
          }}>
          {isTabletDown ? (
            <ResponsiveImage
              src={easter}
              alt="colorful Easter text"
              aspectRatio={isMobile ? '4:3' : '16:9'}
              objectFit="cover"
              rounded
              priority
            />
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 3,
                width: 400,
                height: 700,
                position: 'sticky',
                top: 70,
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/WiGsjWldKF0"
                width="400"
                height="700"
              ></iframe>
            </Box>
          )}
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 7
          }}>
          <Stack spacing={5}>
            {isTabletDown ? (
              <Stack
                sx={{
                  alignItems: 'center',
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/Zzm_f1Tki3c"
                  width="320"
                  height="560"
                ></iframe>
              </Stack>
            ) : (
              <ResponsiveImage
                src={easter}
                alt="colorful Easter text"
                aspectRatio="4:3"
                objectFit="cover"
                rounded
                priority
              />
            )}
            <ResponsiveImage
              src={worshipTeam}
              alt="Worship team leading songs"
              aspectRatio={isMobile ? '4:3' : '8:3'}
              objectFit="cover"
              objectPosition="0 0"
              rounded
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
              rounded
            />
            <Typography
              sx={[
                {
                  lineHeight: 1,
                },
                typography.sectionHeader,
              ]}
            >
              GREAT FOR KIDS!
            </Typography>
            <Stack
              sx={{
                pl: { xs: 0, sm: 8 },
              }}
            >
              <Typography
                sx={[
                  {
                    mb: 4,
                  },
                  typography.subheader,
                ]}
              >
                Be sure to bring everybody!
              </Typography>
              <Typography
                sx={[
                  {
                    mb: 4,
                  },
                  typography.body,
                ]}
              >
                There’s a designated ministry just for kids with fun, engaging
                activities. We create a fun and safe environment for kids to
                learn about the love of Jesus through the story of the Bible,
                and Easter is an especially meaningful Sunday if you’re newer to
                church - or never have been to one before!
              </Typography>
              <Typography
                sx={[
                  {
                    mb: 4,
                  },
                  typography.body,
                ]}
              >
                PLUS…After our Easter Service stay for a great on-site egg hunt
                for your kids!
              </Typography>
              <Typography
                sx={[
                  {
                    mb: 2,
                  },
                  typography.subheader,
                ]}
              >
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  href="https://columbiaview.churchcenter.com/people/forms/711672"
                  variant="contained"
                  size="large"
                  color="secondary"
                  target="_blank"
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
              rounded
            />
            <Typography
              sx={[
                {
                  lineHeight: 1,
                  mb: 4,
                },
                typography.sectionHeader,
              ]}
            >
              WHEN YOU GET HERE…
            </Typography>
            <Stack
              sx={{
                pl: { xs: 0, sm: 8 },
              }}
            >
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={typography.subheader}
              >
                Be sure to Grab a coffee and drop off your kids
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={[
                  {
                    mb: 4,
                  },
                  typography.body,
                ]}
              >
                We’re here to celebrate, make friends, and learn to follow Jesus
                together. We invite you to come as you are - we know you’ll feel
                right at home.
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={typography.subheader}
              >
                Find any seat you’d like in the sanctuary.
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={[
                  {
                    mb: 4,
                  },
                  typography.body,
                ]}
              >
                There’s one{' '}
                <span style={{ textDecoration: 'underline' }}>just</span> for
                you!
              </Typography>
            </Stack>
            <Typography
              sx={[
                {
                  lineHeight: 1,
                  mb: 4,
                },
                typography.sectionHeader,
              ]}
            >
              FLOW OF SERVICE
            </Typography>
            <Stack
              sx={{
                pl: { xs: 0, sm: 8 },
              }}
            >
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={typography.subheader}
              >
                10a Easter Worship (sanctuary)
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={[
                  {
                    mb: 4,
                  },
                  typography.body,
                ]}
              >
                Children ages 4 - grade 5 join worship for the first song, then
                will be dismissed to their class.
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={typography.subheader}
              >
                11:30a Egg hunt
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={[
                  {
                    mb: 4,
                  },
                  typography.body,
                ]}
              >
                Outdoors if weather is good, indoors if it’s raining. We’ll have
                two separate areas for the littles (1 - 3) and bigger kids (4 -
                grade 5).
              </Typography>
              <Typography
                align={isMobile ? 'right' : 'left'}
                sx={[
                  {
                    mb: 8,
                  },
                  typography.subheader,
                ]}
              >
                11:45a kids prizes / giveaways
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <ResponsiveImage
        src={colors}
        alt="colorful background"
        aspectRatio={isMobile ? '2:1' : '4:1'}
        objectFit="cover"
        rounded
      />
    </motion.div>)
  );
}

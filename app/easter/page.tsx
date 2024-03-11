import { Metadata } from 'next'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'

export const metadata: Metadata = {
  title: 'Easter Sunday | Columbia View Church',
  description: 'need to come up with something',
}

export default function Easter() {
  return (
    <>
      <Grid container pt={6}>
        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          justifyContent="center"
          position="relative"
          pb={7}
        >
          <Box
            bgcolor="grey"
            borderRadius={3}
            width={320}
            height={600}
            position="sticky"
            top={70}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack spacing={5}>
            <Box bgcolor="grey" borderRadius={3} height={870} />
            <Box bgcolor="grey" borderRadius={3} height={256} />
            <Stack>
              <Typography
                sx={{ fontWeight: 700, fontSize: 70, textAlign: 'right' }}
              >
                COME AND SEE
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 35,
                  textAlign: 'right',
                  color: '#6A6A6A',
                }}
              >
                THIS EASTER
              </Typography>
              <Typography
                sx={{ fontWeight: 700, fontSize: 35, textAlign: 'right' }}
              >
                MARCH 31ST @ 10:00 AM
              </Typography>
            </Stack>
            <Box bgcolor="grey" borderRadius={3} height={242} />
            <Typography sx={{ fontWeight: 700, fontSize: 60 }}>
              GREAT FOR KIDS!
            </Typography>
            <Stack pl={8}>
              <Typography sx={{ fontWeight: 700, fontSize: 37 }}>
                Be sure to bring everybody!
              </Typography>
              <Typography sx={{ fontSize: 26 }} paragraph>
                There’s a separate ministry just for kids with fun, engaging
                activities. We work hard to create a fun and safe environment
                for kids to learn about the love of God through the story of the
                Bible, and Easter is no exception!
              </Typography>
              <Typography sx={{ fontSize: 26 }}>
                PLUS…After our Easter Service stay for a great on-site egg hunt
                for your kids!
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 37 }}>
                Let us know you’re coming & Pre-register your kids to make
                check-in even easier!{' '}
                <Typography
                  component="span"
                  sx={{ fontWeight: 400, fontSize: 37, color: '#909090' }}
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
                  sx={{ color: 'white', mt: 2 }}
                >
                  Pre-Register your Kids
                </Button>
              </Box>
            </Stack>
            <Box bgcolor="grey" borderRadius={3} height={242} />
            <Typography sx={{ fontWeight: 700, fontSize: 60 }}>
              WHEN YOU GET HERE…
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 37 }}>
              Be sure to Grab a coffee and drop off your kids
            </Typography>
            <Typography sx={{ fontSize: 26 }}>
              We’re here to celebrate, worship, make friends, and walk life
              together. You can relax and we know you’ll feel at home.
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 37 }}>
              Find any seat you’d like in the sanctuary.
            </Typography>
            <Typography sx={{ fontSize: 26 }}>
              There’s one just for you!
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box bgcolor="grey" borderRadius={3} width="100%" height={256} />
      <Stack alignItems="center">
        <Typography sx={{ fontWeight: 700, fontSize: 37 }}>
          COME AND SEE FOR YOURSELF!
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Open Sans Condensed',
            fontWeight: 700,
            fontSize: 200,
          }}
        >
          EASTER
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: 37 }}>
          with Columbia View Church
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: 37 }}>
          March 31st @ 10:00am
        </Typography>
        <Typography sx={{ fontSize: 26 }}>16700 NE Halsey Street</Typography>
        <Typography sx={{ fontSize: 26 }}>Portland, OR 97230</Typography>
        <Button
          href="/join-us"
          variant="contained"
          size="large"
          color="secondary"
          sx={{ color: 'white', mt: 2 }}
        >
          Get Directions
        </Button>
      </Stack>
    </>
  )
}

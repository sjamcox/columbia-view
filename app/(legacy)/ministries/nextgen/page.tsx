import type { Metadata } from 'next'
import Image from 'next/image'
import { Box, Link, Stack, Typography } from '@mui/material'
import { Grid2 as Grid } from '@mui/material'

import { ElevatedSection, LegacyImageSection } from 'components/Section'
import columbiaKids from 'public/columbia-kids-sunday.jpeg'
import outdoorBounce from 'public/outdoor-bounce-house.png'
import nurseryBounce from 'public/nursery-bounce-house.png'
import nursery from 'public/nursery.webp'
import kidsRoom from 'public/kids-room.webp'
import kidsSong from 'public/kids/kids-on-stage.webp'
import nurseryVolunteers from 'public/nursery/nursery-kids.webp'

export const metadata: Metadata = {
  title: 'NextGen Ministries | Columbia View Church',
}

export default function ColumbiaKids() {
  return (
    <Box>
      <Box sx={{ my: 5 }}>
        <Typography component="h1" variant="h1" sx={{ mt: 5, mb: 3 }}>
          NextGen Ministries
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
          }}
        >
          Partnering with parents to pass on faith to the next generation.
        </Typography>
        <Box
          sx={{
            maxWidth: 930,
            mt: 4,
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            color="primary"
            sx={{
              mb: 4,
            }}
          >
            Our Kids Program
          </Typography>
          <Typography
            sx={{
              mb: 4,
            }}
          >
            Columbia View Church creates a fun and safe environments for kids to
            learn about the love of God through the story of the Bible. Our
            nursery and kids teams are incredible and excited to invest in your
            children! Each Sunday, the gospel is brought to light through
            teaching, crafts, music, and other fun activities.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ my: 4, borderRadius: '20px', overflow: 'hidden' }}>
        <Grid container spacing={2}>
          <Grid
            size={{
              xs: 7,
              md: 8,
            }}
          >
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
              <Image
                src={columbiaKids}
                alt="A line of kids sitting in chairs"
                fill
                priority
              />
            </Box>
          </Grid>
          <Grid
            size={{
              xs: 5,
              md: 4,
            }}
          >
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
              <Image
                src={outdoorBounce}
                alt="Two kids smiling while enjoying a bounce house"
                fill
                priority
              />
            </Box>
          </Grid>
          <Grid
            size={{
              xs: 5,
              md: 4,
            }}
          >
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
              <Image
                src={nurseryBounce}
                alt="A young toddler in a small bounce house"
                fill
                priority
              />
            </Box>
          </Grid>
          <Grid
            size={{
              xs: 7,
              md: 8,
            }}
          >
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
              <Image
                src={kidsSong}
                alt="A crowd of kids on stage dancing to a song"
                fill
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ElevatedSection>
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '50%', md: '60%' },
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              sx={{
                mb: 4,
              }}
            >
              Check-in Process
            </Typography>
            <Typography>
              <strong>Nursery</strong> (ages 0–3)
            </Typography>
            <Typography
              sx={{
                mb: 4,
              }}
            >
              <strong>Kids Room</strong> (age 4–grade 5)
            </Typography>
            <Typography
              sx={{
                mb: 4,
              }}
            >
              Upon arrival, parents are invited to check-in their children at
              the station to the left of our lobby. But don’t drop off your kids
              just yet! We invite you to grab a cup of coffee and find a spot in
              our sanctuary. The service starts at 10am with everyone together.
              Before the teaching, kids will be dismissed to their appropriate
              classes.
            </Typography>
            <Typography>
              Parent pick-up happens right after the service, usually between
              11:15 and 11:30am. For the safety of your child, you will need to
              show your matching tag at pick up. We take your child’s safety
              very seriously; our NextGen workers are here to make this process
              as smooth as possible!
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: '40%', md: '30%' },
              height: { xs: 250, sm: 350 },
              mb: { xs: 4, sm: 0 },
              borderRadius: '20px',
              overflow: 'hidden',
              '& > img': { objectFit: 'cover' },
            }}
          >
            <Image src={nurseryVolunteers} alt="Check in area" fill />
          </Box>
        </Stack>
      </ElevatedSection>
      <LegacyImageSection src={kidsRoom} alt="Kids room">
        <Stack
          sx={{
            alignItems: 'center',
            my: '5vw',
          }}
        >
          <Stack
            sx={{
              width: { xs: '80%', sm: '65%', md: '50%' },
              alignItems: 'center',
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
              Curriculum
            </Typography>
            <Typography
              color="white"
              sx={{
                fontWeight: 500,
                mb: 4,
              }}
            >
              Our church utilizes the childrens' curriculum put out by
              life.church. We follow the{' '}
              <Link
                href="https://open.life.church/schedule"
                sx={{ color: 'white' }}
              >
                “in-step” calendar
              </Link>
              , so you can always view what the current lesson is to find ways
              to integrate what our leaders are teaching with your own home
              spiritual formation efforts. We recommend downloading the “Bible
              App” in either Apple or Google Play stores as the app aligns with
              the curriculum used in our kids class.
            </Typography>
            <Typography
              color="white"
              sx={{
                fontWeight: 500,
              }}
            >
              We truly want to partner with parents to pass on faith to the next
              generation, so please let us know how we can specifically partner
              with you to help your kids follow Jesus!
            </Typography>
          </Stack>
        </Stack>
      </LegacyImageSection>
      <ElevatedSection>
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row-reverse' }}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '40%', md: '35%' },
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              sx={{
                mb: 4,
              }}
            >
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
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: '50%', md: '60%' },
              height: { xs: 250, sm: 350, md: 450 },
              mb: { xs: 4, sm: 0 },
              borderRadius: '20px',
              overflow: 'hidden',
              '& > img': { objectFit: 'cover' },
            }}
          >
            <Image src={nursery} alt="Nursery" fill />
          </Box>
        </Stack>
      </ElevatedSection>
      <Box>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            mb: 4,
          }}
        >
          Contact
        </Typography>
        <Typography>
          If you have any questions for either our Nursery or Kids Directors,
          please contact our church office:{' '}
          <Link href="tel:503.253.7939">503.253.7939</Link> or{' '}
          <Link href="mailto:office.cvwc@gmail.com">office.cvwc@gmail.com</Link>
        </Typography>
      </Box>
    </Box>
  )
}

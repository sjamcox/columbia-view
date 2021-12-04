import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Layout } from '../components/Layout'
import testimony from '../public/sunday/mark-baptism-testimony.webp'
import worship from '../public/sunday/worship-team.webp'
import kidsSermon from '../public/sunday/sermon-in-a-sack.webp'
import communion from '../public/sunday/sermon-communion-table.webp'

export default function VisitUs() {
  const [expanded, setExpanded] = useState(false)
  const handleClick = (panel) => {
    panel === expanded ? setExpanded(false) : setExpanded(panel)
  }

  return (
    <Layout>
      <Head>
        <title>Visit Us | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h1" sx={{ mt: 5, mb: 3 }}>
          Visit Us
        </Typography>
        <Typography variant="h4" paragraph>
          We're excited to have you join us for a Sunday morning worship
          service!
        </Typography>
        <Box id="sunday-worship" my={4}>
          <Typography component="h2" variant="h3" color="primary" paragraph>
            Worship Service
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography paragraph>
                Every Sunday, we gather and worship through music, prayer,
                preaching/teaching of God's word, giving, and testimony. Worship
                for us is the response of a life that is seeking after Jesus. If
                you are a guest with us, we encourage you to come with an open
                heart to what God may want to do in your life, and don't worry,
                we will not embarrass or call on you during worship.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography fontSize={15}>
                <strong>Meeting Time & Location</strong>
              </Typography>
              <Typography fontSize={15} paragraph>
                10:00 AM in the sanctuary
              </Typography>
              <Typography
                fontSize={15}
                sx={{
                  '& a': {
                    textDecoration: 'none',
                    color: 'rgb(57, 171, 225)',
                  },
                }}
              >
                {`We also live stream our worship services via `}
                <a href="https://www.facebook.com/COLUMBIAVIEW/">Facebook</a>
                {` each Sunday`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container my={4} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={7} md={8}>
            <Box height={{ xs: '25vh', md: '35vh' }} position="relative">
              <Image src={worship} layout="fill" objectFit="cover" />
            </Box>
          </Grid>
          <Grid item xs={5} md={4}>
            <Box height={{ xs: '25vh', md: '35vh' }} position="relative">
              <Image src={testimony} layout="fill" objectFit="cover" />
            </Box>
          </Grid>
          <Grid item xs={5} md={4}>
            <Box height={{ xs: '25vh', md: '35vh' }} position="relative">
              <Image src={kidsSermon} layout="fill" objectFit="cover" />
            </Box>
          </Grid>
          <Grid item xs={7} md={8}>
            <Box height={{ xs: '25vh', md: '35vh' }} position="relative">
              <Image src={communion} layout="fill" objectFit="cover" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box maxWidth="md" my={{ xs: 0, md: 4 }}>
            <Typography component="h2" variant="h3" textAlign="center" mb={4}>
              What to Expect During Your Visit
            </Typography>
            <Accordion
              expanded={expanded === 'expect'}
              onClick={() => handleClick('expect')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-expect-content"
                id="panel-expect-header"
              >
                <Typography>
                  <strong>On Arrival</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  After parking in our parking lot, you will walk through the
                  main entrance double doors. You will be greeted by a few
                  smiling faces and offered complementary coffee and baked
                  goods. Sunday morning worship service begins at 10:00 am. Our
                  people are very laid back and friendly.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'children'}
              onClick={() => handleClick('children')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-children-content"
                id="panel-children-header"
              >
                <Typography>
                  <strong>Infants & Children</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We have a nursery on-site for families with infants and babies
                  to utilize. We also offer a children’s Sunday School class
                  during our Sunday worship from 10:00 - 11:00 am on Sunday
                  mornings. All nursery and children volunteers are background
                  checked and trained.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'clothing'}
              onClick={() => handleClick('clothing')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-clothing-content"
                id="panel-clothing-header"
              >
                <Typography>
                  <strong>Clothing & Attire</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Just come in something that you’re comfortable with!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'parking'}
              onClick={() => handleClick('parking')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-parking-content"
                id="panel-parking-header"
              >
                <Typography>
                  <strong>Parking</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our parking lot that wraps around the church building includes
                  the front, the right side, and the rear of the church.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'music'}
              onClick={() => handleClick('music')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-music-content"
                id="panel-music-header"
              >
                <Typography>
                  <strong>Music</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We believe the worship music should reflect the congregation,
                  and therefore we offer a blend of hymns and contemporary
                  music.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'attendance'}
              onClick={() => handleClick('attendance')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-attendance-content"
                id="panel-attendance-header"
              >
                <Typography>
                  <strong>Gathering Size</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our directory has around 70 names, and on a given Sunday we
                  will have anywhere between 30-50 people.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

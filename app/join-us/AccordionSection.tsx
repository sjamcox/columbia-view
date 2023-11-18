'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function AccordionSection() {
  const [expanded, setExpanded] = useState(false)
  const handleClick = (panel) => {
    panel === expanded ? setExpanded(false) : setExpanded(panel)
  }

  return (
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
                After parking in our parking lot, you will walk through the main
                entrance double doors. You will be greeted by a few smiling
                faces and offered complementary coffee and baked goods. Sunday
                morning worship service begins at 10:00 am. Our people are very
                laid back and friendly.
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
                and therefore we offer a blend of hymns and contemporary music.
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
                Our directory has around 70 names, and on a given Sunday we will
                have anywhere between 30-50 people.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Container>
  )
}

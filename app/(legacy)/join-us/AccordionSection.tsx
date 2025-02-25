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
  const [expanded, setExpanded] = useState('')
  const handleClick = (panel) => {
    panel === expanded ? setExpanded('') : setExpanded(panel)
  }

  return (
    <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            maxWidth: 'md',
            my: { xs: 0, md: 4 },
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 4,
            }}
          >
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
                We have nursery staff on-site for families with infants through
                age 3. We also offer kids programming for age 4 - grade 5 during
                the preaching portion of our worship service. All nursery and
                children volunteers are background checked and trained.
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
                We have parking available at the front, side, and the back of
                the building.
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
                We promote music that reflects the congregation, so we generally
                worship with a blend of hymns and contemporary music.
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
                Our directory has around 100 names, and on a given Sunday we
                will have between 50-60 people in attendance.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Container>
  )
}

import React from 'react'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import HomeIcon from '@mui/icons-material/Home'
import MapIcon from '@mui/icons-material/Map'
import { toGoogleMapsLink } from '../helpers/maps'

export default function CalendarEvent({ event }) {
  const eventName = event.event_name
  const startDate = parseISO(event.visible_starts_at)
  const startMonth = format(startDate, 'MMM')
  const startDay = format(startDate, 'd')
  const startTime = format(startDate, 'p')
  const endDate = parseISO(event.visible_ends_at)
  const endDay = format(endDate, 'd')
  const endTime = format(endDate, 'p')
  const displayDay = startDay === endDay ? startDay : `${startDay}-${endDay}`
  return (
    <Card sx={{ p: { xs: 2, sm: 4 } }} elevation={4}>
      <Grid container spacing={4} sx={{ minHeight: 270 }}>
        <Grid item xs={12} sm={7} md={8}>
          <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
            <Box>
              <Typography component="h2" variant="c1" color="primary" paragraph>
                {eventName}
              </Typography>
              <Typography sx={{ fontSize: { xs: 16 }, whiteSpace: 'pre-line' }}>
                {event.event_summary}
              </Typography>
            </Box>
            {event.registration_url && (
              <Button
                variant="contained"
                color="secondary"
                href={event.registration_url}
                target="_blank"
                sx={{
                  mt: 2,
                  color: 'white',
                  alignSelf: 'self-start',
                  justifySelf: 'flex-end',
                }}
              >
                More Information & Registration
              </Button>
            )}
          </Stack>
        </Grid>
        <Grid item xs={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Stack alignItems="center">
            <Typography
              variant="c1"
              color="primary"
              sx={{ fontSize: { xs: 24, sm: 36 }, textTransform: 'uppercase' }}
            >
              {startMonth}
            </Typography>
            <Typography
              variant="c1"
              color="primary"
              sx={{ fontSize: { xs: 72, sm: 90 }, mt: -2 }}
            >
              {displayDay}
            </Typography>
          </Stack>
          <Stack>
            {!event.all_day_event && (
              <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                <AccessTimeFilledIcon fontSize="small" />
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                  {startTime} – {endTime}
                </Typography>
              </Stack>
            )}
            <Stack direction="row" spacing={1}>
              <HomeIcon fontSize="small" />
              <Link href={toGoogleMapsLink(event.location)} passHref>
                <Typography
                  component="a"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    // whiteSpace: 'nowrap',
                    // overflow: 'hidden',
                    // textOverflow: 'ellipsis',
                  }}
                >
                  {event.location}
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  )
}
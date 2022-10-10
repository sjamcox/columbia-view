import React from 'react'
import { format, parseISO } from 'date-fns'
import { Box, Card, Divider, Grid, Stack, Typography } from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import HomeIcon from '@mui/icons-material/Home'

export default function CalendarEvent({ event, order }) {
  console.log(event)
  const startDate = parseISO(event.visible_starts_at)
  const startMonth = format(startDate, 'MMM')
  const startDay = format(startDate, 'd')
  const startTime = format(startDate, 'ha')
  const endDate = parseISO(event.visible_ends_at)
  const endTime = format(endDate, 'ha')
  return (
    <Card
      sx={{ p: { xs: 2, sm: 4 } }}
      key={event.event_name + order}
      elevation={4}
    >
      <Grid container spacing={4} sx={{ minHeight: 240 }}>
        <Grid item xs={12} sm={7} md={8}>
          <Stack>
            <Typography component="h2" variant="c1" color="primary" paragraph>
              {event.event_name}
            </Typography>
            <Typography sx={{ fontSize: { xs: 16 } }}>
              {event.event_summary}
            </Typography>
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
              {startDay}
            </Typography>
          </Stack>
          <Stack>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              <AccessTimeFilledIcon fontSize="small" />
              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                {startTime} – {endTime}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <HomeIcon fontSize="small" />
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {event.location}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  )
}

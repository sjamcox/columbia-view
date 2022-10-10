import React from 'react'
import { Stack } from '@mui/material'
import CalendarEvent from './CalendarEvent'

export default function CalendarList({ calendar }) {
  return (
    <Stack spacing={4}>
      {calendar.map(({ attributes: event }, i) => {
        return <CalendarEvent key={event.event_name + i} event={event} />
      })}
    </Stack>
  )
}

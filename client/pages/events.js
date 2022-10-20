import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { useQuery } from '@tanstack/react-query'

import getCalendar from '../queries/getCalendar'
import CalendarList from '../components/CalendarList'

const date = new Date()
const startDate = date.toISOString()
date.setMonth(date.getMonth() + 3)
const endDate = date.toISOString()

export default function Calendar() {
  const { data: calendar } = useQuery(['calendar', startDate, endDate], () =>
    getCalendar(startDate, endDate)
  )

  return (
    <Layout>
      <Head>
        <title>Events | Columbia View</title>
      </Head>
      <Box>
        <Typography component="h1" variant="h1" sx={{ my: 5 }}>
          Events
        </Typography>
        {calendar ? <CalendarList calendar={calendar} /> : <LinearProgress />}
      </Box>
    </Layout>
  )
}

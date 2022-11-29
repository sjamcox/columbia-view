import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import Head from 'next/head'
import { Layout } from '../components/Layout'

import getCalendar from '../queries/getCalendar'
import CalendarList from '../components/CalendarList'

export async function getStaticProps() {
  const date = new Date()
  const startDate = date.toISOString()
  date.setMonth(date.getMonth() + 3)
  const endDate = date.toISOString()

  const calendar = await getCalendar(startDate, endDate)

  return {
    props: {
      calendar,
    },
    revalidate: 300,
  }
}

export default function Calendar({ calendar }) {
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

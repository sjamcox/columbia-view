import React from 'react'
import { Container, Typography } from '@mui/material'
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
  if (!calendar) return <></>
  return (
    <Layout>
      <Head>
        <title>Calendar | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h1" sx={{ my: 5 }}>
          Calendar
        </Typography>
        <CalendarList calendar={calendar} />
      </Container>
    </Layout>
  )
}

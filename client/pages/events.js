import React from 'react'
import { Container, Typography } from '@mui/material'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { dehydrate, QueryClient, useQueryClient } from '@tanstack/react-query'

import getCalendar from '../queries/getCalendar'
import CalendarList from '../components/CalendarList'

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  const date = new Date()
  const startDate = date.toISOString()
  date.setMonth(date.getMonth() + 3)
  const endDate = date.toISOString()
  const { data } = await getCalendar(startDate, endDate)
  console.log(data)
  // await queryClient.prefetchQuery(['calendar', startDate, endDate], () =>
  //   getCalendar(startDate, endDate)
  // )
  return {
    props: {
      startDate,
      endDate,
      calendar: data,
      // dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Calendar({ calendar, startDate, endDate }) {
  const queryClient = useQueryClient()
  // const { data: calendar } = queryClient.getQueryData([
  //   'calendar',
  //   startDate,
  //   endDate,
  // ])
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

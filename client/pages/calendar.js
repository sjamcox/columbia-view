import React from 'react'
import axios from 'axios'
import { format, parseISO } from 'date-fns'
import {
  Box,
  Button,
  Card,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { dehydrate, QueryClient, useQueryClient } from '@tanstack/react-query'

import getCalendar from '../queries/getCalendar'

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  const date = new Date()
  const startDate = date.toISOString()
  date.setMonth(date.getMonth() + 3)
  const endDate = date.toISOString()
  await queryClient.prefetchQuery(['calendar', startDate, endDate], () =>
    getCalendar(startDate, endDate)
  )
  return {
    props: {
      startDate,
      endDate,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Calendar({ startDate, endDate }) {
  const queryClient = useQueryClient()
  const { data: calendar } = queryClient.getQueryData([
    'calendar',
    startDate,
    endDate,
  ])
  return (
    <Layout>
      <Head>
        <title>Calendar | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h1" sx={{ my: 5 }}>
          Calendar
        </Typography>
        <Stack spacing={4}>
          {calendar &&
            calendar.map(({ attributes: event }, i) => {
              console.log(event)
              return (
                <Card
                  sx={{ p: { xs: 3, md: 4 } }}
                  key={event.event_name + i}
                  elevation={4}
                >
                  <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Box pr={{ xs: 3, sm: 6 }} pb={2}>
                      {/* <img
                    src={item.itunes.image}
                    alt="Episode art"
                    width={128}
                    height={128}
                  /> */}
                    </Box>
                    <Stack>
                      <Typography component="h3" variant="h4" paragraph>
                        {event.event_name}
                      </Typography>
                      <Typography sx={{ pb: 3 }}>{`${format(
                        parseISO(event.visible_starts_at),
                        'EEEE, MMMM d'
                      )} @ ${format(
                        parseISO(event.visible_starts_at),
                        'h aaa'
                      )}`}</Typography>
                      <Typography sx={{ pb: 3 }}>
                        {event.event_summary}
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              )
            })}
        </Stack>
      </Container>
    </Layout>
  )
}

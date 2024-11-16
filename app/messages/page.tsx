import type { Metadata } from 'next'

import { Box, Button, Typography } from '@mui/material'

import MessageGrid from 'components/MessageGrid'

export const metadata: Metadata = {
  title: 'Messages | Columbia View Church',
  description: 'Explore the latest teachings from Columbia View Church.',
}

export default async function Messages() {
  const res = await fetch(
    'https://api.spreaker.com/v2/shows/3172208/episodes?limit=36',
    { next: { revalidate: 1800 } }
  )

  let data

  if (res.ok) {
    data = await res.json()
  }

  return (
    <>
      <Typography component="h1" variant="h1" sx={{ mb: 4 }}>
        Messages
      </Typography>
      {data ? (
        <MessageGrid messages={data.response.items} />
      ) : (
        <Typography>Error fetching messages data.</Typography>
      )}
      <Box width="100%" textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          href="https://www.spreaker.com/show/sermons_59"
          target="_blank"
        >
          See All Messages
        </Button>
      </Box>
    </>
  )
}

import type { Metadata } from 'next'

import axios from 'axios'
import { Box, Button, Typography } from '@mui/material'

import MessageGrid from '../../components/MessageGrid'

export const metadata: Metadata = {
  title: 'Messages | Columbia View Church',
  description: 'Explore the latest teachings from Columbia View Church.',
}

export default async function Messages() {
  const { data } = await axios.get(
    'https://api.spreaker.com/v2/shows/3172208/episodes?limit=12'
  )

  console.log(data.response.items)

  return (
    <>
      <Typography component="h1" variant="h1" sx={{ mb: 3 }}>
        Messages
      </Typography>
      <MessageGrid messages={data.response.items} />
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

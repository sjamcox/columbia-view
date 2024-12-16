import type { Metadata } from 'next'
import { Box, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import axios from 'axios'

import AudioPlayer from 'components/AudioPlayer'

export const metadata: Metadata = {
  title: 'Messages | Columbia View Church',
  robots: {
    index: false,
  },
}

export default async function MessageDetails(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const { data } = await axios.get(
    `https://api.spreaker.com/v2/episodes/${params.id}`
  )
  const { episode } = data.response

  return (
    <Stack
      spacing={4}
      sx={{
        alignItems: 'center',
        mt: 10,
      }}
    >
      <Typography variant="date">
        {format(new Date(episode.published_at), 'PPP')}
      </Typography>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          textAlign: 'center',
        }}
      >
        {episode.title}
      </Typography>
      <Box
        dangerouslySetInnerHTML={{ __html: episode.description_html }}
        sx={{
          maxWidth: 650,
          '& a': { color: 'primary.main' },
        }}
      />
      <AudioPlayer src={episode.playback_url} />
    </Stack>
  )
}

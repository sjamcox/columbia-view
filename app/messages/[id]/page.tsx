import { Box, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import axios from 'axios'

import AudioPlayer from '../../../components/AudioPlayer'

export default async function MessageDetails({
  params,
}: {
  params: { id: string }
}) {
  const { data } = await axios.get(
    `https://api.spreaker.com/v2/episodes/${params.id}`
  )
  const { episode } = data.response

  return (
    <Stack alignItems="center" spacing={4} mt={10}>
      <Typography variant="date">
        {format(new Date(episode.published_at), 'PPP')}
      </Typography>
      <Typography component="h1" variant="h2" textAlign="center">
        {episode.title}
      </Typography>
      <Box
        maxWidth={650}
        dangerouslySetInnerHTML={{ __html: episode.description_html }}
        sx={{ '& a': { color: 'primary.main' } }}
      />
      <AudioPlayer src={episode.playback_url} />
    </Stack>
  )
}

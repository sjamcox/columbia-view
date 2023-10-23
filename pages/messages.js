import Head from 'next/head'
import axios from 'axios'
import { Layout } from '../components/Layout'
import {
  Box,
  Button,
  Card,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export async function getStaticProps() {
  const { data } = await axios.get(
    `https://api.spreaker.com/v2/shows/3172208/episodes?limit=5`
  )
  return {
    props: {
      messages: data.response.items,
    },
    revalidate: 300,
  }
}

export default function Messages({ messages }) {
  return (
    <Layout>
      <Head>
        <title>Messages | Columbia View Church</title>
      </Head>
      <Typography component="h1" variant="h1" sx={{ my: 5 }}>
        Messages
      </Typography>
      {messages ? (
        <Stack spacing={4} alignItems="center">
          {messages.map((episode) => {
            return (
              <Card
                sx={{ p: { xs: 3, md: 4 } }}
                key={episode.title}
                elevation={4}
              >
                <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Box pr={{ xs: 3, sm: 6 }} pb={2}>
                    <img
                      src={episode.image_url}
                      alt="Episode art"
                      width={128}
                      height={128}
                    />
                  </Box>
                  <Stack>
                    <Typography component="h3" variant="h4" paragraph>
                      {episode.title}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <ReactAudioPlayer
                        src={`https://api.spreaker.com/v2/episodes/${episode.episode_id}/play.mp3`}
                        controls
                      />
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                      <ReactAudioPlayer
                        style={{ width: '220px' }}
                        src={`https://api.spreaker.com/v2/episodes/${episode.episode_id}/play.mp3`}
                        controls
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Card>
            )
          })}
          <Button
            href="https://www.spreaker.com/show/sermons_59"
            variant="contained"
            color="secondary"
          >
            View all past messages
          </Button>
        </Stack>
      ) : (
        <LinearProgress />
      )}
    </Layout>
  )
}

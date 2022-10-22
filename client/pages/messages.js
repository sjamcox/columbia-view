import Head from 'next/head'
import { useQuery } from '@tanstack/react-query'
import { Layout } from '../components/Layout'
import {
  Box,
  Button,
  Card,
  LinearProgress,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'
import getMessages from '../queries/getMessages'

export default function Messages({ feed }) {
  const { data: messages } = useQuery(['messages'], getMessages)
  return (
    <Layout>
      <Head>
        <title>Messages | Columbia View</title>
      </Head>
      <Typography component="h1" variant="h1" sx={{ my: 5 }}>
        Messages
      </Typography>
      {messages ? (
        <Stack spacing={4} alignItems="center">
          {messages.items.slice(0, 5).map((item) => {
            const episode = item.enclosure.url.split('/')[7]
            return (
              <Card sx={{ p: { xs: 3, md: 4 } }} key={item.title} elevation={4}>
                <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Box pr={{ xs: 3, sm: 6 }} pb={2}>
                    <img
                      src={item.itunes.image}
                      alt="Episode art"
                      width={128}
                      height={128}
                    />
                  </Box>
                  <Stack>
                    <Typography component="h3" variant="h4" paragraph>
                      {item.title}
                    </Typography>
                    <Typography sx={{ pb: 3 }}>{item.content}</Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <ReactAudioPlayer
                        src={`https://api.spreaker.com/v2/episodes/${episode}/play.mp3`}
                        controls
                      />
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                      <ReactAudioPlayer
                        style={{ width: '220px' }}
                        src={`https://api.spreaker.com/v2/episodes/${episode}/play.mp3`}
                        controls
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Card>
            )
          })}
          <Link
            href="https://www.spreaker.com/show/sermons_59"
            color="secondary"
            variant="h5"
            sx={{ textDecoration: 'none' }}
            passHref
          >
            <Button variant="contained" color="secondary">
              View all past messages
            </Button>
          </Link>
        </Stack>
      ) : (
        <LinearProgress />
      )}
    </Layout>
  )
}

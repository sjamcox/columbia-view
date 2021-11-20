import Head from 'next/head'
import { Layout } from '../components/Layout'
import {
  Box,
  Button,
  Card,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import Parser from 'rss-parser'
import ReactAudioPlayer from 'react-audio-player'

export async function getStaticProps() {
  const RSS_URL = `https://www.spreaker.com/show/3172208/episodes/feed`
  const parser = new Parser()
  const feed = await parser.parseURL(RSS_URL)

  return {
    props: {
      feed,
    },
  }
}

export default function Messages({ feed }) {
  return (
    <Layout>
      <Head>
        <title>Messages | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h1" sx={{ my: 5 }}>
          Messages
        </Typography>
        <Stack spacing={4} alignItems="center">
          {feed.items.slice(0, 5).map((item) => {
            const episode = item.enclosure.url.split('/')[5]
            return (
              <Card sx={{ p: 4 }} key={item.title}>
                <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Box pr={4} pb={2}>
                    <img src={item.itunes.image} width={128} height={128} />
                  </Box>
                  <Stack>
                    <Typography component="h3" variant="h4" paragraph>
                      {item.title}
                    </Typography>
                    <Typography sx={{ pb: 3 }}>{item.content}</Typography>
                    <ReactAudioPlayer
                      src={`https://api.spreaker.com/v2/episodes/${episode}/play.mp3`}
                      controls
                    />
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
          >
            <Button variant="contained" color="secondary">
              View all past messages
            </Button>
          </Link>
        </Stack>
      </Container>
    </Layout>
  )
}

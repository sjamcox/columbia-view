'use client'

import { Grid } from '@mui/material'
import MessageCard from './MessageCard'
import { useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion'

const sampleResponse = [
  {
    episode_id: 57434186,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal: 8. The Wilderness',
    duration: 3058420,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-10-29 18:46:31',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_57434186.gz.json?v=VWhfNp',
    site_url: 'https://www.spreaker.com/episode/57434186',
    download_url: 'https://api.spreaker.com/v2/episodes/57434186/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/57434186/play.mp3',
  },
  {
    episode_id: 57345003,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal: 7. Salvation at Sunrise',
    duration: 2948440,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-10-22 19:08:50',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_57345003.gz.json?v=FbRpQr',
    site_url: 'https://www.spreaker.com/episode/57345003',
    download_url: 'https://api.spreaker.com/v2/episodes/57345003/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/57345003/play.mp3',
  },
  {
    episode_id: 57242063,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal: 6. Passover',
    duration: 3102980,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-10-15 18:56:55',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_57242063.gz.json?v=BWD7v9',
    site_url: 'https://www.spreaker.com/episode/57242063',
    download_url: 'https://api.spreaker.com/v2/episodes/57242063/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/57242063/play.mp3',
  },
  {
    episode_id: 57155258,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal 5. Plagues & Hearts',
    duration: 3929440,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-10-08 19:33:35',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_57155258.gz.json?v=pGRJdD',
    site_url: 'https://www.spreaker.com/episode/57155258',
    download_url: 'https://api.spreaker.com/v2/episodes/57155258/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/57155258/play.mp3',
  },
  {
    episode_id: 57016799,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal 4. God Sees, Hears, & has a Plan',
    duration: 2159330,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-10-01 18:15:57',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_57016799.gz.json?v=VkHY6e',
    site_url: 'https://www.spreaker.com/episode/57016799',
    download_url: 'https://api.spreaker.com/v2/episodes/57016799/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/57016799/play.mp3',
  },
  {
    episode_id: 56918050,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal 3. Hide & Seek',
    duration: 2553130,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-09-24 18:33:04',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_56918050.gz.json?v=AEUeJW',
    site_url: 'https://www.spreaker.com/episode/56918050',
    download_url: 'https://api.spreaker.com/v2/episodes/56918050/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/56918050/play.mp3',
  },
  {
    episode_id: 56831827,
    type: 'RECORDED',
    title: 'Various Teachings: Back to Church Sunday',
    duration: 2831050,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-09-17 18:40:25',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_56831827.gz.json?v=jBYkBY',
    site_url: 'https://www.spreaker.com/episode/56831827',
    download_url: 'https://api.spreaker.com/v2/episodes/56831827/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/56831827/play.mp3',
  },
  {
    episode_id: 56754185,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal 2. The Villain',
    duration: 3684050,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-09-10 18:41:22',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_56754185.gz.json?v=HDTTTA',
    site_url: 'https://www.spreaker.com/episode/56754185',
    download_url: 'https://api.spreaker.com/v2/episodes/56754185/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/56754185/play.mp3',
  },
  {
    episode_id: 56677050,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal 1. Family Matters',
    duration: 2593250,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-09-03 18:14:07',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_56677050.gz.json?v=4dNBe1',
    site_url: 'https://www.spreaker.com/episode/56677050',
    download_url: 'https://api.spreaker.com/v2/episodes/56677050/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/56677050/play.mp3',
  },
  {
    episode_id: 56606362,
    type: 'RECORDED',
    title: 'Exodus: Liberation & Renewal 0. An Introduction',
    duration: 2410480,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-08-27 18:16:34',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_56606362.gz.json?v=FudVt3',
    site_url: 'https://www.spreaker.com/episode/56606362',
    download_url: 'https://api.spreaker.com/v2/episodes/56606362/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/56606362/play.mp3',
  },
  {
    episode_id: 56528095,
    type: 'RECORDED',
    title: 'Various Teachings: The Woman at the Well',
    duration: 3288740,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-08-20 18:39:53',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_56528095.gz.json?v=jwKDjX',
    site_url: 'https://www.spreaker.com/episode/56528095',
    download_url: 'https://api.spreaker.com/v2/episodes/56528095/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/56528095/play.mp3',
  },
  {
    episode_id: 56456819,
    type: 'RECORDED',
    title: 'Various Teachings: Christ in Colossians.',
    duration: 2299010,
    explicit: false,
    show_id: 3172208,
    author_id: 10804617,
    image_url:
      'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_160/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_original_url:
      'https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/4061313ee6d1a05535b11e6670f213f2.jpg',
    image_transformation: 'square_limited_100',
    published_at: '2023-08-13 18:17:11',
    download_enabled: true,
    stream_id: null,
    waveform_url:
      'https://d3770qakewhkht.cloudfront.net/episode_56456819.gz.json?v=GryeNU',
    site_url: 'https://www.spreaker.com/episode/56456819',
    download_url: 'https://api.spreaker.com/v2/episodes/56456819/download.mp3',
    playback_url: 'https://api.spreaker.com/v2/episodes/56456819/play.mp3',
  },
]

export default function MessageGrid() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      '.message-card',
      { opacity: 1, marginTop: 0 },
      { delay: stagger(0.1) }
    )
  }, [])

  return (
    <Grid ref={scope} container spacing={5}>
      {sampleResponse.map((message) => (
        <MessageCard
          key={message.episode_id}
          message={message}
          sx={{ opacity: 0, mt: 10 }}
        />
      ))}
    </Grid>
  )
}

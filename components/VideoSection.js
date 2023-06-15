import Image from 'next/image'
import { Box, Container } from '@mui/material'
import YouTubePlayer from './YouTubePlayer'

export default function VideoSection({ id, image, alt }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        '& span > img': { zIndex: -100, opacity: '10%', position: 'absolute' },
      }}
    >
      <Image src={image} alt={alt} layout="fill" objectFit="cover" />
      <Container
        sx={{
          position: 'relative',
          py: { xs: 5, sm: 8, md: 12 },
          display: 'flex',
          justifyContent: 'center',
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            width: '100%',
            position: 'relative',
          }}
        >
          <YouTubePlayer id={id} />
        </Box>
      </Container>
    </Box>
  )
}

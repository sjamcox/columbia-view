import Image from 'next/image'
import { Box, Container } from '@mui/material'
import ReactPlayer from 'react-player'

export default function VideoSection({ image, videoUrl }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        '& div > img': { zIndex: -100, opacity: '10%', position: 'absolute' },
      }}
    >
      <Image src={image} layout="fill" objectFit="cover" />
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
            pt: '56.25%',
            position: 'relative',
          }}
        >
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </Box>
      </Container>
    </Box>
  )
}

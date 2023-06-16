import Image from 'next/image'
import { Box } from '@mui/material'

function ResponsiveImage({ src, alt = '', aspectRatio = '16:9' }) {
  const [width, height] = aspectRatio.split(':')
  const ratioPercentage = Math.ceil((height / width) * 100) + '%'

  return (
    <Box
      sx={{
        position: 'relative',
        pb: ratioPercentage,
        '& img': { objectFit: 'cover' },
      }}
    >
      <Image src={src} alt={alt} fill />
    </Box>
  )
}

export default ResponsiveImage

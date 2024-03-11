import Image from 'next/image'
import { Box } from '@mui/material'

export default function ResponsiveImage({
  src,
  alt = '',
  aspectRatio = '16:9',
  objectFit = 'contain',
  objectPosition = '50% 50%',
  ...rest
}) {
  const [width, height] = aspectRatio.split(':')
  const ratioPercentage = Math.ceil((height / width) * 100) + '%'

  return (
    <Box
      sx={{
        position: 'relative',
        pb: ratioPercentage,
        '& img': { objectFit, objectPosition },
      }}
    >
      <Image src={src} alt={alt} fill {...rest} />
    </Box>
  )
}

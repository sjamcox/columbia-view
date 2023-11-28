import { Box, Stack } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

interface SectionProps {
  children: React.ReactElement
}

interface ImageSectionProps extends SectionProps {
  src: StaticImageData | string
  alt: string
}

export function ElevatedSection({ children }: SectionProps) {
  return (
    <Stack
      component="section"
      sx={{
        py: '3.5vw',
        px: '3vw',
        my: '3vw',
        borderRadius: '20px',
        boxShadow: '0px 0px 15px rgba(100,100,100,.15)',
      }}
    >
      {children}
    </Stack>
  )
}

export function ImageSection({ children, src, alt }: ImageSectionProps) {
  return (
    <Stack
      component="section"
      sx={{
        py: '3.5vw',
        px: '3vw',
        my: '3vw',
        borderRadius: '20px',
        boxShadow: '0px 0px 15px rgba(100,100,100,.15)',
        position: 'relative',
        overflow: 'hidden',
        '& img': { objectFit: 'cover' },
      }}
    >
      <Image src={src} alt={alt} fill priority />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0, .6)',
        }}
      />
      <Box position="relative">{children}</Box>
    </Stack>
  )
}

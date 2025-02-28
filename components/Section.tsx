import type { StaticImageData } from 'next/image'

import { Box, Stack } from '@mui/material'
import Image from 'next/image'

interface SectionProps {
  children: React.ReactElement
}

interface ImageSectionProps extends SectionProps {
  src: StaticImageData | string
  alt: string
  color?: 'red' | 'blue'
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

export function LegacyImageSection({ children, src, alt }: ImageSectionProps) {
  return (
    <Stack
      sx={{
        py: '3.5vw',
        px: '3vw',
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
          backgroundColor: 'rgba(0,0,0, .4)',
        }}
      />
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {children}
      </Box>
    </Stack>
  )
}

export function ImageSection({ children, src, alt, color }: ImageSectionProps) {
  const colorVariants = {
    blue: 'from-primary-dark-blue to-primary-light-blue',
    red: 'from-secondary-yellow to-secondary-red',
  }

  return (
    <section className={'relative overflow-hidden'}>
      <Image src={src} alt={alt} fill priority objectFit="cover" />
      {color && (
        <div
          className={`${colorVariants[color]} absolute inset-0 bg-gradient-to-b opacity-50`}
        />
      )}
      <div className="relative">{children}</div>
    </section>
  )
}

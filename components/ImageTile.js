import Image from 'next/image'
import Link from 'next/link'
import { Box, Card, Typography } from '@mui/material'

export default function ImageTile({ image, alt, headline, link }) {
  return (
    <Link href={link}>
      <a>
        <Card
          sx={{
            position: 'relative',
            pb: '133%',
            '& img': {
              position: 'absolute',
            },
          }}
        >
          <Image src={image} alt={alt} layout="fill" objectFit="cover" />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '70%',
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.35) 70%)',
              position: 'absolute',
              zIndex: 1,
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              pl: '22px',
              pr: 5,
              pb: 2,
              zIndex: 2,
            }}
          >
            <Typography
              component="h3"
              variant="h2"
              sx={{ color: 'white', fontSize: { md: 33 } }}
            >
              {headline}
            </Typography>
          </Box>
        </Card>
      </a>
    </Link>
  )
}

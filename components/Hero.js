import Image from 'next/image'
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from '@mui/material'

export default function Hero({
  src,
  alt,
  title,
  titleHighlight = '',
  subtitle,
  buttonText,
  href,
}) {
  return (
    <Grid
      container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '70vh',
        width: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
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
      <Container sx={{ position: 'relative', px: { xs: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontWeight: 700,
              my: { xs: 3, sm: 2 },
              maxWidth: { xs: 280, sm: '100%', lg: 500 },
            }}
            variant="h1"
            component="h1"
          >
            {title + ' '}
            <Box component="span" sx={{ color: 'rgb(57, 171, 225)' }}>
              {titleHighlight + ' '}
            </Box>
          </Typography>
          <Typography
            sx={{
              color: 'white',
              mb: 4,
            }}
            component="p"
          >
            {subtitle}
          </Typography>
          <Button href={href} variant="contained" color="secondary">
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Grid>
  )
}

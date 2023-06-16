import Image from 'next/image'
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'

export const Hero = ({
  src,
  alt,
  title,
  titleHighlight = '',
  subtitle,
  buttonText,
  href,
}) => {
  return (
    <Grid
      container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        height: '70vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ '& img': { objectFit: 'cover' } }}>
        <Image src={src} alt={alt} fill priority />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0, .4)',
        }}
      ></Box>
      <Container sx={{ position: 'relative', px: { xs: 3 } }}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
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
              marginBottom: 4,
            }}
            component="p"
          >
            {subtitle}
          </Typography>
          <Link href={href}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{ color: 'white' }}
            >
              {buttonText}
            </Button>
          </Link>
        </Box>
      </Container>
    </Grid>
  )
}

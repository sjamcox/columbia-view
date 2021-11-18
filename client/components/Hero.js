import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export const Hero = ({
  src,
  alt,
  title,
  titleHighlight,
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
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0, .7)',
        }}
      ></Box>
      <Container sx={{ position: 'relative', px: { xs: 3 } }}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography
            sx={{
              color: 'white',
              fontWeight: 700,
              marginBottom: 0,
            }}
            variant="h1"
            component="h1"
            align="center"
          >
            {title + ' '}
            <Box
              component="span"
              sx={{
                color: 'rgb(57, 171, 225)',
              }}
            >
              {titleHighlight}
            </Box>
          </Typography>
          <Typography
            sx={{
              color: 'white',
              marginBottom: 4,
              fontSize: 20,
            }}
            component="p"
            variant="h5"
          >
            {subtitle}
          </Typography>
          <Link href={href} passHref>
            <Button
              variant="contained"
              component="a"
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

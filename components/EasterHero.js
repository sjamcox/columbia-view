import Image from 'next/image'
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'

export default function EasterHero({ src, alt, buttonText, href }) {
  return (
    <Grid
      container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: { xs: '50vh', sm: '70vh' },
        width: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        '& img': { objectFit: 'cover' },
      }}
    >
      <Image src={src} alt={alt} fill priority />
      <Container sx={{ position: 'relative', px: { xs: 3 }, height: '100%' }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          height="100%"
          pb={{ xs: '15%', md: '10%' }}
        >
          <Button href={href} variant="contained" color="secondary">
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Grid>
  )
}

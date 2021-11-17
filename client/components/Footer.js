import { Box, Container, Grid, Typography } from '@mui/material'

export default function Footer() {
  return (
    <>
      <Box sx={{ bgcolor: '#333132', pb: 1, pt: 6 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography color="white">
            16700 NE Halsey Street, Portland, OR 97230 | 503.253.7939
          </Typography>
        </Container>
      </Box>
      <Box sx={{ borderTop: '1px solid white', bgcolor: '#333132', py: 1 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography color="white" fontSize="14px">
            © 2021 Columbia View Wesleyan Church. All Rights Reserved
          </Typography>
        </Container>
      </Box>
    </>
  )
}

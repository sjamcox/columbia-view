import { Box, Container, Grid, Typography } from '@mui/material'

export default function Footer() {
  return (
    <>
      <Box sx={{ bgcolor: '#333132', py: 4 }}>
        <Container sx={{ px: 3 }}>
          <Grid container spacing={{ xs: 3, sm: 10 }}>
            <Grid item>
              <Typography color="white">
                <strong>Columbia View Wesleyan Church</strong>
              </Typography>
              <Typography color="white" fontSize={15}>
                16700 NE Halsey Street
              </Typography>
              <Typography color="white" fontSize={15}>
                Portland, OR 97230
              </Typography>
              <Typography color="white" fontSize={15}>
                503.253.7939
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="white">
                <strong>Worship Service</strong>
              </Typography>
              <Typography color="white" fontSize={15}>
                Sundays at 10:00 am
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ borderTop: '1px solid white', bgcolor: '#333132', py: 1 }}>
        <Container sx={{ px: 3 }}>
          <Typography color="white" fontSize="14px">
            © 2021 Columbia View Wesleyan Church | All Rights Reserved
          </Typography>
        </Container>
      </Box>
    </>
  )
}

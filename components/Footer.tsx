'use client'

import { Box, Container, Grid2 as Grid, Typography } from '@mui/material'

export default function Footer() {
  return (<>
    <Box sx={{ bgcolor: '#333132', py: 4 }}>
      <Container sx={{ px: 3 }}>
        <Grid container spacing={{ xs: 3, sm: 10 }}>
          <Grid>
            <Typography color="white">
              <strong>Columbia View Church</strong>
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: 15,
              }}
            >
              16700 NE Halsey Street
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: 15,
              }}
            >
              Portland, OR 97230
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: 15,
              }}
            >
              503.253.7939
            </Typography>
          </Grid>
          <Grid>
            <Typography color="white">
              <strong>Worship Service</strong>
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: 15,
              }}
            >
              Sundays at 10:00 am
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box sx={{ borderTop: '1px solid white', bgcolor: '#333132', py: 1 }}>
      <Container sx={{ px: 3 }}>
        <Typography
          color="white"
          sx={{
            fontSize: 14,
          }}
        >
          © {new Date().getFullYear()} Columbia View Church | All Rights Reserved
        </Typography>
      </Container>
    </Box>
  </>);
}

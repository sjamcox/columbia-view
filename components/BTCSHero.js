import Image from 'next/image'
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import BTCSLogo from '../public/BTCS/BTCS-logo.webp'
import BTCSJoinUs from '../public/BTCS/BTCS-join-us.webp'

export const BTCSHero = () => {
  const isMediumAndUp = useMediaQuery('(min-width: 900px)')

  return (
    <Box
      component="section"
      minHeight="70vh"
      display="flex"
      alignItems="center"
      bgcolor="#FFC121"
      overflow="hidden"
    >
      <Container
        sx={{ position: 'relative', px: { xs: 3 }, py: { xs: 5, sm: 0 } }}
      >
        <Grid container spacing={{ xs: 5, sm: 10 }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'flex-end' },
            }}
          >
            <Image
              src={BTCSLogo}
              sizes="(max-width: 600px): 80vw, (max-width: 900px): 50vw, (max-width: 1500px): 33vw"
              height={isMediumAndUp ? 305 : 250}
              width={isMediumAndUp ? 300 : 245}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Stack spacing={4} alignItems="center">
              <Image
                src={BTCSJoinUs}
                sizes="(max-width: 600px): 80vw, (max-width: 900px): 50vw, (max-width: 1500px): 33vw"
                height={isMediumAndUp ? 130 : 75}
                width={isMediumAndUp ? 400 : 250}
              />
              <Box>
                <Button
                  href="https://columbiaview.churchcenter.com/calendar/event/129562560"
                  variant="contained"
                  color="secondary"
                >
                  Learn More
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

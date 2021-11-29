import Head from 'next/head'
import Image from 'next/image'
import { Container, Grid, Typography } from '@mui/material'
import { Layout } from '../../components/Layout'
import tita from '../../public/staff/tita.webp'
import brook from '../../public/staff/brook.webp'
import david from '../../public/staff/david.webp'
import susan from '../../public/staff/susan.webp'
import vanessa from '../../public/staff/vanessa.webp'
import niki from '../../public/staff/niki.webp'

export default function Staff() {
  return (
    <Layout>
      <Head>
        <title>Staff | Immigrant Connection PDX</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography component="h1" variant="h3" sx={{ mt: 5, mb: 3 }}>
          Immigrant Connection Staff
        </Typography>
        <Grid container spacing={4}>
          <Grid
            item
            mt={4}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={tita} width="128px" height="128px" />
            <Typography mt={3} color="primary">
              <strong>Serena Rannabargar</strong>
            </Typography>
            <Typography fontSize={15}>DOJ Accredited Representative</Typography>
            <Typography fontSize={15} color="#A2230A">
              Languages: English, Spanish
            </Typography>
          </Grid>
          <Grid
            item
            mt={4}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={brook} width="128px" height="128px" />
            <Typography mt={3} color="primary">
              <strong>Brook Rodrigues</strong>
            </Typography>
            <Typography fontSize={15}>Legal Assistant</Typography>
            <Typography fontSize={15} color="#A2230A">
              Languages: English
            </Typography>
          </Grid>
          <Grid
            item
            mt={4}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={david} width="128px" height="128px" />
            <Typography mt={3} color="primary">
              <strong>David Rannabargar</strong>
            </Typography>
            <Typography fontSize={15}>Site Director</Typography>
            <Typography fontSize={15} color="#A2230A">
              Languages: English
            </Typography>
          </Grid>
          <Grid
            item
            mt={4}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={susan} width="128px" height="128px" />
            <Typography mt={3} color="primary">
              <strong>Susan Sloan</strong>
            </Typography>
            <Typography fontSize={15}>Treasurer</Typography>
            <Typography fontSize={15} color="#A2230A">
              Languages: English
            </Typography>
          </Grid>
          <Grid
            item
            mt={4}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={vanessa} width="128px" height="128px" />
            <Typography mt={3} color="primary">
              <strong>Vanessa Cisneros</strong>
            </Typography>
            <Typography fontSize={15}>Media</Typography>
            <Typography fontSize={15} color="#A2230A">
              Languages: English
            </Typography>
          </Grid>
          <Grid
            item
            mt={4}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={niki} width="128px" height="128px" />
            <Typography mt={3} color="primary">
              <strong>Niki Cox</strong>
            </Typography>
            <Typography fontSize={15}>General Support</Typography>
            <Typography fontSize={15} color="#A2230A">
              Languages: English
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

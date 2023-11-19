import Image from 'next/image'
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import VideoSection from '../../components/VideoSection'
import icpdxLogo from '../../public/logos/icpdx-logo-transparent.png'
import immigrantFamily from '../../public/icpdx/immigrant-family.webp'
import daca from '../../public/daca.webp'
import family from '../../public/family.webp'
import residence from '../../public/residence.webp'
import status from '../../public/status.webp'
import visa from '../../public/visa.webp'
import world from '../../public/world.webp'
import { Metadata } from 'next'
import ServiceList from './ServiceList'

export const metadata: Metadata = {
  title: 'Immigrant Connection PDX | Low-Cost Immigration Legal Services',
  description:
    "We're a church-based, low-cost immigration legal services office in East Portland. We serve those seeking legal assistance with issues relating to immigration.",
}

export default function ImmigrantConnection() {
  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          flexDirection={{ xs: 'column-reverse', sm: 'row ' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
        >
          <Grid item xs={12} sm={8}>
            <Typography component="h1" variant="h2" sx={{ mb: 3 }}>
              Immigrant Connection PDX
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box display="flex" justifyContent="center" mb={3}>
              <Box sx={{ width: { xs: 150, md: 250 } }}>
                <Image src={icpdxLogo} layout="responsive" priority />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h4" paragraph>
          A Department of Justice recognized legal office that provides low-cost
          immigration legal services.
        </Typography>
        <Grid container justifyContent="space-between" mt={4}>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              <strong>We are currently receiving new clients!</strong>
            </Typography>
            <Typography paragraph>
              Immigrant Connection PDX is a church-based, low-cost, immigration
              legal services office located in east Portland that provides legal
              assistance to individuals who are seeking assistance with issues
              relating to immigration, such as Family and Marriage Based
              Petitions, Naturalization Petitions, Legal Permanent Resident and
              Employment Authorization renewals, Adjustment of Status, Consular
              Processing, DACA, TPS, Non-Immigrant Visas, and Religious Worker
              Visas.
            </Typography>
            <Typography paragraph>
              A $40 office visit/legal consultation fee is due at your first
              appointment and must be paid prior to speaking with the
              Immigration Legal Representative. This is in addition to any legal
              or filing fees that will be required for your case.
            </Typography>
            <Typography paragraph>
              If you need advice or assistance with any of these services, or
              simply need help understanding what options you may have under the
              law, you can schedule an initial consultation with one of our
              Legal Representatives. During the consultation, we will carefully
              review your case and make sure you understand the benefits and
              risks associated with your situation, then offer you advice on how
              to proceed.
            </Typography>
            <Typography paragraph>
              <strong>
                Please click the “schedule an appointment” button below or call
                our legal office at{' '}
                <Link href="tel:+19712022073">971.202.2073</Link> to schedule an
                appointment.
              </strong>{' '}
              An initial consultation costs $40.
            </Typography>
            <Typography paragraph>
              We are a part of the Immigrant Connection National Network of
              church-based, low-cost, immigration legal services offices. For
              more info:{' '}
              <Link href="https://www.icwelcome.org">icwelcome.org</Link>.
            </Typography>
            <Alert severity="warning" icon={false}>
              <Typography>
                <strong>
                  Our office will resume taking the following case types after
                  April 1 2024:
                </strong>{' '}
                Asylum, U-Visa, VAWA, SIJS.
              </Typography>
            </Alert>
            <Button
              variant="contained"
              color="secondary"
              href="/immigrant-connection-pdx/booking"
              sx={{ mb: 4, mt: 2 }}
            >
              Schedule an appointment
            </Button>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography fontSize={15}>
              <strong>Office Hours & Location</strong>
            </Typography>
            <Typography fontSize={15}>Tuesdays and Thursdays</Typography>
            <Typography fontSize={15} paragraph>
              10:00 am – 4:00 pm
            </Typography>
            <Typography fontSize={15} paragraph>
              Columbia View Church <br />
              16700 NE Halsey St. <br />
              Portland, OR 97230
            </Typography>
            <Typography fontSize={15} paragraph>
              <Link href="tel:+19712022073" sx={{ color: 'primary' }}>
                971.202.2073
              </Link>
              <br />
              <Link
                href="mailto:info.icpdx@gmail.com"
                sx={{ color: 'primary' }}
              >
                info.icpdx@gmail.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={0}>
          <Grid item>
            <Button
              href="https://drive.google.com/file/d/1XeRXuDW9PJibxu4iPJOanX-gkFkbPjwe/view?usp=sharing"
              variant="contained"
              color="primary"
            >
              English
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://drive.google.com/file/d/1vk4tep1hGWxpngElIWqHb2gtQTmynlBH/view?usp=sharing"
              variant="contained"
              color="primary"
            >
              Español (Spanish)
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://drive.google.com/file/d/1g0n9KAD89bIW40-5-uwbXP37V5FTdW0n/view?usp=sharing"
              variant="contained"
              color="primary"
            >
              한글 (Korean)
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://drive.google.com/file/d/16noMyw08fkRI5m5T9ERyVqjuoSz25Gu9/view?usp=sharing"
              variant="contained"
              color="primary"
            >
              Português (Portugese)
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://drive.google.com/file/d/1dM7carIbYI6U9oOQhrzrOXr3VBs82lDB/view?usp=sharing"
              variant="contained"
              color="primary"
            >
              Tagalog (Filipino)
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://drive.google.com/file/d/1R0lKYV5l8B5SWUWLYa8La_Kqtp2KIyMG/view?usp=sharing"
              variant="contained"
              color="primary"
            >
              русский (Russian)
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://drive.google.com/file/d/1zBEXxNjjNPvneT-BcEYgqeo9oXXACPln/view?usp=sharing"
              variant="contained"
              color="primary"
            >
              Français (French)
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h4" paragraph textAlign="center" mt={6}>
          <strong>Services</strong>
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
            <Image src={world} width="128px" height="128px" />
            <Typography mt={3}>Naturalization / Citizenship</Typography>
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
            <Image src={family} width="128px" height="128px" />
            <Typography mt={3}>Family-Based Petitions</Typography>
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
            <Image src={daca} width="128px" height="128px" />
            <Typography mt={3}>DACA</Typography>
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
            <Image src={status} width="128px" height="128px" />
            <Typography mt={3}>Adjustment of Status</Typography>
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
            <Image src={residence} width="128px" height="128px" />
            <Typography mt={3}>Renew Permanent</Typography>
            <Typography>Resident Card</Typography>
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
            <Image src={visa} width="128px" height="128px" />
            <Typography mt={3}>U Visas</Typography>
          </Grid>
        </Grid>
        <ServiceList />
      </Container>
      <VideoSection
        id="zBDYoLfPkwc"
        image={immigrantFamily}
        alt="Immigrant mother and daughter"
      />
    </>
  )
}

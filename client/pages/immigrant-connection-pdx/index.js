import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Button,
  Collapse,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
} from '@mui/material'
import { Layout } from '../../components/Layout'
import VideoSection from '../../components/VideoSection'
import icpdxLogo from '../../public/icpdx/icpdx-logo.webp'
import immigrantFamily from '../../public/icpdx/immigrant-family.webp'
import daca from '../../public/daca.webp'
import family from '../../public/family.webp'
import residence from '../../public/residence.webp'
import status from '../../public/status.webp'
import visa from '../../public/visa.webp'
import world from '../../public/world.webp'
import tita from '../../public/staff/tita.webp'
import brook from '../../public/staff/brook.webp'
import david from '../../public/staff/david.webp'
import susan from '../../public/staff/susan.webp'
import vanessa from '../../public/staff/vanessa.webp'
import niki from '/public/staff/niki.webp'

export default function ImmigrantConnection() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <Head>
        <title>Immigrant Connection | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
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
                our legal office at <a href="tel:+19712022073">971.202.2073</a>{' '}
                to schedule an appointment.
              </strong>{' '}
              An initial consultation costs $40.
            </Typography>
            <Typography paragraph>
              We are a part of the Immigrant Connection National Network of
              church-based, low-cost, immigration legal services offices. For
              more info: <a href="https://www.icwelcome.org">icwelcome.org</a>.
            </Typography>
            <Link href="/immigrant-connection-pdx/booking">
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ color: 'white', mb: 4, mt: 2 }}
              >
                Schedule an appointment
              </Button>
            </Link>
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
              Columbia View Wesleyan Church <br />
              16700 NE Halsey St. <br />
              Portland, OR 97230
            </Typography>
            <Typography fontSize={15} paragraph>
              <MuiLink
                href="tel:+19712022073"
                sx={{ textDecoration: 'none', color: 'primary' }}
              >
                971.202.2073
              </MuiLink>
              <br />
              <MuiLink
                href="mailto:info.icpdx@gmail.com"
                sx={{ textDecoration: 'none', color: 'primary' }}
              >
                info.icpdx@gmail.com
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={0}>
          <Grid item>
            <MuiLink href="https://drive.google.com/file/d/1XeRXuDW9PJibxu4iPJOanX-gkFkbPjwe/view?usp=sharing">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ color: 'white' }}
              >
                English
              </Button>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://drive.google.com/file/d/1vk4tep1hGWxpngElIWqHb2gtQTmynlBH/view?usp=sharing">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ color: 'white' }}
              >
                Español (Spanish)
              </Button>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://drive.google.com/file/d/1g0n9KAD89bIW40-5-uwbXP37V5FTdW0n/view?usp=sharing">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ color: 'white' }}
              >
                한글 (Korean)
              </Button>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://drive.google.com/file/d/16noMyw08fkRI5m5T9ERyVqjuoSz25Gu9/view?usp=sharing">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ color: 'white' }}
              >
                Português (Portugese)
              </Button>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://drive.google.com/file/d/1dM7carIbYI6U9oOQhrzrOXr3VBs82lDB/view?usp=sharing">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ color: 'white' }}
              >
                Tagalog (Filipino)
              </Button>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://drive.google.com/file/d/1R0lKYV5l8B5SWUWLYa8La_Kqtp2KIyMG/view?usp=sharing">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ color: 'white' }}
              >
                русский (Russian)
              </Button>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://drive.google.com/file/d/1zBEXxNjjNPvneT-BcEYgqeo9oXXACPln/view?usp=sharing">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ color: 'white' }}
              >
                Français (French)
              </Button>
            </MuiLink>
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
        <Box display="flex" flexDirection="column" alignItems="center" my={5}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{ color: 'white', mb: 4 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'See less services' : 'See more services'}
          </Button>
          <Collapse in={isOpen}>
            <Typography textAlign="center" paragraph>
              Adjustment of Status <br />
              Advanced Parole/Travel Authorization <br />
              Affilidavit of Support
              <br />
              Applications for Victims of Domestic Violence or Crimes (VAWA Or U
              Visa)
              <br />
              Citizenship Certifications
              <br />
              Consular Processing
              <br />
              Consultations
              <br />
              Deferred Action for Childhood Arrivals (DACA)
              <br />
              Deferred Action for Paretnal Accountability (DAPA)
              <br />
              Family-Based Petitions
              <br />
              Fiancé Visas
              <br />
              Green Card Renewals
              <br />
              Naturalization and Citizenship Applications
              <br />
              Referrals
              <br />
              Work Authorization <br />
              Removal of Conditions of Residency <br />
              Temporary Protection Status (TPS)
              <br />
              Visa Renewals <br />
              Waiver Applications
              <br />
              Additional Services
            </Typography>
            <Typography textAlign="center">
              For more information regarding these services:
            </Typography>
            <MuiLink href="https://www.uscis.gov">
              <Typography textAlign="center">https://www.uscis.gov</Typography>
            </MuiLink>
          </Collapse>
        </Box>
      </Container>
      <VideoSection
        id="zBDYoLfPkwc"
        image={immigrantFamily}
        alt="Immigrant mother and daughter"
      />
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Typography variant="h4" paragraph textAlign="center" mt={6}>
          <strong>Our Team</strong>
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
              <strong>Vanessa Cisneroz</strong>
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

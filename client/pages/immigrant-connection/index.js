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
import icpdxLogo from '../../public/icpdx-logo.webp'
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
import niki from '../../public/staff/niki.webp'

export default function ImmigrantConnection() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <Head>
        <title>Immigrant Connection | Columbia View</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 5, px: 3 }}>
        <Box display="flex" justifyContent="center">
          <Box width={250}>
            <Image src={icpdxLogo} layout="responsive" priority />
          </Box>
        </Box>
        <Typography component="h1" variant="h3" sx={{ mt: 5, mb: 3 }}>
          Immigrant Connection PDX
        </Typography>
        <Typography variant="h4" paragraph>
          Our vision is to build bridges for a hope-filled future, and our
          mission is to provide affordable immigration legal services to
          immigrants in our community.
        </Typography>
        <Grid container justifyContent="space-between" mt={4}>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              <strong>
                Our office is currently open and receiving new clients!
              </strong>
            </Typography>
            <Typography paragraph>
              Immigrant Connection PDX is a low-cost immigrant legal services
              office. Our Department of Justice Accredited Representatives
              provide affordable legal services for immigrants in our community.
              Services begin at $40.
            </Typography>
            <Link href="/immigrant-connection/booking">
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ color: 'white', mb: 4, mt: 2 }}
              >
                Book a consultation
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
              <a href="tel:+19712022073">971.202.2073</a>
              <br />
              <a href="mailto:info.icpdx@gmail.com">info.icpdx@gmail.com</a>
            </Typography>
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

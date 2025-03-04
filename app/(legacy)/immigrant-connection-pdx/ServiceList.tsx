'use client'

import { useState } from 'react'
import { Box, Button, Collapse, Link, Typography } from '@mui/material'

export default function ServiceList() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 5,
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        sx={{ mb: 4 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'See less services' : 'See more services'}
      </Button>
      <Collapse in={isOpen}>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
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
        <Typography
          sx={{
            textAlign: 'center',
          }}
        >
          For more information regarding these services:
        </Typography>
        <Link href="https://www.uscis.gov">
          <Typography
            sx={{
              textAlign: 'center',
            }}
          >
            https://www.uscis.gov
          </Typography>
        </Link>
      </Collapse>
    </Box>
  )
}

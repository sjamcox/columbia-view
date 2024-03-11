import { Metadata } from 'next'
import { Box, Button, Stack, Typography } from '@mui/material'

import { anton } from '../../utils/fonts'
import ClientComponents from './client'

export const metadata: Metadata = {
  title: 'Easter Sunday | Columbia View Churh',
  description: 'need to come up with something',
}

export const typography = {
  body: {
    fontSize: 26,
    lineHeight: { xs: 1.3, sm: 1.5 },
  },
  sectionHeader: {
    fontWeight: 700,
    fontSize: {
      xs: 46,
      sm: 66,
    },
  },
  subheader: {
    fontWeight: 700,
    fontSize: {
      xs: 30,
      sm: 40,
    },
    lineHeight: 1.3,
  },
  display: {
    fontFamily: anton.style.fontFamily,
    fontWeight: 700,
    fontSize: {
      xs: 85,
      sm: 240,
    },
    letterSpacing: '3px',
  },
}

export default function Easter() {
  return (
    <>
      <ClientComponents />
      <Box bgcolor="grey" borderRadius={3} width="100%" height={256} />
      <Stack alignItems="center" py={5}>
        <Typography
          align="center"
          lineHeight={1}
          mb={7}
          sx={typography.sectionHeader}
        >
          COME AND SEE FOR YOURSELF!
        </Typography>
        <Typography align="center" lineHeight={1} sx={typography.display}>
          EASTER
        </Typography>
        <Typography align="center" sx={typography.subheader}>
          with Columbia View Church
        </Typography>
        <Typography align="center" mb={4} sx={typography.subheader}>
          March 31st @ 10:00am
        </Typography>
        <Typography align="center" sx={typography.body}>
          16700 NE Halsey Street
        </Typography>
        <Typography align="center" mb={4} sx={typography.body}>
          Portland, OR 97230
        </Typography>
        <Button
          href="/join-us"
          variant="contained"
          size="large"
          color="secondary"
          sx={{
            fontSize: 34,
            fontWeight: 400,
            color: 'white',
            mt: 2,
            py: 4,
            px: 7,
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Get Directions
        </Button>
      </Stack>
    </>
  )
}

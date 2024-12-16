import { Metadata } from 'next'
import { Box, Button, Stack, Typography } from '@mui/material'

import ClientComponents from './client'
import { typography } from './typography'

export const metadata: Metadata = {
  title: 'Easter Sunday | Columbia View Churh',
  description: 'need to come up with something',
}

export default function Easter() {
  return (
    <>
      <ClientComponents />
      <Stack
        sx={{
          alignItems: 'center',
          py: 5,
        }}
      >
        <Typography
          align="center"
          sx={{
            lineHeight: 1,
            mb: 7,
            ...typography.sectionHeader,
          }}
        >
          COME AND SEE FOR YOURSELF!
        </Typography>
        <Typography
          align="center"
          sx={{
            lineHeight: 1,
            ...typography.display,
          }}
        >
          EASTER
        </Typography>
        <Typography align="center" sx={typography.subheader}>
          with Columbia View Church
        </Typography>
        <Typography
          align="center"
          sx={{
            mb: 4,
            ...typography.subheader,
          }}
        >
          March 31st @ 10:00am
        </Typography>
        <Typography align="center" sx={typography.body}>
          16700 NE Halsey Street
        </Typography>
        <Typography
          align="center"
          sx={{
            mb: 4,
            ...typography.body,
          }}
        >
          Portland, OR 97230
        </Typography>
        <Button
          href="https://maps.app.goo.gl/4srCf8fAAunfau6S8"
          variant="contained"
          size="large"
          color="secondary"
          target="_blank"
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

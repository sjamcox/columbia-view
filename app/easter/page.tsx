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

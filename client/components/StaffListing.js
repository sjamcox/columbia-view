import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

export const StaffListing = ({ member }) => {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
      <Box
        sx={{
          position: 'relative',
          height: 250,
          width: 250,
          flexShrink: 0,
          mr: { xs: 0, sm: 6 },
          mb: { xs: 4, sm: 0 },
          boxShadow: '4px 4px #FFFFFF, 12px 12px #0E496F',
          overflow: 'hidden',
        }}
      >
        <Image
          src={member.image}
          alt={`Photo of ${member.name}`}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box>
        <Typography component="h3" variant="h4" gutterBottom>
          {member.name}
        </Typography>
        <Typography gutterBottom color="secondary">
          <strong>{member.title}</strong>
        </Typography>
        <Typography color="text.body">{member.bio}</Typography>
      </Box>
    </Stack>
  )
}

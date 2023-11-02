'use client'

import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { Box, Card, Grid, Link, Stack, Typography } from '@mui/material'

export default function MessageCard({ message, sx }) {
  return (
    <Grid className="message-card" item xs={12} sm={6} md={4} sx={sx}>
      <Card
        component={motion.div}
        whileHover={{ scale: 1.05 }}
        sx={{
          borderRadius: 4,
          boxShadow: '0px 0px 15px rgba(100,100,100,.1)',
          height: '100%',
        }}
      >
        <Box
          sx={{
            pb: '60%',
            background:
              'linear-gradient(140deg, rgba(14,73,111,1) 0%, rgba(51,49,50,1) 100%)',
          }}
        />
        <Stack key={message.episode_id} px={4} py={3}>
          <Typography variant="date">
            {format(new Date(message.published_at), 'PPP')}
          </Typography>
          <Link
            href={`/messages/${message.episode_id}`}
            sx={{ textDecoration: 'none' }}
          >
            <Typography variant="h5">{message.title}</Typography>
          </Link>
        </Stack>
      </Card>
    </Grid>
  )
}

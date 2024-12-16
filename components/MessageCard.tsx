'use client'

import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { Card, Grid, Link, Stack, Typography } from '@mui/material'

export default function MessageCard({ message, ...rest }) {
  return (
    <Grid className="message-card" item xs={12} sm={6} md={4} {...rest}>
      <Card
        component={motion.div}
        whileHover={{ scale: 1.05 }}
        sx={{
          borderRadius: 4,
          boxShadow: '0px 0px 15px rgba(100,100,100,.1)',
          height: '100%',
        }}
      >
        <Stack
          key={message.episode_id}
          sx={{
            px: 4,
            py: 3,
          }}
        >
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

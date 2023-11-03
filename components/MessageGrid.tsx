'use client'

import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion'
import MessageCard from './MessageCard'

export default function MessageGrid({ messages }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      '.message-card',
      { opacity: 1, marginTop: 0 },
      { delay: stagger(0.1) }
    )
  }, [])

  return (
    <Grid ref={scope} container spacing={5}>
      {messages.map((message) => (
        <MessageCard
          key={message.episode_id}
          message={message}
          sx={{ opacity: 0, mt: 10 }}
        />
      ))}
    </Grid>
  )
}

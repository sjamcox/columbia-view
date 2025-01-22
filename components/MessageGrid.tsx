'use client'

import { useEffect } from 'react'
import { useAnimate, stagger } from 'motion/react'
import MessageCard from './MessageCard'

export default function MessageGrid({ messages }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('section', { opacity: 1, marginTop: 0 }, { delay: stagger(0.05) })
  }, [])

  return (
    <div
      ref={scope}
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
    >
      {messages.map((message) => (
        <MessageCard key={message.episode_id} message={message} />
      ))}
    </div>
  )
}

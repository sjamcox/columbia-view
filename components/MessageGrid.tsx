'use client'

import type { EpisodeList } from '@/types/messages'

import { useEffect } from 'react'
import { useAnimate, stagger } from 'motion/react'

import MessageCard from './MessageCard'

export default function MessageGrid({ messages }: { messages: EpisodeList }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('article', { opacity: 1, marginTop: 0 }, { delay: stagger(0.05) })
  }, [animate])

  return (
    <div
      ref={scope}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3"
    >
      {messages.map((message) => (
        <MessageCard key={message.episode_id} message={message} />
      ))}
    </div>
  )
}

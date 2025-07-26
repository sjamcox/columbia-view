'use client'

import type { EpisodeSummary } from '@/types/messages'

import { format } from 'date-fns'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function MessageCard({ message }: { message: EpisodeSummary }) {
  return (
    <motion.section
      whileHover={{ scale: 1.05 }}
      className="message-card border-neutral-light-blue mt-2 h-full rounded-xl border-1 border-solid opacity-0 shadow-lg"
    >
      <div className="flex flex-col px-8 py-6">
        <time
          dateTime={format(new Date(message.published_at), 'yyyy-mm-dd')}
          className="text-neutral-mid-gray text-lg font-semibold"
        >
          {format(new Date(message.published_at), 'PPP')}
        </time>
        <Link
          className="text-primary-dark-blue text-2xl font-bold no-underline"
          href={`/messages/${message.episode_id}`}
        >
          {message.title}
        </Link>
      </div>
    </motion.section>
  )
}

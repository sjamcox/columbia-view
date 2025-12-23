'use client'

import type { EpisodeSummary } from '@/types/messages'

import { format } from 'date-fns'
import { motion } from 'motion/react'
import Link from 'next/link'
import { getGradientForEpisode } from '@/utils/message-gradients'

export default function MessageCard({ message }: { message: EpisodeSummary }) {
  const gradient = getGradientForEpisode(message.episode_id)

  return (
    <Link href={`/messages/${message.episode_id}`} className="block h-full">
      <motion.article
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
        className="message-card group relative h-full overflow-hidden rounded-2xl bg-white opacity-0 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      >
        {/* Gradient Background */}
        <div
          className={`relative aspect-video w-full bg-linear-to-br ${gradient}`}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-primary-dark-blue/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 p-6">
          <time
            dateTime={format(new Date(message.published_at), 'yyyy-MM-dd')}
            className="text-sm font-semibold uppercase tracking-wide text-secondary-aqua"
          >
            {format(new Date(message.published_at), 'PPP')}
          </time>
          <h3 className="line-clamp-2 text-xl font-bold text-primary-dark-blue transition-colors duration-200 group-hover:text-primary-light-blue">
            {message.title}
          </h3>
        </div>

        {/* Accent bar */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary-light-blue to-secondary-aqua transition-all duration-300 group-hover:w-full" />
      </motion.article>
    </Link>
  )
}

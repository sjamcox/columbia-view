import type { MetadataRoute } from 'next'

import { getYouTubeMessages, getYouTubeMessagesByIds } from '@/queries/youtube'
import { isMessageIndexable } from '@/utils/messages'

const baseUrl = 'https://columbiaview.org'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/events',
    '/icpdx',
    '/immigrant-connection-pdx',
    '/immigrant-connection-pdx/jobs',
    '/immigrant-connection-pdx/staff',
    '/messages',
    '/ministries',
    '/nextgen',
    '/plan-your-visit',
  ]

  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  // Only list sermons that are actually indexable — a sitemap entry for a
  // noindexed page is a contradictory signal. Descriptions are re-read from
  // videos.list so this agrees with the page's own robots decision regardless
  // of which list endpoint served the IDs. Returns [] if YouTube is
  // unreachable, leaving the static routes intact.
  const listed = await getYouTubeMessages()
  const messages = await getYouTubeMessagesByIds(
    listed.map((episode) => episode.id)
  )

  const messageEntries = messages
    .filter((episode) => isMessageIndexable(episode.description))
    .map((episode) => ({
      url: `${baseUrl}/messages/${episode.id}`,
      lastModified: new Date(episode.published_at),
    }))

  return [...staticEntries, ...messageEntries]
}

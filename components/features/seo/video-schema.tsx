import type { Episode } from '@/types/messages'
import JsonLd from './json-ld'

export default function VideoSchema({ episode }: { episode: Episode }) {
  const pageUrl = `https://columbiaview.org/messages/${episode.id}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#video`,
    name: episode.title,
    description: episode.description,
    uploadDate: episode.published_at,
    thumbnailUrl: episode.image_url,
    embedUrl: `https://www.youtube.com/embed/${episode.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${episode.id}`,
    ...(episode.duration_iso ? { duration: episode.duration_iso } : {}),
    mainEntityOfPage: pageUrl,
    // Ties every sermon back to the church entity so the archive builds
    // authority for the organization, not just the videos.
    publisher: {
      '@id': 'https://columbiaview.org/#church',
    },
  }

  return <JsonLd data={schema} />
}

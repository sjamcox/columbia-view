import type { Metadata } from 'next'
import { format } from 'date-fns'

import AudioPlayer from '@/components/AudioPlayer'

export const metadata: Metadata = {
  title: 'Messages | Columbia View Church',
  robots: {
    index: false,
  },
}

export default async function MessageDetails(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const response = await fetch(
    `https://api.spreaker.com/v2/episodes/${params.id}`
  )
  const data = await response.json()
  const { episode } = data.response

  return (
    <main className="mt-20 flex flex-col items-center">
      <time className="text-neutral-mid-gray font-bold">
        {format(new Date(episode.published_at), 'PPP')}
      </time>
      <h1 className="text-center text-5xl font-bold sm:text-7xl">
        {episode.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: episode.description_html }}
        className="prose prose-a:text-primary mb-10 max-w-[650px]"
      />
      <AudioPlayer src={episode.playback_url} />
    </main>
  )
}

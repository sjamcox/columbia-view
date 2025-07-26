import type { Metadata } from 'next'
import type { EpisodeList } from '@/types/messages'

import MessageGrid from '@/components/MessageGrid'
import ButtonLink from '@/components/ButtonLink'

export const metadata: Metadata = {
  title: 'Messages | Columbia View Church',
  description: 'Explore the latest teachings from Columbia View Church.',
}

export default async function Messages() {
  const res = await fetch(
    'https://api.spreaker.com/v2/shows/3172208/episodes?limit=36',
    { next: { revalidate: 1800 } }
  )

  if (res.ok) {
    const result = await res.json()
    const episodes: EpisodeList = result.response.items

    return (
      <main>
        <h1 className="text-5xl md:text-8xl">Messages</h1>
        {episodes ? (
          <MessageGrid messages={episodes} />
        ) : (
          <p>Error fetching messages data.</p>
        )}
        <div className="mt-6 flex justify-center">
          <ButtonLink
            href="https://www.spreaker.com/show/sermons_59"
            size="large"
          >
            See All Messages
          </ButtonLink>
        </div>
      </main>
    )
  }
}

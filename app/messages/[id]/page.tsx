import type { Metadata } from 'next'
import { format } from 'date-fns'

import YouTubePlayer from '@/components/YouTubePlayer'
import { ContentSection } from '@/components/ui/section'
import { getGradientForEpisode } from '@/utils/message-gradients'
import { getYouTubeMessage } from '@/queries/youtube'

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
  const episode = await getYouTubeMessage(params.id)

  const gradient = getGradientForEpisode(episode.episode_id)

  return (
    <main>
      {/* Hero Gradient Section */}
      <section
        className={`relative h-100 w-full bg-linear-to-br ${gradient} lg:h-125`}
      >
        <div className="absolute inset-0 bg-linear-to-t from-primary-dark-blue/80 via-primary-dark-blue/40 to-transparent" />
        
        {/* Message Title Overlay */}
        <div className="relative flex h-full items-end">
          <div className="mx-auto w-full max-w-4xl px-6 pb-15 lg:pb-20">
            <time className="mb-4 block text-sm font-semibold uppercase tracking-wide text-white/90">
              {format(new Date(episode.published_at), 'PPP')}
            </time>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {episode.title}
            </h1>
          </div>
        </div>
      </section>

      <ContentSection>
        <div className="mx-auto max-w-4xl">
          {/* YouTube Player */}
          <div className="flex items-center justify-center mb-10">
            <YouTubePlayer videoId={episode.id} />
          </div>

          {/* Message Description */}
          {episode.description_html && (
            <div
              dangerouslySetInnerHTML={{ __html: episode.description_html }}
              className="prose prose-lg mx-auto max-w-3xl prose-headings:font-display prose-headings:text-primary-dark-blue prose-a:text-primary-light-blue prose-a:no-underline hover:prose-a:underline"
            />
          )}
        </div>
      </ContentSection>
    </main>
  )
}

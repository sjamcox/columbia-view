import { format } from 'date-fns'
import type { Metadata } from 'next'
import VideoSchema from '@/components/features/seo/video-schema'
import { ContentSection } from '@/components/ui/section'
import YouTubePlayer from '@/components/YouTubePlayer'
import { getYouTubeMessage } from '@/queries/youtube'
import { getGradientForEpisode } from '@/utils/message-gradients'
import { buildMessageDescription, isMessageIndexable } from '@/utils/messages'

export async function generateMetadata(props: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const params = await props.params

  let episode: Awaited<ReturnType<typeof getYouTubeMessage>>
  try {
    episode = await getYouTubeMessage(params.id)
  } catch {
    // Keep unresolvable messages out of the index rather than publishing a
    // page whose metadata we can't build.
    return {
      title: 'Messages | Columbia View Church',
      robots: { index: false },
    }
  }

  const description = buildMessageDescription(
    episode.description,
    `Watch "${episode.title}" from Columbia View Church in Portland, OR.`
  )

  return {
    title: `${episode.title} | Columbia View Church`,
    description,
    alternates: {
      canonical: `/messages/${episode.id}`,
    },
    // Messages whose YouTube description is too short to stand alone stay out
    // of the index — see MIN_DESCRIPTION_WORDS in utils/messages.
    ...(isMessageIndexable(episode.description)
      ? {}
      : { robots: { index: false } }),
    openGraph: {
      type: 'video.other',
      title: episode.title,
      description,
      url: `/messages/${episode.id}`,
      images: episode.image_url ? [{ url: episode.image_url }] : undefined,
    },
  }
}

export default async function MessageDetails(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const episode = await getYouTubeMessage(params.id)

  const gradient = getGradientForEpisode(episode.episode_id)

  return (
    <main>
      {isMessageIndexable(episode.description) && (
        <VideoSchema episode={episode} />
      )}

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
          {episode.description && (
            <div className="mx-auto max-w-3xl rounded-xl bg-neutral-light-gray/40 p-6 md:p-8">
              <h2 className="font-display mb-4 text-lg font-bold text-primary-dark-blue">
                About This Message
              </h2>
              <div className="space-y-3 text-base leading-relaxed text-neutral-dark-gray">
                {episode.description.split(/\n/).map((line) => (
                  <p key={line}>{line || '\u00A0'}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </ContentSection>
    </main>
  )
}

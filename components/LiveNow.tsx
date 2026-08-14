import { getActiveLiveStream } from '@/queries/youtube'
import YouTubePlayer from './YouTubePlayer'

/**
 * Renders the live service when one is on air, and nothing otherwise.
 *
 * The underlying query is gated on the Sunday-morning window, so this makes no
 * YouTube request at all for most of the week.
 */
export default async function LiveNow() {
  const stream = await getActiveLiveStream()

  if (!stream) return null

  return (
    <section className="bg-primary-dark-blue">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-red opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary-red" />
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Live now
            </span>
          </div>

          <h2 className="font-display mb-6 text-2xl font-bold text-white md:text-3xl">
            {stream.title}
          </h2>

          <YouTubePlayer videoId={stream.id} thumbnailUrl={stream.image_url} />

          <p className="mt-4 text-sm text-white/80">
            Trouble with the player?{' '}
            <a
              href={`https://www.youtube.com/watch?v=${stream.id}`}
              className="font-semibold underline underline-offset-2"
            >
              Watch on YouTube
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

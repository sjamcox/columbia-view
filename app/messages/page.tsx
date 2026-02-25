import type { Metadata } from 'next'

import MessageGrid from '@/components/MessageGrid'
import Hero from '@/components/Hero'
import { ContentSection, GradientSection } from '@/components/ui/section'
import Button from '@/components/ui/button'
import sermonDavidPreaching from '@/public/sunday/sermon-david-preaching.webp'
import { getYouTubeMessages } from '@/queries/youtube'

export const metadata: Metadata = {
  title: 'Messages | Columbia View Church',
  description:
    'Explore the latest teachings from Columbia View Church. Listen to sermons focused on biblical truth and practical application for everyday life.',
  alternates: {
    canonical: '/messages',
  },
}

export default async function Messages() {
  const episodes = await getYouTubeMessages()

  return (
    <main>
      <Hero
        title="Messages"
        subtitle="Biblical teaching for everyday life. Dive into God's Word with us."
        imageProps={{
          src: sermonDavidPreaching,
          alt: 'Pastor David preaching from the pulpit',
          color: 'blue',
        }}
      />
      <ContentSection>
        {episodes && episodes.length > 0 ? (
          <MessageGrid messages={episodes} />
        ) : (
          <p className="text-center text-lg text-neutral-dark-gray">
            Unable to load messages at this time. Please check back later.
          </p>
        )}
      </ContentSection>
      <GradientSection color="blue-aqua">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="font-display mb-6 text-4xl font-bold text-white lg:text-5xl">
            Want More?
          </h2>
          <p className="mb-8 text-xl/relaxed text-white">
            Browse our complete sermon archive on YouTube. Subscribe to stay
            up to date with new messages every week.
          </p>
          <Button
            href="https://www.youtube.com/@ColumbiaViewChurch/videos"
            arrow
            color="dark"
          >
            See All Messages
          </Button>
        </div>
      </GradientSection>
    </main>
  )
}

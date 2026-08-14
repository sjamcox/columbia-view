import type { Metadata } from 'next'
import EventGrid from '@/components/EventGrid'
import EventSchema from '@/components/features/seo/event-schema'
import { getMergedCalendarEvents } from '@/queries/calendar'

export const metadata: Metadata = {
  title: 'Events | Columbia View Church',
  description:
    'Join us for upcoming events and activities at Columbia View Church in Portland, OR. From community gatherings to worship nights, there is something for everyone.',
  alternates: {
    canonical: '/events',
  },
}

export default async function EventsPage() {
  const events = await getMergedCalendarEvents()

  return (
    <div className="min-h-screen bg-gray-50">
      <EventSchema events={events} />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Events</h1>
          <p className="text-lg text-gray-600">
            Join us for upcoming events and activities at our community.
          </p>
        </div>
        <EventGrid />
      </div>
    </div>
  )
}

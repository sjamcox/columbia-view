import type { MergedEventAttributes } from '@/types/calendar'
import { getCalendarEvents } from '@/queries/calendar'
import EventCard from './EventCard'
import Link from 'next/link'

interface EventGridProps {
  limit?: number
  className?: string
}

export default async function EventGrid({
  limit,
  className = '',
}: EventGridProps) {
  let { data, included } = await getCalendarEvents()

  if (data.length === 0) {
    return (
      <div className={`py-12 text-center ${className}`}>
        <div className="text-gray-500">
          <svg
            className="mx-auto mb-4 h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mb-1 text-lg font-medium text-gray-900">
            No events found
          </h3>
          <p className="text-gray-500">Check back later for upcoming events.</p>
        </div>
      </div>
    )
  }

  const combinedEventAttributes: MergedEventAttributes[] = data
    .map((event) => {
      const eventData = included.find(
        (e) => e.id === event.relationships?.event?.data.id
      )

      if (!eventData) {
        throw new Error(`Event data not found for event ${event.id}`)
      }

      return {
        id: event.id,
        ...event.attributes,
        ...eventData.attributes,
      }
    })
    .filter((event) => event.visible_in_church_center)
    .slice(0, limit)

  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {combinedEventAttributes.map((event) => (
        <Link href={event.church_center_url} key={event.id} target="_blank">
          <EventCard key={event.id} event={event} />
        </Link>
      ))}
    </div>
  )
}

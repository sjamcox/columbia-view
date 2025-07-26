import { MergedEventAttributes } from '@/types/calendar'
import { format } from 'date-fns'
import Image from 'next/image'
import { Card } from './ui/card'

interface EventCardProps {
  event: MergedEventAttributes
}

export default function EventCard({ event }: EventCardProps) {
  const {
    starts_at,
    name,
    summary,
    featured,
    registration_url,
    image_url,
    visible_in_church_center,
  } = event

  const formattedDate = format(new Date(starts_at), 'MMM d, yyyy')

  // Check if there's a registration URL
  const hasSignups = !!registration_url

  // Use image_url from attributes, or fallback to default
  const eventImage = image_url || '/images/default-event.jpg'

  return (
    <Card>
      {/* Event Image */}
      <div className="relative h-48 bg-gray-100">
        <Image src={eventImage} alt={name} fill className="object-cover" />
        {/* Fallback colored background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-80" />
      </div>

      {/* Event Content */}
      <div className="p-4">
        {/* Event Title */}
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
          {name}
        </h3>

        {/* Date */}
        <div className="mb-1 text-sm text-gray-600">{formattedDate}</div>

        {/* Description/Summary */}
        {summary && (
          <div className="mb-3 line-clamp-3 text-sm text-gray-600">
            {summary}
          </div>
        )}

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {featured && (
            <div className="flex items-center gap-1 text-sm text-amber-600">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </div>
          )}

          {hasSignups && (
            <div className="text-sm font-medium text-green-600">
              Registration available
            </div>
          )}

          {visible_in_church_center && (
            <div className="text-sm font-medium text-blue-600">
              Church Center
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

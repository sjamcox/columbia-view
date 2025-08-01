'use client'

import { format, parseISO } from 'date-fns'
import { CalendarIcon, ClockIcon } from '@heroicons/react/16/solid'
import { CardMetadata } from '@/components/ui/card'

interface EventTimeProps {
  published_starts_at: string
}

export default function EventTime({ published_starts_at }: EventTimeProps) {
  const eventDate = parseISO(published_starts_at)
  const formattedDate = format(eventDate, 'MMM d, yyyy')
  const formattedTime = format(eventDate, 'h:mm a')

  return (
    <div className="my-2 flex flex-col gap-1">
      <CardMetadata icon={<CalendarIcon className="mr-2 h-4 w-4" />}>
        {formattedDate}
      </CardMetadata>
      <CardMetadata icon={<ClockIcon className="mr-2 h-4 w-4" />}>
        {formattedTime}
      </CardMetadata>
    </div>
  )
}

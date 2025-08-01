import type { MergedEventAttributes } from '@/types/calendar'
import { format, parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMetadata,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, ClockIcon } from '@heroicons/react/16/solid'

interface EventCardProps {
  event: MergedEventAttributes
}

export default function EventCard({ event }: EventCardProps) {
  const {
    all_day_event,
    published_starts_at,
    published_ends_at,
    name,
    summary,
    featured,
    registration_url,
    image_url,
  } = event

  const eventStartDate = parseISO(published_starts_at)
  const eventEndDate = parseISO(published_ends_at)
  const formattedStartDate = format(eventStartDate, 'MMM d, yyyy')
  const formattedEndDate = format(eventEndDate, 'MMM d, yyyy')
  const dateString =
    formattedStartDate === formattedEndDate
      ? formattedStartDate
      : `${formattedStartDate} – ${formattedEndDate}`

  const formattedTime = formatInTimeZone(
    eventStartDate,
    'America/Los_Angeles',
    'h:mm a'
  )

  return (
    <Card className="h-full overflow-hidden pt-0">
      <CardHeader className="relative h-48">
        <Image
          src={image_url}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </CardHeader>
      <CardContent className="flex-1">
        <CardTitle>{name}</CardTitle>
        <div className="my-2 flex flex-col gap-1">
          <CardMetadata icon={<CalendarIcon className="mr-2 h-4 w-4" />}>
            {dateString}
          </CardMetadata>
          {!all_day_event && (
            <CardMetadata icon={<ClockIcon className="mr-2 h-4 w-4" />}>
              {formattedTime}
            </CardMetadata>
          )}
        </div>
        <CardDescription className="line-clamp-3">
          {summary && summary}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap items-center gap-2">
          {featured && <Badge variant="secondary">Featured</Badge>}
          {registration_url && (
            // <Badge asChild>
            //   <Link href={registration_url}>Registration Open</Link>
            // </Badge>
            <Badge>Registration Open</Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

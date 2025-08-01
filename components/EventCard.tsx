import type { MergedEventAttributes } from '@/types/calendar'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import EventTime from './EventTime'

interface EventCardProps {
  event: MergedEventAttributes
}

export default function EventCard({ event }: EventCardProps) {
  const {
    published_starts_at,
    name,
    summary,
    featured,
    registration_url,
    image_url,
  } = event

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
        <EventTime published_starts_at={published_starts_at} />
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

import type { MergedEventAttributes } from '@/types/calendar'
import JsonLd from './json-ld'

/** Planning Center descriptions can carry markup; schema wants plain text. */
function toPlainText(value: string | undefined): string | undefined {
  if (!value) return undefined

  const text = value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return text || undefined
}

export default function EventSchema({
  events,
}: {
  events: MergedEventAttributes[]
}) {
  if (events.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@graph': events.map((event) => ({
      '@type': 'Event',
      '@id': `https://columbiaview.org/events#${event.id}`,
      name: event.name,
      // published_* is the public-facing window; starts_at/ends_at include
      // setup and teardown. EventCard displays the published times, so the
      // schema has to agree or we advertise a service time nobody shows up for.
      startDate: event.published_starts_at || event.starts_at,
      ...(event.published_ends_at || event.ends_at
        ? { endDate: event.published_ends_at || event.ends_at }
        : {}),
      description: toPlainText(event.summary) ?? toPlainText(event.description),
      ...(event.image_url ? { image: event.image_url } : {}),
      ...(event.church_center_url ? { url: event.church_center_url } : {}),
      // Planning Center's location field is free text and often blank, so the
      // church itself is the default venue.
      location: {
        '@type': 'Place',
        name: event.location || 'Columbia View Church',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '16700 NE Halsey Street',
          addressLocality: 'Portland',
          addressRegion: 'OR',
          postalCode: '97230',
          addressCountry: 'US',
        },
      },
      organizer: {
        '@id': 'https://columbiaview.org/#church',
      },
    })),
  }

  return <JsonLd data={schema} />
}

import EventGrid from 'components/EventGrid'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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

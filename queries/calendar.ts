import type { EventInstanceResponse } from '@/types/calendar'

interface GetCalendarEventsOptions {
  count?: number
  monthsAhead?: number
}

export async function getCalendarEvents({
  count = 50,
  monthsAhead = 2,
}: GetCalendarEventsOptions = {}): Promise<EventInstanceResponse> {
  try {
    const today = new Date()
    const endDate = new Date(today)
    endDate.setMonth(today.getMonth() + monthsAhead)

    const startDateString = today.toISOString().split('T')[0]
    const endDateString = endDate.toISOString().split('T')[0]

    const appId = process.env.PLANNING_CENTER_APP_ID
    const secret = process.env.PLANNING_CENTER_SECRET

    if (!appId || !secret) {
      throw new Error('Missing Planning Center credentials')
    }

    const token = Buffer.from(`${appId}:${secret}`, 'utf8').toString('base64')

    const url = new URL(
      'https://api.planningcenteronline.com/calendar/v2/event_instances'
    )
    url.searchParams.append('include', 'event')
    url.searchParams.append('where[tag_ids]', '24038')
    url.searchParams.append('where[during][start]', startDateString)
    url.searchParams.append('where[during][end]', endDateString)
    url.searchParams.append('order', 'starts_at,ends_at')
    url.searchParams.append('per_page', count.toString())

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${token}`,
      },
      next: {
        revalidate: 600, // Cache for 10 minutes
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching calendar events:', error)
    return { data: [], included: [] }
  }
}

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const today = new Date()
    const threeMonthsFromNow = new Date()
    threeMonthsFromNow.setMonth(today.getMonth() + 3)

    const startDate = today.toISOString().split('T')[0]
    const endDate = threeMonthsFromNow.toISOString().split('T')[0]

    const appId = process.env.PLANNING_CENTER_APP_ID
    const secret = process.env.PLANNING_CENTER_SECRET
    const token = Buffer.from(`${appId}:${secret}`, 'utf8').toString('base64')

    const url = new URL(
      'https://api.planningcenteronline.com/calendar/v2/calendar_instances'
    )
    url.searchParams.append('where[tag_ids]', '24038')
    url.searchParams.append('where[during][start]', startDate)
    url.searchParams.append('where[during][end]', endDate)
    url.searchParams.append(
      'fields[CalendarInstance]',
      'all_day_event,created_at,ends_at,event,event_feed_name,event_feed_type,event_name,event_summary,event_visible_in_church_center,feed,location,recurrence_description,registration_url,starts_at,status,tags,visible_ends_at,visible_starts_at'
    )
    url.searchParams.append('filter', 'public_times')
    url.searchParams.append('order', 'starts_at,ends_at')
    url.searchParams.append('per_page', '100')

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data.data)
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'An error occurred' },
      { status: 500 }
    )
  }
}

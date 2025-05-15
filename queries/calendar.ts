import { CalendarInstance } from 'types/calendar'

export async function getCalendarEvents(): Promise<CalendarInstance[]> {
  try {
    const response = await fetch('/api/calendar', {
      next: {
        revalidate: 600, // Cache for 10 minutes
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data: CalendarInstance[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching calendar events:', error)
    return []
  }
}

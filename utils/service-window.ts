import { formatInTimeZone } from 'date-fns-tz'

export const CHURCH_TIME_ZONE = 'America/Los_Angeles'

/**
 * Sunday 9:30 am – 12:30 pm Pacific: the window in which worship could
 * plausibly be streaming, with a buffer either side of the 10:00–12:00 service.
 *
 * This gate exists to protect the YouTube quota. Detecting a live stream needs
 * search.list, which costs 100 quota units per call against a default daily
 * budget of 10,000. Polling year-round at a 5-minute revalidate would run about
 * 28,800 units a day. Restricted to this window it costs roughly 3,600 units on
 * a Sunday and nothing at all the rest of the week.
 */
const SERVICE_DAY_ISO = 7 // ISO weekday: Monday = 1 … Sunday = 7
const WINDOW_START_MINUTES = 9 * 60 + 30
const WINDOW_END_MINUTES = 12 * 60 + 30

/** Whether `now` falls inside the Sunday-morning streaming window, Pacific. */
export function isServiceWindow(now: Date = new Date()): boolean {
  const [isoDay, hour, minute] = formatInTimeZone(
    now,
    CHURCH_TIME_ZONE,
    'i H m'
  )
    .split(' ')
    .map(Number)

  if (isoDay !== SERVICE_DAY_ISO) return false

  const minutesIntoDay = hour * 60 + minute

  return (
    minutesIntoDay >= WINDOW_START_MINUTES &&
    minutesIntoDay < WINDOW_END_MINUTES
  )
}

import { browserClient } from '../utils/client'

export default async function getCalendar(startDate, endDate) {
  const { data } = await browserClient.get('/api/calendar', {
    params: {
      startDate,
      endDate,
    },
  })
  return data
}

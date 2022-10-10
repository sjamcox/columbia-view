import axios from 'axios'

export default async function getCalendar(startDate, endDate) {
  const { data } = await axios.get('/api/calendar', {
    params: {
      startDate,
      endDate,
    },
  })
  return data
}

import axios from 'axios'

export default async function handler(req, res) {
  try {
    const { startDate, endDate } = req.query
    const appId = process.env.PLANNING_CENTER_APP_ID
    const secret = process.env.PLANNING_CENTER_SECRET
    const token = Buffer.from(`${appId}:${secret}`, 'utf8').toString('base64')
    const { data } = await axios.get(
      'https://api.planningcenteronline.com/calendar/v2/calendar_instances',
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
        params: {
          'where[tag_ids]': 24038,
          'where[during][start]': startDate,
          'where[during][end]': endDate,
          'fields[CalendarInstance]':
            'all_day_event,created_at,ends_at,event,event_feed_name,event_feed_type,event_name,event_summary,event_visible_in_church_center,feed,location,recurrence_description,registration_url,starts_at,status,tags,visible_ends_at,visible_starts_at',
          filter: 'public_times',
          order: 'starts_at,ends_at',
          per_page: 100,
        },
      }
    )
    res.status(200).send(data.data)
  } catch (err) {
    res.status(500).send(err)
  }
}

import React from 'react'
import axios from 'axios'
import { format, parseISO } from 'date-fns'

export default function Calendar({ feed }) {
  return (
    <div>
      {feed.map(({ attributes: event }) => {
        return (
          <>
            <p>{event.event_name}</p>
            <p>{format(parseISO(event.starts_at), 'EEEE, MMMM d')}</p>
            <p>{format(parseISO(event.starts_at), 'h aaa')}</p>
            <p>{event.event_summary}</p>
            <br />
          </>
        )
      })}
    </div>
  )
}

export async function getServerSideProps() {
  const date = new Date()
  const startDate = date.toISOString()
  date.setMonth(date.getMonth() + 1)
  const endDate = date.toISOString()
  const url = `https://api.planningcenteronline.com/calendar/v2/calendar_instances?where[tag_ids]=24038&where[during][start]=${startDate}&where[during][end]=${endDate}&fields[CalendarInstance]=all_day_event,created_at,ends_at,event,event_feed_name,event_feed_type,event_name,event_summary,event_visible_in_church_center,feed,location,recurrence_description,registration_url,starts_at,status,tags,visible_ends_at,visible_starts_at&filter=public_times&order=starts_at,ends_at&per_page=100`
  const appId = process.env.PLANNING_CENTER_APP_ID
  const secret = process.env.PLANNING_CENTER_SECRET
  const token = Buffer.from(`${appId}:${secret}`, 'utf8').toString('base64')
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  })
  return {
    props: {
      feed: data.data,
    },
  }
}

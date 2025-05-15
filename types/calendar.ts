export interface CalendarAttributes {
  all_day_event: boolean
  created_at: string
  ends_at: string
  event_feed_name: string
  event_feed_type: string
  event_name: string
  event_summary: string | null
  event_visible_in_church_center: boolean
  location: string
  recurrence_description: string
  registration_url: string | null
  starts_at: string
  status: string
  visible_ends_at: string
  visible_starts_at: string
}

export interface ResourceData {
  type: string
  id: string
}

export interface EventRelationship {
  data: ResourceData
}

export interface FeedRelationship {
  data: ResourceData
}

export interface TagsRelationship {
  data: ResourceData[]
}

export interface CalendarRelationships {
  event: EventRelationship
  feed: FeedRelationship
  tags: TagsRelationship
}

export interface CalendarLinks {
  self: string
}

export interface CalendarInstance {
  type: string
  id: string
  attributes: CalendarAttributes
  relationships: CalendarRelationships
  links: CalendarLinks
}

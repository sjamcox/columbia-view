export interface EventAttributes {
  approval_status: string
  created_at: string
  description: string
  featured: boolean
  image_url: string
  name: string
  percent_approved: number
  percent_rejected: number
  registration_url: string
  summary: string
  updated_at: string
  visible_in_church_center: boolean
}

export interface Event {
  type: string
  id: string
  attributes: EventAttributes
}

export interface EventInstanceAttributes {
  all_day_event: boolean
  compact_recurrence_description: string
  created_at: string
  ends_at: string
  location: string
  name: string
  recurrence: string
  recurrence_description: string
  starts_at: string
  updated_at: string
  church_center_url: string
  published_starts_at: string
  published_ends_at: string
}

export interface EventInstance {
  type: string
  id: string
  attributes: EventInstanceAttributes
  relationships?: {
    event?: {
      data: {
        type: string
        id: string
      }
    }
  }
}

export interface EventInstanceResponse {
  data: EventInstance[]
  included: Event[]
  meta?: {
    total_count: number
    count: number
  }
}

export type MergedEventAttributes = EventInstanceAttributes &
  EventAttributes & {
    id: string
  }

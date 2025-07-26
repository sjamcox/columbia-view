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
  starts_at: string
  ends_at: string
  all_day: boolean
  location: string | null
  url: string | null
  created_at: string
  updated_at: string
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

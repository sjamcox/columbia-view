export type EpisodeSummary = {
  episode_id: string | number
  id: string
  title: string
  published_at: string
  image_url: string
  duration?: number
  description?: string
}

export type EpisodeList = EpisodeSummary[]

export type Author = {
  user_id: number
  fullname: string
  site_url: string
  image_url: string
  image_original_url: string
  accept_latest_tos_url: string | null
}

export type Show = {
  show_id: number
  title: string
  image_url: string
  image_original_url: string
  explicit: boolean
  author_id: number
  last_episode_at: string
  site_url: string
}

export type Episode = EpisodeSummary & {
  description_html?: string
  playback_url?: string // Fallback for Spreaker if needed
  videoId?: string
  author?: {
    fullname: string
  }
}

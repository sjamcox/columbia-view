export type EpisodeSummary = {
  episode_id: number
  type: string
  title: string
  duration: number
  show_id: number
  author_id: number
  site_url: string
  image_url: string
  image_original_url: string
  published_at: string
  download_enabled: boolean
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

export type Episode = {
  episode_id: number
  type: string
  title: string
  duration: number
  explicit: boolean
  show_id: number
  author_id: number
  image_url: string
  image_original_url: string
  image_transformation: string
  published_at: string
  download_enabled: boolean
  stream_id: number | null
  waveform_url: string
  site_url: string
  download_url: string
  playback_url: string
  description: string
  description_html: string
  permalink: string
  episode_link: string | null
  transcript_url: string | null
  transcript_type: string | null
  rss_guid: string
  plays_count: number
  downloads_count: number
  plays_ondemand_count: number
  plays_live_count: number
  likes_count: number
  messages_count: number
  chapters_count: number
  author: Author
  show: Show
  season_number: number
  episode_number: number
  season_episode_type: string
}

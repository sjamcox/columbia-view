import { Episode, EpisodeList } from '@/types/messages'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID 
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
const REFERER = 'https://columbiaview.org'

export async function getYouTubeMessages(limit: number = 36): Promise<EpisodeList> {
  if (!YOUTUBE_API_KEY) {
    console.warn('YouTube API Key missing')
    return []
  }

  // If we have a playlist ID, use the efficient playlistItems endpoint
  if (YOUTUBE_PLAYLIST_ID) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${limit}&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`,
      { 
        next: { revalidate: 1800 },
        headers: { Referer: REFERER }
      }
    )

    if (response.ok) {
      const data = await response.json()
      return data.items.map((item: any) => ({
        episode_id: item.snippet.resourceId.videoId,
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        published_at: item.snippet.publishedAt,
        image_url: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
        description: item.snippet.description,
      }))
    } else {
      const errorData = await response.json().catch(() => ({}))
      console.error('Failed to fetch YouTube playlist items:', response.status, JSON.stringify(errorData, null, 2))
    }
  }

  // Fallback to search if playlist ID is missing but channel ID is present
  if (YOUTUBE_CHANNEL_ID) {
    return getYouTubeVideosBySearch(limit)
  }

  console.warn('YouTube Playlist ID or Channel ID missing')
  return []
}

export async function getYouTubeLiveStreams(limit: number = 5): Promise<EpisodeList> {
  if (!YOUTUBE_CHANNEL_ID) {
    console.warn('YouTube Channel ID missing for live streams')
    return []
  }

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&eventType=live&type=video&maxResults=${limit}&key=${YOUTUBE_API_KEY}`,
    { 
      next: { revalidate: 300 },
      headers: { Referer: REFERER }
    }
  )

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    console.error('Failed to fetch YouTube live streams:', response.status, JSON.stringify(errorData, null, 2))
    return []
  }

  const data = await response.json()
  console.log({ data })
  return data.items.map((item: any) => ({
    episode_id: item.id.videoId,
    id: item.id.videoId,
    title: item.snippet.title,
    published_at: item.snippet.publishedAt,
    image_url: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
    description: item.snippet.description,
  }))
}

export async function getYouTubeVideosBySearch(limit: number = 36): Promise<EpisodeList> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&order=date&type=video&maxResults=${limit}&key=${YOUTUBE_API_KEY}`,
    { 
      next: { revalidate: 1800 },
      headers: { Referer: REFERER }
    }
  )

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    console.error('Failed to fetch YouTube videos via search:', response.status, JSON.stringify(errorData, null, 2))
    return []
  }

  const data = await response.json()
  console.log('getYouTubeVideosBySearch data:', JSON.stringify(data, null, 2))
  return data.items.map((item: any) => ({
    episode_id: item.id.videoId,
    id: item.id.videoId,
    title: item.snippet.title,
    published_at: item.snippet.publishedAt,
    image_url: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
    description: item.snippet.description,
  }))
}

export async function getYouTubeMessage(id: string): Promise<Episode> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API Key missing')
  }

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${id}&key=${YOUTUBE_API_KEY}`,
    { 
      next: { revalidate: 3600 },
      headers: { Referer: REFERER }
    }
  )

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    console.error('Failed to fetch YouTube message:', response.status, JSON.stringify(errorData, null, 2))
    throw new Error(`Failed to fetch YouTube message: ${response.status}`)
  }

  const data = await response.json()
  const item = data.items[0]

  if (!item) {
    throw new Error('YouTube message not found')
  }

  return {
    episode_id: item.id,
    id: item.id,
    videoId: item.id,
    title: item.snippet.title,
    published_at: item.snippet.publishedAt,
    image_url: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
    description: item.snippet.description,
    description_html: item.snippet.description.replace(/\n/g, '<br>'), // Basic conversion
    author: {
      fullname: 'Columbia View Church' // Default author for YouTube channel
    }
  }
}

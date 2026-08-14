import type { Episode, EpisodeList, EpisodeSummary } from '@/types/messages'
import { isServiceWindow } from '@/utils/service-window'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
const REFERER = 'https://columbiaview.org'

export async function getYouTubeMessages(
  limit: number = 36
): Promise<EpisodeList> {
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
        headers: { Referer: REFERER },
      }
    )

    if (response.ok) {
      const data = await response.json()
      return data.items.map((item: any) => ({
        episode_id: item.snippet.resourceId.videoId,
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        published_at: item.snippet.publishedAt,
        image_url:
          item.snippet.thumbnails?.high?.url ||
          item.snippet.thumbnails?.default?.url,
        description: item.snippet.description,
      }))
    } else {
      const errorData = await response.json().catch(() => ({}))
      console.error(
        'Failed to fetch YouTube playlist items:',
        response.status,
        JSON.stringify(errorData, null, 2)
      )
    }
  }

  // Fallback to search if playlist ID is missing but channel ID is present
  if (YOUTUBE_CHANNEL_ID) {
    return getYouTubeVideosBySearch(limit)
  }

  console.warn('YouTube Playlist ID or Channel ID missing')
  return []
}

/**
 * The live stream currently on air, or null.
 *
 * Gated on the Sunday-morning service window because the underlying
 * search.list call costs 100 quota units — see utils/service-window for the
 * arithmetic. Outside the window this makes no request at all.
 */
export async function getActiveLiveStream(): Promise<EpisodeSummary | null> {
  if (!isServiceWindow()) return null

  const [stream] = await getYouTubeLiveStreams(1)

  return stream ?? null
}

export async function getYouTubeLiveStreams(
  limit: number = 5
): Promise<EpisodeList> {
  if (!YOUTUBE_CHANNEL_ID) {
    console.warn('YouTube Channel ID missing for live streams')
    return []
  }

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&eventType=live&type=video&maxResults=${limit}&key=${YOUTUBE_API_KEY}`,
    {
      next: { revalidate: 300 },
      headers: { Referer: REFERER },
    }
  )

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    console.error(
      'Failed to fetch YouTube live streams:',
      response.status,
      JSON.stringify(errorData, null, 2)
    )
    return []
  }

  const data = await response.json()
  return data.items.map((item: any) => ({
    episode_id: item.id.videoId,
    id: item.id.videoId,
    title: item.snippet.title,
    published_at: item.snippet.publishedAt,
    image_url:
      item.snippet.thumbnails?.high?.url ||
      item.snippet.thumbnails?.default?.url,
    description: item.snippet.description,
  }))
}

export async function getYouTubeVideosBySearch(
  limit: number = 36
): Promise<EpisodeList> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&order=date&type=video&maxResults=${limit}&key=${YOUTUBE_API_KEY}`,
    {
      next: { revalidate: 1800 },
      headers: { Referer: REFERER },
    }
  )

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    console.error(
      'Failed to fetch YouTube videos via search:',
      response.status,
      JSON.stringify(errorData, null, 2)
    )
    return []
  }

  const data = await response.json()
  console.log('getYouTubeVideosBySearch data:', JSON.stringify(data, null, 2))
  return data.items.map((item: any) => ({
    episode_id: item.id.videoId,
    id: item.id.videoId,
    title: item.snippet.title,
    published_at: item.snippet.publishedAt,
    image_url:
      item.snippet.thumbnails?.high?.url ||
      item.snippet.thumbnails?.default?.url,
    description: item.snippet.description,
  }))
}

type YouTubeVideoItem = {
  id: string
  snippet: {
    title: string
    publishedAt: string
    description: string
    thumbnails?: {
      high?: { url: string }
      default?: { url: string }
    }
  }
}

/**
 * Hydrate a set of video IDs with full snippet data.
 *
 * The list endpoints disagree on description fidelity — `search.list` truncates
 * to roughly 160 characters, while `playlistItems.list` returns the full text.
 * Anything deciding indexability has to read from `videos.list`, which is the
 * same source the message page itself uses, so the two can't drift apart.
 *
 * Batched 50 at a time (the API maximum) — one quota unit per call.
 */
export async function getYouTubeMessagesByIds(
  ids: string[]
): Promise<EpisodeList> {
  if (!YOUTUBE_API_KEY || ids.length === 0) return []

  const batches: string[][] = []
  for (let i = 0; i < ids.length; i += 50) {
    batches.push(ids.slice(i, i + 50))
  }

  const results = await Promise.all(
    batches.map(async (batch) => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${batch.join(',')}&key=${YOUTUBE_API_KEY}`,
        {
          next: { revalidate: 1800 },
          headers: { Referer: REFERER },
        }
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error(
          'Failed to hydrate YouTube videos:',
          response.status,
          JSON.stringify(errorData, null, 2)
        )
        return []
      }

      const data: { items?: YouTubeVideoItem[] } = await response.json()
      return (data.items ?? []).map((item) => ({
        episode_id: item.id,
        id: item.id,
        title: item.snippet.title,
        published_at: item.snippet.publishedAt,
        image_url:
          item.snippet.thumbnails?.high?.url ??
          item.snippet.thumbnails?.default?.url ??
          '',
        description: item.snippet.description,
      }))
    })
  )

  return results.flat()
}

export async function getYouTubeMessage(id: string): Promise<Episode> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API Key missing')
  }

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${id}&key=${YOUTUBE_API_KEY}`,
    {
      next: { revalidate: 3600 },
      headers: { Referer: REFERER },
    }
  )

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    console.error(
      'Failed to fetch YouTube message:',
      response.status,
      JSON.stringify(errorData, null, 2)
    )
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
    image_url:
      item.snippet.thumbnails?.high?.url ||
      item.snippet.thumbnails?.default?.url,
    description: item.snippet.description,
    duration_iso: item.contentDetails?.duration,
    description_html: item.snippet.description.replace(/\n/g, '<br>'), // Basic conversion
    author: {
      fullname: 'Columbia View Church', // Default author for YouTube channel
    },
  }
}

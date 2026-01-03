import { Episode } from '@/types/messages'

export interface GetEpisodeResponse {
  response: {
    episode: Episode
  }
}

export async function getEpisode(id: string): Promise<Episode> {
  const response = await fetch(
    `https://api.spreaker.com/v2/episodes/${id}`,
    // Next.js will dedupe requests, so we can call this in both metadata and component
    { next: { revalidate: 3600 } } 
  )
  
  if (!response.ok) {
    throw new Error('Failed to fetch episode')
  }

  const data: GetEpisodeResponse = await response.json()
  return data.response.episode
}

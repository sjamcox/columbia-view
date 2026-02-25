// Define gradient variants using brand colors
const gradientVariants = [
  'from-primary-dark-blue to-primary-light-blue',
  'from-primary-light-blue to-secondary-aqua',
  'from-secondary-aqua to-secondary-green',
  'from-secondary-green to-secondary-yellow',
  'from-secondary-yellow to-secondary-red',
  'from-primary-dark-blue to-secondary-blue-black',
  'from-secondary-blue-black to-primary-dark-blue',
  'from-primary-light-blue to-secondary-green',
]

// Function to get a consistent gradient based on episode ID (works with number or string)
export function getGradientForEpisode(episodeId: number | string): string {
  if (typeof episodeId === 'string') {
    // Generate a simple hash for string IDs
    let hash = 0
    for (let i = 0; i < episodeId.length; i++) {
        hash = episodeId.charCodeAt(i) + ((hash << 5) - hash)
    }
    return gradientVariants[Math.abs(hash) % gradientVariants.length]
  }
  
  return gradientVariants[episodeId % gradientVariants.length]
}

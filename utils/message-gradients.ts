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

// Function to get a consistent gradient based on episode ID
export function getGradientForEpisode(episodeId: number): string {
  return gradientVariants[episodeId % gradientVariants.length]
}

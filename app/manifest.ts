import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Columbia View Church',
    short_name: 'Columbia View',
    description: 'Columbia View Church is a Christ-centered church where the Word of God is shared and people are loved. Advancing the great commission in the spirit of the great commandment.',
    start_url: '/',
    display: 'standalone',
    background_color: '#e7e7e7',
    theme_color: '#0b496f',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

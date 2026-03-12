import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://columbiaview.org'

  const routes = [
    '',
    '/about',
    '/events',
    '/icpdx',
    '/immigrant-connection-pdx',
    '/immigrant-connection-pdx/jobs',
    '/immigrant-connection-pdx/staff',
    '/messages',
    '/ministries',
    '/nextgen',
    '/plan-your-visit',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.planningcenterusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'registrations-production.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'groups-production.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/give',
        destination: 'https://columbiaview.churchcenter.com/giving',
        permanent: true,
      },
      {
        source: '/join-us',
        destination: '/plan-your-visit',
        permanent: true,
      },
      {
        source: '/immigrant-connection-pdx/booking',
        destination: '/immigrant-connection-pdx',
        permanent: true,
      },
    ]
  },
}

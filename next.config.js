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

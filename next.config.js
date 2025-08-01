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
    ],
  },
  async redirects() {
    return [
      {
        source: '/give',
        destination: 'https://columbiaview.churchcenter.com/giving',
        permanent: true,
      },
    ]
  },
}

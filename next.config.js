module.exports = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/events',
        destination: 'https://columbiaview.churchcenter.com/calendar?view=list',
        permanent: true,
      },
    ]
  },
}

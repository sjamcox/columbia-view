import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '9ya152ax',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})
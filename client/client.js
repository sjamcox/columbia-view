import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '9ya152ax',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})

export const getMainNavigationItems = () => {
  const query = `
    *[_id == 'mainNavigation'][0] {
      items[] {
        'link': reference->{title, 'slug': slug.current},
        children[] {
          'link': reference->{title, 'slug': slug.current}
        }
      }
    }
  `
  return client.fetch(query)
}

export const getSocialAccounts = () => {
  const query = `*[_id == 'socialAccounts'][0]`
  return client.fetch(query)
}
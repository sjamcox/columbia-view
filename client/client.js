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

export const getLandingPage = (slug) => {
  const query = `
    *[_type == 'landingPage' && slug.current == '/${slug}'][0]{
      ...,
      content[]{
        ...,
        button{
          ...,
          link[]{
            ...,
            reference->
          }
        },
        image{
          ...,
          asset->
        },
        columnOne[]{
          ...,
          text[] {
            ...,
            link[]{
              ...,
              reference->
            },
            asset->,
          },
          image{
            ...,
            asset->
          },
        },
        columnTwo[]{
          ...,
          text[] {
            ...,
            link[]{
              ...,
              reference->
            },
            asset->,
          },
          image{
            ...,
            asset->
          },
        },
        content[]{
          ...,
          image{
            ...,
            asset->
          },
          link[]{
            ...,
            reference->
          },
          text[] {
            ...,
            link[]{
              ...,
              reference->
            },
            asset->,
          }
        },
        backgroundImage{
          ...,
          asset->
        },
        link[]{
          ...,
          link[]{
            reference->
          }
        }
      }
    }
  `
  return client.fetch(query)
}

export const getLandingPageSlugs = () => {
  const query = `*[_type == "landingPage" && defined(slug.current)][].slug.current`
  return client.fetch(query)
}
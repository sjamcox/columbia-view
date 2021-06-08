export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text'
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'imageBlock'
    },
    {
      name: 'logomark',
      title: 'Logomark',
      type: 'imageBlock',
      description: 'Icon to be used in mobile menu'
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small con to be used in browser tabs. Should be .ico format.'
    },
    {
      name: 'rssFeed',
      title: 'RSS Feed URL',
      type: 'url'
    }
  ]
}
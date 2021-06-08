export default {
  name: 'socialAccounts',
  title: 'Social Accounts',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'facebookUrl',
      type: 'url',
      title: 'Facebook URL'
    },
    {
      name: 'instagramUrl',
      type: 'url',
      title: 'Instagram URL'
    },
    {
      name: 'twitterUrl',
      type: 'url',
      title: 'Twitter URL'
    },
    {
      name: 'youtubeUrl',
      type: 'url',
      title: 'Youtube URL'
    }
  ]
}
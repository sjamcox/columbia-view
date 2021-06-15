export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'content',
      title: 'Grid Content',
      type: 'gridContent'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string'
    }
  ]
}
export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Menu title'
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        { type: 'menuItem' }
      ]
    }
  ]
}



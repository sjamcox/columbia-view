export default {
  name: 'mainNavigation',
  title: 'Main Navigation',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Menu Items',
      of: [
        { type: 'menuItem' }
      ]
    }
  ]
}
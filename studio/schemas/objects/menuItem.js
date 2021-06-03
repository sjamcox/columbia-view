export default {
  name: 'menuItem',
  type: 'object',
  title: 'Menu Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Menu link title',
    },
    {
      name: 'reference',
      type: 'reference',
      title: 'Page Link',
      description: 'Direct link to page if there are no dropdown links',
      to: [{ type: 'landingPage' }]
    },
    {
      name: 'links',
      type: 'array',
      title: 'Dropdown links',
      description: 'List of links to appear in a dropdown under the Menu link title',
      of: [
        { type: 'internalLink' },
        { type: 'link' }
      ]
    }
  ]
}
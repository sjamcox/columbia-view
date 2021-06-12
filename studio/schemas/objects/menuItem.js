export default {
  name: 'menuItem',
  type: 'object',
  title: 'Menu Item',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Target Page',
      description: 'Direct link to page if there are no dropdown links',
      to: [{ type: 'landingPage' }]
    },
    {
      name: 'children',
      type: 'array',
      title: 'Children',
      description: 'List of links to appear in a dropdown under the Target Page',
      of: [
        { type: 'internalLink' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'reference.title'
    }
  }
}
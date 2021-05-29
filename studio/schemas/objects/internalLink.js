export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal link',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [
        { type: 'page' },
        { type: 'series' },
        { type: 'sermon' },
      ]
    }
  ]
}
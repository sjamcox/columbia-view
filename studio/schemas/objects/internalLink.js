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
        { type: 'landingPage' },
      ]
    }
  ],
  preview: {
    select: {
      title: 'reference.title'
    }
  }
}
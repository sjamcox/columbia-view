export default {
  name: 'button',
  type: 'object',
  title: 'Button',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Button text'
    },
    {
      name: 'link',
      type: 'array',
      title: 'Link',
      of: [
        { type: 'link' },
        { type: 'internalLink' },
      ],
      validation: rule => rule.max(1)
    }
  ]
}
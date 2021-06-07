export default {
  name: 'splitLayout',
  type: 'object',
  title: 'Split Layout',
  fields: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Split Layout',
      hidden: true
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: ['70/30', '50/50', '30/70']
      },
      validation: rule => rule.required()
    },
    {
      name: 'columnOne',
      type: 'array',
      of: [
        { type: 'simpleContent' },
        { type: 'youtube' }
      ]
    },
    {
      name: 'columnTwo',
      type: 'array',
      of: [
        { type: 'simpleContent' },
        { type: 'socialBlock' },
        { type: 'youtube' }
      ]
    }
  ]
}
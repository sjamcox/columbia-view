export default {
  name: 'gridContent',
  type: 'object',
  title: 'Grid Content',
  fields: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Grid Content',
      hidden: true
    },
    {
      name: 'columnCount',
      type: 'number',
      title: 'Number of columns',
      options: {
        list: [2, 3, 4]
      },
      validation: rule => rule.required()
    },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'simpleContent' }
      ]
    }
  ]
}
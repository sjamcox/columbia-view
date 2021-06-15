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
        list: [1, 2, 3, 4]
      },
      validation: rule => rule.required()
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page Sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'simpleContent' },
        { type: 'photoTile' },
        { type: 'youtube' },
      ]
    }
  ]
}
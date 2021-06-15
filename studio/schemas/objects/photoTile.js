export default {
  name: 'photoTile',
  title: 'Photo Tile',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
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
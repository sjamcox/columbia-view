export default {
  name: 'photoTile',
  title: 'Photo Tile',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'imageBlock'
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
    }
  ]
}
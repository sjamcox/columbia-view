export default {
  title: 'Image',
  name: 'imageBlock',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description: 'A description of the contents of the image for accessibility purposes',
      validation: rule => rule.required()
    }
  ]
}
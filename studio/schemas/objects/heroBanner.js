export default {
  name: 'heroBanner',
  type: 'object',
  title: 'Hero Banner',
  fields: [
    {
      name: 'Image',
      type: 'imageBlock'
    },
    {
      name: 'Heading',
      type: 'string'
    },
    {
      name: 'Description',
      type: 'text'
    },
    {
      name: 'Button',
      type: 'button'
    }
  ]
}
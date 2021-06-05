export default {
  name: 'smallBanner',
  type: 'object',
  title: 'Small Banner',
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
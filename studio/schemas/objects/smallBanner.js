export default {
  name: 'smallBanner',
  type: 'object',
  title: 'Small Banner',
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
      type: 'text'
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button'
    }
  ]
}
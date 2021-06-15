export default {
  name: 'ctaBanner',
  type: 'object',
  title: 'CTA Banner',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: rule => rule.required()
    },
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [
        { type: 'button' },
      ],
      validation: rule => rule.max(1)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: rule => rule.required()
    },
    {
      name: 'imageAlignment',
      title: 'Image Alignment',
      type: 'string',
      options: {
        list: ['Left', 'Right'],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: rule => rule.required()
    },
  ]
}
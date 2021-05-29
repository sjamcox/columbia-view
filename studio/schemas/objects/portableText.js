export default {
  name: 'portableText',
  type: 'array',
  title: 'Simple Content',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          { type: 'link' },
          { type: 'internalLink' }
        ]
      }
    }
  ]
}
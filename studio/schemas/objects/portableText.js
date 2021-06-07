export default {
  name: 'portableText',
  type: 'array',
  title: 'Portable Text',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          { type: 'link' },
          { type: 'internalLink' }
        ]
      }
    },
    { type: 'image' },
    { type: 'youtube' }
  ]
}
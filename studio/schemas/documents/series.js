export default {
  name: 'series',
  type: 'document',
  title: 'Sermon Series',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    }
  ]
}
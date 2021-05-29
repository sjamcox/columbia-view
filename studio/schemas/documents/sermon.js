export default {
  name: 'sermon',
  type: 'document',
  title: 'Sermon',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: rule => rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => {

          return input
          .toLowerCase()
          .replace(/[^A-Za-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
          .slice(0, 200)
        }
      },
      validation: rule => rule.required()
    },
    {
      title: 'Series',
      name: 'series',
      type: 'reference',
      to: [{ type: 'series' }],
      validation: rule => rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText'
    }
  ]
}
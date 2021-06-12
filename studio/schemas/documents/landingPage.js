export default {
  name: 'landingPage',
  type: 'document',
  title: 'Landing Page',
  fieldsets: [
    {
      title: 'SEO & Metadata',
      name: 'metadata',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'content',
      type: 'array',
      title: 'Page Sections',
      of: [
        { type: 'heroBanner' },
        { type: 'smallBanner' },
        { type: 'ctaBanner' },
        { type: 'gridContent' },
        { type: 'splitLayout' },
        { type: 'simpleContent' },
        { type: 'videoSection' }
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This text shows on search engine results pages',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
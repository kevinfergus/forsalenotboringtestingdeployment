import { format } from 'date-fns'
export default {
  name: 'listing',
  type: 'document',
  title: 'Listing',
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'address',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      title: 'Date Added',
      name: 'dateAdded',
      type: 'date'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'

    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'redfinLink',
      type: 'url',
      title: 'Redfin Link'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'neighborhood',
      type: 'string',
      title: 'Neighborhood'
    },
    {
      name: 'sqft',
      type: 'number',
      title: "Square Footage"
    },
    {
      name: 'beds',
      type: 'number',
      title: 'Beds'
    },
    {
      name: 'baths',
      type: 'number',
      title: 'Baths'
    },
    {
      name: 'city',
      type: 'string',
      title: 'City'
    },
    {
      name: 'agentName',
      type: 'string',
      title: 'Listing Agent'
    },
    {
      name: 'agentNumber',
      type: 'string',
      title: 'Agent Phone'
    },
    {
      name: 'agentEmail',
      type: 'string',
      title: 'Agent Email'
    },
    {
      name: 'active',
      type: 'boolean',
      title: 'Active?'
    }
  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'dateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Release Date, Old',
      name: 'dateAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'address',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  },
  initialValue: {
    dateAdded: (new Date()).toISOString(),
    publishedAt: (new Date()).toISOString()
  }
}

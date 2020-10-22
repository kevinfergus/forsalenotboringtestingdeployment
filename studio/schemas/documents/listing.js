import {format} from 'date-fns'
export default {
  name: 'listing',
  type: 'document',
  title: 'Listing',
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
    {
       name: 'imageGallery',
       title: 'Image Gallery',
       type: 'array',
       of: [{ type: 'image'  }]

    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
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
      name: 'City',
      type: 'string',
      title: 'City'
    },
    {
      name: 'homepageFeatured',
      type: 'boolean',
      title: 'Featured?'
    }
  ],
  preview: {
    select: {
      title: 'address',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}

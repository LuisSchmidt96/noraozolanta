import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headlineLines',
      title: 'Headline (lines)',
      description: 'Each item becomes its own line (like in your screenshot).',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'supportingText',
      title: 'Supporting text',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'ctas',
      title: 'Buttons',
      type: 'array',
      of: [{type: 'cta'}],
      validation: (Rule) => Rule.required().min(1).max(2),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagePlacement',
      title: 'Image placement',
      type: 'string',
      options: {
        list: [
          {title: 'Right', value: 'right'},
          {title: 'Left', value: 'left'},
        ],
        layout: 'radio',
      },
      initialValue: 'right',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      lines: 'headlineLines',
      media: 'image',
    },
    prepare({lines, media}) {
      const title = Array.isArray(lines) ? lines.join(' / ') : 'Hero Section'
      return {title, media}
    },
  },
})

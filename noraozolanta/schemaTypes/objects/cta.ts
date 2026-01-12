import { defineType, defineField } from "sanity";

export default defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Button label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Link",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true, // lets you use "/waitlist" etc.
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "variant",
      title: "Style",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Link", value: "link" },
        ],
        layout: "radio",
      },
      initialValue: "primary",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

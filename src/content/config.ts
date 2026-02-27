import { defineCollection, z } from "astro:content";

const integrations = defineCollection({
  schema: ({ image }) =>
    z.object({
      integration: z.string(),
      description: z.string(),
      email: z.string(),
      permissions: z.array(z.string()),
      details: z.array(
        z.object({
          title: z.string(),
          value: z.string(),
          url: z.string().optional(),
        })
      ),
      logo: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const helpcenter = defineCollection({
  schema: z.object({
    page: z.string(),
    description: z.string(),
    category: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    lastUpdated: z.string().optional(),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
  }),
});

const changelog = defineCollection({
  schema: ({ image }) =>
    z.object({
      page: z.string(),
      description: z.string(),
      pubDate: z.date(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  helpcenter,
  changelog,
  infopages,
  posts: postsCollection,
  integrations,
};

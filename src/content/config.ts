import { z, defineCollection } from "astro:content";

// Create custom schema
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    draft: z.boolean(),
    author: z.enum(["Jose Guerra"]),
  })
});

export const collections = { blog };

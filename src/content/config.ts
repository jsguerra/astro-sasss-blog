import { z, defineCollection } from "astro:content";

// Create custom schema
const blog = defineCollection({
  schema: z.object({})
});

export const collections = { blog };

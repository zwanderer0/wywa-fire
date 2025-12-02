import { defineCollection, z } from "astro:content";

const updates = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      description: z.string().max(240).optional(),
      date: z.date(),
      author: z.string().default("WYWA FI-RE Team"),
      heroImage: z.string().optional(),
      heroImageAlt: z.string().optional(),
      heroVideo: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    })
    .refine(
      (data) => !data.heroVideo || data.heroVideo.trim().length > 0,
      { message: "Hero video URL cannot be empty." },
    ),
});

export const collections = { updates };

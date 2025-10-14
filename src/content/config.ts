import { z, defineCollection } from "astro:content";

// Publication schema (with pubDate)
const publicationSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

// Project schema (no dates)
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  order: z.number().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

// Store schema (existing)
const storeSchema = z.object({
  title: z.string(),
  description: z.string(),
  custom_link_label: z.string(),
  custom_link: z.string().optional(),
  updatedDate: z.coerce.date(),
  pricing: z.string().optional(),
  oldPricing: z.string().optional(),
  badge: z.string().optional(),
  checkoutUrl: z.string().optional(),
  heroImage: z.string().optional(),
});

// Type exports
export type PublicationSchema = z.infer<typeof publicationSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;

// Collections
export const collections = {
  publications: defineCollection({ schema: publicationSchema }),
  projects: defineCollection({ schema: projectSchema }),
  store: defineCollection({ schema: storeSchema }),
};


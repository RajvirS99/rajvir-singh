import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
    })
});

export const collections = {
    posts: postsCollection
};
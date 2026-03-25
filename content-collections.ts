import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    locale: z.string(),
    type: z.enum(["blog", "guide"]).optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const slug = document._meta.path.split("/").pop() || "";
    const pathParts = document._meta.path.split("/");
    const contentType = pathParts.includes("blog")
      ? "blog"
      : pathParts.includes("guides")
        ? "guide"
        : "page";
    return {
      ...document,
      mdx,
      slug,
      contentType,
    };
  },
});

export default defineConfig({
  content: [posts],
});

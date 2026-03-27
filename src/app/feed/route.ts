import { Feed } from "feed";
import { allPosts } from "@/../.content-collections/generated";
import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  const feed = new Feed({
    title: "ZETUP PRO Corporate Services Blog",
    description:
      "PRO services, company formation, visa processing, and Emiratisation guides for Dubai businesses.",
    id: SITE_CONFIG.url,
    link: SITE_CONFIG.url,
    language: "en",
    image: `${SITE_CONFIG.url}/images/misc/logos/zetup_pro_logo_wordmark_color.png`,
    favicon: `${SITE_CONFIG.url}/images/misc/logos/zetup_favicon.png`,
    copyright: `${new Date().getFullYear()} ZETUP PRO Corporate Services`,
    feedLinks: {
      rss2: `${SITE_CONFIG.url}/feed`,
    },
  });

  const enPosts = allPosts
    .filter((p) => p.locale === "en" && p.contentType === "blog")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  for (const post of enPosts) {
    feed.addItem({
      title: post.title,
      id: `${SITE_CONFIG.url}/en/blog/${post.slug}`,
      link: `${SITE_CONFIG.url}/en/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      author: [{ name: post.author || "ZETUP Team" }],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

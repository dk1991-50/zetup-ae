import type { MetadataRoute } from "next";
import { allPosts } from "@/../.content-collections/generated";
import { GLOSSARY } from "@/lib/glossary";
import { LOCATIONS } from "@/lib/locations";

const BASE_URL = "https://zetup.ae";

// When a static page was last meaningfully updated.
// Update these when the page's content materially changes.
// Service pages, static pages, compare pages, tools — manual map.
const STATIC_PAGE_DATES: Record<string, string> = {
  "": "2026-04-26",
  "/about": "2026-04-26",
  "/contact": "2026-04-26",
  "/pricing": "2026-04-26",
  "/pro-health-check": "2026-04-26",
  "/switch-pro": "2026-04-26",
  "/services": "2026-04-26",
  "/guides": "2026-04-26",
  "/blog": "2026-04-26",
  "/privacy-policy": "2026-04-10",
  "/terms-of-service": "2026-04-10",
  "/tools/emiratisation-calculator": "2026-04-26",
  "/tools/cost-calculator": "2026-04-26",
  "/tools/government-fees": "2026-04-26",
  "/compare": "2026-04-26",
  "/glossary": "2026-04-26",
  "/locations": "2026-04-26",
  "/resources": "2026-04-26",
  "/resources/dubai-mainland-setup-checklist": "2026-04-26",
  "/changelog": "2026-04-26",
  "/faq": "2026-04-26",
};

const SERVICE_PAGE_DATES: Record<string, string> = {
  "/services/pro-services": "2026-04-26",
  "/services/company-formation": "2026-04-26",
  "/services/visa-services": "2026-04-26",
  "/services/emiratisation": "2026-04-26",
  "/services/trade-license-renewal": "2026-04-26",
  "/services/corporate-tax": "2026-04-26",
  "/services/document-clearing": "2026-04-26",
  "/services/golden-visa": "2026-04-26",
};

const COMPARE_PAGE_DATES: Record<string, string> = {
  "/compare/zetup-pro-vs-virtuzone": "2026-04-26",
  "/compare/zetup-pro-vs-creative-zone": "2026-04-26",
  "/compare/zetup-pro-vs-shuraa": "2026-04-26",
  "/compare/pro-services-pricing-comparison-dubai": "2026-04-26",
};

// Build a per-locale, per-slug index of MDX dates.
// Falls back to today if a date is missing for any reason.
function buildMdxDateIndex() {
  const index = new Map<string, string>();
  for (const post of allPosts) {
    if (!post.locale || !post.slug || !post.date) continue;
    const folder =
      post.contentType === "guide"
        ? "guides"
        : post.contentType === "blog"
          ? "blog"
          : null;
    if (!folder) continue;
    index.set(`${post.locale}:/${folder}/${post.slug}`, post.date);
  }
  return index;
}

function dateOrFallback(value: string | undefined): Date {
  if (!value) return new Date();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"] as const;
  const mdxDates = buildMdxDateIndex();

  type Section = {
    pages: Record<string, string>;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  };

  const sections: Section[] = [
    {
      pages: STATIC_PAGE_DATES,
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      pages: SERVICE_PAGE_DATES,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      pages: COMPARE_PAGE_DATES,
      priority: 0.8,
      changeFrequency: "weekly",
    },
  ];

  // Build static + service + compare entries
  const staticEntries: MetadataRoute.Sitemap = sections.flatMap(
    ({ pages, priority, changeFrequency }) =>
      Object.entries(pages).flatMap(([page, date]) =>
        locales.map((locale) => ({
          url: `${BASE_URL}/${locale}${page}`,
          lastModified: dateOrFallback(date),
          changeFrequency,
          // Homepage gets max priority across all sections
          priority: page === "" ? 1 : priority,
          alternates: {
            languages: {
              en: `${BASE_URL}/en${page}`,
              ar: `${BASE_URL}/ar${page}`,
            },
          },
        })),
      ),
  );

  // Build dynamic guide entries from MDX frontmatter
  const guideSlugs = Array.from(
    new Set(
      allPosts
        .filter((p) => p.contentType === "guide")
        .map((p) => p.slug)
        .filter(Boolean),
    ),
  );
  const guideEntries: MetadataRoute.Sitemap = guideSlugs.flatMap((slug) =>
    locales.map((locale) => {
      const mdxDate = mdxDates.get(`${locale}:/guides/${slug}`);
      return {
        url: `${BASE_URL}/${locale}/guides/${slug}`,
        lastModified: dateOrFallback(mdxDate),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/guides/${slug}`,
            ar: `${BASE_URL}/ar/guides/${slug}`,
          },
        },
      };
    }),
  );

  // Build dynamic blog entries from MDX frontmatter
  const blogSlugs = Array.from(
    new Set(
      allPosts
        .filter((p) => p.contentType === "blog")
        .map((p) => p.slug)
        .filter(Boolean),
    ),
  );
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.flatMap((slug) =>
    locales.map((locale) => {
      const mdxDate = mdxDates.get(`${locale}:/blog/${slug}`);
      return {
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: dateOrFallback(mdxDate),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/blog/${slug}`,
            ar: `${BASE_URL}/ar/blog/${slug}`,
          },
        },
      };
    }),
  );

  // Glossary entries — one per term × 2 locales
  const glossaryEntries: MetadataRoute.Sitemap = GLOSSARY.flatMap((entry) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/glossary/${entry.slug}`,
      lastModified: dateOrFallback("2026-04-26"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/glossary/${entry.slug}`,
          ar: `${BASE_URL}/ar/glossary/${entry.slug}`,
        },
      },
    })),
  );

  // Location entries — one per location × 2 locales
  const locationEntries: MetadataRoute.Sitemap = LOCATIONS.flatMap((loc) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/locations/${loc.slug}`,
      lastModified: dateOrFallback("2026-04-26"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/locations/${loc.slug}`,
          ar: `${BASE_URL}/ar/locations/${loc.slug}`,
        },
      },
    })),
  );

  return [
    ...staticEntries,
    ...guideEntries,
    ...blogEntries,
    ...glossaryEntries,
    ...locationEntries,
  ];
}

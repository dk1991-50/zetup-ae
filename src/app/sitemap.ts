import type { MetadataRoute } from "next";

const BASE_URL = "https://zetup.ae";

const staticPages = [
  "",
  "/about",
  "/contact",
  "/pricing",
  "/pro-health-check",
  "/switch-pro",
  "/services",
  "/guides",
  "/blog",
  "/privacy-policy",
  "/terms-of-service",
  "/tools/emiratisation-calculator",
  "/tools/cost-calculator",
  "/tools/government-fees",
];

const servicePages = [
  "/services/pro-services",
  "/services/company-formation",
  "/services/visa-services",
  "/services/emiratisation",
  "/services/trade-license-renewal",
  "/services/corporate-tax",
  "/services/document-clearing",
  "/services/golden-visa",
];

const guidePages = [
  "/guides/pro-services-dubai-complete-guide",
  "/guides/dubai-mainland-company-formation",
  "/guides/free-zone-vs-mainland",
  "/guides/uae-visa-processing",
  "/guides/emiratisation-compliance-2026",
  "/guides/uae-corporate-tax",
];

const comparePages = [
  "/compare/zetup-pro-vs-virtuzone",
  "/compare/zetup-pro-vs-creative-zone",
  "/compare/zetup-pro-vs-shuraa",
  "/compare/pro-services-pricing-comparison-dubai",
];

const blogPosts = [
  "/blog/how-much-company-setup-cost-dubai-mainland-2026",
  "/blog/what-is-pro-service-dubai-expats-guide",
  "/blog/documents-required-dubai-mainland-company-formation",
  "/blog/how-to-renew-dubai-trade-license",
  "/blog/golden-visa-uae-2026-eligibility-requirements",
  "/blog/top-10-business-activities-dubai-mainland",
  "/blog/how-to-open-corporate-bank-account-dubai",
  "/blog/start-business-dubai-european-expat-guide",
  "/blog/100-percent-foreign-ownership-dubai",
  "/blog/pro-services-cost-dubai-transparent-pricing",
  "/blog/emiratisation-fines-2026-penalties",
  "/blog/in-house-pro-vs-outsourced-comparison",
  "/blog/how-to-switch-pro-providers-dubai",
  "/blog/nafis-incentives-explained",
  "/blog/free-zone-mainland-operating-permit-2026",
  "/blog/dubai-corporate-tax-small-business-relief",
  "/blog/mainland-vs-dmcc-company-formation",
  "/blog/cheapest-business-setup-dubai-2026",
  "/blog/ejari-registration-dubai-guide",
  "/blog/visa-cancellation-dubai-process",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"];
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...guidePages,
    ...comparePages,
    ...blogPosts,
  ];

  return allPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date("2026-04-10"),
      changeFrequency: page.startsWith("/blog/")
        ? ("monthly" as const)
        : ("weekly" as const),
      priority:
        page === ""
          ? 1
          : page.startsWith("/services/")
            ? 0.9
            : page.startsWith("/guides/") || page.startsWith("/compare/")
              ? 0.8
              : 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}/en${page}`,
          ar: `${BASE_URL}/ar${page}`,
        },
      },
    })),
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Clock } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { SITE_CONFIG } from "@/lib/constants";

const guideSlugs = [
  "pro-services-dubai-complete-guide",
  "dubai-mainland-company-formation",
  "free-zone-vs-mainland",
  "uae-visa-processing",
  "emiratisation-compliance-2026",
  "uae-corporate-tax",
];

const guideData: Record<
  string,
  { title: string; description: string; readTime: string }
> = {
  "pro-services-dubai-complete-guide": {
    title: "PRO Services in Dubai: Complete Guide [2026]",
    description:
      "Everything you need to know about PRO services in Dubai — what they are, how much they cost, what they cover, and how to choose the right PRO company.",
    readTime: "15 min",
  },
  "dubai-mainland-company-formation": {
    title: "Dubai Mainland Company Formation: Step-by-Step [2026]",
    description:
      "Complete guide to setting up a mainland company in Dubai with 100% foreign ownership, transparent costs, and step-by-step instructions.",
    readTime: "13 min",
  },
  "free-zone-vs-mainland": {
    title: "Free Zone vs Mainland Dubai: Complete Comparison [2026]",
    description:
      "Comprehensive comparison of free zone and mainland company formation in Dubai covering costs, ownership, trading rights, and visas.",
    readTime: "11 min",
  },
  "uae-visa-processing": {
    title: "UAE Visa Processing Guide [2026]",
    description:
      "Complete guide to all visa types in the UAE — employment, investor, dependent, Golden, and Green visas with timelines and costs.",
    readTime: "10 min",
  },
  "emiratisation-compliance-2026": {
    title: "Emiratisation Compliance Guide 2026",
    description:
      "Everything companies need to know about Emiratisation requirements, quotas, fines, Nafis subsidies, and compliance strategies for 2026.",
    readTime: "11 min",
  },
  "uae-corporate-tax": {
    title: "UAE Corporate Tax Guide for Small Businesses [2026]",
    description:
      "Guide to UAE corporate tax including the 9% rate, Small Business Relief expiring Dec 2026, filing deadlines, and new penalties.",
    readTime: "9 min",
  },
};

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = guideData[slug];
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/guides/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/guides/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/guides/${slug}`,
      },
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!guideSlugs.includes(slug)) {
    notFound();
  }

  const guide = guideData[slug];

  return (
    <>
      <article className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === "ar" ? "العودة إلى الأدلة" : "All Guides"}
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-stone mb-4">
              <span>March 23, 2026</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {guide.readTime} read
              </span>
              <span>ZETUP Team</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-fjord-900 mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-slate">{guide.description}</p>
          </div>

          <div className="prose prose-lg max-w-none text-slate prose-headings:text-fjord-900 prose-headings:font-display prose-a:text-sage-600 prose-a:no-underline hover:prose-a:underline">
            <p>
              This guide content will be loaded from MDX content collections.
              The full content for this guide is available in the
              content/en/guides/ directory.
            </p>
            <p>
              For now, this page serves as the template that will render the MDX
              content once Content Collections is fully configured and built.
            </p>
          </div>

          <div className="mt-16 p-8 rounded-xl bg-sage-50 border border-sage-200">
            <h2 className="font-display text-2xl font-semibold text-fjord-900 mb-4">
              Need Professional Help?
            </h2>
            <p className="text-slate mb-6">
              ZETUP handles all the complexity covered in this guide. Book a
              free PRO Health Check to see how we can help your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pro-health-check"
                className="inline-block px-6 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
              >
                Free PRO Health Check
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-fjord-900 font-semibold rounded-lg border border-mist hover:shadow-md transition-shadow"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </article>

      <ArticleSchema
        title={guide.title}
        description={guide.description}
        date="2026-03-23"
        author="ZETUP Team"
        slug={slug}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Guides", url: `${SITE_CONFIG.url}/${locale}/guides` },
          {
            name: guide.title,
            url: `${SITE_CONFIG.url}/${locale}/guides/${slug}`,
          },
        ]}
      />
    </>
  );
}

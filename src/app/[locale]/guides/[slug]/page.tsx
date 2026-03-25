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
  return ["en", "ar"].flatMap((locale) =>
    guideSlugs.map((slug) => ({ locale, slug })),
  );
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
      {/* Guide header image */}
      <section className="relative h-[35vh] min-h-[250px] md:h-[45vh] md:min-h-[320px] flex items-end overflow-hidden">
        <img
          src={`/images/guides/${slug}.svg`}
          alt={guide.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fjord-950/90 via-fjord-950/50 to-fjord-950/20" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-10 md:pb-14 md:px-8 lg:px-12">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sage-300 hover:text-white mb-4 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === "ar" ? "العودة إلى الأدلة" : "All Guides"}
          </Link>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {guide.title}
          </h1>
        </div>
      </section>

      <article className="py-12 md:py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-stone mb-8 pb-8 border-b border-mist">
            <span className="font-medium">March 23, 2026</span>
            <span className="h-1 w-1 rounded-full bg-stone" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {guide.readTime} read
            </span>
            <span className="h-1 w-1 rounded-full bg-stone" />
            <span>ZETUP Team</span>
          </div>

          {/* Lead paragraph */}
          <p className="text-xl text-slate leading-relaxed mb-10 font-body">
            {guide.description}
          </p>

          {/* Guide content placeholder - styled as an info callout */}
          <div className="prose prose-lg max-w-none text-slate prose-headings:text-fjord-900 prose-headings:font-display prose-a:text-sage-600 prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed">
            <div className="not-prose p-6 rounded-xl border border-sage-200 bg-sage-50 mb-8">
              <p className="text-sm text-sage-700 font-body leading-relaxed">
                The full version of this guide is being prepared by the ZETUP
                content team. In the meantime, contact us for personalised
                guidance on this topic.
              </p>
            </div>
          </div>

          {/* CTA box */}
          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-sage-50 border border-sage-200">
            <h2 className="font-display text-2xl font-semibold text-fjord-900 mb-4">
              Need Professional Help?
            </h2>
            <p className="text-slate mb-6 font-body leading-relaxed">
              ZETUP PRO handles all the complexity covered in this guide. Book a
              free PRO Health Check to see how we can help your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pro-health-check"
                className="inline-block px-6 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
              >
                Free PRO Health Check
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-fjord-900 font-semibold rounded-lg border border-mist hover:shadow-md transition-shadow font-display"
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

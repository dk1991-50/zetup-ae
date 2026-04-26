import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { BookOpen } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "الأدلة الشاملة — زيتب"
        : "Comprehensive Guides — ZETUP PRO",
    description:
      locale === "ar"
        ? "أدلة شاملة حول خدمات PRO وتأسيس الشركات والتأشيرات والتوطين وضريبة الشركات في دبي."
        : "In-depth guides on PRO services, company formation, visas, Emiratisation, and corporate tax in Dubai.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/guides`,
      languages: {
        en: `${SITE_CONFIG.url}/en/guides`,
        ar: `${SITE_CONFIG.url}/ar/guides`,
        "x-default": `${SITE_CONFIG.url}/en`,
      },
    },
  };
}

const guides = [
  {
    slug: "pro-services-dubai-complete-guide",
    title: "PRO Services in Dubai: Complete Guide [2026]",
    description:
      "Everything you need to know about PRO services — what they are, costs, how to choose a provider.",
    readTime: "15 min",
  },
  {
    slug: "dubai-mainland-company-formation",
    title: "Dubai Mainland Company Formation: Step-by-Step [2026]",
    description:
      "10-step process, complete cost breakdown, document checklist, and timeline.",
    readTime: "13 min",
  },
  {
    slug: "free-zone-vs-mainland",
    title: "Free Zone vs Mainland Dubai: Complete Comparison [2026]",
    description:
      "Side-by-side analysis of trading rights, ownership, costs, visas, and tax implications.",
    readTime: "11 min",
  },
  {
    slug: "uae-visa-processing",
    title: "UAE Visa Processing Guide [2026]",
    description:
      "All visa types, processing timelines, required documents, and application processes.",
    readTime: "10 min",
  },
  {
    slug: "emiratisation-compliance-2026",
    title: "Emiratisation Compliance Guide 2026",
    description:
      "Quotas, fines (AED 9,000/month), Nafis subsidies, and compliance steps.",
    readTime: "11 min",
  },
  {
    slug: "uae-corporate-tax",
    title: "UAE Corporate Tax Guide for Small Businesses [2026]",
    description:
      "9% rate, Small Business Relief expiring Dec 2026, filing deadlines, penalties.",
    readTime: "9 min",
  },
];

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fjord-900 mb-6">
            {locale === "ar" ? "الأدلة الشاملة" : "Comprehensive Guides"}
          </h1>
          <p className="text-xl text-slate mb-16 max-w-2xl">
            {locale === "ar"
              ? "أدلة متعمقة مكتوبة لمساعدتك على فهم بيئة الأعمال في دبي."
              : "In-depth guides written to help you navigate the Dubai business landscape with confidence."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex gap-6 p-8 rounded-xl border border-mist bg-white hover:shadow-lg transition-shadow"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-sage-50 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-sage-500" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-fjord-900 group-hover:text-sage-600 transition-colors mb-2">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-slate mb-3">{guide.description}</p>
                  <p className="text-xs text-stone">{guide.readTime} read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Guides", url: `${SITE_CONFIG.url}/${locale}/guides` },
        ]}
      />
      <ItemListSchema
        name={
          locale === "ar"
            ? "أدلة زيتب الشاملة"
            : "ZETUP PRO Comprehensive Guides"
        }
        description={
          locale === "ar"
            ? "أدلة شاملة حول خدمات PRO وتأسيس الشركات والتأشيرات والتوطين وضريبة الشركات في دبي."
            : "In-depth guides on PRO services, company formation, visas, Emiratisation, and UAE corporate tax."
        }
        items={guides.map((guide) => ({
          name: guide.title,
          url: `${SITE_CONFIG.url}/${locale}/guides/${guide.slug}`,
          description: guide.description,
        }))}
      />
    </>
  );
}

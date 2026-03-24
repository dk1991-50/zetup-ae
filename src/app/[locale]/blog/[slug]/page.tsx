import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { SITE_CONFIG } from "@/lib/constants";

const blogSlugs = [
  "how-much-company-setup-cost-dubai-mainland-2026",
  "what-is-pro-service-dubai-expats-guide",
  "documents-required-dubai-mainland-company-formation",
  "how-to-renew-dubai-trade-license",
  "golden-visa-uae-2026-eligibility-requirements",
  "top-10-business-activities-dubai-mainland",
  "how-to-open-corporate-bank-account-dubai",
  "start-business-dubai-european-expat-guide",
  "100-percent-foreign-ownership-dubai",
  "pro-services-cost-dubai-transparent-pricing",
  "emiratisation-fines-2026-penalties",
  "in-house-pro-vs-outsourced-comparison",
  "how-to-switch-pro-providers-dubai",
  "nafis-incentives-explained",
  "free-zone-mainland-operating-permit-2026",
  "dubai-corporate-tax-small-business-relief",
  "mainland-vs-dmcc-company-formation",
  "cheapest-business-setup-dubai-2026",
  "ejari-registration-dubai-guide",
  "visa-cancellation-dubai-process",
];

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/blog/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/blog/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!blogSlugs.includes(slug)) {
    notFound();
  }

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <article className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === "ar" ? "العودة إلى المدونة" : "Back to Blog"}
          </Link>

          <div className="mb-8">
            <p className="text-sm text-stone mb-2">
              March 23, 2026 &middot; ZETUP Team
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-fjord-900 mb-4">
              {title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-slate prose-headings:text-fjord-900 prose-headings:font-display prose-a:text-sage-600 prose-a:no-underline hover:prose-a:underline">
            <p>
              This blog post content will be loaded from MDX content
              collections. The full content for this article is available in the
              content/en/blog/ directory.
            </p>
            <p>
              For now, this page serves as the template that will render the MDX
              content once Content Collections is fully configured and built.
            </p>

            <h2>Related Services</h2>
            <ul>
              <li>
                <Link href="/services/pro-services">PRO Services Dubai</Link>
              </li>
              <li>
                <Link href="/services/company-formation">
                  Company Formation Dubai
                </Link>
              </li>
              <li>
                <Link href="/services/visa-services">Visa Processing</Link>
              </li>
            </ul>
          </div>

          <div className="mt-16 p-8 rounded-xl bg-fjord-900 text-white text-center">
            <h2 className="font-display text-2xl font-semibold mb-4">
              Need Help With Your Dubai Business?
            </h2>
            <p className="text-mist mb-6">
              Book a free PRO Health Check and get a clear picture of your
              compliance status.
            </p>
            <Link
              href="/pro-health-check"
              className="inline-block px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
            >
              Book Free Health Check
            </Link>
          </div>
        </div>
      </article>

      <ArticleSchema
        title={title}
        description=""
        date="2026-03-23"
        author="ZETUP Team"
        slug={slug}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Blog", url: `${SITE_CONFIG.url}/${locale}/blog` },
          { name: title, url: `${SITE_CONFIG.url}/${locale}/blog/${slug}` },
        ]}
      />
    </>
  );
}

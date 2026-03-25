import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
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
        ? "المدونة — زيتب للخدمات المؤسسية"
        : "Blog — ZETUP Corporate Services",
    description:
      locale === "ar"
        ? "مقالات ونصائح حول خدمات PRO وتأسيس الشركات والتأشيرات والتوطين في دبي."
        : "Articles and guides on PRO services, company formation, visa processing, and Emiratisation compliance in Dubai.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/blog`,
      languages: {
        en: `${SITE_CONFIG.url}/en/blog`,
        ar: `${SITE_CONFIG.url}/ar/blog`,
      },
    },
  };
}

const blogPosts = [
  {
    slug: "how-much-company-setup-cost-dubai-mainland-2026",
    title:
      "How Much Does It Cost to Set Up a Company in Dubai Mainland? [2026]",
    description:
      "Real costs for Dubai mainland company formation in 2026. Breakdown of DET fees, office costs, visa expenses, and service fees.",
    date: "2026-03-23",
    tags: ["company formation", "costs"],
  },
  {
    slug: "what-is-pro-service-dubai-expats-guide",
    title: "What Is a PRO Service in Dubai? Everything Expats Need to Know",
    description:
      "Complete guide to PRO services in Dubai for expat business owners.",
    date: "2026-03-23",
    tags: ["PRO services"],
  },
  {
    slug: "documents-required-dubai-mainland-company-formation",
    title: "Documents Required for Dubai Mainland Company Formation",
    description:
      "Complete checklist of documents needed to form a mainland company in Dubai.",
    date: "2026-03-23",
    tags: ["company formation", "documents"],
  },
  {
    slug: "how-to-renew-dubai-trade-license",
    title: "How to Renew a Dubai Trade License: Step-by-Step Process & Costs",
    description:
      "Step-by-step guide to renewing your Dubai trade license with costs and timelines.",
    date: "2026-03-23",
    tags: ["trade license"],
  },
  {
    slug: "golden-visa-uae-2026-eligibility-requirements",
    title: "Golden Visa UAE 2026: Eligibility, Requirements & Process",
    description:
      "Updated Golden Visa eligibility criteria for 2026 including new categories.",
    date: "2026-03-23",
    tags: ["Golden Visa", "visa"],
  },
  {
    slug: "top-10-business-activities-dubai-mainland",
    title: "Top 10 Business Activities for Dubai Mainland Company Setup",
    description:
      "Most popular and profitable business activities for Dubai mainland companies.",
    date: "2026-03-23",
    tags: ["company formation", "business activities"],
  },
  {
    slug: "how-to-open-corporate-bank-account-dubai",
    title: "How to Open a Corporate Bank Account in Dubai",
    description:
      "Requirements, timeline, and tips for opening a business bank account in Dubai.",
    date: "2026-03-23",
    tags: ["banking", "company formation"],
  },
  {
    slug: "start-business-dubai-european-expat-guide",
    title: "Start a Business in Dubai as a European Expat: Complete Guide",
    description:
      "Everything European entrepreneurs need to know about starting a business in Dubai.",
    date: "2026-03-23",
    tags: ["expat guide", "company formation"],
  },
  {
    slug: "100-percent-foreign-ownership-dubai",
    title:
      "100% Foreign Ownership in Dubai: What Changed & What You Need to Know",
    description:
      "How the 2021 law change enables full foreign ownership of Dubai mainland companies.",
    date: "2026-03-23",
    tags: ["foreign ownership", "company formation"],
  },
  {
    slug: "pro-services-cost-dubai-transparent-pricing",
    title: "PRO Services Cost in Dubai: Transparent Pricing Guide [2026]",
    description:
      "Detailed breakdown of PRO services pricing in Dubai for 2026.",
    date: "2026-03-23",
    tags: ["PRO services", "pricing"],
  },
  {
    slug: "emiratisation-fines-2026-penalties",
    title: "Emiratisation Fines 2026: What You'll Pay for Non-Compliance",
    description:
      "Complete breakdown of Emiratisation fines and penalties for 2026.",
    date: "2026-03-23",
    tags: ["Emiratisation", "compliance"],
  },
  {
    slug: "in-house-pro-vs-outsourced-comparison",
    title: "In-House PRO vs Outsourced PRO Services: The Real Cost Comparison",
    description:
      "Cost comparison of hiring an in-house PRO officer vs outsourcing PRO services.",
    date: "2026-03-23",
    tags: ["PRO services", "comparison"],
  },
  {
    slug: "how-to-switch-pro-providers-dubai",
    title: "How to Switch PRO Providers Without Disrupting Operations",
    description: "Step-by-step guide to switching PRO providers seamlessly.",
    date: "2026-03-23",
    tags: ["PRO services"],
  },
  {
    slug: "nafis-incentives-explained",
    title: "Nafis Incentives Explained: How to Offset Emiratisation Costs",
    description:
      "How Nafis subsidies can offset the cost of hiring Emirati employees.",
    date: "2026-03-23",
    tags: ["Emiratisation", "Nafis"],
  },
  {
    slug: "free-zone-mainland-operating-permit-2026",
    title: "Free Zone Mainland Operating Permit: What You Need to Know in 2026",
    description:
      "Guide to the free zone mainland operating permit and its implications.",
    date: "2026-03-23",
    tags: ["free zone", "mainland"],
  },
  {
    slug: "dubai-corporate-tax-small-business-relief",
    title: "Dubai Corporate Tax: Small Business Relief Ending in 2026",
    description:
      "What the expiration of Small Business Relief means for Dubai companies.",
    date: "2026-03-23",
    tags: ["corporate tax"],
  },
  {
    slug: "mainland-vs-dmcc-company-formation",
    title: "Mainland vs DMCC: Which Is Right for Your Dubai Business?",
    description: "Comparison of mainland and DMCC company formation options.",
    date: "2026-03-23",
    tags: ["comparison", "company formation"],
  },
  {
    slug: "cheapest-business-setup-dubai-2026",
    title: "Cheapest Business Setup in Dubai 2026: Real Costs Revealed",
    description:
      "The most cost-effective ways to set up a business in Dubai in 2026.",
    date: "2026-03-23",
    tags: ["costs", "company formation"],
  },
  {
    slug: "ejari-registration-dubai-guide",
    title: "Ejari Registration in Dubai: Complete Guide",
    description:
      "Everything you need to know about Ejari registration in Dubai.",
    date: "2026-03-23",
    tags: ["Ejari", "compliance"],
  },
  {
    slug: "visa-cancellation-dubai-process",
    title: "Visa Cancellation in Dubai: Process, Costs & Requirements",
    description: "Complete guide to the visa cancellation process in Dubai.",
    date: "2026-03-23",
    tags: ["visa", "cancellation"],
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-24 md:py-28 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -bottom-20 end-1/3 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[80px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {locale === "ar" ? "المدونة" : "Blog"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {locale === "ar" ? "المدونة" : "Insights for Dubai Business Owners"}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-body">
            {locale === "ar"
              ? "مقالات ونصائح عملية حول إدارة الأعمال في دبي — من التأسيس إلى الامتثال."
              : "Practical articles and guides for running a business in Dubai — from formation to compliance."}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-mist bg-white hover:shadow-lg transition-all duration-200 overflow-hidden hover:border-sage-200"
              >
                <div className="h-48 relative overflow-hidden bg-fjord-50">
                  <img
                    src={`/images/blog/${post.slug}.svg`}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-fjord-50 text-fjord-600 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-lg font-semibold text-fjord-900 group-hover:text-sage-600 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate line-clamp-2 font-body leading-relaxed">
                    {post.description}
                  </p>
                  <p className="text-xs text-stone mt-4 font-body">
                    {post.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Blog", url: `${SITE_CONFIG.url}/${locale}/blog` },
        ]}
      />
    </>
  );
}

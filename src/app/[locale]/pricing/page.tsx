import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { PricingTable } from "@/components/sections/PricingTable";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { CTABanner } from "@/components/sections/CTABanner";
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
        ? "أسعار خدمات PRO دبي — أسعار شفافة"
        : "PRO Services Pricing Dubai — Transparent Rates",
    description:
      locale === "ar"
        ? "زيتب تنشر أسعار خدمات PRO الحقيقية. الاشتراكات المؤسسية تبدأ من 8,000 درهم/شهرياً. بدون رسوم مخفية."
        : "ZETUP PRO publishes real PRO services pricing. Corporate retainers from AED 8,000/month. No hidden fees. See our three service tiers.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/pricing`,
      languages: {
        en: `${SITE_CONFIG.url}/en/pricing`,
        ar: `${SITE_CONFIG.url}/ar/pricing`,
        "x-default": `${SITE_CONFIG.url}/en`,
      },
    },
  };
}

const pricingFAQs = [
  {
    question: "Why do you publish your prices when competitors don't?",
    answer:
      "Because we believe you should know what things cost before you commit. Hidden pricing is one of the biggest frustrations in this market.",
  },
  {
    question: "What happens if my company grows and I need more transactions?",
    answer:
      "We review usage quarterly. If you consistently exceed your tier, we recommend an upgrade and agree on new pricing before making changes.",
  },
  {
    question: "Are government fees included in the retainer?",
    answer:
      "No. Government fees are billed separately at cost with official receipts attached. Our retainer covers professional service fees only.",
  },
  {
    question: "Can I start with Essentials and upgrade later?",
    answer:
      "Absolutely. Many clients start with Essentials and upgrade to Professional once they hit 40–50 employees or face Emiratisation requirements.",
  },
  {
    question: "Is there a minimum contract term?",
    answer:
      "Our standard agreement is 12 months with a 30-day termination clause. We offer a first month at 50% rate as a trial.",
  },
];

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-40 end-0 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            Transparent Pricing
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Real Prices. Published. Before You Commit.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            Every competitor in the Dubai PRO services market hides their
            pricing behind a contact form. We do not. Below are our three
            corporate PRO service tiers with clear starting prices, explicit
            inclusions, and no surprise fees.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <PricingTable />
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-3">
            Add-On Services
          </h2>
          <p className="text-lg text-slate mb-10 font-body">
            Extend your retainer with specialist services as your needs grow.
          </p>
          <div className="overflow-x-auto rounded-xl border border-mist bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-mist bg-frost">
                  <th className="text-start py-4 px-6 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    Service
                  </th>
                  <th className="text-start py-4 px-6 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    Price Range
                  </th>
                  <th className="text-start py-4 px-6 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Emiratisation Programme
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    AED 3,000–8,000/month
                  </td>
                  <td className="py-4 px-6">
                    Full lifecycle: quota calc, Nafis, recruitment coordination
                  </td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Golden Visa Processing
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    AED 5,000–10,000/application
                  </td>
                  <td className="py-4 px-6">
                    End-to-end application for executives and investors
                  </td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Corporate Tax Filing
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    AED 2,000–5,000/quarter
                  </td>
                  <td className="py-4 px-6">
                    FTA liaison, EmaraTax submissions, audit coordination
                  </td>
                </tr>
                <tr className="hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Emergency/Expedite Processing
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    25–50% premium
                  </td>
                  <td className="py-4 px-6">
                    Rush processing for urgent situations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-sage-50 border border-sage-200 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-4">
              Our Pricing Philosophy
            </h2>
            <p className="text-lg text-slate leading-relaxed font-body">
              We separate our service fees from government fees on every
              invoice. Government fees are passed through at cost with receipts
              attached. This means you always know exactly what ZETUP PRO charges
              and exactly what the government charges — no blending, no markup
              on government fees.
            </p>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-3">
            How Government Fees Work
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            These are the standard government fees you can expect — separate
            from our retainer.
          </p>
          <div className="overflow-x-auto rounded-xl border border-mist bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-mist bg-frost">
                  <th className="text-start py-4 px-6 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    Fee Type
                  </th>
                  <th className="text-start py-4 px-6 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    Range (AED)
                  </th>
                  <th className="text-start py-4 px-6 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    Authority
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Employment visa
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    3,000–5,000
                  </td>
                  <td className="py-4 px-6">MOHRE / GDRFA</td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Trade license renewal
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    10,000–15,000+
                  </td>
                  <td className="py-4 px-6">DET</td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Emirates ID
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    370
                  </td>
                  <td className="py-4 px-6">ICP</td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Medical fitness test
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    300–500
                  </td>
                  <td className="py-4 px-6">DHA</td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Labour card
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    300
                  </td>
                  <td className="py-4 px-6">MOHRE</td>
                </tr>
                <tr className="hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-graphite">
                    Establishment card
                  </td>
                  <td className="py-4 px-6 font-semibold text-fjord-900">
                    2,000
                  </td>
                  <td className="py-4 px-6">MOHRE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone mt-4 italic">
            Government fees are indicative and subject to change. We provide
            exact fee breakdowns in every proposal.
          </p>
        </div>
      </section>

      <section className="bg-frost">
        <FAQSection items={pricingFAQs} />
      </section>

      <CTABanner
        title="Ready to See Your Personalized Quote?"
        description="Book a free PRO Health Check. We will review your current setup and provide an itemized quote within 48 hours."
        primaryCta={
          <Link
            href="/pro-health-check"
            className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            Book Free Health Check
          </Link>
        }
      />

      <FAQSchema items={pricingFAQs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Pricing", url: `${SITE_CONFIG.url}/${locale}/pricing` },
        ]}
      />
    </>
  );
}

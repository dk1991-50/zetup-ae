import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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
        : "ZETUP publishes real PRO services pricing. Corporate retainers from AED 8,000/month. No hidden fees. See our three service tiers.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/pricing`,
      languages: {
        en: `${SITE_CONFIG.url}/en/pricing`,
        ar: `${SITE_CONFIG.url}/ar/pricing`,
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
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fjord-900 mb-6">
            Real Prices. Published. Before You Commit.
          </h1>
          <p className="text-xl text-slate max-w-3xl mb-16">
            Every competitor in the Dubai PRO services market hides their
            pricing behind a contact form. We do not. Below are our three
            corporate PRO service tiers with clear starting prices, explicit
            inclusions, and no surprise fees.
          </p>

          <PricingTable />
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-fjord-900 mb-8">
            Add-On Services
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-mist">
                  <th className="text-start py-4 pe-6 font-display font-semibold text-fjord-900">
                    Service
                  </th>
                  <th className="text-start py-4 pe-6 font-display font-semibold text-fjord-900">
                    Price Range
                  </th>
                  <th className="text-start py-4 font-display font-semibold text-fjord-900">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-b border-mist">
                  <td className="py-4 pe-6 font-medium text-graphite">
                    Emiratisation Programme
                  </td>
                  <td className="py-4 pe-6">AED 3,000–8,000/month</td>
                  <td className="py-4">
                    Full lifecycle: quota calc, Nafis, recruitment coordination
                  </td>
                </tr>
                <tr className="border-b border-mist">
                  <td className="py-4 pe-6 font-medium text-graphite">
                    Golden Visa Processing
                  </td>
                  <td className="py-4 pe-6">AED 5,000–10,000/application</td>
                  <td className="py-4">
                    End-to-end application for executives and investors
                  </td>
                </tr>
                <tr className="border-b border-mist">
                  <td className="py-4 pe-6 font-medium text-graphite">
                    Corporate Tax Filing
                  </td>
                  <td className="py-4 pe-6">AED 2,000–5,000/quarter</td>
                  <td className="py-4">
                    FTA liaison, EmaraTax submissions, audit coordination
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pe-6 font-medium text-graphite">
                    Emergency/Expedite Processing
                  </td>
                  <td className="py-4 pe-6">25–50% premium</td>
                  <td className="py-4">
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
          <h2 className="font-display text-3xl font-semibold text-fjord-900 mb-6">
            Our Pricing Philosophy
          </h2>
          <div className="prose prose-lg text-slate max-w-none">
            <p>
              We separate our service fees from government fees on every
              invoice. Government fees are passed through at cost with receipts
              attached. This means you always know exactly what ZETUP charges
              and exactly what the government charges — no blending, no markup
              on government fees.
            </p>
          </div>

          <h2 className="font-display text-3xl font-semibold text-fjord-900 mt-16 mb-8">
            How Government Fees Work
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-mist">
                  <th className="text-start py-4 pe-6 font-display font-semibold text-fjord-900">
                    Fee Type
                  </th>
                  <th className="text-start py-4 pe-6 font-display font-semibold text-fjord-900">
                    Range (AED)
                  </th>
                  <th className="text-start py-4 font-display font-semibold text-fjord-900">
                    Authority
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-b border-mist">
                  <td className="py-3 pe-6">Employment visa</td>
                  <td className="py-3 pe-6">3,000–5,000</td>
                  <td className="py-3">MOHRE / GDRFA</td>
                </tr>
                <tr className="border-b border-mist">
                  <td className="py-3 pe-6">Trade license renewal</td>
                  <td className="py-3 pe-6">10,000–15,000+</td>
                  <td className="py-3">DET</td>
                </tr>
                <tr className="border-b border-mist">
                  <td className="py-3 pe-6">Emirates ID</td>
                  <td className="py-3 pe-6">370</td>
                  <td className="py-3">ICP</td>
                </tr>
                <tr className="border-b border-mist">
                  <td className="py-3 pe-6">Medical fitness test</td>
                  <td className="py-3 pe-6">300–500</td>
                  <td className="py-3">DHA</td>
                </tr>
                <tr className="border-b border-mist">
                  <td className="py-3 pe-6">Labour card</td>
                  <td className="py-3 pe-6">300</td>
                  <td className="py-3">MOHRE</td>
                </tr>
                <tr>
                  <td className="py-3 pe-6">Establishment card</td>
                  <td className="py-3 pe-6">2,000</td>
                  <td className="py-3">MOHRE</td>
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

      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-4xl mx-auto">
          <FAQSection items={pricingFAQs} />
        </div>
      </section>

      <CTABanner
        title="Ready to See Your Personalized Quote?"
        description="Book a free PRO Health Check. We will review your current setup and provide an itemized quote within 48 hours."
        primaryCta={
          <a
            href="/en/pro-health-check"
            className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
          >
            Book Free Health Check
          </a>
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

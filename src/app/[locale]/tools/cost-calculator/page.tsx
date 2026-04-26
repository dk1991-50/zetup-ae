import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { CostCalculator } from "@/components/sections/CostCalculator";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { WebApplicationSchema } from "@/components/seo/WebApplicationSchema";
import { SITE_CONFIG } from "@/lib/constants";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "حاسبة تكلفة خدمات PRO دبي 2026"
        : "PRO Services Cost Calculator Dubai 2026",
    description:
      locale === "ar"
        ? "احسب تكلفة خدمات PRO الشهرية والسنوية لشركتك في دبي. رسوم الخدمات والرسوم الحكومية مفصلة بشفافية كاملة."
        : "Calculate your monthly and annual PRO services cost in Dubai. Service fees and government fees broken down with full transparency. No hidden charges.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/tools/cost-calculator`,
      languages: {
        en: `${SITE_CONFIG.url}/en/tools/cost-calculator`,
        ar: `${SITE_CONFIG.url}/ar/tools/cost-calculator`,
        "x-default": `${SITE_CONFIG.url}/en/tools/cost-calculator`,
      },
    },
  };
}

const faqs = [
  {
    question: "How accurate is this cost calculator?",
    answer:
      "This calculator provides a realistic budget estimate based on ZETUP PRO's published pricing and standard government fees as of March 2026. Your actual quote will be confirmed in writing after a free PRO Health Check, where we review your specific situation.",
  },
  {
    question: "Are government fees included in ZETUP PRO's retainer?",
    answer:
      "No. Government fees are always separate from our service fees. We pass them through at cost with official receipts attached — we never mark up government fees. This calculator shows both separately so you can budget accurately.",
  },
  {
    question: "What happens if I exceed my monthly transaction limit?",
    answer:
      "Additional transactions beyond your plan allocation are charged at AED 350–500 per transaction. We always notify you before processing overages so there are no surprises.",
  },
  {
    question: "What happens when my company grows?",
    answer:
      "Your pricing adjusts based on your new employee count — the sliding scale means you move to the next band automatically. We review quarterly and always agree changes before they take effect. 30-day termination clause on all agreements.",
  },
  {
    question: "What is included in the monthly retainer?",
    answer:
      "The retainer covers visa processing (new, renewals, cancellations), trade license renewal, Emirates ID, labour cards, Amer & Tasheel services, a named account coordinator, and status reports. Higher tiers add Emiratisation tracking, document attestation, Ejari management, and faster response times.",
  },
];

export default async function CostCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-20 md:py-28 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute top-1/3 end-1/4 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-sage-500/20 border border-sage-500/30">
            <span className="text-xs font-bold text-sage-300 uppercase tracking-widest">
              {isAr ? "أداة مجانية" : "Free Tool"}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {isAr ? "حاسبة تكلفة خدمات PRO" : "PRO Services Cost Calculator"}
          </h1>
          <p className="mt-6 text-lg text-slate-300 font-body max-w-xl mx-auto">
            {isAr
              ? "أدخل بيانات شركتك واحصل على تقدير فوري — رسوم خدماتنا والرسوم الحكومية مفصلة بشفافية كاملة."
              : "Enter your company details and get an instant estimate — our service fees and government fees broken down with full transparency."}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <CostCalculator locale={locale} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-sage-50 border-y border-sage-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900 mb-4">
            {isAr ? "هل تريد عرض سعر دقيق؟" : "Want an Exact Quote?"}
          </h2>
          <p className="text-slate mb-8 font-body max-w-xl mx-auto">
            {isAr
              ? "احجز فحص PRO صحي مجاني مدته 30 دقيقة. سنراجع وضعك الحالي ونقدم لك عرض سعر مكتوب خلال 48 ساعة."
              : "Book a free 30-minute PRO Health Check. We'll review your current setup and deliver a written quote within 48 hours."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pro-health-check"
              className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
            >
              {isAr ? "احجز فحص صحي مجاني" : "Book Free Health Check"}
            </Link>
            <Link
              href="/tools/government-fees"
              className="inline-block px-8 py-4 bg-white text-fjord-900 font-semibold rounded-lg border border-mist hover:shadow-md transition-shadow"
            >
              {isAr ? "جدول الرسوم الحكومية" : "View Government Fees"}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <FAQSection items={faqs} />
        </div>
      </section>

      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: "Cost Calculator",
            url: `${SITE_CONFIG.url}/${locale}/tools/cost-calculator`,
          },
        ]}
      />
      <WebApplicationSchema
        name={
          locale === "ar"
            ? "حاسبة تكلفة خدمات PRO دبي"
            : "Dubai PRO Services Cost Calculator"
        }
        description={
          locale === "ar"
            ? "احسب تكلفتك الشهرية والسنوية لخدمات PRO في دبي بناءً على عدد الموظفين وحجم المعاملات. رسوم الخدمة والرسوم الحكومية مفصلة بشفافية كاملة."
            : "Calculate your monthly and annual Dubai PRO services cost based on employee count and transaction volume. Service fees and government fees broken down with full transparency."
        }
        slug="cost-calculator"
        url={`${SITE_CONFIG.url}/${locale}/tools/cost-calculator`}
        locale={locale}
      />
    </>
  );
}

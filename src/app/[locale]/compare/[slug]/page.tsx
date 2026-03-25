import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SITE_CONFIG } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Competitor data                                                    */
/* ------------------------------------------------------------------ */

interface ComparisonRow {
  category: string;
  zetup: string;
  competitor: string;
}

interface ComparisonData {
  name: string;
  slug: string;
  metaTitle: { en: string; ar: string };
  metaDescription: { en: string; ar: string };
  heroTitle: { en: string; ar: string };
  heroSubtitle: string;
  rows: ComparisonRow[];
  whySwitchHeading: { en: string; ar: string };
  whySwitchPoints: string[];
  faqs: { question: string; answer: string }[];
}

const COMPARISONS: Record<string, ComparisonData> = {
  "zetup-pro-vs-virtuzone": {
    name: "Virtuzone",
    slug: "zetup-pro-vs-virtuzone",
    metaTitle: {
      en: "ZETUP PRO vs Virtuzone: PRO Services Comparison Dubai [2026]",
      ar: "زيتب برو مقابل فيرتوزون: مقارنة خدمات PRO في دبي [2026]",
    },
    metaDescription: {
      en: "Compare ZETUP PRO and Virtuzone across pricing transparency, communication, Emiratisation support, and contract flexibility. See why mid-market companies in Dubai choose ZETUP PRO for ongoing PRO services.",
      ar: "قارن بين زيتب برو وفيرتوزون من حيث شفافية الأسعار والتواصل ودعم التوطين ومرونة العقود. اكتشف لماذا تختار الشركات المتوسطة في دبي زيتب برو لخدمات PRO المستمرة.",
    },
    heroTitle: {
      en: "ZETUP PRO vs Virtuzone",
      ar: "زيتب برو مقابل فيرتوزون",
    },
    heroSubtitle:
      "Virtuzone is one of the largest business setup providers in the UAE, primarily focused on free zone company formation. ZETUP PRO specialises in ongoing PRO services and government liaison for Dubai mainland companies.",
    rows: [
      {
        category: "Published Pricing",
        zetup: "All retainer tiers published on website (from AED 8,000/month)",
        competitor: "Pricing requires consultation; not publicly listed",
      },
      {
        category: "Transparency",
        zetup:
          "Government fees separated from service fees with official receipts",
        competitor:
          "Package pricing typically bundles setup and government fees together",
      },
      {
        category: "Contract Terms",
        zetup: "12-month agreement with 30-day termination clause",
        competitor:
          "Varies by service package; terms disclosed during consultation",
      },
      {
        category: "Communication",
        zetup: "Dedicated WhatsApp group with same-day response guarantee",
        competitor: "Standard email and phone support channels",
      },
      {
        category: "Emiratisation Support",
        zetup:
          "Full programme management included in Professional and Enterprise tiers",
        competitor: "Emiratisation services available as separate add-on",
      },
      {
        category: "Specialisation",
        zetup:
          "Dedicated to ongoing PRO services for mainland companies (25\u2013250 employees)",
        competitor:
          "Primary focus on free zone company formation and initial business setup",
      },
      {
        category: "Response Time",
        zetup:
          "Same business day (Essentials), 4-hour (Professional), 2-hour (Enterprise)",
        competitor: "Standard business hours response",
      },
    ],
    whySwitchHeading: {
      en: "Why Companies Switch to ZETUP PRO from Virtuzone",
      ar: "لماذا تنتقل الشركات إلى زيتب برو من فيرتوزون",
    },
    whySwitchPoints: [
      "Mainland companies often need a PRO partner focused exclusively on government liaison rather than company formation. ZETUP PRO handles Amer, Tasheel, MOHRE, DET, and immigration daily.",
      "Published, transparent pricing eliminates back-and-forth negotiations. You know exactly what you pay before you commit.",
      "Our 30-day termination clause means we earn your business every month through performance, not contractual lock-in.",
      "Dedicated WhatsApp communication with named account coordinators replaces generic support tickets.",
    ],
    faqs: [
      {
        question: "Is ZETUP PRO a direct competitor to Virtuzone?",
        answer:
          "Not exactly. Virtuzone primarily focuses on free zone company formation and initial business setup. ZETUP PRO specialises in ongoing PRO services and government liaison for established mainland companies. Many businesses use a setup provider to incorporate, then switch to ZETUP PRO for ongoing government services.",
      },
      {
        question:
          "Can I switch from Virtuzone to ZETUP PRO for my PRO services?",
        answer:
          "Yes. We manage the full handover process, including document transfer, active transaction continuity, and deadline auditing. Most transitions are completed within 7 business days with zero service disruption.",
      },
      {
        question: "Does ZETUP PRO handle free zone companies?",
        answer:
          "Our core focus is Dubai mainland LLC companies. For free zone entities, we can assist with specific government liaison tasks, but our retainer packages are designed for mainland operations.",
      },
      {
        question: "Why does ZETUP PRO publish pricing when Virtuzone does not?",
        answer:
          "We believe business owners should know what things cost before they commit. Our published retainer tiers (Essentials from AED 8,000/month, Professional from AED 14,000/month, Enterprise from AED 22,000/month) provide clarity that helps companies budget accurately.",
      },
    ],
  },

  "zetup-pro-vs-creative-zone": {
    name: "Creative Zone",
    slug: "zetup-pro-vs-creative-zone",
    metaTitle: {
      en: "ZETUP PRO vs Creative Zone: PRO Services Comparison Dubai [2026]",
      ar: "زيتب برو مقابل كرييتف زون: مقارنة خدمات PRO في دبي [2026]",
    },
    metaDescription: {
      en: "Compare ZETUP PRO and Creative Zone for PRO services in Dubai. See how published pricing, dedicated communication, and Emiratisation support differ between providers.",
      ar: "قارن بين زيتب برو وكرييتف زون لخدمات PRO في دبي. اكتشف الفرق في شفافية الأسعار والتواصل المخصص ودعم التوطين.",
    },
    heroTitle: {
      en: "ZETUP PRO vs Creative Zone",
      ar: "زيتب برو مقابل كرييتف زون",
    },
    heroSubtitle:
      "Creative Zone is an established business setup consultancy in the UAE, offering company formation across free zones and mainland. ZETUP PRO focuses on dedicated, ongoing PRO services for mid-market mainland companies.",
    rows: [
      {
        category: "Published Pricing",
        zetup: "All retainer tiers published on website (from AED 8,000/month)",
        competitor: "Pricing available upon request; packages vary by service",
      },
      {
        category: "Transparency",
        zetup:
          "Government fees separated from service fees with official receipts",
        competitor:
          "Packages may bundle government and service fees into a single quote",
      },
      {
        category: "Contract Terms",
        zetup: "12-month agreement with 30-day termination clause",
        competitor:
          "Contract terms vary; typically disclosed during sales process",
      },
      {
        category: "Communication",
        zetup: "Dedicated WhatsApp group with same-day response guarantee",
        competitor: "Account manager support via email and phone",
      },
      {
        category: "Emiratisation Support",
        zetup:
          "Full programme management included in Professional and Enterprise tiers",
        competitor: "Emiratisation advisory available as part of HR solutions",
      },
      {
        category: "Specialisation",
        zetup:
          "Dedicated to ongoing PRO services for mainland companies (25\u2013250 employees)",
        competitor:
          "Broad service range including company formation, accounting, and HR",
      },
      {
        category: "Response Time",
        zetup:
          "Same business day (Essentials), 4-hour (Professional), 2-hour (Enterprise)",
        competitor: "Standard business hours support",
      },
    ],
    whySwitchHeading: {
      en: "Why Companies Switch to ZETUP PRO from Creative Zone",
      ar: "لماذا تنتقل الشركات إلى زيتب برو من كرييتف زون",
    },
    whySwitchPoints: [
      "Companies that have been set up by Creative Zone often find they need a specialist PRO partner once their team grows beyond 25 employees. ZETUP PRO is purpose-built for this stage.",
      "Our transparent, published pricing means no surprises. Every invoice separates service fees from government fees with receipts attached.",
      "Dedicated WhatsApp groups with named coordinators replace generic support channels, giving you direct access to the person handling your transactions.",
      "Emiratisation programme management is built into our Professional and Enterprise tiers, not offered as a separate, add-on service.",
    ],
    faqs: [
      {
        question: "How does ZETUP PRO differ from Creative Zone?",
        answer:
          "Creative Zone offers a broad range of business setup services across free zones and mainland. ZETUP PRO is a specialist PRO services firm focused exclusively on ongoing government liaison for established mainland companies with 25 to 250 employees.",
      },
      {
        question: "Can ZETUP PRO take over PRO services from Creative Zone?",
        answer:
          "Yes. We handle the full transition including document transfer, active transaction handover, and compliance auditing. The process typically takes 7 business days with zero disruption to your operations.",
      },
      {
        question: "Does ZETUP PRO help with company formation?",
        answer:
          "Yes, we offer Dubai mainland LLC formation from AED 7,500. However, our core strength is in ongoing PRO services and government liaison after the company is established.",
      },
      {
        question: "What size companies does ZETUP PRO serve?",
        answer:
          "Our retainer packages are designed for companies with 25 to 250+ employees. Our Essentials tier (from AED 8,000/month) suits 25\u201340 employees, Professional (from AED 14,000/month) suits 40\u201380, and Enterprise (from AED 22,000/month) suits 80\u2013250+.",
      },
    ],
  },

  "zetup-pro-vs-shuraa": {
    name: "Shuraa",
    slug: "zetup-pro-vs-shuraa",
    metaTitle: {
      en: "ZETUP PRO vs Shuraa: PRO Services Comparison Dubai [2026]",
      ar: "زيتب برو مقابل شورى: مقارنة خدمات PRO في دبي [2026]",
    },
    metaDescription: {
      en: "Compare ZETUP PRO and Shuraa Management Consulting for PRO services in Dubai. Published pricing, Emiratisation support, and transparent government fee handling compared side by side.",
      ar: "قارن بين زيتب برو وشورى للاستشارات الإدارية لخدمات PRO في دبي. أسعار منشورة ودعم التوطين وشفافية الرسوم الحكومية جنبًا إلى جنب.",
    },
    heroTitle: {
      en: "ZETUP PRO vs Shuraa",
      ar: "زيتب برو مقابل شورى",
    },
    heroSubtitle:
      "Shuraa Management Consulting is a long-established business consultancy in Dubai offering company formation, PRO services, and advisory. ZETUP PRO is a specialist PRO services firm focused on transparent, ongoing government liaison for mainland companies.",
    rows: [
      {
        category: "Published Pricing",
        zetup: "All retainer tiers published on website (from AED 8,000/month)",
        competitor: "Pricing provided upon enquiry; not publicly listed",
      },
      {
        category: "Transparency",
        zetup:
          "Government fees separated from service fees with official receipts",
        competitor:
          "Fee structure discussed during consultation; bundled quotes common",
      },
      {
        category: "Contract Terms",
        zetup: "12-month agreement with 30-day termination clause",
        competitor: "Contract terms vary by engagement scope",
      },
      {
        category: "Communication",
        zetup: "Dedicated WhatsApp group with same-day response guarantee",
        competitor: "Traditional office-based communication and email",
      },
      {
        category: "Emiratisation Support",
        zetup:
          "Full programme management included in Professional and Enterprise tiers",
        competitor: "Advisory services available; scope varies by engagement",
      },
      {
        category: "Specialisation",
        zetup:
          "Dedicated to ongoing PRO services for mainland companies (25\u2013250 employees)",
        competitor:
          "Full-service consultancy covering formation, advisory, and PRO services",
      },
      {
        category: "Response Time",
        zetup:
          "Same business day (Essentials), 4-hour (Professional), 2-hour (Enterprise)",
        competitor: "Standard business hours availability",
      },
    ],
    whySwitchHeading: {
      en: "Why Companies Switch to ZETUP PRO from Shuraa",
      ar: "لماذا تنتقل الشركات إلى زيتب برو من شورى",
    },
    whySwitchPoints: [
      "Growing companies need a PRO partner that scales with them. ZETUP PRO offers three clear tiers designed for different team sizes, so you only pay for what you need.",
      "Published pricing on our website means you can compare costs before your first call. No sales meetings required to understand what things cost.",
      "Our WhatsApp-first communication model gives you direct, same-day access to your named account coordinator rather than going through a front desk.",
      "Full Emiratisation programme management, including Nafis registration and quota tracking, is included rather than billed as a separate advisory engagement.",
    ],
    faqs: [
      {
        question: "How does ZETUP PRO compare to Shuraa for PRO services?",
        answer:
          "Shuraa is a broad-spectrum business consultancy with decades of experience in the UAE. ZETUP PRO is a specialist PRO services firm focused on ongoing government liaison. If you need day-to-day PRO operations with published pricing and dedicated WhatsApp communication, ZETUP PRO is purpose-built for that.",
      },
      {
        question:
          "Is switching PRO providers from Shuraa to ZETUP PRO complicated?",
        answer:
          "No. We manage the entire handover process, including contacting your current provider, transferring documents, auditing all active transactions, and ensuring zero compliance gaps. Most transitions complete within 7 business days.",
      },
      {
        question: "Does ZETUP PRO offer business advisory like Shuraa?",
        answer:
          "Our focus is operational: visa processing, trade licence renewals, Emiratisation compliance, document clearing, and government liaison. We do not offer broad business advisory, but we excel at the government-facing operations that consume your admin team's time.",
      },
      {
        question: "What is the minimum commitment with ZETUP PRO?",
        answer:
          "Our standard agreement is 12 months with a 30-day termination clause. We also offer a first month at 50% rate as a trial, so you can experience our service quality before committing long-term.",
      },
    ],
  },

  "pro-services-pricing-comparison-dubai": {
    name: "Dubai PRO Services Market",
    slug: "pro-services-pricing-comparison-dubai",
    metaTitle: {
      en: "PRO Services Pricing Comparison Dubai [2026] \u2014 ZETUP PRO vs Market",
      ar: "مقارنة أسعار خدمات PRO في دبي [2026] \u2014 زيتب برو مقابل السوق",
    },
    metaDescription: {
      en: "Compare PRO services pricing across Dubai providers. See how ZETUP PRO's published retainer model (from AED 8,000/month) compares to typical market rates for visa processing, trade licence renewals, and Emiratisation.",
      ar: "قارن أسعار خدمات PRO عبر مزودي الخدمة في دبي. اكتشف كيف تقارن أسعار زيتب برو المنشورة (من 8,000 درهم/شهريًا) بأسعار السوق النموذجية لمعالجة التأشيرات وتجديد الرخص التجارية والتوطين.",
    },
    heroTitle: {
      en: "PRO Services Pricing Comparison Dubai 2026",
      ar: "مقارنة أسعار خدمات PRO في دبي 2026",
    },
    heroSubtitle:
      "Most PRO companies in Dubai hide their pricing behind contact forms. Here is a transparent look at how ZETUP PRO compares to typical market rates across key service areas.",
    rows: [
      {
        category: "Published Pricing",
        zetup:
          "All retainer tiers published on website (Essentials AED 8,000, Professional AED 14,000, Enterprise AED 22,000/month)",
        competitor:
          "Most providers require a consultation before disclosing any pricing",
      },
      {
        category: "Transparency",
        zetup:
          "Government fees separated from service fees on every invoice with receipts",
        competitor:
          "Industry standard is to bundle government and service fees into a single charge",
      },
      {
        category: "Contract Terms",
        zetup:
          "12-month agreement with 30-day termination clause and 50% trial month",
        competitor:
          "12-month lock-in contracts are standard; early termination penalties common",
      },
      {
        category: "Communication",
        zetup:
          "Dedicated WhatsApp group with guaranteed response times per tier",
        competitor:
          "Email-based support is standard; WhatsApp access varies by provider",
      },
      {
        category: "Emiratisation Support",
        zetup:
          "Full programme management included in Professional and Enterprise (Nafis, quota tracking, MoHRE reporting)",
        competitor:
          "Often billed separately at AED 3,000\u201310,000/month or not offered",
      },
      {
        category: "Specialisation",
        zetup:
          "Exclusively focused on ongoing PRO services for 25\u2013250 employee mainland companies",
        competitor:
          "Most providers are generalists combining formation, accounting, and PRO services",
      },
      {
        category: "Response Time",
        zetup:
          "Same business day (Essentials), 4-hour (Professional), 2-hour (Enterprise)",
        competitor:
          "Response time commitments are rarely published or guaranteed",
      },
    ],
    whySwitchHeading: {
      en: "Why Companies Choose ZETUP PRO Over Typical Market Providers",
      ar: "لماذا تختار الشركات زيتب برو على مزودي السوق التقليديين",
    },
    whySwitchPoints: [
      "Published pricing eliminates the guesswork. You can compare our rates against your current provider without a single sales meeting.",
      "Separated government fees mean you see exactly what ZETUP PRO charges versus what the government charges. No markups on government fees, ever.",
      "The 30-day termination clause is rare in this market. Most providers use 12-month lock-ins because they cannot retain clients on service quality alone.",
      "Guaranteed response times per tier give you a measurable SLA, not a vague promise of good service.",
    ],
    faqs: [
      {
        question: "Why do most Dubai PRO companies not publish their pricing?",
        answer:
          "Because unpublished pricing allows providers to quote differently based on perceived willingness to pay. ZETUP PRO publishes pricing because we believe transparency builds trust and helps companies budget accurately.",
      },
      {
        question: "How much do PRO services typically cost in Dubai?",
        answer:
          "For mid-market companies (25\u2013250 employees), monthly PRO retainers typically range from AED 5,000 to AED 30,000 depending on scope, employee count, and transaction volume. ZETUP PRO's published tiers start at AED 8,000/month for companies with 25\u201340 employees.",
      },
      {
        question: "What should I look for when comparing PRO providers?",
        answer:
          "Key factors: published pricing vs hidden pricing, how government fees are handled (separated vs bundled), contract flexibility (termination clauses), communication channels (WhatsApp vs email only), Emiratisation support, and guaranteed response times.",
      },
      {
        question:
          "Can ZETUP PRO handle the transition from my current provider?",
        answer:
          "Yes. We manage the full handover including document transfer, active transaction continuity, deadline auditing, and compliance verification. Start with a free PRO Health Check to assess your current setup in 30 minutes.",
      },
    ],
  },
};

const ALL_SLUGS = Object.keys(COMPARISONS);

/* ------------------------------------------------------------------ */
/*  generateStaticParams                                               */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return ALL_SLUGS.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "ar", slug },
  ]);
}

/* ------------------------------------------------------------------ */
/*  generateMetadata                                                   */
/* ------------------------------------------------------------------ */

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = COMPARISONS[slug];
  if (!data) return {};

  return {
    title: locale === "ar" ? data.metaTitle.ar : data.metaTitle.en,
    description:
      locale === "ar" ? data.metaDescription.ar : data.metaDescription.en,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/compare/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/compare/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/compare/${slug}`,
        "x-default": `${SITE_CONFIG.url}/en/compare/${slug}`,
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function ComparePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const data = COMPARISONS[slug];

  if (!data) notFound();

  const isMarketComparison = slug === "pro-services-pricing-comparison-dubai";
  const competitorLabel = isMarketComparison ? "Typical Market" : data.name;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-fjord-900">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -bottom-32 start-1/3 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {locale === "ar" ? "مقارنة الخدمات" : "Service Comparison"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {locale === "ar" ? data.heroTitle.ar : data.heroTitle.en}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10 font-body">
            {data.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pro-health-check"
              className="inline-flex items-center gap-2 px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
            >
              {locale === "ar"
                ? "احجز فحص PRO مجاني"
                : "Book a Free PRO Health Check"}
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors font-display"
            >
              {locale === "ar" ? "عرض الأسعار" : "View Pricing"}
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-4 text-center">
            {locale === "ar"
              ? "مقارنة جنبًا إلى جنب"
              : "Side-by-Side Comparison"}
          </h2>
          <p className="text-lg text-slate text-center max-w-2xl mx-auto mb-12 font-body">
            {isMarketComparison
              ? "How ZETUP PRO compares to typical PRO service providers in the Dubai market."
              : `How ZETUP PRO compares to ${data.name} across the factors that matter most to mid-market companies.`}
          </p>

          <div className="overflow-x-auto rounded-xl border border-mist bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-mist bg-frost">
                  <th className="text-start py-4 px-5 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    Category
                  </th>
                  <th className="text-start py-4 px-5 font-display font-semibold text-sage-700 text-sm uppercase tracking-wider">
                    ZETUP PRO
                  </th>
                  <th className="text-start py-4 px-5 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    {competitorLabel}
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate">
                {data.rows.map((row, i) => (
                  <tr
                    key={row.category}
                    className={`${i < data.rows.length - 1 ? "border-b border-mist" : ""} hover:bg-frost/50 transition-colors`}
                  >
                    <td className="py-4 px-5 font-medium text-graphite">
                      {row.category}
                    </td>
                    <td className="py-4 px-5 text-sage-700 font-semibold">
                      {row.zetup}
                    </td>
                    <td className="py-4 px-5 text-stone">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Companies Switch */}
      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-10">
            {locale === "ar"
              ? data.whySwitchHeading.ar
              : data.whySwitchHeading.en}
          </h2>
          <div className="space-y-6">
            {data.whySwitchPoints.map((point, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle
                  className="w-6 h-6 text-sage-500 mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-slate leading-relaxed font-body">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <FAQSection items={data.faqs} />
      </section>

      {/* CTA */}
      <CTABanner
        title={
          locale === "ar"
            ? "هل أنت مستعد لمقارنة خدماتك الحالية؟"
            : "Ready to Compare Your Current Setup?"
        }
        description={
          locale === "ar"
            ? "احجز فحص PRO مجاني خلال 30 دقيقة. ستعرف بالضبط أين تقف وما الذي سيتغير مع زيتب برو."
            : "Book a free PRO Health Check in 30 minutes. You will know exactly where you stand and what switching to ZETUP PRO would look like."
        }
        primaryCta={
          <Link
            href="/pro-health-check"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            {locale === "ar"
              ? "احجز فحص PRO مجاني"
              : "Book Your Free Health Check"}
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        }
        secondaryCta={
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors font-display"
          >
            {locale === "ar" ? "تواصل معنا" : "Contact Us"}
          </Link>
        }
      />

      {/* Structured Data */}
      <FAQSchema items={data.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: locale === "ar" ? data.heroTitle.ar : data.heroTitle.en,
            url: `${SITE_CONFIG.url}/${locale}/compare/${slug}`,
          },
        ]}
      />
    </>
  );
}

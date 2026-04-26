import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight, Scale } from "lucide-react";
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
        ? "قارن مزودي خدمات PRO في دبي — زيتب برو مقابل المنافسين"
        : "Compare Dubai PRO Service Providers — ZETUP PRO vs the Market",
    description:
      locale === "ar"
        ? "مقارنات تفصيلية بين زيتب برو ومزودي خدمات PRO الرئيسيين في دبي. شفافية الأسعار، التواصل، دعم التوطين، ومرونة العقود جنبًا إلى جنب."
        : "Side-by-side comparisons of ZETUP PRO against the major Dubai PRO service providers. Pricing transparency, communication, Emiratisation support, and contract flexibility — all the things that matter when you choose a partner.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/compare`,
      languages: {
        en: `${SITE_CONFIG.url}/en/compare`,
        ar: `${SITE_CONFIG.url}/ar/compare`,
        "x-default": `${SITE_CONFIG.url}/en/compare`,
      },
    },
  };
}

interface CompareEntry {
  slug: string;
  title: { en: string; ar: string };
  blurb: { en: string; ar: string };
  badge: { en: string; ar: string };
}

const COMPARES: CompareEntry[] = [
  {
    slug: "zetup-pro-vs-virtuzone",
    title: { en: "ZETUP PRO vs Virtuzone", ar: "زيتب برو مقابل فيرتوزون" },
    blurb: {
      en: "Virtuzone is one of the largest UAE business setup providers, primarily focused on free zone formation. ZETUP PRO is a specialist for ongoing PRO services on Dubai mainland.",
      ar: "فيرتوزون أحد أكبر مزودي تأسيس الأعمال في الإمارات، تركز أساسًا على المناطق الحرة. زيتب برو متخصصة في خدمات PRO المستمرة لشركات دبي البر الرئيسي.",
    },
    badge: { en: "Setup vs ongoing", ar: "تأسيس مقابل خدمات مستمرة" },
  },
  {
    slug: "zetup-pro-vs-creative-zone",
    title: { en: "ZETUP PRO vs Creative Zone", ar: "زيتب برو مقابل كرييتف زون" },
    blurb: {
      en: "Creative Zone offers broad business setup across free zones and mainland. ZETUP PRO is purpose-built for mid-market mainland companies (25–250 employees) with published pricing.",
      ar: "كرييتف زون تقدم تأسيس أعمال واسع عبر المناطق الحرة والبر الرئيسي. زيتب برو مصممة للشركات متوسطة الحجم في البر الرئيسي مع أسعار منشورة.",
    },
    badge: { en: "Broad vs specialist", ar: "خدمات شاملة مقابل متخصصة" },
  },
  {
    slug: "zetup-pro-vs-shuraa",
    title: { en: "ZETUP PRO vs Shuraa", ar: "زيتب برو مقابل شورى" },
    blurb: {
      en: "Shuraa is an established full-service consultancy. ZETUP PRO focuses exclusively on transparent, ongoing government liaison — no upselling, no advisory bundles.",
      ar: "شورى استشارات إدارية شاملة وراسخة. زيتب برو تركز حصرًا على التواصل الحكومي المستمر والشفاف — بدون رسوم استشارية إضافية.",
    },
    badge: { en: "Full-service vs focused", ar: "خدمات شاملة مقابل مركزة" },
  },
  {
    slug: "pro-services-pricing-comparison-dubai",
    title: {
      en: "PRO Services Pricing Comparison Dubai 2026",
      ar: "مقارنة أسعار خدمات PRO في دبي 2026",
    },
    blurb: {
      en: "Most PRO companies hide their pricing behind contact forms. Here is a transparent look at how ZETUP PRO's published rates (from AED 839/month) compare to typical market quotes.",
      ar: "معظم شركات PRO تخفي أسعارها خلف نماذج التواصل. هنا نظرة شفافة على كيفية مقارنة أسعار زيتب برو المنشورة (من 839 درهم/شهريًا) بأسعار السوق.",
    },
    badge: { en: "Market overview", ar: "نظرة عامة على السوق" },
  },
];

export default async function CompareIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-40 end-1/4 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {isAr ? "قارن" : "Compare"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr
              ? "كيف تقارن زيتب برو بمزودي خدمات PRO الآخرين في دبي"
              : "How ZETUP PRO Compares to Dubai's Other PRO Service Providers"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            {isAr
              ? "اختيار شريك PRO قرار مهم. هذه المقارنات تضع زيتب برو جنبًا إلى جنب مع المنافسين الرئيسيين في السوق — أسعار، تواصل، دعم التوطين، ومرونة العقود."
              : "Choosing a PRO partner is a high-stakes decision. These side-by-side comparisons stack ZETUP PRO against the market's biggest names on the dimensions that actually matter: pricing transparency, communication, Emiratisation support, and contract flexibility."}
          </p>
        </div>
      </section>

      {/* Comparison cards */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {COMPARES.map((entry) => (
              <Link
                key={entry.slug}
                href={`/compare/${entry.slug}`}
                className="group flex flex-col gap-4 p-8 rounded-2xl border border-mist bg-white shadow-md shadow-fjord-900/5 hover:border-sage-300 hover:shadow-2xl hover:shadow-sage-500/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-50 text-sage-600">
                    <Scale size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-sage-600 font-display">
                    {entry.badge[isAr ? "ar" : "en"]}
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-fjord-900 group-hover:text-sage-700 transition-colors">
                  {entry.title[isAr ? "ar" : "en"]}
                </h2>
                <p className="text-base leading-relaxed text-slate font-body">
                  {entry.blurb[isAr ? "ar" : "en"]}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sage-600 font-display">
                  {isAr ? "اقرأ المقارنة" : "Read the comparison"}
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost border-t border-mist">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-6">
            {isAr
              ? "لا تزال غير متأكد من المزود المناسب؟"
              : "Still not sure which provider is right for you?"}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "احجز فحص PRO مجاني لمدة 30 دقيقة. سنراجع إعدادك الحالي ونوضح بالضبط ما تدفعه مقابل ما تحصل عليه."
              : "Book a free 30-minute PRO Health Check. We'll review your current setup and show you exactly what you're paying for what you're getting."}
          </p>
          <Link
            href="/pro-health-check"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            {isAr
              ? "احجز فحص PRO مجاني"
              : "Book a Free PRO Health Check"}
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Compare", url: `${SITE_CONFIG.url}/${locale}/compare` },
        ]}
      />
      <ItemListSchema
        name={
          isAr
            ? "مقارنات زيتب برو مع منافسي السوق"
            : "ZETUP PRO Comparisons with Market Competitors"
        }
        description={
          isAr
            ? "مقارنات تفصيلية بين زيتب برو ومزودي خدمات PRO الرئيسيين في دبي."
            : "Side-by-side comparisons of ZETUP PRO against the major Dubai PRO service providers across pricing, communication, support, and flexibility."
        }
        items={COMPARES.map((entry) => ({
          name: entry.title[isAr ? "ar" : "en"],
          url: `${SITE_CONFIG.url}/${locale}/compare/${entry.slug}`,
          description: entry.blurb[isAr ? "ar" : "en"],
        }))}
      />
    </>
  );
}

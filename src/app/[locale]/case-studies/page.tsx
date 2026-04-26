import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight, Quote } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SITE_CONFIG } from "@/lib/constants";
import { CASE_STUDIES } from "@/lib/case-studies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "حالات عملاء زيتب برو — قصص نجاح حقيقية"
        : "ZETUP PRO Client Case Studies — Real Outcomes",
    description:
      locale === "ar"
        ? "حالات عملاء حقيقية تظهر كيف ساعدت زيتب برو الشركات في تبديل مزودي PRO بسلاسة، تحقيق امتثال التوطين، وخفض تكاليف PRO إلى النصف."
        : "Real client outcomes showing how ZETUP PRO helped Dubai companies switch PRO providers without disruption, achieve Emiratisation compliance, and cut PRO costs by 40% — all without sacrificing service quality.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/case-studies`,
      languages: {
        en: `${SITE_CONFIG.url}/en/case-studies`,
        ar: `${SITE_CONFIG.url}/ar/case-studies`,
        "x-default": `${SITE_CONFIG.url}/en/case-studies`,
      },
    },
  };
}

export default async function CaseStudiesHubPage({
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
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {isAr ? "قصص العملاء" : "Client outcomes"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr
              ? "نتائج حقيقية لشركات حقيقية"
              : "Real outcomes for real companies"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            {isAr
              ? "هذه الحالات مأخوذة من عملاء فعليين في زيتب برو. الأسماء محذوفة احترامًا للسرية حتى نحصل على إذن نشر مع الصور والشعارات. الأرقام والإطارات الزمنية حقيقية."
              : "These case studies come from actual ZETUP PRO clients. Names are redacted out of respect for confidentiality until we get permission to publish with photos and logos. The numbers and timelines are real."}
          </p>
        </div>
      </section>

      {/* Case-study cards */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block p-8 rounded-2xl border border-mist bg-white shadow-md shadow-fjord-900/5 hover:border-sage-300 hover:shadow-2xl hover:shadow-sage-500/15 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-sage-50 text-sage-700 text-xs font-semibold uppercase tracking-widest font-display">
                    {cs.industry[isAr ? "ar" : "en"]}
                  </span>
                  <span className="text-xs text-stone font-body">
                    {cs.companyDescriptor[isAr ? "ar" : "en"]}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900 group-hover:text-sage-700 transition-colors mb-4">
                  {cs.title[isAr ? "ar" : "en"]}
                </h2>
                <div className="flex gap-3 mb-5">
                  <Quote
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-sage-500 mt-0.5"
                  />
                  <p className="text-base leading-relaxed text-graphite italic font-body">
                    &ldquo;{cs.pullQuote[isAr ? "ar" : "en"]}&rdquo;
                  </p>
                </div>
                <p className="text-sm text-slate font-body line-clamp-2">
                  {cs.summary[isAr ? "ar" : "en"]}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sage-600 font-display">
                  {isAr ? "اقرأ الحالة الكاملة" : "Read the full case study"}
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
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-t border-mist">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-4">
            {isAr
              ? "هل وضعك يبدو مألوفًا؟"
              : "Recognise your situation?"}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "احجز فحص PRO صحي مجاني لمدة 30 دقيقة. سنحدد فجوات الامتثال الخاصة بك ونوضح بالضبط كيف يمكننا المساعدة."
              : "Book a free 30-minute PRO Health Check. We'll identify your specific compliance gaps and show you exactly how we'd help."}
          </p>
          <Link
            href="/pro-health-check"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            {isAr ? "احجز فحص PRO مجاني" : "Book a Free PRO Health Check"}
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: "Case Studies",
            url: `${SITE_CONFIG.url}/${locale}/case-studies`,
          },
        ]}
      />
      <ItemListSchema
        name={isAr ? "حالات عملاء زيتب برو" : "ZETUP PRO Client Case Studies"}
        description={
          isAr
            ? "حالات عملاء حقيقية لزيتب برو."
            : "Real client outcomes from ZETUP PRO engagements."
        }
        items={CASE_STUDIES.map((c) => ({
          name: c.title[isAr ? "ar" : "en"],
          url: `${SITE_CONFIG.url}/${locale}/case-studies/${c.slug}`,
          description: c.summary[isAr ? "ar" : "en"],
        }))}
      />
    </>
  );
}

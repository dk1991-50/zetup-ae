import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedPosts } from "@/components/sections/RelatedPosts";
import { SITE_CONFIG, COMPANY, SERVICES } from "@/lib/constants";
import { CASE_STUDIES, findCaseStudy } from "@/lib/case-studies";

const SERVICE_NAMES: Record<string, string> = {
  "pro-services": "PRO Services",
  "company-formation": "Company Formation",
  "visa-services": "Visa Processing",
  emiratisation: "Emiratisation",
  "trade-license-renewal": "Trade License Renewal",
  "corporate-tax": "Corporate Tax",
  "document-clearing": "Document Clearing",
  "golden-visa": "Golden Visa",
};

export function generateStaticParams() {
  return CASE_STUDIES.flatMap((c) =>
    ["en", "ar"].map((locale) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const cs = findCaseStudy(slug);
  if (!cs) {
    return {
      title:
        locale === "ar" ? "الحالة غير موجودة" : "Case Study Not Found",
    };
  }
  const isAr = locale === "ar";
  return {
    title: cs.title[isAr ? "ar" : "en"],
    description: cs.summary[isAr ? "ar" : "en"],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/case-studies/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/case-studies/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/case-studies/${slug}`,
        "x-default": `${SITE_CONFIG.url}/en/case-studies/${slug}`,
      },
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const cs = findCaseStudy(slug);
  if (!cs) notFound();
  const isAr = locale === "ar";

  // Article schema for the case study
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title[isAr ? "ar" : "en"],
    description: cs.summary[isAr ? "ar" : "en"],
    datePublished: cs.date,
    dateModified: cs.date,
    author: {
      "@type": "Organization",
      "@id": `${COMPANY.url}/#organization`,
      name: COMPANY.legalName,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${COMPANY.url}/#organization`,
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/${locale}/case-studies/${slug}`,
    },
    articleSection: cs.industry[isAr ? "ar" : "en"],
  };

  const services = SERVICES.filter((s) => cs.servicesUsed.includes(s.slug));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-20 md:py-24 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -bottom-20 end-1/4 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[80px]" />
        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 mb-6 text-sm text-sage-400 hover:text-sage-300 font-display"
          >
            <ArrowLeft size={16} strokeWidth={1.5} className="rtl:rotate-180" />
            {isAr ? "كل الحالات" : "All case studies"}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-sage-500/20 text-sage-300 text-xs font-semibold uppercase tracking-widest font-display">
              {cs.industry[isAr ? "ar" : "en"]}
            </span>
            <span className="text-xs text-slate-400 font-body">
              {cs.companyDescriptor[isAr ? "ar" : "en"]}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {cs.title[isAr ? "ar" : "en"]}
          </h1>
          <p className="text-lg text-slate-300 font-body">
            {cs.summary[isAr ? "ar" : "en"]}
          </p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-l-4 border-sage-500 bg-sage-50/40 p-6 sm:p-8">
            <Quote
              size={28}
              strokeWidth={1.5}
              className="text-sage-500 mb-3"
            />
            <p className="text-xl leading-relaxed text-fjord-900 font-display italic">
              &ldquo;{cs.pullQuote[isAr ? "ar" : "en"]}&rdquo;
            </p>
            <p className="mt-4 text-sm text-stone font-body">
              {isAr
                ? "— مدير عمليات (الاسم محجوز عند الطلب)"
                : "— Operations Director (name on file)"}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900 mb-6">
            {isAr ? "التحدي" : "The challenge"}
          </h2>
          <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-graphite font-body">
            {cs.challenge[isAr ? "ar" : "en"].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6 md:px-8 lg:px-12 bg-frost border-y border-mist">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900 mb-6">
            {isAr ? "الحل" : "What we did"}
          </h2>
          <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-p:text-graphite font-body">
            {cs.solution[isAr ? "ar" : "en"].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900 mb-8">
            {isAr ? "النتائج" : "Results"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {cs.results[isAr ? "ar" : "en"].map((r, i) => (
              <div
                key={i}
                className="rounded-xl border border-mist bg-white p-6"
              >
                <p className="font-display text-3xl font-bold text-sage-600 mb-1">
                  {r.value}
                </p>
                <p className="text-sm text-graphite font-body">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services used */}
      {services.length > 0 && (
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-y border-mist">
          <div className="max-w-3xl mx-auto">
            <RelatedPosts
              heading={
                isAr
                  ? "الخدمات المستخدمة في هذا التعاقد"
                  : "Services used in this engagement"
              }
              seeAllLabel={isAr ? "كل الخدمات" : "All services"}
              seeAllHref="/services"
              items={services.map((s) => ({
                href: `/services/${s.slug}`,
                title: SERVICE_NAMES[s.slug] ?? s.slug,
                description: s.description,
                badge: s.price,
              }))}
            />
          </div>
        </section>
      )}

      {/* Related case studies */}
      {(() => {
        const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 4);
        if (others.length === 0) return null;
        return (
          <section className="py-16 px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <RelatedPosts
                heading={
                  isAr
                    ? "دراسات حالة أخرى"
                    : "More client outcomes"
                }
                seeAllLabel={
                  isAr ? "كل دراسات الحالة" : "All case studies"
                }
                seeAllHref="/case-studies"
                items={others.map((c) => ({
                  href: `/case-studies/${c.slug}`,
                  title: c.title[isAr ? "ar" : "en"],
                  description: c.summary[isAr ? "ar" : "en"],
                  badge: c.industry[isAr ? "ar" : "en"],
                }))}
              />
            </div>
          </section>
        );
      })()}

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-t border-mist">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-4">
            {isAr ? "تريد نتائج مثل هذه؟" : "Want outcomes like these?"}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "كل عميل لدينا يبدأ بفحص PRO صحي مجاني لمدة 30 دقيقة. لا التزام، لا ترويج بيع — فقط مراجعة صادقة لإعدادك الحالي."
              : "Every client starts with a free 30-minute PRO Health Check. No commitment, no sales pitch — just an honest review of your current setup."}
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
          {
            name: cs.title[isAr ? "ar" : "en"],
            url: `${SITE_CONFIG.url}/${locale}/case-studies/${slug}`,
          },
        ]}
      />
      <JsonLd data={articleSchema} />
    </>
  );
}

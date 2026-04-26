import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { DefinedTermSchema } from "@/components/seo/DefinedTermSchema";
import { SITE_CONFIG } from "@/lib/constants";
import {
  GLOSSARY,
  GLOSSARY_CATEGORIES,
  findGlossaryEntry,
} from "@/lib/glossary";

export function generateStaticParams() {
  return GLOSSARY.flatMap((entry) =>
    ["en", "ar"].map((locale) => ({ locale, slug: entry.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = findGlossaryEntry(slug);
  if (!entry) {
    return {
      title:
        locale === "ar"
          ? "المصطلح غير موجود"
          : "Term Not Found",
    };
  }
  const isAr = locale === "ar";
  const term = entry.term[isAr ? "ar" : "en"];
  return {
    title: isAr
      ? `ما هو ${term}؟ تعريف ودليل عملي`
      : `What is ${term}? Definition + Practical Guide`,
    description: entry.shortDef[isAr ? "ar" : "en"],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/glossary/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/glossary/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/glossary/${slug}`,
        "x-default": `${SITE_CONFIG.url}/en/glossary/${slug}`,
      },
    },
  };
}

export default async function GlossaryEntryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const entry = findGlossaryEntry(slug);
  if (!entry) notFound();
  const isAr = locale === "ar";
  const term = entry.term[isAr ? "ar" : "en"];

  // Resolve related entries
  const relatedEntries =
    entry.related?.map(findGlossaryEntry).filter(Boolean) ?? [];

  return (
    <>
      {/* Hero / Term header */}
      <section className="relative overflow-hidden bg-fjord-900 py-20 md:py-24 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -bottom-20 end-1/4 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[80px]" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-2 mb-6 text-sm text-sage-400 hover:text-sage-300 font-display"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
              className="rtl:rotate-180"
            />
            {isAr ? "العودة إلى القاموس" : "Back to glossary"}
          </Link>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {GLOSSARY_CATEGORIES[entry.category][isAr ? "ar" : "en"]}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {term}
          </h1>
          {entry.alsoKnownAs && entry.alsoKnownAs.length > 0 && (
            <p className="text-sm text-slate-400 font-body italic">
              {isAr ? "يُعرف أيضًا بـ" : "Also known as"}:{" "}
              {entry.alsoKnownAs.join(", ")}
            </p>
          )}
        </div>
      </section>

      {/* Quick-answer box (for AEO) */}
      <section className="py-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-l-4 border-sage-500 bg-sage-50/40 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-700 mb-3 font-display">
              {isAr ? "الإجابة السريعة" : "Quick Answer"}
            </p>
            <p className="text-lg leading-relaxed text-fjord-900 font-body">
              {entry.shortDef[isAr ? "ar" : "en"]}
            </p>
          </div>
        </div>
      </section>

      {/* Long-form explanation */}
      <section className="pb-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto prose prose-lg text-slate max-w-none prose-p:leading-relaxed prose-p:text-graphite font-body">
          {entry.longDef[isAr ? "ar" : "en"].map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Related links */}
      {(relatedEntries.length > 0 ||
        entry.relatedService ||
        entry.relatedGuide) && (
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-y border-mist">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-fjord-900 mb-6">
              {isAr ? "اقرأ أيضًا" : "Related"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedEntries.map((rel) =>
                rel ? (
                  <Link
                    key={rel.slug}
                    href={`/glossary/${rel.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-mist bg-white p-4 transition-all hover:border-sage-300 hover:shadow-sm"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone font-display mb-1">
                        {isAr ? "مصطلح" : "Term"}
                      </p>
                      <p className="font-display font-semibold text-fjord-900 group-hover:text-sage-700">
                        {rel.term[isAr ? "ar" : "en"]}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 text-sage-500 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform"
                    />
                  </Link>
                ) : null,
              )}
              {entry.relatedService && (
                <Link
                  href={`/services/${entry.relatedService}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-mist bg-white p-4 transition-all hover:border-sage-300 hover:shadow-sm"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone font-display mb-1">
                      {isAr ? "خدمة" : "Service"}
                    </p>
                    <p className="font-display font-semibold text-fjord-900 group-hover:text-sage-700">
                      {isAr
                        ? "تعرف على خدمتنا ذات الصلة"
                        : "See our related service"}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-sage-500 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform"
                  />
                </Link>
              )}
              {entry.relatedGuide && (
                <Link
                  href={`/guides/${entry.relatedGuide}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-mist bg-white p-4 transition-all hover:border-sage-300 hover:shadow-sm"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone font-display mb-1">
                      {isAr ? "دليل" : "Guide"}
                    </p>
                    <p className="font-display font-semibold text-fjord-900 group-hover:text-sage-700">
                      {isAr
                        ? "اقرأ الدليل الشامل ذو الصلة"
                        : "Read the related deep-dive guide"}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-sage-500 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform"
                  />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-4">
            {isAr
              ? "هل تحتاج إلى مساعدة فعلية، وليس فقط تعريف؟"
              : "Need actual help, not just a definition?"}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "احجز فحص PRO مجاني لمدة 30 دقيقة وسنرشدك إلى الخطوات الفعلية لشركتك."
              : "Book a free 30-minute PRO Health Check and we'll walk you through what this actually means for your company."}
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
          { name: "Glossary", url: `${SITE_CONFIG.url}/${locale}/glossary` },
          {
            name: term,
            url: `${SITE_CONFIG.url}/${locale}/glossary/${slug}`,
          },
        ]}
      />
      <DefinedTermSchema
        name={term}
        description={entry.shortDef[isAr ? "ar" : "en"]}
        slug={slug}
        alternateName={entry.alsoKnownAs}
        locale={locale}
      />
    </>
  );
}

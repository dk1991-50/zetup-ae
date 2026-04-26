import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight, BookText } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { DefinedTermSetSchema } from "@/components/seo/DefinedTermSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SITE_CONFIG } from "@/lib/constants";
import {
  GLOSSARY,
  GLOSSARY_CATEGORIES,
  type GlossaryEntry,
} from "@/lib/glossary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "قاموس مصطلحات الأعمال في دبي — تسهيل، عامر، إيجاري والمزيد"
        : "Dubai Business Glossary — Tasheel, Amer, Ejari, MOHRE, GDRFA Explained",
    description:
      locale === "ar"
        ? "قاموس شامل لمصطلحات الأعمال والبيروقراطية الحكومية في دبي والإمارات. تعريفات واضحة لـ تسهيل، عامر، الهوية الإماراتية، إيجاري، التوطين، نافس، والمزيد."
        : "Comprehensive glossary of Dubai business setup and UAE bureaucracy terms. Clear, jargon-free definitions of Tasheel, Amer, MOHRE, GDRFA, Emirates ID, Ejari, Emiratisation, Nafis, EmaraTax, and more.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/glossary`,
      languages: {
        en: `${SITE_CONFIG.url}/en/glossary`,
        ar: `${SITE_CONFIG.url}/ar/glossary`,
        "x-default": `${SITE_CONFIG.url}/en/glossary`,
      },
    },
  };
}

const CATEGORY_ORDER: GlossaryEntry["category"][] = [
  "concept",
  "government-body",
  "service-center",
  "document",
  "visa",
  "fee",
];

export default async function GlossaryHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  // Group entries by category, sorted alphabetically inside each
  const grouped: Record<string, GlossaryEntry[]> = {};
  for (const entry of GLOSSARY) {
    if (!grouped[entry.category]) grouped[entry.category] = [];
    grouped[entry.category].push(entry);
  }
  for (const cat of Object.keys(grouped)) {
    grouped[cat].sort((a, b) =>
      a.term[isAr ? "ar" : "en"].localeCompare(b.term[isAr ? "ar" : "en"]),
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-40 start-1/4 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {isAr ? "القاموس" : "Glossary"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr
              ? "قاموس مصطلحات الأعمال في دبي والإمارات"
              : "Dubai & UAE Business Setup Glossary"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            {isAr
              ? "تعريفات واضحة وعملية لكل المصطلحات والاختصارات والجهات الحكومية التي ستصادفها أثناء تأسيس وتشغيل عملك في دبي. مكتوبة بلغة بشرية، وليست بلغة الموظفين."
              : `Clear, plain-language definitions of every term, acronym, and government body you'll encounter setting up or running a business in Dubai. Written for humans, not bureaucrats. ${GLOSSARY.length} terms and growing.`}
          </p>
        </div>
      </section>

      {/* Glossary list, grouped by category */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {CATEGORY_ORDER.map((cat) => {
            const items = grouped[cat];
            if (!items || items.length === 0) return null;
            return (
              <div key={cat} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <BookText className="h-5 w-5 text-sage-600" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900">
                    {GLOSSARY_CATEGORIES[cat][isAr ? "ar" : "en"]}
                  </h2>
                </div>
                <div className="grid gap-4">
                  {items.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/glossary/${entry.slug}`}
                      className="group flex items-start justify-between gap-6 rounded-xl border border-mist bg-white p-6 transition-all hover:border-sage-300 hover:shadow-md"
                    >
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-fjord-900 group-hover:text-sage-700 transition-colors mb-1">
                          {entry.term[isAr ? "ar" : "en"]}
                        </h3>
                        {entry.alsoKnownAs && entry.alsoKnownAs.length > 0 && (
                          <p className="text-xs text-stone font-body mb-2">
                            {isAr ? "يُعرف أيضًا بـ" : "Also known as"}:{" "}
                            <span className="italic">
                              {entry.alsoKnownAs.join(", ")}
                            </span>
                          </p>
                        )}
                        <p className="text-sm leading-relaxed text-slate font-body line-clamp-2">
                          {entry.shortDef[isAr ? "ar" : "en"]}
                        </p>
                      </div>
                      <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0 text-sage-500 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-t border-mist">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-4">
            {isAr
              ? "تحتاج إلى مساعدة في التعامل مع البيروقراطية في دبي؟"
              : "Need help navigating Dubai's bureaucracy?"}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "نحن نتعامل مع تسهيل وعامر والوزارات الأخرى يوميًا نيابة عن عملائنا. احجز فحص PRO صحي مجاني لمدة 30 دقيقة."
              : "We deal with Tasheel, Amer, MOHRE, GDRFA, DET, and the FTA every single day on behalf of our clients. Book a free 30-minute PRO Health Check."}
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
        ]}
      />
      <DefinedTermSetSchema
        termSlugs={GLOSSARY.map((e) => e.slug)}
        locale={locale}
      />
      <ItemListSchema
        name={
          isAr
            ? "قاموس مصطلحات الأعمال في دبي — زيتب برو"
            : "ZETUP PRO Dubai Business Glossary"
        }
        description={
          isAr
            ? "قاموس شامل لمصطلحات الأعمال والبيروقراطية الحكومية في دبي والإمارات."
            : "Comprehensive glossary of UAE business setup and government bureaucracy terms."
        }
        items={GLOSSARY.map((e) => ({
          name: e.term[isAr ? "ar" : "en"],
          url: `${SITE_CONFIG.url}/${locale}/glossary/${e.slug}`,
          description: e.shortDef[isAr ? "ar" : "en"],
        }))}
      />
    </>
  );
}

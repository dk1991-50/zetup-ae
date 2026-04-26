import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { SITE_CONFIG } from "@/lib/constants";
import {
  FAQS,
  FAQ_CATEGORIES,
  faqsByCategory,
  type FaqCategoryKey,
} from "@/lib/faq";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? `${FAQS.length} سؤالًا شائعًا حول تأسيس الأعمال في دبي`
        : `Dubai Business Setup FAQ — ${FAQS.length} questions answered`,
    description:
      locale === "ar"
        ? "إجابات شاملة لأشيع الأسئلة حول تأسيس الشركات في دبي، التأشيرات، الرخص التجارية، التوطين، الضرائب، والتعامل مع زيتب برو."
        : `Comprehensive answers to ${FAQS.length} of the most common questions about Dubai company setup, visas, trade licences, Emiratisation, UAE tax, and working with ZETUP PRO. Updated 2026.`,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/faq`,
      languages: {
        en: `${SITE_CONFIG.url}/en/faq`,
        ar: `${SITE_CONFIG.url}/ar/faq`,
        "x-default": `${SITE_CONFIG.url}/en/faq`,
      },
    },
  };
}

const CATEGORY_ORDER: FaqCategoryKey[] = [
  "setup",
  "visas",
  "licence",
  "emiratisation",
  "tax",
  "pricing",
];

export default async function FaqHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const allFaqsForSchema = FAQS.map((f) => ({
    question: f.q[isAr ? "ar" : "en"],
    answer: f.a[isAr ? "ar" : "en"],
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-40 start-1/4 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            FAQ
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr
              ? `${FAQS.length} سؤالًا حول الأعمال في دبي — مُجاب عنها`
              : `Dubai Business FAQ — ${FAQS.length} answers`}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            {isAr
              ? "كل ما يسأله المؤسسون حول تأسيس وتشغيل شركة في دبي البر الرئيسي. الإجابات مكتوبة من قبل ممارسي PRO، وليست من قبل مسوقين."
              : "Everything founders ask us about setting up and running a Dubai mainland company. Answers written by people who file the paperwork — not by marketers."}
          </p>

          {/* Category jump nav */}
          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORY_ORDER.map((cat) => (
              <a
                key={cat}
                href={`#${cat}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-sm font-medium text-white hover:bg-white/20 transition-colors font-display"
              >
                {FAQ_CATEGORIES[cat][isAr ? "ar" : "en"]}
                <span className="text-xs text-sage-300">
                  ({faqsByCategory(cat).length})
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {CATEGORY_ORDER.map((cat) => {
            const items = faqsByCategory(cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} id={cat} className="mb-16 last:mb-0 scroll-mt-24">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900 mb-6">
                  {FAQ_CATEGORIES[cat][isAr ? "ar" : "en"]}
                </h2>
                <Accordion>
                  {items.map((f, i) => (
                    <AccordionItem
                      key={i}
                      trigger={f.q[isAr ? "ar" : "en"]}
                      defaultOpen={false}
                    >
                      {f.a[isAr ? "ar" : "en"]}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-y border-mist">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-4">
            {isAr
              ? "سؤالك ليس هنا؟"
              : "Question not answered here?"}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "احجز فحص PRO صحي مجاني لمدة 30 دقيقة وسنجيب على أسئلتك المحددة عن إعدادك الفعلي."
              : "Book a free 30-minute PRO Health Check and we'll answer your specific questions about your actual setup — not generic ones."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/pro-health-check"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
            >
              {isAr ? "احجز فحص PRO مجاني" : "Book a Free PRO Health Check"}
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-mist bg-white text-fjord-900 font-semibold hover:border-sage-300 hover:text-sage-700 transition-colors font-display"
            >
              {isAr ? "تصفح القاموس" : "Browse the glossary"}
            </Link>
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "FAQ", url: `${SITE_CONFIG.url}/${locale}/faq` },
        ]}
      />
      <FAQSchema items={allFaqsForSchema} />
    </>
  );
}

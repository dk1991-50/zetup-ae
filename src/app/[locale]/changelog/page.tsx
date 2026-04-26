import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { CalendarDays, Sparkles } from "lucide-react";
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
        ? "سجل تحديثات الموقع — ما الجديد في زيتب برو"
        : "Site Changelog — What's New at ZETUP PRO",
    description:
      locale === "ar"
        ? "تحديثات منتظمة لموقعنا وموارده. نشارك ما نضيفه ومتى، حتى تعرف بالضبط ما هو محدث وقابل للاعتماد."
        : "Regular updates to our site and resources. We share what we add and when, so you know exactly what's current and reliable.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/changelog`,
      languages: {
        en: `${SITE_CONFIG.url}/en/changelog`,
        ar: `${SITE_CONFIG.url}/ar/changelog`,
        "x-default": `${SITE_CONFIG.url}/en/changelog`,
      },
    },
  };
}

interface ChangelogEntry {
  date: string; // ISO
  title: { en: string; ar: string };
  bullets: { en: string[]; ar: string[] };
}

// Most recent first.
const ENTRIES: ChangelogEntry[] = [
  {
    date: "2026-04-26",
    title: {
      en: "FAQ hub, case studies, locations expanded, author cards, internal linking",
      ar: "مركز الأسئلة، دراسات الحالة، توسيع المناطق، بطاقات الكاتب، الروابط الداخلية",
    },
    bullets: {
      en: [
        "New /faq hub with 25 questions across 6 categories (Setup, Visas, Trade Licence, Emiratisation, Tax, Pricing) and a single FAQPage schema covering everything.",
        "New /case-studies section with 3 anonymised client outcomes (construction switch, hospitality Emiratisation, consultancy cost-cut). Article schema, structured results, ready for real names when permission lands.",
        "Glossary expanded from 20 to 29 entries — added FTA, ICP, VAT, Corporate Tax, Investor Visa, Dependent Visa, TADBEER, Tawjeeh, goAML.",
        "Locations expanded from 4 to 7 Dubai areas — added Dubai Marina, JLT (DMCC free zone), Al Quoz (industrial backbone).",
        "Author bio cards on every blog and guide page with founder photo, role, bio, LinkedIn-ready slot, and reviewed/published date.",
        "Internal linking pushed across the site: Related blog posts on blog pages, Related guides on guide pages, Related glossary terms on service pages, Other Dubai areas on location pages.",
        "WebApplication schema on cost-calculator and emiratisation-calculator. Service Offer schema with structured pricing on 7 service pages.",
        "Sitemap now at 198 URL entries (was 108 before this sprint started).",
      ],
      ar: [
        "مركز /faq جديد بـ 25 سؤالًا عبر 6 فئات (التأسيس، التأشيرات، الرخصة التجارية، التوطين، الضرائب، الأسعار) مع مخطط FAQPage واحد يغطي كل شيء.",
        "قسم /case-studies جديد مع 3 نتائج عملاء مجهولة الهوية (تحول مزود البناء، التوطين في الضيافة، خفض تكلفة الاستشارات). مخطط المقال، نتائج منظمة، جاهز للأسماء الحقيقية عند الحصول على الإذن.",
        "تم توسيع القاموس من 20 إلى 29 مدخلًا — أضيفت الهيئة الاتحادية، هيئة الهوية، ضريبة القيمة المضافة، ضريبة الشركات، تأشيرة المستثمر، تأشيرة المعالين، تدبير، توجيه، goAML.",
        "تم توسيع المناطق من 4 إلى 7 مناطق دبي — أضيفت دبي مارينا، JLT (المنطقة الحرة DMCC)، القوز (العمود الفقري الصناعي).",
        "بطاقات سيرة الكاتب على كل صفحات المدونة والأدلة مع صورة المؤسس والدور والسيرة الذاتية وفتحة LinkedIn جاهزة وتاريخ المراجعة/النشر.",
        "الروابط الداخلية مدفوعة عبر الموقع: مقالات ذات صلة على المدونة، أدلة ذات صلة على الأدلة، مصطلحات قاموس ذات صلة على صفحات الخدمات، مناطق دبي أخرى على صفحات الموقع.",
        "مخطط WebApplication على حاسبة التكلفة وحاسبة التوطين. مخطط Service Offer مع تسعير منظم على 7 صفحات خدمة.",
        "خريطة الموقع الآن في 198 إدخال URL (كانت 108 قبل بدء هذا السباق).",
      ],
    },
  },
  {
    date: "2026-04-26",
    title: {
      en: "Glossary launched, Compare hub, Resources, hyperlocal pages, lead magnet",
      ar: "إطلاق القاموس، مركز المقارنة، الموارد، صفحات محلية، مغناطيس العملاء",
    },
    bullets: {
      en: [
        "New /glossary section with 20 UAE business-setup terms (Tasheel, Amer, MOHRE, GDRFA, Emirates ID, Ejari, WPS, Emiratisation, Nafis, and more) — DefinedTerm + DefinedTermSet schema.",
        "Hyperlocal landing pages for 4 Dubai areas: Business Bay, Downtown Dubai, Sheikh Zayed Road, Deira. Each with Service schema and areaServed geo coordinates.",
        "Free Resources hub with the 38-step Dubai Mainland Setup Checklist (printable + email-gated lead magnet).",
        "/compare hub page surfacing 4 battlecards (Virtuzone, Creative Zone, Shuraa, market pricing) — previously hidden behind dynamic routes only.",
        "Person schema for both founders on /about with stable @id, referenced from Article author and Organization founder.",
        "Footer reorganised: Resources, Compare, Glossary, Tools, Blog at the top of the column with Popular Guides below.",
      ],
      ar: [
        "قسم /glossary جديد مع 20 مصطلحًا تجاريًا إماراتيًا (تسهيل، عامر، الوزارة، الإدارة العامة للإقامة، الهوية الإماراتية، إيجاري، نظام الأجور، التوطين، نافس، والمزيد) — مخطط DefinedTerm + DefinedTermSet.",
        "صفحات هبوط محلية لـ 4 مناطق في دبي: الخليج التجاري، وسط المدينة، شارع الشيخ زايد، ديرة. كل صفحة مع مخطط الخدمة وإحداثيات الموقع.",
        "مركز موارد مجاني مع قائمة تحقق تأسيس البر الرئيسي (38 خطوة، قابل للطباعة + مغناطيس عملاء مع نموذج بريد إلكتروني).",
        "صفحة مركز /compare تكشف 4 بطاقات مقارنة (فيرتوزون، كرييتف زون، شورى، تسعير السوق) — كانت مخفية خلف المسارات الديناميكية فقط.",
        "مخطط شخص لكلا المؤسسين في /about مع معرف ثابت، مُشار إليه من مؤلف المقال ومؤسس المنظمة.",
        "إعادة تنظيم التذييل: الموارد، قارن، القاموس، الأدوات، المدونة في أعلى العمود مع الأدلة الشائعة أدناه.",
      ],
    },
  },
  {
    date: "2026-04-25",
    title: {
      en: "GSC verified, title fix, schema/llms reconciliation, www redirect",
      ar: "التحقق من GSC، إصلاح العناوين، توحيد المخططات، إعادة توجيه www",
    },
    bullets: {
      en: [
        "Google Search Console verified for the canonical zetup.ae Domain property.",
        "Killed duplicate brand suffix in titles (was: '… | ZETUP PRO | ZETUP PRO'). 13 titles fixed across 9 pages.",
        "Schema priceRange aligned to actual sliding scale (AED 839 – 22,000/month).",
        "llms.txt and llms-full.txt reconciled with schema (Mon–Fri hours, single phone number).",
        "301 redirect www → non-www to consolidate canonical signal.",
        "Sitemap dates made dynamic from MDX frontmatter (was: hardcoded).",
        "Added WebSite + SearchAction schema for Google sitelinks search box.",
        "Added ItemList schema on hub pages (services, guides, blog).",
      ],
      ar: [
        "تم التحقق من Google Search Console لخاصية النطاق zetup.ae القانونية.",
        "تم إزالة تكرار اسم العلامة التجارية في العناوين. 13 عنوانًا تم إصلاحه عبر 9 صفحات.",
        "تم توحيد priceRange المخطط مع السلم التدريجي الفعلي (839 – 22,000 درهم/شهريًا).",
        "تم توحيد llms.txt و llms-full.txt مع المخطط (الإثنين–الجمعة، رقم هاتف واحد).",
        "إعادة توجيه 301 من www إلى غير www لتوحيد الإشارة القانونية.",
        "تواريخ خريطة الموقع أصبحت ديناميكية من MDX.",
        "تمت إضافة مخطط WebSite + SearchAction لصندوق بحث الروابط الفرعية في Google.",
        "تمت إضافة مخطط ItemList على صفحات المركز (الخدمات، الأدلة، المدونة).",
      ],
    },
  },
];

export default async function ChangelogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-20 md:py-24 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-40 end-1/4 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            <Sparkles size={14} strokeWidth={1.5} />
            {isAr ? "ما الجديد" : "What's new"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr ? "سجل تحديثات الموقع" : "Site Changelog"}
          </h1>
          <p className="text-xl text-slate-300 font-body">
            {isAr
              ? "نحدّث هذا الموقع باستمرار. هذه قائمة بكل تغيير ملموس قمنا به مؤخرًا — لتعرف ما هو حديث وما هو موثوق."
              : "We update this site continuously. Here's a running log of every meaningful change we've made — so you know what's current and trustworthy."}
          </p>
        </div>
      </section>

      {/* Entries */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-s-2 border-mist ps-8 space-y-12">
            {ENTRIES.map((entry, i) => (
              <li key={i} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -start-[9px] top-2 h-4 w-4 rounded-full bg-sage-500 ring-4 ring-snow"
                />
                <p className="flex items-center gap-2 text-sm text-stone font-body mb-2">
                  <CalendarDays
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 text-sage-500"
                  />
                  <time dateTime={entry.date}>
                    {new Date(entry.date).toLocaleDateString(
                      isAr ? "ar-AE" : "en-GB",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </time>
                </p>
                <h2 className="font-display text-xl md:text-2xl font-bold text-fjord-900 mb-4">
                  {entry.title[isAr ? "ar" : "en"]}
                </h2>
                <ul className="space-y-2.5">
                  {entry.bullets[isAr ? "ar" : "en"].map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-base leading-relaxed text-graphite font-body"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-t border-mist">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate font-body mb-6">
            {isAr
              ? "نحب الشفافية في كل شيء — بما في ذلك في كيفية تطورنا. هل لديك اقتراح؟ راسلنا."
              : "We believe in transparency in everything — including how we evolve. Got a suggestion? Email us."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            {isAr ? "تواصل معنا" : "Contact us"}
          </Link>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: "Changelog",
            url: `${SITE_CONFIG.url}/${locale}/changelog`,
          },
        ]}
      />
    </>
  );
}

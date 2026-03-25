import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { EmiratisationCalculator } from "@/components/sections/EmiratisationCalculator";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SITE_CONFIG } from "@/lib/constants";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Static params                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Metadata                                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "حاسبة التوطين 2026 | تحقق من الامتثال والغرامات | زيتب برو"
        : "Emiratisation Calculator 2026 | Check Compliance & Fines | ZETUP PRO",
    description:
      locale === "ar"
        ? "احسب متطلبات التوطين لشركتك في دبي. تعرف على عدد الموظفين الإماراتيين المطلوبين والغرامات المحتملة قبل الموعد النهائي ديسمبر 2026."
        : "Calculate your company's Emiratisation requirements in Dubai. Find out how many Emirati employees you need and your potential fines before the December 2026 deadline.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/tools/emiratisation-calculator`,
      languages: {
        en: `${SITE_CONFIG.url}/en/tools/emiratisation-calculator`,
        ar: `${SITE_CONFIG.url}/ar/tools/emiratisation-calculator`,
        "x-default": `${SITE_CONFIG.url}/en/tools/emiratisation-calculator`,
      },
    },
  };
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  FAQ data                                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

const emiratisationFAQs = [
  {
    question:
      "Which companies are subject to Emiratisation requirements in 2026?",
    answer:
      "All private sector companies registered on the Dubai mainland with 50 or more employees must meet the 10% Emiratisation quota by December 31, 2026. Free zone companies are currently exempt, though this may change in future regulations.",
  },
  {
    question: "How is the 10% Emiratisation quota calculated?",
    answer:
      "The quota is calculated as 10% of your total registered workforce, rounded up to the nearest whole number. For example, a company with 75 employees must employ at least 8 UAE nationals (75 x 10% = 7.5, rounded up to 8).",
  },
  {
    question: "What are the fines for non-compliance with Emiratisation?",
    answer:
      "Companies that fail to meet the Emiratisation quota face a monthly fine of AED 9,000 per missing Emirati employee. For a company short by 5 employees, that is AED 45,000 per month or AED 540,000 per year.",
  },
  {
    question: "Can I hire part-time Emirati employees to meet the quota?",
    answer:
      "The MoHRE has specific requirements for counting Emirati employees toward your quota. Part-time arrangements may count under certain conditions, but they must be registered through the Nafis platform and meet minimum salary and working hour thresholds. We recommend consulting a PRO services provider for guidance on your specific situation.",
  },
  {
    question:
      "What is the Nafis programme and how does it relate to Emiratisation?",
    answer:
      "Nafis is the UAE federal programme that supports Emiratisation in the private sector. It provides salary top-ups, pension contributions, and training subsidies for UAE nationals employed in the private sector. Employers must register their Emirati hires through the Nafis platform to receive these benefits and ensure compliance.",
  },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

export default async function EmiratisationCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-fjord-900 py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-40 end-0 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {locale === "ar" ? "أداة مجانية" : "Free Tool"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {locale === "ar"
              ? "حاسبة التوطين 2026 — تحقق من امتثالك"
              : "Emiratisation Calculator 2026 — Check Your Compliance"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            {locale === "ar"
              ? "الموعد النهائي لتحقيق نسبة 10% من التوطين هو 31 ديسمبر 2026. استخدم هذه الحاسبة لمعرفة وضع شركتك والغرامات المحتملة."
              : "The deadline to achieve 10% Emiratisation is December 31, 2026. Use this calculator to check your company's status and potential fines."}
          </p>
        </div>
      </section>

      {/* ── Calculator ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-10">
            {locale === "ar"
              ? "احسب متطلبات التوطين"
              : "Calculate Your Requirements"}
          </h2>
          <EmiratisationCalculator locale={locale} />
        </div>
      </section>

      {/* ── Info Section ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-8">
            {locale === "ar"
              ? "فهم متطلبات التوطين 2026"
              : "Understanding the 2026 Emiratisation Requirements"}
          </h2>
          <div className="space-y-8">
            <div className="p-5 sm:p-8 rounded-2xl border border-mist bg-white">
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-3">
                {locale === "ar" ? "من يجب أن يمتثل؟" : "Who Must Comply?"}
              </h3>
              <p className="text-slate leading-relaxed font-body">
                {locale === "ar"
                  ? "جميع شركات القطاع الخاص المسجلة في بر دبي الرئيسي ولديها 50 موظفًا أو أكثر ملزمة بتحقيق نسبة 10% من التوطين. هذا يعني أن كل شركة لديها 50 موظفًا يجب أن توظف 5 مواطنين إماراتيين على الأقل."
                  : "All private sector companies registered on the Dubai mainland with 50 or more employees must achieve the 10% Emiratisation quota. This means a company with 50 employees must employ at least 5 UAE nationals."}
              </p>
            </div>
            <div className="p-5 sm:p-8 rounded-2xl border border-mist bg-white">
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-3">
                {locale === "ar"
                  ? "عواقب عدم الامتثال"
                  : "Consequences of Non-Compliance"}
              </h3>
              <p className="text-slate leading-relaxed font-body">
                {locale === "ar"
                  ? "الشركات غير الملتزمة تواجه غرامة قدرها 9,000 درهم شهريًا عن كل موظف إماراتي ناقص. بالإضافة إلى ذلك، قد تُحرم من خدمات وزارة الموارد البشرية والتوطين، بما في ذلك تصاريح العمل الجديدة."
                  : "Non-compliant companies face a fine of AED 9,000 per month for each missing Emirati employee. Additionally, companies may be blocked from MoHRE services, including new work permit applications."}
              </p>
            </div>
            <div className="p-5 sm:p-8 rounded-2xl border border-mist bg-white">
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-3">
                {locale === "ar" ? "كيف تستعد الآن" : "How to Prepare Now"}
              </h3>
              <p className="text-slate leading-relaxed font-body">
                {locale === "ar"
                  ? "ابدأ بحساب فجوة التوطين الخاصة بك باستخدام الحاسبة أعلاه. ثم سجل في منصة نافس، وابدأ عملية التوظيف، واعمل مع مزود خدمات PRO موثوق لضمان الامتثال الكامل قبل الموعد النهائي."
                  : "Start by calculating your gap using the calculator above. Then register on the Nafis platform, begin the recruitment process, and work with a trusted PRO services provider to ensure full compliance before the deadline."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How ZETUP PRO Helps ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-sage-50 border border-sage-200">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-4">
              {locale === "ar"
                ? "كيف تساعدك زيتب برو في التوطين"
                : "How ZETUP PRO Helps with Emiratisation"}
            </h2>
            <p className="text-lg text-slate leading-relaxed font-body mb-6">
              {locale === "ar"
                ? "نحن ندير برنامج التوطين بالكامل — من حساب الحصص وتسجيل نافس إلى تنسيق التوظيف وتقارير وزارة الموارد البشرية. دعنا نتولى التعقيدات حتى تتمكن من التركيز على عملك."
                : "We manage the full Emiratisation lifecycle — from quota calculation and Nafis registration to recruitment coordination and MoHRE reporting. Let us handle the complexity so you can focus on your business."}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                locale === "ar"
                  ? "حساب وتتبع الحصص"
                  : "Quota calculation and tracking",
                locale === "ar"
                  ? "تسجيل وإدارة نافس"
                  : "Nafis registration and management",
                locale === "ar" ? "تنسيق التوظيف" : "Recruitment coordination",
                locale === "ar"
                  ? "تقارير الامتثال الشهرية"
                  : "Monthly compliance reporting",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 h-5 w-5 rounded-full bg-sage-500 flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-slate font-body">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/services/emiratisation"
              className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
            >
              {locale === "ar"
                ? "اعرف المزيد عن خدمات التوطين"
                : "Learn More About Our Emiratisation Services"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-frost">
        <FAQSection items={emiratisationFAQs} />
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <CTABanner
        title={
          locale === "ar"
            ? "احجز استشارة توطين مجانية"
            : "Book a Free Emiratisation Consultation"
        }
        description={
          locale === "ar"
            ? "دعنا نراجع وضع التوطين الخاص بك ونضع خطة امتثال مخصصة قبل الموعد النهائي."
            : "Let us review your Emiratisation status and build a custom compliance plan before the deadline."
        }
        primaryCta={
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
          </Link>
        }
      />

      {/* ── Structured Data ─────────────────────────────────────────────── */}
      <FAQSchema items={emiratisationFAQs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: "Tools",
            url: `${SITE_CONFIG.url}/${locale}/tools`,
          },
          {
            name: "Emiratisation Calculator",
            url: `${SITE_CONFIG.url}/${locale}/tools/emiratisation-calculator`,
          },
        ]}
      />
    </>
  );
}

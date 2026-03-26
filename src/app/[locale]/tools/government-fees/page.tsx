import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SpeakableSchema } from "@/components/seo/SpeakableSchema";
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
        ? "جدول الرسوم الحكومية دبي 2026 | كل المعاملات والتكاليف | زيتب برو"
        : "Dubai Government Fees 2026 | Complete Transaction Cost Table | ZETUP PRO",
    description:
      locale === "ar"
        ? "جدول شامل لجميع الرسوم الحكومية في دبي: تأشيرات، هوية إماراتية، رخص تجارية، توثيق مستندات، وتوطين. محدث مارس 2026."
        : "Complete Dubai government fee table: visas, Emirates ID, trade licenses, document attestation, Emiratisation fines. Updated March 2026. No hidden fees.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/tools/government-fees`,
      languages: {
        en: `${SITE_CONFIG.url}/en/tools/government-fees`,
        ar: `${SITE_CONFIG.url}/ar/tools/government-fees`,
        "x-default": `${SITE_CONFIG.url}/en/tools/government-fees`,
      },
    },
  };
}

type FeeRow = {
  transaction: string;
  low: number | string;
  high: number | string;
  authority: string;
  notes: string;
};

const visaFees: FeeRow[] = [
  {
    transaction: "Employment visa — new issue",
    low: 3500,
    high: 7500,
    authority: "MOHRE / GDRFA",
    notes:
      "Entry permit + status change + stamping. Cat 1/2: ~5K–7K, Cat 3: up to 12K",
  },
  {
    transaction: "Employment visa — renewal",
    low: 2500,
    high: 3500,
    authority: "MOHRE / GDRFA",
    notes: "Every 2–3 years",
  },
  {
    transaction: "Employment visa — cancellation",
    low: 500,
    high: 1000,
    authority: "MOHRE / GDRFA",
    notes: "Required when employee departs",
  },
  {
    transaction: "Investor / Partner visa",
    low: 3500,
    high: 7000,
    authority: "GDRFA",
    notes: "For company shareholders",
  },
  {
    transaction: "Dependent visa (spouse/child)",
    low: 3000,
    high: 5000,
    authority: "GDRFA",
    notes: "Per dependent",
  },
  {
    transaction: "Golden Visa (10-year)",
    low: 6500,
    high: 9500,
    authority: "ICP / GDRFA",
    notes: "Total gov fees incl. visa issuance, 10-yr Emirates ID, medical",
  },
  {
    transaction: "Green Visa (5-year)",
    low: 2500,
    high: 3500,
    authority: "ICP / GDRFA",
    notes: "Self-sponsored residency",
  },
  {
    transaction: "Entry permit",
    low: 1100,
    high: 1500,
    authority: "GDRFA",
    notes: "Initial entry to UAE",
  },
  {
    transaction: "Status change (visit → residence)",
    low: 520,
    high: 575,
    authority: "GDRFA",
    notes: "Inside-country conversion without exit",
  },
  {
    transaction: "Visa stamping",
    low: 500,
    high: 700,
    authority: "GDRFA",
    notes: "Passport stamping fee",
  },
];

const idFees: FeeRow[] = [
  {
    transaction: "Emirates ID — new",
    low: 370,
    high: 370,
    authority: "ICP",
    notes: "Federal identity card",
  },
  {
    transaction: "Emirates ID — renewal",
    low: 370,
    high: 370,
    authority: "ICP",
    notes: "Renewed with visa",
  },
  {
    transaction: "Medical fitness test",
    low: 260,
    high: 500,
    authority: "DHA",
    notes: "HIV test + chest X-ray. Varies by emirate and centre",
  },
  {
    transaction: "Health insurance (annual)",
    low: 700,
    high: 3000,
    authority: "DHA",
    notes: "Mandatory — varies by plan",
  },
  {
    transaction: "Labour card — new",
    low: 300,
    high: 300,
    authority: "MOHRE",
    notes: "Work permit card",
  },
  {
    transaction: "Labour card — renewal",
    low: 300,
    high: 300,
    authority: "MOHRE",
    notes: "Renewed with visa",
  },
  {
    transaction: "Labour contract registration",
    low: 200,
    high: 300,
    authority: "MOHRE / Tasheel",
    notes: "Employment contract filing",
  },
  {
    transaction: "Establishment card",
    low: 2000,
    high: 2000,
    authority: "MOHRE",
    notes: "Annual company registration",
  },
];

const licenseFees: FeeRow[] = [
  {
    transaction: "Trade license — new (mainland)",
    low: 12000,
    high: 25000,
    authority: "DET",
    notes: "Varies by activity type",
  },
  {
    transaction: "Trade license — annual renewal",
    low: 10000,
    high: 15000,
    authority: "DET",
    notes: "Mandatory annual renewal",
  },
  {
    transaction: "Initial approval",
    low: 1000,
    high: 2000,
    authority: "DET",
    notes: "First step in company formation",
  },
  {
    transaction: "MOA notarisation",
    low: 2000,
    high: 4000,
    authority: "Dubai Courts",
    notes: "Memorandum of Association",
  },
  {
    transaction: "Activity amendment",
    low: 1000,
    high: 3000,
    authority: "DET",
    notes: "Adding / removing activities",
  },
  {
    transaction: "Partner / shareholder change",
    low: 2000,
    high: 5000,
    authority: "DET / Courts",
    notes: "Share transfer",
  },
  {
    transaction: "Company name reservation",
    low: 620,
    high: 620,
    authority: "DET",
    notes: "Valid for limited period",
  },
  {
    transaction: "Ejari (lease registration)",
    low: 220,
    high: 220,
    authority: "RERA",
    notes: "Required for trade license",
  },
  {
    transaction: "Chamber of Commerce",
    low: 1200,
    high: 3000,
    authority: "Dubai Chamber",
    notes: "Annual membership",
  },
];

const docFees: FeeRow[] = [
  {
    transaction: "MOFA attestation",
    low: 150,
    high: 300,
    authority: "MOFA",
    notes: "Ministry of Foreign Affairs",
  },
  {
    transaction: "Embassy legalisation",
    low: 200,
    high: 1000,
    authority: "Embassy",
    notes: "Varies by country",
  },
  {
    transaction: "Legal translation (per page)",
    low: 50,
    high: 150,
    authority: "MOJ-approved",
    notes: "Arabic ↔ English",
  },
  {
    transaction: "Notarisation",
    low: 200,
    high: 500,
    authority: "Notary Public",
    notes: "Per document",
  },
  {
    transaction: "Power of Attorney",
    low: 500,
    high: 1500,
    authority: "Courts / Notary",
    notes: "Company representation",
  },
  {
    transaction: "Certificate of Incorporation copy",
    low: 100,
    high: 200,
    authority: "DET",
    notes: "Certified copy",
  },
  {
    transaction: "Good Standing Certificate",
    low: 500,
    high: 700,
    authority: "DET",
    notes: "For bank / compliance",
  },
];

const complianceFees: FeeRow[] = [
  {
    transaction: "Nafis registration",
    low: 0,
    high: 0,
    authority: "Nafis",
    notes: "Free government platform",
  },
  {
    transaction: "Emiratisation non-compliance fine",
    low: 9000,
    high: 9000,
    authority: "MOHRE",
    notes: "Per missing position per MONTH",
  },
  {
    transaction: "WPS registration",
    low: 0,
    high: 0,
    authority: "MOHRE",
    notes: "Wages Protection System — free",
  },
  {
    transaction: "Corporate tax registration",
    low: 0,
    high: 0,
    authority: "FTA",
    notes: "EmaraTax — free",
  },
  {
    transaction: "Corporate tax late filing penalty",
    low: 1000,
    high: 10000,
    authority: "FTA",
    notes: "Penalties for missed deadlines",
  },
];

const faqs = [
  {
    question: "Does ZETUP PRO mark up government fees?",
    answer:
      "Never. Government fees are passed through at cost with official receipts attached to every invoice. Our service fees are always shown separately so you know exactly what you're paying for.",
  },
  {
    question: "How often do government fees change?",
    answer:
      "Government fees can change at any time by the issuing authority. We update this table regularly and always confirm exact fees before processing any transaction.",
  },
  {
    question: "Why do visa fees have a range?",
    answer:
      "Visa costs vary based on the employee's nationality, job category, company size, and whether the application is standard or urgent. The range shown covers the most common scenarios.",
  },
  {
    question: "What is the Emiratisation non-compliance fine?",
    answer:
      "Companies with 50+ employees must reach 10% Emirati skilled workforce by December 2026. Non-compliance results in a fine of AED 9,000 per month per missing position — that's AED 108,000 per year per position.",
  },
];

function FeeTable({ rows, locale }: { rows: FeeRow[]; locale: string }) {
  const isAr = locale === "ar";
  return (
    <div className="overflow-x-auto rounded-xl border border-mist bg-white">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-mist bg-frost">
            <th className="text-start py-3 px-4 sm:px-5 font-display font-semibold text-fjord-900 text-xs uppercase tracking-wider">
              {isAr ? "المعاملة" : "Transaction"}
            </th>
            <th className="text-center py-3 px-3 font-display font-semibold text-fjord-900 text-xs uppercase tracking-wider whitespace-nowrap">
              {isAr ? "من (AED)" : "From (AED)"}
            </th>
            <th className="text-center py-3 px-3 font-display font-semibold text-fjord-900 text-xs uppercase tracking-wider whitespace-nowrap">
              {isAr ? "إلى (AED)" : "To (AED)"}
            </th>
            <th className="text-center py-3 px-3 font-display font-semibold text-fjord-900 text-xs uppercase tracking-wider hidden sm:table-cell">
              {isAr ? "الجهة" : "Authority"}
            </th>
            <th className="text-start py-3 px-4 sm:px-5 font-display font-semibold text-fjord-900 text-xs uppercase tracking-wider hidden md:table-cell">
              {isAr ? "ملاحظات" : "Notes"}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.transaction}
              className={`border-b border-mist hover:bg-frost/50 transition-colors ${i % 2 === 1 ? "bg-snow" : ""}`}
            >
              <td className="py-3 px-4 sm:px-5 font-medium text-graphite">
                {row.transaction}
                <span className="sm:hidden block text-xs text-stone mt-0.5">
                  {row.authority}
                </span>
              </td>
              <td className="py-3 px-3 text-center font-bold text-fjord-900">
                {typeof row.low === "number"
                  ? row.low.toLocaleString("en-AE")
                  : row.low}
              </td>
              <td className="py-3 px-3 text-center font-bold text-fjord-900">
                {typeof row.high === "number"
                  ? row.high.toLocaleString("en-AE")
                  : row.high}
              </td>
              <td className="py-3 px-3 text-center text-stone text-xs hidden sm:table-cell">
                {row.authority}
              </td>
              <td className="py-3 px-4 sm:px-5 text-stone text-xs hidden md:table-cell">
                {row.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function GovernmentFeesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const sections = [
    { title: isAr ? "تأشيرات والهجرة" : "Visa & Immigration", rows: visaFees },
    {
      title: isAr ? "هوية، فحص طبي، وعمل" : "ID, Medical & Labour",
      rows: idFees,
    },
    {
      title: isAr ? "تراخيص وتأسيس شركات" : "Licensing & Company Formation",
      rows: licenseFees,
    },
    {
      title: isAr ? "توثيق المستندات" : "Document Clearing & Attestation",
      rows: docFees,
    },
    {
      title: isAr ? "التوطين والامتثال" : "Emiratisation & Compliance",
      rows: complianceFees,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-20 md:py-28 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute bottom-0 start-1/3 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-sage-500/20 border border-sage-500/30">
            <span className="text-xs font-bold text-sage-300 uppercase tracking-widest">
              {isAr ? "محدث مارس 2026" : "Updated March 2026"}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {isAr
              ? "جدول الرسوم الحكومية في دبي"
              : "Dubai Government Fees — Complete Table"}
          </h1>
          <p className="mt-6 text-lg text-slate-300 font-body max-w-xl mx-auto">
            {isAr
              ? "كل رسوم المعاملات الحكومية في مكان واحد. نحن ننشر ما لا ينشره الآخرون."
              : "Every government transaction fee in one place. We publish what others won't."}
          </p>
        </div>
      </section>

      {/* Transparency banner */}
      <section className="py-6 px-6 bg-sage-50 border-b border-sage-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-sage-700 font-body">
            {isAr
              ? "زيتب برو لا تضيف أي زيادة على الرسوم الحكومية — تُمرر بالتكلفة مع إيصالات رسمية في كل فاتورة."
              : "ZETUP PRO never marks up government fees — they are passed through at cost with official receipts on every invoice."}
          </p>
        </div>
      </section>

      {/* Fee Tables */}
      <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl md:text-2xl font-bold text-fjord-900 mb-4">
                {section.title}
              </h2>
              <FeeTable rows={section.rows} locale={locale} />
            </div>
          ))}

          <p className="text-xs text-stone italic">
            {isAr
              ? "جميع الرسوم إرشادية اعتباراً من مارس 2026 وقابلة للتغيير من قبل الجهات الحكومية المعنية. نؤكد الرسوم الدقيقة قبل كل معاملة."
              : "All fees are indicative as of March 2026 and subject to change by the respective government authorities. We confirm exact fees before every transaction."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-fjord-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            {isAr
              ? "تعرف على التكلفة الكاملة لشركتك"
              : "See the Full Cost for Your Company"}
          </h2>
          <p className="text-slate-300 mb-8 font-body max-w-xl mx-auto">
            {isAr
              ? "استخدم حاسبتنا لتقدير الرسوم الحكومية + رسوم خدمات زيتب برو بناءً على حجم شركتك."
              : "Use our calculator to estimate government fees + ZETUP PRO service fees based on your company size."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/cost-calculator"
              className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
            >
              {isAr ? "حاسبة التكلفة" : "Cost Calculator"}
            </Link>
            <Link
              href="/pro-health-check"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              {isAr ? "فحص PRO صحي مجاني" : "Free PRO Health Check"}
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
      <SpeakableSchema
        title="Dubai Government Fees 2026"
        url={`${SITE_CONFIG.url}/${locale}/tools/government-fees`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: "Government Fees",
            url: `${SITE_CONFIG.url}/${locale}/tools/government-fees`,
          },
        ]}
      />
    </>
  );
}

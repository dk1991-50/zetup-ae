import type { Metadata } from "next";
import { Suspense } from "react";
import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowLeft, CheckCircle2, Printer } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ResourceEmailGate } from "@/components/sections/ResourceEmailGate";
import { SITE_CONFIG } from "@/lib/constants";

const RESOURCE_SLUG = "dubai-mainland-setup-checklist";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "قائمة تحقق تأسيس شركة البر الرئيسي في دبي 2026 — 38 خطوة"
        : "Dubai Mainland Setup Checklist 2026 — 38 Steps with Costs",
    description:
      locale === "ar"
        ? "قائمة تحقق مجانية وقابلة للطباعة لتأسيس شركة ذ.م.م في البر الرئيسي بدبي. 38 خطوة من حجز الاسم التجاري إلى أول موظف على الرواتب، مع التكاليف الفعلية والمواعيد."
        : "Free, printable 38-step checklist for setting up a Dubai mainland LLC in 2026. From trade-name reservation to first employee on payroll, with real costs and timelines. Updated for 2026 DET, MOHRE, GDRFA rules.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/resources/${RESOURCE_SLUG}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/resources/${RESOURCE_SLUG}`,
        ar: `${SITE_CONFIG.url}/ar/resources/${RESOURCE_SLUG}`,
        "x-default": `${SITE_CONFIG.url}/en/resources/${RESOURCE_SLUG}`,
      },
    },
  };
}

interface Phase {
  title: string;
  durationLabel: string;
  estimatedCost: string;
  steps: { num: number; title: string; detail: string }[];
}

const PHASES_EN: Phase[] = [
  {
    title: "Phase 1 — Pre-formation decisions",
    durationLabel: "Day 0 (before any payment)",
    estimatedCost: "AED 0",
    steps: [
      {
        num: 1,
        title: "Decide between mainland and free zone",
        detail:
          "Mainland (DET) lets you trade anywhere in the UAE and bid on government work. Free zone restricts you but gives 100% foreign ownership and tax incentives. For most service businesses targeting UAE customers, mainland is the right answer.",
      },
      {
        num: 2,
        title: "Pick your business activities",
        detail:
          "Choose from DET's master activity list — these will be printed on your trade licence. Some activities need extra approvals (e.g., medical, education). Aim for activity codes that match what you actually do, not what sounds impressive.",
      },
      {
        num: 3,
        title: "Decide on legal form (LLC vs Sole Establishment vs Branch)",
        detail:
          "LLC is the standard. Sole Establishment for one Emirati owner. Branch for foreign companies setting up an arm. For 99% of expat founders today, LLC with 100% foreign ownership is correct.",
      },
      {
        num: 4,
        title: "Decide on shareholding split",
        detail:
          "If multiple founders, agree the equity split now and document it. Once filed with DET it's costly to change.",
      },
      {
        num: 5,
        title: "Choose 3 trade name candidates",
        detail:
          "Trade names cannot include religious or government references, must end in LLC for LLCs, and shouldn't conflict with existing entities. Have 3 options ready in case the first is rejected.",
      },
    ],
  },
  {
    title: "Phase 2 — DET initial approvals",
    durationLabel: "Days 1–5",
    estimatedCost: "AED 1,000–2,500",
    steps: [
      {
        num: 6,
        title: "Reserve trade name with DET",
        detail:
          "AED 620 government fee + ~AED 30 typing centre fee. Valid 6 months. Done at any DET service centre or online.",
      },
      {
        num: 7,
        title: "Get DET initial approval",
        detail:
          "AED 120 government fee. This is DET's preliminary OK to proceed with formation. Required to lease an office and complete the next steps.",
      },
      {
        num: 8,
        title: "Special-activity approvals (if applicable)",
        detail:
          "Some activities need approvals from KHDA (education), Dubai Municipality (food), DHA (healthcare), or others. Check at this stage — not at the end.",
      },
    ],
  },
  {
    title: "Phase 3 — Office and Memorandum of Association (MOA)",
    durationLabel: "Days 5–14",
    estimatedCost: "AED 15,000–35,000 (office) + AED 1,500 (MOA)",
    steps: [
      {
        num: 9,
        title: "Lease an office and get an Ejari certificate",
        detail:
          "DET will not issue a final trade licence without a registered Ejari for your office. Smart-desk and serviced offices count.",
      },
      {
        num: 10,
        title: "Draft and notarise the MOA",
        detail:
          "The Memorandum of Association sets out shareholders, capital, activities, and management. Notarised at a DET-approved typing centre or notary, ~AED 1,500.",
      },
      {
        num: 11,
        title: "Pay capital deposit (if required)",
        detail:
          "Most LLC activities don't require minimum capital, but some do (e.g., insurance brokers). Verify with DET at this stage.",
      },
    ],
  },
  {
    title: "Phase 4 — Trade licence issuance",
    durationLabel: "Days 14–21",
    estimatedCost: "AED 10,000–15,000",
    steps: [
      {
        num: 12,
        title: "Submit final licence application to DET",
        detail:
          "Includes MOA, Ejari, initial approval certificate, and shareholder passports. DET reviews and issues licence.",
      },
      {
        num: 13,
        title: "Pay DET trade licence fees",
        detail:
          "Annual licence fee + service fees + chamber-of-commerce membership. Total typically AED 10,000–15,000 per year for standard activities.",
      },
      {
        num: 14,
        title: "Receive trade licence and commercial registry entry",
        detail:
          "Trade licence is the green-card moment — you're now a legal Dubai company. The registry entry includes your unique licence number.",
      },
    ],
  },
  {
    title: "Phase 5 — MOHRE establishment card and labour file",
    durationLabel: "Days 21–24",
    estimatedCost: "AED 700–2,000",
    steps: [
      {
        num: 15,
        title: "Open establishment card with MOHRE",
        detail:
          "Required before you can hire any employee. Done via Tasheel; references your trade licence and Ejari.",
      },
      {
        num: 16,
        title: "Register on the WPS (Wage Protection System)",
        detail:
          "Pick a corporate bank account or approved exchange house. Required before paying first employee salary.",
      },
    ],
  },
  {
    title: "Phase 6 — Investor / shareholder visas",
    durationLabel: "Days 21–35",
    estimatedCost: "AED 4,000–6,000 per person",
    steps: [
      {
        num: 17,
        title: "Apply for entry permits at GDRFA / ICP",
        detail:
          "If shareholders are non-residents, apply for investor entry permits via Amer.",
      },
      {
        num: 18,
        title: "Complete medical fitness exams",
        detail:
          "Required for all residency visas. Done at an authorised medical centre. Results valid 60–90 days.",
      },
      {
        num: 19,
        title: "Biometrics for Emirates ID",
        detail:
          "Done at an ICP centre. Photo, fingerprints, signature. ID is issued ~3–7 days later.",
      },
      {
        num: 20,
        title: "Stamp residency visa in passport",
        detail:
          "Final step before the holder is officially a UAE resident.",
      },
    ],
  },
  {
    title: "Phase 7 — Banking and operations",
    durationLabel: "Days 21–60",
    estimatedCost: "AED 0 (banking) + ongoing",
    steps: [
      {
        num: 21,
        title: "Open corporate bank account",
        detail:
          "The hardest, slowest step in 2026. Banks require trade licence, MOA, Ejari, and shareholder Emirates IDs. Allow 4–8 weeks. Compare 3 banks (e.g., Mashreq Neo, Emirates NBD, Wio).",
      },
      {
        num: 22,
        title: "Set up accounting system",
        detail:
          "Required for VAT and corporate tax compliance. Zoho Books, Xero, QuickBooks all work for Dubai SMEs. Set up before first invoice.",
      },
      {
        num: 23,
        title: "Register on EmaraTax (FTA portal)",
        detail:
          "Required for any business expecting taxable income. Get your TRN early; you'll need it on every invoice.",
      },
      {
        num: 24,
        title: "Decide VAT registration timing",
        detail:
          "Mandatory at AED 375,000 taxable turnover; voluntary at AED 187,500. Filing is quarterly via EmaraTax.",
      },
    ],
  },
  {
    title: "Phase 8 — First hires",
    durationLabel: "Days 30+",
    estimatedCost: "AED 3,500–6,000 per employee visa",
    steps: [
      {
        num: 25,
        title: "Apply for work permit at MOHRE",
        detail:
          "Done via Tasheel. Requires the candidate's passport, photo, qualifications, signed offer letter.",
      },
      {
        num: 26,
        title: "Issue MOHRE-standard employment contract",
        detail:
          "Must be on MOHRE's approved template. Limited and unlimited contracts have different rules. Sign before the work permit is issued.",
      },
      {
        num: 27,
        title: "Apply for entry permit at GDRFA",
        detail:
          "If candidate is outside the UAE. Allows a 60-day window to enter and complete residency-visa formalities.",
      },
      {
        num: 28,
        title: "Medical fitness for employee",
        detail:
          "Same as for shareholders — at an authorised medical centre.",
      },
      {
        num: 29,
        title: "Emirates ID biometrics for employee",
        detail:
          "ICP centre. Issuance ~3–7 days later.",
      },
      {
        num: 30,
        title: "Stamp employment residency visa",
        detail:
          "Final step. Employee is now legally working for you.",
      },
      {
        num: 31,
        title: "Pay first salary via WPS",
        detail:
          "Within 30 days of contract start. Failure triggers MOHRE penalties and visa-issuance blocks.",
      },
    ],
  },
  {
    title: "Phase 9 — Compliance setup",
    durationLabel: "Days 60+",
    estimatedCost: "Variable",
    steps: [
      {
        num: 32,
        title: "Set up Emiratisation tracking (50+ employees)",
        detail:
          "Targets ramp from 4% to 10% by December 2026. Non-compliance is AED 9,000/month per missing role. Register on Nafis to access salary subsidies.",
      },
      {
        num: 33,
        title: "Calendar renewal dates",
        detail:
          "Trade licence (annual), Ejari (annual), establishment card (annual), each visa (every 2 years). Miss one and DET blocks all subsequent transactions.",
      },
      {
        num: 34,
        title: "Plan first corporate tax return",
        detail:
          "Due 9 months after fiscal year-end. Even loss-making companies must register and file.",
      },
      {
        num: 35,
        title: "Set up ongoing PRO services or in-house process",
        detail:
          "Either retain a PRO firm or assign an internal team member to track every government touchpoint. Don't let it drift.",
      },
    ],
  },
  {
    title: "Phase 10 — Growth ready",
    durationLabel: "Day 90+",
    estimatedCost: "Ongoing",
    steps: [
      {
        num: 36,
        title: "Run first quarterly compliance review",
        detail:
          "Visa expiries, licence expiries, WPS status, tax registration status, Emiratisation progress. Catch problems while they're cheap.",
      },
      {
        num: 37,
        title: "Document standard operating procedures",
        detail:
          "Every recurring government process — visa renewals, document attestations, etc. — should be documented before you scale.",
      },
      {
        num: 38,
        title: "Start tracking unit economics",
        detail:
          "Cost per employee (PRO + government), cost of compliance per million AED revenue, fines/penalties paid (target: zero). These numbers tell you whether you're managing the operation or it's managing you.",
      },
    ],
  },
];

const PHASES_AR: Phase[] = [
  {
    title: "المرحلة 1 — قرارات ما قبل التأسيس",
    durationLabel: "اليوم 0 (قبل أي دفع)",
    estimatedCost: "0 درهم",
    steps: [
      {
        num: 1,
        title: "اختر بين البر الرئيسي والمنطقة الحرة",
        detail:
          "البر الرئيسي يسمح بالتجارة في كل أنحاء الإمارات والمناقصات الحكومية. المنطقة الحرة مقيدة لكن تمنح ملكية أجنبية 100% وحوافز ضريبية. لمعظم الأعمال الخدمية المستهدفة لعملاء الإمارات، البر الرئيسي هو الإجابة الصحيحة.",
      },
      {
        num: 2,
        title: "اختر أنشطتك التجارية",
        detail:
          "اختر من قائمة الأنشطة الرئيسية للدائرة. بعض الأنشطة تتطلب موافقات إضافية. اختر رموز الأنشطة التي تطابق ما تفعله فعليًا.",
      },
      {
        num: 3,
        title: "اختر الشكل القانوني",
        detail:
          "ذ.م.م هو القياسي. لـ 99% من المؤسسين الأجانب اليوم، ذ.م.م بملكية أجنبية 100% هو الصحيح.",
      },
      {
        num: 4,
        title: "حدد تقسيم الأسهم",
        detail:
          "إذا كان هناك عدة مؤسسين، اتفقوا على تقسيم الأسهم الآن ووثقوه.",
      },
      {
        num: 5,
        title: "اختر 3 أسماء تجارية مرشحة",
        detail:
          "لا يمكن أن تتضمن إشارات دينية أو حكومية، يجب أن تنتهي بـ LLC، ولا تتعارض مع الكيانات الموجودة.",
      },
    ],
  },
  {
    title: "المرحلة 2 — موافقات الدائرة الأولية",
    durationLabel: "الأيام 1-5",
    estimatedCost: "1,000-2,500 درهم",
    steps: [
      {
        num: 6,
        title: "احجز الاسم التجاري مع الدائرة",
        detail: "رسوم 620 درهم + ~30 درهم رسوم طباعة. صالح لمدة 6 أشهر.",
      },
      {
        num: 7,
        title: "احصل على الموافقة الأولية للدائرة",
        detail: "رسوم 120 درهم. الموافقة الأولية لمواصلة التأسيس.",
      },
      {
        num: 8,
        title: "موافقات الأنشطة الخاصة (إن وُجدت)",
        detail:
          "بعض الأنشطة تحتاج موافقات من KHDA (تعليم)، بلدية دبي (طعام)، أو غيرها.",
      },
    ],
  },
  {
    title: "المرحلة 3 — المكتب وعقد التأسيس",
    durationLabel: "الأيام 5-14",
    estimatedCost: "15,000-35,000 درهم (مكتب) + 1,500 درهم (عقد)",
    steps: [
      {
        num: 9,
        title: "استأجر مكتبًا واحصل على شهادة إيجاري",
        detail:
          "لن تصدر الدائرة رخصة تجارية نهائية بدون إيجاري مسجل لمكتبك.",
      },
      {
        num: 10,
        title: "صياغة وتوثيق عقد التأسيس",
        detail:
          "عقد التأسيس يحدد المساهمين ورأس المال والأنشطة والإدارة. حوالي 1,500 درهم.",
      },
      {
        num: 11,
        title: "ادفع رأس المال (إن لزم)",
        detail:
          "معظم أنشطة ذ.م.م لا تتطلب حد أدنى لرأس المال، لكن البعض يتطلب.",
      },
    ],
  },
  {
    title: "المرحلة 4 — إصدار الرخصة التجارية",
    durationLabel: "الأيام 14-21",
    estimatedCost: "10,000-15,000 درهم",
    steps: [
      {
        num: 12,
        title: "تقديم طلب الرخصة النهائي للدائرة",
        detail: "يتضمن العقد، الإيجاري، شهادة الموافقة الأولية، وجوازات سفر المساهمين.",
      },
      {
        num: 13,
        title: "ادفع رسوم الرخصة التجارية",
        detail: "رسوم سنوية + رسوم خدمة + عضوية غرفة التجارة. عادة 10,000-15,000 درهم.",
      },
      {
        num: 14,
        title: "استلم الرخصة التجارية والقيد في السجل التجاري",
        detail: "أنت الآن شركة دبي قانونية.",
      },
    ],
  },
  {
    title: "المرحلة 5 — بطاقة المنشأة في الوزارة",
    durationLabel: "الأيام 21-24",
    estimatedCost: "700-2,000 درهم",
    steps: [
      {
        num: 15,
        title: "افتح بطاقة المنشأة مع الوزارة",
        detail: "مطلوبة قبل توظيف أي موظف. عبر تسهيل.",
      },
      {
        num: 16,
        title: "سجل في نظام حماية الأجور",
        detail: "اختر حسابًا بنكيًا للشركة. مطلوب قبل دفع أول راتب.",
      },
    ],
  },
  {
    title: "المرحلة 6 — تأشيرات المستثمر/المساهم",
    durationLabel: "الأيام 21-35",
    estimatedCost: "4,000-6,000 درهم لكل شخص",
    steps: [
      { num: 17, title: "تقديم طلب تصاريح الدخول", detail: "إذا كان المساهمون غير مقيمين." },
      { num: 18, title: "إكمال الفحوص الطبية", detail: "في مركز طبي معتمد." },
      { num: 19, title: "بصمات الهوية الإماراتية", detail: "في مركز هيئة الهوية." },
      { num: 20, title: "ختم تأشيرة الإقامة في الجواز", detail: "الخطوة الأخيرة." },
    ],
  },
  {
    title: "المرحلة 7 — البنوك والعمليات",
    durationLabel: "الأيام 21-60",
    estimatedCost: "صفر (بنوك) + جاري",
    steps: [
      {
        num: 21,
        title: "فتح حساب بنكي للشركة",
        detail: "الخطوة الأصعب والأبطأ. اسمح بـ 4-8 أسابيع. قارن 3 بنوك.",
      },
      { num: 22, title: "إعداد نظام محاسبة", detail: "Zoho، Xero، QuickBooks." },
      { num: 23, title: "التسجيل في إمارا تاكس", detail: "مطلوب لأي عمل بدخل خاضع للضريبة." },
      {
        num: 24,
        title: "قرر توقيت تسجيل ضريبة القيمة المضافة",
        detail:
          "إلزامي عند 375,000 درهم دوران خاضع للضريبة؛ طوعي عند 187,500 درهم.",
      },
    ],
  },
  {
    title: "المرحلة 8 — أول التعيينات",
    durationLabel: "الأيام 30+",
    estimatedCost: "3,500-6,000 درهم لكل تأشيرة موظف",
    steps: [
      { num: 25, title: "طلب تصريح عمل من الوزارة", detail: "عبر تسهيل." },
      { num: 26, title: "إصدار عقد عمل بنموذج الوزارة", detail: "يجب أن يكون على القالب المعتمد." },
      { num: 27, title: "طلب تصريح دخول من الإدارة العامة للإقامة", detail: "إذا كان المرشح خارج الإمارات." },
      { num: 28, title: "فحص طبي للموظف", detail: "مركز طبي معتمد." },
      { num: 29, title: "بصمات الهوية الإماراتية للموظف", detail: "مركز هيئة الهوية." },
      { num: 30, title: "ختم تأشيرة إقامة العمل", detail: "الخطوة الأخيرة. الموظف يعمل لديك قانونيًا الآن." },
      {
        num: 31,
        title: "ادفع أول راتب عبر نظام حماية الأجور",
        detail: "خلال 30 يومًا من بداية العقد.",
      },
    ],
  },
  {
    title: "المرحلة 9 — إعداد الامتثال",
    durationLabel: "الأيام 60+",
    estimatedCost: "متغير",
    steps: [
      {
        num: 32,
        title: "إعداد متابعة التوطين (50+ موظفًا)",
        detail:
          "الأهداف ترتفع إلى 10% بحلول ديسمبر 2026. عدم الامتثال 9,000 درهم شهريًا لكل وظيفة شاغرة.",
      },
      { num: 33, title: "تقويم تواريخ التجديد", detail: "الرخصة، الإيجاري، بطاقة المنشأة، التأشيرات." },
      { num: 34, title: "خطط لأول إقرار ضريبة شركات", detail: "مستحق بعد 9 أشهر من نهاية السنة المالية." },
      { num: 35, title: "إعداد خدمات PRO المستمرة", detail: "احتفظ بشركة PRO أو عيّن عضو فريق داخلي." },
    ],
  },
  {
    title: "المرحلة 10 — جاهز للنمو",
    durationLabel: "اليوم 90+",
    estimatedCost: "جاري",
    steps: [
      { num: 36, title: "أجرِ أول مراجعة امتثال ربع سنوية", detail: "التأشيرات، الرخص، نظام الأجور، الضرائب، التوطين." },
      { num: 37, title: "وثّق إجراءات التشغيل القياسية", detail: "كل عملية حكومية متكررة يجب توثيقها قبل التوسع." },
      { num: 38, title: "ابدأ متابعة اقتصاديات الوحدة", detail: "التكلفة لكل موظف، تكلفة الامتثال، الغرامات (الهدف: صفر)." },
    ],
  },
];

export default async function ChecklistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const phases = isAr ? PHASES_AR : PHASES_EN;
  const totalSteps = phases.reduce((acc, p) => acc + p.steps.length, 0);
  const resourceUrl = `${SITE_CONFIG.url}/${locale}/resources/${RESOURCE_SLUG}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-20 md:py-24 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -bottom-20 end-1/4 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[80px]" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 mb-6 text-sm text-sage-400 hover:text-sage-300 font-display"
          >
            <ArrowLeft size={16} strokeWidth={1.5} className="rtl:rotate-180" />
            {isAr ? "كل الموارد" : "All resources"}
          </Link>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {isAr ? `قائمة تحقق · ${totalSteps} خطوة` : `Checklist · ${totalSteps} steps`}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr
              ? "قائمة تحقق تأسيس شركة البر الرئيسي في دبي 2026"
              : "Dubai Mainland Setup Checklist 2026"}
          </h1>
          <p className="text-xl text-slate-300 font-body max-w-3xl">
            {isAr
              ? `كل شيء يجب فعله لتأسيس شركة ذ.م.م في البر الرئيسي بدبي وأخذ أول موظف على الرواتب — في ${totalSteps} خطوة، عبر 10 مراحل، مع التكاليف الفعلية والمواعيد لعام 2026.`
              : `Everything you need to do to set up a Dubai mainland LLC and get your first employee on payroll — in ${totalSteps} steps across 10 phases, with real 2026 costs and timelines from people who file the paperwork every day.`}
          </p>
        </div>
      </section>

      {/* Print + Email-gate prompt */}
      <section className="py-10 px-6 md:px-8 lg:px-12 bg-frost border-b border-mist">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-graphite font-body">
            {isAr
              ? "اطبع هذه الصفحة كملف PDF أو احفظ الرابط في بريدك."
              : "Print this page as a PDF, or have us send the link to your inbox."}
          </p>
          <a
            href="javascript:window.print()"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-mist bg-white text-sm font-semibold text-fjord-900 hover:border-sage-300 hover:text-sage-700 transition-colors font-display"
          >
            <Printer size={16} strokeWidth={1.5} />
            {isAr ? "طباعة / حفظ كملف PDF" : "Print / Save as PDF"}
          </a>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {phases.map((phase, pi) => (
            <div key={pi} className="mb-12 last:mb-0">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900 mb-2">
                {phase.title}
              </h2>
              <p className="text-sm text-stone font-body mb-6">
                <span className="font-semibold text-fjord-700">
                  {phase.durationLabel}
                </span>
                {" · "}
                <span className="text-graphite">
                  {isAr ? "تكلفة تقديرية" : "Estimated cost"}: {phase.estimatedCost}
                </span>
              </p>
              <ul className="space-y-4">
                {phase.steps.map((step) => (
                  <li
                    key={step.num}
                    className="flex gap-4 rounded-xl border border-mist bg-white p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700 font-display font-bold text-sm">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-fjord-900 mb-1">
                        {step.title}
                      </p>
                      <p className="text-sm leading-relaxed text-graphite font-body">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Email gate */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-y border-mist">
        <div className="max-w-2xl mx-auto">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-mist bg-white p-8 animate-pulse h-48" />
            }
          >
            <ResourceEmailGate
              locale={locale}
              resource={RESOURCE_SLUG}
              resourceUrl={resourceUrl}
              heading={
                isAr
                  ? "احفظ هذه القائمة في بريدك"
                  : "Want this in your inbox?"
              }
              subheading={
                isAr
                  ? "سنرسل الرابط إلى بريدك حتى تتمكن من العودة إليه. لن نراسلك بأي شيء آخر بدون إذنك."
                  : "We'll send the link to your email so you can come back to it. No newsletter, no follow-ups unless you ask."
              }
              buttonLabel={
                isAr
                  ? "أرسل الرابط إلى بريدي"
                  : "Send me the link"
              }
              emailPlaceholder={
                isAr ? "بريدك الإلكتروني" : "Your work email"
              }
              namePlaceholder={isAr ? "الاسم (اختياري)" : "Name (optional)"}
              companyPlaceholder={
                isAr ? "الشركة (اختياري)" : "Company (optional)"
              }
              successMessage={
                isAr
                  ? "أرسلنا الرابط إلى بريدك. تحقق منه — أحيانًا ينتهي في مجلد البريد الإلكتروني العشوائي."
                  : "We've emailed the link. Check your inbox — and sometimes the spam folder."
              }
            />
          </Suspense>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-4">
            {isAr
              ? "تريد فعل هذه الخطوات بدون التعامل مع كل وزارة بنفسك؟"
              : "Want to skip the paperwork?"}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "نحن نتولى كل خطوة من هذه الخطوات الـ 38 لعملائنا. احجز فحص PRO صحي مجاني لمعرفة ما يبدو عليه الأمر مع زيتب برو."
              : "We do all 38 steps for our clients. Book a free 30-minute PRO Health Check and we'll tell you exactly what your setup costs and how fast we can ship it."}
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
            name: "Resources",
            url: `${SITE_CONFIG.url}/${locale}/resources`,
          },
          {
            name: isAr
              ? "قائمة تحقق التأسيس"
              : "Mainland Setup Checklist",
            url: resourceUrl,
          },
        ]}
      />
    </>
  );
}

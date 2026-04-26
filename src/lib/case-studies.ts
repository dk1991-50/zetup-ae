/**
 * Case-study data — currently anonymised. Each entry can be updated
 * with a real company name + named contact + photo when permission is
 * granted. Replace `clientName`, `clientRole`, and `clientCompanyLogo`
 * fields when those become available; the rest of the structure stays.
 */

export interface CaseStudyEntry {
  slug: string;
  industry: { en: string; ar: string };
  /** Anonymised company size, e.g. "Construction company · 65 employees" */
  companyDescriptor: { en: string; ar: string };
  /** When the engagement started, used in display + Article schema */
  date: string;
  /** Headline — will eventually feature a real client name */
  title: { en: string; ar: string };
  /** Pull-quote — anonymised today, will be attributed when permission lands */
  pullQuote: { en: string; ar: string };
  /** Short summary for cards */
  summary: { en: string; ar: string };
  /** Long-form sections */
  challenge: { en: string[]; ar: string[] };
  solution: { en: string[]; ar: string[] };
  results: { en: { label: string; value: string }[]; ar: { label: string; value: string }[] };
  /** Most-relevant Zetup services to cross-link to */
  servicesUsed: string[];
}

export const CASE_STUDIES: CaseStudyEntry[] = [
  {
    slug: "switching-pro-without-disruption",
    industry: { en: "Construction", ar: "البناء" },
    companyDescriptor: {
      en: "Construction company · 65 employees · Dubai mainland",
      ar: "شركة بناء · 65 موظفًا · دبي البر الرئيسي",
    },
    date: "2026-02-15",
    title: {
      en: "Switching PRO providers in 7 days — without disruption",
      ar: "تبديل مزودي PRO في 7 أيام — بدون انقطاع",
    },
    pullQuote: {
      en: "Switching to ZETUP PRO was the best operational decision we made in 2025. For the first time, our visa renewals happen on schedule and our invoices match what we agreed.",
      ar: "كان التحول إلى زيتب برو أفضل قرار تشغيلي اتخذناه في 2025. لأول مرة، تتم تجديدات تأشيراتنا في الموعد وتطابق فواتيرنا ما اتفقنا عليه.",
    },
    summary: {
      en: "A mid-market Dubai construction company was bleeding budget on PRO surprise charges and missing visa-renewal deadlines. Within a week of engaging ZETUP PRO, the full handover from their previous provider was complete with zero compliance gap.",
      ar: "شركة بناء متوسطة الحجم في دبي كانت تنزف ميزانيتها على رسوم PRO المفاجئة وتفوّت مواعيد تجديد التأشيرات. خلال أسبوع من التعاقد مع زيتب برو، اكتمل التسليم الكامل من المزود السابق بدون أي فجوة امتثال.",
    },
    challenge: {
      en: [
        "The client had been with the same PRO firm for 4 years — long enough to accumulate AED 200,000+ in unexplained 'service charges' over the previous 12 months alone, on top of an opaque retainer.",
        "Two visas had expired without renewal in the previous 6 months, triggering AED 1,000-per-month overstay fines and blocking new hires until the issue was cleared.",
        "The Operations Director was spending ~10 hours per week chasing the previous provider for status updates, signed copies, and explanations of charges — time that should have been spent on actual project management.",
      ],
      ar: [
        "كان العميل مع نفس شركة PRO لمدة 4 سنوات — طويلة بما يكفي لتراكم 200,000+ درهم من 'رسوم الخدمات' غير المبررة خلال 12 شهرًا فقط، بالإضافة إلى راتب غير شفاف.",
        "انتهت تأشيرتان دون تجديد في الستة أشهر السابقة، مما أدى إلى غرامات تجاوز إقامة 1,000 درهم شهريًا وحظر التعيينات الجديدة حتى تم تسوية المشكلة.",
        "كان مدير العمليات يقضي ~10 ساعات أسبوعيًا في ملاحقة المزود السابق للحصول على تحديثات الحالة والنسخ الموقعة وتفسيرات الرسوم — وقت كان يجب قضاؤه على إدارة المشاريع الفعلية.",
      ],
    },
    solution: {
      en: [
        "Day 1: Free PRO Health Check identified 4 immediate compliance issues including the expired visas, an out-of-date establishment card, and an Ejari that was mismatched to the registered DET address.",
        "Day 2-3: ZETUP PRO contacted the previous provider in writing, requested handover of all active transactions and visa files, and sent the signed authorisation to MOHRE / GDRFA.",
        "Day 4-5: We resolved the expired visas (including grace-period administration), renewed the establishment card, and corrected the Ejari mismatch with DET.",
        "Day 7: Full handover complete. Client now has a dedicated account coordinator with same-day WhatsApp response. All invoices itemise government fees separately at actual cost.",
      ],
      ar: [
        "اليوم 1: حدد فحص PRO الصحي المجاني 4 قضايا امتثال فورية تشمل التأشيرات المنتهية وبطاقة منشأة قديمة وإيجاري غير مطابق لعنوان الدائرة المسجل.",
        "اليوم 2-3: تواصلت زيتب برو مع المزود السابق كتابيًا، وطلبت تسليم كل المعاملات النشطة وملفات التأشيرات، وأرسلت التفويض الموقع للوزارة / الإدارة العامة للإقامة.",
        "اليوم 4-5: حللنا التأشيرات المنتهية، وجددنا بطاقة المنشأة، وصححنا تعارض الإيجاري مع الدائرة.",
        "اليوم 7: اكتمل التسليم الكامل. للعميل الآن منسق حساب مخصص مع استجابة في نفس اليوم عبر واتساب. كل الفواتير تفصل الرسوم الحكومية بشكل منفصل بالتكلفة الفعلية.",
      ],
    },
    results: {
      en: [
        { label: "Days to full handover", value: "7" },
        { label: "Compliance issues resolved Week 1", value: "4" },
        { label: "Reduction in time spent managing PRO", value: "~10 hr/week" },
        { label: "Annual savings vs previous provider", value: "AED 180k+" },
      ],
      ar: [
        { label: "أيام التسليم الكامل", value: "7" },
        { label: "قضايا الامتثال المحلولة في الأسبوع الأول", value: "4" },
        { label: "تقليل الوقت في إدارة PRO", value: "~10 ساعات/أسبوع" },
        { label: "وفورات سنوية مقابل المزود السابق", value: "180,000+ درهم" },
      ],
    },
    servicesUsed: [
      "pro-services",
      "trade-license-renewal",
      "visa-services",
    ],
  },
  {
    slug: "emiratisation-compliance-from-zero",
    industry: { en: "Hospitality", ar: "الضيافة" },
    companyDescriptor: {
      en: "Hospitality group · 70 employees · Dubai mainland",
      ar: "مجموعة ضيافة · 70 موظفًا · دبي البر الرئيسي",
    },
    date: "2026-01-20",
    title: {
      en: "From non-compliant to fully Emiratised in 90 days",
      ar: "من عدم الامتثال إلى توطين كامل خلال 90 يومًا",
    },
    pullQuote: {
      en: "ZETUP PRO handled our entire Emiratisation compliance setup and we went from non-compliant to fully meeting our target in under three months.",
      ar: "تولت زيتب برو إعداد امتثال التوطين الكامل وانتقلنا من عدم الامتثال إلى تحقيق هدفنا الكامل في أقل من ثلاثة أشهر.",
    },
    summary: {
      en: "A 70-employee hospitality group was facing AED 27,000+ per month in Emiratisation non-compliance fines. ZETUP PRO mapped the gaps, registered them on Nafis, and helped them place 3 Emirati employees in skilled roles within 90 days — with subsidies recovering most of the salary cost.",
      ar: "كانت مجموعة ضيافة بـ 70 موظفًا تواجه غرامات عدم امتثال التوطين بقيمة 27,000+ درهم شهريًا. رسمت زيتب برو الفجوات، سجلتها على نافس، وساعدت في تعيين 3 موظفين إماراتيين في أدوار ماهرة خلال 90 يومًا — مع استرداد الدعم لمعظم تكلفة الراتب.",
    },
    challenge: {
      en: [
        "The client had crossed the 50-employee threshold mid-2024 without realising the Emiratisation rules applied to them. By the time MOHRE flagged it, they were 3 quarterly cycles behind on quotas.",
        "Cumulative non-compliance fines were running at AED 27,000+/month and growing. New work-permit applications were being held by MOHRE pending compliance.",
        "Internal HR had no Emiratisation experience and didn't know about Nafis subsidies. Standard recruitment channels weren't surfacing qualified Emirati candidates.",
      ],
      ar: [
        "تجاوز العميل عتبة 50 موظفًا في منتصف 2024 دون إدراك أن قواعد التوطين تنطبق عليهم. بحلول الوقت الذي أبلغت فيه الوزارة، كانوا متأخرين 3 دورات ربع سنوية على الحصص.",
        "كانت غرامات عدم الامتثال التراكمية تجري بمعدل 27,000+ درهم/شهر وتنمو. كانت طلبات تصاريح العمل الجديدة محتجزة من الوزارة في انتظار الامتثال.",
        "لم يكن لدى الموارد البشرية الداخلية خبرة في التوطين ولم تكن تعرف عن دعم نافس. لم تكن قنوات التوظيف القياسية تكشف عن مرشحين إماراتيين مؤهلين.",
      ],
    },
    solution: {
      en: [
        "Week 1: Compliance audit covering current MOHRE skill-category breakdown, target quota, fines accrued, and the realistic 6-month roadmap.",
        "Week 2-3: Nafis registration completed, subsidies modelled, and 3 specific job roles re-classified to qualifying skill categories.",
        "Week 4-8: Coordinated with Emirati-talent recruitment partners, advertised through Nafis-approved channels, and supported the client's HR team through 6 candidate interviews.",
        "Week 9-12: Three Emirati hires onboarded, contracts registered with MOHRE, subsidies activated. Quota cleared; existing fines arbitrated down with MOHRE.",
      ],
      ar: [
        "الأسبوع 1: تدقيق امتثال يغطي تقسيم فئات المهارات الحالية للوزارة، الحصة المستهدفة، الغرامات المتراكمة، وخارطة الطريق الواقعية لـ 6 أشهر.",
        "الأسبوع 2-3: اكتمل التسجيل في نافس، تم نمذجة الدعم، وأعيد تصنيف 3 وظائف محددة إلى فئات المهارات المؤهلة.",
        "الأسبوع 4-8: تنسيق مع شركاء توظيف المواطنين، الإعلان عبر القنوات المعتمدة من نافس، ودعم فريق الموارد البشرية للعميل من خلال 6 مقابلات للمرشحين.",
        "الأسبوع 9-12: تم تعيين 3 إماراتيين، تسجيل العقود لدى الوزارة، تفعيل الدعم. تم تسوية الحصة؛ تم التفاوض على تخفيض الغرامات الحالية مع الوزارة.",
      ],
    },
    results: {
      en: [
        { label: "Days to full Emiratisation compliance", value: "90" },
        { label: "Monthly fines avoided going forward", value: "AED 27k+" },
        { label: "Nafis subsidies activated", value: "AED 21k/mo" },
        { label: "Net cost of compliance to the company", value: "<10% of fine exposure" },
      ],
      ar: [
        { label: "أيام الامتثال الكامل للتوطين", value: "90" },
        { label: "الغرامات الشهرية التي تم تجنبها", value: "27,000+ درهم" },
        { label: "دعم نافس المُفعّل", value: "21,000 درهم/شهر" },
        { label: "صافي تكلفة الامتثال", value: "<10% من تعرض الغرامة" },
      ],
    },
    servicesUsed: ["emiratisation", "pro-services"],
  },
  {
    slug: "transparent-pricing-for-growing-consultancy",
    industry: { en: "Consultancy", ar: "الاستشارات" },
    companyDescriptor: {
      en: "Management consultancy · 35 employees · Dubai mainland",
      ar: "استشارات إدارية · 35 موظفًا · دبي البر الرئيسي",
    },
    date: "2025-11-10",
    title: {
      en: "Cutting PRO costs 40% while doubling visa volume",
      ar: "خفض تكاليف PRO بنسبة 40% مع مضاعفة حجم التأشيرات",
    },
    pullQuote: {
      en: "After years of surprise fees from our previous PRO company, ZETUP PRO's transparency is genuinely refreshing. They told us the price, delivered the service, and the invoice matched.",
      ar: "بعد سنوات من الرسوم المفاجئة من شركة PRO السابقة، شفافية زيتب برو منعشة حقًا. قالوا لنا السعر، قدموا الخدمة، وتطابقت الفاتورة.",
    },
    summary: {
      en: "A 35-employee consultancy was paying AED 14,000/month for PRO services that bundled government fees opaquely. ZETUP PRO took over with a published AED 8,400/month retainer + government fees passed through at cost — a 40% gross saving that funded their next 8 hires.",
      ar: "كانت استشارات بـ 35 موظفًا تدفع 14,000 درهم/شهر مقابل خدمات PRO التي كانت تجمع الرسوم الحكومية بشكل غير شفاف. تولت زيتب برو بمبلغ منشور 8,400 درهم/شهر + الرسوم الحكومية بالتكلفة الفعلية — توفير إجمالي 40% موّل تعييناتهم الثمانية التالية.",
    },
    challenge: {
      en: [
        "The client's existing provider charged a flat AED 14,000/month plus 'admin fees' on every transaction, making it impossible to model their true PRO cost as they grew.",
        "Visa volume was about to double (planned hiring of 8 more consultants over Q1), and the existing provider had quoted an extra AED 4,000/month for 'expanded service'.",
        "The CFO wanted a single, predictable line item for PRO + government fees that would scale with employee count, not arbitrary 'admin' multipliers.",
      ],
      ar: [
        "كان مزود العميل الحالي يفرض رسومًا ثابتة قدرها 14,000 درهم/شهر بالإضافة إلى 'رسوم إدارية' على كل معاملة، مما جعل من المستحيل نمذجة تكلفة PRO الحقيقية مع نموهم.",
        "كان حجم التأشيرات على وشك المضاعفة (التعيين المخطط لـ 8 استشاريين إضافيين خلال الربع الأول)، وقد عرض المزود الحالي 4,000 درهم/شهر إضافية مقابل 'خدمة موسعة'.",
        "أراد المدير المالي بندًا واحدًا قابلًا للتنبؤ لـ PRO + الرسوم الحكومية يتناسب مع عدد الموظفين.",
      ],
    },
    solution: {
      en: [
        "ZETUP PRO published its sliding-scale retainer for the client's headcount band: AED 8,400/month for 35 employees, scaling to AED 9,200/month at 43 (their 6-month target headcount).",
        "Every government fee — visas, Emirates IDs, trade-licence renewal, document attestation — itemised on every invoice at actual cost with attached receipts.",
        "Quarterly review built into the engagement to surface upcoming renewals, hiring plans, and any compliance items before they became urgent.",
      ],
      ar: [
        "نشرت زيتب برو راتبها التدريجي لفئة عدد موظفي العميل: 8,400 درهم/شهر لـ 35 موظفًا، يصل إلى 9,200 درهم/شهر عند 43 موظفًا (هدفهم لـ 6 أشهر).",
        "كل رسوم حكومية — التأشيرات، الهوية الإماراتية، تجديد الرخصة التجارية، توثيق المستندات — مفصلة على كل فاتورة بالتكلفة الفعلية مع إيصالات مرفقة.",
        "مراجعة ربع سنوية مدمجة في التعاقد لطرح التجديدات القادمة، خطط التوظيف، وأي بنود امتثال قبل أن تصبح عاجلة.",
      ],
    },
    results: {
      en: [
        { label: "Monthly retainer reduction", value: "40%" },
        { label: "Annualised saving", value: "AED 67k" },
        { label: "Visa volume processed", value: "2× previous" },
        { label: "CFO confidence in budget", value: "Predictable" },
      ],
      ar: [
        { label: "تخفيض الراتب الشهري", value: "40%" },
        { label: "التوفير السنوي", value: "67,000 درهم" },
        { label: "حجم التأشيرات المعالجة", value: "2× السابق" },
        { label: "ثقة المدير المالي بالميزانية", value: "قابلة للتنبؤ" },
      ],
    },
    servicesUsed: ["pro-services", "visa-services", "trade-license-renewal"],
  },
];

export function findCaseStudy(slug: string): CaseStudyEntry | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

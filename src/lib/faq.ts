/**
 * Master FAQ data for the /faq hub page.
 *
 * Categories cover the full Dubai-business-setup buyer journey:
 *   - Setup & formation
 *   - Visas & residency
 *   - Trade licence & compliance
 *   - Emiratisation
 *   - Tax (VAT + corporate tax)
 *   - Pricing & engagement
 *
 * Every entry has EN+AR strings. The hub page renders them grouped by
 * category and emits a single FAQPage schema covering everything.
 */

export type FaqCategoryKey =
  | "setup"
  | "visas"
  | "licence"
  | "emiratisation"
  | "tax"
  | "pricing";

export interface FaqEntry {
  category: FaqCategoryKey;
  q: { en: string; ar: string };
  a: { en: string; ar: string };
}

export const FAQ_CATEGORIES: Record<
  FaqCategoryKey,
  { en: string; ar: string }
> = {
  setup: { en: "Setup & company formation", ar: "التأسيس وتكوين الشركات" },
  visas: { en: "Visas & residency", ar: "التأشيرات والإقامة" },
  licence: { en: "Trade licence & compliance", ar: "الرخصة التجارية والامتثال" },
  emiratisation: {
    en: "Emiratisation",
    ar: "التوطين",
  },
  tax: { en: "Tax (VAT + corporate)", ar: "الضرائب (القيمة المضافة + الشركات)" },
  pricing: {
    en: "ZETUP PRO pricing & engagement",
    ar: "أسعار زيتب برو والتعاقد",
  },
};

export const FAQS: FaqEntry[] = [
  // ─── SETUP & FORMATION ─────────────────────────────────────────
  {
    category: "setup",
    q: {
      en: "How long does it take to set up a Dubai mainland company?",
      ar: "كم يستغرق تأسيس شركة في دبي البر الرئيسي؟",
    },
    a: {
      en: "Trade-licence issuance typically takes 2–4 weeks from initial approval, assuming all shareholder documents are ready. The full path from decision to first employee on payroll is 60–90 days, with bank-account opening usually the slowest step (4–8 weeks).",
      ar: "يستغرق إصدار الرخصة التجارية عادةً 2-4 أسابيع من الموافقة الأولية، بافتراض جاهزية كل وثائق المساهمين. المسار الكامل من القرار إلى أول موظف على الرواتب 60-90 يومًا، وفتح الحساب البنكي عادةً الخطوة الأبطأ (4-8 أسابيع).",
    },
  },
  {
    category: "setup",
    q: {
      en: "Can I own 100% of a Dubai mainland company as a foreigner?",
      ar: "هل يمكنني امتلاك 100% من شركة دبي البر الرئيسي كأجنبي؟",
    },
    a: {
      en: "Yes, since June 2021. Federal Decree-Law No. 32 of 2021 removed the 51% Emirati-shareholder requirement for most commercial and professional activities. Strategic activities (defence, banking, certain energy) still require majority Emirati ownership.",
      ar: "نعم، منذ يونيو 2021. أزال المرسوم الاتحادي رقم 32 لعام 2021 شرط 51% للمساهم الإماراتي لمعظم الأنشطة التجارية والمهنية. الأنشطة الاستراتيجية (الدفاع، البنوك، بعض الطاقة) لا تزال تتطلب ملكية إماراتية أغلبية.",
    },
  },
  {
    category: "setup",
    q: {
      en: "What's the difference between mainland and free zone?",
      ar: "ما الفرق بين البر الرئيسي والمنطقة الحرة؟",
    },
    a: {
      en: "Mainland (DET-licensed) lets you trade anywhere in the UAE without restrictions, win government contracts, and serve domestic customers directly. Free zones offer 100% foreign ownership and tax incentives but restrict you from billing UAE mainland customers without a special permit. For most service businesses targeting UAE customers, mainland is the right answer.",
      ar: "البر الرئيسي (المرخص من دائرة الاقتصاد) يتيح التجارة في كل أنحاء الإمارات بدون قيود، الفوز بعقود حكومية، وخدمة العملاء المحليين مباشرة. تقدم المناطق الحرة ملكية أجنبية 100% وحوافز ضريبية لكنها تقيد الفوترة لعملاء البر الرئيسي بدون تصريح خاص. لمعظم الأعمال الخدمية المستهدفة لعملاء الإمارات، البر الرئيسي هو الإجابة الصحيحة.",
    },
  },
  {
    category: "setup",
    q: {
      en: "How much does it cost to set up a Dubai mainland LLC?",
      ar: "كم تكلف تأسيس شركة ذ.م.م في دبي البر الرئيسي؟",
    },
    a: {
      en: "Total first-year costs typically range AED 25,000–50,000 across DET licence fees (AED 10,000–15,000), office and Ejari (AED 15,000–35,000), MOA notarisation (~AED 1,500), establishment card setup (AED 700–2,000), and PRO service fees. Government fees vary by activity; ZETUP PRO publishes a transparent breakdown.",
      ar: "إجمالي تكاليف السنة الأولى عادةً 25,000-50,000 درهم تشمل رسوم رخصة الدائرة (10,000-15,000)، المكتب وإيجاري (15,000-35,000)، توثيق العقد (~1,500)، إعداد بطاقة المنشأة (700-2,000)، ورسوم خدمات PRO. الرسوم الحكومية تختلف حسب النشاط؛ تنشر زيتب برو تفصيلًا شفافًا.",
    },
  },
  {
    category: "setup",
    q: {
      en: "Do I need a physical office to set up a mainland company?",
      ar: "هل أحتاج مكتبًا فعليًا لتأسيس شركة في البر الرئيسي؟",
    },
    a: {
      en: "Yes — DET requires a registered Ejari for every mainland LLC. However, smart-desk and serviced-office arrangements count, so you don't need a dedicated physical space from day one. Costs start around AED 12,000/year for compliant smart-desk options.",
      ar: "نعم — تطلب الدائرة إيجاري مسجل لكل شركة ذ.م.م في البر الرئيسي. لكن ترتيبات المكاتب الذكية والمكاتب المخدومة تُحتسب، لذا لا تحتاج لمساحة فعلية مخصصة من اليوم الأول. التكاليف تبدأ من حوالي 12,000 درهم سنويًا لخيارات المكاتب الذكية المتوافقة.",
    },
  },

  // ─── VISAS & RESIDENCY ─────────────────────────────────────────
  {
    category: "visas",
    q: {
      en: "How long does an employment visa take to process?",
      ar: "كم يستغرق معالجة تأشيرة العمل؟",
    },
    a: {
      en: "Standard employment visa processing is 5–10 working days from MOHRE work-permit approval to residency-visa stamp, assuming the worker is in the UAE on a visit or grace status. The full process — from contract signing to Emirates ID issuance — is typically 3–4 weeks.",
      ar: "معالجة تأشيرة العمل القياسية 5-10 أيام عمل من اعتماد تصريح العمل في الوزارة إلى ختم تأشيرة الإقامة. العملية الكاملة — من توقيع العقد إلى إصدار الهوية الإماراتية — عادةً 3-4 أسابيع.",
    },
  },
  {
    category: "visas",
    q: {
      en: "What's a Golden Visa and who's eligible?",
      ar: "ما هي التأشيرة الذهبية ومن يستحقها؟",
    },
    a: {
      en: "The Golden Visa is a 5- or 10-year UAE residency that doesn't require an employer sponsor. Eligible categories include real-estate investors (typically AED 2 million property), entrepreneurs with approved projects, scientists, top students, exceptional talents, and professionals meeting certain salary thresholds.",
      ar: "التأشيرة الذهبية هي إقامة إماراتية لمدة 5 أو 10 سنوات لا تتطلب كفيل صاحب عمل. الفئات المؤهلة تشمل المستثمرين العقاريين (عادةً عقار 2 مليون درهم)، رواد الأعمال بمشاريع معتمدة، العلماء، الطلاب المتفوقين، المواهب الاستثنائية، والمهنيين الذين يستوفون حدود راتب معينة.",
    },
  },
  {
    category: "visas",
    q: {
      en: "Can I sponsor my family on a UAE visa?",
      ar: "هل يمكنني كفالة عائلتي في الإمارات؟",
    },
    a: {
      en: "Yes. UAE residents — employees, investors, and Golden Visa holders — can sponsor spouses, unmarried children (under 18 for sons, any age for daughters), and parents under specific income conditions. Minimum salary thresholds vary by emirate; typically AED 4,000 + accommodation for a spouse, around AED 20,000 for parents.",
      ar: "نعم. يمكن للمقيمين في الإمارات — موظفين ومستثمرين وحاملي التأشيرة الذهبية — كفالة الأزواج والأطفال غير المتزوجين (دون 18 للأبناء، أي عمر للبنات) والوالدين بشروط دخل محددة. الحدود الدنيا للراتب تختلف حسب الإمارة؛ عادةً 4,000 درهم + سكن للزوج، حوالي 20,000 درهم للوالدين.",
    },
  },
  {
    category: "visas",
    q: {
      en: "What happens to my visa if I change employers?",
      ar: "ماذا يحدث لتأشيرتي إذا غيرت صاحب العمل؟",
    },
    a: {
      en: "Your old employer cancels your labour card and residency visa, and your new employer issues fresh ones. The technical term is 'visa transfer' but it's really a cancellation + re-issuance. There's typically a grace period (30 days) between cancellation and the new visa to handle the paperwork without leaving the country.",
      ar: "يلغي صاحب العمل القديم بطاقتك العمالية وتأشيرة إقامتك، ويصدر صاحب العمل الجديد جديدتين. المصطلح التقني 'نقل تأشيرة' لكنه فعليًا إلغاء + إعادة إصدار. عادةً هناك فترة سماح (30 يومًا) بين الإلغاء والتأشيرة الجديدة لمعالجة الأوراق دون مغادرة البلاد.",
    },
  },

  // ─── TRADE LICENCE & COMPLIANCE ────────────────────────────────
  {
    category: "licence",
    q: {
      en: "When do I need to renew my Dubai trade licence?",
      ar: "متى أحتاج لتجديد رخصتي التجارية في دبي؟",
    },
    a: {
      en: "Annually, on the anniversary of your initial issuance. DET sends reminders, but missing the deadline is costly: AED 2,000 fine on day one, AED 1,000/month thereafter, plus a freeze on every government transaction (visa renewals, Emirates IDs, hiring). Renew at least 30 days early.",
      ar: "سنويًا، في ذكرى إصدارك الأولي. ترسل الدائرة تذكيرات، لكن تفويت الموعد مكلف: غرامة 2,000 درهم في اليوم الأول، 1,000 درهم/شهر بعد ذلك، إضافة إلى تجميد كل المعاملات الحكومية. جدد قبل 30 يومًا على الأقل.",
    },
  },
  {
    category: "licence",
    q: {
      en: "What's an establishment card and why does my company need one?",
      ar: "ما هي بطاقة المنشأة ولماذا تحتاجها شركتي؟",
    },
    a: {
      en: "It's the master file MOHRE keeps on your company. Required to issue work permits, sign employment contracts, register on WPS, and file any labour transaction. Issued together with your trade licence, renewed annually, costs AED 700–2,000 per year.",
      ar: "هي الملف الرئيسي الذي تحتفظ به الوزارة عن شركتك. مطلوبة لإصدار تصاريح العمل وتوقيع عقود التوظيف والتسجيل في نظام حماية الأجور وتقديم أي معاملة عمالية. تُصدر مع رخصتك التجارية، تجدد سنويًا، تكلف 700-2,000 درهم سنويًا.",
    },
  },
  {
    category: "licence",
    q: {
      en: "Do I need to register on goAML?",
      ar: "هل أحتاج للتسجيل في goAML؟",
    },
    a: {
      en: "If your company is a Designated Non-Financial Business or Profession (DNFBP) — real-estate broker, lawyer, accountant, gold dealer, corporate-services provider — yes. Register on goAML, designate a Money Laundering Reporting Officer (MLRO), and file Suspicious Transaction Reports when red flags appear. Non-registration fines start at AED 50,000.",
      ar: "إذا كانت شركتك من الأعمال غير المالية المحددة — وسيط عقارات، محامي، محاسب، تاجر ذهب، مزود خدمات مؤسسية — نعم. سجل في goAML، عيّن مسؤولًا للإبلاغ عن غسل الأموال، وقدم تقارير المعاملات المشبوهة عند ظهور إشارات تحذير. غرامات عدم التسجيل تبدأ بـ 50,000 درهم.",
    },
  },

  // ─── EMIRATISATION ─────────────────────────────────────────────
  {
    category: "emiratisation",
    q: {
      en: "What are the 2026 Emiratisation requirements?",
      ar: "ما هي متطلبات التوطين 2026؟",
    },
    a: {
      en: "Companies with 50+ skilled employees must reach 10% Emirati skilled workforce by December 2026. Smaller companies (20–49 employees) have category-specific targets introduced in 2024. Non-compliance triggers AED 9,000/month fines per missing role and a freeze on new work permits.",
      ar: "الشركات التي لديها 50+ موظفًا ماهرًا يجب أن تصل إلى 10% من العمالة الإماراتية الماهرة بحلول ديسمبر 2026. الشركات الأصغر (20-49 موظفًا) لديها أهداف خاصة بالفئة قُدمت في 2024. عدم الامتثال يستوجب غرامات 9,000 درهم/شهر لكل وظيفة شاغرة وتجميد تصاريح العمل الجديدة.",
    },
  },
  {
    category: "emiratisation",
    q: {
      en: "What's Nafis and how does it help my company?",
      ar: "ما هو نافس وكيف يساعد شركتي؟",
    },
    a: {
      en: "Nafis is the federal Emiratisation incentive programme. It pays salary subsidies (up to AED 5,000–8,000/month for the first 5 years), child allowances, and pension contributions to private-sector employers who hire UAE nationals. Reduces the effective cost of hiring an Emirati significantly.",
      ar: "نافس هو برنامج حوافز التوطين الاتحادي. يدفع دعم الرواتب (حتى 5,000-8,000 درهم/شهر للسنوات الخمس الأولى)، بدلات الأطفال، ومساهمات التقاعد لأصحاب العمل في القطاع الخاص الذين يوظفون المواطنين. يقلل التكلفة الفعلية لتوظيف مواطن إماراتي بشكل كبير.",
    },
  },
  {
    category: "emiratisation",
    q: {
      en: "How does MOHRE count Emirati employees for compliance?",
      ar: "كيف تحتسب الوزارة الموظفين المواطنين للامتثال؟",
    },
    a: {
      en: "An Emirati employee 'counts' if they're a UAE national in a job classified under MOHRE's 9 skill categories (managers, professionals, technicians, etc.), on a registered employment contract, paid through WPS, and earning at least AED 4,000/month. Casual or part-time arrangements don't count.",
      ar: "يُحتسب الموظف الإماراتي إذا كان مواطنًا في وظيفة مصنفة ضمن إحدى فئات المهارات التسع للوزارة، على عقد عمل مسجل، يُدفع راتبه عبر نظام حماية الأجور، ويكسب 4,000 درهم/شهر على الأقل. الترتيبات المؤقتة أو بدوام جزئي لا تُحتسب.",
    },
  },

  // ─── TAX ───────────────────────────────────────────────────────
  {
    category: "tax",
    q: {
      en: "When do I need to register for VAT?",
      ar: "متى أحتاج للتسجيل في ضريبة القيمة المضافة؟",
    },
    a: {
      en: "Mandatory at AED 375,000 rolling 12-month taxable turnover; voluntary above AED 187,500. Once registered, you receive a TRN, charge 5% VAT on most sales, and file quarterly returns via EmaraTax. Failure to register on time is AED 10,000.",
      ar: "إلزامي عند 375,000 درهم دوران سنوي خاضع للضريبة؛ طوعي فوق 187,500 درهم. بمجرد التسجيل، تتلقى رقم تسجيل ضريبي، تفرض ضريبة 5% على معظم المبيعات، وتقدم إقرارات ربع سنوية عبر إمارا تاكس. عدم التسجيل في الوقت المحدد 10,000 درهم.",
    },
  },
  {
    category: "tax",
    q: {
      en: "Do I have to file corporate tax even if my company makes no profit?",
      ar: "هل يجب تقديم إقرار ضريبة الشركات حتى لو لم تحقق شركتي ربحًا؟",
    },
    a: {
      en: "Yes. Every UAE taxable person — every company, branch, partnership, even loss-making ones — must register with the FTA and file an annual corporate-tax return via EmaraTax. Returns are due 9 months after fiscal year-end. Late filings start at AED 1,000.",
      ar: "نعم. كل شخص خاضع للضريبة في الإمارات — كل شركة وفرع وشراكة، حتى الخاسرة — يجب أن يسجل في الهيئة الاتحادية ويقدم إقرار ضريبة الشركات السنوي عبر إمارا تاكس. الإقرارات مستحقة بعد 9 أشهر من نهاية السنة المالية. التقديمات المتأخرة تبدأ بـ 1,000 درهم.",
    },
  },
  {
    category: "tax",
    q: {
      en: "Is Small Business Relief still available?",
      ar: "هل لا يزال إعفاء الأعمال الصغيرة متاحًا؟",
    },
    a: {
      en: "Yes, until December 2026. Companies with revenue under AED 3 million can elect to be treated as having zero taxable income. After SBR ends, the standard 0% bracket (up to AED 375,000 of taxable income) applies, with 9% on everything above.",
      ar: "نعم، حتى ديسمبر 2026. الشركات بإيرادات أقل من 3 مليون درهم يمكنها اختيار معاملتها كصفر دخل خاضع للضريبة. بعد انتهاء الإعفاء، يطبق الشطر القياسي 0% (حتى 375,000 درهم من الدخل الخاضع للضريبة)، مع 9% على كل ما يتجاوز.",
    },
  },
  {
    category: "tax",
    q: {
      en: "How does corporate tax work for free-zone companies?",
      ar: "كيف تعمل ضريبة الشركات لشركات المناطق الحرة؟",
    },
    a: {
      en: "Qualifying free-zone income (free-zone-to-free-zone, exports, certain qualifying activities) gets 0% corporate tax. Non-qualifying free-zone income (e.g., direct billing to UAE mainland customers above AED 5 million revenue threshold) is taxed at 9%. Filing is still mandatory regardless of activity mix.",
      ar: "دخل المنطقة الحرة المؤهل (من منطقة حرة إلى منطقة حرة، التصدير، أنشطة مؤهلة معينة) يحصل على ضريبة شركات 0%. الدخل غير المؤهل (مثل الفوترة المباشرة لعملاء البر الرئيسي فوق حد 5 مليون درهم) خاضع للضريبة بنسبة 9%. التقديم إلزامي بغض النظر عن مزيج الأنشطة.",
    },
  },

  // ─── PRICING & ENGAGEMENT (Zetup-specific) ─────────────────────
  {
    category: "pricing",
    q: {
      en: "How does ZETUP PRO's pricing work?",
      ar: "كيف يعمل تسعير زيتب برو؟",
    },
    a: {
      en: "Sliding-scale monthly retainer based on employee count: from AED 839/month for companies with up to 5 employees, scaling to AED 14,008/month for 205-employee operations. Government fees are itemised separately at actual cost — never marked up. Use the calculator on /pricing for your exact rate.",
      ar: "راتب شهري متدرج حسب عدد الموظفين: من 839 درهم/شهر للشركات حتى 5 موظفين، يصل إلى 14,008 درهم/شهر لعمليات تضم 205 موظفًا. الرسوم الحكومية مفصلة بشكل منفصل بالتكلفة الفعلية — بدون أي زيادة أبدًا. استخدم الحاسبة في /pricing لمعرفة سعرك الدقيق.",
    },
  },
  {
    category: "pricing",
    q: {
      en: "Is there a minimum contract length?",
      ar: "هل هناك حد أدنى لمدة العقد؟",
    },
    a: {
      en: "Our standard agreement is 12 months with a 30-day termination clause. You can leave with 30 days' notice — no lock-in, no early-termination fees. We earn your business each month through performance, not contractual obligation.",
      ar: "اتفاقيتنا القياسية 12 شهرًا مع شرط إنهاء 30 يومًا. يمكنك المغادرة بإشعار 30 يومًا — بدون قيد، بدون رسوم إنهاء مبكر. نكسب ولاءك كل شهر بالأداء، وليس بالالتزام التعاقدي.",
    },
  },
  {
    category: "pricing",
    q: {
      en: "Can I switch to ZETUP PRO from my current provider?",
      ar: "هل يمكنني التحول إلى زيتب برو من مزودي الحالي؟",
    },
    a: {
      en: "Yes, and it's typically painless. We manage the full handover: contact your current provider, transfer all documents, audit active transactions, and ensure zero compliance gaps. Most transitions are completed within 7 business days. See our /switch-pro page for the full process.",
      ar: "نعم، وعادةً ما يكون بدون ألم. نحن ندير عملية التسليم الكاملة: التواصل مع مزودك الحالي، نقل كل الوثائق، تدقيق المعاملات النشطة، وضمان عدم وجود فجوات امتثال. معظم التحولات تكتمل خلال 7 أيام عمل. شاهد صفحة /switch-pro للعملية الكاملة.",
    },
  },
  {
    category: "pricing",
    q: {
      en: "What's a free PRO Health Check?",
      ar: "ما هو فحص PRO الصحي المجاني؟",
    },
    a: {
      en: "A free 30-minute call where we audit your current PRO setup: visa expiry tracking, Emiratisation status, trade-licence renewal cadence, government-fee transparency, and any compliance gaps. You leave with a clear written summary — no obligation to engage with us.",
      ar: "مكالمة مجانية لمدة 30 دقيقة حيث نقوم بتدقيق إعداد PRO الحالي لديك: متابعة انتهاء التأشيرات، حالة التوطين، إيقاع تجديد الرخصة التجارية، شفافية الرسوم الحكومية، وأي فجوات امتثال. تغادر بملخص مكتوب واضح — بدون التزام بالتعامل معنا.",
    },
  },
  {
    category: "pricing",
    q: {
      en: "Do you handle free-zone companies?",
      ar: "هل تتعاملون مع شركات المناطق الحرة؟",
    },
    a: {
      en: "Our core focus is Dubai mainland LLCs — our retainer packages, processes, and government relationships are optimised for them. We can assist free-zone entities with specific tasks (visa processing, document attestation, certain compliance items) but not as the primary engagement.",
      ar: "تركيزنا الأساسي على شركات ذ.م.م في دبي البر الرئيسي — باقات الراتب والعمليات والعلاقات الحكومية محسنة لها. يمكننا مساعدة كيانات المناطق الحرة في مهام محددة (معالجة التأشيرات، توثيق المستندات، بعض بنود الامتثال) لكن ليس كتعامل أساسي.",
    },
  },
];

export function faqsByCategory(category: FaqCategoryKey) {
  return FAQS.filter((f) => f.category === category);
}

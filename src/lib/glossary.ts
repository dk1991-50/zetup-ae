/**
 * Glossary entries for UAE / Dubai bureaucracy and business-setup terms.
 *
 * Each entry powers:
 *   - /[locale]/glossary (hub page, ItemListSchema)
 *   - /[locale]/glossary/[slug] (detail page, DefinedTerm schema)
 *
 * Authoring tips:
 *   - shortDef: 1 sentence, optimized as a direct answer.
 *   - longDef: 2–4 paragraphs, more depth, examples, what to actually do.
 *   - alsoKnownAs: alternate spellings or English / Arabic variants.
 *   - related: glossary slugs to cross-link.
 *   - relatedService: optional /services/{slug} for cross-linking.
 *   - relatedGuide: optional /guides/{slug} for cross-linking.
 */

export interface GlossaryEntry {
  slug: string;
  term: { en: string; ar: string };
  category:
    | "government-body"
    | "service-center"
    | "document"
    | "concept"
    | "fee"
    | "visa";
  alsoKnownAs?: string[];
  shortDef: { en: string; ar: string };
  longDef: { en: string[]; ar: string[] };
  related?: string[];
  relatedService?: string;
  relatedGuide?: string;
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    slug: "tasheel",
    term: { en: "Tasheel", ar: "تسهيل" },
    category: "service-center",
    alsoKnownAs: ["Tas-heel", "Tasheel center", "MOHRE Tasheel"],
    shortDef: {
      en: "Tasheel is the network of MOHRE-authorised service centres in the UAE that processes labour-related transactions on behalf of employers — work permits, employment visa applications, contract attestation, and Wage Protection System registrations.",
      ar: "تسهيل هو شبكة مراكز الخدمات المعتمدة من وزارة الموارد البشرية والتوطين في الإمارات، وتعالج جميع المعاملات المتعلقة بالعمالة نيابة عن أصحاب العمل — تصاريح العمل، تأشيرات العمل، توثيق العقود، وتسجيل نظام حماية الأجور.",
    },
    longDef: {
      en: [
        "Tasheel was launched by MOHRE (the Ministry of Human Resources and Emiratisation) to take labour transactions out of MOHRE offices and into private service centres. Today, almost every action an employer takes regarding their workers — applying for a work permit, signing an employment contract under MOHRE's standard form, renewing a labour card, registering for the Wage Protection System (WPS), or filing a labour complaint — flows through a Tasheel centre.",
        "PRO companies submit the bulk of their employment-related work through Tasheel. As an employer you can also walk into a Tasheel centre yourself, but the documentation requirements are strict and rejections are common for paperwork that doesn't match MOHRE's exact specifications.",
        "Tasheel typing fees are typically AED 100–300 per transaction on top of any government fees. ZETUP PRO handles all Tasheel transactions as part of its retainer with no markup on government fees.",
      ],
      ar: [
        "أطلقت وزارة الموارد البشرية والتوطين خدمة تسهيل لنقل معاملات العمالة من مكاتب الوزارة إلى مراكز خدمة خاصة. واليوم تتم تقريبًا كل المعاملات التي يقوم بها صاحب العمل مع موظفيه عبر تسهيل: طلب تصريح عمل، توقيع عقد عمل وفق نموذج الوزارة، تجديد البطاقة العمالية، التسجيل في نظام حماية الأجور، أو تقديم شكوى عمالية.",
        "تقوم شركات PRO بتقديم معظم المعاملات الخاصة بالعمالة عبر تسهيل. يمكن لصاحب العمل أيضًا التوجه بنفسه إلى مركز تسهيل، لكن متطلبات الوثائق صارمة والرفض شائع لأي مستندات لا تتطابق مع معايير الوزارة.",
        "تتراوح رسوم الطباعة في تسهيل عادةً بين 100 و300 درهم لكل معاملة بالإضافة إلى الرسوم الحكومية. تتعامل زيتب برو مع جميع معاملات تسهيل ضمن الباقة الشهرية بدون أي زيادة على الرسوم الحكومية.",
      ],
    },
    related: ["mohre", "amer", "wps", "labour-card"],
    relatedService: "pro-services",
  },
  {
    slug: "amer",
    term: { en: "Amer", ar: "عامر" },
    category: "service-center",
    alsoKnownAs: ["Amer center", "GDRFA Amer", "Dubai Amer"],
    shortDef: {
      en: "Amer is the GDRFA-authorised service-centre network in Dubai that processes residency, visa, and Emirates ID transactions for sponsors, employees, dependents, and investors.",
      ar: "عامر هي شبكة مراكز الخدمات المعتمدة من الإدارة العامة للإقامة وشؤون الأجانب في دبي، وتعالج معاملات الإقامة والتأشيرات والهوية الإماراتية للكفلاء والموظفين والمعالين والمستثمرين.",
    },
    longDef: {
      en: [
        "Amer (the brand of Dubai's GDRFA service centres) is to residency what Tasheel is to labour: it's the front door for almost every transaction involving a residency visa or Emirates ID stamp. Amer centres handle entry permits, residency visa stamping, visa cancellations, dependent visas, status changes, and replacement of lost residency stamps.",
        "Most Amer transactions require an authorised typist to submit on your behalf, and many require fingerprint and medical-fitness steps that have to be coordinated with separate appointment systems. Amer centres operate across Dubai and have varying speeds — choosing the right one for your transaction is part of what experienced PROs do.",
        "Dubai Amer is operated by GDRFA Dubai. Other emirates have their own equivalents under ICP (Federal Authority for Identity, Citizenship, Customs and Ports Security).",
      ],
      ar: [
        "عامر هي شبكة مراكز خدمة الإدارة العامة للإقامة في دبي، وتقوم بدور مماثل لتسهيل ولكن في مجال الإقامة. تعالج مراكز عامر تأشيرات الدخول وختم الإقامة وإلغاء التأشيرات وتأشيرات المعالين وتغيير الوضع وبدل الفاقد.",
        "تتطلب معظم معاملات عامر تقديمها عبر طابع معتمد، وتشمل العديد منها خطوات بصمة وفحص طبي تحتاج لتنسيق مع أنظمة مواعيد منفصلة. لمراكز عامر سرعات مختلفة — واختيار المركز المناسب لكل معاملة جزء من خبرة شركات PRO.",
        "عامر دبي تابعة للإدارة العامة للإقامة في دبي. تمتلك الإمارات الأخرى مكافئات تابعة لهيئة الهوية والجنسية والمنافذ الاتحادية.",
      ],
    },
    related: ["gdrfa", "emirates-id", "tasheel"],
    relatedService: "visa-services",
  },
  {
    slug: "mohre",
    term: { en: "MOHRE", ar: "وزارة الموارد البشرية والتوطين" },
    category: "government-body",
    alsoKnownAs: ["Ministry of Labour", "MoHRE", "MOL"],
    shortDef: {
      en: "MOHRE — the Ministry of Human Resources and Emiratisation — is the federal UAE authority that regulates labour relations, work permits, employment contracts, the Wage Protection System, and Emiratisation quotas.",
      ar: "وزارة الموارد البشرية والتوطين هي الجهة الاتحادية في الإمارات المسؤولة عن تنظيم علاقات العمل وتصاريح العمل وعقود التوظيف ونظام حماية الأجور وحصص التوطين.",
    },
    longDef: {
      en: [
        "MOHRE (formerly the Ministry of Labour, MoL) sets and enforces the rules that govern almost every aspect of the employer-employee relationship in the UAE private sector. Every work permit, employment contract, end-of-service settlement, and labour complaint sits under MOHRE's authority.",
        "Since 2022, MOHRE has been driving Emiratisation — the policy of progressively raising the share of UAE-national employees at private-sector companies. Companies with 50+ employees must reach 10% Emirati skilled workforce by December 2026, and non-compliance triggers fines of AED 9,000 per month per missing role.",
        "MOHRE's day-to-day public touchpoint is the Tasheel network of service centres. Its formal app (MOHRE app) provides employer self-service for some transactions but the bulk of submissions still go through PRO companies.",
      ],
      ar: [
        "وزارة الموارد البشرية والتوطين (المعروفة سابقًا بوزارة العمل) تضع وتطبق القواعد التي تحكم تقريبًا كل جانب من علاقة صاحب العمل بالموظف في القطاع الخاص في الإمارات. كل تصريح عمل وعقد توظيف وتسوية نهاية خدمة وشكوى عمالية يخضع لسلطة الوزارة.",
        "منذ 2022، تقود الوزارة سياسة التوطين — رفع نسبة المواطنين الإماراتيين في القطاع الخاص تدريجيًا. الشركات التي لديها 50+ موظف يجب أن تصل إلى 10% من الموظفين المواطنين بحلول ديسمبر 2026، وعدم الالتزام يؤدي إلى غرامة 9,000 درهم شهريًا عن كل وظيفة شاغرة.",
        "تظهر الوزارة للجمهور يوميًا عبر شبكة مراكز تسهيل. توفر تطبيق MOHRE خدمة ذاتية لبعض المعاملات، لكن معظم التقديمات تتم عبر شركات PRO.",
      ],
    },
    related: ["tasheel", "wps", "emiratisation", "nafis"],
    relatedService: "emiratisation",
    relatedGuide: "emiratisation-compliance-2026",
  },
  {
    slug: "det",
    term: { en: "DET (Dubai Department of Economy and Tourism)", ar: "دائرة الاقتصاد والسياحة في دبي" },
    category: "government-body",
    alsoKnownAs: ["DED", "Dubai DED", "Department of Economic Development"],
    shortDef: {
      en: "DET — formerly DED — is the Dubai government department that issues mainland trade licences, regulates business activities, and operates the commercial registry for Dubai mainland companies.",
      ar: "دائرة الاقتصاد والسياحة في دبي (المعروفة سابقًا بدائرة التنمية الاقتصادية) هي الجهة الحكومية التي تُصدر رخص المهن للبر الرئيسي وتنظم الأنشطة التجارية وتدير السجل التجاري لشركات دبي البر الرئيسي.",
    },
    longDef: {
      en: [
        "DET (Dubai Department of Economy and Tourism) is the licensing authority for any company operating on Dubai mainland. If your company is not in a free zone, your trade licence comes from DET, your business activities are listed on its commercial registry, and your annual renewal happens with DET.",
        "DET was rebranded from DED (Department of Economic Development) in 2022 when the Dubai government merged economic development and tourism functions. The licensing functions are unchanged, but a lot of older paperwork still says DED.",
        "DET licences specify exactly which business activities your company can perform. Adding or amending activities requires a DET application, sometimes with approvals from secondary departments (e.g., Dubai Municipality for restaurants, KHDA for educational businesses).",
      ],
      ar: [
        "دائرة الاقتصاد والسياحة في دبي هي الجهة المُرخِّصة لأي شركة تعمل في دبي البر الرئيسي. إذا لم تكن شركتك في منطقة حرة، فإن رخصتك التجارية صادرة عن الدائرة، وأنشطتك مدرجة في سجلها التجاري، ويتم تجديدها السنوي معها.",
        "تم تغيير اسم الدائرة من دائرة التنمية الاقتصادية إلى دائرة الاقتصاد والسياحة في 2022 عندما دمجت حكومة دبي بين وظائف التنمية الاقتصادية والسياحة. وظائف الترخيص لم تتغير، لكن الكثير من الأوراق القديمة لا تزال تذكر اسم DED.",
        "تحدد رخص الدائرة الأنشطة التجارية التي يمكن لشركتك القيام بها. إضافة أو تعديل الأنشطة يتطلب طلبًا للدائرة، وأحيانًا موافقات من إدارات ثانوية (بلدية دبي للمطاعم، KHDA للأعمال التعليمية).",
      ],
    },
    related: ["trade-license", "mainland-company", "ejari"],
    relatedService: "company-formation",
    relatedGuide: "dubai-mainland-company-formation",
  },
  {
    slug: "gdrfa",
    term: { en: "GDRFA", ar: "الإدارة العامة للإقامة وشؤون الأجانب" },
    category: "government-body",
    alsoKnownAs: ["GDRFA Dubai", "Immigration Department", "DNRD"],
    shortDef: {
      en: "GDRFA — General Directorate of Residency and Foreign Affairs — is the Dubai immigration authority responsible for residency visas, entry permits, Emirates ID issuance, and border control for the emirate.",
      ar: "الإدارة العامة للإقامة وشؤون الأجانب هي السلطة المعنية بشؤون الهجرة في دبي، وتتولى إصدار تأشيرات الإقامة وتصاريح الدخول والهوية الإماراتية ومراقبة الحدود في الإمارة.",
    },
    longDef: {
      en: [
        "GDRFA Dubai handles every step of the residency lifecycle for anyone living, working, or visiting through Dubai's borders: tourist visas, entry permits, residency-visa stamping, visa cancellation, family-sponsor permissions, and Emirates ID issuance for residents.",
        "GDRFA's public-facing service-centre network is Amer. Most transactions go through an Amer typing centre that submits to GDRFA on your behalf. Some procedures (medical fitness, biometrics) require separate visits to ICP-affiliated centres.",
        "Each emirate has its own residency authority — GDRFA Dubai, GDRFA Abu Dhabi, etc. — and the federal ICP coordinates standards across them. For most Dubai-based residency questions, GDRFA Dubai is the relevant authority.",
      ],
      ar: [
        "تتولى الإدارة العامة للإقامة في دبي كل مرحلة من دورة الإقامة لأي شخص يعيش أو يعمل أو يزور عبر حدود دبي: تأشيرات سياحية، تصاريح دخول، ختم تأشيرة الإقامة، إلغاء التأشيرات، أذونات الكفالة العائلية، وإصدار الهوية الإماراتية للمقيمين.",
        "شبكة مراكز خدمة الإدارة العامة للإقامة هي عامر. تتم معظم المعاملات عبر مركز طباعة عامر يقدم نيابة عنك. بعض الإجراءات (الفحص الطبي، البصمات) تحتاج لزيارات منفصلة لمراكز تابعة لهيئة الهوية والجنسية والمنافذ الاتحادية.",
        "كل إمارة لديها سلطة إقامة خاصة بها، وتنسق هيئة الهوية والجنسية الاتحادية المعايير بينها. لمعظم أسئلة الإقامة في دبي، الإدارة العامة للإقامة في دبي هي الجهة المعنية.",
      ],
    },
    related: ["amer", "emirates-id", "employment-visa"],
    relatedService: "visa-services",
    relatedGuide: "uae-visa-processing",
  },
  {
    slug: "emirates-id",
    term: { en: "Emirates ID", ar: "الهوية الإماراتية" },
    category: "document",
    alsoKnownAs: ["EID", "ID card", "Emirati ID"],
    shortDef: {
      en: "The Emirates ID is the mandatory identity card issued by ICP to every UAE resident. It carries a unique 15-digit number and is required for almost every government service, banking transaction, and tenancy contract.",
      ar: "الهوية الإماراتية هي بطاقة الهوية الإلزامية التي تصدرها هيئة الهوية والجنسية لكل مقيم في الإمارات، وتحمل رقمًا مكونًا من 15 خانة، وتُطلب في كل خدمة حكومية ومعاملة بنكية وعقد إيجار تقريبًا.",
    },
    longDef: {
      en: [
        "Every UAE resident — citizen, expat employee, dependent, or investor — must hold a valid Emirates ID. It is the single most important identity document in the country and is requested in countless contexts: opening a bank account, signing an Ejari tenancy, paying for healthcare, accessing a government service portal.",
        "Emirates IDs are issued by ICP (Federal Authority for Identity, Citizenship, Customs and Ports Security). The standard validity is tied to your residency visa: 2 or 3 years for most residents, 5 or 10 years for Golden Visa holders. Renewal must be initiated within 30 days of expiry.",
        "Cost ranges from AED 100–370 per ID depending on validity, plus typing-centre fees. Lost or damaged cards trigger AED 300+ replacement fees. ZETUP PRO tracks every Emirates ID in your company and renews proactively to avoid the AED 1,000 late-renewal fine that kicks in after 30 days.",
      ],
      ar: [
        "يجب أن يحمل كل مقيم في الإمارات هوية إماراتية سارية، سواء كان مواطنًا أو موظفًا مغتربًا أو معالًا أو مستثمرًا. هي وثيقة الهوية الأهم في الدولة، وتُطلب في عدد لا يحصى من الحالات: فتح حساب بنكي، توقيع عقد إيجار، الرعاية الصحية، الوصول إلى البوابات الحكومية.",
        "تصدر الهوية الإماراتية عن هيئة الهوية والجنسية والمنافذ الاتحادية. الصلاحية المعتادة مرتبطة بتأشيرة الإقامة: سنتان أو ثلاث لمعظم المقيمين، خمس أو عشر سنوات لحاملي التأشيرة الذهبية. يجب البدء في التجديد خلال 30 يومًا من انتهاء الصلاحية.",
        "تتراوح التكلفة بين 100 و370 درهمًا لكل بطاقة حسب الصلاحية، إضافة إلى رسوم مركز الطباعة. يؤدي فقدان أو تلف البطاقة إلى رسوم استبدال تتجاوز 300 درهم. تتابع زيتب برو كل هوية إماراتية في شركتك وتجددها بشكل استباقي لتفادي غرامة التأخير 1,000 درهم بعد 30 يومًا.",
      ],
    },
    related: ["gdrfa", "amer", "icp"],
    relatedService: "visa-services",
  },
  {
    slug: "ejari",
    term: { en: "Ejari", ar: "إيجاري" },
    category: "document",
    alsoKnownAs: ["Ejari registration", "DLD Ejari"],
    shortDef: {
      en: "Ejari is the Dubai Land Department's mandatory tenancy registration system. Every residential or commercial lease in Dubai must be registered on Ejari for the contract to be legally enforceable and for the tenant to access utilities, visas, and DEWA.",
      ar: "إيجاري هو نظام تسجيل عقود الإيجار الإلزامي في دائرة الأراضي والأملاك بدبي. كل عقد إيجار سكني أو تجاري في دبي يجب تسجيله في إيجاري ليكون قابلًا للتنفيذ قانونيًا وليتمكن المستأجر من الوصول إلى المرافق والتأشيرات وديوا.",
    },
    longDef: {
      en: [
        "Ejari (Arabic for 'my rent') is the Dubai Land Department's electronic registry for all rental agreements within the emirate. Without an Ejari certificate, a Dubai tenant cannot connect DEWA (electricity and water), open a phone or internet account, register children in school, or process residency visas tied to that address.",
        "Companies need Ejari registration for their office or commercial space as part of trade-licence renewal — DET will not renew without a valid Ejari. Establishment cards (the company's master labour file with MOHRE) also reference the Ejari address.",
        "Standard Ejari registration costs around AED 220 (DLD fees + typing centre + knowledge fees). Renewals must be filed annually. ZETUP PRO handles Ejari registration and renewal as part of trade-licence-renewal services.",
      ],
      ar: [
        "إيجاري (تعني 'إيجاري' بالعربية) هو السجل الإلكتروني التابع لدائرة الأراضي والأملاك في دبي لجميع عقود الإيجار. بدون شهادة إيجاري، لا يستطيع المستأجر في دبي توصيل ديوا (الكهرباء والماء)، أو فتح حساب هاتف أو إنترنت، أو تسجيل الأطفال في المدارس، أو معالجة تأشيرات الإقامة المرتبطة بهذا العنوان.",
        "تحتاج الشركات إلى تسجيل إيجاري لمكتبها أو مساحتها التجارية كجزء من تجديد الرخصة التجارية — لن تجدد دائرة الاقتصاد بدون إيجاري صالح. كما تشير بطاقات المنشأة (ملف العمالة الرئيسي للشركة لدى الوزارة) إلى عنوان إيجاري.",
        "تكلفة تسجيل إيجاري القياسية حوالي 220 درهمًا (رسوم الدائرة + مركز الطباعة + رسوم المعرفة). يجب تجديده سنويًا. تتولى زيتب برو تسجيل وتجديد إيجاري كجزء من خدمات تجديد الرخصة التجارية.",
      ],
    },
    related: ["det", "trade-license", "establishment-card"],
    relatedService: "trade-license-renewal",
  },
  {
    slug: "trade-license",
    term: { en: "Trade Licence", ar: "الرخصة التجارية" },
    category: "document",
    alsoKnownAs: ["Trade License", "Commercial Licence", "DET Licence"],
    shortDef: {
      en: "A trade licence is the official permit issued by DET (for mainland) or a free-zone authority that allows a company to legally conduct business activities in Dubai. It must be renewed annually and lists every approved activity.",
      ar: "الرخصة التجارية هي التصريح الرسمي الذي تُصدره دائرة الاقتصاد (للبر الرئيسي) أو هيئة المنطقة الحرة، وتسمح للشركة بممارسة الأنشطة التجارية في دبي بشكل قانوني. يجب تجديدها سنويًا وتُدرج كل الأنشطة المعتمدة.",
    },
    longDef: {
      en: [
        "Every company in Dubai operates under a trade licence — there is no informal trading. The licence is issued for a specific entity (e.g., a mainland LLC) and lists each business activity the company can perform, drawn from DET's master activity catalogue. Trading outside your licensed activities is grounds for fines and licence cancellation.",
        "Mainland trade licences typically cost AED 10,000–15,000 per year in government fees, depending on activities and location. Free-zone licences vary widely by zone. Annual renewal involves verifying tenancy (Ejari), establishment-card renewal with MOHRE, and any activity-specific approvals.",
        "Late renewal triggers an immediate AED 2,000 fine, then AED 1,000 per month thereafter, plus business interruption (you can't process visas or government transactions on an expired licence). ZETUP PRO sends 60-day advance reminders to clients and manages the full renewal process.",
      ],
      ar: [
        "كل شركة في دبي تعمل بموجب رخصة تجارية — لا توجد تجارة غير رسمية. تصدر الرخصة لكيان محدد (مثل ذ.م.م في البر الرئيسي) وتدرج كل نشاط تجاري يمكن للشركة القيام به، مستمدًا من كتالوج الأنشطة الرئيسي للدائرة. التجارة خارج الأنشطة المرخصة تستوجب غرامات وإلغاء الرخصة.",
        "تكلف رخص البر الرئيسي عادةً 10,000-15,000 درهم سنويًا في الرسوم الحكومية، حسب الأنشطة والموقع. تتفاوت رخص المناطق الحرة حسب المنطقة. التجديد السنوي يشمل التحقق من إيجاري وتجديد بطاقة المنشأة لدى الوزارة وأي موافقات خاصة بالنشاط.",
        "التجديد المتأخر يؤدي إلى غرامة فورية 2,000 درهم، ثم 1,000 درهم شهريًا بعد ذلك، إضافة إلى توقف الأعمال (لا يمكنك معالجة التأشيرات أو المعاملات الحكومية برخصة منتهية). ترسل زيتب برو تذكيرات قبل 60 يومًا للعملاء وتدير عملية التجديد الكاملة.",
      ],
    },
    related: ["det", "ejari", "establishment-card", "mainland-company"],
    relatedService: "trade-license-renewal",
  },
  {
    slug: "establishment-card",
    term: { en: "Establishment Card", ar: "بطاقة المنشأة" },
    category: "document",
    alsoKnownAs: ["Establishment Card MOHRE", "Labour Establishment Card"],
    shortDef: {
      en: "The Establishment Card is the master file MOHRE keeps on every UAE company that employs workers. Its number is required to issue work permits, register on the Wage Protection System, and submit any labour transaction.",
      ar: "بطاقة المنشأة هي الملف الرئيسي الذي تحتفظ به وزارة الموارد البشرية والتوطين عن كل شركة إماراتية تشغّل عمالًا. رقمها مطلوب لإصدار تصاريح العمل والتسجيل في نظام حماية الأجور وتقديم أي معاملة عمالية.",
    },
    longDef: {
      en: [
        "When a Dubai company hires its first employee, MOHRE creates an Establishment Card for it. This card is the employer-side counterpart to a worker's labour card: it identifies the company in MOHRE's systems, links to its trade licence, and is the prerequisite for every subsequent work-permit, contract, and WPS action.",
        "The card carries an annual renewal fee of approximately AED 700–2,000 depending on company type and worker count. It must stay aligned with the trade licence: if the trade licence expires, the establishment card cannot be used; if the company changes address (Ejari), MOHRE must be updated.",
        "Forgetting to renew the establishment card blocks every labour transaction — visa renewals, new hires, employment cancellations. ZETUP PRO tracks establishment card validity across all clients and renews alongside the trade licence to keep MOHRE access uninterrupted.",
      ],
      ar: [
        "عند تعيين أول موظف في شركة دبي، تنشئ الوزارة بطاقة منشأة لها. هذه البطاقة هي المقابل من جانب صاحب العمل للبطاقة العمالية للعامل: تحدد الشركة في أنظمة الوزارة، وترتبط برخصتها التجارية، وهي شرط مسبق لكل تصريح عمل وعقد ومعاملة نظام حماية الأجور لاحقًا.",
        "تحمل البطاقة رسم تجديد سنوي يتراوح بين 700 و2,000 درهم حسب نوع الشركة وعدد العمال. يجب أن تبقى متسقة مع الرخصة التجارية: إذا انتهت الرخصة، لا يمكن استخدام بطاقة المنشأة. وإذا غيرت الشركة عنوانها (إيجاري)، يجب تحديث الوزارة.",
        "نسيان تجديد بطاقة المنشأة يوقف كل المعاملات العمالية — تجديد التأشيرات، التعيينات الجديدة، إلغاء التوظيف. تتابع زيتب برو صلاحية بطاقة المنشأة لجميع العملاء وتجددها بالتوازي مع الرخصة التجارية لإبقاء الوصول إلى الوزارة دون انقطاع.",
      ],
    },
    related: ["mohre", "trade-license", "ejari", "tasheel"],
    relatedService: "trade-license-renewal",
  },
  {
    slug: "labour-card",
    term: { en: "Labour Card", ar: "البطاقة العمالية" },
    category: "document",
    alsoKnownAs: ["Work Permit Card", "MOHRE Card"],
    shortDef: {
      en: "The Labour Card (also called a work permit card) is the employee-side document issued by MOHRE that legally entitles a person to work for a specific UAE employer in a specific role.",
      ar: "البطاقة العمالية (أو بطاقة تصريح العمل) هي الوثيقة من جانب الموظف التي تُصدرها وزارة الموارد البشرية والتوطين، وتمنحه الحق القانوني في العمل لدى صاحب عمل إماراتي معين في وظيفة محددة.",
    },
    longDef: {
      en: [
        "Every employee in the UAE private sector has both a residency visa (issued by GDRFA / ICP) and a labour card (issued by MOHRE). The labour card ties the worker to a specific employer and a specific job role under a registered employment contract.",
        "Labour cards are usually issued together with the employment visa. Common processing time is 5–10 working days from work-permit approval. Total government fees range from AED 250–500 per card. The card must be renewed when the employment contract is renewed.",
        "Switching jobs in the UAE always involves cancelling the old labour card and issuing a new one with the new employer — that's the moment many people refer to as 'transferring' their visa. The transfer is a labour-card action, not a residency-visa action.",
      ],
      ar: [
        "لكل موظف في القطاع الخاص الإماراتي تأشيرة إقامة (صادرة من الإدارة العامة للإقامة / هيئة الهوية) وبطاقة عمالية (صادرة من الوزارة). تربط البطاقة العمالية العامل بصاحب عمل محدد ووظيفة محددة بموجب عقد عمل مسجل.",
        "تصدر البطاقات العمالية عادةً مع تأشيرة العمل. وقت المعالجة المعتاد 5-10 أيام عمل من اعتماد تصريح العمل. الرسوم الحكومية الإجمالية تتراوح بين 250 و500 درهم لكل بطاقة. يجب تجديد البطاقة عند تجديد عقد العمل.",
        "تغيير الوظائف في الإمارات يشمل دائمًا إلغاء البطاقة العمالية القديمة وإصدار جديدة مع صاحب العمل الجديد — هذه هي اللحظة التي يشير إليها كثيرون بـ'نقل' التأشيرة. النقل إجراء بطاقة عمالية، وليس إجراء تأشيرة إقامة.",
      ],
    },
    related: ["mohre", "tasheel", "employment-visa", "wps"],
    relatedService: "visa-services",
  },
  {
    slug: "wps",
    term: { en: "Wage Protection System (WPS)", ar: "نظام حماية الأجور" },
    category: "concept",
    alsoKnownAs: ["WPS UAE", "MOHRE Wage Protection"],
    shortDef: {
      en: "The Wage Protection System (WPS) is the mandatory salary-payment monitoring scheme run by MOHRE and the Central Bank. Every UAE private-sector employer must pay employees through the WPS or face fines and visa suspensions.",
      ar: "نظام حماية الأجور هو منظومة متابعة دفع الرواتب الإلزامية التي تديرها وزارة الموارد البشرية والمصرف المركزي. يجب على كل صاحب عمل في القطاع الخاص الإماراتي دفع رواتب موظفيه عبر نظام حماية الأجور وإلا واجه غرامات وتعليقات تأشيرات.",
    },
    longDef: {
      en: [
        "WPS was introduced in 2009 to ensure UAE workers actually receive the salaries listed in their employment contracts. Every payroll cycle, employers send a Salary Information File (SIF) through their bank or an approved exchange house. MOHRE compares the file against registered contracts and flags discrepancies.",
        "Companies that fall behind on WPS — late payments, partial payments, or skipped months — get blocked from issuing new work permits, renewing visas, or modifying establishment-card data. Persistent non-compliance triggers AED 1,000-per-employee fines, blacklisting, and director-level penalties.",
        "WPS registration requires a corporate bank account, an approved salary-disbursement provider, and an active establishment card. ZETUP PRO does not run payroll itself but coordinates WPS setup with the client's bank and resolves WPS holds at MOHRE.",
      ],
      ar: [
        "أُطلق نظام حماية الأجور عام 2009 لضمان حصول العمال في الإمارات فعليًا على الرواتب المذكورة في عقود العمل. في كل دورة رواتب، يرسل صاحب العمل ملف معلومات الرواتب (SIF) عبر بنكه أو شركة صرافة معتمدة. تقارن الوزارة الملف بالعقود المسجلة وتُبلغ عن أي اختلافات.",
        "الشركات التي تتأخر في النظام — تأخير دفع، دفع جزئي، أو شهور متجاوزة — تُمنع من إصدار تصاريح عمل جديدة وتجديد التأشيرات وتعديل بطاقة المنشأة. الإخلال المستمر يؤدي إلى غرامات 1,000 درهم لكل موظف وقوائم سوداء وعقوبات على المدير.",
        "يتطلب التسجيل في النظام حسابًا بنكيًا للشركة، ومزود رواتب معتمد، وبطاقة منشأة فعالة. لا تدير زيتب برو الرواتب بنفسها، لكنها تنسق إعداد النظام مع بنك العميل وتحل أي توقفات في الوزارة.",
      ],
    },
    related: ["mohre", "establishment-card", "labour-card"],
    relatedService: "pro-services",
  },
  {
    slug: "emiratisation",
    term: { en: "Emiratisation", ar: "التوطين" },
    category: "concept",
    alsoKnownAs: ["Tawteen", "Emiratization", "UAE Nationalisation"],
    shortDef: {
      en: "Emiratisation is the UAE government policy of progressively raising the share of UAE-national employees at private-sector companies. Companies with 50+ employees must reach 10% Emirati skilled workforce by December 2026 or face AED 9,000 monthly fines per missing role.",
      ar: "التوطين هو سياسة حكومة الإمارات لرفع نسبة الموظفين المواطنين في القطاع الخاص تدريجيًا. الشركات التي لديها 50+ موظف يجب أن تصل إلى 10% من العمالة الإماراتية الماهرة بحلول ديسمبر 2026 وإلا واجهت غرامات شهرية 9,000 درهم لكل وظيفة شاغرة.",
    },
    longDef: {
      en: [
        "MOHRE introduced Emiratisation targets in 2022 with a phased rollout: 2% Emirati skilled workforce by end-2022, then +1% every six months, reaching 10% by December 2026. The targets apply to companies with 50 or more skilled employees, and as of 2024 they were extended to companies with 20–49 employees in some categories.",
        "An 'Emirati skilled employee' is a UAE national in a job classified as one of MOHRE's 9 skill categories (managers, professionals, technicians, etc.). To count, the employee must be on a registered employment contract, paid through WPS, and earning at least AED 4,000 in salary.",
        "The Nafis programme funds salary subsidies, training stipends, and pension contributions to make hiring Emiratis financially attractive. Companies that miss targets pay AED 9,000/month per missing role; persistent violators get blacklisted from MOHRE services.",
      ],
      ar: [
        "أطلقت الوزارة أهداف التوطين عام 2022 بمراحل تدريجية: 2% من العمالة الإماراتية الماهرة بنهاية 2022، ثم +1% كل ستة أشهر، للوصول إلى 10% بحلول ديسمبر 2026. الأهداف تطبق على الشركات التي لديها 50 موظفًا ماهرًا فأكثر، وفي 2024 تم تمديدها إلى الشركات التي لديها 20-49 موظفًا في بعض الفئات.",
        "الموظف الإماراتي الماهر هو مواطن إماراتي في وظيفة مصنفة ضمن إحدى فئات المهارات التسع للوزارة (مدراء، مهنيون، فنيون، إلخ). ليُحتسب، يجب أن يكون الموظف على عقد عمل مسجل، يُدفع راتبه عبر نظام حماية الأجور، ويكسب 4,000 درهم على الأقل.",
        "يموّل برنامج نافس دعم الرواتب، ومنح التدريب، ومساهمات التقاعد لجعل توظيف المواطنين جذابًا ماليًا. الشركات التي تخفق في الأهداف تدفع 9,000 درهم شهريًا لكل وظيفة شاغرة؛ والمخالفون المستمرون يُدرجون في القائمة السوداء.",
      ],
    },
    related: ["mohre", "nafis", "wps"],
    relatedService: "emiratisation",
    relatedGuide: "emiratisation-compliance-2026",
  },
  {
    slug: "nafis",
    term: { en: "Nafis", ar: "نافس" },
    category: "government-body",
    alsoKnownAs: ["Nafis programme", "Emirati Talent Council"],
    shortDef: {
      en: "Nafis is the UAE federal programme that supports Emiratisation by paying salary subsidies, training stipends, and pension contributions to private-sector employers who hire UAE nationals.",
      ar: "نافس هو البرنامج الاتحادي في الإمارات الذي يدعم التوطين عبر دفع إعانات الرواتب ومنح التدريب ومساهمات التقاعد لأصحاب العمل في القطاع الخاص الذين يوظفون المواطنين.",
    },
    longDef: {
      en: [
        "Nafis (Arabic for 'compete') is the brand of the Emirati Talent Competitiveness Council, the federal body coordinating Emiratisation incentives. It runs alongside MOHRE's compliance side: MOHRE enforces quotas, Nafis pays for them.",
        "The biggest Nafis incentive is a salary subsidy that can reach AED 5,000–8,000 per month per Emirati employee for the first five years, depending on the employee's age, role, and education level. Nafis also covers child-allowance top-ups and the employer's pension contribution.",
        "To claim Nafis, the employer must be registered on the Nafis portal, the employee must be a UAE national on a registered contract paid through WPS, and the role must be classified as one of MOHRE's skilled categories. ZETUP PRO assists clients with Nafis registration and monthly subsidy claims.",
      ],
      ar: [
        "نافس هو علامة مجلس الإمارات للمهارات والتنافسية للمواطنين، الجهة الاتحادية التي تنسق حوافز التوطين. يعمل بالتوازي مع الجانب التنظيمي للوزارة: الوزارة تفرض الحصص، ونافس يدفع مقابلها.",
        "أكبر حوافز نافس هو دعم راتب يمكن أن يصل إلى 5,000-8,000 درهم شهريًا لكل موظف إماراتي للسنوات الخمس الأولى، حسب عمر الموظف ووظيفته ومستواه التعليمي. كما يغطي نافس بدل الأطفال ومساهمات صاحب العمل في التقاعد.",
        "لطلب نافس، يجب أن يكون صاحب العمل مسجلًا في بوابة نافس، والموظف مواطنًا إماراتيًا على عقد مسجل يُدفع عبر نظام حماية الأجور، والدور مصنفًا ضمن إحدى الفئات الماهرة للوزارة. تساعد زيتب برو العملاء في التسجيل في نافس والمطالبات الشهرية للدعم.",
      ],
    },
    related: ["emiratisation", "mohre", "wps"],
    relatedService: "emiratisation",
  },
  {
    slug: "mainland-company",
    term: { en: "Mainland Company", ar: "شركة البر الرئيسي" },
    category: "concept",
    alsoKnownAs: ["LLC", "Onshore Company", "DET Mainland"],
    shortDef: {
      en: "A mainland company is a UAE entity licensed by the local emirate's economic authority (DET in Dubai). Mainland licences allow trade anywhere in the UAE without restrictions and, since 2021, full 100% foreign ownership for most activities.",
      ar: "شركة البر الرئيسي هي كيان إماراتي مرخص من الهيئة الاقتصادية للإمارة المحلية (دائرة الاقتصاد في دبي). تتيح رخص البر الرئيسي التجارة في أي مكان في الإمارات دون قيود، ومنذ 2021 ملكية أجنبية بنسبة 100% لمعظم الأنشطة.",
    },
    longDef: {
      en: [
        "A mainland (or 'onshore') company is the most flexible business form in the UAE. It can trade with anyone — Emirati or expat, individual or company — across all seven emirates and can win government contracts. It's regulated by the local emirate's economic department (DET in Dubai, ADDED in Abu Dhabi, etc.).",
        "Until 2021, most mainland LLCs required a 51% Emirati shareholder. Federal Decree-Law No. 32 of 2021 removed that requirement for most commercial and professional activities, opening 100% foreign ownership. Strategic activities (defence, banking, certain energy) still need majority Emirati ownership.",
        "Mainland trade licences from DET typically cost AED 10,000–15,000 per year. Setup involves trade-name reservation, initial approval, MOA notarisation, Ejari (office lease registration), and final licence issuance. Setup-to-licence time is typically 2–4 weeks.",
      ],
      ar: [
        "شركة البر الرئيسي (أو 'الأونشور') هي الشكل التجاري الأكثر مرونة في الإمارات. يمكنها التجارة مع أي شخص — مواطن أو مغترب، فرد أو شركة — عبر الإمارات السبع، ويمكنها الفوز بعقود حكومية. تُنظم بواسطة دائرة الاقتصاد في الإمارة المحلية (الدائرة في دبي، ADDED في أبوظبي، إلخ).",
        "حتى 2021، كانت معظم شركات ذ.م.م في البر الرئيسي تتطلب مساهمًا إماراتيًا بنسبة 51%. أزال المرسوم الاتحادي رقم 32 لعام 2021 هذا الشرط لمعظم الأنشطة التجارية والمهنية، مما فتح الملكية الأجنبية 100%. الأنشطة الاستراتيجية (الدفاع، البنوك، بعض الطاقة) لا تزال تحتاج ملكية إماراتية أغلبية.",
        "تكلف رخص البر الرئيسي من الدائرة عادةً 10,000-15,000 درهم سنويًا. يشمل التأسيس حجز الاسم التجاري، الموافقة الأولية، توثيق عقد التأسيس، إيجاري (تسجيل عقد الإيجار)، وإصدار الرخصة النهائي. الوقت من التأسيس إلى الرخصة عادةً 2-4 أسابيع.",
      ],
    },
    related: ["det", "trade-license", "free-zone"],
    relatedService: "company-formation",
    relatedGuide: "dubai-mainland-company-formation",
  },
  {
    slug: "free-zone",
    term: { en: "Free Zone", ar: "المنطقة الحرة" },
    category: "concept",
    alsoKnownAs: ["Free Trade Zone", "DMCC", "JAFZA", "Dubai South"],
    shortDef: {
      en: "A free zone is a special UAE jurisdiction administered by its own authority, offering 100% foreign ownership, simplified company formation, and corporate-tax incentives — but with restrictions on direct trade with the UAE mainland market.",
      ar: "المنطقة الحرة هي ولاية قضائية خاصة في الإمارات تديرها هيئتها الخاصة، وتقدم ملكية أجنبية 100% وتأسيسًا مبسطًا للشركات وحوافز ضريبية — لكن مع قيود على التجارة المباشرة مع سوق البر الرئيسي.",
    },
    longDef: {
      en: [
        "The UAE has 40+ free zones, each operated by its own authority and tailored to a specific industry: DMCC for commodities, DIFC and ADGM for finance, Dubai Internet City for tech, JAFZA for logistics, etc. Free-zone companies have 100% foreign ownership by default and historically operated outside mainland tax and customs regimes.",
        "The trade-off: a free-zone company can sell to other free-zone companies, export internationally, or sell to UAE mainland companies through an importer or distributor. It cannot invoice end-customers in the UAE mainland directly without a special permit (the Free Zone Mainland Operating Permit introduced in 2023 partially addresses this).",
        "Free-zone licences cost AED 12,000–50,000+ per year depending on the zone. The 2023 corporate-tax law applies a 0% rate to qualifying free-zone income (essentially income from outside the UAE or to other qualifying free-zone entities) and 9% to the rest.",
      ],
      ar: [
        "تمتلك الإمارات أكثر من 40 منطقة حرة، تديرها هيئتها الخاصة وكل واحدة مصممة لقطاع معين: DMCC للسلع، DIFC وADGM للتمويل، مدينة دبي للإنترنت للتقنية، JAFZA للوجستيات، إلخ. لشركات المناطق الحرة ملكية أجنبية 100% افتراضيًا وتاريخيًا عملت خارج أنظمة ضرائب وجمارك البر الرئيسي.",
        "المقايضة: يمكن لشركة المنطقة الحرة البيع لشركات منطقة حرة أخرى، أو التصدير دوليًا، أو البيع لشركات البر الرئيسي عبر مستورد أو موزع. لا يمكنها إصدار فواتير مباشرة لعملاء نهائيين في البر الرئيسي بدون تصريح خاص (تصريح تشغيل البر الرئيسي للمنطقة الحرة المُقدم عام 2023 يعالج هذا جزئيًا).",
        "تكلف رخص المناطق الحرة 12,000-50,000+ درهم سنويًا حسب المنطقة. يطبق قانون ضريبة الشركات لعام 2023 معدل 0% على دخل المنطقة الحرة المؤهل (الدخل من خارج الإمارات أو لكيانات مناطق حرة مؤهلة أخرى) و9% على الباقي.",
      ],
    },
    related: ["mainland-company", "trade-license", "corporate-tax"],
    relatedService: "company-formation",
    relatedGuide: "free-zone-vs-mainland",
  },
  {
    slug: "pro-services",
    term: { en: "PRO Services", ar: "خدمات PRO" },
    category: "concept",
    alsoKnownAs: ["Public Relations Officer Services", "Government Liaison Services"],
    shortDef: {
      en: "PRO services are professional government-liaison services that handle visa processing, trade-licence renewals, labour-card transactions, document attestation, and any other government touchpoint that a UAE company needs to operate.",
      ar: "خدمات PRO هي خدمات تواصل حكومية احترافية تتولى معالجة التأشيرات، وتجديد الرخص التجارية، ومعاملات البطاقات العمالية، وتوثيق المستندات، وأي تواصل حكومي آخر تحتاجه الشركة الإماراتية لتعمل.",
    },
    longDef: {
      en: [
        "PRO stands for 'Public Relations Officer' — historically the in-house Emirati employee whose job was to walk into government departments and complete employer paperwork. Today, almost no UAE company has a single in-house PRO; it's typically a service provided by a specialist firm or a typing centre.",
        "A PRO services firm represents the company at MOHRE (via Tasheel), GDRFA (via Amer), DET (for trade-licence matters), MOFA (attestation), the FTA (corporate-tax filing), and other authorities as needed. It tracks expiry dates, processes renewals proactively, handles document attestation flows, and submits transactions in the company's name.",
        "Pricing models vary: per-transaction, monthly retainer, or hybrid. ZETUP PRO uses a published sliding-scale retainer (from AED 839/month for up to 5 employees) and never marks up government fees — a transparency stance that's rare in the Dubai PRO market.",
      ],
      ar: [
        "PRO اختصار لـ'Public Relations Officer' — تاريخيًا الموظف الإماراتي الداخلي الذي كانت وظيفته الذهاب إلى الجهات الحكومية وإتمام أوراق صاحب العمل. اليوم لا تمتلك أي شركة إماراتية تقريبًا موظف PRO داخلي واحد؛ بل هي خدمة تقدمها شركة متخصصة أو مركز طباعة.",
        "تمثل شركة خدمات PRO الشركة لدى الوزارة (عبر تسهيل)، والإدارة العامة للإقامة (عبر عامر)، ودائرة الاقتصاد (لشؤون الرخصة التجارية)، ووزارة الخارجية (التوثيق)، وهيئة الضرائب الاتحادية (الإقرارات)، وغيرها حسب الحاجة. تتابع تواريخ الانتهاء وتعالج التجديدات بشكل استباقي وتدير تدفقات توثيق المستندات وتقدم المعاملات باسم الشركة.",
        "نماذج التسعير تختلف: لكل معاملة، أو راتب شهري، أو هجين. تستخدم زيتب برو راتبًا شهريًا متدرجًا منشورًا (من 839 درهم شهريًا حتى 5 موظفين) ولا تضع زيادة على الرسوم الحكومية أبدًا — موقف شفافية نادر في سوق PRO في دبي.",
      ],
    },
    related: ["mohre", "tasheel", "amer", "det"],
    relatedService: "pro-services",
    relatedGuide: "pro-services-dubai-complete-guide",
  },
  {
    slug: "golden-visa",
    term: { en: "Golden Visa", ar: "التأشيرة الذهبية" },
    category: "visa",
    alsoKnownAs: ["10-Year Visa", "UAE Golden Residency"],
    shortDef: {
      en: "The Golden Visa is a 5- or 10-year UAE residency permit granted to investors, entrepreneurs, scientists, top students, and certain professionals — without needing an employer sponsor and with full self-sponsorship of family.",
      ar: "التأشيرة الذهبية هي تصريح إقامة إماراتي لمدة 5 أو 10 سنوات يُمنح للمستثمرين ورواد الأعمال والعلماء والطلاب المتفوقين وبعض المهنيين — بدون الحاجة إلى كفيل صاحب عمل ومع إمكانية كفالة الأسرة بالكامل ذاتيًا.",
    },
    longDef: {
      en: [
        "Introduced in 2019, the Golden Visa breaks from the standard UAE pattern of employer-sponsored 2- or 3-year visas. Eligible categories include real-estate investors (typically AED 2 million property), entrepreneurs with approved projects, scientists with major research output, doctors and PhD-holders in priority specialisations, top students, exceptional talents in arts and culture, and remote-work professionals meeting income thresholds.",
        "Golden Visa holders can sponsor spouses, children, and (for the 10-year category) sometimes parents — without the employer-sponsorship constraint. The visa allows an unlimited number of entries, freedom to switch employers without losing residency, and removal of the 6-month-out-of-country rule that cancels regular residency visas.",
        "Processing typically takes 2–4 weeks once eligibility documents are accepted. Total fees range from AED 2,800 to 6,000 depending on category and emirate. ZETUP PRO assists with eligibility assessment, documentation, ICP submission, and Emirates ID issuance.",
      ],
      ar: [
        "أُطلقت التأشيرة الذهبية في 2019 لتخرج عن النمط الإماراتي القياسي لتأشيرات سنتين أو ثلاث برعاية صاحب العمل. الفئات المؤهلة تشمل المستثمرين العقاريين (عادةً عقار بقيمة 2 مليون درهم)، رواد الأعمال بمشاريع معتمدة، العلماء ذوي الإنتاج البحثي الكبير، الأطباء وحاملي الدكتوراه في التخصصات ذات الأولوية، الطلاب المتفوقين، المواهب الاستثنائية في الفنون والثقافة، والمهنيين العاملين عن بعد بحدود دخل معينة.",
        "يمكن لحاملي التأشيرة الذهبية كفالة الأزواج والأطفال و(للفئة عشر سنوات) أحيانًا الوالدين — دون قيد كفالة صاحب العمل. تتيح التأشيرة عدد غير محدود من مرات الدخول، وحرية تغيير أصحاب العمل دون فقدان الإقامة، وإلغاء قاعدة 6 أشهر خارج البلاد التي تلغي تأشيرات الإقامة العادية.",
        "تستغرق المعالجة عادةً 2-4 أسابيع بعد قبول وثائق الأهلية. تتراوح الرسوم الإجمالية من 2,800 إلى 6,000 درهم حسب الفئة والإمارة. تساعد زيتب برو في تقييم الأهلية والتوثيق والتقديم لهيئة الهوية وإصدار الهوية الإماراتية.",
      ],
    },
    related: ["gdrfa", "emirates-id", "investor-visa"],
    relatedService: "golden-visa",
  },
  {
    slug: "employment-visa",
    term: { en: "Employment Visa", ar: "تأشيرة العمل" },
    category: "visa",
    alsoKnownAs: ["Work Visa", "Residency Visa for Employment"],
    shortDef: {
      en: "An employment visa is the UAE residency permit issued to a foreign worker sponsored by a registered UAE employer, valid for 2 or 3 years and tied to a specific labour-card role at that employer.",
      ar: "تأشيرة العمل هي تصريح الإقامة الإماراتي الذي يُصدر للعامل الأجنبي الذي يكفله صاحب عمل إماراتي مسجل، صالحة لسنتين أو ثلاث سنوات ومرتبطة بدور محدد في البطاقة العمالية لدى ذلك صاحب العمل.",
    },
    longDef: {
      en: [
        "The employment visa is the most common UAE residency type. Process flow: the employer applies for an entry permit through MOHRE/GDRFA, the worker enters the UAE, completes a medical-fitness exam and biometrics, signs the MOHRE-standard employment contract, and receives the residency-visa stamp plus an Emirates ID.",
        "Total processing time for a complete employment visa is typically 3–7 working days from MOHRE's work-permit approval to residency-visa stamping, assuming the worker is in the UAE on a visit or grace status. Government fees total AED 3,500–6,000 per person depending on category, dependent rules, and any urgent processing.",
        "The visa expires when the labour card expires; both must be renewed together with renewed contracts. If the employee leaves the company, the employer must cancel the labour card and visa within the legal grace window, and the employee can either transfer to a new employer (re-issuing both documents) or exit the country.",
      ],
      ar: [
        "تأشيرة العمل هي نوع الإقامة الإماراتية الأكثر شيوعًا. مسار العملية: يقدم صاحب العمل طلب تصريح دخول عبر الوزارة/الإدارة العامة للإقامة، ويدخل العامل الإمارات، ويُكمل الفحص الطبي والبصمات، ويوقع عقد العمل القياسي للوزارة، ويتلقى ختم تأشيرة الإقامة وبطاقة الهوية الإماراتية.",
        "إجمالي وقت المعالجة لتأشيرة العمل الكاملة عادةً 3-7 أيام عمل من اعتماد تصريح العمل في الوزارة إلى ختم تأشيرة الإقامة، بافتراض أن العامل في الإمارات بتأشيرة زيارة أو وضع سماح. الرسوم الحكومية الإجمالية 3,500-6,000 درهم للشخص حسب الفئة وقواعد المعالين وأي معالجة عاجلة.",
        "تنتهي التأشيرة عند انتهاء البطاقة العمالية؛ يجب تجديدهما معًا مع العقود المجددة. إذا غادر الموظف الشركة، يجب على صاحب العمل إلغاء البطاقة العمالية والتأشيرة خلال نافذة السماح القانونية، ويمكن للموظف إما النقل لصاحب عمل جديد (إعادة إصدار كلا المستندين) أو الخروج من البلاد.",
      ],
    },
    related: ["mohre", "gdrfa", "labour-card", "emirates-id"],
    relatedService: "visa-services",
    relatedGuide: "uae-visa-processing",
  },
  {
    slug: "mofa-attestation",
    term: { en: "MOFA Attestation", ar: "تصديق وزارة الخارجية" },
    category: "concept",
    alsoKnownAs: ["MOFAIC Attestation", "UAE Foreign Affairs Attestation"],
    shortDef: {
      en: "MOFA Attestation is the UAE Ministry of Foreign Affairs' authentication step that makes a foreign document legally usable in the UAE. It's required for educational certificates, marriage certificates, commercial documents, and many corporate filings.",
      ar: "تصديق وزارة الخارجية هو خطوة المصادقة من وزارة الخارجية الإماراتية التي تجعل مستندًا أجنبيًا صالحًا قانونيًا للاستخدام في الإمارات. مطلوب للشهادات التعليمية وعقود الزواج والمستندات التجارية والعديد من الإيداعات المؤسسية.",
    },
    longDef: {
      en: [
        "Foreign documents (degrees, marriage certificates, birth certificates, commercial contracts) cannot be presented to UAE authorities until they have been authenticated through a chain of attestations. The chain typically runs: notary in the country of origin → that country's foreign ministry → the UAE embassy in that country → MOFA in the UAE.",
        "Once MOFA in the UAE has attested the document, it is acceptable for visa applications, school admissions, marriage registrations, corporate filings, and similar transactions. Without MOFA attestation, the document is not legally valid for these purposes.",
        "MOFA attestation typically costs AED 150–250 per document. Document clearing services manage the entire chain end-to-end (notary, embassy, MOFA, translation if needed). ZETUP PRO offers per-document attestation services with real-time tracking.",
      ],
      ar: [
        "لا يمكن تقديم المستندات الأجنبية (الشهادات الجامعية، عقود الزواج، شهادات الميلاد، العقود التجارية) إلى السلطات الإماراتية حتى يتم تصديقها عبر سلسلة من التصديقات. تتبع السلسلة عادةً: كاتب عدل في بلد المنشأ ← وزارة خارجية ذلك البلد ← السفارة الإماراتية في ذلك البلد ← وزارة الخارجية في الإمارات.",
        "بمجرد أن تصدق وزارة الخارجية في الإمارات على المستند، يصبح مقبولًا لطلبات التأشيرات والقبول المدرسي وتسجيلات الزواج والإيداعات المؤسسية والمعاملات المماثلة. بدون التصديق، المستند ليس صالحًا قانونيًا لهذه الأغراض.",
        "تكلف عادةً المصادقة في وزارة الخارجية 150-250 درهمًا لكل مستند. تدير خدمات تخليص المستندات السلسلة الكاملة (كاتب العدل، السفارة، الوزارة، الترجمة عند الحاجة). تقدم زيتب برو خدمات تصديق لكل مستند مع تتبع فوري.",
      ],
    },
    related: ["icp", "emirates-id"],
    relatedService: "document-clearing",
  },
  {
    slug: "fta",
    term: { en: "FTA (Federal Tax Authority)", ar: "هيئة الضرائب الاتحادية" },
    category: "government-body",
    alsoKnownAs: ["UAE FTA"],
    shortDef: {
      en: "The FTA — Federal Tax Authority — is the UAE federal authority that administers VAT, corporate tax, excise tax, and the EmaraTax filing portal. Every UAE company that's registered for any tax interacts with the FTA.",
      ar: "هيئة الضرائب الاتحادية هي السلطة الاتحادية في الإمارات التي تدير ضريبة القيمة المضافة وضريبة الشركات والضريبة الانتقائية وبوابة إمارا تاكس للإقرارات. كل شركة إماراتية مسجلة في أي ضريبة تتعامل مع الهيئة.",
    },
    longDef: {
      en: [
        "The FTA was established in 2017 ahead of VAT launch in 2018, and gained significantly more authority with the introduction of corporate tax in June 2023. It's the federal counterpart to local economic departments like DET — every emirate's companies file taxes with the FTA, regardless of where they're licensed.",
        "FTA registration is required for: VAT (mandatory at AED 375,000 turnover, voluntary at AED 187,500), corporate tax (mandatory for every taxable person, even loss-makers), and excise tax (for tobacco, energy drinks, and sweetened beverages).",
        "All filings flow through the EmaraTax portal. The FTA can audit any registered taxpayer and impose penalties for late filings (AED 1,000 first offence), missing records (AED 10,000+), and underreporting. ZETUP PRO assists with FTA registration and TRN issuance; tax returns themselves are handled by clients' accountants.",
      ],
      ar: [
        "أُسست هيئة الضرائب الاتحادية في 2017 قبل إطلاق ضريبة القيمة المضافة في 2018، واكتسبت سلطة أكبر بتقديم ضريبة الشركات في يونيو 2023. هي النظير الاتحادي للدوائر الاقتصادية المحلية مثل دائرة الاقتصاد — شركات كل إمارة تقدم ضرائبها للهيئة الاتحادية بغض النظر عن مكان ترخيصها.",
        "التسجيل في الهيئة مطلوب لـ: ضريبة القيمة المضافة (إلزامي عند 375,000 درهم دوران، طوعي عند 187,500 درهم)، ضريبة الشركات (إلزامي لكل شخص خاضع للضريبة، حتى الخاسرين)، والضريبة الانتقائية (للتبغ ومشروبات الطاقة والمشروبات المحلاة).",
        "كل التقديمات تتم عبر بوابة إمارا تاكس. يمكن للهيئة تدقيق أي دافع ضرائب مسجل وفرض غرامات على التأخير (1,000 درهم لأول مخالفة)، وفقدان السجلات (10,000+ درهم)، والإبلاغ الناقص. تساعد زيتب برو في التسجيل في الهيئة وإصدار رقم التسجيل الضريبي.",
      ],
    },
    related: ["emaratax", "corporate-tax", "vat"],
    relatedService: "corporate-tax",
    relatedGuide: "uae-corporate-tax",
  },
  {
    slug: "icp",
    term: { en: "ICP (Federal Authority for Identity, Citizenship, Customs and Ports Security)", ar: "هيئة الهوية والجنسية والمنافذ الاتحادية" },
    category: "government-body",
    alsoKnownAs: ["ICA", "Federal Authority for Identity"],
    shortDef: {
      en: "ICP is the UAE federal authority that issues Emirates IDs, manages residency visas in some emirates, oversees passport and citizenship matters, and runs the federal e-services portal for residency-related transactions.",
      ar: "هيئة الهوية والجنسية والمنافذ الاتحادية هي السلطة الاتحادية في الإمارات التي تُصدر الهوية الإماراتية، وتدير تأشيرات الإقامة في بعض الإمارات، وتشرف على شؤون الجوازات والجنسية، وتدير البوابة الإلكترونية الاتحادية للمعاملات المتعلقة بالإقامة.",
    },
    longDef: {
      en: [
        "ICP (formerly ICA — the rebrand happened in 2022) is the federal authority that handles Emirates ID issuance for everyone, plus residency visa transactions in emirates that don't have their own residency authority (most emirates outside Dubai). In Dubai, residency visas are handled by GDRFA, but Emirates IDs still come from ICP.",
        "ICP runs the federal smartphone app and web portal where residents can renew Emirates IDs, view their visa status, complete residency status changes, and manage dependents. It's the most important federal-level digital touchpoint for UAE residents.",
        "Emirates ID biometrics (photo, fingerprint, signature) are captured at ICP-affiliated centres. ZETUP PRO coordinates ICP appointments and Emirates ID issuance as part of every visa flow.",
      ],
      ar: [
        "هيئة الهوية والجنسية والمنافذ الاتحادية (المعروفة سابقًا بـ ICA — تم تغيير الاسم في 2022) هي السلطة الاتحادية التي تتولى إصدار الهوية الإماراتية للجميع، إضافة إلى معاملات تأشيرات الإقامة في الإمارات التي ليس لديها سلطة إقامة خاصة بها. في دبي تتولى الإدارة العامة للإقامة تأشيرات الإقامة، لكن الهوية الإماراتية تأتي من ICP.",
        "تدير ICP تطبيق الهاتف الذكي الاتحادي والبوابة الإلكترونية حيث يمكن للمقيمين تجديد الهوية الإماراتية وعرض حالة تأشيرتهم وإكمال تغييرات حالة الإقامة وإدارة المعالين.",
        "بصمات الهوية الإماراتية (الصورة، البصمة، التوقيع) تُلتقط في مراكز ICP. تنسق زيتب برو مواعيد ICP وإصدار الهوية الإماراتية كجزء من كل تدفق تأشيرة.",
      ],
    },
    related: ["emirates-id", "gdrfa", "amer"],
    relatedService: "visa-services",
  },
  {
    slug: "vat",
    term: { en: "VAT (Value Added Tax)", ar: "ضريبة القيمة المضافة" },
    category: "concept",
    alsoKnownAs: ["UAE VAT", "Sales Tax"],
    shortDef: {
      en: "VAT is the 5% consumption tax applied to most goods and services in the UAE since January 2018. Companies with annual taxable turnover above AED 375,000 must register with the FTA, charge VAT to customers, and file quarterly returns.",
      ar: "ضريبة القيمة المضافة هي ضريبة الاستهلاك بنسبة 5% المطبقة على معظم السلع والخدمات في الإمارات منذ يناير 2018. الشركات التي يتجاوز دورانها السنوي الخاضع للضريبة 375,000 درهم يجب أن تسجل في الهيئة، وتفرض الضريبة على العملاء، وتقدم إقرارات ربع سنوية.",
    },
    longDef: {
      en: [
        "VAT registration is mandatory once a company's rolling 12-month taxable turnover exceeds AED 375,000, and voluntary above AED 187,500. Most B2B and B2C transactions are taxable at 5%; some categories (healthcare, education, certain transport, specific food items) are zero-rated, and a small list of activities (residential property rentals, certain financial services) is exempt.",
        "Once registered, you receive a TRN (tax-registration number) that must appear on every tax invoice. You file VAT returns quarterly via EmaraTax — usually within 28 days of the end of each tax period. You collect output tax from customers, pay input tax to suppliers, and remit the net to the FTA.",
        "Failure to register on time is AED 10,000. Late filings start at AED 1,000 per offence. ZETUP PRO assists with FTA registration and TRN issuance; quarterly returns are handled by clients' accountants.",
      ],
      ar: [
        "التسجيل في الضريبة إلزامي عندما يتجاوز الدوران المتدحرج للشركة لمدة 12 شهرًا 375,000 درهم، وطوعي فوق 187,500 درهم. معظم معاملات B2B وB2C خاضعة للضريبة بنسبة 5%؛ بعض الفئات (الرعاية الصحية، التعليم، نقل معين، أصناف غذائية محددة) معفاة بنسبة صفر، وقائمة صغيرة من الأنشطة (إيجارات العقارات السكنية، خدمات مالية معينة) معفاة كليًا.",
        "بمجرد التسجيل، تتلقى رقم تسجيل ضريبي (TRN) يجب أن يظهر على كل فاتورة ضريبية. تقدم إقرارات الضريبة ربع سنويًا عبر إمارا تاكس — عادةً خلال 28 يومًا من نهاية كل فترة ضريبية. تحصل ضريبة المخرجات من العملاء، وتدفع ضريبة المدخلات للموردين، وتحول الصافي للهيئة.",
        "عدم التسجيل في الوقت المحدد 10,000 درهم. التقديمات المتأخرة تبدأ بـ 1,000 درهم لكل مخالفة.",
      ],
    },
    related: ["fta", "emaratax", "corporate-tax"],
    relatedService: "corporate-tax",
  },
  {
    slug: "corporate-tax",
    term: { en: "UAE Corporate Tax", ar: "ضريبة الشركات الإماراتية" },
    category: "concept",
    alsoKnownAs: ["CT", "9% Corporate Tax"],
    shortDef: {
      en: "UAE Corporate Tax is the 9% federal tax on net taxable income above AED 375,000 introduced in June 2023. Every UAE company — including freelancers and free-zone entities — must register with the FTA and file annually, even if loss-making.",
      ar: "ضريبة الشركات الإماراتية هي ضريبة اتحادية بنسبة 9% على صافي الدخل الخاضع للضريبة الذي يتجاوز 375,000 درهم، أُطلقت في يونيو 2023. كل شركة إماراتية — بما في ذلك العاملون لحسابهم الخاص وكيانات المناطق الحرة — يجب أن تسجل في الهيئة وتقدم إقرارات سنوية، حتى الخاسرة.",
    },
    longDef: {
      en: [
        "Corporate Tax (CT) applies for fiscal years starting on or after 1 June 2023. The headline rates: 0% on the first AED 375,000 of taxable income, 9% on everything above. Qualifying free-zone income gets 0% at the entity level (free-zone-to-free-zone, exports, qualifying activities), while non-qualifying free-zone income is taxed at 9%.",
        "Every taxable person — every UAE company, branch, or partnership — must register with the FTA, even if they expect to make no taxable profit. Returns are due 9 months after fiscal year-end via EmaraTax, with audited financial statements required for entities above certain revenue thresholds.",
        "Small Business Relief is in place until December 2026: businesses with revenue under AED 3 million can elect to be treated as having zero taxable income. After SBR ends, the standard 0% / 9% bracket applies.",
      ],
      ar: [
        "ضريبة الشركات تطبق على السنوات المالية التي تبدأ في 1 يونيو 2023 أو بعدها. المعدلات الرئيسية: 0% على أول 375,000 درهم من الدخل الخاضع للضريبة، و9% على كل ما يتجاوز. دخل المنطقة الحرة المؤهل يحصل على 0% على مستوى الكيان (من منطقة حرة إلى منطقة حرة، التصدير، الأنشطة المؤهلة)، بينما دخل المنطقة الحرة غير المؤهل يخضع لضريبة 9%.",
        "كل شخص خاضع للضريبة — كل شركة أو فرع أو شراكة إماراتية — يجب أن يسجل في الهيئة، حتى لو لم يتوقع تحقيق ربح خاضع للضريبة. الإقرارات مستحقة بعد 9 أشهر من نهاية السنة المالية عبر إمارا تاكس.",
        "إعفاء الأعمال الصغيرة ساري حتى ديسمبر 2026: الأعمال بإيرادات أقل من 3 مليون درهم يمكنها اختيار معاملتها كصفر دخل خاضع للضريبة. بعد انتهاء الإعفاء، يطبق الشطر القياسي 0%/9%.",
      ],
    },
    related: ["fta", "emaratax", "vat", "free-zone"],
    relatedService: "corporate-tax",
    relatedGuide: "uae-corporate-tax",
  },
  {
    slug: "investor-visa",
    term: { en: "Investor Visa", ar: "تأشيرة المستثمر" },
    category: "visa",
    alsoKnownAs: ["Partner Visa", "Shareholder Visa"],
    shortDef: {
      en: "An investor visa is a UAE residency permit issued to a non-resident shareholder in a UAE company. Validity is typically 2 or 3 years, with the company itself acting as sponsor and the visa tied to the shareholder's stake.",
      ar: "تأشيرة المستثمر هي تصريح إقامة إماراتي يُصدر لمساهم غير مقيم في شركة إماراتية. الصلاحية عادةً سنتان أو ثلاث سنوات، والشركة نفسها تعمل ككفيل، والتأشيرة مرتبطة بحصة المساهم.",
    },
    longDef: {
      en: [
        "When you set up a Dubai company as an expat, you typically apply for an investor visa for yourself and any other non-resident shareholders. The company sponsors the visa — there's no employer-employee relationship, just the shareholder's stake in the entity.",
        "Eligibility usually requires a minimum shareholding (often AED 50,000 in paid-up capital, though this varies by entity type and emirate). The application is filed at GDRFA / ICP, requires medical fitness and biometrics, and results in an Emirates ID with the holder's residency status set as 'Investor / Partner'.",
        "Investor visas allow the holder to sponsor family members. They do not allow the holder to also be on a separate employment visa with a different company without specific approvals. Most golden-visa-eligible founders eventually transition off investor visas onto Golden Visas for the longer validity and flexibility.",
      ],
      ar: [
        "عند تأسيس شركة دبي كأجنبي، تتقدم عادةً بطلب تأشيرة مستثمر لنفسك ولأي مساهمين غير مقيمين آخرين. الشركة تكفل التأشيرة — لا توجد علاقة صاحب عمل وموظف، فقط حصة المساهم في الكيان.",
        "الأهلية عادةً تتطلب حد أدنى من المساهمة (غالبًا 50,000 درهم رأس مال مدفوع، رغم أن هذا يختلف حسب نوع الكيان والإمارة). يُقدم الطلب لدى الإدارة العامة للإقامة / هيئة الهوية، ويتطلب فحصًا طبيًا وبصمات، ويُنتج هوية إماراتية بحالة الإقامة كـ'مستثمر/شريك'.",
        "تأشيرات المستثمر تتيح لحاملها كفالة أفراد العائلة. لا تسمح لحاملها بأن يكون على تأشيرة عمل منفصلة مع شركة مختلفة دون موافقات محددة. معظم المؤسسين المؤهلين للتأشيرة الذهبية ينتقلون إليها لاحقًا للحصول على صلاحية ومرونة أطول.",
      ],
    },
    related: ["gdrfa", "amer", "golden-visa", "employment-visa"],
    relatedService: "visa-services",
    relatedGuide: "uae-visa-processing",
  },
  {
    slug: "dependent-visa",
    term: { en: "Dependent Visa", ar: "تأشيرة المعالين" },
    category: "visa",
    alsoKnownAs: ["Family Visa", "Spouse Visa", "Family Sponsorship"],
    shortDef: {
      en: "A dependent visa (also called family or spouse visa) is a UAE residency permit issued to a sponsor's family member — typically a spouse, child, or parent. The sponsor must meet minimum salary thresholds and provide accommodation.",
      ar: "تأشيرة المعالين (تسمى أيضًا تأشيرة العائلة أو الزوج) هي تصريح إقامة إماراتي يُصدر لأحد أفراد عائلة الكفيل — عادةً زوج أو طفل أو والد. يجب أن يستوفي الكفيل الحد الأدنى للراتب ويوفر سكنًا.",
    },
    longDef: {
      en: [
        "Any UAE resident — employee, investor, or Golden Visa holder — can sponsor immediate family members for residency. The most common categories are spouses, children under 18 (unmarried daughters of any age, unmarried sons up to 25 if studying), and parents (under specific conditions).",
        "Minimum salary thresholds apply: typically AED 4,000 + accommodation for sponsoring a spouse, AED 4,000 for children, and around AED 20,000 for parents (rules vary by emirate and update periodically). Golden Visa holders have looser thresholds and broader eligibility.",
        "Process: sponsor applies for an entry permit at GDRFA / ICP, dependent enters UAE, completes medical fitness (parents over 60 may have extra checks) and biometrics, and is issued a residency stamp + Emirates ID. Dependents can study and, with separate work permits, sometimes work.",
      ],
      ar: [
        "أي مقيم إماراتي — موظف، مستثمر، أو حامل تأشيرة ذهبية — يمكنه كفالة أفراد العائلة المباشرين للإقامة. الفئات الأكثر شيوعًا هي الأزواج والأطفال دون 18 (البنات غير المتزوجات من أي عمر، الأبناء غير المتزوجين حتى 25 إذا كانوا يدرسون)، والوالدين (بشروط محددة).",
        "تطبق حدود دنيا للراتب: عادة 4,000 درهم + سكن لكفالة الزوج، 4,000 درهم للأطفال، وحوالي 20,000 درهم للوالدين (تختلف القواعد حسب الإمارة وتُحدث دوريًا). حاملو التأشيرة الذهبية لديهم حدود أكثر مرونة وأهلية أوسع.",
        "العملية: يتقدم الكفيل بطلب تصريح دخول لدى الإدارة العامة للإقامة / هيئة الهوية، يدخل المُعال الإمارات، يكمل الفحص الطبي والبصمات، ويُصدر له ختم إقامة + هوية إماراتية.",
      ],
    },
    related: ["gdrfa", "amer", "emirates-id", "investor-visa"],
    relatedService: "visa-services",
    relatedGuide: "uae-visa-processing",
  },
  {
    slug: "emaratax",
    term: { en: "EmaraTax", ar: "إمارا تاكس" },
    category: "service-center",
    alsoKnownAs: ["FTA EmaraTax", "FTA Portal"],
    shortDef: {
      en: "EmaraTax is the Federal Tax Authority's online portal where UAE companies register for VAT and corporate tax, file returns, pay liabilities, and manage their tax records.",
      ar: "إمارا تاكس هي البوابة الإلكترونية لهيئة الضرائب الاتحادية حيث تسجل الشركات الإماراتية في ضريبة القيمة المضافة وضريبة الشركات وتقدم الإقرارات وتدفع الالتزامات وتدير سجلاتها الضريبية.",
    },
    longDef: {
      en: [
        "EmaraTax replaced the older e-Services portal in late 2022 as the FTA's unified platform for all tax matters. Every taxable person — whether registered for VAT, corporate tax, or excise — files and pays through EmaraTax. It also stores TRN (tax-registration number) certificates, return history, and refund records.",
        "Corporate tax filings are due 9 months after the financial-year end (so a company with a December year-end files by September 30 of the following year). VAT returns are typically quarterly. Late filings trigger AED 1,000 penalties; late payments accrue daily interest.",
        "Most ZETUP PRO clients use a dedicated tax accountant or audit firm to prepare actual returns, but rely on PRO services for EmaraTax registration, TRN certificate retrieval, deadline tracking, and FTA-related document attestation.",
      ],
      ar: [
        "حلت إمارا تاكس محل البوابة الإلكترونية السابقة في أواخر 2022 كمنصة موحدة لهيئة الضرائب الاتحادية لجميع الأمور الضريبية. كل شخص خاضع للضريبة — سواء كان مسجلًا في ضريبة القيمة المضافة أو ضريبة الشركات أو الضريبة الانتقائية — يقدم ويدفع عبر إمارا تاكس. كما تخزن شهادات رقم التسجيل الضريبي وسجل الإقرارات وسجلات الاسترداد.",
        "تستحق إقرارات ضريبة الشركات بعد 9 أشهر من نهاية السنة المالية (شركة بنهاية سنة ديسمبر تقدم بحلول 30 سبتمبر من السنة التالية). إقرارات ضريبة القيمة المضافة عادةً ربع سنوية. التقديمات المتأخرة تستوجب غرامات 1,000 درهم؛ المدفوعات المتأخرة تتراكم بفائدة يومية.",
        "معظم عملاء زيتب برو يستخدمون محاسب ضرائب أو شركة تدقيق متخصصة لإعداد الإقرارات الفعلية، لكنهم يعتمدون على خدمات PRO للتسجيل في إمارا تاكس واسترداد شهادة رقم التسجيل ومتابعة المواعيد النهائية وتصديق المستندات المتعلقة بالهيئة.",
      ],
    },
    related: ["fta", "corporate-tax"],
    relatedService: "corporate-tax",
    relatedGuide: "uae-corporate-tax",
  },
];

export const GLOSSARY_CATEGORIES = {
  "government-body": {
    en: "Government Bodies",
    ar: "الهيئات الحكومية",
  },
  "service-center": {
    en: "Service Centres",
    ar: "مراكز الخدمات",
  },
  document: {
    en: "Documents & IDs",
    ar: "الوثائق والهويات",
  },
  concept: {
    en: "Concepts",
    ar: "المفاهيم",
  },
  fee: {
    en: "Fees & Charges",
    ar: "الرسوم",
  },
  visa: {
    en: "Visas",
    ar: "التأشيرات",
  },
} as const;

export function findGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return GLOSSARY.find((e) => e.slug === slug);
}

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

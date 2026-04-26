/**
 * Hyperlocal landing pages for Dubai mainland business areas.
 *
 * Each entry powers:
 *   - /[locale]/locations (hub page, ItemListSchema)
 *   - /[locale]/locations/[slug] (detail page, Service schema with areaServed)
 */

export interface LocationEntry {
  slug: string;
  name: { en: string; ar: string };
  /** Short tag — e.g. "Dubai's commercial heart" */
  tagline: { en: string; ar: string };
  /** Approximate centre coordinates of the area */
  coordinates: { lat: number; lng: number };
  /** 1-sentence direct answer for AEO */
  shortDef: { en: string; ar: string };
  /** Long-form sections — each entry = 1 paragraph */
  intro: { en: string[]; ar: string[] };
  /** "Why companies in [area] work with Zetup" — bullet-style points */
  whyZetupHere: { en: string[]; ar: string[] };
  /** Nearby government offices / service centres relevant to this area */
  nearbyOffices: { name: string; type: string }[];
  /** Most-relevant Zetup services for this area */
  relevantServices: string[];
}

export const LOCATIONS: LocationEntry[] = [
  {
    slug: "business-bay",
    name: { en: "Business Bay", ar: "الخليج التجاري" },
    tagline: {
      en: "Dubai's central business district",
      ar: "منطقة الأعمال المركزية في دبي",
    },
    coordinates: { lat: 25.1881, lng: 55.2647 },
    shortDef: {
      en: "Business Bay is Dubai's purpose-built central business district along the extended Dubai Creek, home to thousands of mainland LLCs in finance, professional services, marketing, and tech. ZETUP PRO is headquartered here and provides on-the-ground PRO services to companies across the area.",
      ar: "الخليج التجاري هي منطقة الأعمال المركزية في دبي على امتداد خور دبي، وتضم آلاف شركات ذ.م.م في البر الرئيسي العاملة في التمويل والخدمات المهنية والتسويق والتقنية. مقر زيتب برو الرئيسي في الخليج التجاري وتقدم خدمات PRO للشركات في جميع أنحاء المنطقة.",
    },
    intro: {
      en: [
        "Business Bay sits between Sheikh Zayed Road and the Dubai Water Canal, immediately south of Downtown Dubai. It was master-planned as Dubai's commercial-density answer to DIFC and downtown — a place specifically zoned for office towers, mixed-use commercial buildings, and serviced offices, with thousands of mainland LLCs operating from its ~270 towers.",
        "Most companies in Business Bay are licensed by DET (Dubai's Department of Economy and Tourism) as mainland entities. The mix is heavily weighted toward professional services, real estate, marketing agencies, fintech and software, consultancies, and family offices — companies that need flexibility to bill clients across the UAE and have visibility on Sheikh Zayed Road.",
        "ZETUP PRO is headquartered on Floor 35 of Churchill Executive Tower in Business Bay. We can meet clients in person, walk paperwork to and from nearby Tasheel and Amer centres, and respond same-day to anything that needs in-the-flesh handling.",
      ],
      ar: [
        "الخليج التجاري يقع بين شارع الشيخ زايد وقناة دبي المائية، جنوب وسط دبي مباشرة. تم تصميمها لتكون الإجابة العقارية المكثفة لدبي على مركز دبي المالي العالمي والوسط — منطقة مخصصة لأبراج المكاتب والمباني التجارية متعددة الاستخدامات والمكاتب المخدومة، مع آلاف من شركات ذ.م.م في البر الرئيسي تعمل من أبراجها التي تتجاوز 270 برجًا.",
        "معظم شركات الخليج التجاري مرخصة من دائرة الاقتصاد والسياحة في دبي ككيانات في البر الرئيسي. يتركز المزيج بشدة على الخدمات المهنية والعقارات ووكالات التسويق والتقنية المالية والبرمجيات والاستشارات والمكاتب العائلية — شركات تحتاج إلى مرونة الفوترة عبر الإمارات وظهور على شارع الشيخ زايد.",
        "مقر زيتب برو الرئيسي في الطابق 35 من برج تشرشل التنفيذي في الخليج التجاري. يمكننا مقابلة العملاء شخصيًا، ومتابعة الأوراق ذهابًا وإيابًا من مراكز تسهيل وعامر القريبة، والاستجابة في نفس اليوم لأي شيء يحتاج إلى معالجة فعلية.",
      ],
    },
    whyZetupHere: {
      en: [
        "Same-day in-person handover for sensitive documents (passports, original certificates) — most clients within 5 km",
        "Direct relationships with the closest Tasheel and Amer centres in Business Bay and Bur Dubai",
        "Familiar with the building managers in major Business Bay towers (Bay Square, Executive Towers, Vision Tower) for delivery and access",
        "Office hours overlap with European morning and Asian afternoon — convenient for international founders",
      ],
      ar: [
        "تسليم في نفس اليوم للمستندات الحساسة (جوازات السفر، الشهادات الأصلية) — معظم العملاء على بعد 5 كم",
        "علاقات مباشرة مع أقرب مراكز تسهيل وعامر في الخليج التجاري والبرشاء",
        "نعرف مدراء المباني في أبراج الخليج التجاري الرئيسية (Bay Square، أبراج التنفيذيين، Vision Tower) للتسليم والوصول",
        "ساعات العمل تتداخل مع صباح أوروبا وبعد ظهر آسيا — مناسبة للمؤسسين الدوليين",
      ],
    },
    nearbyOffices: [
      { name: "Tasheel Bur Dubai", type: "MOHRE service centre" },
      { name: "Amer Centre Karama", type: "GDRFA service centre" },
      { name: "DET Bur Dubai branch", type: "Trade licence" },
      { name: "Dubai Land Department", type: "Ejari registration" },
    ],
    relevantServices: [
      "pro-services",
      "company-formation",
      "visa-services",
      "trade-license-renewal",
    ],
  },
  {
    slug: "downtown-dubai",
    name: { en: "Downtown Dubai", ar: "وسط مدينة دبي" },
    tagline: {
      en: "Dubai's prestige business address",
      ar: "العنوان التجاري المرموق في دبي",
    },
    coordinates: { lat: 25.197, lng: 55.2744 },
    shortDef: {
      en: "Downtown Dubai is the prestige commercial address built around the Burj Khalifa, Dubai Mall, and Dubai Opera. It hosts a mix of mainland LLCs — including law firms, M&A boutiques, family offices, luxury retail HQs, and PR agencies — who need a recognisable Dubai address.",
      ar: "وسط مدينة دبي هو العنوان التجاري المرموق المبني حول برج خليفة ودبي مول ودار الأوبرا. يضم مزيجًا من شركات ذ.م.م في البر الرئيسي — بما في ذلك مكاتب المحاماة، وبوتيكات الاندماج والاستحواذ، والمكاتب العائلية، ومقرات تجارة التجزئة الفاخرة، ووكالات العلاقات العامة — التي تحتاج إلى عنوان دبي معروف.",
    },
    intro: {
      en: [
        "Downtown Dubai is the high-density mixed-use district around the Burj Khalifa, anchored by Dubai Mall and the Dubai Opera. It was built as Dubai's flagship address — a place where Emaar's master plan put residential, retail, and high-end office space in walking distance of each other.",
        "From a corporate-services perspective, Downtown is mostly DET mainland (with a few specific DIFC-registered entities at The Address Boulevard and other adjacent buildings). Companies headquartered here tend to be smaller and more brand-conscious: professional-services firms, family offices, top-end consultancies, and luxury retail HQs.",
        "Office rents in Downtown are typically 30–60% higher than Business Bay for equivalent space, which means companies here usually have higher revenue-per-employee and more sensitive paperwork (M&A documents, family-office governance, high-value property transactions).",
      ],
      ar: [
        "وسط مدينة دبي هي منطقة عالية الكثافة متعددة الاستخدامات حول برج خليفة، ترتكز على دبي مول ودار الأوبرا. بُنيت لتكون عنوان دبي الرئيسي — مكان وضعت فيه المخطط الرئيسي لإعمار المساحات السكنية والتجارية والمكاتب الراقية على مسافة قريبة من بعضها.",
        "من منظور الخدمات المؤسسية، وسط المدينة في معظمه ضمن البر الرئيسي تحت دائرة الاقتصاد (مع بعض الكيانات المسجلة في مركز دبي المالي العالمي في The Address Boulevard ومبانٍ مجاورة). الشركات التي مقرها هنا تميل لأن تكون أصغر وأكثر اهتمامًا بالعلامة التجارية: شركات الخدمات المهنية، والمكاتب العائلية، والاستشارات الراقية، ومقرات تجارة التجزئة الفاخرة.",
        "إيجارات المكاتب في وسط المدينة عادةً أعلى بنسبة 30-60% من الخليج التجاري للمساحة المماثلة، مما يعني أن الشركات هنا عادةً ما تحقق إيرادات أعلى للموظف ولديها أوراق أكثر حساسية (وثائق الاندماج، حوكمة المكاتب العائلية، معاملات العقارات عالية القيمة).",
      ],
    },
    whyZetupHere: {
      en: [
        "Discreet handling of high-sensitivity documents — passports, family-office records, share-transfer paperwork",
        "Coordinator-level point of contact for executives who don't want to manage PRO logistics directly",
        "10-minute drive from our Business Bay HQ — same-day service for any urgent paperwork",
        "Multi-jurisdictional experience for Downtown clients with both mainland and DIFC entities",
      ],
      ar: [
        "معالجة سرية للوثائق عالية الحساسية — جوازات السفر، سجلات المكاتب العائلية، أوراق نقل الحصص",
        "نقطة اتصال على مستوى منسق لكبار المديرين الذين لا يرغبون في إدارة لوجستيات PRO مباشرة",
        "10 دقائق بالسيارة من مقرنا الرئيسي في الخليج التجاري — خدمة في نفس اليوم لأي أوراق عاجلة",
        "خبرة متعددة الاختصاصات لعملاء وسط المدينة الذين لديهم كيانات في البر الرئيسي ومركز دبي المالي العالمي",
      ],
    },
    nearbyOffices: [
      { name: "Tasheel Bur Dubai", type: "MOHRE service centre" },
      { name: "Amer Centre Karama", type: "GDRFA service centre" },
      { name: "DET Headquarters", type: "Trade licence" },
      { name: "DIFC Authority (for DIFC entities)", type: "Free zone licence" },
    ],
    relevantServices: [
      "pro-services",
      "company-formation",
      "golden-visa",
      "corporate-tax",
    ],
  },
  {
    slug: "sheikh-zayed-road",
    name: { en: "Sheikh Zayed Road", ar: "شارع الشيخ زايد" },
    tagline: {
      en: "The 12-lane corporate spine of Dubai",
      ar: "العمود الفقري للشركات في دبي",
    },
    coordinates: { lat: 25.213, lng: 55.27 },
    shortDef: {
      en: "Sheikh Zayed Road is Dubai's main corporate artery, lined with mainland office towers from Trade Centre Roundabout through Financial Centre, Burj Khalifa Tower, and beyond. It hosts thousands of mid-market and enterprise companies across every sector.",
      ar: "شارع الشيخ زايد هو الشريان التجاري الرئيسي في دبي، تصطف على جانبيه أبراج المكاتب في البر الرئيسي من دوار المركز التجاري عبر المركز المالي وبرج خليفة وما بعد ذلك. يضم آلاف الشركات المتوسطة والكبرى في كل قطاع.",
    },
    intro: {
      en: [
        "Sheikh Zayed Road is the 12-lane motorway running from Trade Centre Roundabout through Dubai's commercial spine all the way to Abu Dhabi. The 6 km between Trade Centre and Mall of the Emirates is densely built up with mainland office towers — World Trade Centre, Emirates Towers, the Etisalat tower, the Latifa Towers, and dozens more.",
        "Companies headquartered along Sheikh Zayed Road span every sector: oil and gas service companies, telecom, banking, advertising agencies, regional headquarters of multinationals, and large-format consultancies. Most operate as DET mainland LLCs because they need to invoice across the UAE; a smaller set operate as DIFC entities or representative offices of foreign parents.",
        "These companies tend to be larger (50–500 employees) than the typical Business Bay tenant, and their PRO needs are usually higher-volume: 30+ visas active at any time, multi-tier Emiratisation requirements, and complex change-of-business-activity filings.",
      ],
      ar: [
        "شارع الشيخ زايد هو الطريق السريع المكون من 12 مسارًا الذي يمتد من دوار المركز التجاري عبر العمود الفقري التجاري لدبي وصولًا إلى أبوظبي. المسافة 6 كم بين المركز التجاري ومول الإمارات مبنية بكثافة بأبراج مكاتب البر الرئيسي — مركز التجارة العالمي، أبراج الإمارات، برج اتصالات، أبراج لطيفة، وعشرات أخرى.",
        "الشركات التي مقرها على شارع الشيخ زايد تغطي كل قطاع: شركات خدمات النفط والغاز، الاتصالات، البنوك، وكالات الإعلان، المقرات الإقليمية للشركات متعددة الجنسيات، والاستشارات كبيرة الحجم. معظمها تعمل ككيانات ذ.م.م في البر الرئيسي تحت دائرة الاقتصاد لأنها تحتاج إلى الفوترة عبر الإمارات؛ مجموعة أصغر تعمل ككيانات في مركز دبي المالي العالمي أو مكاتب تمثيلية لشركات أم أجنبية.",
        "تميل هذه الشركات لأن تكون أكبر (50-500 موظف) من المستأجر النموذجي في الخليج التجاري، واحتياجاتها من خدمات PRO عادةً أعلى حجمًا: أكثر من 30 تأشيرة نشطة في أي وقت، متطلبات توطين متعددة المستويات، وإيداعات معقدة لتغيير النشاط التجاري.",
      ],
    },
    whyZetupHere: {
      en: [
        "Volume-pricing tier for companies with 50+ employees and 30+ active visas",
        "Dedicated account coordinator for high-frequency transactions (5–15 per week)",
        "Multi-tier Emiratisation programme management — quota tracking, Nafis integration, MOHRE reporting",
        "Multi-entity coordination for groups with mainland LLCs alongside free-zone entities",
      ],
      ar: [
        "مستوى تسعير حجمي للشركات التي لديها 50+ موظفًا و30+ تأشيرة نشطة",
        "منسق حساب مخصص للمعاملات عالية التكرار (5-15 أسبوعيًا)",
        "إدارة برنامج توطين متعدد المستويات — تتبع الحصص، تكامل نافس، تقارير الوزارة",
        "تنسيق متعدد الكيانات للمجموعات التي لديها شركات ذ.م.م في البر الرئيسي إلى جانب كيانات المناطق الحرة",
      ],
    },
    nearbyOffices: [
      { name: "Tasheel Trade Centre", type: "MOHRE service centre" },
      { name: "Amer Centre Sheikh Zayed Road", type: "GDRFA service centre" },
      { name: "DET Trade Centre", type: "Trade licence" },
      { name: "Federal Tax Authority HQ", type: "Corporate tax / VAT" },
    ],
    relevantServices: [
      "pro-services",
      "emiratisation",
      "visa-services",
      "corporate-tax",
    ],
  },
  {
    slug: "deira",
    name: { en: "Deira", ar: "ديرة" },
    tagline: {
      en: "Old Dubai's traditional trading district",
      ar: "حي دبي القديم التجاري التقليدي",
    },
    coordinates: { lat: 25.2697, lng: 55.3094 },
    shortDef: {
      en: "Deira is Dubai's historic trading district north of the Creek, home to thousands of import-export traders, foodstuff suppliers, electronics wholesalers, and family-owned mainland LLCs. PRO needs here typically centre on trade licences, visa volume, and goods clearance.",
      ar: "ديرة هي الحي التجاري التاريخي في دبي شمال الخور، وتضم آلاف تجار الاستيراد والتصدير وموردي المواد الغذائية وتجار الجملة للإلكترونيات وشركات ذ.م.م المملوكة عائليًا في البر الرئيسي. احتياجات PRO هنا تتمحور عادةً حول الرخص التجارية وحجم التأشيرات وتخليص البضائع.",
    },
    intro: {
      en: [
        "Deira is the traditional commercial heart of Dubai — the city's original business district, dating back decades before Sheikh Zayed Road or Business Bay existed. It sits north of Dubai Creek, anchored by the Gold Souk, Spice Souk, Naif, and the wholesale markets of Al Ras.",
        "The corporate makeup is distinctive: thousands of family-owned mainland LLCs, often multi-generational businesses in foodstuff trading, textiles, electronics wholesale, jewellery, and import-export. Many are run by South Asian entrepreneurs and have substantial blue-collar workforces (warehouse, logistics, retail).",
        "Trade licence and visa needs in Deira are high-volume but commercially routine: annual DET renewals, large numbers of employment visas (often 50–200 workers), MOHRE compliance for blue-collar workforce, and Wage Protection System submissions on tight cycles.",
      ],
      ar: [
        "ديرة هي القلب التجاري التقليدي لدبي — الحي التجاري الأصلي للمدينة، يعود تاريخه عقودًا قبل أن يوجد شارع الشيخ زايد أو الخليج التجاري. تقع شمال خور دبي، وترتكز على سوق الذهب وسوق التوابل ونايف وأسواق الجملة في الراس.",
        "التركيبة المؤسسية مميزة: آلاف من شركات ذ.م.م المملوكة عائليًا في البر الرئيسي، غالبًا شركات متعددة الأجيال في تجارة المواد الغذائية والمنسوجات وتجارة الإلكترونيات بالجملة والمجوهرات والاستيراد والتصدير. كثير منها يديره رواد أعمال من جنوب آسيا ولديها قوى عاملة كبيرة من ذوي الياقات الزرقاء (المستودعات، الخدمات اللوجستية، التجزئة).",
        "احتياجات الرخصة التجارية والتأشيرة في ديرة عالية الحجم لكنها روتينية تجاريًا: تجديدات سنوية مع الدائرة، أعداد كبيرة من تأشيرات العمل (غالبًا 50-200 عامل)، الامتثال للوزارة للقوى العاملة من ذوي الياقات الزرقاء، وتقديم نظام حماية الأجور بدورات ضيقة.",
      ],
    },
    whyZetupHere: {
      en: [
        "Volume processing for companies with 50–200 blue-collar visas — bulk-rate pricing",
        "Experience with multi-generational family-owned LLCs and partner-change paperwork",
        "Direct access to nearby Tasheel and Amer centres in Deira and Al Garhoud",
        "Wage Protection System (WPS) coordination and labour-court representation when disputes arise",
      ],
      ar: [
        "معالجة حجمية للشركات التي لديها 50-200 تأشيرة من ذوي الياقات الزرقاء — تسعير حجمي",
        "خبرة مع شركات ذ.م.م العائلية متعددة الأجيال وأوراق تغيير الشركاء",
        "وصول مباشر لمراكز تسهيل وعامر القريبة في ديرة والقرهود",
        "تنسيق نظام حماية الأجور وتمثيل محكمة العمل عند نشوب نزاعات",
      ],
    },
    nearbyOffices: [
      { name: "Tasheel Deira", type: "MOHRE service centre" },
      { name: "Amer Centre Al Garhoud", type: "GDRFA service centre" },
      { name: "DET Deira branch", type: "Trade licence" },
      { name: "Dubai Customs", type: "Goods clearance" },
    ],
    relevantServices: [
      "pro-services",
      "trade-license-renewal",
      "visa-services",
      "document-clearing",
    ],
  },
];

export function findLocation(slug: string): LocationEntry | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

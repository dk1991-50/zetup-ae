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
    slug: "dubai-marina",
    name: { en: "Dubai Marina", ar: "دبي مارينا" },
    tagline: {
      en: "Lifestyle-meets-business waterfront district",
      ar: "منطقة واجهة بحرية تجمع بين الحياة والأعمال",
    },
    coordinates: { lat: 25.0805, lng: 55.1403 },
    shortDef: {
      en: "Dubai Marina is the waterfront mixed-use district of high-rises, restaurants, and hotels. The business mix here is heavy on real-estate brokerages, lifestyle brands, online businesses, and remote-work mainland LLCs whose founders also live in the area.",
      ar: "دبي مارينا هي منطقة الواجهة البحرية متعددة الاستخدامات بأبراجها العالية ومطاعمها وفنادقها. التركيبة التجارية هنا تركز على وكالات العقارات والعلامات التجارية للأسلوب الحياتي والأعمال عبر الإنترنت وشركات ذ.م.م في البر الرئيسي التي يعيش مؤسسوها أيضًا في المنطقة.",
    },
    intro: {
      en: [
        "Dubai Marina is one of Dubai's most recognisable skylines — a 3 km artificial canal lined with 200+ towers, the Walk promenade, and JBR beach next door. From a business standpoint it's a mix: many residents are entrepreneurs running small mainland LLCs from co-working spaces or home, plus traditional offices in towers like DAMAC Heights and Marina Plaza.",
        "Common Marina business profiles: real-estate brokerages (Marina is the highest-density rental and sale market in Dubai), lifestyle and wellness brands, content creators with their own LLCs, online businesses, and small consultancies. Most are 1–10 employees — Marina is not where you find Sheikh Zayed Road's enterprise-scale companies.",
        "Trade-licence-wise, Marina addresses are usually serviced by DET via the broader Jebel Ali / Internet City service-centre catchment. Free-zone alternatives (DMCC, Internet City, Media City) sit just inland but are licensed differently.",
      ],
      ar: [
        "دبي مارينا هي أحد أفقها الأكثر شهرة في دبي — قناة اصطناعية بطول 3 كم تصطف على جانبيها 200+ برج، ممشى الووك، وشاطئ JBR المجاور. من منظور الأعمال هي مزيج: كثير من السكان رواد أعمال يديرون شركات ذ.م.م صغيرة من مساحات العمل المشترك أو من المنزل، إضافة إلى المكاتب التقليدية في أبراج مثل داماك هايتس ومارينا بلازا.",
        "ملامح الأعمال الشائعة في المارينا: وكالات العقارات (المارينا أكثر الأسواق كثافة في دبي للإيجار والبيع)، العلامات التجارية للحياة والعافية، صانعو المحتوى بشركاتهم الخاصة، الأعمال عبر الإنترنت، والاستشارات الصغيرة. معظمها 1-10 موظفين.",
        "فيما يتعلق بالرخصة التجارية، عناوين المارينا عادةً مخدومة من الدائرة عبر منطقة جبل علي / الإنترنت سيتي الواسعة. البدائل في المناطق الحرة (DMCC، الإنترنت سيتي، الميديا سيتي) تقع داخليًا قريبًا لكنها مرخصة بشكل مختلف.",
      ],
    },
    whyZetupHere: {
      en: [
        "Lean retainer pricing optimised for 1–10-employee Marina businesses (from AED 839/month)",
        "Familiar with Marina-specific challenges: real-estate broker compliance, RERA registration, ad-hoc visa needs",
        "Same-day pickup/dropoff in the broader Marina/JBR/Media City corridor",
        "Bilingual Arabic+English support for international founders running Dubai businesses remotely",
      ],
      ar: [
        "تسعير راتب مبسّط محسّن لأعمال المارينا التي لديها 1-10 موظفين (من 839 درهم/شهر)",
        "نعرف تحديات المارينا الخاصة: امتثال وسطاء العقارات، تسجيل ريرا، احتياجات التأشيرات المخصصة",
        "تسليم في نفس اليوم في ممر المارينا/JBR/الميديا سيتي الأوسع",
        "دعم ثنائي اللغة عربي+إنجليزي للمؤسسين الدوليين الذين يديرون أعمال دبي عن بُعد",
      ],
    },
    nearbyOffices: [
      { name: "Tasheel Internet City", type: "MOHRE service centre" },
      { name: "Amer Centre Mall of the Emirates", type: "GDRFA service centre" },
      { name: "RERA (for real-estate brokerages)", type: "Real-estate registration" },
      { name: "DET Jebel Ali branch", type: "Trade licence" },
    ],
    relevantServices: [
      "pro-services",
      "company-formation",
      "visa-services",
      "trade-license-renewal",
    ],
  },
  {
    slug: "jlt",
    name: { en: "JLT (Jumeirah Lakes Towers)", ar: "أبراج بحيرات جميرا" },
    tagline: {
      en: "DMCC free zone — different rules apply",
      ar: "المنطقة الحرة DMCC — قواعد مختلفة",
    },
    coordinates: { lat: 25.0682, lng: 55.1389 },
    shortDef: {
      en: "JLT is the Jumeirah Lakes Towers cluster — a free zone administered by DMCC, not DET. Companies here have 100% foreign ownership by default and different tax rules, but face restrictions when billing UAE mainland customers. ZETUP PRO can help with specific JLT/DMCC tasks.",
      ar: "أبراج بحيرات جميرا (JLT) هي تجمع تابع للمنطقة الحرة DMCC، وليس دائرة الاقتصاد. للشركات هنا ملكية أجنبية 100% افتراضيًا وقواعد ضريبية مختلفة، لكنها تواجه قيودًا عند الفوترة لعملاء البر الرئيسي. زيتب برو يمكنها المساعدة في مهام JLT/DMCC المحددة.",
    },
    intro: {
      en: [
        "JLT (Jumeirah Lakes Towers) is one of Dubai's largest free-zone clusters, home to 7,000+ companies operating under DMCC (Dubai Multi Commodities Centre). Despite the name, DMCC isn't just for commodities — it's a general-purpose free zone for trade, professional services, fintech, crypto, and pretty much anything except heavy industry.",
        "Key differences from mainland: 100% foreign ownership by default, 0% corporate tax on qualifying income (free-zone-to-free-zone, exports, certain qualifying activities), simpler company-formation flow, and a single-authority structure (DMCC handles licence + visa + Emirates ID together via its own systems, not Tasheel/Amer).",
        "The trade-off: a JLT/DMCC company can't directly bill UAE mainland customers above AED 5 million revenue threshold without specific permits. For pure-export businesses, fintech serving international clients, or commodity traders, JLT is excellent. For service businesses targeting UAE mainland customers, DET mainland is usually better.",
      ],
      ar: [
        "JLT هي أحد أكبر تجمعات المناطق الحرة في دبي، تضم 7,000+ شركة تعمل تحت DMCC (مركز دبي للسلع المتعددة). على الرغم من الاسم، DMCC ليس للسلع فقط — هي منطقة حرة عامة للتجارة والخدمات المهنية والتقنية المالية والعملات الرقمية وأي شيء تقريبًا ما عدا الصناعة الثقيلة.",
        "الاختلافات الرئيسية عن البر الرئيسي: ملكية أجنبية 100% افتراضيًا، ضريبة شركات 0% على الدخل المؤهل، تدفق تأسيس شركة أبسط، وهيكل سلطة واحدة (DMCC تعالج الرخصة والتأشيرة والهوية الإماراتية معًا عبر أنظمتها الخاصة، وليس تسهيل/عامر).",
        "المقايضة: لا تستطيع شركة JLT/DMCC الفوترة المباشرة لعملاء البر الرئيسي فوق حد 5 مليون درهم بدون تصاريح محددة. للأعمال التي تركز على التصدير، التقنية المالية للعملاء الدوليين، أو تجار السلع، JLT ممتازة. لأعمال الخدمات المستهدفة لعملاء البر الرئيسي، البر الرئيسي عادةً أفضل.",
      ],
    },
    whyZetupHere: {
      en: [
        "Most JLT-located founders also need mainland presence at some stage — we handle the dual-entity coordination",
        "DMCC requirements for visa renewals, change-of-shareholders, and annual licence renewals",
        "Free-zone-to-mainland transitions when companies outgrow JLT restrictions",
        "Cross-jurisdictional document flows: DMCC → MOFA → mainland banks → mainland clients",
      ],
      ar: [
        "معظم المؤسسين في JLT يحتاجون أيضًا حضور في البر الرئيسي في مرحلة ما — نتعامل مع تنسيق الكيانين",
        "متطلبات DMCC لتجديد التأشيرات، تغيير المساهمين، والتجديد السنوي للرخصة",
        "التحولات من المنطقة الحرة إلى البر الرئيسي عندما تتجاوز الشركات قيود JLT",
        "تدفقات المستندات متعددة الاختصاصات: DMCC ← وزارة الخارجية ← البنوك ← العملاء",
      ],
    },
    nearbyOffices: [
      { name: "DMCC Authority", type: "Free zone licensing" },
      { name: "Amer Centre Mall of the Emirates", type: "GDRFA service centre (for non-DMCC residency)" },
      { name: "Federal Tax Authority HQ", type: "Corporate tax / VAT" },
      { name: "MOFA Tecom branch", type: "Document attestation" },
    ],
    relevantServices: [
      "visa-services",
      "document-clearing",
      "corporate-tax",
      "company-formation",
    ],
  },
  {
    slug: "al-quoz",
    name: { en: "Al Quoz", ar: "القوز" },
    tagline: {
      en: "Dubai's industrial backbone",
      ar: "العمود الفقري الصناعي لدبي",
    },
    coordinates: { lat: 25.1383, lng: 55.2358 },
    shortDef: {
      en: "Al Quoz is Dubai's industrial backbone — warehouses, workshops, fabrication, logistics, automotive, and small manufacturing. Mainland LLCs here typically have 30–300 blue-collar workers, multi-warehouse operations, and high-volume PRO needs.",
      ar: "القوز هو العمود الفقري الصناعي لدبي — المستودعات وورش العمل والتصنيع والخدمات اللوجستية والسيارات والتصنيع الصغير. شركات ذ.م.م في البر الرئيسي هنا عادةً لديها 30-300 عامل من ذوي الياقات الزرقاء، وعمليات متعددة المستودعات، واحتياجات PRO عالية الحجم.",
    },
    intro: {
      en: [
        "Al Quoz spans four main sectors (Industrial 1–4) plus Al Quoz Industrial Area, hosting thousands of mainland LLCs across heavy and light industry. Common business profiles: workshops (woodworking, metalwork, signage), automotive (showrooms, service centres, parts), logistics (warehouses, last-mile delivery), printing and packaging, fabrication, and small-scale manufacturing.",
        "From a corporate-services perspective, Al Quoz companies are typically larger and more labour-intensive than Business Bay tenants. A typical Al Quoz client has 50+ blue-collar employees on Tasheel-managed visas, 1+ company vehicles, and frequent need for activity amendments as they take on new contracts.",
        "Industrial activities trigger extra approvals beyond DET: Dubai Municipality (food production, health-related), Civil Defence (warehousing, hazardous materials), Trakhees (for some industrial buildings). Trade-licence renewals here are not just paperwork — they involve coordinating multiple regulators.",
      ],
      ar: [
        "القوز يمتد عبر أربعة قطاعات رئيسية (الصناعية 1-4) إضافة إلى منطقة القوز الصناعية، ويضم آلاف شركات ذ.م.م في البر الرئيسي عبر الصناعات الثقيلة والخفيفة. ملامح الأعمال الشائعة: ورش عمل (نجارة، حدادة، يافطات)، سيارات (صالات عرض، مراكز خدمة، قطع غيار)، خدمات لوجستية (مستودعات، توصيل الميل الأخير)، طباعة وتغليف، تصنيع، وتصنيع صغير الحجم.",
        "من منظور الخدمات المؤسسية، شركات القوز عادةً أكبر وأكثر كثافة في العمالة من مستأجري الخليج التجاري. عميل القوز النموذجي لديه 50+ موظفًا من ذوي الياقات الزرقاء على تأشيرات مدارة عبر تسهيل، مركبة شركة واحدة أو أكثر، وحاجة متكررة لتعديلات النشاط مع تولي عقود جديدة.",
        "الأنشطة الصناعية تستوجب موافقات إضافية بخلاف الدائرة: بلدية دبي (إنتاج الأغذية، الصحة)، الدفاع المدني (التخزين، المواد الخطرة)، تراخيص (لبعض المباني الصناعية).",
      ],
    },
    whyZetupHere: {
      en: [
        "High-volume processing for companies with 50+ blue-collar visas — bulk-rate pricing",
        "Experience with industrial-activity approvals: Dubai Municipality, Civil Defence, Trakhees",
        "WPS coordination for large workforces and labour-court representation when disputes arise",
        "Activity-amendment expertise as Al Quoz businesses pivot product/service mix",
      ],
      ar: [
        "معالجة عالية الحجم للشركات التي لديها 50+ تأشيرة من ذوي الياقات الزرقاء — تسعير حجمي",
        "خبرة بموافقات الأنشطة الصناعية: بلدية دبي، الدفاع المدني، تراخيص",
        "تنسيق نظام حماية الأجور للقوى العاملة الكبيرة وتمثيل محكمة العمل عند نشوب نزاعات",
        "خبرة بتعديل الأنشطة عند تغيير شركات القوز لمزيج المنتجات/الخدمات",
      ],
    },
    nearbyOffices: [
      { name: "Tasheel Al Quoz", type: "MOHRE service centre" },
      { name: "Amer Centre Al Barsha", type: "GDRFA service centre" },
      { name: "Dubai Municipality", type: "Industrial-activity approvals" },
      { name: "Civil Defence Dubai", type: "Warehousing / hazmat permits" },
    ],
    relevantServices: [
      "pro-services",
      "trade-license-renewal",
      "visa-services",
      "document-clearing",
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

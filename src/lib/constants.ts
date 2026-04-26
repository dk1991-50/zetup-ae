export const SITE_CONFIG = {
  name: "ZETUP PRO Corporate Services",
  url: "https://zetup.ae",
  phone: "+971 58 573 8177",
  whatsapp: "+971585738177",
  whatsappUrl: "https://wa.me/971585738177",
  email: "info@zetup.ae",
  address: {
    street: "Churchill Executive Tower, Floor 35",
    area: "Business Bay",
    city: "Dubai",
    country: "UAE",
  },
  coordinates: { lat: 25.1810619, lng: 55.2627555 },
  social: {
    linkedin: "https://www.linkedin.com/company/zetup-corporate-services",
  },
  founders: {
    dennis: {
      name: "Dennis Kristensen",
      slug: "dennis-kristensen",
      role: "Co-Founder",
      origin: "Denmark",
      nationality: "Danish",
      image: "/images/team/zetup_dennis.jpg",
      // TODO: add personal LinkedIn URL when available
      linkedin: "" as string,
      knowsAbout: [
        "Dubai business setup",
        "PRO services",
        "Scandinavian business culture",
        "UAE corporate transparency",
      ],
    },
    edina: {
      name: "Edina Sultan",
      slug: "edina-sultan",
      role: "Co-Founder",
      experience: "17+ years UAE government expertise",
      image: "/images/team/zetup_edina.jpg",
      // TODO: add personal LinkedIn URL when available
      linkedin: "" as string,
      knowsAbout: [
        "UAE government processes",
        "Visa processing",
        "Emiratisation compliance",
        "Trade license management",
        "Document attestation",
      ],
    },
  },
} as const;

export const SERVICES = [
  {
    slug: "pro-services",
    titleKey: "proServices",
    icon: "FileText",
    description:
      "Government liaison, document processing, and everything between you and Dubai's bureaucracy. We handle Amer, Tasheel, MOHRE, DET, and immigration — so you stay focused on your business.",
    price: "From AED 839/month",
  },
  {
    slug: "company-formation",
    titleKey: "companyFormation",
    icon: "Building2",
    description:
      "Set up your Dubai mainland LLC with full transparency on costs and timelines. From initial approval to trade license issuance, we manage every step.",
    price: "From AED 7,500",
  },
  {
    slug: "visa-services",
    titleKey: "visaServices",
    icon: "Plane",
    description:
      "Employment visas, investor visas, dependent visas, and Golden Visas — processed accurately the first time. No rejected paperwork, no surprises.",
    price: "From AED 3,500",
  },
  {
    slug: "emiratisation",
    titleKey: "emiratisation",
    icon: "Users",
    description:
      "Navigate the 2026 Emiratisation requirements with confidence. Quota tracking, Nafis registration, and MoHRE reporting.",
    price: "From AED 3,000/month",
  },
  {
    slug: "trade-license-renewal",
    titleKey: "tradeLicense",
    icon: "RefreshCw",
    description:
      "Never miss a renewal deadline. We track every expiry date and complete the DET renewal process proactively.",
    price: "Included in retainer",
  },
  {
    slug: "corporate-tax",
    titleKey: "corporateTax",
    icon: "Calculator",
    description:
      "FTA coordination, EmaraTax management, and filing deadline tracking. Your bridge between accountant and government.",
    price: "From AED 3,500/quarter",
  },
  {
    slug: "document-clearing",
    titleKey: "documentClearing",
    icon: "Stamp",
    description:
      "Attestation, MOFA, embassy legalisation, and translation services. Per-document pricing with real-time tracking.",
    price: "From AED 150/document",
  },
  {
    slug: "golden-visa",
    titleKey: "goldenVisa",
    icon: "Award",
    description:
      "End-to-end 10-year residency applications for investors and professionals. Updated Feb 2026 criteria.",
    price: "From AED 5,000",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "essentials",
    price: "8,000",
    bestFor: "25\u201340 employees",
    features: [
      "Trade license renewal & establishment card",
      "Up to 15 visa transactions per month",
      "Emirates ID processing",
      "Labour card processing",
      "Basic Amer & Tasheel services",
      "Named account coordinator",
      "Monthly status report",
      "Same business day response time",
    ],
    overage: "AED 350\u2013500 each",
    highlighted: false,
  },
  {
    name: "professional",
    price: "14,000",
    bestFor: "40\u201380 employees",
    features: [
      "Everything in Essentials, plus:",
      "Up to 30 visa transactions per month",
      "Emiratisation quota tracking & compliance",
      "Document attestation services",
      "Ejari management",
      "Dedicated WhatsApp group",
      "Bi-weekly status calls",
      "4-hour urgent response time",
    ],
    overage: "AED 300\u2013450 each",
    highlighted: true,
  },
  {
    name: "enterprise",
    price: "22,000",
    bestFor: "80\u2013250+ employees",
    features: [
      "Everything in Professional, plus:",
      "Unlimited transactions",
      "Full Emiratisation programme management",
      "Multi-entity support",
      "Quarterly compliance audits",
      "Corporate tax filing coordination",
      "Dedicated senior account manager",
      "2-hour guaranteed response time",
    ],
    overage: "Custom",
    highlighted: false,
  },
] as const;

export const COMPANY = {
  legalName: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  phone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  whatsapp: SITE_CONFIG.whatsappUrl,
  description:
    "ZETUP PRO Corporate Services provides transparent PRO services, mainland company formation, visa processing, and Emiratisation compliance in Dubai.",
  address: {
    street: SITE_CONFIG.address.street,
    city: SITE_CONFIG.address.city,
    region: SITE_CONFIG.address.area,
    country: SITE_CONFIG.address.country,
  },
  social: SITE_CONFIG.social,
} as const;

const SERVICE_LABELS: Record<string, string> = {
  proServices: "PRO Services",
  companyFormation: "Company Formation",
  visaServices: "Visa Processing",
  emiratisation: "Emiratisation",
  tradeLicense: "Trade License Renewal",
  corporateTax: "Corporate Tax",
  documentClearing: "Document Clearing",
  goldenVisa: "Golden Visa",
};

export const NAV_ITEMS = [
  {
    labelKey: "nav.services",
    href: "/services",
    children: SERVICES.map((s) => ({
      labelKey: `services.${s.titleKey}`,
      href: `/services/${s.slug}`,
    })),
  },
  {
    labelKey: "nav.guides",
    href: "/guides",
    children: [
      {
        labelKey: "guides.proServices",
        href: "/guides/pro-services-dubai-complete-guide",
      },
      {
        labelKey: "guides.companyFormation",
        href: "/guides/dubai-mainland-company-formation",
      },
      {
        labelKey: "guides.freeZoneVsMainland",
        href: "/guides/free-zone-vs-mainland",
      },
      {
        labelKey: "guides.visaProcessing",
        href: "/guides/uae-visa-processing",
      },
      {
        labelKey: "guides.emiratisation",
        href: "/guides/emiratisation-compliance-2026",
      },
      {
        labelKey: "guides.corporateTax",
        href: "/guides/uae-corporate-tax",
      },
    ],
  },
  {
    labelKey: "nav.tools",
    href: "/tools/cost-calculator",
    children: [
      { labelKey: "tools.costCalculator", href: "/tools/cost-calculator" },
      { labelKey: "tools.governmentFees", href: "/tools/government-fees" },
      {
        labelKey: "tools.emiratisationCalculator",
        href: "/tools/emiratisation-calculator",
      },
    ],
  },
  { labelKey: "nav.pricing", href: "/pricing" },
  {
    labelKey: "nav.compare",
    href: "/compare",
    children: [
      {
        labelKey: "compare.virtuzone",
        href: "/compare/zetup-pro-vs-virtuzone",
      },
      {
        labelKey: "compare.creativeZone",
        href: "/compare/zetup-pro-vs-creative-zone",
      },
      {
        labelKey: "compare.shuraa",
        href: "/compare/zetup-pro-vs-shuraa",
      },
      {
        labelKey: "compare.marketPricing",
        href: "/compare/pro-services-pricing-comparison-dubai",
      },
    ],
  },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.contact", href: "/contact" },
];

export const NAV_SERVICES = SERVICES.map((s) => ({
  labelKey: `services.${s.titleKey}`,
  href: `/services/${s.slug}`,
}));

export const NAV_GUIDES = [
  {
    labelKey: "guides.proServices",
    href: "/guides/pro-services-dubai-complete-guide",
  },
  {
    labelKey: "guides.companyFormation",
    href: "/guides/dubai-mainland-company-formation",
  },
  {
    labelKey: "guides.freeZoneVsMainland",
    href: "/guides/free-zone-vs-mainland",
  },
  {
    labelKey: "guides.visaProcessing",
    href: "/guides/uae-visa-processing",
  },
  {
    labelKey: "guides.emiratisation",
    href: "/guides/emiratisation-compliance-2026",
  },
  {
    labelKey: "guides.corporateTax",
    href: "/guides/uae-corporate-tax",
  },
];

export const STATS = [
  { value: "100+", label: "Government transactions handled monthly" },
  { value: "17+", label: "Years of combined UAE expertise" },
  { value: "0", label: "Hidden fees — ever" },
] as const;

export const TEAM = [
  {
    name: "Dennis Kristensen",
    role: "Co-Founder",
    bio: "Originally from Denmark, Dennis moved to Dubai to build businesses and saw firsthand how opaque the PRO services market can be. He leads business development, client relationships, and growth strategy.",
    image: "/images/team/zetup_dennis.jpg",
  },
  {
    name: "Edina Sultan",
    role: "Co-Founder",
    bio: "Edina brings over 17 years of hands-on experience with UAE government processes. She leads operations, quality control, and government relations.",
    image: "/images/team/zetup_edina.jpg",
  },
] as const;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  alternateName: "ZETUP PRO",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/misc/logos/zetup_pro_logo_wordmark_color.png`,
  image: `${SITE_CONFIG.url}/images/og/Web_Social_share_templates%20(1).jpg`,
  description:
    "ZETUP PRO Corporate Services provides transparent PRO services, mainland company formation, visa processing, and Emiratisation compliance in Dubai with Scandinavian values.",
  telephone: "+971585738177",
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Churchill Executive Tower, Floor 35, Business Bay",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_CONFIG.coordinates.lat,
    longitude: SITE_CONFIG.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [{ "@type": "City", name: "Dubai" }],
  priceRange: "AED 839 - AED 22,000/month",
  founder: [
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/about#person-dennis-kristensen`,
      name: "Dennis Kristensen",
      jobTitle: "Co-Founder",
      nationality: "Danish",
    },
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/about#person-edina-sultan`,
      name: "Edina Sultan",
      jobTitle: "Co-Founder",
      description: "17+ years UAE government expertise",
    },
  ],
  sameAs: [SITE_CONFIG.social.linkedin],
};

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { AnswerCapsule } from "@/components/sections/AnswerCapsule";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { RelatedPosts } from "@/components/sections/RelatedPosts";
import { SITE_CONFIG } from "@/lib/constants";
import { GLOSSARY as GLOSSARY_LIST } from "@/lib/glossary";
import { CASE_STUDIES } from "@/lib/case-studies";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Service data for all 8 pages                                             */
/* ────────────────────────────────────────────────────────────────────────── */

interface ServiceSection {
  heading: string;
  content: string;
  table?: { headers: string[]; rows: string[][] };
  list?: string[];
}

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  meta: { title: string; description: string };
  h1: string;
  answerCapsule: string;
  priceRange: string;
  /** Optional structured Offer for SERP price rich snippets */
  offer?: {
    priceFrom: string;
    priceCurrency: string;
    billingPeriod: "month" | "year" | "quarter" | "transaction" | "one-time";
  };
  serviceName: string;
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
}

const SERVICE_DATA: Record<string, ServiceData> = {
  "pro-services": {
    meta: {
      title: "PRO Services Dubai — Transparent Government Liaison",
      description:
        "ZETUP PRO provides transparent PRO services for Dubai mainland companies. Visa processing, trade license renewals, document clearing, and Emiratisation compliance. From AED 839/month based on company size.",
    },
    h1: "PRO Services in Dubai — Government Liaison Without the Headaches",
    answerCapsule:
      "PRO services in Dubai handle all government liaison work for your business — including visa processing, trade license renewals, Emirates ID registration, labour card processing, Emiratisation compliance, and document attestation with MOHRE, DET, and GDRFA. ZETUP PRO provides these services on a monthly retainer basis starting from AED 839/month based on employee count, with transparent pricing and no hidden fees.",
    priceRange: "AED 839 - AED 14,008/month",
    offer: {
      priceFrom: "839",
      priceCurrency: "AED",
      billingPeriod: "month",
    },
    serviceName: "PRO Services Dubai",
    sections: [
      {
        heading: "What PRO Services Cover",
        content:
          "A PRO (Public Relations Officer) service company acts as the bridge between your business and Dubai's government agencies. Instead of sending your staff to queue at Amer centres, navigate the MOHRE portal, or figure out what documents the DET needs for your licence renewal, your PRO company handles all of it.\n\nZETUP PRO's PRO services cover the full spectrum of government transactions a Dubai mainland company needs.",
        list: [
          "Employment visa applications and renewals",
          "Visa cancellations and status changes",
          "Emirates ID applications and renewals",
          "Medical fitness test coordination",
          "Entry permit processing",
          "Labour card issuance and renewal",
          "Dependent and family visa processing",
          "Golden Visa applications",
          "Annual trade license renewal with DET",
          "Establishment card renewal with MOHRE",
          "Business activity amendments",
          "Document attestation (MOFA, embassy, notary)",
          "Ejari registration and renewal",
          "Emiratisation quota tracking and reporting",
          "Nafis registration and subsidy coordination",
          "MOHRE compliance monitoring",
        ],
      },
      {
        heading: "How ZETUP PRO's PRO Service Works",
        content:
          "Step 1: PRO Health Check (Free) — We start with a free 30-minute assessment of your current PRO setup. We identify compliance gaps, check visa and licence deadlines, review your Emiratisation status, and compare what you are paying now to what you should be paying.\n\nStep 2: Onboarding (Week 1) — We collect all company documents, set up your dedicated WhatsApp group, build your 12-month renewal calendar, and conduct a full compliance audit. You receive a branded onboarding report on Day 7 showing your compliance status across every obligation.\n\nStep 3: Ongoing Service — Your dedicated account coordinator handles every government transaction. You submit requests via WhatsApp. We process them, provide real-time status updates, and send transparent monthly invoices with government fee receipts attached.",
      },
      {
        heading: "Why Companies Switch Their PRO to ZETUP PRO",
        content:
          "Transparent pricing: We separate service fees from government fees on every invoice. No hidden charges, no surprise add-ons. Your monthly retainer is agreed before we start, and government fees are passed through at cost.\n\nProactive communication: Dedicated WhatsApp group for every client. Status updates before you ask. Renewal reminders 60 days in advance. Regulatory alerts within 24 hours of any changes that affect your business.\n\nFirst-time accuracy: Led by Edina Sultan's 17+ years of UAE government expertise, our team knows what every department needs. Applications go through correctly the first time, saving you the weeks of delays caused by rejected paperwork.\n\nNo lock-in: 30-day termination clause on all agreements. We earn your business through performance, not contractual obligation.",
      },
      {
        heading: "PRO Services Pricing",
        content:
          "Our corporate PRO retainers are structured in a sliding scale based on employee count. Government fees are always billed separately at cost with receipts attached.",
        table: {
          headers: [
            "Company Size",
            "Monthly Retainer",
            "Per Employee/Year",
            "Example",
          ],
          rows: [
            [
              "5 employees",
              "AED 839",
              "AED 1,750",
              "Startups and micro-businesses",
            ],
            ["25 employees", "AED 2,180", "AED 910", "Growing SMEs"],
            ["55 employees", "AED 4,102", "AED 895", "Mid-market companies"],
            ["105 employees", "AED 7,656", "AED 875", "Large companies"],
            [
              "205 employees",
              "AED 14,008",
              "AED 820",
              "Enterprise / multi-entity",
            ],
          ],
        },
      },
      {
        heading: "Industries We Serve",
        content:
          "ZETUP PRO's PRO services team has experience across every major sector operating on Dubai mainland.",
        list: [
          "Professional Services and Consultancy — law firms, accounting firms, management consultancies",
          "Construction and Fit-Out — contractors, engineering firms, project management companies",
          "Hospitality and F&B — restaurants, cafes, hotel management, catering",
          "Real Estate and Property Management — brokerages, property management, facilities management",
          "Trading and Logistics — import/export, general trading, freight forwarding",
          "Technology and IT Services — software companies, IT support, digital agencies",
          "Healthcare and Wellness — clinics, fitness centres, wellness brands",
          "Education — training centres, tutoring, educational consultancies",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a PRO company actually do?",
        answer:
          "A PRO company handles all interactions between your business and UAE government agencies. This includes visa processing, trade licence renewals, document attestation, Emirates ID services, labour card processing, and Emiratisation compliance. We act as your full-time government liaison team.",
      },
      {
        question: "How much do PRO services cost in Dubai?",
        answer:
          "ZETUP PRO's corporate PRO retainers start from AED 839/month based on employee count. The exact cost depends on employee count, expected transaction volume, and service complexity. Government fees are billed separately at cost. We always provide a detailed written quote before engagement.",
      },
      {
        question:
          "Can I outsource PRO services instead of hiring an in-house PRO?",
        answer:
          "Yes, and it is typically 30-50% cheaper. An in-house PRO officer costs AED 8,000-15,000/month in salary alone, plus visa costs, insurance, and office space. With ZETUP PRO, you get a full team for less than the cost of a single hire, with no HR liability.",
      },
      {
        question: "How quickly do you process visas?",
        answer:
          "Standard employment visa processing takes 3-7 business days after all documents are submitted. We offer expedited processing for urgent situations at a premium. Timelines vary by visa type and nationality.",
      },
      {
        question: "What if my current PRO is holding my documents?",
        answer:
          "This is more common than it should be. We have experience managing document handovers from reluctant providers. In most cases, companies are legally entitled to their documents, and we can facilitate the transfer.",
      },
      {
        question: "Do you handle free zone companies?",
        answer:
          "Our primary focus is Dubai mainland (DET) companies. We can assist free zone companies with visa processing, document attestation, and select government services. Contact us to discuss your specific needs.",
      },
      {
        question: "How do you handle Emiratisation?",
        answer:
          "We provide full Emiratisation lifecycle management — from quota calculation and gap analysis through Nafis registration, coordination with Emirati recruitment agencies, onboarding documentation, and ongoing MoHRE compliance reporting. This is available as an add-on or included in our Professional and Enterprise tiers.",
      },
      {
        question: "What happens if there is a problem with a submission?",
        answer:
          "We handle rejections and re-submissions at no additional cost. Our first-time accuracy rate means rejections are rare, but when they happen, we resolve them immediately and keep you informed of the timeline.",
      },
    ],
  },

  "company-formation": {
    meta: {
      title: "Company Formation Dubai Mainland — Setup in Weeks",
      description:
        "Set up your Dubai mainland company with ZETUP PRO. 100% foreign ownership, transparent costs, and step-by-step guidance from trade name to trade license. No hidden fees.",
    },
    h1: "Dubai Mainland Company Formation — Start Your Business With Full Transparency",
    answerCapsule:
      "Setting up a mainland company in Dubai costs approximately AED 25,000-50,000 in the first year, including trade license fees, visa costs, and office registration. The process takes 2-4 weeks from initial approval to trade license issuance. Since 2021, foreign investors can own 100% of mainland companies without a local sponsor for most business activities. ZETUP PRO handles the entire formation process with transparent, itemized pricing.",
    priceRange: "AED 7,500 - AED 15,000",
    offer: {
      priceFrom: "7500",
      priceCurrency: "AED",
      billingPeriod: "one-time",
    },
    serviceName: "Company Formation Dubai",
    sections: [
      {
        heading: "Why Dubai Mainland",
        content:
          "A mainland company — licensed by the Department of Economy and Tourism (DET, formerly DED) — gives you the most flexibility to operate in Dubai.",
        list: [
          "Trade freely within the UAE — sell directly to any customer or government entity in all seven emirates",
          "100% foreign ownership — no local sponsor or partner required for most activities since the 2021 Commercial Companies Law reform",
          "Unlimited visa allocation — visa quota based on office space, not fixed caps",
          "No restrictions on business location — operate from any address in Dubai",
          "Government contract eligibility — mainland companies can bid on and fulfil government contracts",
          "Widest range of business activities — over 2,000 activity codes available",
        ],
      },
      {
        heading: "How Much Does It Cost to Set Up a Company in Dubai Mainland?",
        content:
          "Transparency on cost is where most consultancies fail. Here is a realistic breakdown of first-year costs for a standard mainland LLC. All government fees are approximate and subject to change. We provide exact fee breakdowns in every proposal.",
        table: {
          headers: ["Cost Component", "Approximate Range (AED)", "Notes"],
          rows: [
            ["Trade name reservation", "620-1,000", "DET fee"],
            ["Initial approval", "120-500", "DET fee"],
            ["MOA drafting and notarisation", "2,000-5,000", "Notary Public"],
            [
              "Trade license issuance",
              "10,000-15,000",
              "DET fee, varies by activity",
            ],
            [
              "Office registration (Ejari)",
              "5,000-15,000/year",
              "Flexi-desk, shared, or dedicated",
            ],
            ["Establishment card", "2,000", "MOHRE fee"],
            ["Immigration card", "500-1,000", "GDRFA fee"],
            [
              "ZETUP PRO formation service fee",
              "7,500-15,000",
              "One-time, depends on complexity",
            ],
            ["Estimated total (no visas)", "28,000-52,000", ""],
            [
              "Per employee visa (if needed)",
              "3,500-6,000 each",
              "Includes medical, Emirates ID, labour card",
            ],
          ],
        },
      },
      {
        heading: "Step-by-Step Formation Process",
        content:
          "Step 1: Choose Your Business Activity (Day 1) — Select from DET's 2,000+ activity codes. We help you identify the right activities based on what your company actually does — this is critical because choosing wrong causes costly rejections later.\n\nStep 2: Reserve Your Trade Name (Days 1-2) — Submit your preferred trade name to DET for approval. Names must comply with UAE naming conventions. We check availability before submission.\n\nStep 3: Get Initial Approval (Days 2-3) — DET issues initial approval confirming your business activities and legal form. This approval is required before proceeding with the Memorandum of Association.\n\nStep 4: Draft and Notarise the MOA (Days 3-5) — We prepare the Memorandum of Association outlining company structure, shareholding, and management. Signed and notarised at a Dubai Notary Public.\n\nStep 5: Register Your Office (Days 5-7) — All mainland companies need a registered office address with a valid Ejari contract. Options range from flexi-desk arrangements (AED 5,000-8,000/year) to full office leases.\n\nStep 6: Obtain Your Trade License (Days 7-14) — Submit the complete application to DET. Upon approval, your trade licence is issued and your company is legally operational.\n\nStep 7: Post-License Setup (Days 14-21) — Register for corporate tax with the FTA, open a corporate bank account (we coordinate introductions), obtain an establishment card from MOHRE, and process visas for shareholders and employees.",
      },
      {
        heading: "Documents Required",
        content:
          "For a standard mainland LLC with foreign ownership, you will need the following documents. ZETUP PRO provides a detailed, personalised document checklist based on your specific business activity and shareholder structure.",
        list: [
          "Passport copies of all shareholders (valid for 6+ months)",
          "Passport-size photographs",
          "Entry stamp or valid UAE visa (for shareholders present in UAE)",
          "No Objection Certificate (if shareholder is employed in UAE)",
          "Proof of registered office address (Ejari)",
          "Business plan (for certain activities)",
          "Professional qualifications (for regulated activities like consulting, healthcare, legal)",
        ],
      },
      {
        heading: "ZETUP PRO's Formation Service Includes",
        content:
          "Our formation service is a comprehensive package covering every step from initial planning to post-license compliance.",
        list: [
          "Complete activity code guidance and selection",
          "Trade name reservation and approval",
          "MOA drafting and notarisation coordination",
          "DET application submission and follow-up",
          "Ejari registration assistance",
          "MOHRE and GDRFA card processing",
          "Corporate bank account introductions",
          "Corporate tax registration with FTA",
          "Post-formation compliance checklist",
          "Dedicated account coordinator throughout the process",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a foreigner own 100% of a company in Dubai?",
        answer:
          "Yes. Since June 2021, foreign investors can own 100% of mainland companies for most business activities. A few strategic sectors still require Emirati majority ownership, but ZETUP PRO will confirm full eligibility for your specific activity during the initial consultation.",
      },
      {
        question: "How long does it take to set up a company in Dubai?",
        answer:
          "Typically 2-4 weeks from initial approval to trade license issuance. With the Dubai Instant License programme, certain activity types can be licensed in as little as 5-10 minutes for AED 5,000-18,000 — though this is limited to specific activities and does not include visa processing.",
      },
      {
        question: "Do I need to be in Dubai to set up a company?",
        answer:
          "You need to be present in the UAE for MOA notarisation and certain government steps. Some processes can be initiated remotely via power of attorney, but physical presence is required at key stages. We can advise on the most efficient visit schedule.",
      },
      {
        question: "What is the cheapest way to set up a company in Dubai?",
        answer:
          "The Dubai Instant License (from AED 5,000) is the lowest-cost entry point. For a standard mainland LLC, expect AED 28,000-52,000 in the first year including licence, office, and basic setup. We provide transparent breakdowns so you know exactly where every dirham goes.",
      },
      {
        question: "Mainland or free zone — which is better?",
        answer:
          "It depends on your business model. Mainland is better if you need to trade within the UAE, serve government clients, or want maximum flexibility. Free zones are better if you primarily export, want a tax-specific regime, or prefer a simplified setup.",
      },
      {
        question: "Do I need an office to set up a company?",
        answer:
          "Yes — all mainland companies need a registered office address with a valid Ejari contract. A flexi-desk (virtual office) arrangement starting from AED 5,000/year satisfies this requirement for the first year without needing physical office space.",
      },
      {
        question: "What business activities can I register?",
        answer:
          "DET offers over 2,000 activity codes spanning trading, professional services, industrial, and tourism categories. You can register multiple activities on a single licence. We help you select the right codes during the formation process.",
      },
      {
        question: "What about corporate tax?",
        answer:
          "All mainland companies must register for UAE Corporate Tax with the Federal Tax Authority. The standard rate is 9% on taxable income above AED 375,000. Small Business Relief (available through December 2026) treats taxable income as zero for businesses with revenue under AED 3 million. We coordinate tax registration as part of the formation process.",
      },
    ],
  },

  "visa-services": {
    meta: {
      title:
        "Visa Processing Dubai — Employment, Investor & Golden Visa",
      description:
        "ZETUP PRO handles all visa processing for Dubai mainland companies. Employment visas, investor visas, Golden Visas, dependent visas — processed accurately the first time. No surprises.",
    },
    h1: "Visa Processing in Dubai — Every Visa Type, Handled End-to-End",
    answerCapsule:
      "Visa processing in Dubai covers employment visas (3-7 business days, AED 3,500-6,000 per employee), investor visas (5-10 days, AED 5,000-8,000), Golden Visas (2-4 weeks, 10-year residency), dependent visas (5-10 days, AED 3,000-5,000), and Green Visas (2-3 weeks, 5-year self-sponsored). ZETUP PRO manages the full process for Dubai mainland companies — from MOHRE work permit through Emirates ID and residence visa stamping.",
    priceRange: "AED 3,500 - AED 15,000",
    offer: {
      priceFrom: "3500",
      priceCurrency: "AED",
      billingPeriod: "transaction",
    },
    serviceName: "Visa Processing Dubai",
    sections: [
      {
        heading: "Visa Types We Process",
        content:
          "Employment Visas — The standard work visa for employees joining your company. We handle MOHRE work permit applications, entry permits through GDRFA, medical fitness coordination, Emirates ID processing, labour card issuance, and residence visa stamping. Processing time: 3-7 business days. Cost: AED 3,500-6,000 per employee.\n\nInvestor Visas — For company shareholders and partners. We process investor visa applications through your own company sponsorship, including all required government documentation, medical testing, and Emirates ID. Processing time: 5-10 business days. Cost: AED 5,000-8,000.\n\nGolden Visas — 10-year residency for qualified investors, entrepreneurs, and professionals. Since February 2026, property investors qualify with a DLD valuation of AED 2 million — no down payment requirement. Processing time: 2-4 weeks. Government fees: AED 3,000-5,000.\n\nDependent and Family Visas — Sponsor visas for spouses, children (sons under 25, unmarried daughters), and parents. Processing time: 5-10 business days. Cost: AED 3,000-5,000 per dependent.\n\nGreen Visas — 5-year self-sponsored residency for skilled workers (salary AED 15,000+), freelancers, and small investors. Processing time: 2-3 weeks. Cost: AED 2,500-4,000.\n\nVisa Renewals — All residence visas expire after 2-3 years and require renewal. We track every visa expiry date, send reminders 60 days in advance, and handle the renewal process proactively. Cost: AED 1,500-3,000 per person.\n\nVisa Cancellations — When employees leave your company, their visa must be cancelled through MOHRE and GDRFA. Processing time: 2-5 business days.",
      },
      {
        heading: "Processing Timeline Overview",
        content:
          "A summary of typical processing timelines and costs for each visa type.",
        table: {
          headers: ["Visa Type", "Processing Time", "Total Cost (AED)"],
          rows: [
            ["Employment visa (new)", "3-7 business days", "3,500-6,000"],
            ["Investor visa", "5-10 business days", "5,000-8,000"],
            ["Golden Visa", "2-4 weeks", "8,000-15,000"],
            ["Green Visa", "2-3 weeks", "2,500-4,000"],
            ["Dependent visa", "5-10 business days", "3,000-5,000"],
            ["Visa renewal", "3-5 business days", "1,500-3,000"],
            ["Visa cancellation", "2-5 business days", "500-1,000"],
          ],
        },
      },
      {
        heading: "Why Visa Processing Goes Wrong (and How We Prevent It)",
        content:
          "The most common reason for visa delays is document errors — a name spelling that does not exactly match the passport, missing attestation stamps, incorrect job titles, or outdated document copies. A single error can add 1-3 weeks to the process because the entire application must be resubmitted.\n\nZETUP PRO prevents this through a mandatory pre-submission document review. Every document is checked against the specific requirements of the relevant department before submission. Our team, led by Edina Sultan's 17+ years of government expertise, knows exactly what each department requires — including the unwritten requirements that change periodically without formal announcement.",
      },
      {
        heading: "Documents Required (By Visa Type)",
        content:
          "Employment visa: Passport copy (6+ months validity), passport photo, educational certificates (attested for regulated professions), job offer letter, employer establishment card, employee medical fitness certificate.\n\nInvestor visa: Passport copy, passport photo, trade licence, MOA showing shareholding, proof of investment, medical fitness certificate.\n\nGolden Visa (property investor): Passport copy, DLD property valuation (AED 2M+), title deed, medical fitness certificate.\n\nDependent visa: Sponsor passport and visa copy, sponsor Emirates ID, marriage/birth certificate (attested and translated), sponsor salary certificate, Ejari contract, health insurance proof.",
      },
      {
        heading: "How ZETUP PRO's Visa Service Works",
        content:
          "1. Document collection — We send you a personalised checklist based on the visa type and applicant nationality.\n2. Pre-submission review — Every document checked for accuracy, completeness, and compliance.\n3. Government submission — We handle MOHRE, GDRFA, ICP, and DHA submissions.\n4. Real-time updates — Status notifications via your dedicated WhatsApp group at every stage.\n5. Completion — Visa stamped, Emirates ID issued, all copies provided to you digitally.",
      },
    ],
    faqs: [
      {
        question: "How long does a standard employment visa take?",
        answer:
          "3-7 business days from complete document submission to visa stamping. Most delays are caused by document errors, which our pre-submission review prevents.",
      },
      {
        question: "What happens if a visa application is rejected?",
        answer:
          "We identify the rejection reason, correct the issue, and resubmit — at no additional charge. Common rejections are document errors (fixable in 1-3 days) or medical failures.",
      },
      {
        question: "Can I start an employee before their visa is complete?",
        answer:
          "An employee can enter the UAE on the entry permit and begin working once the MOHRE work permit is approved. However, the full process (medical, Emirates ID, visa stamp) must complete within 60 days.",
      },
      {
        question: "Do you handle Golden Visa applications?",
        answer:
          "Yes. We provide end-to-end Golden Visa management including eligibility assessment, DLD coordination for property investors, document preparation, and application submission.",
      },
      {
        question: "What does visa processing cost per employee?",
        answer:
          "AED 3,500-6,000 for a new employment visa including all government fees, medical, Emirates ID, and our processing fee. Renewals cost AED 1,500-3,000.",
      },
      {
        question: "Can you process visas urgently?",
        answer:
          "Yes. We offer expedited processing for urgent situations at a 25-50% premium. Contact us via WhatsApp for same-day assessment of urgent visa needs.",
      },
      {
        question: "Do you track visa expiry dates?",
        answer:
          "Yes. For all PRO retainer clients, we maintain a complete renewal calendar and send reminders 60 days before any visa expiry. You will never miss a renewal with ZETUP PRO.",
      },
      {
        question: "Can my employees' families get visas?",
        answer:
          "Yes. We process dependent visas for employees' spouses, children, and in some cases parents. The sponsoring employee must meet minimum salary requirements (typically AED 4,000+).",
      },
    ],
  },

  emiratisation: {
    meta: {
      title:
        "Emiratisation Compliance Services Dubai — 2026 Deadlines",
      description:
        "ZETUP PRO manages your Emiratisation compliance end-to-end. Quota tracking, Nafis registration, MOHRE reporting, and penalty avoidance. December 2026 deadline — act now.",
    },
    h1: "Emiratisation Compliance — Navigate the 2026 Deadline With Confidence",
    answerCapsule:
      "Emiratisation requires companies with 50+ employees to reach 10% Emirati skilled workforce by December 2026, with fines of AED 9,000 per month per missing position. ZETUP PRO provides full compliance management — quota calculation, Nafis registration, MOHRE reporting, and recruitment coordination — as an add-on service from AED 3,000/month or included in our Professional and Enterprise PRO tiers.",
    priceRange: "AED 3,000 - AED 8,000/month",
    offer: {
      priceFrom: "3000",
      priceCurrency: "AED",
      billingPeriod: "month",
    },
    serviceName: "Emiratisation Compliance Services",
    sections: [
      {
        heading: "The December 2026 Deadline Is Less Than 9 Months Away",
        content:
          "If your company has 50 or more skilled employees, you must employ a workforce that is 10% Emirati by December 31, 2026. If you have 20-49 employees in a designated sector, you must employ at least 2 UAE nationals. The fines for non-compliance are AED 9,000 per month per missing position — and they start the day you fail your semi-annual assessment.\n\nThis is not a future problem. MOHRE assesses compliance semi-annually (June and December). Companies that are not on track face immediate financial penalties and operational restrictions including work permit suspension.",
      },
      {
        heading: "What ZETUP PRO's Emiratisation Service Covers",
        content:
          "Quota Calculation and Gap Analysis — We calculate your current Emiratisation position based on your MOHRE-registered headcount, identify your target number, and quantify the gap. You receive a clear report showing where you stand and what needs to happen.\n\nNafis Platform Registration — We register your company on the Nafis portal, set up your employer profile, and ensure you are eligible for salary subsidies of up to AED 7,000/month per Emirati hire.\n\nRecruitment Coordination — We coordinate with specialised Emirati recruitment agencies and the Nafis job-matching platform to connect you with qualified candidates. We do not place candidates directly — we manage the compliance and documentation infrastructure around hiring.\n\nEmployment Documentation — We prepare MOHRE-compliant employment contracts, handle WPS registration, process social insurance enrollment, and manage all government documentation for new Emirati hires.\n\nOngoing MOHRE Reporting — Semi-annual compliance submissions, monthly quota tracking, and regular status reports to your management team.\n\nRegulatory Updates — Emiratisation rules change frequently. We provide real-time alerts on regulatory updates, fine adjustments, and new compliance requirements within 24 hours of announcement.",
      },
      {
        heading: "Pricing",
        content:
          "Our Emiratisation services can be engaged as a standalone add-on or included as part of our PRO retainer tiers.",
        table: {
          headers: ["Option", "Monthly Cost", "Best For"],
          rows: [
            [
              "Standalone add-on",
              "AED 3,000-8,000/month",
              "Companies needing Emiratisation support only",
            ],
            [
              "Included for mid-size companies",
              "Included for mid-size companies",
              "40-80 employee companies",
            ],
            [
              "Included for larger companies",
              "Included for larger companies",
              "80+ employee companies",
            ],
          ],
        },
      },
      {
        heading: "The Cost of Doing Nothing",
        content:
          "Non-compliance with Emiratisation requirements carries significant financial penalties. Compare the cost of fines to the cost of compliance: Emirati salaries of AED 6,000+/month (offset by Nafis subsidies of up to AED 7,000/month for bachelor's holders) plus ZETUP PRO's management fee of AED 3,000-8,000/month. For most companies, compliance is significantly cheaper than non-compliance.",
        table: {
          headers: [
            "Your Gap",
            "Monthly Fine",
            "Annual Fine",
            "Plus: Work Permit Fees Increase",
          ],
          rows: [
            [
              "2 positions",
              "AED 18,000",
              "AED 216,000",
              "From AED 250 to AED 3,750 per permit",
            ],
            [
              "5 positions",
              "AED 45,000",
              "AED 540,000",
              "All new permits affected",
            ],
            [
              "10 positions",
              "AED 90,000",
              "AED 1,080,000",
              "Potential work permit suspension",
            ],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Does Emiratisation apply to my company?",
        answer:
          "If you have 50+ skilled employees on mainland, yes — the 10% target applies. If you have 20-49 employees in one of 14 designated sectors, you must employ at least 2 Emiratis.",
      },
      {
        question: "What are the fines for non-compliance?",
        answer:
          "AED 9,000 per month per missing Emirati position in 2026. Additionally: MOHRE classification downgrade, work permit suspension, and loss of Nafis eligibility.",
      },
      {
        question: "Can Nafis subsidies really offset the cost?",
        answer:
          "For bachelor's degree holders, Nafis provides up to AED 7,000/month. Combined with the AED 6,000 minimum wage, the employer's net cost can be near zero in early years.",
      },
      {
        question: "How quickly can ZETUP PRO get us compliant?",
        answer:
          "The documentation and registration process takes 1-2 weeks. The actual hiring timeline depends on finding suitable Emirati candidates — which can take 4-12 weeks depending on roles and market availability.",
      },
      {
        question: "Do we handle the recruitment ourselves?",
        answer:
          "We coordinate with recruitment agencies and Nafis but do not place candidates directly. You interview and select. We handle all documentation, registration, and compliance reporting.",
      },
      {
        question: "What if our Emirati employee resigns?",
        answer:
          "You have a 2-month grace period to hire a replacement. We track this timeline and immediately re-engage recruitment channels when a vacancy occurs.",
      },
    ],
  },

  "trade-license-renewal": {
    meta: {
      title: "Trade License Renewal Dubai — Never Miss a Deadline",
      description:
        "ZETUP PRO manages your Dubai trade licence renewal proactively. 60-day advance reminders, activity amendments, partner changes, and penalty prevention. No missed deadlines.",
    },
    h1: "Trade Licence Renewal in Dubai — Proactive, Not Reactive",
    answerCapsule:
      "Dubai trade licence renewal is an annual obligation with DET, costing approximately AED 10,000-15,000 in government fees depending on business activities. Late renewals trigger a AED 2,000 fine on day one and AED 1,000 per month thereafter. ZETUP PRO manages renewals proactively with 60-day advance reminders and handles all associated requirements including establishment card renewals, activity amendments, and partner changes.",
    priceRange: "Included in PRO retainer",
    serviceName: "Trade License Renewal Dubai",
    sections: [
      {
        heading: "What Trade Licence Renewal Involves",
        content:
          "Annual renewal is more than paying a fee. It involves ensuring all company information is current with DET, all required approvals from secondary departments are valid, the establishment card with MOHRE is renewed, the Ejari contract is active, and any pending compliance issues are resolved before DET processes the renewal.",
      },
      {
        heading: "Renewal Timeline and Process",
        content:
          "ZETUP PRO follows a structured timeline to ensure your licence is renewed well before the expiry date.",
        table: {
          headers: ["Step", "Timeline", "Action"],
          rows: [
            [
              "60 days before expiry",
              "ZETUP PRO sends reminder",
              "Review company details, flag any changes needed",
            ],
            [
              "30 days before expiry",
              "Document preparation",
              "Collect updated documents, confirm Ejari status",
            ],
            [
              "14 days before expiry",
              "Submission to DET",
              "Submit renewal application with all supporting documents",
            ],
            [
              "Expiry date",
              "Licence renewed",
              "New licence issued, valid for 12 months",
            ],
          ],
        },
      },
      {
        heading: "Common Renewal Complications",
        content:
          "Ejari expired or mismatched — DET requires an active Ejari contract matching your registered address. If your lease has expired or you have moved offices, the Ejari must be updated before renewal.\n\nPending MOHRE violations — Outstanding labour complaints, Emiratisation non-compliance, or WPS irregularities can block licence renewal. ZETUP PRO identifies and resolves these before submission.\n\nActivity amendments — If your business activities have changed, the licence must be amended — which requires DET approval and potentially additional department clearances.\n\nPartner changes — Any changes to company ownership must be reflected in the MOA and registered with DET before renewal.",
      },
      {
        heading: "Costs",
        content:
          "A breakdown of typical renewal costs. ZETUP PRO's processing is included in our PRO retainer — no additional fee for renewal handling.",
        table: {
          headers: ["Component", "Approximate AED"],
          rows: [
            ["DET licence renewal fee", "10,000-15,000"],
            ["Establishment card renewal", "2,000"],
            ["Ejari renewal (if needed)", "500-1,500"],
            ["Chamber of Commerce", "500-1,200"],
            ["Approval renewals (if applicable)", "1,000-5,000"],
            ["ZETUP PRO processing fee", "Included in PRO retainer"],
          ],
        },
      },
      {
        heading: "What Happens If You Miss the Deadline",
        content:
          "Missing your trade licence renewal deadline triggers escalating penalties that are entirely avoidable with proactive management.",
        list: [
          "Day 1 after expiry: AED 2,000 fine from DET",
          "Each subsequent month: AED 1,000 additional fine",
          "Continued non-renewal: Potential licence suspension",
          "Licence suspension: Company cannot legally operate, process visas, or renew employee visas",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does trade licence renewal cost?",
        answer:
          "Government fees range from AED 10,000-15,000 depending on business activities. ZETUP PRO's processing is included in our PRO retainer — no additional fee for renewal handling.",
      },
      {
        question: "What is the penalty for late renewal?",
        answer:
          "AED 2,000 on the first day after expiry, plus AED 1,000 per month thereafter until renewal is completed.",
      },
      {
        question: "Can I add or change business activities during renewal?",
        answer:
          "Yes. Activity amendments can be processed alongside or before renewal. Additional DET fees apply (approximately AED 1,000-2,000 per activity change).",
      },
      {
        question: "Do I need an audit for licence renewal?",
        answer:
          "Mainland companies generally need audited financial statements for renewal. The audit must be prepared by a UAE-registered audit firm.",
      },
      {
        question: "What if I have moved offices since my last renewal?",
        answer:
          "Your Ejari must be updated to reflect your current address before DET will process the renewal. ZETUP PRO handles Ejari updates as part of our service.",
      },
      {
        question: "Can ZETUP PRO handle renewals for multiple entities?",
        answer:
          "Yes. Our plans for larger companies include multi-entity support, managing renewals across all your mainland-registered companies from a single account.",
      },
    ],
  },

  "corporate-tax": {
    meta: {
      title:
        "Corporate Tax Services Dubai — FTA Filing & Compliance",
      description:
        "ZETUP PRO coordinates your UAE corporate tax compliance. FTA registration, EmaraTax portal management, filing deadline tracking, and accountant liaison. Small Business Relief guidance.",
    },
    h1: "UAE Corporate Tax Services — Government Coordination Made Simple",
    answerCapsule:
      "UAE Corporate Tax applies a 9% rate on taxable income above AED 375,000 for mainland companies. Small Business Relief (zero tax for revenue under AED 3 million) expires December 2026. ZETUP PRO handles the government coordination layer — FTA registration, EmaraTax portal submissions, deadline tracking, and liaison with your accounting firm — from AED 2,000 per quarter.",
    priceRange: "AED 2,000 - AED 5,000/quarter",
    offer: {
      priceFrom: "2000",
      priceCurrency: "AED",
      billingPeriod: "quarter",
    },
    serviceName: "Corporate Tax Services Dubai",
    sections: [
      {
        heading: "What ZETUP PRO Handles",
        content:
          "We are the bridge between your accountant and the FTA. We handle: EmaraTax portal registration and setup, tax return submission (prepared by your accountant, submitted by us), payment processing through FTA channels, deadline tracking with advance reminders, correspondence with the FTA on your behalf, and regulatory update alerts.\n\nWhat we do not do: tax computation, financial statement preparation, audit work, or tax advisory. These require a qualified accounting firm. We coordinate with your accountant to ensure everything reaches the FTA correctly and on time.",
      },
      {
        heading: "Key 2026 Tax Developments",
        content:
          "Several important changes are taking effect in 2026 that affect your corporate tax obligations.",
        list: [
          "Small Business Relief ends December 31, 2026 — companies with revenue under AED 3 million will need to compute and pay tax from 2027",
          "New penalty regime from April 14, 2026 — late payment now carries 14% per annum (flat), incorrect returns cost AED 500-2,000",
          "E-invoicing preparation phase — mandatory enforcement expected 2027",
          "Increased FTA inspections — 93,000 visits in 2024, cross-referencing VAT and corporate tax returns",
        ],
      },
      {
        heading: "Pricing",
        content:
          "Our corporate tax coordination services are priced based on complexity and can be engaged alongside or separate from our PRO retainers.",
        table: {
          headers: ["Service", "Cost"],
          rows: [
            [
              "Corporate tax coordination (quarterly)",
              "AED 2,000-5,000/quarter",
            ],
            [
              "Included for larger companies tier",
              "Included for larger companies",
            ],
            [
              "FTA registration (one-time)",
              "Included in company formation service",
            ],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Does my company need to register for corporate tax?",
        answer:
          "Yes. All UAE companies must register with the FTA regardless of revenue. Registration is free and done through EmaraTax.",
      },
      {
        question: "When does Small Business Relief expire?",
        answer:
          "December 31, 2026. After this date, all companies must compute and pay corporate tax normally, regardless of revenue.",
      },
      {
        question: "Can I deduct my PRO retainer from taxable income?",
        answer:
          "Yes. Professional service fees including PRO retainers are deductible business expenses.",
      },
      {
        question: "What happens if I miss a filing deadline?",
        answer:
          "Under the new regime: AED 500 for first late filing, AED 1,000 for repeat. Late payment: 14% per annum on the outstanding amount.",
      },
      {
        question:
          "Do I need a separate accountant, or does ZETUP PRO handle everything?",
        answer:
          "You need a qualified accountant for tax computation and financial statements. ZETUP PRO handles the government coordination — registration, portal management, submission, and deadline tracking.",
      },
    ],
  },

  "document-clearing": {
    meta: {
      title:
        "Document Clearing & Attestation Dubai — MOFA, Embassy",
      description:
        "ZETUP PRO handles document attestation, MOFA legalisation, embassy attestation, and certificate clearing in Dubai. Fast processing, transparent pricing, status tracking.",
    },
    h1: "Document Clearing and Attestation in Dubai — Fast, Tracked, Transparent",
    answerCapsule:
      "Document clearing services in Dubai handle the attestation and legalisation of documents required for business and personal purposes — including MOFA attestation, embassy legalisation, notary public services, educational certificate attestation, and commercial document clearing. ZETUP PRO processes all document types with real-time status tracking and transparent per-document pricing.",
    priceRange: "AED 150 - AED 1,000/document",
    offer: {
      priceFrom: "150",
      priceCurrency: "AED",
      billingPeriod: "transaction",
    },
    serviceName: "Document Clearing and Attestation Dubai",
    sections: [
      {
        heading: "Attestation Services We Provide",
        content:
          "We handle every stage of the document attestation process, from initial submission through final authentication.",
        list: [
          "MOFA attestation — Ministry of Foreign Affairs authentication for documents destined for use in the UAE",
          "Embassy and consulate attestation — Legalisation by the relevant country's embassy or consulate in the UAE",
          "Notary public services — Coordination with Dubai Notary Public for document notarisation",
          "Educational certificate attestation — Required for regulated professional activities and visa applications",
          "Commercial document attestation — MOA, board resolutions, powers of attorney, trade licences",
          "Translation services — Coordination with licensed Arabic translators for official document translation",
        ],
      },
      {
        heading: "The Attestation Process",
        content:
          "Most documents follow a standard attestation chain:\n\n1. Home country attestation — document authenticated by the issuing country's authorities\n2. UAE Embassy attestation — UAE embassy in the home country authenticates the document\n3. MOFA attestation — Ministry of Foreign Affairs in the UAE provides final authentication\n\nFor documents already in the UAE, the chain may start at the notary public or relevant government department. ZETUP PRO manages the entire chain, tracking each document through every stage and providing updates via WhatsApp.",
      },
      {
        heading: "Pricing",
        content:
          "Our document clearing services use transparent per-document pricing. Government fees are separate and passed through at cost.",
        table: {
          headers: ["Service", "Cost (AED)", "Processing Time"],
          rows: [
            ["MOFA attestation", "150-300/document", "1-3 business days"],
            ["Embassy attestation", "200-1,000/document", "3-10 business days"],
            [
              "Notary public coordination",
              "200-500/document",
              "1-2 business days",
            ],
            ["Document translation", "150-500/page", "2-5 business days"],
            ["Express processing", "50% premium", "Reduced timeline"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How long does MOFA attestation take?",
        answer:
          "Standard processing is 1-3 business days. Express processing is available for urgent documents.",
      },
      {
        question: "Do you handle documents from other countries?",
        answer:
          "We handle the UAE-side attestation (MOFA, notary). For home country attestation, we can advise on the process but cannot directly manage foreign government procedures.",
      },
      {
        question: "What documents need attestation for a visa application?",
        answer:
          "Educational certificates and professional qualifications typically need attestation for employment visa applications in regulated professions.",
      },
      {
        question: "Is there a difference between attestation and apostille?",
        answer:
          "An apostille is a simplified form of authentication between countries that are parties to the Hague Apostille Convention. The UAE joined the Convention in 2024, which simplifies the process for documents from member countries. Traditional attestation involves a longer chain of authentication.",
      },
      {
        question: "Can you handle bulk document processing?",
        answer:
          "Yes. For companies processing multiple employee documents, we offer volume pricing and batch processing with tracking for each individual document.",
      },
    ],
  },

  "golden-visa": {
    meta: {
      title:
        "Golden Visa Dubai 2026 — 10-Year Residency Application",
      description:
        "ZETUP PRO handles end-to-end Golden Visa applications in Dubai. Updated Feb 2026 criteria: AED 2M property (no down payment), new AI & creator categories. Processing in 2-4 weeks.",
    },
    h1: "Golden Visa Dubai — 10-Year Residency, Processed End-to-End",
    answerCapsule:
      "The UAE Golden Visa grants 10-year residency without a sponsor, with benefits including extended overseas stays and family sponsorship. As of February 2026, property investors qualify with a DLD valuation of AED 2 million (no down payment requirement). ZETUP PRO provides end-to-end application management for AED 5,000-10,000 plus government fees of approximately AED 3,000-5,000.",
    priceRange: "AED 5,000 - AED 10,000",
    offer: {
      priceFrom: "5000",
      priceCurrency: "AED",
      billingPeriod: "one-time",
    },
    serviceName: "Golden Visa Dubai",
    sections: [
      {
        heading: "Who Qualifies in 2026",
        content:
          "The Golden Visa is available to multiple categories of applicants. February 2026 update: The 50% down payment requirement for property investors has been removed. A DLD valuation at AED 2 million is now the sole criterion — the property can be fully mortgaged.",
        table: {
          headers: ["Category", "Key Requirement"],
          rows: [
            [
              "Real estate investors",
              "Property valued at AED 2M+ (DLD valuation, can be mortgaged)",
            ],
            [
              "Business investors",
              "AED 2M+ in approved investments or business capital",
            ],
            [
              "Entrepreneurs",
              "Incubator-approved startup or AED 500K+ revenue",
            ],
            [
              "Exceptional talent",
              "Science, art, culture, sports, digital technology",
            ],
            [
              "Scientists and researchers",
              "Published research, PhD, significant academic contribution",
            ],
            [
              "Content creators",
              "Via Creators HQ (up to 10,000 visas available)",
            ],
            [
              "AI and technology specialists",
              "Demonstrated expertise in AI and emerging technology",
            ],
            [
              "Sustainability professionals",
              "Environmental contributions (Blue Visa variant)",
            ],
          ],
        },
      },
      {
        heading: "Golden Visa Benefits",
        content:
          "The Golden Visa offers significant advantages over standard UAE residency visas.",
        list: [
          "10-year renewable residency",
          "No employer sponsor required",
          "Extended stays outside UAE without losing residency",
          "Sponsor family members (spouse, children, parents)",
          "Sponsor domestic workers",
          "100% business ownership",
        ],
      },
      {
        heading: "ZETUP PRO's Golden Visa Service",
        content:
          "Our end-to-end service covers every step of the Golden Visa application process.\n\n1. Eligibility assessment — We confirm your qualification based on current criteria\n2. Document preparation — Complete checklist tailored to your category\n3. DLD coordination (property investors) — Valuation certificate procurement\n4. Application submission — Full application management through government channels\n5. Medical and Emirates ID — Coordination of all required processing\n6. Family applications — Dependent Golden Visa processing for spouse and children\n7. Status updates — Real-time progress via WhatsApp throughout\n\nPricing: AED 5,000-10,000 service fee plus approximately AED 3,000-5,000 in government fees. Total timeline: 2-4 weeks.",
      },
    ],
    faqs: [
      {
        question: "Can I get a Golden Visa if my property is mortgaged?",
        answer:
          "Yes. Since February 2026, the down payment requirement has been removed. You qualify with a DLD valuation of AED 2 million regardless of your mortgage status.",
      },
      {
        question: "How long does Golden Visa processing take?",
        answer:
          "Typically 2-4 weeks from complete document submission to visa issuance.",
      },
      {
        question: "Can Golden Visa holders sponsor their parents?",
        answer:
          "Yes — without the salary thresholds that apply to standard visa holders.",
      },
      {
        question: "Does the Golden Visa expire?",
        answer:
          "It is valid for 10 years and renewable. There are no restrictions on time spent outside the UAE, unlike standard residence visas.",
      },
      {
        question:
          "Can I apply for a Golden Visa while in the UAE on a tourist visa?",
        answer:
          "Yes. The application can be processed within the UAE regardless of your current visa status.",
      },
      {
        question: "What is the Blue Visa?",
        answer:
          "A 10-year residency variant for individuals making significant environmental or sustainability contributions. Launched February 2025, it follows similar processing to the Golden Visa.",
      },
    ],
  },
};

const SERVICE_HEADER_IMAGES: Record<string, string> = {
  "pro-services": "/images/services/photos/services_photos_pro-services.jpg",
  "company-formation":
    "/images/services/photos/services_photos_company-formation.jpg",
  "visa-services": "/images/services/photos/services_photos_visa-services.jpg",
  emiratisation: "/images/services/photos/services_photos_emiratisation.jpg",
  "trade-license-renewal":
    "/images/services/photos/services_photos_trade-license-renewal.jpg",
  "corporate-tax": "/images/services/photos/services_photos_corporate-tax.jpg",
  "document-clearing":
    "/images/services/photos/services_photos_document-clearing.jpg",
  "golden-visa": "/images/services/photos/services_photos_golden-visa.jpg",
};

const SERVICE_TITLES: Record<string, string> = {
  "pro-services": "PRO Services",
  "company-formation": "Company Formation",
  "visa-services": "Visa Processing",
  emiratisation: "Emiratisation",
  "trade-license-renewal": "Trade License Renewal",
  "corporate-tax": "Corporate Tax",
  "document-clearing": "Document Clearing",
  "golden-visa": "Golden Visa",
};

/* ────────────────────────────────────────────────────────────────────────── */
/*  Static params                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

const locales = ["en", "ar"];
const slugs = [
  "pro-services",
  "company-formation",
  "visa-services",
  "emiratisation",
  "trade-license-renewal",
  "corporate-tax",
  "document-clearing",
  "golden-visa",
];

export function generateStaticParams() {
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Metadata                                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = SERVICE_DATA[slug];

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/services/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/services/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/services/${slug}`,
        "x-default": `${SITE_CONFIG.url}/en`,
      },
    },
  };
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = SERVICE_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero with header image */}
      {SERVICE_HEADER_IMAGES[slug] && (
        <section className="relative h-[40vh] min-h-[280px] md:h-[50vh] md:min-h-[350px] flex items-end overflow-hidden">
          <Image
            src={SERVICE_HEADER_IMAGES[slug]}
            alt={SERVICE_TITLES[slug] || slug}
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fjord-950/90 via-fjord-950/50 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-10 md:pb-14 md:px-8 lg:px-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display backdrop-blur-sm">
              {SERVICE_TITLES[slug] || slug}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {service.h1}
            </h1>
          </div>
        </section>
      )}

      {/* Answer Capsule */}
      <section className="py-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <AnswerCapsule>
            <p>{service.answerCapsule}</p>
          </AnswerCapsule>
        </div>
      </section>

      {/* Content Sections */}
      {service.sections.map((section, index) => (
        <section
          key={section.heading}
          className={`py-16 md:py-20 px-6 md:px-8 lg:px-12 ${index % 2 === 1 ? "bg-frost" : ""}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-6">
              {section.heading}
            </h2>
            <div className="prose prose-lg text-slate max-w-none prose-p:leading-relaxed">
              {section.content.split("\n\n").map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>

            {/* Optional list */}
            {section.list && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {section.list.map((item, lIndex) => (
                  <li
                    key={lIndex}
                    className="flex items-start gap-3 text-slate"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500" />
                    <span className="leading-relaxed text-sm font-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Optional table */}
            {section.table && (
              <div className="mt-8 overflow-x-auto rounded-xl border border-mist bg-white">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-mist bg-frost">
                      {section.table.headers.map((header) => (
                        <th
                          key={header}
                          className="text-start py-4 px-5 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-slate">
                    {section.table.rows.map((row, rIndex) => (
                      <tr
                        key={rIndex}
                        className="border-b border-mist last:border-b-0 hover:bg-frost/50 transition-colors"
                      >
                        {row.map((cell, cIndex) => (
                          <td
                            key={cIndex}
                            className={`py-3.5 px-5 ${cIndex === 0 ? "font-medium text-graphite" : ""}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="bg-frost">
        <FAQSection items={service.faqs} />
      </section>

      {/* CTA */}
      <CTABanner
        title="Get a Free PRO Health Check"
        description="Book a 30-minute assessment. We will review your current setup, identify gaps, and provide a clear action plan — no obligation."
        primaryCta={
          <Link
            href="/pro-health-check"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            Book Your Health Check
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        }
        secondaryCta={
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors font-display"
          >
            Contact Us
          </Link>
        }
      />

      {/* Real-outcome case studies — proof block for conversion */}
      {(() => {
        const matchingCaseStudies = CASE_STUDIES.filter((c) =>
          c.servicesUsed.includes(slug),
        ).slice(0, 2);
        if (matchingCaseStudies.length === 0) return null;
        return (
          <section className="py-16 px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <RelatedPosts
                heading={
                  locale === "ar"
                    ? "نتائج حقيقية لعملاء حقيقيين"
                    : "Real outcomes for real clients"
                }
                seeAllLabel={
                  locale === "ar" ? "كل دراسات الحالة" : "All case studies"
                }
                seeAllHref="/case-studies"
                items={matchingCaseStudies.map((c) => ({
                  href: `/case-studies/${c.slug}`,
                  title: c.title[locale === "ar" ? "ar" : "en"],
                  description: c.summary[locale === "ar" ? "ar" : "en"],
                  badge: c.industry[locale === "ar" ? "ar" : "en"],
                }))}
              />
            </div>
          </section>
        );
      })()}

      {/* Related glossary cross-links — internal linking for AEO */}
      {(() => {
        const relatedTerms = GLOSSARY_LIST.filter((g) => g.relatedService === slug).slice(0, 4);
        if (relatedTerms.length === 0) return null;
        return (
          <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-y border-mist">
            <div className="max-w-3xl mx-auto">
              <RelatedPosts
                heading={
                  locale === "ar"
                    ? "مصطلحات ذات صلة من القاموس"
                    : "Related glossary terms"
                }
                seeAllLabel={locale === "ar" ? "كل المصطلحات" : "All terms"}
                seeAllHref="/glossary"
                items={relatedTerms.map((g) => ({
                  href: `/glossary/${g.slug}`,
                  title: g.term[locale === "ar" ? "ar" : "en"],
                  description: g.shortDef[locale === "ar" ? "ar" : "en"],
                  badge: locale === "ar" ? "مصطلح" : "Term",
                }))}
              />
            </div>
          </section>
        );
      })()}

      {/* Schema Markup */}
      <ServiceSchema
        name={service.serviceName}
        description={service.meta.description}
        priceRange={service.priceRange}
        offer={service.offer}
        slug={slug}
      />
      <FAQSchema items={service.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Services", url: `${SITE_CONFIG.url}/${locale}/services` },
          {
            name: SERVICE_TITLES[slug] || slug,
            url: `${SITE_CONFIG.url}/${locale}/services/${slug}`,
          },
        ]}
      />
    </>
  );
}

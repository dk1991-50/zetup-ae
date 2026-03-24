import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PricingTable } from "@/components/sections/PricingTable";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title:
      locale === "ar"
        ? "خدمات PRO دبي | تأسيس الشركات ومعالجة التأشيرات | زيتب"
        : "PRO Services Dubai | Company Formation & Visa Processing | ZETUP",
    description:
      locale === "ar"
        ? "زيتب للخدمات المؤسسية تقدم خدمات PRO شفافة وتأسيس الشركات ومعالجة التأشيرات والامتثال للتوطين في دبي. بمعايير اسكندنافية: بدون رسوم مخفية."
        : "ZETUP Corporate Services provides transparent PRO services, mainland company formation, visa processing, and Emiratisation compliance in Dubai. Scandinavian values: no hidden fees.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}`,
      languages: { en: `${SITE_CONFIG.url}/en`, ar: `${SITE_CONFIG.url}/ar` },
    },
  };
}

const homepageFAQs = [
  {
    question: "What are PRO services in Dubai?",
    answer:
      "PRO (Public Relations Officer) services handle all government liaison work for your business in Dubai — including visa processing, trade license renewals, Emirates ID registration, labour card processing, and document attestation with MOHRE, DET, and GDRFA.",
  },
  {
    question: "How much do PRO services cost in Dubai?",
    answer:
      "ZETUP's PRO retainers start from AED 8,000 per month for companies with 25–40 employees. The exact cost depends on your employee count, transaction volume, and service tier.",
  },
  {
    question: "Do I need PRO services if I have a small company?",
    answer:
      "Any Dubai company that processes visas, renews trade licenses, or deals with government agencies can benefit from PRO services. For companies with 10+ employees, outsourcing is typically 30–50% cheaper than hiring an in-house PRO officer.",
  },
  {
    question:
      "What is the difference between mainland and free zone companies?",
    answer:
      "Mainland companies (licensed by DET) can trade directly within the UAE market and have no restrictions on business activities. Free zone companies are restricted to operating within their zone or internationally.",
  },
  {
    question: "What are the Emiratisation requirements for 2026?",
    answer:
      "Companies with 50+ employees must reach 10% Emirati skilled workforce by December 2026. Non-compliance fines are AED 9,000 per month per missing position.",
  },
  {
    question: "How long does visa processing take in Dubai?",
    answer:
      "Standard employment visa processing takes 3–7 business days after all documents are submitted. Golden Visa applications take 2–4 weeks.",
  },
  {
    question: "Can I switch PRO providers without disruption?",
    answer:
      "Yes. ZETUP manages the full handover from your current provider. We audit all existing visa and license statuses, create a renewal calendar, and take over active transactions without any gap in service.",
  },
  {
    question: "What is a PRO Health Check?",
    answer:
      "Our free 30-minute assessment where we review your current PRO setup, check Emiratisation compliance status, identify any overpayments or gaps, and provide a clear action plan.",
  },
  {
    question: "Does ZETUP handle free zone companies?",
    answer:
      "Our primary focus is Dubai mainland (DET) companies. We can assist free zone companies with visa processing, document attestation, and certain government services.",
  },
  {
    question: "Where is ZETUP's office?",
    answer:
      "We are located on Floor 35 of Churchill Executive Tower in Business Bay, Dubai. Our office is open Sunday to Thursday, 9 AM to 6 PM.",
  },
];

const processSteps = [
  {
    title: "Free PRO Health Check",
    description:
      "We review your current PRO setup, identify compliance gaps, and show you where you might be overpaying. 30 minutes, no obligation.",
  },
  {
    title: "Clear Proposal",
    description:
      "Within 48 hours, you receive a one-page proposal with your recommended service tier, exact monthly retainer, and everything included.",
  },
  {
    title: "Seamless Handover",
    description:
      "We take over from your current provider with zero disruption. You get a full 12-month renewal calendar on Day 7.",
  },
  {
    title: "Ongoing Service",
    description:
      "Your dedicated account coordinator handles every transaction. Real-time WhatsApp updates. Monthly compliance reports.",
  },
];

const testimonials = [
  {
    quote:
      "Switching to ZETUP was the best operational decision we made in 2025. For the first time, our visa renewals happen on schedule and our invoices match what we agreed.",
    author: "Client",
    title: "Operations Director",
    company: "Construction Company, 50+ employees",
  },
  {
    quote:
      "After years of surprise fees from our previous PRO company, ZETUP's transparency is genuinely refreshing. They told us the price, delivered the service, and the invoice matched.",
    author: "Client",
    title: "Managing Director",
    company: "Consultancy, 30+ employees",
  },
  {
    quote:
      "ZETUP handled our entire Emiratisation compliance setup and we went from non-compliant to fully meeting our target in under three months.",
    author: "Client",
    title: "HR Director",
    company: "Hospitality Company, 70+ employees",
  },
];

const clientLogos = [
  { src: "/images/misc/customer_logos/misc_logo-customer1.jpg", alt: "Client" },
  {
    src: "/images/misc/customer_logos/misc_avis-logo-customer2.jpg",
    alt: "Avis",
  },
  {
    src: "/images/misc/customer_logos/misc_emirates-logo-customer3.jpg",
    alt: "Emirates",
  },
  {
    src: "/images/misc/customer_logos/misc_btproperties-logo-customer4.jpg",
    alt: "BT Properties",
  },
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        primaryCta={
          <Link
            href="/pro-health-check"
            className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors text-lg"
          >
            {t("hero.ctaPrimary")}
          </Link>
        }
        secondaryCta={
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-lg"
          >
            {t("hero.ctaSecondary")}
          </Link>
        }
      />
      <TrustBar />

      <section className="py-24 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-aurora-50 border border-aurora-200">
              <span className="text-xs font-bold text-aurora-600 uppercase tracking-widest">
                {t("sections.problemLabel")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fjord-900 leading-tight">
              {t("sections.problemTitle")}
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-graphite font-body">
            <p>
              Every business owner in Dubai knows the frustration. Your PRO
              company says &ldquo;tomorrow&rdquo; but tomorrow never comes. Your
              visa renewal is delayed and your new hire cannot start working.
              Your invoice arrives with charges you never agreed to.
            </p>
            <p>
              We started ZETUP because we experienced these problems ourselves.
              As a Danish entrepreneur setting up in Dubai, Dennis Kristensen
              saw firsthand how opaque the PRO services market can be. Edina
              Sultan, with over 17 years of UAE government expertise, knew it
              could be done better.
            </p>
            <p className="text-fjord-900 font-semibold border-s-4 border-sage-400 ps-6">
              ZETUP is the result: a PRO company built on Scandinavian values of
              transparency, reliability, and straight talk.
            </p>
          </div>
        </div>
      </section>

      {/* Licensed & Regulated */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-white border-y border-mist">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-8">
            We Work With
          </p>
          <div className="flex items-center justify-center gap-16">
            <img
              src="/images/misc/government_logos/misc_dubai-det-logo.jpg"
              alt="Dubai DET"
              className="h-16 w-auto object-contain"
            />
            <img
              src="/images/misc/government_logos/misc_mohre-logo.jpg"
              alt="MOHRE"
              className="h-16 w-auto object-contain"
            />
            <img
              src="/images/misc/government_logos/misc_dubai-government-logo.jpg"
              alt="Dubai Government"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-12 text-center">
            {t("sections.servicesTitle")}
          </h2>
          <ServicesGrid />
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-sage-50 border border-sage-200">
              <span className="text-xs font-bold text-sage-600 uppercase tracking-widest">
                {t("sections.promiseLabel")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fjord-900">
              {t("sections.whyTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Transparent Pricing",
                text: "Your quote is your quote. We separate our service fees from government fees on every invoice. No hidden charges, no surprise add-ons.",
              },
              {
                num: "02",
                title: "Proactive Communication",
                text: "Every client gets a dedicated WhatsApp group with real-time status updates. We send renewal reminders 60 days in advance.",
              },
              {
                num: "03",
                title: "First-Time Accuracy",
                text: "Led by Edina Sultan\u2019s 17+ years of government expertise, our team knows exactly what every department needs.",
              },
              {
                num: "04",
                title: "No Lock-In Contracts",
                text: "Our standard agreements include a 30-day termination clause. We earn your business every month through performance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl border border-mist bg-white hover:border-sage-200 transition-all duration-300"
              >
                <span className="absolute top-6 end-6 font-display text-4xl font-extrabold text-fjord-50 group-hover:text-sage-50 transition-colors">
                  {item.num}
                </span>
                <h3 className="font-display text-lg font-bold text-fjord-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-12 text-center">
            {t("sections.processTitle")}
          </h2>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Video section */}
      <section className="py-24 px-6 md:px-8 lg:px-12 bg-fjord-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-950" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-sage-500/5 blur-[60px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <span className="text-xs font-bold text-sage-400 uppercase tracking-widest">
                See ZETUP in Action
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              How We Work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "/videos/web_landscape_video_template%20(1).mp4",
                label: "Our Approach",
              },
              {
                src: "/videos/web_landscape_video_template%20(2).mp4",
                label: "Client Experience",
              },
              {
                src: "/videos/web_landscape_video_template%20(3).mp4",
                label: "Dubai Operations",
              },
            ].map((video) => (
              <div key={video.label} className="group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-fjord-900">
                  <video
                    className="w-full aspect-video object-cover"
                    controls
                    preload="metadata"
                    playsInline
                    poster=""
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <p className="mt-3 text-sm font-medium text-slate-400 text-center font-body">
                  {video.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-12 text-center">
            {t("sections.testimonialsTitle")}
          </h2>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Client logos */}
      <section className="py-12 px-6 md:px-8 lg:px-12 border-y border-mist bg-frost">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone mb-8">
            Trusted by companies across Dubai
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {clientLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={t("sections.ctaTitle")}
        description="Get a free 30-minute PRO Health Check. We will review your current setup, identify any compliance gaps, and show you exactly what transparent PRO services should cost."
        primaryCta={
          <Link
            href="/pro-health-check"
            className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
          >
            {t("cta.bookHealthCheck")}
          </Link>
        }
        secondaryCta={
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
          >
            {t("cta.whatsapp")}
          </a>
        }
      />

      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FAQSection items={homepageFAQs} />
        </div>
      </section>

      <FAQSchema items={homepageFAQs} />
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_CONFIG.url }]} />
    </>
  );
}

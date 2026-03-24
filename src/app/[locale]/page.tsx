import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SITE_CONFIG } from "@/lib/constants";

async function handleContactForm(formData: FormData) {
  "use server";
  const { redirect } = await import("next/navigation");
  const { supabase } = await import("@/lib/supabase");
  const { error } = await supabase.from("contact_submissions").insert({
    form_type: "contact",
    full_name: formData.get("name")?.toString() ?? "",
    company_name: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    service_interest: formData.get("service")?.toString() || null,
    message: formData.get("message")?.toString() || null,
  });
  if (error) {
    throw new Error("Failed to submit form");
  }
  redirect("/en/contact?success=true");
}

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
      "The cost depends on your employee count, transaction volume, and service tier. We provide a detailed written quote before engagement. Visit our pricing page for published starting rates.",
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

      <section className="relative py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/videos/web_landscape_video_template%20(1).mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative max-w-7xl mx-auto">
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
                className="group relative p-8 rounded-2xl border border-mist bg-white shadow-md shadow-fjord-900/5 hover:border-sage-300 hover:shadow-2xl hover:shadow-sage-500/15 hover:-translate-y-2 transition-all duration-300"
              >
                <span className="absolute top-5 end-6 font-display text-6xl font-extrabold text-fjord-100 group-hover:text-sage-200 transition-colors duration-300">
                  {item.num}
                </span>
                <h3 className="relative font-display text-lg font-bold text-fjord-900 mb-3">
                  {item.title}
                </h3>
                <p className="relative text-slate leading-relaxed text-sm">
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

      {/* Video background CTA */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/videos/web_landscape_video_template%20(2).mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-fjord-950/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Your Business Deserves a PRO Partner You Can Trust
          </h2>
          <p className="mt-6 text-lg text-slate-300 font-body max-w-xl mx-auto">
            Join companies across Dubai who switched to transparent, reliable
            PRO services with Scandinavian values.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pro-health-check"
              className="inline-block px-8 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
            >
              {t("cta.bookHealthCheck")}
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              {t("cta.whatsapp")}
            </a>
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
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-white border-y border-mist">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-8">
            Trusted By Companies Across Dubai
          </p>
          <div className="flex items-center justify-center gap-16">
            {clientLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain"
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

      {/* Contact form */}
      <section className="py-24 px-6 md:px-8 lg:px-12 bg-frost border-t border-mist">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-sage-50 border border-sage-200">
              <span className="text-xs font-bold text-sage-600 uppercase tracking-widest">
                {t("cta.contactUs")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fjord-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate font-body mb-8">
              Fill in the form and our team will get back to you within 24
              hours. Or reach us directly:
            </p>
            <div className="space-y-4">
              <a
                href={`${SITE_CONFIG.whatsappUrl}?text=Hi%20ZETUP%2C%20I%27d%20like%20to%20learn%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-graphite hover:text-sage-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-medium">+971 58 573 8177</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 text-graphite hover:text-sage-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-medium">{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-graphite hover:text-sage-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="font-medium">{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>

          <form
            action={handleContactForm}
            className="bg-white rounded-2xl border border-mist p-8 shadow-md"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="hp-name"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  {t("form.fullName")} *
                </label>
                <input
                  type="text"
                  id="hp-name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow"
                />
              </div>
              <div>
                <label
                  htmlFor="hp-company"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  {t("form.companyName")} *
                </label>
                <input
                  type="text"
                  id="hp-company"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="hp-email"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  {t("form.email")} *
                </label>
                <input
                  type="email"
                  id="hp-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow"
                />
              </div>
              <div>
                <label
                  htmlFor="hp-phone"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  {t("form.phone")} *
                </label>
                <input
                  type="tel"
                  id="hp-phone"
                  name="phone"
                  required
                  defaultValue="+971"
                  className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="hp-service"
                className="block text-sm font-medium text-graphite mb-1.5"
              >
                {t("form.serviceInterest")}
              </label>
              <select
                id="hp-service"
                name="service"
                className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow"
              >
                <option value="">Select a service...</option>
                <option value="pro-services">PRO Services</option>
                <option value="company-formation">Company Formation</option>
                <option value="visa-processing">Visa Processing</option>
                <option value="emiratisation">Emiratisation</option>
                <option value="trade-license">Trade License Renewal</option>
                <option value="corporate-tax">Corporate Tax</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="hp-message"
                className="block text-sm font-medium text-graphite mb-1.5"
              >
                {t("form.message")}
              </label>
              <textarea
                id="hp-message"
                name="message"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition resize-y bg-snow"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors text-base"
            >
              {t("cta.sendMessage")}
            </button>
          </form>
        </div>
      </section>

      <FAQSchema items={homepageFAQs} />
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_CONFIG.url }]} />
    </>
  );
}

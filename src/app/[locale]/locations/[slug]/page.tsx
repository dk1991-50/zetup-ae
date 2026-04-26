import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowLeft, MapPin, CheckCircle2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG, COMPANY, SERVICES } from "@/lib/constants";
import { LOCATIONS, findLocation } from "@/lib/locations";

const SERVICE_NAMES: Record<string, string> = {
  proServices: "PRO Services",
  companyFormation: "Company Formation",
  visaServices: "Visa Processing",
  emiratisation: "Emiratisation",
  tradeLicense: "Trade License Renewal",
  corporateTax: "Corporate Tax",
  documentClearing: "Document Clearing",
  goldenVisa: "Golden Visa",
};

export function generateStaticParams() {
  return LOCATIONS.flatMap((loc) =>
    ["en", "ar"].map((locale) => ({ locale, slug: loc.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = findLocation(slug);
  if (!loc) return { title: locale === "ar" ? "المنطقة غير موجودة" : "Area Not Found" };
  const isAr = locale === "ar";
  const name = loc.name[isAr ? "ar" : "en"];
  return {
    title: isAr
      ? `خدمات PRO في ${name} — زيتب برو على الأرض`
      : `PRO Services in ${name} — ZETUP PRO On the Ground`,
    description: loc.shortDef[isAr ? "ar" : "en"],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/locations/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/locations/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/locations/${slug}`,
        "x-default": `${SITE_CONFIG.url}/en/locations/${slug}`,
      },
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = findLocation(slug);
  if (!loc) notFound();
  const isAr = locale === "ar";
  const name = loc.name[isAr ? "ar" : "en"];

  // Resolve relevant services
  const services = SERVICES.filter((s) => loc.relevantServices.includes(s.slug));

  // Service schema with areaServed pointing to this specific location
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${COMPANY.url}/${locale}/locations/${slug}#service`,
    name: isAr
      ? `خدمات PRO في ${name}`
      : `PRO Services in ${name}, Dubai`,
    description: loc.shortDef[isAr ? "ar" : "en"],
    provider: {
      "@type": "Organization",
      "@id": `${COMPANY.url}/#organization`,
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    areaServed: {
      "@type": "Place",
      name: name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: loc.coordinates.lat,
        longitude: loc.coordinates.lng,
      },
      containedInPlace: {
        "@type": "City",
        name: "Dubai",
      },
    },
    serviceType: "PRO Services",
    url: `${COMPANY.url}/${locale}/locations/${slug}`,
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-20 md:py-24 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -bottom-20 end-1/4 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[80px]" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 mb-6 text-sm text-sage-400 hover:text-sage-300 font-display"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
              className="rtl:rotate-180"
            />
            {isAr ? "كل مناطق دبي" : "All Dubai areas"}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-500/20 text-sage-300">
              <MapPin size={20} strokeWidth={1.5} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest text-sage-300 font-display">
              {loc.tagline[isAr ? "ar" : "en"]}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr
              ? `خدمات PRO في ${name}`
              : `PRO Services in ${name}, Dubai`}
          </h1>
          <p className="text-xl text-slate-300 font-body max-w-3xl">
            {loc.shortDef[isAr ? "ar" : "en"]}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-8">
            {isAr ? `نظرة على ${name}` : `${name}: The Lay of the Land`}
          </h2>
          <div className="prose prose-lg text-slate max-w-none prose-p:leading-relaxed prose-p:text-graphite font-body">
            {loc.intro[isAr ? "ar" : "en"].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zetup here */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-y border-mist">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-8">
            {isAr
              ? `لماذا تعمل شركات ${name} مع زيتب برو`
              : `Why ${name} Companies Work with ZETUP PRO`}
          </h2>
          <ul className="space-y-4">
            {loc.whyZetupHere[isAr ? "ar" : "en"].map((point, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2
                  size={22}
                  strokeWidth={1.75}
                  className="shrink-0 mt-0.5 text-sage-500"
                />
                <span className="text-base leading-relaxed text-graphite font-body">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nearby government offices */}
      {loc.nearbyOffices.length > 0 && (
        <section className="py-16 px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-3">
              {isAr
                ? `مكاتب حكومية قريبة من ${name}`
                : `Government Offices Near ${name}`}
            </h2>
            <p className="text-slate mb-8 font-body">
              {isAr
                ? "هذه المراكز هي حيث تتم معظم المعاملات الحكومية لشركات هذه المنطقة."
                : "These are the service centres where most of the day-to-day government work for companies in this area gets processed."}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {loc.nearbyOffices.map((office) => (
                <div
                  key={office.name}
                  className="rounded-xl border border-mist bg-white p-5"
                >
                  <p className="text-xs uppercase tracking-wider text-stone font-display mb-1">
                    {office.type}
                  </p>
                  <p className="font-display font-semibold text-fjord-900">
                    {office.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Most relevant services */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-y border-mist">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-8">
            {isAr
              ? `أكثر الخدمات أهمية لشركات ${name}`
              : `Services Most Relevant to ${name} Companies`}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-mist bg-white p-5 transition-all hover:border-sage-300 hover:shadow-sm"
              >
                <div>
                  <p className="font-display font-semibold text-fjord-900 group-hover:text-sage-700">
                    {SERVICE_NAMES[service.titleKey] ?? service.titleKey}
                  </p>
                  <p className="text-sm text-stone mt-0.5 font-body">
                    {service.price}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-sage-500 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-4">
            {isAr
              ? `احصل على تواصل خاص بـ ${name}`
              : `Get ${name}-Specific Coverage`}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "احجز فحص PRO صحي مجاني لمدة 30 دقيقة. سنراجع إعدادك الحالي ونوضح بالضبط ما يجب أن يبدو عليه التواصل معنا في منطقتك."
              : "Book a free 30-minute PRO Health Check. We'll review your current setup and walk you through what working with us looks like for a company in your area."}
          </p>
          <Link
            href="/pro-health-check"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            {isAr ? "احجز فحص PRO مجاني" : "Book a Free PRO Health Check"}
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Locations", url: `${SITE_CONFIG.url}/${locale}/locations` },
          {
            name: name,
            url: `${SITE_CONFIG.url}/${locale}/locations/${slug}`,
          },
        ]}
      />
      <JsonLd data={serviceSchema} />
    </>
  );
}

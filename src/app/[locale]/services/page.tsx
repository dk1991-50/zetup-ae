import type { Metadata } from "next";
import {
  FileText,
  Building2,
  Plane,
  Users,
  RefreshCw,
  Calculator,
  Stamp,
  Award,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Building2,
  Plane,
  Users,
  RefreshCw,
  Calculator,
  Stamp,
  Award,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "خدمات الشركات دبي — PRO، تأسيس، تأشيرات، ضرائب | زيتب"
        : "Corporate Services Dubai — PRO, Formation, Visa, Tax | ZETUP",
    description:
      locale === "ar"
        ? "زيتب تقدم خدمات شركات شفافة لشركات دبي البر الرئيسي. خدمات PRO، تأسيس الشركات، معالجة التأشيرات، التوطين، الضرائب، والمزيد."
        : "ZETUP PRO provides transparent corporate services for Dubai mainland companies. PRO services, company formation, visa processing, Emiratisation, tax, and more.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/services`,
      languages: {
        en: `${SITE_CONFIG.url}/en/services`,
        ar: `${SITE_CONFIG.url}/ar/services`,
      },
    },
  };
}

export default async function ServicesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -bottom-20 start-1/4 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[80px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            Our Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Corporate Services for Dubai Mainland Companies
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            ZETUP PRO provides a complete range of corporate services for companies
            operating on Dubai mainland. Every service is delivered with
            Scandinavian transparency — published pricing, proactive
            communication, and invoices that match your quote.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group"
                >
                  <Card className="h-full flex flex-col transition-all duration-200 group-hover:border-sage-300 group-hover:shadow-lg">
                    <CardHeader>
                      {Icon && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-600 transition-colors group-hover:bg-sage-100">
                          <Icon size={28} strokeWidth={1.5} />
                        </div>
                      )}
                      <h2 className="mt-3 font-display text-lg font-semibold text-fjord-900">
                        {service.titleKey === "proServices" && "PRO Services"}
                        {service.titleKey === "companyFormation" &&
                          "Company Formation"}
                        {service.titleKey === "visaServices" &&
                          "Visa Processing"}
                        {service.titleKey === "emiratisation" &&
                          "Emiratisation"}
                        {service.titleKey === "tradeLicense" &&
                          "Trade License Renewal"}
                        {service.titleKey === "corporateTax" && "Corporate Tax"}
                        {service.titleKey === "documentClearing" &&
                          "Document Clearing"}
                        {service.titleKey === "goldenVisa" && "Golden Visa"}
                      </h2>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm leading-relaxed text-slate-600 font-body">
                        {service.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <Badge variant="sage">{service.price}</Badge>
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-sage-500 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                      />
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-lg text-slate mb-8">
            Book a free 30-minute PRO Health Check. We will review your current
            setup and recommend exactly which services your company needs — with
            no obligation and no sales pitch.
          </p>
          <Link
            href="/pro-health-check"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            Book a Free PRO Health Check
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Services", url: `${SITE_CONFIG.url}/${locale}/services` },
        ]}
      />
    </>
  );
}

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TeamSection } from "@/components/sections/TeamSection";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "من نحن — زيتب للخدمات المؤسسية"
        : "About ZETUP — Scandinavian Transparency in Dubai Corporate Services",
    description:
      locale === "ar"
        ? "تعرف على مؤسسي زيتب: دينيس كريستنسن (الدنمارك) وإيدينا سلطان (خبرة +17 عامًا في الإمارات). شفافية اسكندنافية في خدمات PRO بدبي."
        : "Founded by Dennis Kristensen (Denmark) and Edina Sultan (17+ years UAE expertise), ZETUP brings Scandinavian transparency to PRO services in Dubai.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/about`,
      languages: {
        en: `${SITE_CONFIG.url}/en/about`,
        ar: `${SITE_CONFIG.url}/ar/about`,
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fjord-900 mb-8">
            Scandinavian Values. Dubai Expertise.
          </h1>
          <div className="prose prose-lg text-slate max-w-none">
            <p>
              ZETUP Corporate Services was founded on a simple observation: the
              PRO services market in Dubai is broken. Business owners pay too
              much, get too little transparency, and spend too much of their own
              time managing the people who are supposed to manage their
              government paperwork.
            </p>
            <p>
              We built ZETUP to be the PRO company we wished existed when we
              were setting up our own businesses in Dubai.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-12">
            Meet the Founders
          </h2>
          <TeamSection />
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-8">
            What Makes ZETUP Different
          </h2>
          <div className="prose prose-lg text-slate max-w-none">
            <p>
              <strong>We are not a typing center with a website.</strong> We are
              a dedicated corporate services firm focused on mid-market Dubai
              mainland companies. Our clients have 10 to 250 employees and need
              a PRO partner who can handle complexity, communicate clearly, and
              never surprise them with an invoice they did not agree to.
            </p>
            <p>
              <strong>Our positioning is intentional.</strong> We call it
              Scandinavian transparency because that is genuinely what it is.
              Dennis grew up in a business culture where you quote a price,
              deliver the work, and send an invoice that matches. Edina spent 17
              years watching companies get overcharged by PROs who exploited
              their clients&apos; lack of knowledge about government fees.
            </p>
            <p>
              <strong>We are small by design — for now.</strong> We believe the
              best client relationships come from knowing your clients by name,
              understanding their business, and being reachable when it matters.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-8 lg:px-12 bg-fjord-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
            Our Office
          </h2>
          <div className="text-lg text-mist space-y-2">
            <p className="text-white font-semibold">
              Churchill Executive Tower, Floor 35
            </p>
            <p>Business Bay, Dubai, UAE</p>
            <p className="mt-4">Open Sunday to Thursday, 9:00 AM – 6:00 PM</p>
            <p>Phone: {SITE_CONFIG.phone}</p>
            <p>WhatsApp: +971 58 573 8177</p>
            <p>Email: {SITE_CONFIG.email}</p>
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "About", url: `${SITE_CONFIG.url}/${locale}/about` },
        ]}
      />
    </>
  );
}

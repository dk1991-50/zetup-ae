import type { Metadata } from "next";
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

  return (
    <>
      {/* Hero with background image */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <img
          src="/images/hero/zetup_hero2.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fjord-950/90 via-fjord-950/50 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-12 md:px-8 lg:px-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Scandinavian Values. Dubai Expertise.
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-8">
            Why We Started ZETUP
          </h2>
          <div className="prose prose-lg text-slate max-w-none prose-p:leading-relaxed">
            <p>
              ZETUP PRO Corporate Services was founded on a simple observation: the
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
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-10">
            What Makes ZETUP Different
          </h2>
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-mist bg-white">
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-3">
                We are not a typing center with a website.
              </h3>
              <p className="text-slate leading-relaxed font-body">
                We are a dedicated corporate services firm focused on mid-market
                Dubai mainland companies. Our clients have 10 to 250 employees
                and need a PRO partner who can handle complexity, communicate
                clearly, and never surprise them with an invoice they did not
                agree to.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-mist bg-white">
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-3">
                Our positioning is intentional.
              </h3>
              <p className="text-slate leading-relaxed font-body">
                We call it Scandinavian transparency because that is genuinely
                what it is. Dennis grew up in a business culture where you quote
                a price, deliver the work, and send an invoice that matches.
                Edina spent 17 years watching companies get overcharged by PROs
                who exploited their clients&apos; lack of knowledge about
                government fees.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-mist bg-white">
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-3">
                We are small by design — for now.
              </h3>
              <p className="text-slate leading-relaxed font-body">
                We believe the best client relationships come from knowing your
                clients by name, understanding their business, and being
                reachable when it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 px-6 md:px-8 lg:px-12 bg-fjord-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-20 end-0 h-[300px] w-[300px] rounded-full bg-sage-500/10 blur-[80px]" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">
            Our Office
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-2 font-display">
                  Address
                </p>
                <p className="text-lg text-white font-semibold">
                  Churchill Executive Tower, Floor 35
                </p>
                <p className="text-mist">Business Bay, Dubai, UAE</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-2 font-display">
                  Hours
                </p>
                <p className="text-mist">
                  Sunday to Thursday, 9:00 AM &ndash; 6:00 PM
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-2 font-display">
                  Phone
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-mist hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-2 font-display">
                  WhatsApp
                </p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  className="text-mist hover:text-white transition-colors"
                >
                  +971 58 573 8177
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-2 font-display">
                  Email
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-mist hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
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

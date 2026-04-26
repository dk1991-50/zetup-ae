import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { SITE_CONFIG } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "خدمات PRO حسب المنطقة في دبي — الخليج التجاري ووسط المدينة وأكثر"
        : "PRO Services by Dubai Area — Business Bay, Downtown, Sheikh Zayed Road, Deira",
    description:
      locale === "ar"
        ? "خدمات PRO المؤسسية لشركات البر الرئيسي حسب المنطقة في دبي. تغطية محلية للخليج التجاري ووسط دبي وشارع الشيخ زايد وديرة. تسليم في نفس اليوم وعلاقات محلية."
        : "Hyper-local PRO services for Dubai mainland companies. On-the-ground coverage of Business Bay, Downtown Dubai, Sheikh Zayed Road, and Deira — same-day handover, named coordinator, direct relationships with the closest Tasheel and Amer centres.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/locations`,
      languages: {
        en: `${SITE_CONFIG.url}/en/locations`,
        ar: `${SITE_CONFIG.url}/ar/locations`,
        "x-default": `${SITE_CONFIG.url}/en/locations`,
      },
    },
  };
}

export default async function LocationsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-fjord-900 py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-40 end-1/4 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {isAr ? "حسب المنطقة" : "By Area"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr
              ? "خدمات PRO المؤسسية حسب المنطقة في دبي"
              : "PRO Services by Dubai Area"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            {isAr
              ? "كل منطقة من مناطق الأعمال في دبي لها مزيج مختلف من الشركات وأقرب مراكز خدمات حكومية. هذه صفحات حسب المنطقة لأهم مناطق الأعمال في دبي البر الرئيسي حيث تعمل زيتب برو."
              : "Every Dubai business district has its own mix of companies, its own closest government service centres, and its own day-to-day rhythm. These are the Dubai mainland areas where ZETUP PRO does most of our work."}
          </p>
        </div>
      </section>

      {/* Location cards */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex flex-col gap-4 p-8 rounded-2xl border border-mist bg-white shadow-md shadow-fjord-900/5 hover:border-sage-300 hover:shadow-2xl hover:shadow-sage-500/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-50 text-sage-600">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-sage-600 font-display">
                    {loc.tagline[isAr ? "ar" : "en"]}
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-fjord-900 group-hover:text-sage-700 transition-colors">
                  {loc.name[isAr ? "ar" : "en"]}
                </h2>
                <p className="text-base leading-relaxed text-slate font-body line-clamp-3">
                  {loc.shortDef[isAr ? "ar" : "en"]}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sage-600 font-display">
                  {isAr
                    ? `اقرأ المزيد عن ${loc.name.ar}`
                    : `PRO services in ${loc.name.en}`}
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-frost border-t border-mist">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900 mb-4">
            {isAr
              ? "ليست منطقتك مدرجة هنا؟"
              : "Don't see your area here?"}
          </h2>
          <p className="text-lg text-slate mb-8 font-body">
            {isAr
              ? "نخدم شركات البر الرئيسي في جميع أنحاء دبي. احجز فحص PRO صحي مجاني وسنناقش احتياجاتك المحددة."
              : "We serve mainland companies across Dubai. Book a free PRO Health Check and we'll talk through what your area-specific setup looks like."}
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
        ]}
      />
      <ItemListSchema
        name={
          isAr
            ? "مناطق الأعمال في دبي التي تخدمها زيتب برو"
            : "Dubai Business Areas Served by ZETUP PRO"
        }
        description={
          isAr
            ? "تغطية محلية لخدمات PRO المؤسسية عبر مناطق الأعمال الرئيسية في دبي البر الرئيسي."
            : "Hyper-local PRO services coverage across the major Dubai mainland business districts."
        }
        items={LOCATIONS.map((loc) => ({
          name: loc.name[isAr ? "ar" : "en"],
          url: `${SITE_CONFIG.url}/${locale}/locations/${loc.slug}`,
          description: loc.shortDef[isAr ? "ar" : "en"],
        }))}
      />
    </>
  );
}

import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ArrowRight, FileCheck } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
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
        ? "موارد مجانية لمؤسسي الأعمال في دبي"
        : "Free Resources for Dubai Business Founders",
    description:
      locale === "ar"
        ? "قوائم تحقق مجانية وأدلة قابلة للطباعة لتأسيس وتشغيل شركة في دبي. مكتوبة من قبل ممارسي PRO، وليست من قبل مسوقين."
        : "Free downloadable checklists and printable guides for setting up and running a Dubai business. Written by people who file the paperwork, not marketers.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/resources`,
      languages: {
        en: `${SITE_CONFIG.url}/en/resources`,
        ar: `${SITE_CONFIG.url}/ar/resources`,
        "x-default": `${SITE_CONFIG.url}/en/resources`,
      },
    },
  };
}

const RESOURCES = [
  {
    slug: "dubai-mainland-setup-checklist",
    title: {
      en: "Dubai Mainland Setup Checklist (2026)",
      ar: "قائمة تحقق تأسيس شركة البر الرئيسي في دبي 2026",
    },
    description: {
      en: "The 38-step checklist for setting up a Dubai mainland LLC in 2026 — from trade-name reservation to first employee on payroll. Costs included.",
      ar: "قائمة تحقق من 38 خطوة لتأسيس شركة ذ.م.م في البر الرئيسي بدبي عام 2026 — من حجز الاسم التجاري إلى أول موظف على الرواتب. تشمل التكاليف.",
    },
    badge: { en: "Checklist · 38 steps", ar: "قائمة تحقق · 38 خطوة" },
  },
];

export default async function ResourcesHubPage({
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
        <div className="absolute -top-40 start-1/4 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            {isAr ? "موارد مجانية" : "Free Resources"}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {isAr
              ? "قوائم تحقق وأدلة عملية"
              : "Practical Checklists for Dubai Founders"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            {isAr
              ? "موارد مكتوبة من قبل من يقومون بالأوراق فعليًا. قابلة للطباعة، ومحدثة لقواعد 2026."
              : "Resources written by the people who actually file the paperwork. Printable, dated, and updated for 2026 rules at DET, MOHRE, GDRFA, and the FTA."}
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {RESOURCES.map((res) => (
              <Link
                key={res.slug}
                href={`/resources/${res.slug}`}
                className="group flex flex-col gap-4 p-8 rounded-2xl border border-mist bg-white shadow-md shadow-fjord-900/5 hover:border-sage-300 hover:shadow-2xl hover:shadow-sage-500/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-50 text-sage-600">
                    <FileCheck size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-sage-600 font-display">
                    {res.badge[isAr ? "ar" : "en"]}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-fjord-900 group-hover:text-sage-700 transition-colors">
                  {res.title[isAr ? "ar" : "en"]}
                </h2>
                <p className="text-base leading-relaxed text-slate font-body">
                  {res.description[isAr ? "ar" : "en"]}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sage-600 font-display">
                  {isAr ? "افتح المورد" : "Open the resource"}
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

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Resources", url: `${SITE_CONFIG.url}/${locale}/resources` },
        ]}
      />
      <ItemListSchema
        name={
          isAr ? "موارد زيتب برو المجانية" : "ZETUP PRO Free Resources"
        }
        description={
          isAr
            ? "قوائم تحقق وأدلة عملية لمؤسسي الأعمال في دبي."
            : "Practical, downloadable checklists and printable guides for Dubai business founders."
        }
        items={RESOURCES.map((r) => ({
          name: r.title[isAr ? "ar" : "en"],
          url: `${SITE_CONFIG.url}/${locale}/resources/${r.slug}`,
          description: r.description[isAr ? "ar" : "en"],
        }))}
      />
    </>
  );
}

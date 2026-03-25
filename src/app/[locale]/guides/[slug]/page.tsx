import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Clock } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "@/../.content-collections/generated";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { SpeakableSchema } from "@/components/seo/SpeakableSchema";
import { SITE_CONFIG } from "@/lib/constants";

function getGuide(locale: string, slug: string) {
  return allPosts.find(
    (p) => p.slug === slug && p.locale === locale && p.contentType === "guide",
  );
}

export function generateStaticParams() {
  return allPosts
    .filter((p) => p.contentType === "guide")
    .map((p) => ({ locale: p.locale, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/guides/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/guides/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/guides/${slug}`,
        "x-default": `${SITE_CONFIG.url}/en/guides/${slug}`,
      },
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      {/* Guide header image */}
      <section className="relative h-[35vh] min-h-[250px] md:h-[45vh] md:min-h-[320px] flex items-end overflow-hidden">
        <Image
          src={`/images/guides/${slug}.svg`}
          alt={guide.title}
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fjord-950/90 via-fjord-950/50 to-fjord-950/20" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-10 md:pb-14 md:px-8 lg:px-12">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sage-300 hover:text-white mb-4 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {locale === "ar" ? "العودة إلى الأدلة" : "All Guides"}
          </Link>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {guide.title}
          </h1>
        </div>
      </section>

      <article className="py-12 md:py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-stone mb-8 pb-8 border-b border-mist">
            <span className="font-medium">
              {new Date(guide.date).toLocaleDateString(
                locale === "ar" ? "ar-AE" : "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </span>
            <span className="h-1 w-1 rounded-full bg-stone" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {locale === "ar" ? "قراءة" : "read"}
            </span>
            <span className="h-1 w-1 rounded-full bg-stone" />
            <span>{guide.author || "ZETUP PRO Team"}</span>
          </div>

          {/* Lead paragraph */}
          <p className="text-xl text-slate leading-relaxed mb-10 font-body">
            {guide.description}
          </p>

          {/* Guide content from MDX */}
          <div className="prose prose-lg max-w-none text-slate prose-headings:text-fjord-900 prose-headings:font-display prose-a:text-sage-600 prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed">
            <MDXContent code={guide.mdx} />
          </div>

          {/* CTA box */}
          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-sage-50 border border-sage-200">
            <h2 className="font-display text-2xl font-semibold text-fjord-900 mb-4">
              {locale === "ar"
                ? "هل تحتاج مساعدة متخصصة؟"
                : "Need Professional Help?"}
            </h2>
            <p className="text-slate mb-6 font-body leading-relaxed">
              {locale === "ar"
                ? "زيتب برو تتولى جميع التعقيدات المذكورة في هذا الدليل. احجز فحص PRO صحي مجاني لمعرفة كيف يمكننا مساعدة عملك."
                : "ZETUP PRO handles all the complexity covered in this guide. Book a free PRO Health Check to see how we can help your business."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pro-health-check"
                className="inline-block px-6 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
              >
                {locale === "ar"
                  ? "فحص PRO صحي مجاني"
                  : "Free PRO Health Check"}
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-fjord-900 font-semibold rounded-lg border border-mist hover:shadow-md transition-shadow font-display"
              >
                {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <ArticleSchema
        title={guide.title}
        description={guide.description}
        date={guide.date}
        author={guide.author || "ZETUP PRO Team"}
        slug={slug}
        locale={locale}
        contentType="guide"
      />
      <SpeakableSchema
        title={guide.title}
        url={`${SITE_CONFIG.url}/${locale}/guides/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Guides", url: `${SITE_CONFIG.url}/${locale}/guides` },
          {
            name: guide.title,
            url: `${SITE_CONFIG.url}/${locale}/guides/${slug}`,
          },
        ]}
      />
    </>
  );
}

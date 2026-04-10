import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "@/../.content-collections/generated";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { SpeakableSchema } from "@/components/seo/SpeakableSchema";
import { SITE_CONFIG } from "@/lib/constants";

function getPost(locale: string, slug: string) {
  return allPosts.find(
    (p) => p.slug === slug && p.locale === locale && p.contentType === "blog",
  );
}

export function generateStaticParams() {
  return allPosts
    .filter((p) => p.contentType === "blog")
    .map((p) => ({ locale: p.locale, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  const title =
    post?.title ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const description = post?.description;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/blog/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/blog/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/blog/${slug}`,
        "x-default": `${SITE_CONFIG.url}/en/blog/${slug}`,
      },
    },
    openGraph: {
      images: [
        {
          url: `/images/blog/${slug}.svg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {locale === "ar" ? "العودة إلى المدونة" : "Back to Blog"}
          </Link>

          <div className="mb-8">
            <p className="text-sm text-stone mb-2">
              {new Date(post.date).toLocaleDateString(
                locale === "ar" ? "ar-AE" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}{" "}
              &middot; {post.author || "ZETUP PRO Team"}
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-fjord-900 mb-4">
              {post.title}
            </h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-frost text-xs font-medium text-fjord-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="prose prose-lg max-w-none text-slate prose-headings:text-fjord-900 prose-headings:font-display prose-a:text-sage-600 prose-a:no-underline hover:prose-a:underline">
            <MDXContent code={post.mdx} />
          </div>

          <div className="mt-16 p-8 rounded-xl bg-fjord-900 text-white text-center">
            <h2 className="font-display text-2xl font-semibold mb-4">
              {locale === "ar"
                ? "هل تحتاج مساعدة في عملك في دبي؟"
                : "Need Help With Your Dubai Business?"}
            </h2>
            <p className="text-mist mb-6">
              {locale === "ar"
                ? "احجز فحص PRO صحي مجاني واحصل على صورة واضحة عن وضع الامتثال الخاص بك."
                : "Book a free PRO Health Check and get a clear picture of your compliance status."}
            </p>
            <Link
              href="/pro-health-check"
              className="inline-block px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
            >
              {locale === "ar"
                ? "احجز فحص صحي مجاني"
                : "Book Free Health Check"}
            </Link>
          </div>
        </div>
      </article>

      <SpeakableSchema
        title={post.title}
        url={`${SITE_CONFIG.url}/${locale}/blog/${slug}`}
      />
      <ArticleSchema
        title={post.title}
        description={post.description}
        date={post.date}
        author={post.author || "ZETUP PRO Team"}
        slug={slug}
        locale={locale}
        contentType="blog"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Blog", url: `${SITE_CONFIG.url}/${locale}/blog` },
          {
            name: post.title,
            url: `${SITE_CONFIG.url}/${locale}/blog/${slug}`,
          },
        ]}
      />
    </>
  );
}

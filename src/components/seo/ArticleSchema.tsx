import { JsonLd } from "./JsonLd";
import { COMPANY } from "@/lib/constants";
import { personRef } from "./PersonSchema";

interface ArticleSchemaProps {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  locale: string;
  contentType: "blog" | "guide";
}

export function ArticleSchema({
  title,
  description,
  date,
  author,
  slug,
  locale,
  contentType,
}: ArticleSchemaProps) {
  const section = contentType === "guide" ? "guides" : "blog";
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description:
      description || `${title} — published by ZETUP PRO Corporate Services.`,
    datePublished: date,
    dateModified: date,
    // Resolves to the Person @id on /about for known team members,
    // falls back to a plain name for "ZETUP Team" or unknown authors.
    author: personRef(author),
    publisher: {
      "@type": "Organization",
      "@id": `${COMPANY.url}/#organization`,
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/${locale}/${section}/${slug}`,
    },
  };

  return <JsonLd data={data} />;
}

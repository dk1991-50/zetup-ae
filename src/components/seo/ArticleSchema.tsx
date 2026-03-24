import { JsonLd } from "./JsonLd";
import { COMPANY } from "@/lib/constants";

interface ArticleSchemaProps {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
}

export function ArticleSchema({
  title,
  description,
  date,
  author,
  slug,
}: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/blog/${slug}`,
    },
  };

  return <JsonLd data={data} />;
}

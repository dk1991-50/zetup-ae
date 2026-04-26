import { JsonLd } from "./JsonLd";
import { COMPANY } from "@/lib/constants";

interface DefinedTermSchemaProps {
  /** The term being defined, e.g. "Tasheel" */
  name: string;
  /** Short, direct definition (1 sentence is best for AEO) */
  description: string;
  /** Slug for stable @id and URL building */
  slug: string;
  /** Optional alternate names / spellings */
  alternateName?: string[];
  /** Optional URL to a related concept on the site */
  relatedLink?: string;
  /** Optional locale for inLanguage */
  locale?: string;
}

/**
 * DefinedTerm schema for glossary entries.
 *
 * Each term belongs to a DefinedTermSet (the ZETUP PRO Glossary) so AI
 * answer engines and search results can pick up the entry as a structured
 * definition. Pairs with the glossary hub page.
 */
export function DefinedTermSchema({
  name,
  description,
  slug,
  alternateName,
  relatedLink,
  locale = "en",
}: DefinedTermSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${COMPANY.url}/${locale}/glossary/${slug}`,
    name,
    description,
    inLanguage: locale,
    url: `${COMPANY.url}/${locale}/glossary/${slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${COMPANY.url}/${locale}/glossary`,
      name:
        locale === "ar"
          ? "قاموس مصطلحات الأعمال في الإمارات — زيتب برو"
          : "ZETUP PRO Glossary — UAE Business Setup Terms",
      url: `${COMPANY.url}/${locale}/glossary`,
    },
  };

  if (alternateName && alternateName.length > 0) {
    data.alternateName = alternateName;
  }
  if (relatedLink) {
    data.sameAs = relatedLink;
  }

  return <JsonLd data={data} />;
}

/**
 * DefinedTermSet schema for the glossary hub page.
 *
 * Lists all term @ids in the set so AI engines understand the page is
 * an authoritative glossary covering all the listed concepts.
 */
export function DefinedTermSetSchema({
  termSlugs,
  locale = "en",
}: {
  termSlugs: string[];
  locale?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${COMPANY.url}/${locale}/glossary`,
    name:
      locale === "ar"
        ? "قاموس مصطلحات الأعمال في الإمارات — زيتب برو"
        : "ZETUP PRO Glossary — UAE Business Setup Terms",
    description:
      locale === "ar"
        ? "قاموس شامل لمصطلحات الأعمال والبيروقراطية الحكومية في الإمارات: تسهيل، عامر، وزارة الموارد البشرية، الإدارة العامة للإقامة، الهوية الإماراتية، إيجاري، وأكثر."
        : "Comprehensive glossary of UAE business setup and government bureaucracy terms: Tasheel, Amer, MOHRE, GDRFA, Emirates ID, Ejari, Establishment Card, WPS, Emiratisation, Nafis, and more.",
    inLanguage: locale,
    url: `${COMPANY.url}/${locale}/glossary`,
    publisher: {
      "@type": "Organization",
      "@id": `${COMPANY.url}/#organization`,
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    hasDefinedTerm: termSlugs.map((slug) => ({
      "@type": "DefinedTerm",
      "@id": `${COMPANY.url}/${locale}/glossary/${slug}`,
    })),
  };

  return <JsonLd data={data} />;
}

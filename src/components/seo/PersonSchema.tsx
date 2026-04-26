import { JsonLd } from "./JsonLd";
import { COMPANY, SITE_CONFIG } from "@/lib/constants";

interface PersonSchemaProps {
  /** Full name */
  name: string;
  /** Job title — e.g. "Co-Founder" */
  jobTitle: string;
  /** Short bio paragraph */
  description: string;
  /** Path to image, e.g. "/images/team/zetup_dennis.jpg" */
  image: string;
  /** Stable slug used in @id, e.g. "dennis-kristensen" */
  slug: string;
  /** Optional social profile URLs (LinkedIn, X, etc.) */
  sameAs?: string[];
  /** Optional knowsAbout topics */
  knowsAbout?: string[];
  /** Optional nationality / country of origin */
  nationality?: string;
}

/**
 * Person schema for company founders / team members.
 *
 * Use a stable slug — the @id `${COMPANY.url}/about#person-${slug}` lets
 * Article schemas reference this Person as `author` via @id, instead of
 * just attributing a name string. Improves E-E-A-T signals.
 */
export function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  slug,
  sameAs,
  knowsAbout,
  nationality,
}: PersonSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${COMPANY.url}/about#person-${slug}`,
    name,
    jobTitle,
    description,
    image: `${SITE_CONFIG.url}${image}`,
    worksFor: {
      "@type": "Organization",
      "@id": `${COMPANY.url}/#organization`,
      name: COMPANY.legalName,
    },
  };

  if (sameAs && sameAs.length > 0) {
    data.sameAs = sameAs;
  }
  if (knowsAbout && knowsAbout.length > 0) {
    data.knowsAbout = knowsAbout;
  }
  if (nationality) {
    data.nationality = nationality;
  }

  return <JsonLd data={data} />;
}

/**
 * Stable Person @id for cross-schema references (e.g. Article author).
 *
 * Pass any author name and get back a `{@type, @id, name}` object that
 * resolves to the Person schema rendered on /about. Returns name-only
 * if the author isn't a known team member.
 */
export function personRef(authorName: string) {
  const slug = AUTHOR_SLUGS[authorName.toLowerCase()];
  if (slug) {
    return {
      "@type": "Person",
      "@id": `${COMPANY.url}/about#person-${slug}`,
      name: authorName,
    };
  }
  return {
    "@type": "Person",
    name: authorName,
  };
}

/** Map known author display names → slug used in @id. */
const AUTHOR_SLUGS: Record<string, string> = {
  "dennis kristensen": "dennis-kristensen",
  "edina sultan": "edina-sultan",
};

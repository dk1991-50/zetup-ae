import { JsonLd } from "./JsonLd";
import { COMPANY } from "@/lib/constants";

interface WebApplicationSchemaProps {
  /** App name, e.g. "Dubai PRO Services Cost Calculator" */
  name: string;
  /** What it does, in 1-2 sentences */
  description: string;
  /** Stable slug used in @id */
  slug: string;
  /** Canonical URL of the app */
  url: string;
  /** Application sub-category for Google */
  applicationCategory?: string;
  /** Whether this is free to use */
  isFree?: boolean;
  /** Optional locale for inLanguage */
  locale?: string;
  /** Operating system support — "Browser" for web apps */
  operatingSystem?: string;
}

/**
 * WebApplication / SoftwareApplication schema for interactive tools.
 *
 * Lets Google identify calculator pages as web apps rather than plain
 * articles. Improves eligibility for the "App" rich-result presentation
 * and helps differentiate the page in SERPs.
 */
export function WebApplicationSchema({
  name,
  description,
  slug,
  url,
  applicationCategory = "BusinessApplication",
  isFree = true,
  locale = "en",
  operatingSystem = "Browser",
}: WebApplicationSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#webapp`,
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      "@id": `${COMPANY.url}/#organization`,
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    browserRequirements:
      "Requires JavaScript. Requires HTML5. Modern browser (last 2 years).",
  };

  if (isFree) {
    data.offers = {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
    };
    data.isAccessibleForFree = true;
  }

  // Lifecycle hint — these tools are actively maintained
  data.dateModified = "2026-04-26";

  return <JsonLd data={data} />;
}

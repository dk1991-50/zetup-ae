import { JsonLd } from "./JsonLd";
import { COMPANY, SITE_CONFIG } from "@/lib/constants";

interface ServiceOffer {
  /** Lowest price as a numeric string, e.g. "839" */
  priceFrom: string;
  /** ISO currency code, e.g. "AED" */
  priceCurrency: string;
  /** Optional billing periodicity for recurring services */
  billingPeriod?: "month" | "year" | "quarter" | "transaction" | "one-time";
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  /** Human-readable price range like "AED 839 - AED 14,008/month" */
  priceRange?: string;
  /** Structured pricing for rich SERP snippets */
  offer?: ServiceOffer;
  /** Stable slug used in @id */
  slug?: string;
}

const BILLING_DURATION_MAP = {
  month: "P1M",
  year: "P1Y",
  quarter: "P3M",
  transaction: undefined,
  "one-time": undefined,
} as const;

const BILLING_UNIT_TEXT = {
  month: "MON",
  year: "ANN",
  quarter: "QTR",
  transaction: undefined,
  "one-time": undefined,
} as const;

/**
 * Service schema with optional Offer for SERP price rich snippets.
 *
 * Without `offer`, behaves like the original component (Service +
 * priceRange string). Pass an `offer` to add structured price data
 * that Google can show as a "from AED 839/month" snippet.
 */
export function ServiceSchema({
  name,
  description,
  priceRange,
  offer,
  slug,
}: ServiceSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    ...(slug && { "@id": `${COMPANY.url}/services/${slug}#service` }),
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${COMPANY.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    ...(priceRange && { priceRange }),
  };

  if (offer) {
    const offerData: Record<string, unknown> = {
      "@type": "Offer",
      price: offer.priceFrom,
      priceCurrency: offer.priceCurrency,
      availability: "https://schema.org/InStock",
      url: COMPANY.url,
      seller: {
        "@type": "ProfessionalService",
        "@id": `${COMPANY.url}/#organization`,
        name: SITE_CONFIG.name,
      },
    };

    if (offer.billingPeriod && offer.billingPeriod !== "one-time" && offer.billingPeriod !== "transaction") {
      offerData.priceSpecification = {
        "@type": "UnitPriceSpecification",
        price: offer.priceFrom,
        priceCurrency: offer.priceCurrency,
        billingDuration: BILLING_DURATION_MAP[offer.billingPeriod],
        unitText: BILLING_UNIT_TEXT[offer.billingPeriod],
        valueAddedTaxIncluded: false,
      };
    }

    data.offers = offerData;
  }

  return <JsonLd data={data} />;
}

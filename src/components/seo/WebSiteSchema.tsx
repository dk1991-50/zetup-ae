import { JsonLd } from "./JsonLd";
import { COMPANY, SITE_CONFIG } from "@/lib/constants";

/**
 * WebSite schema with potentialAction SearchAction.
 *
 * Enables Google's "sitelinks search box" on brand SERPs — a search
 * input that appears under the main result and lets users search the
 * site directly from Google.
 *
 * Renders globally from the root [locale] layout so every page emits it.
 */
export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY.url}/#website`,
    url: COMPANY.url,
    name: COMPANY.legalName,
    alternateName: "ZETUP PRO",
    description: COMPANY.description,
    inLanguage: ["en", "ar"],
    publisher: {
      "@type": "Organization",
      "@id": `${COMPANY.url}/#organization`,
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/en/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
}

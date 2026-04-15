import { JsonLd } from "./JsonLd";
import { COMPANY, SITE_CONFIG } from "@/lib/constants";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.url}/#business`,
    name: COMPANY.legalName,
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    description: COMPANY.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.region,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: String(SITE_CONFIG.coordinates.lat),
      longitude: String(SITE_CONFIG.coordinates.lng),
    },
    sameAs: [COMPANY.social.linkedin],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "AED 8,000 - 35,000/month",
  };

  return <JsonLd data={data} />;
}

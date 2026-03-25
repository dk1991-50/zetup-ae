import { JsonLd } from "./JsonLd";
import { COMPANY } from "@/lib/constants";

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
      latitude: "25.186",
      longitude: "55.2644",
    },
    sameAs: [COMPANY.social.linkedin],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "AED 8,000 - 35,000/month",
  };

  return <JsonLd data={data} />;
}

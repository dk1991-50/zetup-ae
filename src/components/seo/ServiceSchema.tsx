import { JsonLd } from "./JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

interface ServiceSchemaProps {
  name: string;
  description: string;
  priceRange?: string;
}

export function ServiceSchema({
  name,
  description,
  priceRange,
}: ServiceSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    ...(priceRange && { priceRange }),
  };

  return <JsonLd data={data} />;
}

import { JsonLd } from "./JsonLd";
import { COMPANY } from "@/lib/constants";

interface SpeakableSchemaProps {
  title: string;
  url: string;
  cssSelectors?: string[];
}

export function SpeakableSchema({
  title,
  url,
  cssSelectors = [".prose h2", ".prose p:first-of-type"],
}: SpeakableSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
  };

  return <JsonLd data={data} />;
}

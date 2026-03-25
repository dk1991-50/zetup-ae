import { withContentCollections } from "@content-collections/next";
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Llms-Txt", value: "/llms.txt" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/business-setup",
        destination: "/en/services/company-formation",
        permanent: true,
      },
      {
        source: "/services/visa",
        destination: "/en/services/visa-services",
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(withNextIntl(nextConfig));

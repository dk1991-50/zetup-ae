import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://zetup.ae"),
  title: {
    default: "ZETUP PRO_PRO_HOLD Corporate Services | PRO Services Dubai",
    template: "%s | ZETUP PRO_PRO_HOLD",
  },
  description:
    "ZETUP PRO_PRO_HOLD Corporate Services provides transparent PRO services, mainland company formation, visa processing, and Emiratisation compliance in Dubai.",
  icons: {
    icon: [{ url: "/images/misc/logos/zetup_favicon.png", type: "image/png" }],
    apple: [{ url: "/images/misc/logos/zetup_favicon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "ZETUP PRO_PRO_HOLD Corporate Services",
    images: [
      {
        url: "/images/og/Web_Social_share_templates%20(1).jpg",
        width: 1200,
        height: 630,
        alt: "ZETUP PRO_PRO_HOLD Corporate Services — Transparent PRO Services in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZETUP PRO_PRO_HOLD Corporate Services | PRO Services Dubai",
    description:
      "Transparent PRO services, mainland company formation, visa processing, and Emiratisation compliance in Dubai.",
    images: ["/images/og/Web_Social_share_templates%20(1).jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

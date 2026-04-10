import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://zetup.ae"),
  title: {
    default: "ZETUP PRO Corporate Services | PRO Services Dubai",
    template: "%s | ZETUP PRO",
  },
  description:
    "ZETUP PRO Corporate Services provides transparent PRO services, mainland company formation, visa processing, and Emiratisation compliance in Dubai.",
  icons: {
    icon: [
      {
        url: "/images/misc/logos/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/images/misc/logos/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/images/misc/logos/favicon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: "/images/misc/logos/zetup_favicon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "ZETUP PRO Corporate Services",
    images: [
      {
        url: "/images/og/zetup-og.jpg",
        width: 1200,
        height: 630,
        alt: "ZETUP PRO Corporate Services — Transparent PRO Services in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZETUP PRO Corporate Services | PRO Services Dubai",
    description:
      "Transparent PRO services, mainland company formation, visa processing, and Emiratisation compliance in Dubai.",
    images: ["/images/og/zetup-og.jpg"],
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

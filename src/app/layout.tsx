import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://zetup.ae"),
  title: {
    default: "ZETUP Corporate Services | PRO Services Dubai",
    template: "%s | ZETUP",
  },
  description:
    "ZETUP Corporate Services provides transparent PRO services, mainland company formation, visa processing, and Emiratisation compliance in Dubai.",
  openGraph: {
    type: "website",
    siteName: "ZETUP Corporate Services",
    images: [
      {
        url: "/images/og/Web_Social_share_templates%20(1).jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Plus_Jakarta_Sans, DM_Sans, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import "@/styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${plusJakarta.variable} ${dmSans.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <head>
        {/* Favicon is defined via metadata.icons in src/app/layout.tsx.
            Keeping this as a fallback for older browsers. */}
        <link
          rel="icon"
          href="/images/misc/logos/zetup_favicon.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/misc/logos/zetup_favicon.png"
        />
      </head>
      <body className="min-h-full flex flex-col bg-snow text-midnight">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <OrganizationSchema />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

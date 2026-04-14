import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Plus_Jakarta_Sans, DM_Sans, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import { TrackingListeners } from "@/components/TrackingListeners";
import { ConsentDefault } from "@/components/ConsentDefault";
import { CookieBanner } from "@/components/CookieBanner";
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
      className={`${plusJakarta.variable} ${dmSans.variable} ${locale === "ar" ? notoArabic.variable : ""} h-full antialiased`}
    >
      <head>
        <ConsentDefault />
        <GoogleTagManager />
        <GoogleAnalytics />
        {/* Favicon is defined via metadata.icons in src/app/layout.tsx.
            Keeping this as a fallback for older browsers. */}
        <link
          rel="icon"
          href="/images/misc/logos/favicon-48x48.png"
          type="image/png"
          sizes="48x48"
        />
        <link
          rel="icon"
          href="/images/misc/logos/favicon-192x192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/images/misc/logos/zetup_favicon.png"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="ZETUP PRO Blog"
          href="/feed"
        />
      </head>
      <body className="min-h-full flex flex-col bg-snow text-midnight">
        <GoogleTagManagerNoScript />
        <TrackingListeners />
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-sage-500 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            {locale === "ar"
              ? "انتقل إلى المحتوى الرئيسي"
              : "Skip to main content"}
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
          <OrganizationSchema />
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

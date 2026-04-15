import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Suspense } from "react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FormFeedback } from "@/components/ui/FormFeedback";
import { handleContactForm } from "@/lib/actions";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "تواصل مع زيتب — خدمات PRO وتأسيس الشركات دبي"
        : "Contact ZETUP PRO — PRO Services & Company Formation Dubai",
    description:
      locale === "ar"
        ? "تواصل مع زيتب للخدمات المؤسسية في الخليج التجاري، دبي. هاتف وواتساب: +971 58 573 8177"
        : "Reach ZETUP PRO Corporate Services in Business Bay, Dubai. Call or WhatsApp +971 58 573 8177, or visit our office on Floor 35, Churchill Executive Tower.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/contact`,
      languages: {
        en: `${SITE_CONFIG.url}/en/contact`,
        ar: `${SITE_CONFIG.url}/ar/contact`,
        "x-default": `${SITE_CONFIG.url}/en`,
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/zetup_hero3.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fjord-950/90 via-fjord-950/50 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 md:px-8 lg:px-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            {locale === "ar"
              ? "دعنا نتحدث عن عملك"
              : "Let\u2019s Talk About Your Business"}
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xl text-slate max-w-2xl mb-16">
            {locale === "ar"
              ? "سواء كنت تبحث عن شريك PRO جديد أو تأسيس شركة في دبي أو تحتاج معالجة تأشيرات عاجلة — نحن هنا ونرد بسرعة."
              : "Whether you are looking for a new PRO partner, setting up a company in Dubai, or need urgent visa processing — we are here and we respond fast."}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <a
              href={`${SITE_CONFIG.whatsappUrl}?text=Hi%20ZETUP%20PRO%2C%20I%27d%20like%20to%20learn%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-xl border border-mist bg-white hover:shadow-lg transition-shadow text-center group"
            >
              <MessageCircle className="w-10 h-10 text-sage-500 mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                WhatsApp — Fastest Response
              </h3>
              <p className="text-sage-600 font-semibold">+971 58 573 8177</p>
              <p className="text-sm text-slate mt-2">
                Average response: under 2 hours
              </p>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="p-5 sm:p-8 rounded-xl border border-mist bg-white hover:shadow-lg transition-shadow text-center"
            >
              <Phone className="w-10 h-10 text-fjord-500 mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                {locale === "ar" ? "اتصل بنا" : "Call Us"}
              </h3>
              <p className="text-fjord-600 font-semibold">
                {SITE_CONFIG.phone}
              </p>
              <p className="text-sm text-slate mt-2">
                Mon–Fri, 9 AM – 6 PM GST
              </p>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-5 sm:p-8 rounded-xl border border-mist bg-white hover:shadow-lg transition-shadow text-center"
            >
              <Mail className="w-10 h-10 text-aurora-500 mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                {locale === "ar" ? "البريد الإلكتروني" : "Email"}
              </h3>
              <p className="text-aurora-600 font-semibold">
                {SITE_CONFIG.email}
              </p>
              <p className="text-sm text-slate mt-2">
                {locale === "ar"
                  ? "نرد خلال 24 ساعة"
                  : "We respond within 24 hours"}
              </p>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900 mb-6">
                {locale === "ar" ? "زورنا في مكتبنا" : "Visit Our Office"}
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-sage-500 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-fjord-900">
                    Churchill Executive Tower, Floor 35
                  </p>
                  <p className="text-slate">Business Bay, Dubai, UAE</p>
                  <p className="text-slate mt-2">
                    Monday to Friday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.2644!3d25.186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzA5LjYiTiA1NcKwMTUnNTEuOCJF!5e0!3m2!1sen!2sae!4v1"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="ZETUP PRO office location — Business Bay, Dubai"
              />
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900 mb-6">
                {locale === "ar" ? "نموذج التواصل" : "Contact Form"}
              </h2>
              <Suspense>
                <FormFeedback
                  formType="contact"
                  successTitle="Message sent!"
                  successMessage="Thank you for reaching out. We will get back to you within 24 hours."
                />
              </Suspense>
              <form action={handleContactForm} className="space-y-5">
                <input type="hidden" name="locale" value={locale} />
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-graphite mb-1.5"
                    >
                      {t("form.fullName")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-graphite mb-1.5"
                    >
                      {t("form.companyName")} *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-graphite mb-1.5"
                    >
                      {t("form.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-graphite mb-1.5"
                    >
                      {t("form.phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      defaultValue="+971"
                      className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="employees"
                      className="block text-sm font-medium text-graphite mb-1.5"
                    >
                      {t("form.employees")}
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="1-10">1–10</option>
                      <option value="10-25">10–25</option>
                      <option value="25-50">25–50</option>
                      <option value="50-100">50–100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-graphite mb-1.5"
                    >
                      {t("form.serviceInterest")}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="pro-services">PRO Services</option>
                      <option value="company-formation">
                        Company Formation
                      </option>
                      <option value="visa-processing">Visa Processing</option>
                      <option value="emiratisation">Emiratisation</option>
                      <option value="trade-license">
                        Trade License Renewal
                      </option>
                      <option value="corporate-tax">Corporate Tax</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-graphite mb-1.5"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
                >
                  {t("cta.sendMessage")}
                </button>
                <p className="text-sm text-stone">
                  {locale === "ar"
                    ? "بإرسال هذا النموذج، أنت توافق على سياسة الخصوصية الخاصة بنا."
                    : "By submitting this form, you agree to our Privacy Policy. We respond within 24 hours."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Contact", url: `${SITE_CONFIG.url}/${locale}/contact` },
        ]}
      />
    </>
  );
}

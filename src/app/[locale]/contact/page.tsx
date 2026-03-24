import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
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
        : "Contact ZETUP — PRO Services & Company Formation Dubai",
    description:
      locale === "ar"
        ? "تواصل مع زيتب للخدمات المؤسسية في الخليج التجاري، دبي. هاتف: +971 4 323 4578، واتساب: +971 58 573 8177"
        : "Reach ZETUP Corporate Services in Business Bay, Dubai. Call +971 4 323 4578, WhatsApp +971 58 573 8177, or visit our office on Floor 35, Churchill Executive Tower.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/contact`,
      languages: {
        en: `${SITE_CONFIG.url}/en/contact`,
        ar: `${SITE_CONFIG.url}/ar/contact`,
      },
    },
  };
}

async function handleContactForm(formData: FormData) {
  "use server";
  const { redirect } = await import("next/navigation");
  const { supabase } = await import("@/lib/supabase");
  const { error } = await supabase.from("contact_submissions").insert({
    form_type: "contact",
    full_name: formData.get("name")?.toString() ?? "",
    company_name: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    employee_count: formData.get("employees")?.toString() || null,
    service_interest: formData.get("service")?.toString() || null,
    message: formData.get("message")?.toString() || null,
  });
  if (error) {
    throw new Error("Failed to submit contact form");
  }
  redirect("/en/contact?success=true");
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
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fjord-900 mb-6">
            {locale === "ar"
              ? "دعنا نتحدث عن عملك"
              : "Let's Talk About Your Business"}
          </h1>
          <p className="text-xl text-slate max-w-2xl mb-16">
            {locale === "ar"
              ? "سواء كنت تبحث عن شريك PRO جديد أو تأسيس شركة في دبي أو تحتاج معالجة تأشيرات عاجلة — نحن هنا ونرد بسرعة."
              : "Whether you are looking for a new PRO partner, setting up a company in Dubai, or need urgent visa processing — we are here and we respond fast."}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <a
              href={`${SITE_CONFIG.whatsappUrl}?text=Hi%20ZETUP%2C%20I%27d%20like%20to%20learn%20about%20your%20services.`}
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
              className="p-8 rounded-xl border border-mist bg-white hover:shadow-lg transition-shadow text-center"
            >
              <Phone className="w-10 h-10 text-fjord-500 mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                {locale === "ar" ? "اتصل بنا" : "Call Us"}
              </h3>
              <p className="text-fjord-600 font-semibold">
                {SITE_CONFIG.phone}
              </p>
              <p className="text-sm text-slate mt-2">
                Sun–Thu, 9 AM – 6 PM GST
              </p>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-8 rounded-xl border border-mist bg-white hover:shadow-lg transition-shadow text-center"
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

          <div className="grid lg:grid-cols-2 gap-16">
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
                    Sunday to Thursday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
              <div className="w-full h-64 rounded-xl bg-frost border border-mist flex items-center justify-center text-slate">
                <MapPin className="w-8 h-8 me-2" />
                Google Maps — Business Bay, Dubai
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900 mb-6">
                {locale === "ar" ? "نموذج التواصل" : "Contact Form"}
              </h2>
              <form action={handleContactForm} className="space-y-5">
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
                  className="w-full sm:w-auto px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors"
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

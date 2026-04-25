import type { Metadata } from "next";
import { Suspense } from "react";
import {
  ShieldCheck,
  Users,
  BarChart3,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FormFeedback } from "@/components/ui/FormFeedback";
import { handleHealthCheckForm } from "@/lib/actions";
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
        ? "فحص صحة PRO مجاني"
        : "Free PRO Health Check — Is Your PRO Company Protecting Your Business?",
    description:
      locale === "ar"
        ? "احصل على تقييم مجاني لمدة 30 دقيقة لإعداد PRO الخاص بك. تحليل الامتثال، مقارنة التكاليف، وخطة عمل واضحة."
        : "Get a free 30-minute assessment of your current PRO setup. Compliance snapshot, Emiratisation gap analysis, cost comparison, and a clear action plan. No obligation.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/pro-health-check`,
      languages: {
        en: `${SITE_CONFIG.url}/en/pro-health-check`,
        ar: `${SITE_CONFIG.url}/ar/pro-health-check`,
        "x-default": `${SITE_CONFIG.url}/en`,
      },
    },
  };
}

const healthCheckFAQs = [
  {
    question: "What happens during the PRO Health Check?",
    answer:
      "We review your current PRO setup in a 30-minute call. We check visa and licence deadlines, Emiratisation compliance status, and compare your current costs to market rates. You receive a summary report within 48 hours.",
  },
  {
    question: "Is the PRO Health Check really free?",
    answer:
      "Yes. There is no cost and no obligation. We believe in demonstrating value before asking for commitment. If we identify issues, we will explain them clearly. Whether you choose ZETUP PRO or not is entirely up to you.",
  },
  {
    question: "How long does the Health Check take?",
    answer:
      "The call itself is 30 minutes. We send you a short questionnaire beforehand so we can prepare. You receive a written summary within 48 hours.",
  },
  {
    question: "Do I need to share sensitive documents?",
    answer:
      "Not for the initial assessment. We work with the information you share during the call. If you choose to proceed with ZETUP PRO, we will request documents during the formal onboarding process.",
  },
  {
    question: "What if I am happy with my current PRO provider?",
    answer:
      "Then the Health Check simply confirms you are in good shape. Many companies discover compliance gaps or overpayments they were not aware of. Either way, you gain valuable insight at no cost.",
  },
];

export default async function ProHealthCheckPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-fjord-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -top-20 end-1/4 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            Free Assessment
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Is Your PRO Company Actually Protecting Your Business?
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl font-body">
            Most companies in Dubai do not know whether their PRO provider is
            compliant, competitive, or even doing the basics right. Our free
            30-minute Health Check gives you the answers — with zero obligation.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-12 text-center">
            What You Get in 30 Minutes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-5 sm:p-8 rounded-xl border border-mist bg-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-600 mb-4">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-fjord-900 mb-3">
                Compliance Snapshot
              </h3>
              <p className="text-slate leading-relaxed">
                We check your trade licence status, visa expiry dates, MOHRE
                compliance, and establishment card validity. You will know
                exactly where you stand with every government obligation — and
                where the gaps are.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-xl border border-mist bg-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-600 mb-4">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-fjord-900 mb-3">
                Emiratisation Gap Analysis
              </h3>
              <p className="text-slate leading-relaxed">
                If your company has 20+ employees, we calculate your current
                Emiratisation position, identify your target, and quantify the
                gap. You will know exactly how many positions you need to fill
                and what the fines are if you do not.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-xl border border-mist bg-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-600 mb-4">
                <BarChart3 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-fjord-900 mb-3">
                Cost Comparison
              </h3>
              <p className="text-slate leading-relaxed">
                We compare what you are currently paying to what you should be
                paying based on your company size and transaction volume. Many
                companies discover they are overpaying by 20-40% for the same
                services.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-xl border border-mist bg-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-600 mb-4">
                <ClipboardCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-fjord-900 mb-3">
                Action Plan
              </h3>
              <p className="text-slate leading-relaxed">
                Within 48 hours of the call, you receive a written summary with
                specific recommendations — whether you stay with your current
                provider or switch. No sales pitch, just clear next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost" id="form">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-4 text-center">
            Book Your Free Health Check
          </h2>
          <p className="text-lg text-slate text-center mb-12">
            Fill in the details below and we will schedule your 30-minute
            assessment within 2 business days.
          </p>

          <Suspense>
            <FormFeedback
              formType="pro-health-check"
              successTitle="Health Check booked!"
              successMessage="We will contact you within 2 business days to schedule your free 30-minute assessment."
            />
          </Suspense>
          <form
            action={handleHealthCheckForm}
            className="bg-white rounded-2xl border border-mist p-8 md:p-10 space-y-6"
          >
            <input type="hidden" name="locale" value={locale} />
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  Full Name *
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
                  Company Name *
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

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  Email *
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
                  Phone / WhatsApp *
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

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="employees"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  Number of Employees *
                </label>
                <select
                  id="employees"
                  name="employees"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-white"
                >
                  <option value="">Select employee range</option>
                  <option value="1-10">1-10</option>
                  <option value="10-25">10-25</option>
                  <option value="25-50">25-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-250">100-250</option>
                  <option value="250+">250+</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="currentProvider"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  Current PRO Provider
                </label>
                <input
                  type="text"
                  id="currentProvider"
                  name="currentProvider"
                  placeholder="e.g. In-house, Agency name, None"
                  className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="painPoint"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  Biggest Pain Point
                </label>
                <select
                  id="painPoint"
                  name="painPoint"
                  className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-white"
                >
                  <option value="">Select your biggest challenge</option>
                  <option value="delays">Visa and document delays</option>
                  <option value="pricing">
                    Hidden fees and pricing issues
                  </option>
                  <option value="communication">Poor communication</option>
                  <option value="emiratisation">
                    Emiratisation compliance
                  </option>
                  <option value="renewal">Missed renewal deadlines</option>
                  <option value="accuracy">Rejected applications</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-medium text-graphite mb-1.5"
                >
                  Preferred Time for Call
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-white"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM GST)</option>
                  <option value="afternoon">
                    Afternoon (12 PM - 3 PM GST)
                  </option>
                  <option value="late-afternoon">
                    Late Afternoon (3 PM - 6 PM GST)
                  </option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
            >
              Book My Free Health Check
            </button>
            <p className="text-sm text-stone">
              By submitting this form, you agree to our Privacy Policy. We will
              contact you within 2 business days to schedule the call.
            </p>
          </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-12 text-center">
            Why Companies Book a Health Check
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-mist bg-white">
              <div className="flex items-center justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-50">
                  <CheckCircle2 className="w-7 h-7 text-sage-500" />
                </div>
              </div>
              <p className="text-4xl font-display font-bold text-fjord-900 mb-2">
                67%
              </p>
              <p className="text-sm text-slate leading-relaxed font-body">
                of companies we audit have at least one compliance gap they were
                not aware of — an expired card, a missed deadline, or a visa
                that should have been renewed.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-mist bg-white">
              <div className="flex items-center justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-50">
                  <CheckCircle2 className="w-7 h-7 text-sage-500" />
                </div>
              </div>
              <p className="text-4xl font-display font-bold text-fjord-900 mb-2">
                40%
              </p>
              <p className="text-sm text-slate leading-relaxed font-body">
                of companies are overpaying for PRO services compared to what
                they should be paying based on company size and transaction
                volume.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-mist bg-white">
              <div className="flex items-center justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-50">
                  <CheckCircle2 className="w-7 h-7 text-sage-500" />
                </div>
              </div>
              <p className="text-4xl font-display font-bold text-fjord-900 mb-2">
                Most
              </p>
              <p className="text-sm text-slate leading-relaxed font-body">
                companies have never received a proactive renewal calendar from
                their PRO provider. They only find out about deadlines when
                something is already overdue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-frost">
        <FAQSection items={healthCheckFAQs} />
      </section>

      {/* Schema */}
      <FAQSchema items={healthCheckFAQs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: "PRO Health Check",
            url: `${SITE_CONFIG.url}/${locale}/pro-health-check`,
          },
        ]}
      />
    </>
  );
}

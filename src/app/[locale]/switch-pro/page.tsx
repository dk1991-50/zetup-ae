import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  FileCheck,
  MessageCircle,
  AlertTriangle,
  DollarSign,
  Zap,
} from "lucide-react";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
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
        ? "غيّر مزود PRO بدون أي انقطاع — زيتب"
        : "Switch Your PRO Provider Without Missing a Beat | ZETUP PRO",
    description:
      locale === "ar"
        ? "انتقل إلى زيتب بسلاسة. نحن ندير عملية التسليم الكاملة من مزودك الحالي بدون أي انقطاع في الخدمة أو فجوات في الامتثال."
        : "Switch to ZETUP PRO_PRO_HOLD seamlessly. We manage the full handover from your current PRO provider with zero service disruption, full compliance continuity, and transparent pricing from day one.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/switch-pro`,
      languages: {
        en: `${SITE_CONFIG.url}/en/switch-pro`,
        ar: `${SITE_CONFIG.url}/ar/switch-pro`,
      },
    },
  };
}

const switchingSteps = [
  {
    title: "Free PRO Health Check",
    description:
      "We assess your current setup in 30 minutes — compliance status, upcoming deadlines, current costs, and Emiratisation position. You get a clear picture of where you stand.",
  },
  {
    title: "Detailed Proposal",
    description:
      "Within 48 hours, you receive a one-page proposal with your recommended tier, exact monthly retainer, and everything included. No ambiguity, no hidden costs.",
  },
  {
    title: "Managed Handover",
    description:
      "We contact your current provider, manage the document transfer, and take over all active transactions. We audit every visa, licence, and deadline during the transition.",
  },
  {
    title: "Full Service from Day 7",
    description:
      "By day 7, you have a complete 12-month renewal calendar, a dedicated WhatsApp group, and your account coordinator handling every government transaction.",
  },
];

export default async function SwitchProPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-fjord-900">
        <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
        <div className="absolute -bottom-32 start-1/3 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 rounded-full font-display">
            Switch to ZETUP PRO_PRO_HOLD
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Switch Your PRO Provider Without Missing a Beat
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10 font-body">
            Changing PRO companies feels risky — you worry about visa delays,
            missing deadlines, or losing documents in the handover. We have
            managed dozens of switches and built a process that eliminates the
            risk entirely.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pro-health-check"
              className="inline-flex items-center gap-2 px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
            >
              Start With a Free Health Check
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors font-display"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Companies Switch */}
      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-4 text-center">
            Why Companies Switch Their PRO
          </h2>
          <p className="text-lg text-slate text-center max-w-2xl mx-auto mb-12">
            These are the reasons companies contact us about switching — and
            every one of them is solvable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-mist bg-white">
              <AlertTriangle
                className="w-8 h-8 text-aurora-500 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                Surprise Invoices
              </h3>
              <p className="text-slate leading-relaxed text-sm">
                Charges you did not agree to, government fees marked up without
                disclosure, and add-on costs that were never discussed. ZETUP PRO
                separates service fees from government fees on every invoice.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-mist bg-white">
              <Clock
                className="w-8 h-8 text-aurora-500 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                Chronic Delays
              </h3>
              <p className="text-slate leading-relaxed text-sm">
                Visa processing that takes weeks instead of days. Licence
                renewals submitted at the last minute. Status updates only when
                you chase. ZETUP PRO_PRO_HOLD provides proactive WhatsApp updates and 60-day
                advance deadline management.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-mist bg-white">
              <MessageCircle
                className="w-8 h-8 text-aurora-500 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                Radio Silence
              </h3>
              <p className="text-slate leading-relaxed text-sm">
                Emails unanswered for days. Phone calls that go to voicemail.
                Having to visit the office in person to get a status update.
                Every ZETUP PRO client gets a dedicated WhatsApp group with same-day
                responses.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-mist bg-white">
              <FileCheck
                className="w-8 h-8 text-aurora-500 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                Rejected Applications
              </h3>
              <p className="text-slate leading-relaxed text-sm">
                Visa applications rejected because of errors your PRO should
                have caught. Documents submitted with wrong information. Each
                rejection adds 1-3 weeks. ZETUP PRO_PRO_HOLD's pre-submission review prevents
                this.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-mist bg-white">
              <DollarSign
                className="w-8 h-8 text-aurora-500 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                Overpaying
              </h3>
              <p className="text-slate leading-relaxed text-sm">
                Paying enterprise rates for essentials-level service. Being
                charged per transaction when a retainer would be cheaper. ZETUP PRO
                publishes transparent pricing so you always know what you are
                paying for.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-mist bg-white">
              <Zap className="w-8 h-8 text-aurora-500 mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-semibold text-fjord-900 mb-2">
                No Emiratisation Support
              </h3>
              <p className="text-slate leading-relaxed text-sm">
                With the December 2026 deadline approaching, many PRO companies
                still do not offer Emiratisation programme management. ZETUP PRO
                includes it in our Professional and Enterprise tiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-12 text-center">
            How We Manage the Switch
          </h2>
          <ProcessSteps steps={switchingSteps} />
        </div>
      </section>

      {/* The ZETUP PRO Difference */}
      <section className="py-20 px-6 md:px-8 lg:px-12 bg-frost">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-8">
            The ZETUP PRO Difference
          </h2>
          <div className="prose prose-lg text-slate max-w-none">
            <p>
              We are not the cheapest PRO company in Dubai and we do not claim
              to be. We are the most transparent. Every client knows exactly
              what they pay, exactly what is included, and exactly when things
              will happen.
            </p>
            <p>
              Our 30-day termination clause means we earn your business every
              month through performance — not through contractual lock-in. If we
              are not delivering, you can leave. That is our incentive to get it
              right.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-xl border border-mist bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-mist bg-frost">
                  <th className="text-start py-4 px-5 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    What You Get
                  </th>
                  <th className="text-start py-4 px-5 font-display font-semibold text-fjord-900 text-sm uppercase tracking-wider">
                    Typical PRO
                  </th>
                  <th className="text-start py-4 px-5 font-display font-semibold text-sage-700 text-sm uppercase tracking-wider">
                    ZETUP PRO
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-5 font-medium text-graphite">
                    Published pricing
                  </td>
                  <td className="py-4 px-5 text-stone">
                    Hidden behind contact form
                  </td>
                  <td className="py-4 px-5 text-sage-700 font-semibold">
                    Published on website
                  </td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-5 font-medium text-graphite">
                    Government fee transparency
                  </td>
                  <td className="py-4 px-5 text-stone">
                    Blended into single charge
                  </td>
                  <td className="py-4 px-5 text-sage-700 font-semibold">
                    Separated with receipts
                  </td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-5 font-medium text-graphite">
                    Communication channel
                  </td>
                  <td className="py-4 px-5 text-stone">Email, often slow</td>
                  <td className="py-4 px-5 text-sage-700 font-semibold">
                    Dedicated WhatsApp group
                  </td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-5 font-medium text-graphite">
                    Renewal management
                  </td>
                  <td className="py-4 px-5 text-stone">
                    Reactive (after expiry)
                  </td>
                  <td className="py-4 px-5 text-sage-700 font-semibold">
                    60-day advance reminders
                  </td>
                </tr>
                <tr className="border-b border-mist hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-5 font-medium text-graphite">
                    Contract term
                  </td>
                  <td className="py-4 px-5 text-stone">12-month lock-in</td>
                  <td className="py-4 px-5 text-sage-700 font-semibold">
                    30-day termination clause
                  </td>
                </tr>
                <tr className="hover:bg-frost/50 transition-colors">
                  <td className="py-4 px-5 font-medium text-graphite">
                    Emiratisation support
                  </td>
                  <td className="py-4 px-5 text-stone">Usually not offered</td>
                  <td className="py-4 px-5 text-sage-700 font-semibold">
                    Included in Professional and Enterprise
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seamless Handover */}
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fjord-900 mb-6">
            Seamless Handover Guarantee
          </h2>
          <div className="prose prose-lg text-slate max-w-none mb-8">
            <p>
              The biggest concern when switching PRO companies is service
              disruption. What if a visa renewal falls between the cracks? What
              if documents get lost? What if there is a gap in coverage?
            </p>
            <p>
              Our managed handover process eliminates these risks. We audit
              every active transaction, every upcoming deadline, and every
              document your current provider holds. We build a complete picture
              before we take over — so nothing gets missed.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-sage-200 bg-sage-50 text-center">
              <ShieldCheck className="w-10 h-10 text-sage-600 mx-auto mb-3" />
              <p className="font-display font-semibold text-fjord-900">
                Zero Disruption
              </p>
              <p className="text-sm text-slate mt-1">
                Active transactions continue without interruption
              </p>
            </div>
            <div className="p-6 rounded-xl border border-sage-200 bg-sage-50 text-center">
              <FileCheck className="w-10 h-10 text-sage-600 mx-auto mb-3" />
              <p className="font-display font-semibold text-fjord-900">
                Full Document Audit
              </p>
              <p className="text-sm text-slate mt-1">
                Every document accounted for and securely transferred
              </p>
            </div>
            <div className="p-6 rounded-xl border border-sage-200 bg-sage-50 text-center">
              <Clock className="w-10 h-10 text-sage-600 mx-auto mb-3" />
              <p className="font-display font-semibold text-fjord-900">
                7-Day Onboarding
              </p>
              <p className="text-sm text-slate mt-1">
                Fully operational with renewal calendar by day 7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Switch?"
        description="Start with a free PRO Health Check. In 30 minutes, you will know exactly where you stand — and exactly what switching to ZETUP PRO_PRO_HOLD would look like."
        primaryCta={
          <Link
            href="/pro-health-check"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors font-display"
          >
            Book Your Health Check
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        }
        secondaryCta={
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors font-display"
          >
            Contact Us
          </Link>
        }
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: "Switch PRO Provider",
            url: `${SITE_CONFIG.url}/${locale}/switch-pro`,
          },
        ]}
      />
    </>
  );
}

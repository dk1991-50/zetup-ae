import type { Metadata } from "next";
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
        ? "شروط الخدمة — زيتب للخدمات المؤسسية"
        : "Terms of Service — ZETUP PRO_PRO_HOLD Corporate Services",
    description:
      locale === "ar"
        ? "شروط الخدمة لزيتب للخدمات المؤسسية. الشروط والأحكام لخدمات PRO وتأسيس الشركات والتأشيرات في دبي."
        : "Terms of Service for ZETUP PRO_PRO_HOLD Corporate Services. Terms and conditions governing PRO services, company formation, visa processing, and corporate services in Dubai.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/terms-of-service`,
      languages: {
        en: `${SITE_CONFIG.url}/en/terms-of-service`,
        ar: `${SITE_CONFIG.url}/ar/terms-of-service`,
      },
    },
  };
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <section className="py-20 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fjord-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate mb-12">Last updated: March 1, 2026</p>

          <div className="prose prose-lg text-slate max-w-none space-y-10">
            {/* Agreement */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                1. Agreement to Terms
              </h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
                the ZETUP PRO_PRO_HOLD Corporate Services website ({SITE_CONFIG.url}) and the
                engagement of any services provided by ZETUP PRO_PRO_HOLD Corporate Services
                (&ldquo;ZETUP PRO,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;), a company registered and operating in Dubai,
                United Arab Emirates.
              </p>
              <p>
                By accessing our website or engaging our services, you agree to
                be bound by these Terms. If you do not agree to these Terms,
                please do not use our website or services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                2. Services
              </h2>
              <p>
                ZETUP PRO_PRO_HOLD provides corporate services for companies operating in the
                United Arab Emirates, including but not limited to:
              </p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  PRO (Public Relations Officer) services — government liaison,
                  visa processing, document clearing, and compliance management
                </li>
                <li>
                  Company formation — mainland LLC setup, trade licence
                  procurement, and post-formation support
                </li>
                <li>
                  Visa processing — employment visas, investor visas, Golden
                  Visas, dependent visas, and visa renewals
                </li>
                <li>
                  Emiratisation compliance — quota tracking, Nafis registration,
                  and MOHRE reporting
                </li>
                <li>
                  Trade licence renewal — annual licence renewal, activity
                  amendments, and partner changes
                </li>
                <li>
                  Corporate tax coordination — FTA registration, EmaraTax portal
                  management, and filing deadline tracking
                </li>
                <li>
                  Document clearing and attestation — MOFA, embassy, and notary
                  services
                </li>
              </ul>
              <p>
                The specific scope, deliverables, and pricing for each
                engagement are defined in a separate Service Agreement or
                proposal provided to the client before commencement of services.
              </p>
            </div>

            {/* Client Obligations */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                3. Client Obligations
              </h2>
              <p>When engaging our services, you agree to:</p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  Provide accurate, complete, and up-to-date information and
                  documents as required for the services you have engaged.
                </li>
                <li>
                  Respond to information requests within a reasonable timeframe,
                  as delays in providing required documents may result in delays
                  in government processing.
                </li>
                <li>
                  Ensure all documents provided are genuine and legally valid.
                  ZETUP PRO is not responsible for verifying the authenticity of
                  documents provided by the client.
                </li>
                <li>
                  Pay all fees as agreed in the Service Agreement, including
                  government fees that are billed separately at cost.
                </li>
                <li>
                  Comply with all applicable UAE laws and regulations relevant
                  to your business operations.
                </li>
              </ul>
            </div>

            {/* Fees and Payment */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                4. Fees and Payment
              </h2>
              <p>
                <strong>Service fees:</strong> Our professional service fees are
                defined in the Service Agreement and are billed monthly (for
                retainer services) or upon completion (for project-based
                services). All prices quoted are in UAE Dirhams (AED) and are
                exclusive of any applicable taxes unless otherwise stated.
              </p>
              <p>
                <strong>Government fees:</strong> Government fees are billed
                separately at cost, with official receipts attached. ZETUP PRO does
                not mark up government fees. These fees are subject to change by
                the relevant government authority without prior notice.
              </p>
              <p>
                <strong>Payment terms:</strong> Invoices are due within 15 days
                of issuance unless otherwise agreed in writing. Late payments
                may be subject to a late fee of 1.5% per month on the
                outstanding amount.
              </p>
              <p>
                <strong>Refund policy:</strong> Service fees for work already
                completed are non-refundable. Government fees paid on your
                behalf are non-refundable, as they are collected by government
                authorities. Unused retainer credits for the current billing
                period are not carried forward unless specified in the Service
                Agreement.
              </p>
            </div>

            {/* Service Agreement and Termination */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                5. Service Agreement and Termination
              </h2>
              <p>
                <strong>Standard term:</strong> Our standard Service Agreements
                have a 12-month term with automatic annual renewal unless
                terminated by either party.
              </p>
              <p>
                <strong>Termination clause:</strong> Either party may terminate
                the Service Agreement by providing 30 days&apos; written notice.
                Upon termination, ZETUP PRO will complete any in-progress
                transactions, transfer all client documents, and provide a final
                invoice for outstanding services and government fees.
              </p>
              <p>
                <strong>Immediate termination:</strong> ZETUP PRO reserves the right
                to terminate services immediately if the client breaches these
                Terms, provides fraudulent documents, engages in illegal
                activity, or fails to pay outstanding invoices after a 30-day
                cure period.
              </p>
              <p>
                <strong>Post-termination:</strong> Upon termination, all client
                documents will be returned within 14 business days. Active
                government transactions will be completed where possible, or the
                client will be provided with a detailed status report for
                handover to a new provider.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                6. Limitation of Liability
              </h2>
              <p>
                <strong>Government decisions:</strong> ZETUP PRO acts as a
                processing agent and government liaison. We do not control
                government decisions, processing timelines, or fee changes. We
                cannot guarantee the approval of any visa application, licence
                renewal, or government request. Rejections or delays caused by
                government authorities are beyond our control.
              </p>
              <p>
                <strong>Processing timelines:</strong> All timelines provided
                are estimates based on standard processing and are not
                guaranteed. Government processing times are subject to change
                without notice.
              </p>
              <p>
                <strong>Maximum liability:</strong> To the maximum extent
                permitted by UAE law, ZETUP PRO&apos;s total liability for any
                claims arising from our services shall not exceed the total fees
                paid by the client for the specific service giving rise to the
                claim in the 12 months preceding the claim.
              </p>
              <p>
                <strong>Exclusions:</strong> ZETUP PRO shall not be liable for
                indirect, incidental, consequential, or punitive damages,
                including loss of profits, business interruption, or loss of
                data, regardless of the cause of action.
              </p>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                7. Confidentiality
              </h2>
              <p>
                ZETUP PRO treats all client information as confidential. We will not
                disclose your business information, documents, or personal data
                to any third party except as required to perform the services
                (e.g., government submissions), as required by law, or with your
                express written consent.
              </p>
              <p>
                This confidentiality obligation survives the termination of the
                Service Agreement.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                8. Intellectual Property
              </h2>
              <p>
                All content on the ZETUP PRO website — including text, graphics,
                logos, images, and software — is the property of ZETUP PRO Corporate
                Services and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, modify, or create
                derivative works from our website content without prior written
                permission.
              </p>
              <p>
                Guides, reports, and educational content published on our
                website are provided for informational purposes only and do not
                constitute legal, tax, or professional advice.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                9. Disclaimer
              </h2>
              <p>
                The information provided on our website and in our services is
                for general informational purposes. While we strive to keep
                information current and accurate, we make no warranties or
                representations about the completeness, accuracy, or reliability
                of any information.
              </p>
              <p>
                ZETUP PRO is not a law firm and does not provide legal advice. For
                complex legal matters, including company structuring, dispute
                resolution, or regulatory interpretation, we recommend engaging
                a qualified UAE lawyer.
              </p>
              <p>
                ZETUP PRO is not an accounting firm and does not provide tax
                advisory, financial statement preparation, or audit services. We
                coordinate with your accountant for government filings but do
                not perform tax computation.
              </p>
            </div>

            {/* Force Majeure */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                10. Force Majeure
              </h2>
              <p>
                Neither party shall be liable for delays or failures in
                performance resulting from events beyond reasonable control,
                including but not limited to government actions or changes in
                law, natural disasters, pandemics, system outages, or
                disruptions to government services.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                11. Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the United Arab Emirates. Any disputes arising
                from or in connection with these Terms or the services provided
                by ZETUP PRO shall be subject to the exclusive jurisdiction of the
                courts of Dubai, UAE.
              </p>
              <p>
                Before pursuing formal legal proceedings, both parties agree to
                attempt to resolve any dispute through good faith negotiation
                for a period of 30 days.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                12. Changes to Terms
              </h2>
              <p>
                ZETUP PRO reserves the right to update these Terms at any time. The
                updated Terms will be posted on this page with the revised
                &ldquo;Last updated&rdquo; date. Continued use of our website or
                services after changes constitutes acceptance of the revised
                Terms. Material changes will be communicated to active clients
                via email.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                13. Contact
              </h2>
              <p>For questions about these Terms of Service, contact us at:</p>
              <div className="bg-frost rounded-xl p-6 not-prose">
                <p className="font-semibold text-fjord-900">
                  ZETUP PRO_PRO_HOLD Corporate Services
                </p>
                <p className="text-slate mt-1">{SITE_CONFIG.address.street}</p>
                <p className="text-slate">
                  {SITE_CONFIG.address.area}, {SITE_CONFIG.address.city},{" "}
                  {SITE_CONFIG.address.country}
                </p>
                <p className="text-slate mt-2">
                  Email:{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sage-600 underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p className="text-slate">
                  Phone:{" "}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-sage-600 underline"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          {
            name: "Terms of Service",
            url: `${SITE_CONFIG.url}/${locale}/terms-of-service`,
          },
        ]}
      />
    </>
  );
}

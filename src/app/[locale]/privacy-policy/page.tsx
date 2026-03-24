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
        ? "سياسة الخصوصية — زيتب للخدمات المؤسسية"
        : "Privacy Policy — ZETUP Corporate Services",
    description:
      locale === "ar"
        ? "سياسة الخصوصية لزيتب للخدمات المؤسسية. كيف نجمع ونستخدم ونحمي بياناتك الشخصية."
        : "Privacy Policy for ZETUP Corporate Services. How we collect, use, and protect your personal data in compliance with UAE data protection laws and GDPR.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/privacy-policy`,
      languages: {
        en: `${SITE_CONFIG.url}/en/privacy-policy`,
        ar: `${SITE_CONFIG.url}/ar/privacy-policy`,
      },
    },
  };
}

export default async function PrivacyPolicyPage({
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
            Privacy Policy
          </h1>
          <p className="text-slate mb-12">Last updated: March 1, 2026</p>

          <div className="prose prose-lg text-slate max-w-none space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                1. Introduction
              </h2>
              <p>
                ZETUP Corporate Services (&ldquo;ZETUP,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
                protecting the privacy and security of your personal data. This
                Privacy Policy explains how we collect, use, store, and share
                your information when you use our website ({SITE_CONFIG.url}),
                our services, or interact with us in any way.
              </p>
              <p>
                ZETUP is based in Dubai, United Arab Emirates, at{" "}
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.area},{" "}
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}. We
                operate in compliance with the UAE Federal Decree-Law No. 45 of
                2021 on the Protection of Personal Data (&ldquo;UAE Data
                Protection Law&rdquo;), applicable Dubai International Financial
                Centre (DIFC) data protection regulations, and the European
                Union General Data Protection Regulation (GDPR) where applicable
                to EU/EEA individuals.
              </p>
            </div>

            {/* Data We Collect */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                2. Data We Collect
              </h2>
              <p>We collect the following categories of personal data:</p>
              <p>
                <strong>Information you provide directly:</strong> Full name,
                company name, job title, email address, phone number, WhatsApp
                number, employee count, current PRO provider details, and any
                other information you include in form submissions or
                communications with us.
              </p>
              <p>
                <strong>Service-related data:</strong> When you engage our
                corporate services, we process data necessary for government
                transactions on your behalf, including passport copies, visa
                documents, trade licence details, Emirates ID information, and
                company registration documents. This data is processed solely
                for the purpose of delivering the services you have engaged us
                to perform.
              </p>
              <p>
                <strong>Website usage data:</strong> IP address, browser type,
                device information, pages visited, time spent on pages,
                referring URLs, and interaction patterns. This data is collected
                through cookies and similar technologies.
              </p>
            </div>

            {/* How We Use Your Data */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                3. How We Use Your Data
              </h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  <strong>Service delivery:</strong> Processing government
                  transactions, visa applications, trade licence renewals, and
                  other corporate services you have engaged us to perform.
                </li>
                <li>
                  <strong>Communication:</strong> Responding to your enquiries,
                  sending service updates, deadline reminders, and regulatory
                  alerts relevant to your business.
                </li>
                <li>
                  <strong>Proposals and assessments:</strong> Preparing PRO
                  Health Check reports, service proposals, and compliance
                  assessments based on information you provide.
                </li>
                <li>
                  <strong>Website improvement:</strong> Analysing usage patterns
                  to improve our website content, user experience, and service
                  offerings.
                </li>
                <li>
                  <strong>Legal compliance:</strong> Meeting our obligations
                  under UAE law, including record-keeping requirements for
                  corporate service providers.
                </li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal data to third
                parties for marketing purposes.
              </p>
            </div>

            {/* Legal Basis */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                4. Legal Basis for Processing
              </h2>
              <p>We process your data on the following legal bases:</p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  <strong>Contractual necessity:</strong> Processing required to
                  perform the services you have engaged us to deliver.
                </li>
                <li>
                  <strong>Legitimate interest:</strong> Improving our services,
                  website analytics, and business development, where our
                  interests do not override your rights.
                </li>
                <li>
                  <strong>Consent:</strong> Where you have provided explicit
                  consent, such as subscribing to communications or submitting
                  forms on our website.
                </li>
                <li>
                  <strong>Legal obligation:</strong> Where processing is
                  required to comply with UAE law or regulatory requirements.
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                5. Data Sharing and Transfers
              </h2>
              <p>
                We share your data only with the following categories of
                recipients, and only to the extent necessary:
              </p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  <strong>UAE government authorities:</strong> MOHRE, DET,
                  GDRFA, ICP, DHA, FTA, and other government bodies — solely for
                  the purpose of processing your government transactions.
                </li>
                <li>
                  <strong>Service providers:</strong> Website hosting, analytics
                  tools, and communication platforms that process data on our
                  behalf under strict data processing agreements.
                </li>
                <li>
                  <strong>Professional advisors:</strong> Lawyers, accountants,
                  and auditors where necessary for legal, accounting, or audit
                  purposes.
                </li>
              </ul>
              <p>
                Where data is transferred outside the UAE, we ensure appropriate
                safeguards are in place, including standard contractual clauses
                or equivalent mechanisms recognised under UAE and EU data
                protection law.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                6. Cookies and Tracking Technologies
              </h2>
              <p>Our website uses the following types of cookies:</p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  <strong>Essential cookies:</strong> Required for basic website
                  functionality, including language preferences and session
                  management. These cannot be disabled.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how
                  visitors interact with our website, which pages are most
                  visited, and how we can improve the user experience. We use
                  privacy-respecting analytics tools.
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Used to track the
                  effectiveness of our advertising campaigns and provide
                  relevant content. These are only set with your explicit
                  consent.
                </li>
              </ul>
              <p>
                You can manage your cookie preferences at any time through your
                browser settings or our cookie consent banner.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                7. Data Retention
              </h2>
              <p>
                We retain your personal data for as long as necessary to fulfil
                the purposes for which it was collected:
              </p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  <strong>Client service data:</strong> Retained for the
                  duration of our service engagement plus 7 years, as required
                  under UAE commercial law for record-keeping.
                </li>
                <li>
                  <strong>Enquiry and form data:</strong> Retained for up to 2
                  years from the date of submission, or until you request
                  deletion.
                </li>
                <li>
                  <strong>Website analytics data:</strong> Retained for up to 26
                  months in aggregated, anonymised form.
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                8. Your Rights
              </h2>
              <p>
                Under applicable data protection laws, you have the following
                rights:
              </p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  <strong>Right of access:</strong> Request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to rectification:</strong> Request correction of
                  inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Right to erasure:</strong> Request deletion of your
                  personal data, subject to legal retention requirements.
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> Request that we
                  limit how we use your data in certain circumstances.
                </li>
                <li>
                  <strong>Right to data portability:</strong> Request your data
                  in a structured, machine-readable format.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Where processing
                  is based on consent, you can withdraw it at any time without
                  affecting the lawfulness of prior processing.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sage-600 underline"
                >
                  {SITE_CONFIG.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sage-600 underline"
                >
                  {SITE_CONFIG.phone}
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                9. Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures
                to protect your personal data against unauthorised access,
                alteration, disclosure, or destruction. These measures include
                encrypted data transmission (SSL/TLS), secure document storage,
                access controls, and regular security reviews.
              </p>
              <p>
                While we take all reasonable precautions, no method of
                transmission over the internet or electronic storage is 100%
                secure. We cannot guarantee absolute security of your data.
              </p>
            </div>

            {/* Children */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Our services are directed at businesses and individuals over the
                age of 18. We do not knowingly collect personal data from
                children under 18. If you believe we have inadvertently
                collected such data, please contact us immediately.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, or legal requirements. We
                will post the updated policy on this page with the revised
                &ldquo;Last updated&rdquo; date. Material changes will be
                communicated through our website or via email to existing
                clients.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-fjord-900">
                12. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your data protection rights, contact us at:
              </p>
              <div className="bg-frost rounded-xl p-6 not-prose">
                <p className="font-semibold text-fjord-900">
                  ZETUP Corporate Services
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
            name: "Privacy Policy",
            url: `${SITE_CONFIG.url}/${locale}/privacy-policy`,
          },
        ]}
      />
    </>
  );
}

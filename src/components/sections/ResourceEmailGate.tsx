"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { handleResourceDownload } from "@/lib/actions";

interface ResourceEmailGateProps {
  /** Locale for redirect targeting */
  locale: string;
  /** Resource slug — must match the one used by the server action */
  resource: string;
  /** Public link sent to the email recipient (typically a same-page anchor) */
  resourceUrl: string;
  /** Localised button label */
  buttonLabel: string;
  /** Localised heading */
  heading: string;
  /** Localised subheading */
  subheading: string;
  /** Localised email placeholder */
  emailPlaceholder: string;
  /** Localised name label / placeholder */
  namePlaceholder: string;
  /** Localised company label / placeholder */
  companyPlaceholder: string;
  /** Localised success message text shown after submission */
  successMessage: string;
}

export function ResourceEmailGate({
  locale,
  resource,
  resourceUrl,
  buttonLabel,
  heading,
  subheading,
  emailPlaceholder,
  namePlaceholder,
  companyPlaceholder,
  successMessage,
}: ResourceEmailGateProps) {
  const params = useSearchParams();
  const isSuccess = params?.get("success") === "true";
  const isError = params?.get("error") === "validation";
  const [submitted, setSubmitted] = useState(false);

  // Show success state from query param too, in case user landed back via the
  // server-action redirect.
  useEffect(() => {
    if (isSuccess) setSubmitted(true);
  }, [isSuccess]);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage-300 bg-sage-50/60 p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-700 mb-2 font-display">
          ✓ {locale === "ar" ? "تم" : "Sent"}
        </p>
        <p className="text-lg leading-relaxed text-fjord-900 font-body">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      action={handleResourceDownload}
      onSubmit={() => setSubmitted(true)}
      className="rounded-2xl border border-mist bg-white p-6 sm:p-8 shadow-md"
    >
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="resource" value={resource} />
      <input type="hidden" name="resourceUrl" value={resourceUrl} />
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="mb-5">
        <h3 className="font-display text-lg font-bold text-fjord-900 mb-1">
          {heading}
        </h3>
        <p className="text-sm text-slate font-body">{subheading}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          name="name"
          placeholder={namePlaceholder}
          aria-label={namePlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow text-base"
        />
        <input
          type="text"
          name="company"
          placeholder={companyPlaceholder}
          aria-label={companyPlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow text-base"
        />
      </div>
      <input
        type="email"
        name="email"
        required
        placeholder={emailPlaceholder}
        aria-label={emailPlaceholder}
        className="w-full px-4 py-3 mb-4 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow text-base"
      />
      <button
        type="submit"
        className="w-full px-8 py-3.5 bg-sage-500 text-white font-semibold rounded-lg hover:bg-sage-600 transition-colors text-base font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
      >
        {buttonLabel}
      </button>
      {isError && (
        <p className="mt-3 text-sm text-aurora-600 font-body">
          {locale === "ar"
            ? "يبدو أن البريد الإلكتروني غير صالح — حاول مرة أخرى."
            : "That email doesn't look quite right — please try again."}
        </p>
      )}
    </form>
  );
}

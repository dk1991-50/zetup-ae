"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";
import { SITE_CONFIG } from "@/lib/constants";

interface FormFeedbackProps {
  successTitle?: string;
  successMessage?: string;
  errorMessage?: string;
  formType?: "contact" | "pro-health-check";
}

function buildWhatsAppUrl(formType?: "contact" | "pro-health-check") {
  const text =
    formType === "pro-health-check"
      ? "Hi ZETUP PRO — I just submitted the PRO Health Check form on zetup.ae. Looking forward to hearing from you."
      : "Hi ZETUP PRO — I just submitted the contact form on zetup.ae. Looking forward to hearing from you.";
  return `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export function FormFeedback({
  successTitle = "Message sent!",
  successMessage = "We will get back to you within 24 hours.",
  errorMessage = "Something went wrong. Please try again or contact us via WhatsApp.",
  formType,
}: FormFeedbackProps) {
  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "true";
  const wantsWhatsApp = searchParams.get("wa") === "1";
  const error = searchParams.get("error");
  const fired = useRef(false);

  useEffect(() => {
    if (success && !fired.current) {
      if (formType) trackFormSubmission(formType);
      fired.current = true;
      // Auto-open WhatsApp in a new tab when ?wa=1 is present
      if (wantsWhatsApp && typeof window !== "undefined") {
        const url = buildWhatsAppUrl(formType);
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  }, [success, formType, wantsWhatsApp]);

  if (success) {
    const waUrl = buildWhatsAppUrl(formType);
    return (
      <div
        role="alert"
        className="rounded-xl border border-sage-200 bg-sage-50 p-6 text-center"
      >
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-sage-500" />
        <h3 className="font-display text-xl font-semibold text-fjord-900 mb-2">
          {successTitle}
        </h3>
        <p className="text-slate font-body">{successMessage}</p>
        {wantsWhatsApp && (
          <div className="mt-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-source="form_success_wa"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb155]"
            >
              <MessageCircle className="h-4 w-4" />
              Continue on WhatsApp
            </a>
            <p className="mt-2 text-xs text-slate-500 font-body">
              WhatsApp should open automatically. Tap the button if it
              doesn&apos;t.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="rounded-xl border border-aurora-200 bg-aurora-50 p-6 mb-6"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-aurora-500" />
          <p className="text-sm text-aurora-800 font-body">
            {error === "validation"
              ? "Please check your details and try again. All required fields must be filled in."
              : errorMessage}
          </p>
        </div>
      </div>
    );
  }

  return null;
}

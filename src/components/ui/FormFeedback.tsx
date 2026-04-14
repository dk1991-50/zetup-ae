"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";

interface FormFeedbackProps {
  successTitle?: string;
  successMessage?: string;
  errorMessage?: string;
  formType?: "contact" | "pro-health-check";
}

export function FormFeedback({
  successTitle = "Message sent!",
  successMessage = "We will get back to you within 24 hours.",
  errorMessage = "Something went wrong. Please try again or contact us via WhatsApp.",
  formType,
}: FormFeedbackProps) {
  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "true";
  const error = searchParams.get("error");
  const fired = useRef(false);

  useEffect(() => {
    if (success && formType && !fired.current) {
      trackFormSubmission(formType);
      fired.current = true;
    }
  }, [success, formType]);

  if (success) {
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

"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface FormFeedbackProps {
  successTitle?: string;
  successMessage?: string;
  errorMessage?: string;
}

export function FormFeedback({
  successTitle = "Message sent!",
  successMessage = "We will get back to you within 24 hours.",
  errorMessage = "Something went wrong. Please try again or contact us via WhatsApp.",
}: FormFeedbackProps) {
  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "true";
  const error = searchParams.get("error");

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

"use server";

import { redirect } from "next/navigation";
import { contactSchema, healthCheckSchema } from "@/lib/validation";
import { notifyNewLead } from "@/lib/email";

// FormSubmit.co — free email-webhook service, no account needed.
// First submission triggers an email verification to info@zetup.ae;
// after that, every POST is forwarded as an email.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@zetup.ae";

async function postToFormSubmit(
  subject: string,
  fields: Record<string, string | undefined>,
) {
  try {
    const body = new URLSearchParams();
    body.append("_subject", subject);
    body.append("_template", "table");
    body.append("_captcha", "false");
    for (const [k, v] of Object.entries(fields)) {
      if (v) body.append(k, v);
    }
    // FormSubmit.co blocks server-side POSTs unless Origin/Referer headers
    // identify a trusted web origin. zetup.ae is whitelisted on first
    // submission via the activation email it sends to info@zetup.ae.
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Origin: "https://zetup.ae",
        Referer: "https://zetup.ae/",
      },
      body,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("[FormSubmit] non-OK response:", res.status);
    }
  } catch (err) {
    console.error("[FormSubmit] failed:", err);
  }
}

export async function handleContactForm(formData: FormData) {
  const locale = formData.get("locale")?.toString() || "en";

  // Honeypot — bots fill this hidden field
  if (formData.get("website")) {
    redirect(`/${locale}/contact?success=true&wa=1`);
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name")?.toString(),
    company: formData.get("company")?.toString(),
    email: formData.get("email")?.toString(),
    phone: formData.get("phone")?.toString(),
    service: formData.get("service")?.toString() || undefined,
    message: formData.get("message")?.toString() || undefined,
  });

  if (!parsed.success) {
    return redirect(`/${locale}/contact?error=validation`);
  }

  const d = parsed.data;
  const employees = formData.get("employees")?.toString() || "";

  // Backup path (permanent email record) — fire-and-forget
  await postToFormSubmit(`New Contact Form — ${d.company}`, {
    form_type: "contact",
    full_name: d.name,
    company_name: d.company,
    email: d.email,
    phone: d.phone,
    employees,
    service_interest: d.service,
    message: d.message,
  });

  // Fire-and-forget Resend email (only if RESEND_API_KEY configured)
  notifyNewLead({
    formType: "contact",
    name: d.name,
    company: d.company,
    email: d.email,
    phone: d.phone,
    extras: {
      Service: d.service,
      Employees: employees,
      Message: d.message,
    },
  }).catch(() => {});

  // Primary path: success page opens WhatsApp automatically
  redirect(`/${locale}/contact?success=true&wa=1`);
}

export async function handleHealthCheckForm(formData: FormData) {
  const locale = formData.get("locale")?.toString() || "en";

  if (formData.get("website")) {
    redirect(`/${locale}/pro-health-check?success=true&wa=1`);
  }

  const parsed = healthCheckSchema.safeParse({
    name: formData.get("name")?.toString(),
    company: formData.get("company")?.toString(),
    email: formData.get("email")?.toString(),
    phone: formData.get("phone")?.toString(),
    employees: formData.get("employees")?.toString() || undefined,
    currentProvider: formData.get("currentProvider")?.toString() || undefined,
    painPoint: formData.get("painPoint")?.toString() || undefined,
    preferredTime: formData.get("preferredTime")?.toString() || undefined,
  });

  if (!parsed.success) {
    return redirect(`/${locale}/pro-health-check?error=validation`);
  }

  const d = parsed.data;

  await postToFormSubmit(`New PRO Health Check — ${d.company}`, {
    form_type: "pro-health-check",
    full_name: d.name,
    company_name: d.company,
    email: d.email,
    phone: d.phone,
    employees: d.employees,
    current_provider: d.currentProvider,
    pain_point: d.painPoint,
    preferred_time: d.preferredTime,
  });

  notifyNewLead({
    formType: "pro-health-check",
    name: d.name,
    company: d.company,
    email: d.email,
    phone: d.phone,
    extras: {
      Employees: d.employees,
      "Current Provider": d.currentProvider,
      "Pain Point": d.painPoint,
      "Preferred Time": d.preferredTime,
    },
  }).catch(() => {});

  redirect(`/${locale}/pro-health-check?success=true&wa=1`);
}

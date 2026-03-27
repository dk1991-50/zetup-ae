"use server";

import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { contactSchema, healthCheckSchema } from "@/lib/validation";
import { notifyNewLead } from "@/lib/email";

export async function handleContactForm(formData: FormData) {
  const locale = formData.get("locale")?.toString() || "en";

  // Honeypot — bots fill this hidden field
  if (formData.get("website")) {
    redirect(`/${locale}/contact?success=true`);
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
  const { error } = await supabase.from("contact_submissions").insert({
    form_type: "contact",
    full_name: d.name,
    company_name: d.company,
    email: d.email,
    phone: d.phone,
    employee_count: formData.get("employees")?.toString() || null,
    service_interest: d.service || null,
    message: d.message || null,
  });

  if (error) {
    redirect(`/${locale}/contact?error=server`);
  }

  // Fire-and-forget email notification
  notifyNewLead({
    formType: "contact",
    name: d.name,
    company: d.company,
    email: d.email,
    phone: d.phone,
    extras: {
      Service: d.service,
      Employees: formData.get("employees")?.toString(),
      Message: d.message,
    },
  }).catch(() => {});

  redirect(`/${locale}/contact?success=true`);
}

export async function handleHealthCheckForm(formData: FormData) {
  const locale = formData.get("locale")?.toString() || "en";

  if (formData.get("website")) {
    redirect(`/${locale}/pro-health-check?success=true`);
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
  const { error } = await supabase.from("contact_submissions").insert({
    form_type: "pro-health-check",
    full_name: d.name,
    company_name: d.company,
    email: d.email,
    phone: d.phone,
    employee_count: d.employees || null,
    current_provider: d.currentProvider || null,
    pain_point: d.painPoint || null,
    preferred_time: d.preferredTime || null,
  });

  if (error) {
    redirect(`/${locale}/pro-health-check?error=server`);
  }

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

  redirect(`/${locale}/pro-health-check?success=true`);
}

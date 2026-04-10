import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const NOTIFY_EMAIL = "info@zetup.ae";

interface LeadNotification {
  formType: "contact" | "pro-health-check";
  name: string;
  company: string;
  email: string;
  phone: string;
  extras?: Record<string, string | null | undefined>;
}

export async function notifyNewLead(lead: LeadNotification) {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping notification");
    return;
  }

  const extraLines = lead.extras
    ? Object.entries(lead.extras)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n")
    : "";

  const subject =
    lead.formType === "pro-health-check"
      ? `New PRO Health Check Request — ${lead.company}`
      : `New Contact Form — ${lead.company}`;

  const text = `New ${lead.formType === "pro-health-check" ? "PRO Health Check" : "Contact"} submission:

Name: ${lead.name}
Company: ${lead.company}
Email: ${lead.email}
Phone: ${lead.phone}
${extraLines ? `\n${extraLines}` : ""}

---
Submitted via zetup.ae`;

  try {
    await resend.emails.send({
      from: "ZETUP PRO <onboarding@resend.dev>",
      to: [NOTIFY_EMAIL],
      subject,
      text,
    });
  } catch (err) {
    console.error("[email] Failed to send notification:", err);
  }
}

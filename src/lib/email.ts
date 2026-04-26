import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const NOTIFY_EMAIL = "info@zetup.ae";

interface LeadNotification {
  formType: "contact" | "pro-health-check" | "resource-download";
  name: string;
  company: string;
  email: string;
  phone: string;
  extras?: Record<string, string | null | undefined>;
}

interface ResourceDownloadEmail {
  to: string;
  resourceTitle: string;
  resourceUrl: string;
  recipientName?: string;
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

/**
 * Sends the resource (checklist, guide PDF) link to the recipient who
 * just gave their email. Plain text email — keeps it simple, deliverable.
 */
export async function sendResourceLink(payload: ResourceDownloadEmail) {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping resource send");
    return;
  }

  const greeting = payload.recipientName ? `Hi ${payload.recipientName},` : "Hi,";
  const text = `${greeting}

Thanks for asking for the ${payload.resourceTitle}. Here's your link:

${payload.resourceUrl}

Bookmark it — we keep it updated as DET, MOHRE, and GDRFA rules change.

If you'd like a 30-minute walkthrough of how the checklist applies to your specific company, reply to this email or book a free PRO Health Check at https://zetup.ae/en/pro-health-check.

— Dennis & Edina
ZETUP PRO Corporate Services
Floor 35, Churchill Executive Tower, Business Bay, Dubai
+971 58 573 8177  ·  info@zetup.ae`;

  try {
    await resend.emails.send({
      from: "ZETUP PRO <onboarding@resend.dev>",
      to: [payload.to],
      subject: `Your ${payload.resourceTitle}`,
      text,
    });
  } catch (err) {
    console.error("[email] Failed to send resource link:", err);
  }
}

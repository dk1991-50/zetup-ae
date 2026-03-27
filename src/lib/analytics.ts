// Google Analytics 4 event tracking utility
// GA_MEASUREMENT_ID is set via env var NEXT_PUBLIC_GA_ID

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

// Track page views (called by GA script automatically, but available for SPA nav)
export function pageview(url: string) {
  if (!GA_ID || typeof window === "undefined") return;
  window.gtag?.("config", GA_ID, { page_path: url });
}

// Generic event
export function event(
  action: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", action, params);
}

// --- Conversion events ---

export function trackFormSubmission(formType: "contact" | "pro-health-check") {
  event("generate_lead", {
    event_category: "form",
    event_label: formType,
    value: formType === "pro-health-check" ? 50 : 25,
  });
}

export function trackWhatsAppClick(source: string) {
  event("whatsapp_click", {
    event_category: "engagement",
    event_label: source,
  });
}

export function trackCTAClick(ctaName: string, page: string) {
  event("cta_click", {
    event_category: "engagement",
    event_label: ctaName,
    page_location: page,
  });
}

export function trackCalculatorInteraction(
  calculatorType: "cost" | "emiratisation",
  action: string,
  value?: number,
) {
  event("calculator_interaction", {
    event_category: "tool",
    event_label: `${calculatorType}_${action}`,
    ...(value !== undefined && { value }),
  });
}

export function trackPhoneClick(source: string) {
  event("phone_click", {
    event_category: "engagement",
    event_label: source,
  });
}

export function trackServicePageView(serviceSlug: string) {
  event("view_item", {
    event_category: "service",
    event_label: serviceSlug,
  });
}

export function trackBlogRead(slug: string) {
  event("blog_read", {
    event_category: "content",
    event_label: slug,
  });
}

// Type augmentation for window.gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

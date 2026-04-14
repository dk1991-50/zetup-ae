"use client";

import { useEffect } from "react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export function TrackingListeners() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
        const source =
          anchor.getAttribute("data-track-source") ||
          anchor.getAttribute("aria-label") ||
          "link";
        trackWhatsAppClick(source);
      } else if (href.startsWith("tel:")) {
        const source =
          anchor.getAttribute("data-track-source") ||
          anchor.getAttribute("aria-label") ||
          "link";
        trackPhoneClick(source);
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

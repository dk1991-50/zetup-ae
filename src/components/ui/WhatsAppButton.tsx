"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "@/i18n/routing";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppButton() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <a
      href={`${SITE_CONFIG.whatsappUrl}?text=Hi%20ZETUP%2C%20I%27d%20like%20to%20learn%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <MessageCircle size={24} strokeWidth={1.5} className="relative" />
    </a>
  );
}

import { useTranslations } from "next-intl";
import { Shield, MapPin, BadgeCheck, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
  { icon: Shield, labelKey: "trustBar.experience" },
  { icon: MapPin, labelKey: "trustBar.location" },
  { icon: BadgeCheck, labelKey: "trustBar.pricing" },
  { icon: Building2, labelKey: "trustBar.licensed" },
] as const;

const governmentLogos = [
  {
    src: "/images/misc/government_logos/misc_dubai-det-logo.jpg",
    alt: "Dubai DET",
  },
  { src: "/images/misc/government_logos/misc_mohre-logo.jpg", alt: "MOHRE" },
  {
    src: "/images/misc/government_logos/misc_dubai-government-logo.jpg",
    alt: "Dubai Government",
  },
] as const;

interface TrustBarProps {
  className?: string;
}

export function TrustBar({ className }: TrustBarProps) {
  const t = useTranslations();

  return (
    <section
      className={cn("relative border-b border-mist bg-white py-6", className)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-12 gap-y-4 px-6 sm:px-8 lg:px-12 flex-wrap">
        {trustItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.labelKey}
              className="flex items-center gap-3 text-sm text-graphite"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sage-50">
                <Icon size={16} strokeWidth={2} className="text-sage-600" />
              </div>
              <span className="font-medium font-body">{t(item.labelKey)}</span>
              {i < trustItems.length - 1 && (
                <span className="ms-8 hidden h-4 w-px bg-mist lg:block" />
              )}
            </div>
          );
        })}
      </div>

      {/* Government logos */}
      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-center gap-x-10 gap-y-4 px-6 sm:px-8 lg:px-12 flex-wrap border-t border-mist pt-6">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400 font-display">
          Licensed &amp; regulated by
        </span>
        {governmentLogos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}

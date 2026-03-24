import { useTranslations } from "next-intl";
import { Shield, MapPin, BadgeCheck, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
  { icon: Shield, labelKey: "trustBar.experience" },
  { icon: MapPin, labelKey: "trustBar.location" },
  { icon: BadgeCheck, labelKey: "trustBar.pricing" },
  { icon: Building2, labelKey: "trustBar.licensed" },
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
    </section>
  );
}

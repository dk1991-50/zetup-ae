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
      className={cn(
        "relative border-b border-mist bg-white py-5 overflow-x-auto",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-8 px-6 sm:px-8 lg:px-12 whitespace-nowrap">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.labelKey}
              className="flex items-center gap-2 text-sm text-graphite shrink-0"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sage-50">
                <Icon size={14} strokeWidth={2} className="text-sage-600" />
              </div>
              <span className="font-medium font-body text-xs sm:text-sm">
                {t(item.labelKey)}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

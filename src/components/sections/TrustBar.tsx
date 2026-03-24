import { useTranslations } from "next-intl";
import {
  Shield,
  MapPin,
  BadgeCheck,
  Building2,
  type LucideIcon,
} from "lucide-react";
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
    <section className={cn("border-y border-mist bg-frost py-5", className)}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.labelKey}
              className="flex items-center gap-2 text-sm font-medium text-fjord-700 font-display"
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                className="shrink-0 text-sage-500"
              />
              <span>{t(item.labelKey)}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

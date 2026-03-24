import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Building2,
  FileText,
  Plane,
  Users,
  RefreshCw,
  Calculator,
  Stamp,
  Award,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  FileText,
  Plane,
  Users,
  RefreshCw,
  Calculator,
  Stamp,
  Award,
};

interface ServicesGridProps {
  className?: string;
}

export function ServicesGrid({ className }: ServicesGridProps) {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {SERVICES.map((service) => {
        const Icon = iconMap[service.icon];
        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group relative flex flex-col rounded-2xl border border-mist bg-white p-7 transition-all duration-300 hover:border-sage-200 hover:shadow-lg hover:shadow-sage-500/5 hover:-translate-y-0.5"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sage-50 to-sage-100 transition-colors group-hover:from-sage-100 group-hover:to-sage-200">
              {Icon && (
                <Icon size={22} strokeWidth={1.5} className="text-sage-600" />
              )}
            </div>

            <h3 className="font-display text-base font-bold text-fjord-900 mb-2">
              {t(`services.${service.titleKey}`)}
            </h3>

            <p className="flex-1 text-sm leading-relaxed text-slate font-body mb-4">
              {service.description}
            </p>

            <div className="flex items-center justify-end border-t border-mist pt-4">
              <span className="text-xs font-semibold text-sage-600 font-body flex items-center gap-1">
                {t("cta.learnMore")}
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

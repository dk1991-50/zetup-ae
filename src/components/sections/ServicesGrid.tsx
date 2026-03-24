import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Building2,
  Landmark,
  Globe,
  FileText,
  Plane,
  RefreshCw,
  ShieldCheck,
  HeartPulse,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  Globe,
  FileText,
  Plane,
  RefreshCw,
  ShieldCheck,
  HeartPulse,
};

interface ServicesGridProps {
  className?: string;
}

export function ServicesGrid({ className }: ServicesGridProps) {
  const t = useTranslations();

  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link key={`/services/${service.slug}`} href={`/services/${service.slug}`} className="group">
                <Card className="h-full transition-all duration-200 group-hover:border-sage-300 group-hover:shadow-md">
                  <CardHeader>
                    {Icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-50 text-sage-600 transition-colors group-hover:bg-sage-100">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                    )}
                    <h3 className="mt-2 font-display text-base font-semibold text-fjord-900">
                      {t(service.titleKey)}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-600 font-body">
                      {service.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sage-600 transition-colors group-hover:text-sage-700 font-display">
                      {t("common.learnMore")}
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

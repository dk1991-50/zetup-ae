import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRICING_TIERS } from "@/lib/constants";

interface PricingTableProps {
  className?: string;
}

export function PricingTable({ className }: PricingTableProps) {
  const t = useTranslations();

  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-3", className)}>
      {PRICING_TIERS.map((tier) => {
        const isDark = tier.name === "enterprise";
        return (
          <div
            key={tier.name}
            className={cn(
              "relative flex flex-col rounded-2xl border p-8 transition-shadow duration-200 hover:shadow-lg",
              tier.highlighted
                ? "border-sage-400 bg-sage-50 shadow-md"
                : isDark
                  ? "border-fjord-700 bg-fjord-900 text-white"
                  : "border-mist bg-white",
            )}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 start-6 px-3 py-1 text-xs uppercase tracking-wider bg-sage-500 text-white rounded-full font-semibold">
                {t("pricing.popular")}
              </span>
            )}

            <h3
              className={cn(
                "font-display text-lg font-bold capitalize",
                isDark ? "text-white" : "text-fjord-900",
              )}
            >
              {t(`pricing.${tier.name}`)}
            </h3>

            <p
              className={cn(
                "mt-4 font-display text-4xl font-extrabold",
                isDark ? "text-white" : "text-fjord-900",
              )}
            >
              {t("pricing.fromAed")} {tier.price}
            </p>
            <p
              className={cn(
                "text-sm",
                isDark ? "text-slate-300" : "text-slate-600",
              )}
            >
              {t("pricing.perMonth")}
            </p>

            <p
              className={cn(
                "mt-2 text-sm font-body",
                isDark ? "text-slate-300" : "text-slate-600",
              )}
            >
              {tier.bestFor}
            </p>

            <hr
              className={cn("my-6", isDark ? "border-white/10" : "border-mist")}
            />

            <ul className="flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check
                    size={16}
                    strokeWidth={2}
                    className={cn(
                      "mt-0.5 shrink-0",
                      tier.highlighted
                        ? "text-sage-600"
                        : isDark
                          ? "text-sage-400"
                          : "text-sage-500",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-body",
                      isDark ? "text-slate-300" : "text-slate-600",
                    )}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className={cn(
                "mt-4 text-xs",
                isDark ? "text-slate-400" : "text-stone",
              )}
            >
              {t("pricing.additionalTransactions")}: {tier.overage}
            </p>

            <div className="mt-8">
              <Link
                href="/pro-health-check"
                className={cn(
                  "block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors",
                  tier.highlighted
                    ? "bg-sage-500 text-white hover:bg-sage-600"
                    : isDark
                      ? "border border-white/20 text-white hover:bg-white/10"
                      : "bg-fjord-900 text-white hover:bg-fjord-800",
                )}
              >
                {t("cta.getQuote")}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

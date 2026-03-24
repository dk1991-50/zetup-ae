import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { STATS } from "@/lib/constants";

interface StatsCounterProps {
  className?: string;
}

export function StatsCounter({ className }: StatsCounterProps) {
  const t = useTranslations();

  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-sage-500 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-600 font-body md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

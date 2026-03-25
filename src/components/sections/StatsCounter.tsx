import { cn } from "@/lib/utils";
import { STATS } from "@/lib/constants";

interface StatsCounterProps {
  className?: string;
}

export function StatsCounter({ className }: StatsCounterProps) {
  return (
    <section
      className={cn("relative overflow-hidden bg-fjord-900 py-20", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-fjord-950 via-fjord-900 to-fjord-950" />
      <div className="absolute top-0 start-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-sage-400/40 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 sm:mt-3 text-sm font-medium text-slate-400 font-body max-w-[200px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-sage-400/40 to-transparent" />
    </section>
  );
}

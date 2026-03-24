import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  className?: string;
}

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: horizontal */}
        <div className="hidden md:flex md:items-start md:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center text-center"
            >
              {/* Circle + line */}
              <div className="relative flex w-full items-center justify-center">
                {/* Connecting line (before) */}
                {index > 0 && (
                  <div className="absolute start-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-mist" />
                )}
                {/* Connecting line (after) */}
                {index < steps.length - 1 && (
                  <div className="absolute end-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-mist" />
                )}
                {/* Number circle */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-fjord-900 font-display text-lg font-bold text-white shadow-md">
                  {index + 1}
                </div>
              </div>
              {/* Text */}
              <h3 className="mt-4 font-display text-base font-semibold text-fjord-900">
                {step.title}
              </h3>
              <p className="mt-2 px-3 text-sm leading-relaxed text-slate-600 font-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              {/* Line + circle column */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fjord-900 font-display text-sm font-bold text-white">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-mist" />
                )}
              </div>
              {/* Text */}
              <div className="pb-8">
                <h3 className="font-display text-base font-semibold text-fjord-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

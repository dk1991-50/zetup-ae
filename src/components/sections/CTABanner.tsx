import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  description?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  className?: string;
}

export function CTABanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTABannerProps) {
  return (
    <section className={cn("bg-fjord-900 py-16", className)}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-slate-300 font-body">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {primaryCta}
            {secondaryCta}
          </div>
        )}
      </div>
    </section>
  );
}

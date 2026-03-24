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
    <section
      className={cn("relative overflow-hidden bg-fjord-900 py-24", className)}
    >
      {/* Background depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-800" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-sage-500/5 blur-[100px]" />

      {/* Top/bottom accent lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-400/30 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-6 text-lg leading-relaxed text-slate-300 font-body max-w-xl mx-auto">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {primaryCta}
            {secondaryCta}
          </div>
        )}
      </div>
    </section>
  );
}

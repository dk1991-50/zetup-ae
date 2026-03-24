import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  trustBadges?: ReactNode;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustBadges,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[85vh] items-center overflow-hidden bg-fjord-950",
        className,
      )}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-fjord-950/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-[60%] max-md:max-w-full max-md:text-center">
          <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-mist font-body">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap items-center gap-4 max-md:flex-col max-md:items-center">
              {primaryCta}
              {secondaryCta}
            </div>
          )}

          {/* Trust badges */}
          {trustBadges && <div className="mt-12">{trustBadges}</div>}
        </div>
      </div>
    </section>
  );
}

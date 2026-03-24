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
        "relative flex min-h-[90vh] items-center overflow-hidden",
        className,
      )}
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fjord-950 via-fjord-900 to-fjord-950" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 end-1/4 h-[500px] w-[500px] rounded-full bg-sage-500/10 blur-[120px]" />
      <div className="absolute bottom-0 start-1/3 h-[400px] w-[400px] rounded-full bg-aurora-500/8 blur-[100px]" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl max-md:max-w-full max-md:text-center">
          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-sage-400 animate-pulse" />
            <span className="text-sm font-medium text-sage-300 font-body tracking-wide">
              Scandinavian Transparency in Dubai
            </span>
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title.split(".").map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="text-sage-400">.</span>}
                {part}
              </span>
            ))}
          </h1>

          {subtitle && (
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300 font-body sm:text-xl">
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-12 flex flex-wrap items-center gap-4 max-md:flex-col max-md:items-center">
              {primaryCta}
              {secondaryCta}
            </div>
          )}

          {trustBadges && <div className="mt-16">{trustBadges}</div>}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-snow to-transparent" />
    </section>
  );
}

"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "./Slot";

const variantStyles = {
  primary:
    "bg-sage-500 text-white hover:bg-sage-600 focus-visible:ring-sage-400",
  secondary:
    "bg-fjord-900 text-white hover:bg-fjord-800 focus-visible:ring-fjord-400",
  outline:
    "border border-mist bg-white text-fjord-900 hover:bg-frost focus-visible:ring-fjord-400",
  ghost:
    "bg-transparent text-fjord-900 hover:bg-frost focus-visible:ring-fjord-400",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1DA851] focus-visible:ring-[#25D366]",
} as const;

const sizeStyles = {
  sm: "h-9 px-3 text-sm rounded-lg gap-1.5",
  md: "h-11 px-5 text-base rounded-lg gap-2",
  lg: "h-13 px-7 text-lg rounded-xl gap-2.5",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center font-display font-semibold transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export { Button };

import {
  forwardRef,
  cloneElement,
  isValidElement,
  type ReactNode,
  type HTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

interface SlotProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

/**
 * Minimal Slot implementation for the asChild pattern.
 * Merges parent props onto the single child element.
 */
const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, className, ...props }, ref) => {
    if (!isValidElement(children)) {
      return null;
    }

    return cloneElement(children, {
      ...props,
      ...(children.props as Record<string, unknown>),
      ref,
      className: cn(
        className,
        (children.props as Record<string, unknown>).className as
          | string
          | undefined,
      ),
    } as Record<string, unknown>);
  },
);

Slot.displayName = "Slot";
export { Slot };

"use client";

import { useState, useRef, useEffect, useId, type ReactNode } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Accordion (container) ───────────────────────────────────────────────── */

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-mist", className)}>{children}</div>
  );
}

/* ─── AccordionItem ───────────────────────────────────────────────────────── */

interface AccordionItemProps {
  trigger: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

function AccordionItem({
  trigger,
  children,
  defaultOpen = false,
  className,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0,
  );
  const id = useId();
  const triggerId = `accordion-trigger-${id}`;
  const panelId = `accordion-panel-${id}`;

  useEffect(() => {
    if (!contentRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (isOpen) {
        setHeight(contentRef.current?.scrollHeight);
      }
    });
    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={cn("py-1", className)}>
      <button
        type="button"
        id={triggerId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-4 text-start font-display font-semibold text-fjord-900 transition-colors hover:text-sage-600"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{trigger}</span>
        <span
          className="shrink-0 text-sage-500 transition-transform duration-300"
          aria-hidden="true"
        >
          {isOpen ? (
            <Minus size={20} strokeWidth={1.5} />
          ) : (
            <Plus size={20} strokeWidth={1.5} />
          )}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        style={{ height: height !== undefined ? `${height}px` : "auto" }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div ref={contentRef} className="pb-4 text-slate-600 font-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export { Accordion, AccordionItem };

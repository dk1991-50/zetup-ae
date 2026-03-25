"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchLocale: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export function MobileNav({
  isOpen,
  onClose,
  onSwitchLocale,
  triggerRef,
}: MobileNavProps) {
  const t = useTranslations();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleItem = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  // Focus management: move focus to close button on open, return on close
  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    } else {
      triggerRef?.current?.focus();
    }
  }, [isOpen, triggerRef]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !drawerRef.current) return;
    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-fjord-950/50 transition-opacity duration-300 lg:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={t("aria.openMenu")}
        onKeyDown={handleKeyDown}
        className={cn(
          "fixed inset-y-0 end-0 z-50 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-mist px-4 py-4">
            <span className="font-display text-xl font-extrabold text-fjord-900">
              ZETUP PRO
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-fjord-700 transition-colors hover:bg-frost"
              aria-label={t("aria.closeMenu")}
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const hasChildren =
                  "children" in item &&
                  item.children &&
                  item.children.length > 0;

                if (hasChildren) {
                  const isExpanded = expandedItem === item.labelKey;

                  return (
                    <li key={item.labelKey}>
                      <button
                        type="button"
                        onClick={() => toggleItem(item.labelKey)}
                        aria-expanded={isExpanded}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium font-display text-fjord-700 transition-colors hover:bg-frost"
                      >
                        {t(item.labelKey)}
                        <ChevronDown
                          size={16}
                          strokeWidth={1.5}
                          aria-hidden="true"
                          className={cn(
                            "transition-transform duration-200",
                            isExpanded && "rotate-180",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          isExpanded
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0",
                        )}
                      >
                        <ul className="ps-4 pb-2 space-y-1">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="block rounded-lg px-3 py-2 text-sm font-body text-fjord-600 transition-colors hover:bg-frost hover:text-fjord-900"
                              >
                                {t(child.labelKey)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.labelKey}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-3 text-base font-medium font-display text-fjord-700 transition-colors hover:bg-frost hover:text-fjord-900"
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer actions */}
          <div className="border-t border-mist p-4 space-y-3">
            <Button variant="whatsapp" size="md" asChild className="w-full">
              <Link href="/pro-health-check" onClick={onClose}>
                {t("nav.proHealthCheck")}
              </Link>
            </Button>

            <button
              type="button"
              onClick={() => {
                onSwitchLocale();
                onClose();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-mist px-3 py-2.5 text-sm font-medium text-fjord-700 transition-colors hover:bg-frost"
            >
              <Globe size={16} strokeWidth={1.5} aria-hidden="true" />
              <span className="font-display">EN</span>
              <span className="text-mist" aria-hidden="true">
                /
              </span>
              <span className="font-arabic">العربية</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

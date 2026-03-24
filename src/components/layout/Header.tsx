"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Globe, ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const switchLocale = () => {
    const currentLocale =
      typeof document !== "undefined" ? document.documentElement.lang : "en";
    const newLocale = currentLocale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "border-b border-mist bg-white/80 backdrop-blur-lg shadow-sm"
            : "bg-white",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-extrabold tracking-tight text-fjord-900"
          >
            ZETUP
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const hasChildren =
                "children" in item && item.children && item.children.length > 0;

              if (hasChildren) {
                return (
                  <div
                    key={item.labelKey}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.labelKey)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium font-display text-fjord-700 transition-colors hover:bg-frost hover:text-fjord-900",
                        openDropdown === item.labelKey &&
                          "bg-frost text-fjord-900",
                      )}
                    >
                      {t(item.labelKey)}
                      <ChevronDown
                        size={14}
                        strokeWidth={1.5}
                        className={cn(
                          "transition-transform duration-200",
                          openDropdown === item.labelKey && "rotate-180",
                        )}
                      />
                    </button>
                    {openDropdown === item.labelKey && (
                      <div className="absolute start-0 top-full pt-1">
                        <div className="min-w-[220px] rounded-xl border border-mist bg-white p-2 shadow-lg">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-3 py-2 text-sm font-body text-fjord-700 transition-colors hover:bg-frost hover:text-fjord-900"
                            >
                              {t(child.labelKey)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium font-display text-fjord-700 transition-colors hover:bg-frost hover:text-fjord-900",
                    pathname === item.href && "bg-frost text-fjord-900",
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          {/* Right side: locale switcher + CTA + mobile hamburger */}
          <div className="flex items-center gap-2">
            {/* Locale switcher */}
            <button
              type="button"
              onClick={switchLocale}
              className="hidden items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-fjord-700 transition-colors hover:bg-frost sm:flex"
              aria-label="Switch language"
            >
              <Globe size={16} strokeWidth={1.5} />
              <span className="font-display">EN</span>
              <span className="text-mist">/</span>
              <span className="font-arabic">العربية</span>
            </button>

            {/* CTA */}
            <Link
              href="/pro-health-check"
              className="hidden sm:inline-flex px-4 py-2 bg-sage-500 text-white text-sm font-semibold rounded-lg hover:bg-sage-600 transition-colors"
            >
              {t("nav.proHealthCheck")}
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center rounded-lg p-2 text-fjord-700 transition-colors hover:bg-frost lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onSwitchLocale={switchLocale}
      />
    </>
  );
}

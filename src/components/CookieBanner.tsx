"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

const STORAGE_KEY = "zetup_consent";

type SavedConsent = { accepted: boolean; at: string };

function readConsent(): SavedConsent | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function updateConsent(accepted: boolean) {
  const state = accepted ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  const payload: SavedConsent = { accepted, at: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {}
}

export function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  const accept = () => {
    updateConsent(true);
    setVisible(false);
  };
  const reject = () => {
    updateConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={t("aria")}
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-mist bg-white p-5 shadow-2xl shadow-fjord-900/10 md:inset-x-auto md:start-6 md:bottom-6"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h2 className="mb-1 font-display text-sm font-semibold text-fjord-900">
            {t("title")}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 font-body">
            {t("body")}
          </p>
        </div>
        <button
          onClick={reject}
          aria-label={t("close")}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-frost hover:text-fjord-900"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          onClick={reject}
          className="rounded-lg border border-mist px-4 py-2 text-sm font-semibold text-fjord-700 transition-colors hover:bg-frost"
        >
          {t("reject")}
        </button>
        <button
          onClick={accept}
          className="rounded-lg bg-sage-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sage-600"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ExternalLink, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { COMPANY, NAV_SERVICES, NAV_GUIDES } from "@/lib/constants";

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fjord-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/icons/logo.png"
                alt="ZETUP"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-300 font-body">
              {t("footer.description")}
            </p>
            <a
              href={COMPANY.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider font-display text-sage-400">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2.5">
              {NAV_SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white font-body"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider font-display text-sage-400">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2.5">
              {NAV_GUIDES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white font-body"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-slate-300 transition-colors hover:text-white font-body"
                >
                  {t("footer.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider font-display text-sage-400">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-sage-400"
                />
                <span className="text-sm text-slate-300 font-body">
                  Business Bay, Dubai, UAE
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white font-body"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-sage-400"
                  />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white font-body"
                >
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-sage-400"
                  />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white font-body"
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#25D366]"
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-slate-400 font-body">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-400 transition-colors hover:text-white font-body"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-400 transition-colors hover:text-white font-body"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

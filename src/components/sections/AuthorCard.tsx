import Image from "next/image";
import { Link } from "@/i18n/routing";
import { SITE_CONFIG, TEAM, COMPANY } from "@/lib/constants";

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface AuthorCardProps {
  /** Display name of the author from the article frontmatter. */
  authorName: string;
  /** Locale for translation (ar/en). */
  locale: string;
  /** Optional published date for "Reviewed by" framing. */
  date?: string;
}

/**
 * Author bio card for blog/guide pages.
 *
 * Looks up the author by name in the TEAM constant. If found, renders a
 * full bio with photo + LinkedIn link. If not found (e.g., generic
 * "ZETUP Team"), renders a brand card linking to /about.
 *
 * Strengthens E-E-A-T (expertise, experience, authoritativeness,
 * trustworthiness) signals that Google + AI engines weigh heavily.
 */
export function AuthorCard({ authorName, locale, date }: AuthorCardProps) {
  const isAr = locale === "ar";
  const teamMember = TEAM.find((t) => t.name === authorName);

  if (teamMember) {
    const founderKey =
      teamMember.name === "Dennis Kristensen" ? "dennis" : "edina";
    const founder = SITE_CONFIG.founders[founderKey];

    return (
      <aside className="my-16 p-6 sm:p-8 rounded-2xl border border-mist bg-frost/60">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-700 mb-5 font-display">
          {isAr ? "الكاتب" : "About the author"}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          <Image
            src={teamMember.image}
            alt={teamMember.name}
            width={120}
            height={120}
            className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-2xl object-cover shadow-md self-start"
            sizes="96px"
          />
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-fjord-900 mb-1">
              {teamMember.name}
            </h3>
            <p className="text-sm font-semibold text-sage-700 font-display mb-3">
              {teamMember.role} ·{" "}
              <Link
                href="/about"
                className="text-sage-600 hover:text-sage-700"
              >
                {COMPANY.legalName}
              </Link>
            </p>
            <p className="text-sm leading-relaxed text-graphite font-body mb-4">
              {teamMember.bio}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {founder.linkedin ? (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-700 hover:text-sage-800 font-display"
                >
                  <LinkedInIcon size={14} />
                  LinkedIn
                </a>
              ) : null}
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-sage-700 font-body"
              >
                {isAr
                  ? "صفحة الشركة على لينكدإن"
                  : "Company on LinkedIn"}
              </a>
              {date && (
                <span className="text-sm text-stone font-body">
                  ·{" "}
                  {isAr ? "نُشر بتاريخ" : "Published"}{" "}
                  {new Date(date).toLocaleDateString(
                    isAr ? "ar-AE" : "en-GB",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
      </aside>
    );
  }

  // Fallback: generic team byline
  return (
    <aside className="my-16 p-6 sm:p-8 rounded-2xl border border-mist bg-frost/60">
      <p className="text-xs font-semibold uppercase tracking-widest text-sage-700 mb-3 font-display">
        {isAr ? "الكاتب" : "About the authors"}
      </p>
      <h3 className="font-display text-lg font-bold text-fjord-900 mb-2">
        {authorName}
      </h3>
      <p className="text-sm leading-relaxed text-graphite font-body mb-3">
        {isAr
          ? "مكتوب من قبل فريق زيتب برو — ممارسي PRO الذين يقدمون الأوراق إلى وزارة الموارد البشرية، الإدارة العامة للإقامة، دائرة الاقتصاد، وهيئة الضرائب الاتحادية يوميًا. كل ما نشاركه نتعلمه من عمل العملاء الفعلي."
          : "Written by the ZETUP PRO team — practising PROs who file paperwork to MOHRE, GDRFA, DET, and the FTA every day. Everything we share is learned from actual client work."}
      </p>
      <Link
        href="/about"
        className="text-sm font-semibold text-sage-700 hover:text-sage-800 font-display"
      >
        {isAr ? "تعرف على الفريق →" : "Meet the team →"}
      </Link>
    </aside>
  );
}

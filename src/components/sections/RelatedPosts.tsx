import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

interface RelatedItem {
  href: string;
  title: string;
  description?: string;
  badge?: string;
}

interface RelatedPostsProps {
  /** Section heading, e.g. "Related guides", "More from the glossary" */
  heading: string;
  /** Items to show */
  items: RelatedItem[];
  /** Locale (used for arrow direction in RTL) */
  locale?: string;
  /** Optional CTA at the bottom — e.g. "All guides →" */
  seeAllLabel?: string;
  /** Optional href for the see-all CTA */
  seeAllHref?: string;
}

/**
 * Generic "Related X" component used across blog, guide, glossary,
 * service, and location pages. Boosts internal linking — each Related
 * card is a strong topical link Google + AI engines weight highly.
 */
export function RelatedPosts({
  heading,
  items,
  locale = "en",
  seeAllLabel,
  seeAllHref,
}: RelatedPostsProps) {
  if (items.length === 0) return null;

  return (
    <section className="my-16">
      <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-fjord-900">
          {heading}
        </h2>
        {seeAllLabel && seeAllHref && (
          <Link
            href={seeAllHref}
            className="text-sm font-semibold text-sage-600 hover:text-sage-700 font-display inline-flex items-center gap-1"
          >
            {seeAllLabel}
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="rtl:rotate-180"
            />
          </Link>
        )}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-start justify-between gap-3 rounded-xl border border-mist bg-white p-5 transition-all hover:border-sage-300 hover:shadow-md"
          >
            <div className="flex-1">
              {item.badge && (
                <p className="text-xs uppercase tracking-wider text-stone font-display mb-1">
                  {item.badge}
                </p>
              )}
              <p className="font-display font-semibold text-fjord-900 group-hover:text-sage-700 transition-colors">
                {item.title}
              </p>
              {item.description && (
                <p className="text-sm text-slate mt-1 line-clamp-2 font-body">
                  {item.description}
                </p>
              )}
            </div>
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="shrink-0 mt-0.5 text-sage-500 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

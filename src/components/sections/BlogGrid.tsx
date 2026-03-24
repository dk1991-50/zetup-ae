import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readingTime: string;
  excerpt: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  className?: string;
}

export function BlogGrid({ posts, className }: BlogGridProps) {
  const t = useTranslations();

  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full transition-all duration-200 group-hover:border-sage-300 group-hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-body">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} strokeWidth={1.5} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} strokeWidth={1.5} />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-fjord-900 leading-snug group-hover:text-sage-700 transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-600 font-body line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sage-600 transition-colors group-hover:text-sage-700 font-display">
                    {t("common.readMore")}
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                    />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

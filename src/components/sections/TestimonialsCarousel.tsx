import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/Card";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  logo?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialsCarousel({
  testimonials,
  className,
}: TestimonialsCarouselProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6">
                {/* Quote */}
                <blockquote className="text-sm italic leading-relaxed text-slate-600 font-body">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-6 border-t border-mist pt-4 flex items-center gap-3">
                  {testimonial.logo && (
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      loading="lazy"
                      className="h-8 w-8 rounded object-contain shrink-0"
                    />
                  )}
                  <div>
                    <p className="font-display text-sm font-semibold text-fjord-900">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate-500 font-body">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

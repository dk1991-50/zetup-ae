import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQSection({ items, className }: FAQSectionProps) {
  const t = useTranslations();

  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-fjord-900 md:text-4xl">
          {t("sections.faqTitle")}
        </h2>
        <Accordion>
          {items.map((item, index) => (
            <AccordionItem key={index} trigger={item.question}>
              <p className="leading-relaxed">{item.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

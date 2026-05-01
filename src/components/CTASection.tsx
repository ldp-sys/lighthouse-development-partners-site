import { ArrowRight } from "lucide-react";
import type { NavItem } from "@/data/site";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

type CTASectionProps = {
  title: string;
  description: string;
  ctas: NavItem[];
};

export function CTASection({ title, description, ctas }: CTASectionProps) {
  return (
    <Section className="bg-harbor text-white">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/90">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {ctas.map((cta, index) => (
            <Button
              href={cta.href}
              key={cta.href}
              variant={index === 0 ? "primary" : "light"}
            >
              {cta.label}
              {index === 0 ? <ArrowRight aria-hidden className="h-4 w-4" /> : null}
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}

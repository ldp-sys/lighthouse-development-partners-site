import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import type { NavItem, Stat } from "@/data/site";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { RenderedSvgFrame } from "@/components/RenderedSvgFrame";
import { StatCard } from "@/components/StatCard";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctas?: NavItem[];
  image?: string;
  imageAlt?: string;
  stats?: Stat[];
  children?: ReactNode;
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  ctas,
  image,
  imageAlt,
  stats,
  children,
  className
}: HeroProps) {
  const hasVisual = Boolean(image || stats?.length || children);

  return (
    <section className={cn("relative overflow-hidden bg-harbor text-white", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,154,86,0.22),transparent_34%),linear-gradient(115deg,rgba(7,23,97,0.34),transparent_46%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div className={cn("max-w-3xl", !hasVisual && "md:col-span-2")}>
          <Eyebrow className="text-gold">{eyebrow}</Eyebrow>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            {description}
          </p>
          {ctas?.length ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
          ) : null}
        </div>
        {hasVisual ? (
          <div className="self-end">
            {image && imageAlt ? (
              <RenderedSvgFrame alt={imageAlt} priority src={image} />
            ) : null}
            {stats?.length ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <StatCard className="bg-white" key={`${stat.value}-${stat.label}`} stat={stat} />
                ))}
              </div>
            ) : null}
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

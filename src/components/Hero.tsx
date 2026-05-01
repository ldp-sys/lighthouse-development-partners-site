import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import type { NavItem, ProjectGalleryItem, Stat } from "@/data/site";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { HeroRenderingCarousel } from "@/components/HeroRenderingCarousel";
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
  carouselItems?: ProjectGalleryItem[];
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
  carouselItems,
  stats,
  children,
  className
}: HeroProps) {
  const hasCarousel = Boolean(carouselItems?.length);
  const hasStats = Boolean(stats?.length);
  const hasVisual = Boolean(hasCarousel || image || hasStats || children);
  const hasCtas = Boolean(ctas?.length);
  const isLeanHero = hasVisual && !hasStats && !hasCtas;

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
      <div
        className={cn(
          "relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-8",
          isLeanHero ? "py-7 sm:py-8 lg:py-9" : "py-10 sm:py-12 lg:py-14"
        )}
      >
        <div className={cn("max-w-3xl", !hasVisual && "md:col-span-2")}>
          <Eyebrow tone="inverse">{eyebrow}</Eyebrow>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
            {description}
          </p>
          {ctas?.length ? (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
          <div>
            {hasCarousel && carouselItems ? (
              <HeroRenderingCarousel
                aspectClassName={isLeanHero ? "aspect-[16/9]" : undefined}
                items={carouselItems}
              />
            ) : image && imageAlt ? (
              <RenderedSvgFrame alt={imageAlt} priority src={image} />
            ) : null}
            {hasStats && stats ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <StatCard
                    className="bg-white"
                    compact
                    key={`${stat.value}-${stat.label}`}
                    stat={stat}
                  />
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

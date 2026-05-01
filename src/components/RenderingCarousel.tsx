"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProjectGalleryItem } from "@/data/site";
import { assetPath, cn } from "@/lib/utils";

type RenderingCarouselProps = {
  items: ProjectGalleryItem[];
  className?: string;
};

export function RenderingCarousel({ items, className }: RenderingCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = items[activeIndex];

  useEffect(() => {
    if (
      isPaused ||
      items.length <= 1 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index === items.length - 1 ? 0 : index + 1));
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, items.length]);

  if (!active) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((index) => (index === 0 ? items.length - 1 : index - 1));
  };

  const goToNext = () => {
    setActiveIndex((index) => (index === items.length - 1 ? 0 : index + 1));
  };

  return (
    <div className={cn("rounded-card border border-border bg-white shadow-soft", className)}>
      <figure>
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-card bg-sand">
          <Image
            alt={active.alt}
            className="h-full w-full object-cover"
            fill
            sizes="(min-width: 1024px) 72rem, 100vw"
            src={assetPath(active.image)}
          />
          {items.length > 1 ? (
            <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
              <button
                aria-label="Show previous view"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-harbor text-white shadow-soft transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={goToPrevious}
                type="button"
              >
                <ChevronLeft aria-hidden className="h-5 w-5" />
              </button>
              <button
                aria-label="Show next view"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-harbor text-white shadow-soft transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={goToNext}
                type="button"
              >
                <ChevronRight aria-hidden className="h-5 w-5" />
              </button>
            </div>
          ) : null}
        </div>
        <figcaption className="flex flex-col justify-between gap-2 border-t border-border px-5 py-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-harbor">
              View {activeIndex + 1} of {items.length}
            </p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-navy">
              {active.title}
            </h3>
          </div>
          {items.length > 1 ? (
            <div className="flex items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <button
                    aria-label={`Show ${item.title}`}
                    aria-pressed={index === activeIndex}
                    className={cn(
                      "h-2.5 w-9 rounded-full border border-border bg-muted transition",
                      index === activeIndex && "border-gold bg-gold"
                    )}
                    key={item.image}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  />
                ))}
              </div>
              <button
                aria-label={isPaused ? "Resume rendering slideshow" : "Pause rendering slideshow"}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-harbor transition hover:border-gold hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={() => setIsPaused((paused) => !paused)}
                type="button"
              >
                {isPaused ? (
                  <Play aria-hidden className="h-4 w-4" />
                ) : (
                  <Pause aria-hidden className="h-4 w-4" />
                )}
              </button>
            </div>
          ) : null}
        </figcaption>
      </figure>
      {items.length > 1 ? (
        <div className="grid gap-2 border-t border-border bg-warm p-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => (
            <button
              aria-label={`Select ${item.title}`}
              className={cn(
                "group overflow-hidden rounded-card border bg-white text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                index === activeIndex ? "border-gold" : "border-border hover:border-teal"
              )}
              key={item.image}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span className="relative block aspect-[16/10]">
                <Image
                  alt=""
                  className="h-full w-full object-cover"
                  fill
                  sizes="(min-width: 640px) 18rem, 40vw"
                  src={assetPath(item.image)}
                />
              </span>
              <span className="block px-3 py-2 text-xs font-semibold text-charcoal">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

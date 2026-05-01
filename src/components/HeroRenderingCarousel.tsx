"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { ProjectGalleryItem } from "@/data/site";
import { assetPath, cn } from "@/lib/utils";

type HeroRenderingCarouselProps = {
  aspectClassName?: string;
  items: ProjectGalleryItem[];
};

const SLIDE_INTERVAL_MS = 5500;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function HeroRenderingCarousel({
  aspectClassName = "aspect-[16/10]",
  items
}: HeroRenderingCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [motionOverride, setMotionOverride] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );
  const active = items[activeIndex];
  const hasMultipleItems = items.length > 1;
  const reducedMotionPaused = prefersReducedMotion && !motionOverride;
  const slideshowPaused = isPaused || reducedMotionPaused;

  useEffect(() => {
    if (!hasMultipleItems || slideshowPaused || interactionPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [hasMultipleItems, interactionPaused, items.length, slideshowPaused]);

  if (!active) {
    return null;
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? items.length - 1 : index - 1));
    setIsPaused(true);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % items.length);
    setIsPaused(true);
  };

  const toggleSlideshow = () => {
    if (slideshowPaused) {
      setMotionOverride(true);
      setIsPaused(false);
      return;
    }

    setIsPaused(true);
  };

  return (
    <figure
      className="group overflow-hidden rounded-card border border-border bg-sand shadow-soft"
      onBlur={() => setInteractionPaused(false)}
      onFocus={() => setInteractionPaused(true)}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
    >
      <div className={cn("relative w-full", aspectClassName)}>
        <Image
          alt={active.alt}
          className="h-full w-full object-cover"
          fill
          key={active.image}
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={assetPath(active.image)}
        />
        {hasMultipleItems ? (
          <>
            <div className="absolute inset-x-3 top-1/2 hidden -translate-y-1/2 justify-between opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 sm:flex">
              <button
                aria-label="Show previous rendering"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-harbor/90 text-white shadow-soft transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={showPrevious}
                type="button"
              >
                <ChevronLeft aria-hidden className="h-5 w-5" />
              </button>
              <button
                aria-label="Show next rendering"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-harbor/90 text-white shadow-soft transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={showNext}
                type="button"
              >
                <ChevronRight aria-hidden className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {items.map((item, index) => (
                  <button
                    aria-label={`Show ${item.title}`}
                    aria-pressed={index === activeIndex}
                    className={cn(
                      "h-2.5 rounded-full border border-white/70 bg-white/55 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                      index === activeIndex
                        ? "w-8 bg-gold"
                        : "w-2.5 hover:bg-white"
                    )}
                    key={item.image}
                    onClick={() => goToSlide(index)}
                    type="button"
                  />
                ))}
              </div>
              <button
                aria-label={slideshowPaused ? "Play rendering slideshow" : "Pause rendering slideshow"}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/55 bg-harbor/90 text-white shadow-soft transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={toggleSlideshow}
                type="button"
              >
                {slideshowPaused ? (
                  <Play aria-hidden className="h-4 w-4" />
                ) : (
                  <Pause aria-hidden className="h-4 w-4" />
                )}
              </button>
            </div>
          </>
        ) : null}
      </div>
      <figcaption className="sr-only">{active.title}</figcaption>
    </figure>
  );
}

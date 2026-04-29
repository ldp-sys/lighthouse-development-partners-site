import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/Button";
import { MobileNav } from "@/components/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-warm/92 backdrop-blur">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
        href="#main-content"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Lighthouse Development Partners home"
          className="inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          href="/"
        >
          <Image
            alt=""
            className="h-11 w-11"
            height="44"
            src={site.company.mark}
            width="44"
          />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="font-serif text-xl font-semibold leading-none text-navy">
              Lighthouse
            </span>
            <span className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate">
              Development Partners
            </span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              className="rounded-card px-3 py-2 text-sm font-semibold text-harbor hover:bg-sand hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/investor-portal" variant="secondary">
            Investor Portal
          </Button>
        </div>
        <MobileNav navItems={site.nav} />
      </div>
    </header>
  );
}

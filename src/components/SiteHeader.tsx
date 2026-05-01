import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/Button";
import { MobileNav } from "@/components/MobileNav";
import { assetPath } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="relative sticky top-0 z-40 border-b border-white/10 bg-harbor text-white shadow-[0_12px_36px_rgba(7,23,97,0.12)] backdrop-blur">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.08),transparent_34%,rgba(183,154,86,0.14))]"
      />
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
        href="#main-content"
      >
        Skip to content
      </a>
      <div className="relative z-10 mx-auto flex h-28 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Lighthouse Development Partners home"
          className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          href="/"
        >
          <Image
            alt=""
            className="h-auto w-[170px] max-w-[48vw] sm:w-[190px] xl:w-[210px]"
            height={4063}
            priority
            src={assetPath(site.company.logo)}
            width={7627}
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              className="rounded-card px-3 py-2 text-sm font-semibold text-white/92 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/investor-portal" variant="light">
            Investor Portal
          </Button>
        </div>
        <MobileNav navItems={site.nav} />
      </div>
    </header>
  );
}

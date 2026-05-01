import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { assetPath } from "@/lib/utils";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const primaryLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" }
  ];
  const legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" }
  ];

  return (
    <footer className="border-t border-white/10 bg-harbor text-white">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,154,86,0.24),transparent_34%),linear-gradient(145deg,rgba(7,23,97,0.42),transparent_46%)]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:px-6 lg:grid-cols-[1.25fr_auto_0.95fr] lg:items-center lg:px-8">
          <Link
            aria-label="Lighthouse Development Partners home"
            className="flex max-w-xl items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            href="/"
          >
            <Image
              alt=""
              className="h-auto w-12 shrink-0 sm:w-14"
              height={3709}
              src={assetPath(site.company.markLight)}
              width={2743}
            />
            <div>
              <h2 className="font-serif text-xl font-semibold leading-tight text-white sm:text-2xl">
                Lighthouse Development Partners
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/90">
                {site.company.positioning}
              </p>
            </div>
          </Link>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-center"
          >
            {primaryLinks.map((link) => (
              <Link
                className="text-sm font-semibold text-white/92 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 text-sm lg:items-end lg:text-right">
            <address className="not-italic leading-6 text-white/90">
              {site.company.address.street}
              <br />
              {site.company.address.city}, {site.company.address.region}{" "}
              {site.company.address.postalCode}
            </address>
            <Link
              className="inline-flex w-fit items-center justify-center rounded-card border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              href="/investor-portal"
            >
              Investor Portal
            </Link>
          </div>
        </div>
        <div className="relative border-t border-white/12">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-xs leading-5 text-white/82 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-center lg:px-8">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span>Equal Housing Opportunity.</span>
              {legalLinks.map((link) => (
                <Link
                  className="text-white/90 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
              <span>&copy; {year} Lighthouse Development Partners.</span>
            </div>
            <p className="lg:text-right">
              This website is for informational purposes only and does not
              constitute an offer to sell or a solicitation to purchase
              securities, investment products, or advisory services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

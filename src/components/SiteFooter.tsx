import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/Button";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Link
            aria-label="Lighthouse Development Partners home"
            className="inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            href="/"
          >
            <Image
              alt=""
              className="h-12 w-12"
              height="48"
              src={site.company.mark}
              width="48"
            />
            <span className="font-serif text-2xl font-semibold text-white">
              Lighthouse
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/76">
            {site.company.positioning} Strategic development for affordable
            housing, hospitality, and mixed-use communities.
          </p>
          <address className="mt-5 not-italic text-sm leading-7 text-white/76">
            {site.company.address.street}
            <br />
            {site.company.address.city}, {site.company.address.region}{" "}
            {site.company.address.postalCode}
          </address>
          <div className="mt-6">
            <Button href="/investor-portal" variant="light">
              Investor Portal
            </Button>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
                {column.title}
              </h2>
              <ul className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-sm text-white/78 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 text-xs leading-6 text-white/65 sm:px-6 lg:px-8">
          <p>Equal Housing Opportunity.</p>
          <p>
            This website is for informational purposes only and does not
            constitute an offer to sell or a solicitation to purchase securities,
            investment products, or advisory services.
          </p>
          <p>&copy; {year} Lighthouse Development Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

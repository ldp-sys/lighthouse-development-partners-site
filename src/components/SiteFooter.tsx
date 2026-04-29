import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/Button";
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
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:items-start lg:px-8">
          <Link
            aria-label="Lighthouse Development Partners home"
            className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            href="/"
          >
            <Image
              alt=""
              className="h-auto w-16"
              height={1230}
              src={assetPath(site.company.markLight)}
              width={900}
            />
          </Link>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white">
              Lighthouse Development Partners
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/78">
              {site.company.positioning}
            </p>
            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-wrap gap-x-5 gap-y-3"
            >
              {primaryLinks.map((link) => (
                <Link
                  className="text-sm font-semibold text-white/82 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="lg:justify-self-end">
            <address className="not-italic text-sm leading-7 text-white/78">
              {site.company.address.street}
              <br />
              {site.company.address.city}, {site.company.address.region}{" "}
              {site.company.address.postalCode}
            </address>
            <div className="mt-5">
              <Button href="/investor-portal" variant="light">
                Investor Portal
              </Button>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/12">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 text-xs leading-6 text-white/68 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <span>Equal Housing Opportunity.</span>
              {legalLinks.map((link) => (
                <Link
                  className="text-white/76 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p>
              This website is for informational purposes only and does not
              constitute an offer to sell or a solicitation to purchase
              securities, investment products, or advisory services.
            </p>
            <p>
              &copy; {year} Lighthouse Development Partners. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { site } from "@/data/site";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { absoluteUrl, assetPath } from "@/lib/utils";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700"]
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.company.domain),
  title: {
    default: site.seo.homeTitle,
    template: site.seo.defaultTitleFormat
  },
  description: site.seo.homeDescription,
  icons: {
    icon: assetPath(site.company.mark)
  },
  openGraph: {
    title: site.seo.homeTitle,
    description: site.seo.homeDescription,
    url: site.company.domain,
    siteName: site.company.name,
    images: [
      {
        url: absoluteUrl(site.seo.ogImage, site.company.domain),
        width: 1200,
        height: 630,
        alt: `${site.company.name} website preview`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.homeTitle,
    description: site.seo.homeDescription,
    images: [absoluteUrl(site.seo.ogImage, site.company.domain)]
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.company.name,
  alternateName: site.company.shortName,
  url: site.company.domain,
  logo: absoluteUrl(site.company.logo, site.company.domain),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.company.address.street,
    addressLocality: site.company.address.city,
    addressRegion: site.company.address.region,
    postalCode: site.company.address.postalCode,
    addressCountry: site.company.address.country
  },
  sameAs: site.company.linkedInUrl ? [site.company.linkedInUrl] : undefined
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.company.name,
  url: site.company.domain
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={`${serif.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd])
          }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}

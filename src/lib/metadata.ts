import type { Metadata } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image = site.seo.ogImage
}: MetadataOptions): Metadata {
  const canonical = absoluteUrl(path, site.company.domain);

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.company.name,
      images: [
        {
          url: absoluteUrl(image, site.company.domain),
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
      title,
      description,
      images: [absoluteUrl(image, site.company.domain)]
    }
  };
}

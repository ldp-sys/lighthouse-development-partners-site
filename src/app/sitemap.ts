import type { MetadataRoute } from "next";
import { routes, site } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route, site.company.domain),
    lastModified: new Date("2026-04-29"),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7
  }));
}

import type { Metadata } from "next";
import {
  Baby,
  BriefcaseBusiness,
  CircleDot,
  Clapperboard,
  CookingPot,
  Dog,
  Dumbbell,
  House,
  Layers3,
  PanelsTopLeft,
  Sparkles,
  Users,
  Waves,
  type LucideIcon
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { ImageFrame } from "@/components/ImageFrame";
import { RenderingCarousel } from "@/components/RenderingCarousel";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const project = site.projects[0];

const unitFeatureIcons: Record<string, LucideIcon> = {
  Balconies: PanelsTopLeft,
  "Stainless steel appliances": CookingPot,
  "Granite countertops": Sparkles,
  "Luxury vinyl plank floors": Layers3
};

const amenityIcons: Record<string, LucideIcon> = {
  "6,800-square-foot clubhouse": House,
  "On-site management and maintenance staff": Users,
  "Business and co-working stations": BriefcaseBusiness,
  "Fitness center": Dumbbell,
  "Community and media room": Clapperboard,
  "Pool and grill area": Waves,
  "Pickleball court": CircleDot,
  "Dog park": Dog,
  Playground: Baby
};

export const metadata: Metadata = pageMetadata({
  title: "Reserve at Eastwood",
  description:
    "Reserve at Eastwood is a 288-home affordable multifamily community near Ortiz Avenue and Hanson Street in Fort Myers, Florida.",
  path: "/projects/reserve-at-eastwood",
  image: project.image
});

export default function ReserveAtEastwoodPage() {
  return (
    <>
      <Hero
        carouselItems={project.gallery}
        description={project.heroDescription ?? project.summary}
        eyebrow={project.location}
        title={project.name}
      />

      <Section>
        <Breadcrumbs
          items={[
            { label: "Projects", href: "/projects" },
            { label: project.name, href: project.href }
          ]}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {project.facts.map((fact) => (
            <StatCard key={fact.label} stat={fact} />
          ))}
        </div>
      </Section>

      <Section className="bg-sand">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Project Narrative</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {project.narrativeTitle ?? project.name}
            </h2>
          </div>
          <p className="text-lg leading-9 text-slate">{project.description}</p>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Eyebrow>Project Views</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {project.viewsTitle ?? "Project views"}
          </h2>
        </div>
        <RenderingCarousel items={project.gallery} />
      </Section>

      <Section className="bg-sand">
        <h2 className="sr-only">Reserve at Eastwood location map</h2>
        {project.mapImage && project.mapAlt ? (
          <ImageFrame alt={project.mapAlt} src={project.mapImage} />
        ) : null}
      </Section>

      <Section className="bg-warm">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Unit Features</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Durable finishes and everyday usability.
            </h2>
            <ul className="mt-6 grid gap-3">
              {project.unitFeatures.map((feature) => {
                const Icon = unitFeatureIcons[feature] ?? CircleDot;

                return (
                  <li
                    className="flex items-center gap-3 rounded-card border border-border bg-white p-4 text-sm font-semibold text-charcoal shadow-line"
                    key={feature}
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-harbor">
                      <Icon aria-hidden className="h-4 w-4" />
                    </span>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <Eyebrow>Amenities</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Resident-focused community amenities.
            </h2>
            <ul className="mt-6 grid gap-3">
              {project.amenities.map((amenity) => {
                const Icon = amenityIcons[amenity] ?? CircleDot;

                return (
                  <li
                    className="flex items-center gap-3 rounded-card border border-border bg-white p-4 text-sm font-semibold text-charcoal shadow-line"
                    key={amenity}
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-harbor">
                      <Icon aria-hidden className="h-4 w-4" />
                    </span>
                    {amenity}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        ctas={[{ label: "Contact Lighthouse", href: "/contact?inquiry=Land%20opportunity" }]}
        description="Bring a site, public priority, capital question, or delivery challenge to the Lighthouse team."
        title="Discuss a partnership opportunity."
      />
    </>
  );
}

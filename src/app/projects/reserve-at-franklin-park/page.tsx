import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  CircleDot,
  Dumbbell,
  Fan,
  HandCoins,
  HeartPulse,
  House,
  Lamp,
  LandPlot,
  Layers3,
  Lightbulb,
  PackageCheck,
  PanelsTopLeft,
  Sparkles,
  Users,
  WashingMachine,
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

const project = site.projects.find(
  (item) => item.slug === "reserve-at-franklin-park"
)!;

const unitFeatureIcons: Record<string, LucideIcon> = {
  "Granite countertops": Sparkles,
  "Modern wood cabinetry": PanelsTopLeft,
  "Luxury vinyl plank flooring": Layers3,
  "Recessed LED lighting": Lightbulb,
  "Ceiling fans": Fan,
  "Energy Star full-size appliances": Lamp,
  "In-unit washer/dryers": WashingMachine
};

const amenityIcons: Record<string, LucideIcon> = {
  "Detached clubhouse": House,
  "On-site management and maintenance offices": Users,
  Clubroom: House,
  "Business center": BriefcaseBusiness,
  "Fitness center": Dumbbell,
  "Secure parcel lockers": PackageCheck,
  "Basketball court": CircleDot,
  "Playground and separate tot-lot": LandPlot,
  "Covered patio with grilling": House
};

const residentServiceIcons: Record<string, LucideIcon> = {
  "Employment assistance": BriefcaseBusiness,
  "Financial literacy": HandCoins,
  "Health and wellness programming": HeartPulse,
  "Coordination with local partners": Users
};

export const metadata: Metadata = pageMetadata({
  title: "Reserve at Franklin Park",
  description:
    "Reserve at Franklin Park is a planned 96-unit affordable housing community in Fort Myers' Dunbar neighborhood.",
  path: "/projects/reserve-at-franklin-park",
  image: project.image
});

export default function ReserveAtFranklinParkPage() {
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
        <h2 className="sr-only">Reserve at Franklin Park location map</h2>
        {project.mapImage && project.mapAlt ? (
          <ImageFrame alt={project.mapAlt} src={project.mapImage} />
        ) : null}
      </Section>

      <Section className="bg-warm">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Eyebrow>Unit Program</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Larger homes for family households.
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
              Community amenities.
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
          <div>
            <Eyebrow>Resident Services</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Planned support services.
            </h2>
            <ul className="mt-6 grid gap-3">
              {project.residentServices?.map((service) => {
                const Icon = residentServiceIcons[service] ?? CircleDot;

                return (
                  <li
                    className="flex items-center gap-3 rounded-card border border-border bg-white p-4 text-sm font-semibold text-charcoal shadow-line"
                    key={service}
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-harbor">
                      <Icon aria-hidden className="h-4 w-4" />
                    </span>
                    {service}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        ctas={[
          { label: "Contact Lighthouse", href: "/contact?inquiry=Land%20opportunity" },
          { label: "View Portfolio", href: "/projects" }
        ]}
        description="Bring a site, public priority, capital question, or delivery challenge to the Lighthouse team."
        title="Discuss a partnership opportunity."
      />
    </>
  );
}

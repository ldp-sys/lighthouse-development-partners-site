import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
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
        description="96 affordable homes planned for households at or below 70% AMI in Fort Myers' Dunbar neighborhood."
        eyebrow={project.location}
        image={project.image}
        imageAlt={project.imageAlt}
        stats={project.stats}
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
              Family-sized affordable housing in the Dunbar neighborhood.
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-9 text-slate">
            <p>{project.description}</p>
            <p>
              The plan replaces a long-standing blighted use with new housing,
              a clubhouse, resident amenities, and a program intended to support
              household stability. Company materials identify financial closing
              as targeted for Q2 2026, with construction activity to follow.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Eyebrow>Project Views</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Reserve at Franklin Park.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate">
            Main entry, community edge, courtyard, clubhouse, and arrival views.
          </p>
        </div>
        <RenderingCarousel items={project.gallery} />
      </Section>

      <Section className="bg-sand">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow>Location</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Dunbar and MLK redevelopment context.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Company materials locate Reserve at Franklin Park within the
              Dunbar community of Fort Myers, including the MLK Redevelopment
              Area and the Fort Myers / Lee County Enterprise Zone.
            </p>
          </div>
          {project.mapImage && project.mapAlt ? (
            <ImageFrame alt={project.mapAlt} src={project.mapImage} />
          ) : null}
        </div>
      </Section>

      <Section className="bg-warm">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Eyebrow>Unit Program</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Larger homes for family households.
            </h2>
            <ul className="mt-6 grid gap-3">
              {project.unitFeatures.map((feature) => (
                <li
                  className="flex items-center gap-3 rounded-card border border-border bg-white p-4 text-sm font-semibold text-charcoal shadow-line"
                  key={feature}
                >
                  <ArrowRight aria-hidden className="h-4 w-4 text-teal" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Amenities</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Community amenities.
            </h2>
            <ul className="mt-6 grid gap-3">
              {project.amenities.map((amenity) => (
                <li
                  className="rounded-card border border-border bg-white p-4 text-sm font-semibold text-charcoal shadow-line"
                  key={amenity}
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Resident Services</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Planned support services.
            </h2>
            <ul className="mt-6 grid gap-3">
              {project.residentServices?.map((service) => (
                <li
                  className="rounded-card border border-border bg-white p-4 text-sm font-semibold text-charcoal shadow-line"
                  key={service}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-navy text-white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow className="text-gold">Sustainability</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Planned to NGBS specifications.
            </h2>
          </div>
          <p className="text-lg leading-9 text-white/76">
            {project.sustainability}
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Eyebrow>Project Ecosystem</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Development workstreams.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.ecosystem.map((item) => (
            <div
              className="rounded-card border border-border bg-white p-5 text-sm font-semibold text-charcoal shadow-line"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/contact?inquiry=Public-sector%20partnership">
            Discuss a partnership opportunity
          </Button>
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

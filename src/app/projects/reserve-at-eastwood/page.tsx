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

const project = site.projects[0];

export const metadata: Metadata = pageMetadata({
  title: "Reserve at Eastwood",
  description:
    "Reserve at Eastwood is a 288-unit affordable housing community in Fort Myers serving 30%, 50%, 60%, and 70% AMI households.",
  path: "/projects/reserve-at-eastwood",
  image: project.image
});

export default function ReserveAtEastwoodPage() {
  return (
    <>
      <Hero
        description="288 affordable homes serving 30%, 50%, 60%, and 70% AMI households in Fort Myers, Florida."
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
              Affordable housing planned for a range of household sizes.
            </h2>
          </div>
          <p className="text-lg leading-9 text-slate">{project.description}</p>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Eyebrow>Project Views</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Reserve at Eastwood.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate">
            Community entry, resident amenities, clubhouse, and site layout.
          </p>
        </div>
        <RenderingCarousel items={project.gallery} />
      </Section>

      <Section className="bg-sand">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow>Location</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Fort Myers site context.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Public filings identify Reserve at Eastwood near Ortiz Avenue and
              Hanson Street in Fort Myers, Florida.
            </p>
          </div>
          {project.mapImage && project.mapAlt ? (
            <ImageFrame alt={project.mapAlt} src={project.mapImage} />
          ) : null}
        </div>
      </Section>

      <Section className="bg-warm">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Unit Features</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
              Durable finishes and everyday usability.
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
              Resident-focused community amenities.
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
        </div>
      </Section>

      <Section className="bg-navy text-white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow className="text-gold">Sustainability</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Designed to recognized performance specifications.
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
            The workstreams behind delivery.
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
        ctas={[{ label: "Contact Lighthouse", href: "/contact?inquiry=Land%20opportunity" }]}
        description="Bring a site, public priority, capital question, or delivery challenge to the Lighthouse team."
        title="Discuss a partnership opportunity."
      />
    </>
  );
}

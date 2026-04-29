import type { Metadata } from "next";
import { CapabilityCard } from "@/components/CapabilityCard";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Capabilities",
  description: site.capabilitiesPage.hero.description,
  path: "/capabilities"
});

export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        description={site.capabilitiesPage.hero.description}
        eyebrow={site.capabilitiesPage.hero.eyebrow}
        title={site.capabilitiesPage.hero.title}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.capabilitiesPage.capabilities.map((capability) => (
            <CapabilityCard capability={capability} key={capability.title} />
          ))}
        </div>
      </Section>
      <Section className="bg-sand">
        <div className="mb-10">
          <Eyebrow>Development Process</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            From feasibility through stewardship.
          </h2>
        </div>
        <Timeline steps={site.capabilitiesPage.process} />
      </Section>
      <Section>
        <div className="mb-10">
          <Eyebrow>Complexity We Handle</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            Development constraints translated into executable workstreams.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {site.capabilitiesPage.complexityTags.map((tag) => (
            <span
              className="rounded-card border border-border bg-white px-4 py-2 text-sm font-semibold text-harbor shadow-line"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}

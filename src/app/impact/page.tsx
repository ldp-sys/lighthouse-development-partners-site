import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const reserve = site.projects[0];

export const metadata: Metadata = pageMetadata({
  title: "Impact",
  description: site.impactPage.hero.description,
  path: "/impact"
});

export default function ImpactPage() {
  return (
    <>
      <Hero
        description={site.impactPage.hero.description}
        eyebrow={site.impactPage.hero.eyebrow}
        title={site.impactPage.hero.title}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {site.impactPage.pillars.map((pillar) => (
            <div
              className="rounded-card border border-border bg-white p-6 shadow-line"
              key={pillar.title}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-teal/10 text-teal">
                <Icon aria-hidden className="h-5 w-5" name={pillar.icon} />
              </div>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-navy">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-sand">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Reserve at Eastwood Impact</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
              Housing access, resident amenities, and sustainable specifications.
            </h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-slate">
            <p>
              {reserve.name} will deliver {reserve.stats[0].value} affordable
              homes in {reserve.location}, serving households across{" "}
              {reserve.stats[1].value} AMI bands.
            </p>
            <p>
              Planned amenities include a clubhouse, on-site management and
              maintenance, co-working stations, fitness, media and community
              space, pool and grill area, pickleball, dog park, and playground.
            </p>
            <p>{reserve.sustainability}</p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mb-10">
          <Eyebrow>Metrics</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            Confirmed data separated from internal placeholders.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.impactPage.metrics.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </Section>
      <Section className="bg-warm">
        <div className="rounded-card border border-border bg-white p-8 shadow-line">
          <Eyebrow>Resident-Centered Planning</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy">
            Amenities that support daily life without overstating services.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate">
            Lighthouse's public project information for Reserve at Eastwood
            focuses on practical community amenities and durable unit features.
            This site does not claim resident services, programs, or outcomes
            that have not been confirmed for public release.
          </p>
        </div>
      </Section>
    </>
  );
}

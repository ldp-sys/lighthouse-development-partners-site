import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const affordableProjects = site.projects.filter(
  (project) => project.type === "Affordable Housing"
);

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
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-sand text-teal">
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
            <Eyebrow>Current Affordable Housing Work</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Housing access, resident amenities, and sustainable specifications.
            </h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-slate">
            <p>
              Lighthouse's current Fort Myers affordable housing work includes
              Reserve at Eastwood and Reserve at Franklin Park, totaling 384
              affordable homes across communities serving households from 30%
              to 70% AMI.
            </p>
            <p>
              The program includes one-, two-, three-, and four-bedroom homes
              across the portfolio, with resident amenities such as clubhouses,
              on-site management, fitness and business spaces, outdoor
              recreation, and practical community gathering areas.
            </p>
            <p>
              Eastwood is designed to EnergyStar and NGBS specifications.
              Franklin Park is planned to NGBS specifications. Certification
              status and final performance data should be confirmed at
              completion.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mb-10">
          <Eyebrow>Metrics</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Current project metrics.
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
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy">
            Amenities that support daily life without overstating services.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate">
            Lighthouse's current project materials focus on practical amenities,
            durable unit features, and resident services where those services
            are included in project planning. This site avoids claiming outcomes
            that should be measured and confirmed after delivery.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {affordableProjects.map((project) => (
              <div
                className="rounded-card border border-border bg-warm p-5"
                key={project.slug}
              >
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate">
                  {project.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

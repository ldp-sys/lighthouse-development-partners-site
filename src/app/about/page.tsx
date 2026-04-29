import type { Metadata } from "next";
import Image from "next/image";
import { CapabilityCard } from "@/components/CapabilityCard";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: site.about.hero.description,
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <Hero
        description={site.about.hero.description}
        eyebrow={site.about.hero.eyebrow}
        title={site.about.hero.title}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative overflow-hidden rounded-card border border-border bg-white shadow-soft">
            <Image
              alt="Architectural plans used in development planning"
              className="aspect-[4/3] h-full w-full object-cover"
              height={1600}
              priority
              src="/images/about-blueprints-stock.jpg"
              width={1280}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-6 text-white">
              <p className="max-w-sm text-sm font-semibold leading-6">
                Site strategy, design coordination, finance, approvals, and delivery.
              </p>
            </div>
          </div>
          <div>
            <Eyebrow>Platform</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Development work is strongest when the project logic is clear.
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate">
              {site.about.overview}
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-sand">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            The work behind a deliverable project.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate">
            Lighthouse keeps the core development functions close: feasibility,
            public-sector alignment, capital strategy, design coordination,
            construction readiness, and long-term stewardship.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {site.capabilitiesPage.capabilities.slice(0, 6).map((item) => (
            <CapabilityCard capability={item} key={item.title} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Eyebrow>Process</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              From feasible site to financed project.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {site.capabilitiesPage.process.slice(0, 6).map((step, index) => (
              <div
                className="rounded-card border border-border bg-white p-5 shadow-line"
                key={step.title}
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-harbor">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-warm">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Milestones</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Public-facing progress.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate">
            Selected moments that are appropriate for the public site today.
          </p>
        </div>
        <div className="grid gap-4">
          {site.about.milestones.map((milestone, index) => (
            <div
              className="grid gap-4 rounded-card border border-border bg-white p-5 shadow-line sm:grid-cols-[auto_1fr] sm:items-start"
              key={milestone.title}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-card bg-navy text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

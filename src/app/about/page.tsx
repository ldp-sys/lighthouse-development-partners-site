import type { Metadata } from "next";
import { CapabilityCard } from "@/components/CapabilityCard";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
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
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Eyebrow>Company Overview</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold text-navy">
              Strategic development with a community and execution lens.
            </h2>
          </div>
          <p className="text-lg leading-9 text-slate">{site.about.overview}</p>
        </div>
      </Section>

      <Section className="bg-sand">
        <div className="mb-10">
          <Eyebrow>Development Philosophy</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            How Lighthouse approaches complex real estate work.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {site.about.philosophy.map((item) => (
            <CapabilityCard capability={item} key={item.title} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Eyebrow>Values</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            Practical principles for partner-facing development.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {site.about.values.map((value) => (
            <div
              className="rounded-card border border-border bg-white p-6 shadow-line"
              key={value.title}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-teal/10 text-teal">
                <Icon aria-hidden className="h-5 w-5" name={value.icon} />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                {value.description}
              </p>
              {value.isPlaceholder ? (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                  Internal confirmation pending
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-warm">
        <div className="rounded-card border border-border bg-white p-8 shadow-line">
          <Eyebrow>Operating Model</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy">
            {site.about.operatingModel.title}
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate">
            {site.about.operatingModel.body}
          </p>
        </div>
      </Section>

      <Section className="bg-sand">
        <div className="mb-10">
          <Eyebrow>Timeline</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            Milestones to refine with approved company history.
          </h2>
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
                {milestone.isPlaceholder ? (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                    Placeholder
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: site.about.hero.description,
  path: "/about"
});

const proofPoints = [
  { value: "384", label: "Affordable homes in current project work" },
  { value: "2", label: "Florida affordable communities" },
  { value: "3", label: "Development sectors" }
];

const operatingLanes = [
  {
    label: "Site",
    title: "Start with the ground truth.",
    body:
      "Every project begins with location, constraints, public priorities, infrastructure, and a feasible program."
  },
  {
    label: "Capital",
    title: "Build around finance reality.",
    body:
      "Affordability requirements, lender expectations, partner alignment, and timing are treated as design inputs."
  },
  {
    label: "Delivery",
    title: "Keep execution visible.",
    body:
      "Design, approvals, construction readiness, and long-term stewardship are coordinated as one operating system."
  }
];

const selectedCapabilities = site.capabilitiesPage.capabilities.slice(0, 6);

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-harbor text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(183,154,86,0.22),transparent_30%),linear-gradient(120deg,rgba(23,34,79,0.98),rgba(59,76,138,0.94)_46%,rgba(59,76,138,0.8))]"
        />
        <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow tone="inverse">{site.about.hero.eyebrow}</Eyebrow>
            <h1 className="font-serif text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Development work with a clear center of gravity.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90">
              Lighthouse Development Partners brings site strategy, public-sector
              alignment, capital coordination, and delivery discipline to
              community-scale real estate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-card border border-gold bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-warm hover:bg-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                href="/projects"
              >
                View current work
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-card border border-white/35 bg-white/12 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                href="/contact"
              >
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[18px] border border-white/10 bg-white/8"
            />
            <figure className="relative overflow-hidden rounded-card border border-white/22 bg-sand shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image
                  alt="Architectural plans used in development planning"
                  className="h-full w-full object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src={assetPath("/images/about-blueprints-stock.jpg")}
                />
              </div>
              <figcaption className="grid gap-3 border-t border-border bg-warm p-4 text-navy sm:grid-cols-3">
                {proofPoints.map((item) => (
                  <div key={item.label}>
                    <p className="font-sans text-3xl font-bold leading-none">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold leading-5 text-charcoal">
                      {item.label}
                    </p>
                  </div>
                ))}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Platform</Eyebrow>
          <p className="font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Lighthouse is built for projects where public purpose, private
            capital, and practical delivery have to move together.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate">
            {site.about.overview}
          </p>
        </div>
      </Section>

      <Section className="bg-navy text-white">
        <div className="mb-10 max-w-3xl">
          <Eyebrow tone="inverse">Operating System</Eyebrow>
          <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
            Simple enough to stay focused. Rigorous enough to carry complexity.
          </h2>
        </div>
        <div className="grid border-y border-white/18 lg:grid-cols-3">
          {operatingLanes.map((lane) => (
            <article
              className="border-white/18 py-8 lg:border-r lg:px-8 lg:last:border-r-0"
              key={lane.title}
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/82">
                {lane.label}
              </p>
              <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white">
                {lane.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/86">{lane.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-sand">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
              The disciplines behind a deliverable project.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              A development platform is only as strong as the work it can
              coordinate. Lighthouse keeps these functions close from early
              feasibility through delivery.
            </p>
          </div>
          <div className="grid gap-3">
            {selectedCapabilities.map((item, index) => (
              <article
                className="grid gap-4 rounded-card border border-border bg-white p-5 shadow-line sm:grid-cols-[4rem_1fr] sm:items-start"
                key={item.title}
              >
                <p className="font-sans text-3xl font-bold leading-none text-navy">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>Public Progress</Eyebrow>
            <h2 className="font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Selected milestones.
            </h2>
          </div>
          <div className="grid gap-0 border-y border-border">
            {site.about.milestones.map((milestone) => (
              <article
                className="grid gap-3 border-b border-border py-6 last:border-b-0 sm:grid-cols-[0.7fr_1.3fr]"
                key={milestone.title}
              >
                <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">
                  {milestone.title}
                </h3>
                <p className="text-sm leading-7 text-slate">
                  {milestone.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

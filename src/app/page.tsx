import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CapabilityCard } from "@/components/CapabilityCard";
import { CTASection } from "@/components/CTASection";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { NewsCard } from "@/components/NewsCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { site } from "@/data/site";

export default function HomePage() {
  const heroRenderings = site.projects.flatMap((project) =>
    project.gallery.map((item) => ({
      ...item,
      title: `${project.name}: ${item.title}`
    }))
  );

  return (
    <>
      <Hero
        carouselItems={heroRenderings}
        ctas={site.home.hero.ctas}
        description={site.home.hero.description}
        eyebrow={site.home.hero.eyebrow}
        title={site.home.hero.title}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Eyebrow>{site.home.credibility.eyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {site.home.credibility.title}
            </h2>
          </div>
          <p className="text-base leading-8 text-slate">
            {site.home.credibility.body}
          </p>
        </div>
      </Section>

      <Section className="bg-sand">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>What We Build</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              What Lighthouse builds.
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-harbor hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            href="/about"
          >
            Explore the platform
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.home.whatWeBuild.map((capability) => (
            <CapabilityCard capability={capability} key={capability.title} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Eyebrow>Current Project Work</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Current affordable housing communities.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate">
            Reserve at Eastwood and Reserve at Franklin Park show the platform
            at work: real communities, clear programs, current project views, and
            a practical path from finance to delivery.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {site.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="bg-warm">
        <div className="mb-10">
          <Eyebrow>Partnerships</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Coordinating the work that moves projects forward.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.home.partnershipEngine.map((partner) => (
            <div
              className="rounded-card border border-border bg-white p-6 shadow-line"
              key={partner.title}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-sand text-harbor">
                <Icon aria-hidden className="h-5 w-5" name={partner.icon} />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">
                {partner.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Latest News</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Public project updates.
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-harbor hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            href="/news"
          >
            View news
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid max-w-3xl gap-6">
          {site.news.slice(0, 3).map((article) => (
            <NewsCard article={article} key={article.slug} />
          ))}
        </div>
      </Section>

      <CTASection
        ctas={site.home.finalCta.ctas}
        description={site.home.finalCta.description}
        title={site.home.finalCta.title}
      />
    </>
  );
}

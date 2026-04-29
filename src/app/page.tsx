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
import { StatCard } from "@/components/StatCard";
import { site } from "@/data/site";

export default function HomePage() {
  const featuredProject = site.projects[0];

  return (
    <>
      <Hero
        ctas={site.home.hero.ctas}
        description={site.home.hero.description}
        eyebrow={site.home.hero.eyebrow}
        image={site.home.hero.image}
        imageAlt={site.home.hero.imageAlt}
        stats={site.home.hero.stats}
        title={site.home.hero.title}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Eyebrow>{site.home.credibility.eyebrow}</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
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
            <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
              Development categories with civic and financial discipline.
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-harbor hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            href="/capabilities"
          >
            Explore capabilities
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
          <Eyebrow>Featured Project</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            Reserve at Eastwood
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate">
            A Fort Myers affordable housing community planned for 288 homes,
            multiple AMI bands, resident amenities, and sustainable design
            specifications.
          </p>
        </div>
        <ProjectCard project={featuredProject} />
      </Section>

      <Section className="bg-warm">
        <div className="mb-10">
          <Eyebrow>Partnership Engine</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            Coordinating the partners that make complex projects possible.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.home.partnershipEngine.map((partner) => (
            <div
              className="rounded-card border border-border bg-white p-6 shadow-line"
              key={partner.title}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-gold/15 text-harbor">
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

      <Section className="bg-navy text-white">
        <div className="mb-10">
          <Eyebrow>Impact Snapshot</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
            Verified metrics, no inflated claims.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.home.impactStats.map((stat) => (
            <StatCard className="bg-white" key={stat.label} stat={stat} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Latest News</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
              Milestones and platform updates.
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
        <div className="grid gap-6 lg:grid-cols-3">
          {site.news.map((article) => (
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

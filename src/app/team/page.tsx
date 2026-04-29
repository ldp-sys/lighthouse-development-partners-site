import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Team",
  description: site.teamPage.hero.description,
  path: "/team"
});

export default function TeamPage() {
  return (
    <>
      <Hero
        description={site.teamPage.hero.description}
        eyebrow={site.teamPage.hero.eyebrow}
        title={site.teamPage.hero.title}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {site.teamPage.members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
        <p className="mt-6 rounded-card border border-gold/40 bg-gold/10 p-4 text-sm font-semibold text-harbor">
          {site.teamPage.note}
        </p>
      </Section>
      <Section className="bg-sand">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Advisory Ecosystem</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
              Senior attention supported by trusted specialists.
            </h2>
          </div>
          <p className="text-base leading-8 text-slate">
            Lighthouse coordinates with public, capital, construction, design,
            legal, advisory, and community partners. Partner names and logos
            should only be added once display rights and approved usage are
            confirmed.
          </p>
        </div>
      </Section>
    </>
  );
}

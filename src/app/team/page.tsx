import type { Metadata } from "next";
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
        <p className="mt-8 max-w-3xl text-sm leading-7 text-slate">
          {site.teamPage.note}
        </p>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: site.projectsPage.hero.description,
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <>
      <Hero
        description={site.projectsPage.hero.description}
        eyebrow={site.projectsPage.hero.eyebrow}
        title={site.projectsPage.hero.title}
      />
      <Section>
        <ProjectFilter filters={site.projectsPage.filters} projects={site.projects} />
      </Section>
    </>
  );
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/site";
import { ImageFrame } from "@/components/ImageFrame";
import { StatCard } from "@/components/StatCard";

export function ProjectCard({ project }: { project: Project }) {
  const visibleStats = project.stats.filter(
    (stat) => !stat.label.includes("AMI") && !stat.label.includes("Design")
  );

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-line">
      <ImageFrame alt={project.imageAlt} src={project.image} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-teal">
          <span>{project.type}</span>
          <span aria-hidden>-</span>
          <span>{project.status}</span>
        </div>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-navy">
          {project.name}
        </h2>
        <p className="mt-2 text-sm font-semibold text-charcoal">{project.location}</p>
        {project.statusDetail ? (
          <p className="mt-1 text-sm text-slate">{project.statusDetail}</p>
        ) : null}
        <p className="mt-4 text-sm leading-7 text-slate">{project.summary}</p>
        {visibleStats.length ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {visibleStats.slice(0, 2).map((stat) => (
              <StatCard key={`${project.slug}-${stat.label}`} stat={stat} />
            ))}
          </div>
        ) : null}
        <div className="mt-auto pt-6">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-harbor hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            href={project.href}
          >
            View Project
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

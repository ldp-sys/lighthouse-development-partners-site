"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

type ProjectFilterProps = {
  filters: string[];
  projects: Project[];
};

export function ProjectFilter({ filters, projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => {
      const values = [project.type, project.status, ...project.tags].map((value) =>
        value.toLowerCase()
      );
      return values.includes(activeFilter.toLowerCase());
    });
  }, [activeFilter, projects]);

  return (
    <div>
      <div
        aria-label="Project filters"
        className="flex flex-wrap gap-2"
        role="tablist"
      >
        {filters.map((filter) => (
          <button
            aria-selected={activeFilter === filter}
            className={cn(
              "min-h-10 rounded-card border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
              activeFilter === filter
                ? "border-teal bg-teal text-white"
                : "border-border bg-white text-harbor hover:border-teal"
            )}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            role="tab"
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

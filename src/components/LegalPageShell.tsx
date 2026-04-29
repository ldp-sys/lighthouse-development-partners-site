import type { LegalPage } from "@/data/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";

export function LegalPageShell({ page }: { page: LegalPage }) {
  return (
    <Section>
      <Breadcrumbs items={[{ label: page.title, href: "#" }]} />
      <div className="max-w-4xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-serif text-4xl font-bold leading-tight text-navy">
          {page.title}
        </h1>
        <p className="mt-4 text-base leading-8 text-slate">{page.description}</p>
        <p className="mt-3 text-sm font-semibold text-charcoal">
          Last updated: {page.updated}
        </p>
      </div>
      <div className="mt-10 grid max-w-4xl gap-8">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-3xl font-semibold text-navy">
              {section.title}
            </h2>
            <div className="mt-3 grid gap-4 text-base leading-8 text-slate">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}

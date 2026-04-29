import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Partnerships",
  description: site.partnershipsPage.hero.description,
  path: "/partnerships"
});

export default function PartnershipsPage() {
  return (
    <>
      <Hero
        description={site.partnershipsPage.hero.description}
        eyebrow={site.partnershipsPage.hero.eyebrow}
        title={site.partnershipsPage.hero.title}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.partnershipsPage.partnerTypes.map((partner) => (
            <div
              className="rounded-card border border-border bg-white p-6 shadow-line"
              key={partner.title}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-teal/10 text-teal">
                <Icon aria-hidden className="h-5 w-5" name={partner.icon} />
              </div>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-navy">
                {partner.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-sand">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>What Lighthouse Brings</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
              Focused development capacity for aligned partners.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {site.partnershipsPage.brings.map((item) => (
              <div
                className="rounded-card border border-border bg-white p-4 text-sm font-semibold text-charcoal shadow-line"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CTASection
        ctas={[{ label: "Start a Conversation", href: "/contact?inquiry=Public-sector%20partnership" }]}
        description="Share a site, municipal priority, capital question, or development challenge with the Lighthouse team."
        title="Partnership inquiries start with a clear conversation."
      />
    </>
  );
}

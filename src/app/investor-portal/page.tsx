import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { InvestorPortalCard } from "@/components/InvestorPortalCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Investor Portal",
  description: site.investorPortalPage.message,
  path: "/investor-portal"
});

export default function InvestorPortalPage() {
  return (
    <>
      <Hero
        description={site.investorPortalPage.hero.description}
        eyebrow={site.investorPortalPage.hero.eyebrow}
        title={site.investorPortalPage.hero.title}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-navy">
              Secure investor access is being integrated into the new Lighthouse
              Development Partners platform.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              {site.investorPortalPage.message}
            </p>
            <div className="mt-8">
              <Button href="/contact?inquiry=Capital%2Finvestment%20inquiry" variant="secondary">
                Need portal assistance? Contact Lighthouse.
              </Button>
            </div>
          </div>
          <InvestorPortalCard />
        </div>
      </Section>
    </>
  );
}

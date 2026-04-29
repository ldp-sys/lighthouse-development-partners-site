import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "News",
  description: site.newsPage.hero.description,
  path: "/news"
});

export default function NewsPage() {
  return (
    <>
      <Hero
        description={site.newsPage.hero.description}
        eyebrow={site.newsPage.hero.eyebrow}
        title={site.newsPage.hero.title}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {site.news.map((article) => (
            <NewsCard article={article} key={article.slug} />
          ))}
        </div>
      </Section>
    </>
  );
}

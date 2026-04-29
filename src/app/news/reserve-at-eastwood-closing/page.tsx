import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const article = site.news[0];

export const metadata: Metadata = pageMetadata({
  title: "Reserve at Eastwood Closing",
  description: article.deck,
  path: "/news/reserve-at-eastwood-closing",
  image: article.image
});

export default function ReserveClosingArticlePage() {
  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: "News", href: "/news" },
          { label: "Reserve at Eastwood Closing", href: article.href }
        ]}
      />
      <article className="mx-auto max-w-4xl">
        <Eyebrow>{article.category}</Eyebrow>
        <h1 className="font-serif text-5xl font-semibold leading-tight text-navy sm:text-6xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-teal">
          {article.date}
        </p>
        <p className="mt-6 text-xl leading-9 text-slate">{article.deck}</p>
        <div className="mt-10">
          <PlaceholderImage
            alt={article.imageAlt}
            label="Reserve at Eastwood placeholder rendering"
            src={article.image}
          />
        </div>
        <div className="mt-10 grid gap-6 text-lg leading-9 text-slate">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Section>
  );
}

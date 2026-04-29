import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Eyebrow } from "@/components/Eyebrow";
import { ImageFrame } from "@/components/ImageFrame";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

type NewsArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return site.news
    .filter((article) => article.slug !== "reserve-at-eastwood-closing")
    .map((article) => ({
      slug: article.slug
    }));
}

export async function generateMetadata({
  params
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = site.news.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return pageMetadata({
    title: article.title,
    description: article.deck,
    path: article.href,
    image: article.image
  });
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = site.news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { label: "News", href: "/news" },
            { label: article.title, href: article.href }
          ]}
        />
        <article className="mx-auto max-w-4xl">
          <Eyebrow>{article.category}</Eyebrow>
          <h1 className="font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-harbor">
            {article.date}
          </p>
          <p className="mt-6 text-xl leading-9 text-slate">{article.deck}</p>
          <div className="mt-10">
            <ImageFrame alt={article.imageAlt} src={article.image} />
          </div>
          <div className="mt-10 grid gap-6 text-lg leading-9 text-slate">
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </Section>
      <CTASection
        ctas={[
          { label: "Contact Lighthouse", href: "/contact" },
          { label: "View Projects", href: "/projects" }
        ]}
        description="For project information, partnership conversations, or media inquiries, contact the Lighthouse team directly."
        title="Continue the conversation."
      />
    </>
  );
}

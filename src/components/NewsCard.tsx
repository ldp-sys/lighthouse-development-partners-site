import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { NewsArticle } from "@/data/site";
import { ImageFrame } from "@/components/ImageFrame";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-line">
      <ImageFrame alt={article.imageAlt} src={article.image} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-teal">
          <span>{article.category}</span>
          <span aria-hidden>-</span>
          <span>{article.date}</span>
        </div>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-navy">
          {article.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate">{article.deck}</p>
        <div className="mt-auto pt-6">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-harbor hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            href={article.href}
          >
            Read Article
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

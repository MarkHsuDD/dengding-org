"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Lightbulb, PenLine } from "lucide-react";
import { useState } from "react";

type Article = {
  category: string;
  title: string;
  excerpt: string;
  href: string;
  date: string;
};

const categories = [
  { icon: BookOpen, label: "技術知識" },
  { icon: Building2, label: "產業觀察" },
  { icon: Lightbulb, label: "工程實務" },
  { icon: PenLine, label: "總經理筆記" },
];

export default function InsightsArticles({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const visibleArticles = activeCategory
    ? articles.filter((article) => article.category === activeCategory)
    : articles;

  return (
    <>
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={activeCategory === item.label}
              aria-controls="insights-results"
              onClick={() => setActiveCategory(activeCategory === item.label ? null : item.label)}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-[#0b171a]/70 p-5 text-left transition-colors hover:border-[#fbec96]/55 hover:bg-[#15353d] hover:text-[#fbec96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fbec96] aria-pressed:border-[#fbec96]/60 aria-pressed:bg-[#15353d] aria-pressed:text-[#fbec96]"
            >
              <item.icon aria-hidden="true" className="shrink-0 text-[#fbec96]" size={22} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="insights-results" aria-labelledby="insights-heading" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#fbec96]">Latest</p>
            <h2 id="insights-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              {activeCategory ?? "最新洞察"}
            </h2>
          </div>
          <button
            type="button"
            aria-pressed={activeCategory === null}
            aria-controls="insights-results"
            onClick={() => setActiveCategory(null)}
            className="cursor-pointer rounded-lg px-3 py-2 text-sm text-white/65 transition-colors hover:bg-[#15353d] hover:text-[#fbec96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fbec96] aria-pressed:text-[#fbec96]"
          >
            顯示全部
          </button>
        </div>

        <p role="status" className="sr-only">
          {activeCategory ?? "全部分類"}，共 {visibleArticles.length} 篇文章。
        </p>
        {visibleArticles.length === 0 && (
          <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white/65">
            這個分類目前還沒有文章。
          </p>
        )}
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:border-[#fbec96]/40"
            >
              <div className="flex items-center justify-between gap-4 text-sm text-white/45">
                <span className="text-[#fbec96]">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold leading-tight group-hover:text-[#fbec96] transition">
                {article.title}
              </h3>
              <p className="mt-5 leading-8 text-white/60">{article.excerpt}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-[#fbec96]">
                閱讀全文 <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

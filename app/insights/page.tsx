import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Lightbulb, PenLine } from "lucide-react";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "洞察 Insights | 登鼎智慧工程",
  description:
    "從工程現場出發，分享模板技術、營造數位化、產業觀察與登鼎的實務經驗。",
};

const categories = [
  { icon: BookOpen, label: "技術知識" },
  { icon: Building2, label: "產業觀察" },
  { icon: Lightbulb, label: "工程實務" },
  { icon: PenLine, label: "總經理筆記" },
];

const articles = [
  {
    category: "產業觀察",
    title: "系統模板在國外早已成熟，為什麼到了台灣卻難以落地？",
    excerpt:
      "問題不只是技術本身，而是建築設計、發包方式、工種界面與施工習慣共同形成的導入門檻。",
    href: "/insights/why-system-formwork-is-hard-to-adopt-in-taiwan",
    date: "2026.08.26",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#0b171a] text-white">
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#fbec96]">DDSC INSIGHTS</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight lg:text-7xl">
            從工程現場出發，<br />分享真正能落地的產業觀察。
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
            技術知識、產業現況、工程實務與經營思考。把施工現場累積的經驗，整理成可以被理解、被驗證，也能被延續的知識。
          </p>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b171a]/70 p-5">
                <item.icon className="text-[#fbec96]" size={22} />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold text-[#fbec96]">Latest</p>
            <h2 className="mt-3 text-3xl font-semibold lg:text-4xl">最新洞察</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {articles.map((article) => (
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
      </main>
    </div>
  );
}

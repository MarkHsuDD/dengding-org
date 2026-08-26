import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";

const articlePath =
  "/insights/why-china-construction-projects-fit-system-formwork";
const articleTitle =
  "為什麼中國建案特別適合系統模板？四個從現場就看得見的原因";
const articleDescription =
  "從超大開發量體、標準層、設計院主導的整數尺寸，到較少 RC 內隔間與 T 字牆，說明中國集合住宅為何具備系統模板高周轉所需要的條件。";

export const metadata: Metadata = {
  title: `${articleTitle} | 登鼎洞察`,
  description: articleDescription,
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    type: "article",
    publishedTime: "2026-08-26",
    modifiedTime: "2026-08-26",
    url: `https://dengding.org${articlePath}`,
    images: [
      {
        url: "https://dengding.org/insights/china-system-formwork-large-scale.jpg",
        width: 360,
        height: 260,
        alt: "中國大型集合住宅建案，呈現同一基地多棟建築與大量重複量體",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: articleTitle,
  description: articleDescription,
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: {
    "@type": "Organization",
    name: "登鼎智慧工程",
  },
  publisher: {
    "@type": "Organization",
    name: "登鼎智慧工程",
  },
  mainEntityOfPage: `https://dengding.org${articlePath}`,
  image: [
    "https://dengding.org/insights/china-system-formwork-large-scale.jpg",
    "https://dengding.org/insights/china-system-formwork-standard-floors.jpg",
  ],
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#0b171a] text-white">
      <Navbar />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <article className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-[#fbec96]"
          >
            <ArrowLeft size={16} /> 回到洞察 Insights
          </Link>

          <header className="mt-10 border-b border-white/10 pb-10">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full border border-[#fbec96]/25 bg-[#fbec96]/10 px-3 py-1 text-[#fbec96]">
                產業觀察
              </span>
              <span className="text-white/40">2026.08.26</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight lg:text-6xl">
              為什麼中國建案特別適合系統模板？
              <span className="mt-3 block text-2xl font-normal text-white/55 lg:text-3xl">
                四個從現場就看得見的原因
              </span>
            </h1>

            <p className="mt-7 text-xl leading-9 text-white/65">
              系統模板最重要的條件不是「模板本身」，而是建築能不能大量重複。以中國常見的大型集合住宅、安置房及保障性住宅為例，從開發規模到設計方法，都更容易把系統模板的效率真正發揮出來。
            </p>
          </header>

          <figure className="mx-auto mt-12 max-w-[560px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2">
              <Image
                src="/insights/china-system-formwork-large-scale.jpg"
                alt="中國大型集合住宅建案，同一基地內有多棟高度重複的建築量體"
                width={360}
                height={260}
                sizes="(max-width: 640px) 100vw, 560px"
                className="h-auto w-full rounded-[1.6rem] object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center text-sm leading-6 text-white/40">
              同一基地內的建築量體大、棟數多，模板系統可以在更大的工程範圍內重複周轉。
            </figcaption>
          </figure>

          <section className="mt-14 space-y-12 text-[17px] leading-8 text-white/72">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                先說結論：中國建案把「重複施工」當成產品邏輯
              </h2>
              <p className="mt-4">
                系統模板的成本通常集中在前期設計、配模、生產與進場準備。只做少量樓層時，這些投入很難攤薄；但當同一套牆體與樓層可以反覆施工，模板周轉次數越高，工期、人力與管理上的優勢才會逐步出現。
              </p>
              <p className="mt-4">
                中國許多大型住宅開發案，剛好同時具備大規模、高重複、尺寸較整齊及結構節點較單純等條件，因此天然適合系統模板。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">
                01｜量體極大，一套模板可以攤提到更多棟、更多面積
              </h2>
              <p className="mt-4">
                從台灣建案的尺度來看，中國大型集合住宅的量體往往非常可觀。同一基地可能同時有多棟住宅，甚至由相近戶型、相近樓高及相近結構組成。
              </p>
              <p className="mt-4">
                量體越大，模板規劃、非標件設計、材料調度與現場培訓的前期成本，就越容易被大量施工面積攤提。對系統模板而言，這是最直接的經濟條件。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">
                02｜標準層多，模板可以持續重複而不是每層重新處理
              </h2>
              <p className="mt-4">
                系統模板真正擅長的不是「做一層很快」，而是從第二層、第三層開始，持續使用同一套配置。當層高、牆厚、門窗開口與主要牆體位置固定，工班可以按照相同編號、相同順序施工。
              </p>
              <p className="mt-4">
                樓層越多、重複度越高，配模、吊運、組裝與拆模流程就越容易穩定，現場也更容易形成固定節拍。
              </p>
            </div>

            <figure className="mx-auto max-w-[360px]">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2">
                <Image
                  src="/insights/china-system-formwork-standard-floors.jpg"
                  alt="中國高層集合住宅連續重複的標準樓層"
                  width={300}
                  height={388}
                  sizes="(max-width: 480px) 100vw, 360px"
                  className="h-auto w-full rounded-[1.6rem] object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm leading-6 text-white/40">
                連續且高度相似的標準層，讓同一套模板配置能夠反覆使用。
              </figcaption>
            </figure>

            <div>
              <h2 className="text-3xl font-semibold text-white">
                03｜設計院主導，較容易在早期納入整數尺寸與施工模數
              </h2>
              <p className="mt-4">
                中國許多大型建案由設計院整合建築、結構及機電設計。相較於先完成造型與空間、再由施工端設法配合，系統化住宅更容易在前期就把施工性、標準化與大量複製納入考量。
              </p>
              <p className="mt-4">
                牆長、開口、層高及結構尺寸若能盡量採用整數或模數化尺寸，就可以減少大量零碎補板與特殊件。這不只讓模板好配，也能降低加工、編號與現場辨識的複雜度。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">
                04｜內隔間多半不是 RC，T 字牆與複雜交接較少
              </h2>
              <p className="mt-4">
                許多中國住宅的 RC 結構集中在外圍牆體、剪力牆與核心區域，室內隔間則在主體完成後，以其他隔間系統施作。如此一來，主體結構中的短牆、T 字牆與零碎轉折會相對減少。
              </p>
              <p className="mt-4">
                對系統模板而言，連續的大面積牆體最容易標準化；T 字交接、短牆、柱梁牆交會及大量內部 RC 隔間，才是最消耗配模與現場處理時間的部位。節點越單純，系統模板的效率就越明顯。
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-10">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#fbec96]">
                THE CORE CONDITION
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                適合系統模板的，不只是「大建案」，而是可以大量重複的建築產品
              </h2>
              <p className="mt-5">
                中國大型住宅之所以適合系統模板，並不是因為某一種模板材料特別神奇，而是量體、標準層、尺寸控制與結構配置，共同建立了高周轉所需要的條件。
              </p>
              <p className="mt-4">
                當設計從一開始就考慮如何重複，施工端才能真正把一次規劃轉化成多次使用。
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#fbec96]/20 bg-[#15353d]/55 p-8 lg:p-10">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#fbec96]">
                DENGDING VIEW
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                台灣不一定能複製中國的量體，但可以借用同一個原則
              </h2>
              <p className="mt-5">
                台灣建築高度客製化，也有較多 RC 內隔間與複雜節點，因此不能直接照搬中國模式。更實際的做法，是先找出建案中高比例、可重複的區域加以標準化，再用彈性的嵌補方式處理剩下的非標準位置。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/insights/why-system-formwork-is-hard-to-adopt-in-taiwan"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-white transition hover:border-[#fbec96]/60"
                >
                  延伸閱讀：為什麼台灣難落地
                </Link>
                <Link
                  href="/sfs"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#fbec96] px-5 py-3 font-semibold text-[#15353d]"
                >
                  了解 SFS 系統 <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

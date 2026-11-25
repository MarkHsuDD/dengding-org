import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";

const title = "BIM 的困境：為什麼營造業的數位轉型如此困難？";
const description = "從資訊完整性到工序優先，重新思考 BIM 如何真正進入施工現場。";
const url = "https://www.dengding.org/insights/bim-workflow-first";
const date = "2026-11-26";

export const metadata: Metadata = {
  title: `${title} | 登鼎洞察`,
  description,
  alternates: { canonical: url },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: date,
  author: { "@type": "Organization", name: "登鼎智慧工程" },
  publisher: { "@type": "Organization", name: "登鼎智慧工程" },
  mainEntityOfPage: url,
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#0b171a] text-white">
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <article className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-[#fbec96]">
            <ArrowLeft size={16} /> 回到洞察 Insights
          </Link>
          <header className="mt-10 border-b border-white/10 pb-10">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full border border-[#fbec96]/25 bg-[#fbec96]/10 px-3 py-1 text-[#fbec96]">總經理筆記</span>
              <time dateTime={date} className="text-white/40">2026.11.26</time>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight lg:text-6xl">{title}</h1>
          </header>
          <div className="mt-12 space-y-6 text-[17px] leading-8 text-white/72">
            <p>BIM 導入的最大障礙，在於企圖一次到位，而不是分階段、循序漸進地導入數位化。</p>
            <p>以我們之前提到的例子：</p>
            <p>在二維圖面上，一根柱子就是幾個長方形。</p>
            <p>變成三維時，理應就是看到一支單純的長方柱體。</p>
            <p>但 BIM 想要一次把尺寸、位置、材料、成本、構件關係……所有資訊都放進去，用來完整地描述一支柱子。</p>
            <p>想想看。</p>
            <p>一支柱子就可能包含十幾項，甚至數十項資訊。</p>
            <p>一整棟建築物，從結構、門窗、強弱電，到給排水、消防、空調，可能有上萬個元件。</p>
            <p>每個元件又包含數十項資訊，加上彼此之間的關聯、空間限制及相依關係，整體資訊與運算的複雜度可想而知。</p>
            <p>很多從業人員，開始使用 BIM 時，遇到的第一關，就是發現自己的電腦不夠力。</p>
            <p>軟體龐大，模型複雜，硬體要求高。</p>
            <p>光是購置設備、安裝軟體、學習操作，到第一次順利執行，所耗費的時間及金錢，就足以嚇跑不少人。</p>
            <p>但即使跨過了軟硬體這一關，真正的考驗才剛開始。</p>
            <p><strong className="font-semibold text-white/90">施工時，怎麼用上 BIM？</strong></p>
            <p>你不能期待每個工種的施工人員，在工地現場都配備一台高效能筆電，把每一個施工動作、每一道工序，都即時同步到 BIM 系統上。</p>
            <p>至少，以我目前接觸過的 BIM 系統來說，還沒有看到一套真正從第一線施工人員的使用情境出發，充分解決工地現場 UI/UX 問題的系統。</p>
            <p>這在 AI 時代，應該會是一個很大的商機。</p>
            <hr className="my-10 border-white/10" />
            <p>每一個營造案場，都是許多不同工種，透過分工與協作，共同完成的結果。</p>
            <p>但沒有任何一個工種，需要知道整棟建築物的所有資訊。</p>
            <p>與結構體施工相關的工種，比如鋼筋、模板、混凝土，通常不需要知道景觀或室內裝修的所有細節。</p>
            <p>即使是橫跨施工前、中、後期的機電工程，前期負責預埋管路的人，跟後期負責配線、安裝設備的人，也很可能來自不同的承包單位。</p>
            <p>每個人真正需要的，是在對的時間、對的位置，取得與自己工作相關的資訊。</p>
            <p>不多，也不少。</p>
            <p><strong className="font-semibold text-white/90">資訊的價值，不在於擁有多少，而在於能不能在需要的時候，被正確地使用。</strong></p>
            <hr className="my-10 border-white/10" />
            <p>我認為，BIM 的概念，能夠帶給營造產業最大的價值，應該是提供一個讓所有參與者有效溝通、協調與協作的平台。</p>
            <p>在時間維度上，從設計階段開始，歷經施工，一直到完工驗收，讓資訊能夠有效地傳遞與延續。</p>
            <p>在空間維度上，讓不同工種能夠提早認知彼此的施工範圍、介面與限制，預先安排工序，以最有效率的方式完成各自的工作。</p>
            <p>這才是營造產業真正需要的數位化。</p>
            <p>但目前許多 BIM 系統的發展重心，仍然放在如何吸收、整合及處理更多資訊，而不是如何細化每一道工序（Workflow），以及如何降低不同工種之間的協調成本。</p>
            <p>我們花了大量的資源，試圖建立一棟建築物完整的數位模型。</p>
            <p>卻沒有投入同等的心力，去思考一棟建築物，究竟是怎麼被蓋起來的。</p>
            <p>前者是資訊建模的問題。</p>
            <p>後者才是營造管理的問題。</p>
            <p><strong className="font-semibold text-white/90">營造業的數位轉型，不應該從建立一個無所不包的數位模型開始，而應該從改善一道又一道的施工工序開始。</strong></p>
            <p>先讓每一個工種的工作變得更簡單、更有效率，再逐步串聯不同工種之間的資訊與工作流程。</p>
            <p>從局部數位化，走向整體數位化。</p>
            <p>從個別工序的最佳化，走向跨工種的協同最佳化。</p>
            <p>而不是反過來。</p>
            <p>這或許就是 BIM 發展至今，始終難以在施工現場全面普及的根本原因。</p>
            <p><strong className="font-semibold text-white/90">Digitize the workflow, not just the building.</strong></p>
          </div>
        </article>
      </main>
    </div>
  );
}

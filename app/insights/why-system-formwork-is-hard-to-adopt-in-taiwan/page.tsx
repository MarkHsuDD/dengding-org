import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "系統模板在國外早已成熟，為什麼到了台灣卻難以落地？ | 登鼎洞察",
  description:
    "從建築設計、發包模式、施工習慣、非標準節點與前置規劃，分析系統模板在台灣導入困難的真正原因。",
  alternates: {
    canonical: "/insights/why-system-formwork-is-hard-to-adopt-in-taiwan",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "系統模板在國外早已成熟，為什麼到了台灣卻難以落地？",
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
  mainEntityOfPage: "https://dengding.org/insights/why-system-formwork-is-hard-to-adopt-in-taiwan",
  description:
    "從建築設計、發包模式、施工習慣、非標準節點與前置規劃，分析系統模板在台灣導入困難的真正原因。",
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
              系統模板在國外早已成熟，為什麼到了台灣卻難以落地？
            </h1>

            <p className="mt-7 text-xl leading-9 text-white/65">
              系統模板本身不是新技術。真正的問題是：一套依賴標準化、重複使用與前置規劃的施工系統，進入台灣高度客製化、變動頻繁的營建環境後，原本的優勢往往被消耗掉。
            </p>
          </header>

          <section className="prose prose-invert mt-12 max-w-none space-y-10 text-[17px] leading-8 text-white/72">
            <div>
              <h2 className="text-3xl font-semibold text-white">先說結論：不是技術不成熟，而是施工環境不匹配</h2>
              <p className="mt-4">
                在許多海外市場，系統模板能夠快速導入，是因為建築設計、模板規格、施工流程與採購模式，本來就比較適合大量重複與標準化。當標準層多、戶型重複、變更多，模板的高周轉率才能真正轉化成成本與工期優勢。
              </p>
              <p className="mt-4">
                台灣的挑戰則相反。很多案場從設計、發包到現場施工，都保留高度彈性。這種彈性對傳統木模很友善，因為木模可以現場裁切、補洞、修改；但對系統模板而言，每一次非標準變化，都會增加設計、補件、調度與管理成本。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">01｜建築高度客製化，標準化很難累積</h2>
              <p className="mt-4">
                系統模板最需要的是「重複」。牆高、牆厚、梁深、門窗開口、柱尺寸與轉角形式越一致，模板就越容易重複使用。
              </p>
              <p className="mt-4">
                但台灣集合住宅雖然看似有標準層，實際上不同建案、不同戶型，甚至同一棟樓的局部位置，都可能存在大量尺寸差異。這些差異讓系統模板無法只靠少數標準件完成施工，最後仍要依靠大量非標準件收尾。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">02｜設計變更頻繁，系統模板最怕「做到一半再改」</h2>
              <p className="mt-4">
                傳統木模最大的優勢之一，是對變更的容忍度高。現場尺寸改了，工班可以直接裁切、加料、補強。
              </p>
              <p className="mt-4">
                系統模板則不同。當配置已完成、材料已生產或已進場後再發生變更，牽動的不只是單一模板，而可能是整個區域的配置、編號、補件與施工順序。原本想節省的人力與工期，很容易被返工抵銷。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">03｜傳統發包模式，沒有替「前置規劃」留下足夠價值</h2>
              <p className="mt-4">
                系統模板要有效率，必須把很多現場決策提前到施工前完成：圖面整理、尺寸確認、配模、編號、材料清單、吊運與施工順序，都必須先規劃。
              </p>
              <p className="mt-4">
                但在傳統模板工程中，很多問題是到了現場才由老師傅即時處理。當市場習慣把價值放在「現場解決問題」，而不是「施工前避免問題」，系統模板所需要的前置工程，就很難被完整計價與重視。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">04｜非標準節點太多，最後還是回到人工修補</h2>
              <p className="mt-4">
                柱、梁、牆交接，樓梯、窗框、門框、轉角、降板與設備開口，往往才是模板工程真正花時間的地方。
              </p>
              <p className="mt-4">
                如果標準模板只能處理大面積，剩下的複雜節點仍要大量依賴木料與熟練工處理，那麼系統模板就只完成了「一半的系統化」。對施工團隊而言，管理上反而同時多了一套材料、一套邏輯與一套工法。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">05｜真正的問題不是模板，而是整個施工系統沒有一起改</h2>
              <p className="mt-4">
                把木模換成鋁模、鋼模或其他系統模板，並不等於完成施工升級。如果圖面仍然晚定、變更仍然頻繁、工種資訊仍然分散、現場仍靠口頭傳遞，那麼新的模板只是被放進舊的管理方式裡。
              </p>
              <p className="mt-4">
                這也是為什麼我們認為，台灣要真正導入系統模板，核心不是單純「換材料」，而是要同時處理標準化、非標準區域、數位配模與施工資訊管理。
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#fbec96]/20 bg-[#15353d]/55 p-8 lg:p-10">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#fbec96]">DENGDING VIEW</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">登鼎的觀點：讓系統去適應台灣，而不是要求台灣去適應系統</h2>
              <p className="mt-5">
                如果台灣建築短期內不可能完全標準化，那麼解法就不應該只是要求所有設計都配合模板。更實際的方向，是把高比例、可重複的區域標準化，再用更有彈性的方式處理剩下的非標準節點。
              </p>
              <p className="mt-4">
                這也是登鼎 SFS（Smart Formwork System）的出發點：以標準系統模板處理主要面積，搭配智慧配模與非標準嵌補方案，降低台灣客製化建築與系統模板之間的落差。
              </p>
              <Link
                href="/sfs"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#fbec96] px-6 py-3 font-semibold text-[#15353d]"
              >
                了解 SFS 系統 <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";

const title = "一個 ConTech 創辦人的思考（二）：營造業的數位化，為什麼這麼難？";
const description = "從多、快、好、省談營造業的競爭力：BIM 推動多年，為什麼資訊仍然破碎？真正的數位轉型如何落地？";
const url = "https://www.dengding.org/insights/bim-and-construction-digital-transformation";
const date = "2026-11-23";

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
              <time dateTime={date} className="text-white/40">2026.11.23</time>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight lg:text-6xl">{title}</h1>
          </header>
          <div className="mt-12 space-y-6 text-[17px] leading-8 text-white/72">
            <p>營造業作為一個產業，跟所有產業一樣，也是透過創造價值來獲利。</p>
            <p>比如蓋一座水庫、一條公路，提供社會需要的基礎建設。</p>
            <p>或是蓋一棟大樓，讓幾十個家庭安居樂業。</p>
            <p>如同所有產業，競爭力體現在，簡化來說，就是四個字：</p>
            <p className="font-semibold text-white/90">多、快、好、省。</p>
            <p>量比別人多。飲料常見的，加量不加價。</p>
            <p>速度比別人快。麥當勞的標準化作業，加上得來速，讓漢堡可以快速交到客人手上。</p>
            <p>品質比別人好。精品包包賣的不只是功能，還有設計、品質與品牌帶來的光榮感。</p>
            <p>價格比別人便宜。買一送一；同行賣100，我賣60。</p>
            <p>當然，營造業複雜許多。</p>
            <p>有法規的問題。</p>
            <p>有土地使用目的的問題。</p>
            <p>有工程性質不同的問題。建案跟水利工程，差別就很大。</p>
            <p>還有一個很重要的特性：**高度分工。**</p>
            <p>營造工程的專業分工非常普遍，而且隨著技術越來越複雜，分工也是必需的。</p>
            <p>建築、結構、機電、土木、模板、鋼筋、混凝土、防水、裝修……</p>
            <p>一個工程分成幾十包，是再正常不過的事。</p>
            <p>但問題來了。</p>
            <p className="font-semibold text-white/90">分工可以提高專業效率，卻也增加了整合管理的成本。</p>
            <p>要讓一個工程做得好、做得快、成本又控制得住，非常考驗管理與統合的能力。</p>
            <p>像這種高度分工、需要大量協調的作業，其實非常需要數位化。</p>
            <p>透過數位平台，讓不同專業、不同階段的資訊可以流通，減少重複作業、溝通錯誤與等待時間，把效率做出來。</p>
            <p>因此，很早很早以前，建築界就開始發展 BIM 這個概念。</p>
            <p>BIM 是 Building Information Modeling，中文叫「建築資訊模型化」。</p>
            <p>古早的設計師，用線條，把三維空間的設計，透過平面、立面、剖面等二維圖面表達出來。</p>
            <p>這套方法用了幾百年，當然有它的道理。</p>
            <p>但隨著電腦輔助設計、資料結構與物件導向等概念逐漸發展，建築界開始思考一個問題：</p>
            <p className="font-semibold text-white/90">為什麼建築師要畫幾百張圖，而不是直接在電腦裡建立一棟完整的建築物，再從中產生需要的圖面？</p>
            <p>這就是 BIM 早期最重要的思想之一。</p>
            <p>其實早在1970年代，學界就已經開始研究這類建築資訊系統。</p>
            <p>只是當時的電腦運算能力、軟體技術與資料交換環境，都還不足以讓它大規模普及。</p>
            <p>後來電腦越來越快，記憶體越來越便宜，軟體也越來越成熟，BIM 才逐漸走向實務應用。</p>
            <p>原本一根簡單的柱子，在傳統 CAD 的平、立、剖面圖裡，可能只是幾個四方形，加上一些尺寸標註。</p>
            <p>但在 BIM 裡，它不再只是幾條線。</p>
            <p>它是一個具有資訊的物件（Object）。</p>
            <p>包含尺寸（Geometry）、位置（Location）、材料（Material）、數量（Quantity）、構件間的關係（Relationships），甚至成本（Cost）、施工階段等資訊。</p>
            <p>從電腦的角度來看，儲存這些額外資訊所需要的容量，相較於今天的運算與儲存能力，根本不是什麼大問題。</p>
            <p>真正困難的，是如何讓資訊正確、完整，而且能夠持續更新、交換與使用。</p>
            <p>如果做得好，效益可能非常驚人。</p>
            <p>假設一個年產值上兆元的產業，整體生產效率只提升千分之一，對應的產值規模就已經是十億元等級。</p>
            <p>當然，這不代表直接省下十億元成本，但足以說明：**即使是很小幅度的效率改善，放在如此龐大的產業裡，都可能創造可觀的經濟價值。**</p>
            <p>照理說，BIM 應該是一項非常值得投資的技術。</p>
            <p>事實上，政府也推動 BIM 很多年了。</p>
            <p>公共工程、教育訓練、示範計畫、建模規範，各種方式都試過。</p>
            <p>業界也不乏把 BIM 做得非常好的建築師事務所、工程顧問公司與專業團隊。</p>
            <p>但問題是：</p>
            <p className="font-semibold text-white/90">模型做出來了，然後呢？</p>
            <p>有多少資訊真正進入施工現場？</p>
            <p>有多少模型能直接協助工班安排工作？</p>
            <p>有多少設計變更，可以自動反映到採購、加工、排程與成本？</p>
            <p>又有多少工程，真正因為 BIM 而縮短工期、降低浪費、改善品質？</p>
            <p>如果用100分來評分，台灣營造業在實務上有效運用 BIM、真正產生整體施工效率的程度，我主觀拍腦袋地說，大概只有5分。</p>
            <p>這當然不是什麼科學調查，只是我從工程實務觀察得到的感受。</p>
            <p>有人可能會說：</p>
            <p>不對啊！</p>
            <p>現在大家不都用電腦了嗎？</p>
            <p>設計師用 AutoCAD、Revit 畫圖。</p>
            <p>結構工程師用軟體計算應力。</p>
            <p>估算人員用 Excel 計算數量。</p>
            <p>施工日誌用 Word 或各種電子系統填寫。</p>
            <p>現場人員也都拿著手機，LINE 群組一天幾百則訊息。</p>
            <p>數位化不是已經很徹底了嗎？</p>
            <p className="font-semibold text-white/90">這恰恰就是問題所在。</p>
            <p>大家都有數位工具。</p>
            <p>但大家的數位資訊，並沒有真正流通。</p>
            <p>設計師有設計師的檔案。</p>
            <p>營造廠有營造廠的進度表。</p>
            <p>分包商有分包商的施工紀錄。</p>
            <p>工地主任有自己的 Excel。</p>
            <p>師傅有自己的經驗，還有手機裡的 LINE 對話紀錄。</p>
            <p>每個人都數位化了。</p>
            <p>但整個工程，仍然是破碎的。</p>
            <p>資訊是片斷的（Fragmented），沒有串成完整的工作流程（Workflow），自然也就沒有綜效。</p>
            <p>設計變更了，現場不一定同步知道。</p>
            <p>材料數量改了，採購可能還在用上一版的資料。</p>
            <p>同一個數字，甚至要在不同系統裡重複輸入好幾次。</p>
            <p className="font-semibold text-white/90">每個人都在用電腦，但整個產業不一定因此變得更有效率。</p>
            <p>這裡有一個很重要的觀念。</p>
            <p className="font-semibold text-white/90">數位化（Digitization），不等於數位轉型（Digital Transformation）。</p>
            <p>把紙本變成電子檔，只是改變資訊的載體。</p>
            <p>把分散的資訊串成工作流程，讓不同專業、不同公司能夠協同作業，才有機會真正改變產業的運作方式。</p>
            <p>但營造業的困難，恐怕不只是技術。</p>
            <p>一個工程分成幾十包，每個參與者都有自己的成本、責任與利益。</p>
            <p>誰負責建立資料？誰負責維護？誰付錢？誰得到好處？</p>
            <p>如果 A 公司投入成本，效率改善的好處卻落在 B 公司身上，A 自然缺乏持續投資的誘因。</p>
            <p>所以，BIM 推了這麼多年，真正的瓶頸，可能不是軟體不夠先進，而是整個產業的分工與資訊整合方式。</p>
            <p className="font-semibold text-white/90">BIM 的價值，不在於模型做得多漂亮，而在於資訊能不能真正進入施工流程。</p>
            <p>設計能不能直接連結採購、製造與施工？</p>
            <p>現場的經驗能不能回饋到下一個工程？</p>
            <p>如果不能，再漂亮的 BIM，也只是另一個數位孤島。</p>
            <p>這也是我認為 ConTech（Construction Technology，營建科技）真正值得投入的地方。</p>
            <p>不是為了數位化而數位化。</p>
            <p>也不是把 AI、BIM、Digital Twin 這些熱門名詞全部放進簡報裡。</p>
            <p>而是回到最基本的問題：</p>
            <p className="font-semibold text-white/90">能不能做得更多？</p>
            <p className="font-semibold text-white/90">能不能做得更快？</p>
            <p className="font-semibold text-white/90">能不能做得更好？</p>
            <p className="font-semibold text-white/90">能不能做得更省？</p>
            <p>科技如果不能改善這四件事情，對產業的價值就很有限。</p>
            <p className="font-semibold text-white/90">營造業真正缺少的，或許不是更多數位工具，而是讓資訊、工具與人，真正協同工作的能力。</p>
            <p>這才是 BIM 最初的理想，也是 ConTech 應該努力的方向。</p>
          </div>
        </article>
      </main>
    </div>
  );
}

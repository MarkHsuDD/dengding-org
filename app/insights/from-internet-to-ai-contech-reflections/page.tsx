import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";

const title = "一個ConTech創辦人的思考";
const description = "走過網路泡沫，再看 AI 浪潮。從營造現場到課堂，思考工具之外，人腦與經驗真正能帶來的價值。";
const url = "https://www.dengding.org/insights/from-internet-to-ai-contech-reflections";
const date = "2026-11-16";

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
                總經理筆記
              </span>
              <time dateTime={date} className="text-white/40">2026.11.16</time>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight lg:text-6xl">{title}</h1>
          </header>

          <div className="mt-12 space-y-6 text-[17px] leading-8 text-white/72">
            <p>大家都知道，AI 發展一日千里。百工百業都在講 AI、用 AI，工程界當然也不例外。</p>
            <p>身為經歷過個人電腦與網路革命的五年級生，國中還在用錄音帶當媒介，替 Apple II 灌入幾百 K 的小遊戲。到了大學，已經看見網路的濫觴。</p>
            <p>Gopher、FTP、Telnet、MUD、IRC……現在還有多少人記得？</p>
            <p>回頭看，當時就像原始人發現火種一樣驚豔。人類文明，好像要進化到另一個層次。</p>
            <p>資金瘋狂追逐，最後以 .com bubble 劃下逗點——不是句點。</p>
            <p>泡沫剛破的那幾年，我在美國，每天還聽得到電視廣告裡那聲 Yahoo～～～～。但今天，雅虎，也早已褪色了。</p>
            <p>時代洪流往前推，技術一代換一代。網路最後確實改變了人類的生活方式。但在技術翻轉的當下，眼前的成功未必持久，一時的挫敗，也未必是真的失敗。</p>
            <p>以古鑑今，我一直在想：</p>
            <p>這波 AI，最終會以什麼樣貌改變下一代的生活？</p>
            <p>或者至少，憑著親身走過網路浪潮的經驗，在這波洪流裡不要走錯路，找到人腦和經驗真正能帶進來的價值。</p>
            <p>當然，達康和 AI 未必能完全類比。</p>
            <p>網路打破的是人類幾千年來溝通的方式與效率；AI 用數學模擬人腦、甚至超越人腦，它帶來的可能不只是一條新管道，而是整個社會運作方式的翻轉。</p>
            <p>單從財務看也不一樣：光纖折舊期很長，GPU 兩三年就迭代。AI 基礎建設帶起的資本紅利，大概會走得比達康久得多。</p>
            <p>但身為 ConTech startup 的 founder，我關心的不是資本市場的起伏，而是 AI 會怎麼改變營造業。</p>
            <p>我不是營造出身。理學院畢業，出社會後大部分時間待在金融業。剛踏進營造這一行，驚訝和驚喜一樣多。</p>
            <p>每家營造公司、每個工務所都有電腦，電腦裡有試算表、有 AutoCAD，但大多僅止於個人工具。</p>
            <p>對經營來說，它的意義大概就是：半透紙、藍晒圖，變成了電子檔。</p>
            <p>形式從類比變成數位，專案推進的流程，卻幾乎沒變。</p>
            <p>數位轉型？那是什麼？</p>
            <p>去年，我重返校園，進入中山大學攻讀數位與永續金融碩士。</p>
            <p>一開始，我就被二十出頭的「同學」嚇到——他們比我女兒還小。</p>
            <p>三、四年前我要花兩到四個整天才做得完的商業計畫，他們按幾個按鈕，十分鐘就生成一份漂亮好幾倍的 BP，references 一應俱全。期中、期末的 PPT，更是圖表豐富、配色和諧。</p>
            <p>但如果沒有深度思考，再強大的 AI 工具，反而會變成障礙。</p>
            <p>漂漂亮亮、洋洋灑灑的文件，如果沒有傳遞有效的資訊，基本上就是垃圾。</p>
            <p className="font-semibold text-white/85">你在探討什麼？（What）</p>
            <p className="font-semibold text-white/85">問題的邊界在哪？（Where）</p>
            <p className="font-semibold text-white/85">問題的根源是什麼？（Why）</p>
            <p className="font-semibold text-white/85">解決方案是什麼？（How）</p>
            <p>時代不同，科技背景不同，推動文明往前走的底層邏輯，其實沒變。</p>
            <p>一個 coder，如果不去想痛點本身，只用 AI 加速交付，沒弄懂問題從哪裡來，很快就會被淘汰。</p>
            <p>一個 designer，如果能讓作品承接文化、開啟對話、啟發靈感、創造形而上的感受，AI 不但取代不了他，反而會放大他的影響力。</p>
            <p>工地也是一樣。</p>
            <p>只會叫 AI 生圖、卻不懂受力和現場的人，會被 AI 取代；懂現場、懂問題的人，有機會被 AI 放大價值。</p>
            <p>寫到這裡，似乎還沒真正談到 AI 在 ConTech 的應用。</p>
            <p>下一期，來聊聊工地裡那些「看起來數位、其實沒變」的流程，以及 AI 真正切得進去的地方。</p>
          </div>
        </article>
      </main>
    </div>
  );
}

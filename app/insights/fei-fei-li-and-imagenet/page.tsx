import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";

const title = "李飛飛與 ImageNet：莫忘初心";
const description =
  "從邁阿密海報區的一支紀念筆，到 ImageNet 改變電腦視覺，李飛飛一路上的選擇，讓我重新思考什麼是莫忘初心。";
const url = "https://www.dengding.org/insights/fei-fei-li-and-imagenet";
const date = "2026-11-10";

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
              <time dateTime={date} className="text-white/40">2026.11.10</time>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight lg:text-6xl">{title}</h1>
          </header>

          <div className="mt-12 space-y-6 text-[17px] leading-8 text-white/72">
            <p>
              2009 年，CVPR 在邁阿密海灘的楓丹白露酒店舉行。當時沒有人知道，這一屆後來會被視為人類 AI 發展的重要轉折點。
            </p>
            <p>
              邁阿密海灘是邁阿密市東方的離岸沙洲島，有點像高雄的旗津。楓丹白露酒店就坐落在這座沙洲島上，往東望去，是一望無際的北大西洋。
            </p>
            <p>
              那一屆的最佳論文獎，由何愷明、孫劍、湯曉鷗以《Single Image Haze Removal Using Dark Channel Prior》獲得。
            </p>
            <p>
              當聚光燈集中在講台上的學者時，海報區裡有一位 33 歲的年輕研究者。她和團隊為了在人潮中吸引目光，準備了一批印著研究計畫標誌的紀念筆，在現場發送。
            </p>
            <p>
              可以想見，鎂光燈與眾人的焦點多半在台上發表的學者身上。海報區一角的這個計畫，起初並未受到太多關注。
            </p>
            <p>
              她仍然熱切地向經過的人介紹自己的研究。為什麼我會說，她願意放下眼前的利益，追求心裡相信的事？因為這已經是她又一次做出這樣的選擇。
            </p>
            <p>
              今年九月，AI 界有個大新聞。蘇姿丰領軍的 AMD 宣布簽署協議，將以約 82 億美元收購李飛飛共同創辦的 World Labs，並規劃在交易完成後由李飛飛出任執行副總裁兼首席科學家。
            </p>
            <p>
              2009 年在邁阿密海報區發筆的那位研究者，就是李飛飛。筆上印的是 ImageNet。
            </p>
            <p>
              如果故事從今年九月的收購消息談起，相信大家會有完全不同的感受。「又一個搭上 AI 浪潮的億萬富豪！」「運氣真好！」
            </p>
            <p>
              但人類文明的每一次推進，都是由那些充滿好奇、滿腔熱忱、不計現實利益的人促成的。AI 也是。
            </p>
            <p>
              在前三次發射失敗後，Elon Musk 帶領 SpaceX 在馬紹爾群島進行第四次發射。這一次，Falcon 1 終於進入軌道。
            </p>
            <p>
              黃仁勳帶領 NVIDIA 投入 CUDA，讓原本用於繪圖的 GPU 也能用來做科學運算。
            </p>
            <p>
              人類科技史上有太多這樣的「尤里卡」時刻。傳說阿基米德在浴缸裡想到如何利用排水量解題時，喊出「尤里卡」（Eureka）。正是這些時刻，點亮了今日的文明。
            </p>
            <p>
              李飛飛第一次落地紐約 JFK 機場時，媽媽身上只剩 20 美元。爸爸本來要來接她們，二手車卻在路上拋錨了。
            </p>
            <p>
              家裡經濟困難，她得一邊在家裡經營的乾洗店幫忙，一邊兼顧學業。從普林斯頓物理系畢業後，她到 Caltech 攻讀博士，一頭栽進當年主流並不看好的方向，想讓電腦「看懂」世界。
            </p>
            <p>
              博士班期間，媽媽病了，需要龐大的醫療費。她偷偷跑去麥肯錫面試，拿到了高薪職位。
            </p>
            <p>
              媽媽知道後，對她說：「我再說最後一次，我們走到這裡，不是讓你現在放棄。」
            </p>
            <p>最後，她留在了學校。</p>
            <p>
              之後她去了伊利諾大學厄巴納–香檳分校，回到普林斯頓推動 ImageNet，再到史丹佛，後來與夥伴創辦 World Labs。
            </p>
            <p>
              一路上，她靠著自己的堅持與家人的支持走下去，在人工智慧影像辨識領域做出了最關鍵的貢獻之一。
            </p>
            <p>人生的終局，是一連串選擇的結果。</p>
            <p>
              「莫忘初心」是很多人掛在嘴上的一句話。但人生有太多考驗，很容易讓我們在名利中迷失。
            </p>
            <p>保有對未知世界探索的熱情，在困境中仍保持良善與慈悲，當然很不容易。</p>
            <p>李飛飛的人生歷程讓我深受啟發。</p>
            <p>
              我也希望，無論最後在世俗的尺度上算不算成功，我和夥伴都能一起走下去。對未知保有好奇，在困難的時候，仍然願意善待身邊的人。
            </p>
          </div>

          <section className="mt-12 border-t border-white/10 pt-6 text-sm leading-7 text-white/60">
            <h2 className="font-semibold text-white">資料來源</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 [&_a]:text-[#fbec96] [&_a]:underline [&_a]:underline-offset-4">
              <li><a href="https://people.csail.mit.edu/kaiming/cvpr09/index.html">CVPR 2009 最佳論文</a></li>
              <li><a href="https://ieeexplore.ieee.org/abstract/document/5206848/">IEEE 的 ImageNet 論文</a></li>
              <li><a href="https://logicmag.io/commons/lines-of-sight/">Logic Magazine〈Lines of Sight〉</a></li>
              <li><a href="https://us.macmillan.com/books/9781250911131/theworldsisee/">李飛飛回憶錄《The Worlds I See》</a></li>
              <li><a href="https://hai.stanford.edu/people/fei-fei-li">史丹佛大學的李飛飛學經歷</a></li>
              <li><a href="https://ir.amd.com/news-events/press-releases/detail/1299/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute">AMD 收購協議公告</a></li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}

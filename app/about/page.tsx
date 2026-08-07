import Link from "next/link";
import { ArrowRight, Cpu, Database, Recycle, Users } from "lucide-react";
import Navbar from "../components/Navbar";

const challenges = [
  {
    icon: Users,
    title: "缺工",
    description: "降低模板工程對高度熟練人力與長期師徒培訓的依賴。",
  },
  {
    icon: Recycle,
    title: "高廢棄",
    description: "提高模板材料的標準化與重複使用率，降低一次性耗材。",
  },
  {
    icon: Database,
    title: "低數位化",
    description: "把現場經驗轉成可記錄、可追蹤、可複製的工程流程。",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b171a] text-white">
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#fbec96]">ABOUT DENGDING</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight lg:text-7xl">
            讓模板工程從仰賴經驗，走向標準化、數據化與可複製。
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
            登鼎智慧工程以 Smart Formwork System（SFS）為核心，整合系統模板、智慧配模與專利非標嵌補方案，
            回應台灣營建現場的缺工、材料耗損與數位化不足等挑戰。
          </p>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold text-[#fbec96]">我們關注的問題</p>
            <h2 className="mt-3 text-3xl font-semibold lg:text-4xl">把施工 know-how 變成可以複製的系統</h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {challenges.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0b171a]/70 p-7">
                  <item.icon className="mb-5 text-[#fbec96]" size={30} />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 rounded-[2rem] border border-[#fbec96]/20 bg-[#15353d]/55 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <Cpu className="mb-5 text-[#fbec96]" size={34} />
              <h2 className="text-3xl font-semibold">深入了解 SFS 智慧模板系統</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                從智慧模板規劃、系統模板導入，到非標準區域的處理方式，了解登鼎如何把模板工程流程系統化。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/sfs"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#fbec96] px-6 py-3 font-semibold text-[#15353d]"
              >
                了解 SFS <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-2xl border border-white/20 px-6 py-3 text-white hover:border-[#fbec96]/60"
              >
                聯絡我們
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

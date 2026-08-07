"use client";
import Navbar from "./components/Navbar";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Cpu,
  Recycle,
  Layers3,
  ShieldCheck,
  Mail,
  MapPin,
  Users,
  Trash2,
  Database,
} from "lucide-react";

const problemCards = [
  {
    icon: Users,
    title: "缺工",
    desc: "模板工程高度依賴技術工，師徒制養成時間長，不易引入年輕勞動力。",
  },
  {
    icon: Trash2,
    title: "大量廢棄物",
    desc: "傳統工法材料周轉性差，易產生大量廢棄物，增加廢棄物處置與管理成本。",
  },
  {
    icon: Database,
    title: "低數位化",
    desc: "施工知識長期依賴個人經驗，難以標準化、數據化與複製擴張。",
  },
];

const techCards = [
  {
    icon: Cpu,
    title: "智慧模板規劃",
    desc: "將 DWG / DXF 圖面轉換為模板配置方案，降低人工配模時間與施工錯誤率。",
  },
  {
    icon: Layers3,
    title: "智慧系統模板",
    desc: "以標準化、可重複使用的系統模板，降低木模依賴並提升施工效率。",
  },
  {
    icon: Recycle,
    title: "專利非標嵌補件",
    desc: "解決台灣建築高度客製化下的非標準件問題，讓系統模板更容易導入。",
  },
];

const kpis = [
  {
    title: "培訓系統",
    value: "兩年 → 7 天",
    desc: "快速下工地",
  },
  {
    title: "施工效率",
    value: "+35.6%",
    desc: "標準化施工流程",
  },
  {
    title: "木模耗材",
    value: "-77.5%",
    desc: "降低森林砍伐",
  },
  {
    title: "設計變更對應",
    value: "30天 → 5天",
    desc: "快速修正與導入",
  },
];

const projects = ["台糖橋中社宅", "高科實校", "華新能源"];

export default function DengDingHomepage() {
  return (
    <div className="min-h-screen bg-[#0b171a] text-white overflow-hidden">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,236,150,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(251,236,150,0.07)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#cda734]/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-[#15353d] blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fbec96]/30 bg-[#fbec96]/10 px-4 py-2 text-sm text-[#fbec96] mb-6">
              <ShieldCheck size={16} /> Smart Formwork System
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
              用科技，<br />
              重新定義模板產業。
            </h1>

            <p className="mt-6 text-lg text-white/70 leading-8 max-w-xl">
              以 Smart Formwork System（SFS）解決缺工、廢棄物與低數位化三大挑戰，
              將傳統模板工程轉化為可數據化、可標準化、可複製的智慧施工流程。
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/sfs"
                className="rounded-2xl bg-gradient-to-r from-[#cda734] to-[#fbec96] px-6 py-3 text-[#15353d] font-semibold flex items-center gap-2 shadow-xl shadow-[#cda734]/10"
              >
                了解 SFS 系統 <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-white/20 px-6 py-3 text-white/90 hover:border-[#fbec96]/60 transition"
              >
                工程合作洽詢
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3]">
                <img
                  src="/SFS001.jpg"
                  alt="DengDing Smart Formwork System"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

                <div className="absolute top-8 left-8">
                  <div className="text-[#d8b15a] text-sm tracking-widest uppercase">
                    DengDing Smart ConTech
                  </div>

                  <div className="text-[#f3cf6d] text-7xl font-bold leading-none mt-2">
                    SFS
                  </div>

                  <div className="text-white text-xl font-medium mt-2">
                    Smart Formwork System
                  </div>

                  <div className="w-40 h-[2px] bg-[#d8b15a] mt-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <div className="text-[#fbec96] text-sm font-semibold mb-3">01 / Problem</div>
            <h2 className="text-3xl lg:text-4xl font-semibold">台灣模板產業的三大挑戰</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <card.icon className="text-[#fbec96] mb-5" size={32} />
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-white/60 leading-7">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <div className="text-[#fbec96] text-sm font-semibold mb-3">02 / SFS</div>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              登鼎 Smart Formwork System
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {techCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:border-[#fbec96]/40 transition"
              >
                <card.icon className="text-[#fbec96] mb-5" size={32} />
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-white/60 leading-7">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-10">
            <div className="text-[#fbec96] text-sm font-semibold mb-3">
              03 / Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8">導入成果</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {kpis.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0b171a]/70 p-6 min-h-[160px] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-white/50 text-sm mb-3">{item.title}</div>
                    <div className="text-3xl font-semibold text-[#fbec96] whitespace-nowrap">
                      {item.value}
                    </div>
                  </div>
                  <div className="text-white/45 text-sm mt-4">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <div className="text-[#fbec96] text-sm font-semibold mb-3">
              04 / Projects
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl lg:text-4xl font-semibold">案例實績</h2>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 text-[#fbec96] hover:text-white transition"
              >
                查看完整案例 <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <Building2 className="text-[#fbec96] mb-5" size={32} />
                <h3 className="text-xl font-semibold mb-3">{project}</h3>
                <p className="text-white/60 leading-7">
                  系統模板導入案例，驗證標準化施工流程與現場執行成果。
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#15353d] to-[#0b171a] p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-[#fbec96] text-sm font-semibold mb-3">
                05 / Contact
              </div>
              <h2 className="text-4xl font-semibold leading-tight">
                讓模板工程，進入智慧化與標準化的新階段。
              </h2>
              <p className="mt-5 text-white/65 leading-8">
                歡迎營造公司、建設公司、建築師、模主、工班洽詢合作。
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b171a]/70 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-[#fbec96]" />
                <div>
                  <div className="font-semibold">工程與合作洽詢</div>
                  <div className="text-sm text-white/50">
                    Contact DengDing Smart ConTech
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white/65">
                <div className="flex gap-3">
                  <Mail className="text-[#fbec96]" size={18} /> contact@dengding.org
                </div>
                <div className="flex gap-3">
                  <MapPin className="text-[#fbec96]" size={18} /> Kaohsiung, Taiwan
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 flex w-full items-center justify-center rounded-2xl bg-white text-[#15353d] py-3 font-semibold"
              >
                立即聯絡
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

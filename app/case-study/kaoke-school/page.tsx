import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  MapPin,
  School,
  Layers3,
  HardHat,
  Ruler,
} from "lucide-react";

const facts = [
  { icon: MapPin, label: "高雄市橋頭區" },
  { icon: School, label: "公共工程・學校" },
  { icon: Building2, label: "4F 校舍" },
  { icon: HardHat, label: "施工中 Ongoing" },
];

export default function KaokeSchoolCaseStudy() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0f2328] text-white">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[820px] overflow-hidden">
          <Image
            src="/projects/kaoke-school/case3-cover.jpg"
            alt="高科實校建築設計模擬圖"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#0f2328]/58" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2328]/90 via-[#0f2328]/55 to-[#0f2328]/20" />

          <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl flex-col justify-center px-8 pt-28">
            <Link
              href="/case-study"
              className="mb-12 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-black/10 px-6 py-3 text-white/85 backdrop-blur transition hover:border-[#fbec96] hover:text-[#fbec96]"
            >
              <ArrowLeft size={18} />
              回到案例實績
            </Link>

            <div className="flex flex-wrap items-center gap-4">
              <p className="tracking-[0.4em] text-[#fbec96]">CASE STUDY 03</p>
              <span className="rounded-full border border-[#fbec96]/45 bg-[#fbec96]/10 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-[#fbec96]">
                ONGOING
              </span>
            </div>

            <h1 className="mt-7 max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
              高科實校
            </h1>

            <p className="mt-7 max-w-4xl text-2xl leading-relaxed text-white/80 md:text-3xl">
              國高中校舍全系統鋼模規劃與施工
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-lg backdrop-blur"
                >
                  <fact.icon size={20} className="text-[#fbec96]" />
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 inline-flex w-fit rounded-full border border-white/20 bg-black/20 px-5 py-2 text-sm text-white/65 backdrop-blur">
              Hero image: BIM / design visualization
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="border-y border-white/10 bg-[#152d32]">
          <div className="mx-auto max-w-7xl px-8 py-28">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="tracking-[0.35em] text-[#fbec96]">PROJECT OVERVIEW</p>
                <h2 className="mt-6 text-5xl font-bold leading-tight">
                  從校舍整體規劃，導入全系統鋼模施工
                </h2>

                <div className="mt-8 h-[2px] w-24 bg-[#fbec96]" />

                <div className="mt-10 space-y-7 text-xl leading-9 text-white/72">
                  <p>
                    高科實校位於高雄市橋頭區，屬公共工程學校建築，
                    本階段以國高中校舍為主要施工範圍，建築樓層為 4F。
                  </p>
                  <p>
                    登鼎負責國高中校舍全系統鋼模規劃與施工，
                    從施工前模板配置、特殊節點與介面整合開始，
                    以系統化方式將設計資訊轉化為現場可執行的鋼模施工方案。
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#0f2328] p-2 shadow-2xl">
                <Image
                  src="/projects/kaoke-school/case3-masterplan.jpg"
                  alt="高科實校校園整體配置模擬圖"
                  width={2048}
                  height={817}
                  className="h-auto w-full rounded-[28px]"
                />
                <div className="px-5 py-4 text-sm tracking-[0.12em] text-white/50">
                  BIM / CAMPUS MASTERPLAN VISUALIZATION
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BIM PLANNING ================= */}
        <section className="mx-auto max-w-7xl px-8 py-28">
          <div className="mb-14 max-w-4xl">
            <p className="tracking-[0.35em] text-[#fbec96]">SYSTEM PLANNING</p>
            <h2 className="mt-5 text-5xl font-bold">BIM 整合與鋼模配置</h2>
            <p className="mt-7 text-xl leading-9 text-white/65">
              施工前依校舍建築模型進行系統鋼模配置與施工介面整合，
              讓標準模組、特殊節點與收邊方式在進場前即納入整體規劃。
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[32px] border border-white/10 bg-[#153137] p-2">
              <Image
                src="/projects/kaoke-school/case3-bim-overview.png"
                alt="高科實校 BIM 校舍整體模型"
                width={1543}
                height={1002}
                className="h-full w-full rounded-[26px] object-cover"
              />
              <figcaption className="px-5 py-4 text-sm tracking-[0.12em] text-white/50">
                BIM MODEL・校舍整體配置
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-[32px] border border-white/10 bg-[#153137] p-2">
              <Image
                src="/projects/kaoke-school/case3-bim-building.png"
                alt="高科實校 BIM 校舍長向模型"
                width={1396}
                height={834}
                className="h-full w-full rounded-[26px] object-cover"
              />
              <figcaption className="px-5 py-4 text-sm tracking-[0.12em] text-white/50">
                BIM MODEL・國高中校舍配置
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ================= NO TIMBER CLOSING ================= */}
        <section className="border-y border-white/10 bg-[#122a30]">
          <div className="mx-auto max-w-7xl px-8 py-28">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <p className="tracking-[0.35em] text-[#fbec96]">SFS APPROACH</p>
                <h2 className="mt-5 text-5xl font-bold leading-tight">無木模收邊</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
                <div className="rounded-[30px] border border-[#fbec96]/20 bg-white/[0.04] p-8">
                  <Layers3 size={34} className="text-[#fbec96]" />
                  <h3 className="mt-6 text-2xl font-semibold">全系統鋼模規劃</h3>
                  <p className="mt-4 text-lg leading-8 text-white/65">
                    以系統鋼模為主要施工邏輯，將模板配置與特殊介面提前整合，
                    降低傳統現場木作收邊的依賴。
                  </p>
                </div>

                <div className="rounded-[30px] border border-[#fbec96]/20 bg-white/[0.04] p-8">
                  <Ruler size={34} className="text-[#fbec96]" />
                  <h3 className="mt-6 text-2xl font-semibold">施工前介面整合</h3>
                  <p className="mt-4 text-lg leading-8 text-white/65">
                    透過模型與模板規劃提前確認尺寸、轉折與接合關係，
                    讓現場施工依系統配置持續推進。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ON SITE ================= */}
        <section className="mx-auto max-w-7xl px-8 py-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-[34px] border border-[#fbec96]/20 bg-[#153137] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/projects/kaoke-school/case3-site-column.jpg"
                alt="高科實校現場圓柱鋼模施工實景"
                width={1477}
                height={1108}
                className="w-full rounded-[28px] object-cover"
              />
              <div className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                <span className="tracking-[0.12em] text-white/50">ON-SITE CONSTRUCTION</span>
                <span className="rounded-full bg-[#fbec96] px-4 py-1.5 font-semibold text-[#15353d]">
                  現場實景
                </span>
              </div>
            </div>

            <div>
              <p className="tracking-[0.35em] text-[#fbec96]">CONSTRUCTION</p>
              <h2 className="mt-5 text-5xl font-bold leading-tight">鋼模系統進場施工</h2>
              <div className="mt-8 h-[2px] w-24 bg-[#fbec96]" />
              <p className="mt-10 text-2xl leading-relaxed text-white/72">
                本案目前施工中，鋼模系統已陸續進場施作。
                現場可見圓柱鋼模、牆體系統鋼模與支撐作業，並持續依工程進度推進
                校舍牆、柱、梁等系統模板施工與拆模成果。
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <figure className="overflow-hidden rounded-[32px] border border-white/10 bg-[#153137] p-2">
              <Image
                src="/projects/kaoke-school/case3-site-01-20260810.jpg"
                alt="高科實校一樓牆體系統鋼模施工現場"
                width={2048}
                height={1536}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3] w-full rounded-[26px] object-cover"
              />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                <span className="tracking-[0.12em] text-white/50">1F・SYSTEM FORMWORK</span>
                <span className="text-[#fbec96]">現場施工實景 01</span>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-[32px] border border-white/10 bg-[#153137] p-2">
              <Image
                src="/projects/kaoke-school/case3-site-02-20260810.jpg"
                alt="高科實校一樓系統鋼模與柱筋施工現場"
                width={2048}
                height={1536}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3] w-full rounded-[26px] object-cover"
              />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                <span className="tracking-[0.12em] text-white/50">1F・SYSTEM FORMWORK</span>
                <span className="text-[#fbec96]">現場施工實景 02</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ================= STATUS ================= */}
        <section className="border-y border-white/10 bg-[#142b30]">
          <div className="mx-auto max-w-7xl px-8 py-28">
            <p className="tracking-[0.35em] text-[#fbec96]">PROJECT STATUS</p>
            <h2 className="mt-6 text-5xl font-bold">施工持續進行中</h2>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                ["01", "BIM / 模板規劃", "已完成校舍系統鋼模配置與施工介面規劃。"],
                ["02", "現場施工", "系統鋼模持續進場施作，依工程進度推進。"],
                ["03", "成果紀錄", "量化成果與拆模品質將於後續施工階段持續更新。"],
              ].map(([no, title, text]) => (
                <div
                  key={no}
                  className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8"
                >
                  <div className="text-sm tracking-[0.3em] text-[#fbec96]">{no}</div>
                  <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 text-lg leading-8 text-white/60">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-base leading-7 text-white/45">
              本頁僅呈現目前已確認的專案資訊。因工程仍在施工中，暫不揭露尚未完成驗證的工期、效率、成本或品質量化數據。
            </p>
          </div>
        </section>

        {/* ================= BACK ================= */}
        <section className="py-28 text-center">
          <Link
            href="/case-study"
            className="inline-flex rounded-full border border-[#fbec96] px-10 py-5 text-lg text-[#fbec96] transition hover:bg-[#fbec96] hover:text-[#1D363C]"
          >
            ← 返回案例列表
          </Link>
        </section>
      </main>
    </>
  );
}
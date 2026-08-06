import Navbar from "../../components/Navbar";
import Link from "next/link";

const sections = [
  {
    label: "CHALLENGE",
    title: "專案挑戰",
    image: "/projects/qiaozhong/case1-challenge.jpg",
    text: "本案包含大量非直角牆體、轉角及特殊節點。若採傳統木模施工，容易增加現場裁切、尺寸誤差與修補工作，進而影響施工效率與混凝土完成品質。",
  },
  {
    label: "SOLUTION",
    title: "SFS 解決方案",
    image: "/projects/qiaozhong/case1-solution.jpg",
    text: "登鼎導入 SFS 系統模板，並搭配專利嵌補件處理非直角轉角與特殊節點，使模板配置更精準，降低木作修補並提升施工一致性。",
  },
  {
    label: "CONSTRUCTION",
    title: "施工過程",
    image: "/projects/qiaozhong/case1-process.jpg",
    text: "模板配置、支撐系統與施工動線全面標準化，使現場保持整齊、有序、安全，提升安裝效率，也降低現場管理負擔。",
  },
  {
    label: "QUALITY",
    title: "成果與品質",
    image: "/projects/qiaozhong/case1-quality.jpg",
    text: "拆模後混凝土表面平整，梁柱線條清楚，尺寸精度佳，降低後續修補需求，展現穩定的系統模板成型品質。",
  },
];

const impactItems = [
  {
    value: "35.6%",
    label: "施工效率提升",
    note: "Construction efficiency",
  },
  {
    value: "77.5%",
    label: "木模耗材降低",
    note: "Wood formwork reduction",
  },
  {
    value: "90%",
    label: "非直角修補減少",
    note: "Less corner rework",
  },
  {
    value: "High",
    label: "混凝土成型品質",
    note: "Concrete finish quality",
  },
];

export default function QiaozhongPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#1D363C] text-white">
        <section className="relative min-h-screen overflow-hidden">
          <img
            src="/projects/qiaozhong/case1-cover.jpg"
            alt="台糖橋中出租集合住宅"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1D363C] via-[#1D363C]/82 to-[#1D363C]/35" />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pt-28">
            <Link
              href="/case-study"
              className="mb-14 inline-flex w-fit rounded-full border border-white/25 bg-white/5 px-6 py-3 text-white/80 backdrop-blur transition hover:border-[#fbec96] hover:text-[#fbec96]"
            >
              ← 回到案例實績
            </Link>

            <p className="tracking-[0.4em] text-[#fbec96]">
              CASE STUDY
            </p>

            <h1 className="mt-6 max-w-6xl text-6xl font-bold leading-tight md:text-8xl">
              台糖橋中出租集合住宅
            </h1>

            <p className="mt-8 text-3xl text-white/80">
              RC 6F，地下 1F
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              {["Kaohsiung, Taiwan", "RC 6F / B1", "SFS 系統模板", "非直角節點"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-xl backdrop-blur"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section>        {/* ================= Project Overview ================= */}

        <section className="border-y border-white/10 bg-[#162d32]">
          <div className="mx-auto max-w-7xl px-8 py-28">

            <div className="max-w-5xl">

              <p className="tracking-[0.35em] text-[#fbec96]">
                PROJECT OVERVIEW
              </p>

              <h2 className="mt-6 text-5xl font-bold">
                從複雜節點，到標準化施工
              </h2>

              <p className="mt-10 text-2xl leading-relaxed text-white/75">
                本案為台糖橋中出租集合住宅，採用 RC 結構，地上 6 層、地下 1 層。
                建築設計包含大量非直角牆體、特殊轉角及尺寸變化，
                對模板配置與施工精度提出更高要求。
              </p>

              <p className="mt-8 text-2xl leading-relaxed text-white/75">
                登鼎導入 SFS 系統模板，搭配專利嵌補件及模組化配置，
                有效降低木模加工與現場修補，提升施工效率，
                並維持穩定的混凝土成型品質。
              </p>

            </div>

          </div>
        </section>

        {/* ================= Main Sections ================= */}

        {sections.map((item, index) => (

          <section
            key={item.title}
            className="mx-auto max-w-7xl px-8 py-32"
          >

            <div
              className={`grid items-center gap-24 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >

              {/* Image */}

              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >

                <div className="rounded-[34px] border border-[#fbec96]/20 bg-[#163137] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-[28px] object-cover"
                  />

                </div>

              </div>

              {/* Text */}

              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >

                <p className="tracking-[0.35em] text-[#fbec96]">
                  {item.label}
                </p>

                <h2 className="mt-5 text-5xl font-bold leading-tight">
                  {item.title}
                </h2>

                <div className="mt-8 h-[2px] w-24 bg-[#fbec96]" />

                <p className="mt-10 text-2xl leading-relaxed text-white/75">
                  {item.text}
                </p>

              </div>

            </div>

          </section>

        ))}        {/* ================= Project Impact ================= */}

        <section className="border-y border-white/10 bg-[#142b30]">
          <div className="mx-auto max-w-7xl px-8 py-28">

            <p className="tracking-[0.35em] text-[#fbec96]">
              PROJECT IMPACT
            </p>

            <h2 className="mt-6 text-5xl font-bold">
              專案成果
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-4">

              {impactItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[32px] border border-[#fbec96]/25 bg-white/[0.04] p-8"
                >
                  <div className="text-5xl font-bold text-[#fbec96]">
                    {item.value}
                  </div>

                  <div className="mt-6 text-2xl font-semibold">
                    {item.label}
                  </div>

                  <div className="mt-3 text-sm uppercase tracking-[0.25em] text-white/45">
                    {item.note}
                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= Back Button ================= */}

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
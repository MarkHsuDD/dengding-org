import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Layers3,
  Award,
} from "lucide-react";

export default function HuaxinCaseStudy() {
  return (
    <main className="bg-[#0f2328] text-white">

      {/* ================= HERO ================= */}

      <section className="relative h-screen min-h-[780px] overflow-hidden">

        <Image
          src="/projects/Huaxin/case2-cover.jpg"
          alt="Huaxin Offshore Wind Cable Factory"
          fill
          priority
          className="object-cover"
        />

        {/* overlay */}

        <div className="absolute inset-0 bg-[#0f2328]/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2328]/70 via-[#0f2328]/30 to-transparent" />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto w-full max-w-7xl px-8">

            <Link
              href="/case-study"
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-white transition hover:border-[#fbec96] hover:text-[#fbec96]"
            >
              <ArrowLeft size={18} />
              回到案例實績
            </Link>

            <p className="mb-6 tracking-[0.4em] text-[#fbec96] text-lg">
              CASE STUDY
            </p>

            <h1 className="max-w-6xl text-6xl font-bold leading-tight md:text-8xl">
              華新能源
              <br />
              離岸風電海底電纜廠
            </h1>

            <p className="mt-8 text-3xl text-white/90">
              Kaohsiung, Taiwan
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <div className="rounded-2xl border border-white/20 bg-white/8 px-8 py-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Building2 size={20} />
                  <span className="text-2xl font-semibold">
                    Circular Foundation
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/8 px-8 py-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Layers3 size={20} />
                  <span className="text-2xl font-semibold">
                    3200+ Anchor Points
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/8 px-8 py-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Award size={20} />
                  <span className="text-2xl font-semibold">
                    Precision Positioning
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SUMMARY ================= */}

      <section className="py-28">

        <div className="mx-auto max-w-6xl px-8">

          <div className="grid gap-16 lg:grid-cols-[220px_1fr]">

            <div>

              <p className="tracking-[0.35em] text-[#fbec96]">
                PROJECT
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Summary
              </h2>

            </div>

            <div className="space-y-8 text-xl leading-10 text-white/75">

              <p>
                華新麗華高雄離岸風電海底電纜廠，
                為台灣重要能源基礎建設，
                採用大型圓形設備基礎，
                對定位精度、施工效率及混凝土品質皆有極高要求。
              </p>

              <p>
                登鼎導入 SFS 系統模板與精密定位方案，
                有效完成超過 3,200 個定位點施工，
                確保設備安裝精度，同時降低施工誤差與現場調整時間。
              </p>

            </div>

          </div>

        </div>

      </section>      {/* ================= CHALLENGE ================= */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-12">
            <p className="tracking-[0.35em] text-[#fbec96]">
              PROJECT CHALLENGE
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Challenge
            </h2>

            <p className="mt-4 text-white/60 text-xl">
              大型圓形基礎，超過 3,200 個定位點，同時要求毫米級施工精度。
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">

            <Image
              src="/projects/Huaxin/case2-challenge.jpg"
              alt="Challenge"
              width={1800}
              height={1000}
              className="w-full"
            />

          </div>

        </div>

      </section>

      {/* ================= SOLUTION ================= */}

      <section className="py-24 bg-[#122a30]">

        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-12">

            <p className="tracking-[0.35em] text-[#fbec96]">
              SFS SOLUTION
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Solution
            </h2>

            <p className="mt-4 text-white/60 text-xl">
              SFS 精密定位治具與模板系統，大幅提升定位效率與施工一致性。
            </p>

          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">

            <div>

              <Image
                src="/projects/Huaxin/case2-solution.jpg"
                alt="Solution"
                width={1200}
                height={900}
                className="rounded-3xl border border-white/10"
              />

            </div>

            <div className="space-y-8 text-xl leading-10 text-white/75">

              <p>
                SFS 導入專利定位治具與客製模板，
                使每一個 Anchor Point 均能快速完成定位，
                有效降低人工放樣誤差。
              </p>

              <p>
                配合施工流程規劃，
                可同步進行模板配置、鋼筋施工與定位確認，
                有效縮短施工工期。
              </p>

              <div className="rounded-2xl border border-[#fbec96]/30 bg-[#15353d]/60 p-8">

                <h3 className="mb-5 text-2xl font-semibold text-[#fbec96]">
                  SFS Advantages
                </h3>

                <ul className="space-y-4 text-lg text-white/80">

                  <li>• Precision positioning fixture</li>

                  <li>• Custom modular formwork</li>

                  <li>• Faster installation workflow</li>

                  <li>• Reduced cumulative tolerance</li>

                  <li>• High repeatability</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>      {/* ================= CONSTRUCTION PROCESS ================= */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-12">

            <p className="tracking-[0.35em] text-[#fbec96]">
              CONSTRUCTION
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Construction Process
            </h2>

            <p className="mt-4 text-white/60 text-xl">
              精密放樣、定位、模板施工與混凝土澆置，依序完成大型圓形設備基礎。
            </p>

          </div>

          <Image
            src="/projects/Huaxin/case2-process.jpg"
            alt="Construction Process"
            width={1800}
            height={1000}
            className="w-full rounded-3xl border border-white/10"
          />

        </div>

      </section>

      {/* ================= FINAL QUALITY ================= */}

      <section className="py-24 bg-[#122a30]">

        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-12">

            <p className="tracking-[0.35em] text-[#fbec96]">
              FINAL RESULT
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Final Quality & Results
            </h2>

            <p className="mt-4 text-white/60 text-xl">
              完成大型圓形設備基礎，提供高精度設備安裝平台。
            </p>

          </div>

          <Image
            src="/projects/Huaxin/case2-quality.jpg"
            alt="Final Quality"
            width={1800}
            height={1000}
            className="w-full rounded-3xl border border-white/10"
          />

        </div>

      </section>      {/* ================= PROJECT HIGHLIGHTS ================= */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="tracking-[0.35em] text-[#fbec96]">
              PROJECT HIGHLIGHTS
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Key Achievements
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-[#15353d]/60 p-10 text-center backdrop-blur">

              <div className="text-6xl font-bold text-[#fbec96]">
                3200+
              </div>

              <p className="mt-4 text-lg text-white/70">
                Precision Positioning Points
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#15353d]/60 p-10 text-center backdrop-blur">

              <div className="text-6xl font-bold text-[#fbec96]">
                Ø
              </div>

              <p className="mt-4 text-lg text-white/70">
                Circular Foundation
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#15353d]/60 p-10 text-center backdrop-blur">

              <div className="text-6xl font-bold text-[#fbec96]">
                SFS
              </div>

              <p className="mt-4 text-lg text-white/70">
                Precision Fixture System
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#15353d]/60 p-10 text-center backdrop-blur">

              <div className="text-6xl font-bold text-[#fbec96]">
                ✓
              </div>

              <p className="mt-4 text-lg text-white/70">
                Completed Successfully
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <section className="pb-28">

        <div className="mx-auto max-w-7xl px-8">

          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-[#fbec96]/20 bg-[#15353d]/60 px-10 py-12 md:flex-row">

            <div>

              <p className="text-3xl font-bold">
                Explore More Case Studies
              </p>

              <p className="mt-3 text-white/60">
                Discover more SFS applications across residential,
                industrial and infrastructure projects.
              </p>

            </div>

            <Link
              href="/case-study"
              className="inline-flex items-center gap-3 rounded-full border border-[#fbec96] px-8 py-4 text-lg font-medium text-[#fbec96] transition hover:bg-[#fbec96] hover:text-[#15353d]"
            >
              Back to Case Studies
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
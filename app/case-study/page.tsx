import Navbar from "../components/Navbar";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "台糖橋中出租集合住宅",
    subtitle: "Qiaozhong Residential Project",
    location: "Kaohsiung, Taiwan",
    image: "/projects/qiaozhong/case1-hero.jpg",
    href: "/case-study/qiaozhong",
    description:
      "大量非直角牆體與特殊節點，導入 SFS 系統模板及專利嵌補件，大幅提升施工效率與混凝土成型品質。",
    tags: [
      "Residential",
      "RC 6F",
      "SFS Formwork",
    ],
  },

  {
    id: "02",
    title: "華新能源｜離岸風電海底電纜廠",
    subtitle: "Offshore Wind Cable Factory",
    location: "Kaohsiung, Taiwan",
    image: "/projects/Huaxin/case2-cover.jpg",
    href: "/case-study/huaxin",
    description:
      "華新能源離岸風電海底電纜廠為大型工業建設專案，設備基礎超過 3,200 個精密定位點，導入 SFS 精密定位治具與模板系統，確保施工精度與效率。",
    tags: [
      "Industrial",
      "3200+ Points",
      "Precision Fixture",
    ],
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#1D363C] text-white">

        {/* ================= HERO ================= */}

        <section className="border-b border-white/10">

          <div className="mx-auto max-w-7xl px-8 py-28">

            <p className="tracking-[0.4em] text-[#fbec96]">
              CASE STUDIES
            </p>

            <h1 className="mt-6 text-7xl font-bold">
              SFS 應用案場 Projects Selections
            </h1>

            <p className="mt-10 max-w-4xl text-2xl leading-relaxed text-white/70">
              
              Every project is a validation of the SFS System.
              From residential buildings to industrial facilities,
              each case demonstrates how DengDing transforms complex
              construction challenges into standardized, efficient,
              and high-quality execution.
            </p>

          </div>

        </section>

        {/* ================= Projects ================= */}

        <section className="mx-auto max-w-7xl px-8 py-20 space-y-24">

          {projects.map((project, index) => (

            <Link
              key={project.id}
              href={project.href}
              className="group block overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] transition duration-500 hover:border-[#fbec96]/40 hover:bg-white/[0.05]"
            >

              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >

                {/* Image */}

                <div
                  className={`overflow-hidden ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >

                  <img
  src={project.image}
  alt={project.title}
  className="h-full w-full object-contain bg-[#243c42] transition duration-700 group-hover:scale-[1.02]"
/>

                </div>

                {/* Content */}

                <div
                  className={`flex flex-col justify-center p-14 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >

                  <p className="tracking-[0.35em] text-[#fbec96]">
                    CASE {project.id}
                  </p>

                  <h2 className="mt-5 text-5xl font-bold leading-tight">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-xl text-white/60">
                    {project.subtitle}
                  </p>

                  <p className="mt-2 text-white/40">
                    {project.location}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">

                    {project.tags.map((tag) => (

                      <div
                        key={tag}
                        className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-lg"
                      >
                        {tag}
                      </div>

                    ))}

                  </div>

                  <p className="mt-10 text-xl leading-9 text-white/70">
                    {project.description}
                  </p>

                  <div className="mt-12">

                    <span className="inline-flex items-center gap-3 rounded-full border border-[#fbec96] px-8 py-4 text-[#fbec96] transition group-hover:bg-[#fbec96] group-hover:text-[#1D363C]">

                      Read Case Study

                      →

                    </span>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </section>

      </main>
    </>
  );
}
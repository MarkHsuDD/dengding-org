import Link from "next/link";
import { ArrowLeft, Building2, Mail, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b171a] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <section>
            <p className="text-sm font-semibold tracking-[0.25em] text-[#fbec96]">CONTACT</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight lg:text-7xl">工程合作洽詢</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              歡迎營造公司、建設公司、建築師、模主與工班，就 SFS 系統模板、工程導入與合作方式與我們聯繫。
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <a
                href="mailto:contact@dengding.org"
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#fbec96]/40"
              >
                <Mail className="mb-5 text-[#fbec96]" size={30} />
                <div className="text-sm text-white/45">Email</div>
                <div className="mt-2 text-lg font-semibold">contact@dengding.org</div>
              </a>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <MapPin className="mb-5 text-[#fbec96]" size={30} />
                <div className="text-sm text-white/45">Location</div>
                <div className="mt-2 text-lg font-semibold">Kaohsiung, Taiwan</div>
              </div>
            </div>
          </section>

          <aside className="rounded-[2rem] border border-[#fbec96]/20 bg-[#15353d]/55 p-8 lg:p-10">
            <Building2 className="text-[#fbec96]" size={34} />
            <h2 className="mt-5 text-2xl font-semibold">登鼎智慧工程</h2>
            <p className="mt-4 leading-7 text-white/60">
              DengDing Smart ConTech
              <br />
              Smart Formwork System
            </p>

            <a
              href="mailto:contact@dengding.org?subject=%E5%B7%A5%E7%A8%8B%E5%90%88%E4%BD%9C%E6%B4%BD%E8%A9%A2"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#fbec96] px-6 py-3 font-semibold text-[#15353d]"
            >
              <Mail size={18} /> 寄送合作洽詢
            </a>

            <Link
              href="/"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3 text-white/80 hover:border-[#fbec96]/50"
            >
              <ArrowLeft size={18} /> 回到首頁
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}

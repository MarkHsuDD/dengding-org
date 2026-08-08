import Navbar from "../components/Navbar";

export default function SFSPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b171a] text-white px-6 py-24">
        <section className="mx-auto max-w-6xl">
          <div className="text-[#fbec96] text-sm font-semibold mb-4">
            Smart Formwork System
          </div>

          <h1 className="text-5xl font-semibold leading-tight mb-8">
            SFS 智慧模板系統
          </h1>

          <p className="text-white/70 text-lg leading-8 max-w-3xl mb-16">
            登鼎 SFS 將傳統模板工程轉化為可標準化、可數據化、可複製的智慧施工流程，
            以系統模板、智慧配模與專利非標嵌補件，解決台灣工地高度客製化、缺工與高廢棄問題。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              ["智慧模板規劃", "將圖面轉換為模板配置方案，降低人工配模時間與現場錯誤。"],
              ["系統模板導入", "以可重複使用的標準化模板，降低木模依賴並提升施工效率。"],
              ["專利非標嵌補件", "處理台灣建築高度客製化下的非標準區域，讓系統模板更容易落地。"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="text-xl font-semibold mb-3 text-[#fbec96]">{title}</h3>
                <p className="text-white/60 leading-7">{desc}</p>
              </div>
            ))}
          </div>

          <section className="mb-24 overflow-hidden rounded-[32px] border border-[#fbec96]/20 bg-white/[0.04]">
            <div className="grid lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
              <div className="bg-black/30 p-3 md:p-5">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video h-full w-full rounded-[24px] bg-black object-contain"
                  aria-label="登鼎 BIM 規劃、數位化施工與現場教學流程"
                >
                  <source src="/videos/watermarked_v3_gold.mp4" type="video/mp4" />
                  您的瀏覽器不支援影片播放。
                </video>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#fbec96]">
                  BIM-DRIVEN WORKFLOW
                </div>
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                  從 BIM 到現場｜登鼎數位化施工導入
                </h2>
                <p className="mt-6 text-base leading-8 text-white/68 md:text-lg">
                  登鼎透過 BIM 整合建築設計與模板系統，在施工前完成模板配置、特殊節點與施工介面的數位化規劃，
                  將複雜的現場資訊轉化為清楚、可執行的施工方案。結合數位模型、標準化作業流程與現場教學，
                  讓施工人員能更快速理解組裝方式與施工順序，降低對個人經驗的依賴，並將施工知識轉化為可傳承、可複製的系統化能力。
                </p>
                <p className="mt-6 border-l-2 border-[#fbec96] pl-5 text-sm leading-7 text-white/55 md:text-base">
                  從 BIM 規劃、數位化施工到現場教學，讓工程經驗成為可視化、可傳承、可複製的施工系統。
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="text-[#fbec96] text-sm font-semibold mb-4">
              SFS Stack
            </div>

            <h2 className="text-3xl font-semibold mb-8">
              五層智慧模板架構
            </h2>

            <div className="space-y-5">
              {[
                ["01", "實體施工基礎", "以智慧系統模板與專利模組化構件，建立可標準化、可循環利用的施工基礎。"],
                ["02", "施工數位化", "將現場經驗轉化為可記錄、可追蹤、可複製的施工流程。"],
                ["03", "智慧配模引擎", "透過數位化配模與最佳化邏輯，降低材料、人力與設計變更成本。"],
                ["04", "施工管理平台", "整合案場、人力、材料與施工資料，形成智慧工程管理基礎。"],
                ["05", "工程數據飛輪", "每一個案場持續回饋資料，讓系統越做越準、越做越有效率。"],
              ].map(([no, title, desc]) => (
                <div key={no} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 flex gap-5">
                  <div className="text-[#fbec96] font-semibold">{no}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-white/60 leading-7">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

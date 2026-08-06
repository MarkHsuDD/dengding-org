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
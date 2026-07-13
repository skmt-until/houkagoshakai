import { BackButton, Card, Pill } from "@/components/ui";
import { materialGroups } from "@/data/materials";

export const metadata = { title: "おすすめ教材ガイド｜ホーカゴシャカイ" };

export default function MaterialsPage() {
  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[900px] flex flex-col gap-5.5">
        <div className="flex items-center gap-3 flex-wrap">
          <BackButton href="/parent">勉強法にもどる</BackButton>
          <Pill>📚 おすすめ教材ガイド</Pill>
        </div>

        <Card
          border={5}
          className="px-6 py-6 flex items-center gap-4.5 text-cardsoft flex-wrap"
          style={{ background: "#1A4331", borderColor: "#12301F" }}
        >
          <span className="text-5xl leading-none">🛒</span>
          <div className="flex flex-col gap-2 flex-1 min-w-[240px]">
            <h1 className="m-0 text-2xl font-black leading-snug text-balance">勉強法を実践できる教材まとめ</h1>
            <p className="m-0 text-sm font-medium leading-[1.85] opacity-90">
              「思い出す練習」「図とセット」など、4ヶ条を毎日の学習に取り入れやすい問題集・参考書を教科ごとに集めました。
            </p>
          </div>
        </Card>

        {materialGroups.map((g) => (
          <section key={g.label} className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <span className="text-[26px] leading-none">{g.icon}</span>
              <h2 className="m-0 text-xl font-black text-ink">{g.label}</h2>
            </div>
            <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(248px, 1fr))" }}>
              {g.items.map((m) => (
                <div key={m.title} className="bg-white border-4 border-ink rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex gap-3 items-start">
                    <div className="w-[58px] h-[76px] flex-none border-[3px] border-ink rounded-lg bg-mint flex items-center justify-center text-[28px]">
                      {m.cover}
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <span className="text-[11px] font-black tracking-wide bg-mintline text-ink border-2 border-ink px-2 py-0.5 rounded-full self-start">
                        {m.tag}
                      </span>
                      <span className="text-[15px] font-black leading-snug text-ink">{m.title}</span>
                    </div>
                  </div>
                  <p className="m-0 text-[13px] font-bold leading-[1.75] text-ink opacity-80">{m.blurb}</p>
                  <button
                    type="button"
                    className="mt-auto flex items-center justify-center gap-1.5 bg-accent text-white border-[3px] border-ink rounded-xl py-2.5 font-black text-[13.5px] cursor-pointer w-full"
                  >
                    <span className="text-[10px] font-black tracking-wide bg-white text-ink rounded px-1.5">PR</span>
                    くわしく見る →
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="m-0 text-xs font-bold leading-[1.7] text-ink opacity-55 text-center text-balance">
          ※ 本ページにはアフィリエイト広告（PR）が含まれます。掲載商品はイメージです。
        </p>
      </div>
    </main>
  );
}

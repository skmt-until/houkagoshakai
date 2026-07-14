import { BackButton, Pill, StickerLink } from "@/components/ui";
import { regions, regionSlug } from "@/data/prefectures";

export const metadata = { title: "４７都道府県をカクニン！｜ホーカゴシャカイ" };

export default function RegionsPage() {
  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[1040px] flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <BackButton href="/">トップに戻る</BackButton>
          <Pill>🗾 ４７都道府県をカクニン！</Pill>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <h2 className="m-0 text-[30px] font-black text-ink">地方をえらぼう！</h2>
          <div className="text-sm font-bold text-ink opacity-70">どの地方を見てみる？</div>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
          {regions.map((r) => (
            <StickerLink
              key={r.name}
              href={`/regions/${regionSlug(r.name)}`}
              className="flex flex-col items-center gap-2.5 border-4 border-ink rounded-[20px] px-4 py-7"
              style={{ background: r.bg }}
            >
              <span className="text-[48px] leading-none">{r.emoji}</span>
              <span className="text-xl font-black">{r.name}</span>
              <span className="text-[12.5px] font-bold opacity-65">{r.prefs.length}都道府県</span>
            </StickerLink>
          ))}
        </div>
      </div>
    </main>
  );
}

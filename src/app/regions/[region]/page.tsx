import { notFound } from "next/navigation";
import { BackButton, Pill, StickerLink } from "@/components/ui";
import { regionByslug, prefSlug } from "@/data/prefectures";

export default async function PrefectureListPage({ params }: { params: Promise<{ region: string }> }) {
  const { region: regionParam } = await params;
  const region = regionByslug(regionParam);
  if (!region) return notFound();

  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[680px] flex flex-col gap-5.5">
        <div className="flex items-center gap-3">
          <BackButton href="/regions">地方一覧</BackButton>
          <Pill>
            {region.emoji} {region.name}
          </Pill>
        </div>

        <div className="flex flex-col gap-1 pt-1">
          <h2 className="m-0 text-[30px] font-black text-ink">都道府県をえらぼう！</h2>
          <div className="text-sm font-bold text-ink opacity-70">気になる都道府県をタップ</div>
        </div>

        <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))" }}>
          {region.prefs.map((p) => (
            <StickerLink
              key={p.name}
              href={`/regions/${regionParam}/${prefSlug(p.name)}`}
              className="flex flex-col items-center gap-1.5 bg-white border-4 border-ink rounded-[20px] px-3 py-4.5"
            >
              <span className="text-[30px] leading-none">{p.emoji}</span>
              <span className="text-base font-black">{p.name}</span>
            </StickerLink>
          ))}
        </div>
      </div>
    </main>
  );
}

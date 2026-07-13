import { notFound } from "next/navigation";
import { BackButton, Pill } from "@/components/ui";
import { regionByslug, prefByRegionAndSlug } from "@/data/prefectures";

export default async function PrefectureDetailPage({
  params,
}: {
  params: Promise<{ region: string; prefecture: string }>;
}) {
  const { region: regionParam, prefecture: prefParam } = await params;
  const region = regionByslug(regionParam);
  const pref = prefByRegionAndSlug(regionParam, prefParam);
  if (!region || !pref) return notFound();

  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[560px] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <BackButton href={`/regions/${regionParam}`}>もどる</BackButton>
          <Pill>
            {region.emoji} {region.name}
          </Pill>
        </div>

        <div className="bg-white border-[5px] border-ink rounded-[26px] px-6.5 py-8 flex flex-col items-center gap-3.5">
          <div className="text-[84px] leading-none">{pref.emoji}</div>
          <h2 className="m-0 text-[34px] font-black text-ink">{pref.name}</h2>
          <div className="w-[54px] h-[5px] rounded-full bg-accent" />
          <p className="m-0 text-base font-bold leading-[1.9] text-ink text-center text-balance">{pref.feature}</p>

          <div className="w-full flex flex-col gap-3 mt-1.5">
            <div className="flex flex-col gap-1 bg-mint border-[3px] border-ink rounded-2xl px-4 py-3.5">
              <div className="flex items-center gap-1.5 text-[13px] font-black tracking-wide text-ink opacity-75">
                🏛 県庁所在地
              </div>
              <div className="text-lg font-black text-ink leading-snug">{pref.capital}</div>
            </div>
            <div className="flex flex-col gap-1 bg-mint border-[3px] border-ink rounded-2xl px-4 py-3.5">
              <div className="flex items-center gap-1.5 text-[13px] font-black tracking-wide text-ink opacity-75">
                ⭐ 有名なもの
              </div>
              <div className="text-base font-extrabold text-ink leading-relaxed">{pref.famous}</div>
            </div>
            <div className="flex flex-col gap-1.5 bg-accent border-[3px] border-ink rounded-2xl px-4.5 py-4">
              <div className="flex items-center gap-1.5 text-[13px] font-black tracking-wide text-white">
                📝 テストのツボ（なぜ？）
              </div>
              <div className="text-[15px] font-bold text-white leading-[1.85] text-left">{pref.point}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

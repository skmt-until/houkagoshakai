"use client";

import { BackButton, Pill, StickerLink } from "@/components/ui";
import { subjects } from "@/data/units";

export function SubjectSelect({
  icon,
  label,
  basePath,
}: {
  icon: string;
  label: string;
  /** Base path to build subject links, e.g. "/slides" -> "/slides/chiri" */
  basePath: string;
}) {
  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[680px] flex flex-col gap-5.5">
        <div className="flex items-center gap-3">
          <BackButton href="/">トップに戻る</BackButton>
          <Pill className="rotate-[-1.5deg]">
            {icon} {label}
          </Pill>
        </div>

        <div className="flex flex-col gap-1 pt-1">
          <h2 className="m-0 text-[30px] font-black text-ink">分野をえらぼう！</h2>
          <div className="text-sm font-bold text-ink opacity-70">どの分野で学習する？</div>
        </div>

        <div className="flex gap-4 flex-wrap">
          {subjects.map((sj) => (
            <StickerLink
              key={sj.key}
              href={`${basePath}/${sj.key}`}
              className="flex-1 min-w-[150px] border-[5px] border-ink rounded-[22px] px-4.5 py-6.5 flex flex-col items-center gap-2"
              style={{ background: sj.bg }}
            >
              <span className="text-[48px] leading-none w-[78px] h-[78px] flex items-center justify-center bg-white border-4 border-ink rounded-full">
                {sj.emoji}
              </span>
              <span className="text-2xl font-black">{sj.name}</span>
              <span className="text-[12.5px] font-bold opacity-70 text-center">{sj.sub}</span>
            </StickerLink>
          ))}
        </div>
      </div>
    </main>
  );
}

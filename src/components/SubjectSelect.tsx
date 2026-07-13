"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BackButton, ComingSoon, Pill, StickerLink } from "@/components/ui";
import { subjects } from "@/data/units";

export function SubjectSelect({
  icon,
  label,
  basePath,
  search = false,
}: {
  icon: string;
  label: string;
  /** Base path to build subject links, e.g. "/slides" -> "/slides/chiri" */
  basePath: string;
  /** Show the magazine keyword-search bar in the nav row (シャカマガ only). */
  search?: boolean;
}) {
  const router = useRouter();
  const [queryDraft, setQueryDraft] = useState("");

  function runSearch() {
    const q = queryDraft.trim();
    const dest = `${basePath}/${subjects[0].key}`;
    router.push(q ? `${dest}?q=${encodeURIComponent(q)}` : dest);
  }

  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[680px] flex flex-col gap-5.5">
        <div className="flex items-center gap-3 flex-wrap">
          <BackButton href="/">トップに戻る</BackButton>
          <Pill>
            {icon} {label}
          </Pill>

          {search && (
            <div className="flex items-center gap-2 flex-1 min-w-[180px]">
              <input
                value={queryDraft}
                onChange={(e) => setQueryDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") runSearch();
                }}
                placeholder="キーワードで検索（例：季節、山脈）"
                className="flex-1 min-w-0 font-bold text-sm text-ink bg-white border-[3px] border-ink rounded-2xl px-3.5 py-2 outline-none"
              />
              <button
                type="button"
                onClick={runSearch}
                className="flex items-center gap-1.5 bg-ink text-cardsoft border-[3px] border-ink rounded-2xl px-4 py-2 font-black text-sm cursor-pointer whitespace-nowrap"
              >
                🔍 検索
              </button>
            </div>
          )}
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

        <ComingSoon className="mt-2 min-h-[120px] border-[4px]" />
      </div>
    </main>
  );
}

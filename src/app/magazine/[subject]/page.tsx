"use client";

import { use, useMemo, useState } from "react";
import { BackButton, Pill, StickerLink } from "@/components/ui";
import { articlesForSubject } from "@/data/magazine";
import { subjects, type SubjectKey } from "@/data/units";

export default function MagazineListPage({
  params,
  searchParams,
}: {
  params: Promise<{ subject: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { subject: subjectKey } = use(params);
  const { q: initialQuery = "" } = use(searchParams);
  const subject = subjects.find((s) => s.key === subjectKey);
  const [queryDraft, setQueryDraft] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);

  const all = articlesForSubject(subjectKey as SubjectKey);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter((a) => (a.title + " " + a.keywords).toLowerCase().includes(q));
  }, [all, query]);

  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[560px] self-center flex flex-col gap-8">
        <div className="flex items-center gap-3 flex-wrap">
          <BackButton href="/">トップに戻る</BackButton>
          <BackButton href="/magazine">1つ前に戻る</BackButton>
          <Pill>📰 シャカマガ</Pill>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={queryDraft}
            onChange={(e) => setQueryDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setQuery(queryDraft);
            }}
            placeholder="キーワードで検索（例：季節、山脈）"
            className="flex-1 min-w-0 font-bold text-sm text-ink bg-white border-[3px] border-ink rounded-2xl px-3.5 py-2 outline-none"
          />
          <button
            type="button"
            onClick={() => setQuery(queryDraft)}
            className="flex items-center gap-1.5 bg-ink text-cardsoft border-[3px] border-ink rounded-2xl px-4 py-2 font-black text-sm cursor-pointer whitespace-nowrap"
          >
            🔍 検索
          </button>
        </div>

        {results.length === 0 && (
          <div className="bg-white border-[3px] border-ink rounded-2xl px-4.5 py-4 text-[14.5px] font-bold text-ink">
            {query
              ? `「${query}」に一致する記事は見つかりませんでした。`
              : `${subject?.name ?? ""}の記事はまだありません。近日公開予定です！`}
          </div>
        )}

        <div className="flex gap-4.5 flex-wrap justify-start">
          {results.map((a) => (
            <StickerLink
              key={a.id}
              href={`/magazine/${subjectKey}/${a.slug}`}
              className="w-[248px] h-[248px] bg-white border-4 border-ink rounded-[22px] p-5.5 flex flex-col gap-3.5 text-left"
            >
              <span className="text-[40px] leading-none w-[70px] h-[70px] flex-none flex items-center justify-center bg-mintline2 border-[3px] border-ink rounded-2xl">
                {a.emoji}
              </span>
              <span className="text-xs font-black tracking-wide bg-ink text-cardsoft px-2.5 py-1 rounded-full self-start">
                シャカマガ ＃{a.num}
              </span>
              <span className="text-[17px] font-black leading-snug">{a.title}</span>
            </StickerLink>
          ))}
        </div>
      </div>
    </main>
  );
}

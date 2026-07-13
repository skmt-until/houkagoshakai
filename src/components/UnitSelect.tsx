"use client";

import { notFound } from "next/navigation";
import { BackButton, Pill, StickerLink } from "@/components/ui";
import { subjects, unitGroupsBySubject, type SubjectKey } from "@/data/units";
import { contentMap } from "@/data/content-map";

export function UnitSelect({
  subjectKey,
  icon,
  label,
  basePath,
  selectBasePath,
}: {
  subjectKey: string;
  icon: string;
  label: string;
  /** e.g. "/slides" -> unit links become "/slides/chiri/asia" */
  basePath: string;
  /** e.g. "/slides" -> "1 つ前に戻る" goes back to "/slides" (subject select) */
  selectBasePath: string;
}) {
  const subject = subjects.find((s) => s.key === subjectKey);
  if (!subject) return notFound();
  const groups = unitGroupsBySubject[subjectKey as SubjectKey];

  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[680px] flex flex-col gap-5.5">
        <div className="flex items-center gap-3 flex-wrap">
          <BackButton href="/">トップに戻る</BackButton>
          <BackButton href={selectBasePath}>1つ前に戻る</BackButton>
          <Pill>
            {icon} {label}
          </Pill>
          <div className="flex-1" />
          <span className="text-[13px] font-black bg-mintline2 border-[3px] border-ink rounded-full px-3 py-1">
            {subject.emoji} {subject.name}
          </span>
        </div>

        <div className="flex flex-col gap-1 pt-1">
          <h2 className="m-0 text-[30px] font-black text-ink">単元をえらぼう！</h2>
          <div className="text-sm font-bold text-ink opacity-70">どの単元で学習する？</div>
        </div>

        {groups.map((g) => (
          <div key={g.group} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-ink" />
              <span className="text-base font-black text-ink">{g.group}</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {g.items.map((it) => {
                const content = contentMap[it.title];
                const href = content ? `${basePath}/${subjectKey}/${content.slug}` : "#";
                return (
                  <StickerLink
                    key={it.title}
                    href={href}
                    className="w-full bg-white border-4 border-ink rounded-[18px] px-4.5 py-3.5 flex flex-col items-start gap-0.5 text-left"
                  >
                    <span className="text-[17px] font-black">{it.title}</span>
                  </StickerLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

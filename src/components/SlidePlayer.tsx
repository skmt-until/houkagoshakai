"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BackButton, Pill, StickerButton } from "@/components/ui";
import type { Slide } from "@/data/types";

function LatLongDiagram() {
  return (
    <div className="w-full flex justify-center my-2.5">
      <div className="relative w-[170px] h-[170px] rounded-full border-4 border-ink bg-mint flex-none">
        <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-ink -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-ink -translate-x-1/2" />
        <div className="absolute left-1/2 top-1/2 w-[9px] h-[9px] rounded-full bg-accent border-2 border-ink -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-full ml-3 -translate-y-1/2 text-[12.5px] font-black text-ink whitespace-nowrap">
          緯度0°（赤道）
        </div>
        <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 text-[12.5px] font-black text-ink whitespace-nowrap">
          経度0°（本初子午線）
        </div>
      </div>
    </div>
  );
}

function TimezoneDiagram() {
  return (
    <div className="w-full flex flex-col items-center gap-2 my-2.5">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <span className="bg-white border-[3px] border-ink rounded-xl px-4 py-2.5 text-sm font-black text-ink">経度0°</span>
        <span className="text-lg font-black text-ink">→</span>
        <span className="bg-white border-[3px] border-ink rounded-xl px-4 py-2.5 text-sm font-black text-ink">経度15°</span>
        <span className="text-lg font-black text-ink">→</span>
        <span className="bg-white border-[3px] border-ink rounded-xl px-4 py-2.5 text-sm font-black text-ink">経度30°</span>
      </div>
      <div className="text-[13px] font-black text-accent">＋1時間　　　　＋1時間</div>
    </div>
  );
}

export function SlidePlayer({
  slides,
  region,
  homeHref,
  backHref,
  quizHref,
}: {
  slides: Slide[];
  region: string;
  homeHref: string;
  backHref: string;
  quizHref: string;
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const i = Math.min(index, slides.length - 1);
  const s = slides[i];
  const atStart = i === 0;
  const atEnd = i === slides.length - 1;
  const isCover = !(s.points && s.points.length);

  function go(n: number) {
    if (n < 0 || n > slides.length - 1) return;
    setDir(n > index ? 1 : -1);
    setIndex(n);
  }

  function handleNext() {
    if (atEnd) router.push(quizHref);
    else go(i + 1);
  }

  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[820px] flex flex-col gap-5">
        <div className="flex items-center gap-3 flex-wrap">
          <BackButton href={homeHref}>もどる</BackButton>
          <BackButton href={backHref}>1つ前に戻る</BackButton>
          <Pill>📖 知識確認スライド</Pill>
          <div className="flex-1" />
          <Pill tone="outline">{region}</Pill>
        </div>

        <div className="relative w-full bg-white border-[5px] border-ink rounded-[26px] overflow-hidden">
          <div className="absolute top-3.5 right-3.5 z-[3] text-xs font-black bg-accent text-cardsoft border-[3px] border-ink rounded-xl px-2.5 py-1">
            No.{i + 1}
          </div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 44 : -44 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col gap-3.5 ${
                isCover ? "items-center justify-center text-center px-11 py-13 min-h-[380px]" : "items-stretch text-left px-8.5 py-8 pb-9"
              }`}
            >
              <div className="text-base font-bold tracking-wide text-accent">{s.kicker}</div>
              <h2 className={`m-0 font-black leading-[1.3] text-ink text-balance ${isCover ? "text-[40px]" : "text-[28px]"}`}>
                {s.title}
              </h2>

              {s.lead && (
                <p
                  className={`m-0 text-[17px] font-medium leading-[1.9] text-ink opacity-90 text-balance ${
                    isCover ? "text-center max-w-[560px] self-center" : "text-left"
                  }`}
                >
                  {s.lead}
                </p>
              )}

              {isCover && s.emoji && <div className="text-[88px] leading-[1.1]">{s.emoji}</div>}

              {s.diagram === "latlong" && <LatLongDiagram />}
              {s.diagram === "timezone" && <TimezoneDiagram />}

              {s.points && s.points.length > 0 && (
                <div className="flex flex-col gap-3 w-full mt-1">
                  {s.points.map((pt, k) => (
                    <div key={k} className="flex gap-3.5 items-start bg-mint border-[3px] border-ink rounded-2xl px-4.5 py-4 text-left">
                      <span className="text-[27px] leading-[1.25] flex-none">{pt.icon}</span>
                      <span className="flex flex-col gap-1 flex-1">
                        <span className="text-[17.5px] font-black text-ink leading-snug">{pt.head}</span>
                        <span className="text-[15.5px] font-medium text-ink leading-[1.75] opacity-85">{pt.body}</span>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3.5">
          <StickerButton
            onClick={() => go(i - 1)}
            disabled={atStart}
            className={`bg-white text-ink border-4 border-ink rounded-2xl px-4.5 py-3 text-base ${
              atStart ? "opacity-35 cursor-not-allowed" : ""
            }`}
          >
            ◀︎ 前へ
          </StickerButton>
          <div className="flex-1 flex flex-col items-center gap-1.5">
            <div className="text-xl font-black text-ink">
              {i + 1} / {slides.length}
            </div>
            <div className="flex gap-1.5">
              {slides.map((_, k) => (
                <span
                  key={k}
                  className="h-2.5 rounded-full border-[2.5px] border-ink transition-[width] duration-200"
                  style={{ width: k === i ? "22px" : "10px", background: k === i ? "#E55A39" : "#FFFFFF" }}
                />
              ))}
            </div>
          </div>
          <StickerButton
            onClick={handleNext}
            className={`border-4 border-ink rounded-2xl px-4.5 py-3 text-base ${
              atEnd ? "bg-accent text-cardsoft px-5.5" : "bg-ink text-cardsoft"
            }`}
          >
            {atEnd ? "クイズに挑戦！ 🎮" : "次へ ▶︎"}
          </StickerButton>
        </div>
      </div>
    </main>
  );
}

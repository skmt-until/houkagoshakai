"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BackButton, Pill, StickerButton } from "@/components/ui";
import type { QuizQuestion } from "@/data/types";

/** Deterministic PRNG (mulberry32) so the shuffle is identical on server and client render, avoiding hydration mismatches. */
function seededRandom(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), s | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffledIndices(n: number, seed: number): number[] {
  const rand = seededRandom(seed);
  const arr = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function QuizPlayer({
  questions,
  region,
  homeHref,
  backHref,
}: {
  questions: QuizQuestion[];
  region: string;
  homeHref: string;
  backHref: string;
}) {
  const router = useRouter();
  const [qIndex, setQIndex] = useState(0);
  const [qScore, setQScore] = useState(0);
  const [qFinished, setQFinished] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [wrongIndices, setWrongIndices] = useState<number[]>([]);
  const [reviewIndices, setReviewIndices] = useState<number[] | null>(null);
  const [shuffleNonce, setShuffleNonce] = useState(0);

  const activeIndices = reviewIndices ?? questions.map((_, i) => i);
  const total = activeIndices.length;
  const qi = Math.min(qIndex, total - 1);
  const origIndex = activeIndices[qi];
  const q = questions[origIndex];

  const order = useMemo(
    () => shuffledIndices(q.choices.length, origIndex * 1000 + shuffleNonce),
    [origIndex, shuffleNonce, q.choices.length],
  );

  const correct = picked !== null && picked === q.answer;
  const isLast = qi >= total - 1;

  function pick(choiceIdx: number) {
    if (showResult) return;
    const isCorrect = choiceIdx === q.answer;
    setWrongIndices((prev) =>
      isCorrect ? prev.filter((x) => x !== origIndex) : prev.includes(origIndex) ? prev : [...prev, origIndex]
    );
    setPicked(choiceIdx);
    setShowResult(true);
    setQScore((s) => s + (isCorrect ? 1 : 0));
  }

  function advance() {
    if (qi >= total - 1) {
      setShowResult(false);
      setQFinished(true);
    } else {
      setShowResult(false);
      setPicked(null);
      setQIndex(qi + 1);
    }
  }

  function retry(onlyWrong: boolean) {
    setQIndex(0);
    setQScore(0);
    setQFinished(false);
    setPicked(null);
    setShowResult(false);
    setShuffleNonce((n) => n + 1);
    setReviewIndices(onlyWrong ? [...wrongIndices] : null);
    if (!onlyWrong) setWrongIndices([]);
  }

  const pct = total ? qScore / total : 0;
  const passEmoji = pct === 1 ? "🏆" : pct >= 0.6 ? "🎉" : "💪";
  const passTitle = pct === 1 ? "パーフェクト！" : pct >= 0.6 ? "よくできました！" : "もう少し！";
  const passMsg =
    pct === 1
      ? `${region}はカンペキだね！この調子！`
      : pct >= 0.6
        ? "よく理解できているよ。まちがえた問題を復習しよう。"
        : "スライドでもう一度カクニンしてから、また挑戦しよう！";

  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[680px] flex flex-col gap-5.5">
        <div className="flex items-center gap-3 flex-wrap">
          <BackButton href={homeHref}>もどる</BackButton>
          <BackButton href={backHref}>1つ前に戻る</BackButton>
          <Pill tone="accent">🎮 クイズ</Pill>
          <div className="flex-1" />
          <Pill tone="outline">{region}</Pill>
          <span className="text-[13px] font-black bg-mintline2 border-[3px] border-ink rounded-full px-3 py-1">
            {qFinished ? "結果" : `第${qi + 1}問 / ${total}`}
          </span>
        </div>

        {!qFinished && (
          <div className="flex flex-col gap-4.5">
            <div className="bg-white border-[5px] border-ink rounded-[26px] px-7 py-7.5 flex flex-col gap-3">
              <div className="text-sm font-bold tracking-wide text-accent">QUESTION</div>
              <h2 className="m-0 text-[28px] font-black leading-[1.45] text-ink text-balance">{q.q}</h2>
            </div>

            <div className="flex flex-col gap-3">
              {order.map((origIdx, pos) => (
                <StickerButton
                  key={pos}
                  onClick={() => pick(origIdx)}
                  className="w-full bg-white border-4 border-ink rounded-[20px] px-5 py-4.5 flex items-center gap-4 text-left"
                >
                  <span className="w-11 h-11 flex-none flex items-center justify-center bg-cardsoft border-[3px] border-ink rounded-[13px] font-black text-[19px]">
                    {"ABCD"[pos] ?? "?"}
                  </span>
                  <span className="flex-1 text-left text-xl font-bold">{q.choices[origIdx]}</span>
                </StickerButton>
              ))}
            </div>
          </div>
        )}

        {qFinished && (
          <div className="bg-white border-[6px] border-ink rounded-[28px] px-7 py-8.5 flex flex-col items-center gap-3">
            <div className="text-[64px] leading-none">{passEmoji}</div>
            <div className="text-[28px] font-black text-ink">{passTitle}</div>
            <div className="text-lg font-black text-cardsoft bg-ink rounded-full px-5.5 py-2">
              {qScore} / {total} 問 正解
            </div>
            <p className="mt-1.5 m-0 text-[14.5px] font-bold leading-[1.8] text-ink opacity-85 text-center text-balance max-w-[380px]">
              {passMsg}
            </p>
            <div className="flex gap-3 mt-2 flex-wrap justify-center">
              {wrongIndices.length > 0 && (
                <StickerButton
                  onClick={() => retry(true)}
                  className="border-4 border-ink rounded-2xl px-5 py-3 text-[15px] text-cardsoft"
                  style={{ background: "#B5482F" }}
                >
                  まちがえた{wrongIndices.length}問を解きなおす 📝
                </StickerButton>
              )}
              <StickerButton
                onClick={() => retry(false)}
                className="bg-accent text-cardsoft border-4 border-ink rounded-2xl px-5 py-3 text-[15px]"
              >
                もう一度挑戦 🔄
              </StickerButton>
              <StickerButton
                onClick={() => router.push(homeHref)}
                className="bg-ink text-cardsoft border-4 border-ink rounded-2xl px-5 py-3 text-[15px]"
              >
                トップへ戻る
              </StickerButton>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 p-6"
            onClick={advance}
          >
            <motion.div
              initial={correct ? { opacity: 0, scale: 0.86 } : { x: 0 }}
              animate={
                correct
                  ? { opacity: 1, scale: [0.86, 1.04, 1] }
                  : { x: [0, -10, 10, -10, 10, -4, 0] }
              }
              transition={correct ? { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] } : { duration: 0.5, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-[6px] rounded-[28px] px-7 py-7.5 flex flex-col items-center gap-2.5 max-w-[360px] w-full"
              style={{ borderColor: correct ? "#1A4331" : "#E55A39" }}
            >
              <div className="text-[64px] leading-none">{correct ? "🎉" : "💦"}</div>
              <div className="text-[30px] font-black" style={{ color: correct ? "#1A4331" : "#E55A39" }}>
                {correct ? "せいかい！" : "ざんねん！"}
              </div>
              <div className="text-[15px] font-bold leading-snug text-ink opacity-85 text-center text-balance">
                {correct ? q.explain : `正解は「${q.choices[q.answer]}」。${q.explain}`}
              </div>
              <StickerButton
                onClick={advance}
                className="mt-1.5 border-4 border-ink rounded-2xl px-6 py-2.5 text-base text-cardsoft"
                style={{ background: correct ? "#E55A39" : "#1A4331" }}
              >
                {isLast ? "結果を見る 🎉" : "つぎの問題へ ▶︎"}
              </StickerButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

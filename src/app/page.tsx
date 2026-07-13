"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ComingSoon, StickerButton, StickerLink } from "@/components/ui";

const FEATURES = [
  { icon: "📖", title: "スライドで知識をカクニン！", sub: "サッと要点をおさらい", bg: "#FFFFFF", href: "/slides" },
  { icon: "🎮", title: "クイズで実力をカクニン！", sub: "テンポよく実力チェック", bg: "#DCEDE2", href: "/quiz" },
  { icon: "📰", title: "シャカマガ", sub: "学習コラムを読もう", bg: "#FFFFFF", href: "/magazine" },
];

export default function HomePage() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      {/* HERO */}
      <div className="hs-hero-bg -mx-5 -mt-7 sm:-mx-9 w-[calc(100%+2.5rem)] sm:w-[calc(100%+4.5rem)] relative overflow-hidden border-b-8 border-ink pt-9 pb-8 px-5 flex flex-col items-center gap-3.5">
        <button
          type="button"
          onClick={() => setAboutOpen(true)}
          className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-cardsoft text-ink border-[3px] border-ink rounded-full px-3.5 py-1.5 font-black text-[13px] cursor-pointer"
        >
          ❓ ホーカゴシャカイとは？
        </button>

        <div className="text-[clamp(13px,3.4vw,17px)] font-bold tracking-wide bg-ink text-cardsoft px-4.5 py-1.5 rounded-full whitespace-nowrap animate-hs-drop">
          &nbsp;ホーカゴ、サクッと社会科を勉強するサイト！
        </div>

        <h1
          className="m-0 font-black leading-none text-center text-ink"
          style={{
            letterSpacing: "-1px",
            fontSize: "clamp(46px,15.5vw,128px)",
            textShadow: "3px 3px 0 #FBFDFB",
          }}
        >
          <span className="hs-hero-a">ホーカゴ</span>
          <br />
          <span className="hs-hero-b text-accent">シャカイ</span>
        </h1>
      </div>

      {/* FEATURES */}
      <div className="w-full flex gap-6 mt-7 items-stretch flex-wrap">
        <div className="flex-[3_1_440px] flex flex-col gap-4">
          {FEATURES.map((f) => (
            <StickerLink
              key={f.title}
              href={f.href}
              className="flex items-center gap-4 w-full border-4 border-ink rounded-[18px] px-4 py-3.5"
            >
              <span
                className="text-[36px] leading-none w-[60px] h-[60px] flex items-center justify-center bg-cardsoft border-[3px] border-ink rounded-2xl flex-none"
                style={{ background: f.bg === "#FFFFFF" ? undefined : f.bg }}
              >
                {f.icon}
              </span>
              <span className="flex flex-col items-start gap-0.5 flex-1 text-left">
                <span className="text-[22px] font-black whitespace-nowrap">{f.title}</span>
              </span>
              <span className="text-sm font-medium opacity-70 text-[#02110a] whitespace-nowrap">～{f.sub}～</span>
            </StickerLink>
          ))}

          <StickerLink
            href="/regions"
            className="flex items-center gap-4 w-full border-4 border-ink rounded-[18px] px-4 py-3.5"
            style={{ background: "#E6F1E9" }}
          >
            <span className="text-[36px] leading-none w-[60px] h-[60px] flex items-center justify-center bg-cardsoft border-[3px] border-ink rounded-2xl flex-none">
              🗾
            </span>
            <span className="flex flex-col items-start gap-0.5 flex-1 text-left">
              <span className="text-[22px] font-black whitespace-nowrap">４７都道府県をカクニン！</span>
            </span>
            <span className="text-sm font-medium opacity-70 text-[#02110a] whitespace-nowrap">～日本の多様さを知ろう～</span>
          </StickerLink>

          <StickerLink
            href="/parent"
            className="flex items-center gap-3 w-full border-4 border-ink rounded-[18px] px-4.5 py-3.5 mt-1"
            style={{ background: "#1A4331", color: "#FBFDFB", borderColor: "#12301F" }}
          >
            <span className="text-2xl leading-none">🧑‍🏫</span>
            <span className="flex flex-col items-start gap-0.5 flex-1 text-left">
              <span className="text-sm font-bold tracking-wide opacity-85">保護者の方へ</span>
              <span className="text-[15.5px] font-bold leading-snug">定期テスト対策の正しい進め方と、おすすめ教材など</span>
            </span>
            <span className="text-base font-black opacity-70">›</span>
          </StickerLink>
        </div>

        <aside className="flex-[1_1_150px] min-w-[130px] self-stretch flex flex-col">
          <ComingSoon className="flex-1" />
        </aside>
      </div>

      {/* ABOUT MODAL */}
      <AnimatePresence>
        {aboutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 p-6"
            onClick={() => setAboutOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cardsoft border-[6px] border-ink rounded-[26px] px-6 py-6 flex flex-col gap-3 max-w-[380px] w-full"
            >
              <div className="text-5xl leading-none text-center">📚✨</div>
              <h2 className="m-0 text-2xl font-black text-ink text-center">ホーカゴシャカイとは？</h2>
              <p className="m-0 text-[14.5px] font-medium leading-[1.85] text-ink text-balance">
                放課後のすきま時間に、スマホでサクッと社会科を学べる学習アプリ。スライドで要点をおさらいして、クイズで力だめし。社会に関する記事や都道府県まとめで、楽しく社会を勉強できるよ。
              </p>
              <StickerButton
                onClick={() => setAboutOpen(false)}
                className="mt-1 self-center border-4 border-ink rounded-2xl px-6 py-2.5 text-[15px] bg-ink text-cardsoft"
              >
                とじる
              </StickerButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <div className="w-full max-w-[1040px] mt-9 pt-4.5 border-t-[3px] border-dashed border-ink flex justify-center gap-5 flex-wrap">
        <Link href="/privacy" className="bg-transparent p-1 font-bold text-[13px] text-ink opacity-70 underline">
          プライバシーポリシー
        </Link>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSee7R2jCMLwBkz-d_tWPDFFJrJhdOujNapTyO1VZ7B7itf4sw/viewform?usp=dialog"
          target="_blank"
          rel="noopener"
          className="bg-transparent p-1 font-bold text-[13px] text-ink opacity-70 underline"
        >
          お問い合わせ
        </a>
        <Link href="/operator" className="bg-transparent p-1 font-bold text-[13px] text-ink opacity-70 underline">
          運営者情報
        </Link>
      </div>
    </main>
  );
}

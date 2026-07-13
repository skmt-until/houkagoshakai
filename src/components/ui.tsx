"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export const SPRING = { type: "spring", stiffness: 420, damping: 24 } as const;

/** Outer page container: dotted mint background, centered column, consistent padding. */
export function PageShell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 text-ink sm:px-9">
      <div className={`w-full flex flex-col items-center ${wide ? "" : ""}`}>{children}</div>
    </main>
  );
}

/** A single "‹ label" back-nav button. */
export function BackButton({ href, onClick, children }: { href?: string; onClick?: () => void; children: ReactNode }) {
  const className =
    "flex items-center gap-1.5 bg-white border-[3.5px] border-ink rounded-2xl px-3.5 py-2 font-black text-sm text-ink cursor-pointer";
  const inner = <motion.span whileHover={{ y: -2 }} whileTap={{ y: 1 }} className={className}>‹ {children}</motion.span>;
  if (href) {
    return (
      <Link href={href} className="inline-block">
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}

export function NavRow({ children }: { children: ReactNode }) {
  return <div className="w-full flex items-center gap-3 flex-wrap">{children}</div>;
}

/** Rounded solid pill, e.g. the green screen-title pill or accent pill. */
export function Pill({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: "ink" | "accent" | "outline";
  className?: string;
}) {
  const tones: Record<string, string> = {
    ink: "bg-ink text-cardsoft",
    accent: "bg-accent text-cardsoft",
    outline: "bg-mintline2 border-[3px] border-ink text-ink",
  };
  return (
    <span
      className={`text-[13px] font-bold tracking-[2px] px-3.5 py-1.5 rounded-full whitespace-nowrap ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** White card with thick ink border — the base "sticker" surface used everywhere. */
export function Card({
  children,
  className = "",
  border = 5,
  style,
}: {
  children: ReactNode;
  className?: string;
  border?: number;
  style?: CSSProperties;
}) {
  const borderClass = border === 5 ? "border-[5px]" : border === 4 ? "border-[4px]" : "border-[3px]";
  return (
    <div style={style} className={`bg-white ${borderClass} border-ink rounded-[26px] ${className}`}>
      {children}
    </div>
  );
}

/** Dashed "準備中" (coming soon) placeholder box — used for all not-yet-built ad/content slots. */
export function ComingSoon({ className = "", label = "準備中" }: { className?: string; label?: string }) {
  return (
    <div
      className={`relative w-full border-[2px] border-dashed border-ink rounded-[20px] bg-cardsoft flex flex-col items-center justify-center gap-2 text-ink ${className}`}
    >
      <span className="text-[12.5px] font-bold opacity-55">{label}</span>
    </div>
  );
}

interface StickerButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
}

/** Generic bouncy sticker button (hover lift, press down) — the base interaction of the whole app. */
export function StickerButton({ children, className = "", ...rest }: StickerButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ y: 3, scale: 0.98 }}
      transition={SPRING}
      className={`font-black cursor-pointer outline-none ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

/** Same bounce interaction, but as a Link (for feature cards etc. that navigate). */
export function StickerLink({
  href,
  children,
  className = "",
  style,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Link href={href} className="contents outline-none">
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ y: 3, scale: 0.98 }}
        transition={SPRING}
        style={style}
        className={`font-black cursor-pointer ${className}`}
      >
        {children}
      </motion.div>
    </Link>
  );
}

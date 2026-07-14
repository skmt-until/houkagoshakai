import type { ReactNode } from "react";
import { BackButton, Pill } from "@/components/ui";

export function ArticleShell({
  volLabel,
  backHref,
  children,
  sidebar,
}: {
  volLabel: string;
  backHref: string;
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[1180px] self-center flex flex-col gap-7">
        <div className="flex items-center gap-3 flex-wrap">
          <BackButton href="/">トップに戻る</BackButton>
          <BackButton href={backHref}>1つ前に戻る</BackButton>
          <Pill>📰 {volLabel}</Pill>
        </div>

        <div className="flex gap-5.5 items-start flex-wrap">
          <article className="bg-white border-[5px] border-ink rounded-3xl px-10 py-11 flex flex-col gap-7 flex-[1_1_740px] min-w-0">
            {children}
          </article>
          <aside className="flex-[0_0_260px] min-w-[230px] flex flex-col gap-3.5">{sidebar}</aside>
        </div>
      </div>
    </main>
  );
}

export function ArticleHeader({
  category,
  num,
  title,
  seriesLabel,
}: {
  category: string;
  num: number;
  title: string;
  seriesLabel?: string;
}) {
  return (
    <>
      <div className="flex gap-2 items-center flex-wrap">
        <span className="text-xs font-black bg-mintline2 border-[3px] border-ink rounded-full px-2.5 py-0.5">{category}</span>
        <span className="text-xs font-black bg-accent text-cardsoft border-[3px] border-ink rounded-full px-2.5 py-0.5">
          シャカマガ ＃{num}
        </span>
        <span className="text-xs font-bold opacity-60">5分で読めるよ</span>
      </div>
      <h1 className="m-0 text-[27px] font-black leading-[1.4] text-ink text-balance">{title}</h1>
      {seriesLabel && <div className="text-[13px] font-bold opacity-60 text-ink">{seriesLabel}</div>}
    </>
  );
}

export function LeadBox({ kicker, children }: { kicker: string; children: ReactNode }) {
  return (
    <div className="bg-mintline2 border-[3px] border-ink rounded-2xl p-6 flex flex-col gap-3">
      <div className="text-xs font-black tracking-wide text-accent">{kicker}</div>
      <div className="text-[18px] font-black leading-snug text-ink text-balance">{children}</div>
    </div>
  );
}

export function ArticleP({ children }: { children: ReactNode }) {
  return <p className="m-0 text-[15.5px] font-medium leading-[1.95] text-ink">{children}</p>;
}

export function ArticleSection({ icon, heading, children }: { icon: string; heading: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <span className="text-[25px] leading-none w-[50px] h-[50px] flex-none flex items-center justify-center bg-accent border-[3px] border-ink rounded-2xl">
          {icon}
        </span>
        <h2 className="m-0 text-[19px] font-black leading-snug text-ink text-balance">{heading}</h2>
      </div>
      {children}
    </section>
  );
}

export function InfoBox({ head, children, dense }: { head: string; children?: ReactNode; dense?: boolean }) {
  return (
    <div className={`flex flex-col ${dense ? "gap-2" : "gap-2.5"} bg-mint border-[3px] border-ink rounded-2xl px-5 py-4.5`}>
      <div className="text-[14.5px] font-black text-ink">{head}</div>
      {children && <div className="text-sm font-medium leading-[1.8] text-ink/90">{children}</div>}
    </div>
  );
}

export function ComparisonRow({ items }: { items: { label: string; body: string }[] }) {
  return (
    <div className="flex gap-2.5 flex-wrap">
      {items.map((it) => (
        <div key={it.label} className="flex-1 min-w-[140px] bg-white border-[2.5px] border-ink rounded-xl px-3 py-2.5 text-[13px] font-bold leading-relaxed text-ink">
          <span className="text-accent font-black">{it.label}</span>：{it.body}
        </div>
      ))}
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return <p className="m-0 text-[14.5px] font-bold leading-[1.85] text-accent">{children}</p>;
}

export function DarkBox({ head, children }: { head: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 bg-ink border-[3px] rounded-2xl px-5 py-4.5" style={{ borderColor: "#12301F" }}>
      <div className="text-[14.5px] font-black text-cardsoft">{head}</div>
      <div className="text-sm font-medium leading-[1.8] text-cardsoft/90">{children}</div>
    </div>
  );
}

export function SummaryBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="bg-ink text-cardsoft border-4 rounded-2xl px-6 py-5 flex flex-col gap-2.5" style={{ borderColor: "#12301F" }}>
      <span className="text-xs font-black tracking-wide bg-accent text-cardsoft self-start px-2.5 py-0.5 rounded-full">{label}</span>
      <div className="text-[15px] font-bold leading-[1.85]">{children}</div>
    </div>
  );
}

export function BackToMagazine({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="self-center mt-1 font-black text-[15px] border-4 border-ink rounded-2xl px-6.5 py-2.5 bg-white text-ink"
    >
      ‹ シャカマガにもどる
    </a>
  );
}


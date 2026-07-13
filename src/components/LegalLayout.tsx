import type { ReactNode } from "react";
import { BackButton, Card, Pill } from "./ui";

export function LegalLayout({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[820px] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <BackButton href="/">トップに戻る</BackButton>
          <Pill>{icon} {title}</Pill>
        </div>
        <Card className="px-7 py-8 flex flex-col gap-4.5">{children}</Card>
      </div>
    </main>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="m-0 text-[17px] font-black text-ink">■ {heading}</h2>
      <p className="m-0 text-[14.5px] font-medium leading-[1.9] text-ink">{children}</p>
    </section>
  );
}

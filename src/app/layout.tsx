import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-zen-maru-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ホーカゴシャカイ｜放課後、サクッと社会科を勉強するサイト",
  description:
    "放課後のすきま時間に、スマホでサクッと社会科を学べる中学生向け学習サイト。スライドで要点をおさらいして、クイズで力だめし。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenMaruGothic.variable} font-maru`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import { BackButton, Card, ComingSoon, Pill } from "@/components/ui";

export const metadata = { title: "保護者の方へ｜ホーカゴシャカイ" };

const TIPS = [
  {
    n: 1,
    title: <>読むだけ・写すだけはNG！<br />「思い出す」練習をしよう</>,
    body: "教科書を何度も読んだり、ノートをきれいな色でまとめ直したりするのは、勉強した気分になるだけで、実はあまり頭に残りません。脳は「えーっと、なんだっけ…」と思い出すときに記憶が強く定着します。",
  },
  {
    n: 2,
    title: <>一夜漬けはダメ！<br />「忘れた頃」に復習する</>,
    body: "テスト前日にまとめて勉強しても、人間はすぐに忘れてしまいます。記憶は「忘れかけたタイミング」で思い出すのが一番効果的です。",
  },
  {
    n: 3,
    title: <>丸暗記をやめて<br />「なんで？」を考えよう</>,
    body: "用語だけを呪文のように丸暗記しようとすると、すぐに忘れてしまいます。「なんでこの戦争が起きたの？」「なんでこの地域でりんごがたくさんとれるの？」と、理由をセットで考えると記憶に残りやすくなります。",
  },
  {
    n: 4,
    title: <>文字だけで覚えない！<br />「図や地図」とセットにしよう</>,
    body: "文字だけで覚えるより、目で見える情報（地図、グラフ、年表など）とセットにすると、頭の中で「文字」と「絵」がくっついて、テストのときに思い出しやすくなります。",
  },
];

const REVIEW_SCHEDULE = [
  { when: "その日の夜", what: "今日学校で習ったところを、5分だけサッとテストする" },
  { when: "次の日", what: "前日に間違えた問題だけを、もう一度思い出す" },
  { when: "週末", what: "この1週間で習った範囲を、ざっと振り返る" },
];

export default function ParentPage() {
  return (
    <main className="hs-dot-bg min-h-screen flex flex-col items-center px-5 py-7 sm:px-9 text-ink">
      <div className="w-full max-w-[1040px] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <BackButton href="/">トップに戻る</BackButton>
          <Pill>🧑‍🏫 保護者の方へ</Pill>
        </div>

        <div className="flex gap-6 items-stretch flex-wrap">
          <div className="flex-[4_1_600px] min-w-[300px] flex flex-col gap-5">
            <Card
              border={5}
              className="px-6 py-6 flex flex-col gap-3 text-cardsoft"
              style={{ background: "#1A4331", borderColor: "#12301F" }}
            >
              <span className="text-[13px] font-black tracking-[2px] text-accent bg-cardsoft self-start px-3 py-1 rounded-full">
                科学が証明した！
              </span>
              <h1 className="m-0 text-[30px] font-black leading-snug text-balance">
                最強の「社会」の勉強法
                <br />4ヶ条
              </h1>
              <p className="m-0 text-[15px] font-medium leading-[1.9] opacity-90 text-balance">
                社会は「ただ暗記するだけ」だと思っていませんか？実は、脳の仕組みを使うと、もっと楽に、確実にテストの点数をアップさせることができます。そのための4つの作戦を紹介します。
              </p>
            </Card>

            {TIPS.map((tip) => (
              <Card key={tip.n} className="px-8 py-8 flex flex-col gap-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-[46px] h-[46px] flex-none flex items-center justify-center bg-accent text-white border-[3px] border-ink rounded-2xl text-[22px] font-black">
                    {tip.n}
                  </span>
                  <h2 className="m-0 text-xl font-black leading-snug text-ink text-balance">{tip.title}</h2>
                </div>
                <p className="m-0 text-[15px] font-medium leading-[1.9] text-ink">{tip.body}</p>

                {tip.n === 1 && (
                  <div className="bg-mint border-[3px] border-ink rounded-2xl px-4 py-3.5 flex flex-col gap-2">
                    <div className="text-[13px] font-black tracking-wide text-accent">✏️ おすすめの勉強法</div>
                    <p className="m-0 text-[14.5px] font-bold leading-[1.8] text-ink">
                      教科書をパタンと閉じて、今勉強したことを白い紙に全部書き出してみる。
                    </p>
                    <p className="m-0 text-[14.5px] font-bold leading-[1.8] text-ink">
                      <span className="text-accent">テストしまくる：</span>
                      単語カードや一問一答を使って、何度も自分を小テストしよう。間違えた問題に印をつけて、そこだけを繰り返すのがコツです。
                    </p>
                  </div>
                )}

                {tip.n === 2 && (
                  <div className="border-[3px] border-ink rounded-2xl overflow-hidden flex flex-col">
                    <div className="flex bg-ink text-cardsoft text-[13px] font-black tracking-wide">
                      <div className="flex-none w-[92px] px-3 py-2.5 border-r-[3px] border-cardsoft">いつやる？</div>
                      <div className="flex-1 px-3 py-2.5">何をやる？</div>
                    </div>
                    {REVIEW_SCHEDULE.map((row, i) => (
                      <div
                        key={row.when}
                        className={`flex text-sm font-bold text-ink ${i < REVIEW_SCHEDULE.length - 1 ? "border-b-2 border-mintline" : ""}`}
                      >
                        <div className="flex-none w-[92px] px-3 py-2.5 bg-mint border-r-[3px] border-ink">{row.when}</div>
                        <div className="flex-1 px-3 py-2.5 leading-relaxed">{row.what}</div>
                      </div>
                    ))}
                  </div>
                )}

                {tip.n === 3 && (
                  <div className="bg-mint border-[3px] border-ink rounded-2xl px-4 py-3.5 flex flex-col gap-2">
                    <div className="text-[13px] font-black tracking-wide text-accent">🗣 おすすめの勉強法</div>
                    <p className="m-0 text-[14.5px] font-bold leading-[1.8] text-ink">
                      「〇〇って事件はね、△△が理由で起きたんだよ」と、友達や家族に自分の言葉で説明してみよう。うまく説明できたら、完璧に理解できている証拠です。
                    </p>
                  </div>
                )}

                {tip.n === 4 && (
                  <div className="flex flex-col gap-2.5">
                    <div className="flex gap-2.5 items-start bg-mint border-[3px] border-ink rounded-2xl px-3.5 py-3">
                      <span className="text-xs font-black tracking-wide bg-ink text-cardsoft px-2.5 py-1 rounded-full flex-none mt-px">地理</span>
                      <span className="text-[14.5px] font-bold leading-snug text-ink">言葉を覚えるときは、必ず白地図に場所を書き込みながら覚える！</span>
                    </div>
                    <div className="flex gap-2.5 items-start bg-mint border-[3px] border-ink rounded-2xl px-3.5 py-3">
                      <span className="text-xs font-black tracking-wide bg-ink text-cardsoft px-2.5 py-1 rounded-full flex-none mt-px">歴史</span>
                      <span className="text-[14.5px] font-bold leading-snug text-ink">出来事の順番や、他の国で何が起きていたかを必ず年表で確認する！</span>
                    </div>
                    <div className="flex gap-2.5 items-start bg-mint border-[3px] border-ink rounded-2xl px-3.5 py-3">
                      <span className="text-xs font-black tracking-wide bg-ink text-cardsoft px-2.5 py-1 rounded-full flex-none mt-px">公民</span>
                      <span className="text-[14.5px] font-bold leading-snug text-ink">政治の仕組みなどは、言葉だけでなく教科書の関係図や矢印を見ながら覚える！</span>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <aside className="flex-[1_1_200px] min-w-[190px] flex flex-col gap-4.5">
            <Card className="px-4.5 py-4.5 flex flex-col gap-3">
              <ComingSoon className="min-h-[180px]" />
            </Card>
            <ComingSoon className="flex-1 min-h-[220px] border-[4px]" />
          </aside>
        </div>
      </div>
    </main>
  );
}

import {
  ArticleShell, ArticleHeader, ArticleP, ArticleSection,
  InfoBox, Callout, SummaryBox, BackToMagazine,
} from "@/components/MagazineArticleLayout";
import { ComingSoon } from "@/components/ui";

export function AllowanceInflation() {
  return (
    <ArticleShell volLabel="vol.1" backHref="/magazine/koumin" sidebar={<AllowanceInflationSidebar />}>
      <ArticleHeader
        category="公民コラム"
        num={1}
        title="きみのお小遣い、なぜ「値上がり」に負けるのか？"
        seriesLabel="放課後シャカイ｜公民ってこんなに身近シリーズ"
      />

      <ArticleP>
        まず、こんな経験ない？「前は100円で買えたお菓子が、いつのまにか120円になってた」「お小遣いは変わってないのに、なんだか前より買えるものが減った気がする」……これ、気のせいじゃありません。
      </ArticleP>
      <ArticleP>
        きみのお小遣いは、実は目に見えない相手とずっと戦っているんです。その相手の名前は「物価（ぶっか）」。今日は、お小遣いやお菓子の値段を入り口に、大人でもちゃんと説明できる人は意外と少ない「お金と経済のしくみ」をのぞいてみましょう。読み終わるころには、ニュースの経済の話が急にわかるようになるかも。
      </ArticleP>

      <ArticleSection icon="🏷️" heading="そもそも「値段」って、どうやって決まるの？">
        <ArticleP>
          お店の人が「なんとなく」で決めていると思ったら、大まちがい。値段は、大きく2つの力のバランスで動いています。ほしい人の力（需要）と、売る量（供給）です。
        </ArticleP>
        <div className="flex flex-col gap-2.5 bg-mint border-[3px] border-ink rounded-2xl px-3.5 py-3.5">
          <div className="text-sm font-bold leading-[1.8] text-ink">📈 ほしい人がいっぱい／モノが少ない → 値段は上がる</div>
          <div className="text-sm font-bold leading-[1.8] text-ink">📉 ほしい人が少ない／モノがあまってる → 値段は下がる</div>
        </div>
        <ArticleP>
          たとえば、大人気の新作ゲーム。数が足りないと、ほしい人が殺到して値段が高くても売れます。逆に、売れ残ったパンが夕方に半額になるのは、「早く売りたい（＝供給があまってる）」から。この「ほしい力」と「売る量」のつなひきが、世の中のあらゆる値段を動かしているんです。
        </ArticleP>
        <InfoBox head="✨ ワクワクポイント">
          フリマアプリで、レアなグッズに高い値がつくのも同じしくみ。きみはもう、需要と供給を体で知っているのです。
        </InfoBox>
      </ArticleSection>

      <ArticleSection icon="📈" heading="「物価が上がる」ってどういうこと？ ― インフレの正体">
        <ArticleP>
          さて本題。世の中全体で、いろんなモノの値段がじわじわ上がっていくこと――これを<strong>インフレーション（インフレ）</strong>
          といいます。ここで大事なのは、「モノの値段が上がる」＝「お金の価値が下がる」という、コインの裏表みたいな関係。
        </ArticleP>
        <div className="flex flex-col gap-2.5 bg-mint border-[3px] border-ink rounded-2xl px-3.5 py-3.5">
          <div className="text-[14.5px] font-black text-ink">🧃 たとえばこう考えてみよう</div>
          <div className="text-sm font-bold leading-[1.8] text-ink">去年：100円で「ジュース1本」が買えた</div>
          <div className="text-sm font-bold leading-[1.8] text-ink">今年：同じジュースが120円になった</div>
          <div className="text-sm font-medium leading-[1.8] text-ink opacity-90">
            同じ100円玉なのに、今年はジュース1本すら買えない。お金の「数字」は100円のままなのに、その100円で買える量が減った。これがつまり「お金の価値が下がった」ということなんです。
          </div>
        </div>
        <ArticleP>
          だから、お小遣いの金額が去年と同じでも、物価が上がっていれば、実際には&quot;こっそり減っている&quot;のと同じ。きみのお小遣いが値上がりに負ける、というのはこういうカラクリです。
        </ArticleP>
        <InfoBox head="✨ ワクワクポイント">
          「値上げ」のニュースは、裏を返せば「きみの財布の中のお金が、少しやせた」というお知らせでもあるのです。
        </InfoBox>
      </ArticleSection>

      <ArticleSection icon="📉" heading="じゃあ、値段が下がり続けるのはいいこと？ ― デフレの落とし穴">
        <ArticleP>
          「なら値段はどんどん下がったほうが得じゃん！」そう思いますよね。値段が全体的に下がり続けることを
          <strong>デフレーション（デフレ）</strong>
          といいます。買い物する側にはうれしそう……ですが、実はこれもこわい面があるんです。
        </ArticleP>
        <InfoBox head="🔁 モノが売れないと、みんなの給料も減る">
          値段が下がる → お店やメーカーがもうからない → 働く人の給料が減る／仕事が減る → みんなお金を使えなくなる → もっとモノが売れない……というマイナスのループにはまることがあります。
        </InfoBox>
        <ArticleP>
          だから経済にとっては、インフレもデフレも行きすぎると困る。ゆるやかにバランスをとるのがいちばんいい、とされているんです。「値段は下がるほど得」と単純に言えないのが、経済のおもしろくて難しいところ。
        </ArticleP>
      </ArticleSection>

      <ArticleSection icon="🏦" heading="値段のバランスを見守る「番人」がいる">
        <ArticleP>
          「じゃあ、そのバランスは誰が気にしてるの？」実は、国のお金全体を見張っている中央銀行という特別な銀行があります。日本だと「日本銀行（日銀）」がその役目。
        </ArticleP>
        <ArticleP>
          日銀は、世の中に出回るお金の量を調整して、インフレやデフレが行きすぎないようにコントロールしようとします。いわば経済の体温を測るお医者さんのような存在。ニュースで「日銀が〜」と聞いたら、「あ、経済の番人が何かしようとしてるんだな」と思ってみてください。ぐっと話が近くなります。
        </ArticleP>
        <InfoBox head="✨ ワクワクポイント">
          きみの手元の100円玉の&quot;価値&quot;の裏側には、国レベルの調整が働いている。小さなお小遣いも、大きな経済とちゃんとつながっているのです。
        </InfoBox>
      </ArticleSection>

      <SummaryBox label={'まとめ ― お小遣いは「経済の入り口」'}>
        <div>
          ・モノの値段は、ほしい力（需要）と売る量（供給）のバランスで決まる
          <br />・全体の値段が上がる＝インフレ＝お金の価値が下がる
          <br />・下がり続けるデフレにも落とし穴がある
          <br />・そのバランスを見守る番人（中央銀行）がいる
        </div>
        <p className="m-0 mt-2.5 text-[15px] font-bold leading-[1.85]">
          「お小遣いが値上がりに負ける」というモヤモヤは、経済という大きなしくみの、いちばん身近な入り口だったんですね。次にお菓子の値段が変わっていたら、「これは需要？　供給？　それともインフレ？」と考えてみてください。ふだんの買い物が、ちょっとした経済の勉強になりますよ。
        </p>
      </SummaryBox>

      <BackToMagazine href="/magazine/koumin" />
    </ArticleShell>
  );
}

function AllowanceInflationSidebar() {
  return <ComingSoon className="flex-1 min-h-[420px] border-[4px]" />;
}

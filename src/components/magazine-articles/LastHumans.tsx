import {
  ArticleShell, ArticleHeader, ArticleP, ArticleSection,
  InfoBox, DarkBox, Callout, SummaryBox, BackToMagazine,
} from "@/components/MagazineArticleLayout";
import { ComingSoon } from "@/components/ui";

export function LastHumans() {
  return (
    <ArticleShell volLabel="vol.2" backHref="/magazine/rekishi" sidebar={<LastHumansSidebar />}>
      <ArticleHeader
        category="歴史コラム"
        num={2}
        title={'わたしたちは"最後の人類"だった ― 消えた親戚たちのミステリー'}
        seriesLabel="放課後シャカイ｜人類の誕生シリーズ"
      />

      <ArticleP>
        まず、ちょっとゾクッとする話から。今、地球にいる「人類」は、わたしたち<strong>ホモ・サピエンス</strong>
        ただ一種類です。でも――ずっと昔はそうじゃありませんでした。同じ時代の地球に、別の人類が何種類も暮らしていたのです。ネアンデルタール人、デニソワ人……。名前だけ聞くと「ご先祖さま？」と思うかもしれませんが、ちがいます。彼らはわたしたちの祖先ではなく、枝分かれした「親戚」。いわば人類のいとこたちです。
      </ArticleP>
      <ArticleP>
        その親戚たちは、今どこにいるのか？ ……全員、消えてしまいました。生き残ったのは、わたしたちだけ。いったい、何が起きたんだろう？　今日はこの人類最大級のミステリーを追いかけてみましょう。
      </ArticleP>

      <ArticleSection icon="🌳" heading="教科書のウソ？ 人類は「一直線」じゃなかった">
        <ArticleP>
          学校で見る人類の進化の絵。サルからだんだん背すじがのびて、最後に人間になる――あの一列に並んだ絵、見たことありますよね。でも、あれはちょっと本当とちがいます。
        </ArticleP>
        <ArticleP>
          実際の人類は、木の枝のように何度も枝分かれしていました。ある時代には、性格も体つきもちがう人類が、同時に何種類も生きていたのです。まるで、いろんな種類のネコ科の動物（ライオン、トラ、ヒョウ）がいるみたいに。
        </ArticleP>
        <ArticleP>
          そして時代によっては、その親戚どうしが同じ大地で出会っていた可能性まであります。サピエンスとネアンデルタール人が、どこかの谷で顔を合わせていたかもしれない――そう考えると、なんだかドキドキしませんか？
        </ArticleP>
        <InfoBox head="✨ ワクワクポイント">
          「人類＝わたしたち一種類だけ」なのは、実は地球の長い歴史の中ではめずらしい状態。今がむしろ&quot;特別&quot;なんです。
        </InfoBox>
      </ArticleSection>

      <ArticleSection icon="🦴" heading="ネアンデルタール人ってどんな人類？">
        <ArticleP>
          消えた親戚の代表が、ネアンデルタール人。「原始的でおとっていたから消えたんでしょ？」と思いがちですが、それは大きなカンちがい。彼らはむしろ――
        </ArticleP>
        <div className="flex flex-col gap-2.5 bg-mint border-[3px] border-ink rounded-2xl px-3.5 py-3.5">
          <div className="text-sm font-bold leading-[1.8] text-ink">💪 サピエンスよりがっしりした体で力持ち</div>
          <div className="text-sm font-bold leading-[1.8] text-ink">❄️ 寒い土地でたくましく暮らしていた</div>
          <div className="text-sm font-bold leading-[1.8] text-ink">🔥 道具を作り、火も使えた</div>
          <div className="text-sm font-bold leading-[1.8] text-ink">🪦 仲間をうめて、とむらっていた形跡もある</div>
        </div>
        <ArticleP>
          つまり、けっしておとった人類ではなかったのです。むしろ体の強さだけなら、サピエンスより上だったかもしれません。それなのに、なぜ彼らは消えて、力の弱いわたしたちが残ったのか。ミステリーはますます深まります。
        </ArticleP>
      </ArticleSection>

      <ArticleSection icon="❓" heading="なぜサピエンスだけ残った？ ― 答えはまだナゾ">
        <ArticleP>
          ここが今日いちばんのポイント。実は、はっきりした正解はまだわかっていません。研究者たちが今も議論している、本物のナゾなんです。有力な&quot;説&quot;をいくつか紹介しましょう。
        </ArticleP>
        <InfoBox head="🗣️ 説1：言葉と協力が得意だった？">
          サピエンスは言葉を使って、大人数で協力するのが得意だったのかもしれません。数の力、チームワークの力で、きびしい時代を乗りこえた――という考え方です。
        </InfoBox>
        <InfoBox head="🌍 説2：環境の変化に強かった？">
          地球の気候が大きく変わった時期に、いろんな食べ物・いろんな土地にうまく適応できたのがサピエンスだった、という説。特定の環境に強い親戚ほど、変化に弱かったのかもしれません。
        </InfoBox>
        <InfoBox head="🎲 説3：ただの「運」だった？">
          ちょっと意外ですが、これも真面目な説です。ほんの少しの人数の差や、たまたま病気が流行った・しなかった――そんな偶然が積み重なって、運よく生き残ったのがわたしたちだった、というもの。
        </InfoBox>
        <DarkBox head="⚖️ 大事なこと">
          「サピエンスがいちばん優秀だったから勝った」と単純には言えません。強かった親戚も消え、弱かったわたしたちが残った。優劣では説明しきれないのが、このナゾのおもしろいところです。
        </DarkBox>
      </ArticleSection>

      <ArticleSection icon="🧬" heading="いちばんの衝撃 ― 消えた親戚は、きみの中にいる">
        <ArticleP>
          さて、最後にとっておきの話を。「ネアンデルタール人は消えた」と言いましたよね。でも実は――完全には消えていません。
        </ArticleP>
        <ArticleP>
          現代人のDNA（体の設計図）を調べると、多くの人に<span className="font-black text-accent">ネアンデルタール人由来の遺伝子が数％</span>
          まざっていることがわかったのです。
        </ArticleP>
        <ArticleP>
          これは何を意味するか？　大昔、サピエンスとネアンデルタール人のあいだに子どもが生まれたということ。つまり親戚たちは、ただ滅びたのではなく、わたしたちの体の中に、ちょっとだけ生き続けているのです。
        </ArticleP>
        <Callout>
          → きみの中にも、何万年も前に消えたはずの親戚の&quot;かけら&quot;が入っているかもしれない。そう思うと、人類のミステリーが急に自分ごとになってきませんか？
        </Callout>
      </ArticleSection>

      <SummaryBox label={'まとめ ― わたしたちは"最後の一種類"'}>
        <div>
          ・昔の地球には、人類が何種類もいた
          <br />・力の強い親戚もいたのに、みんな消えた
          <br />・なぜサピエンスだけ残ったかは、まだナゾ
          <br />・でも彼らは、わたしたちのDNAに少しだけ生きている
        </div>
        <p className="m-0 mt-2.5 text-[15px] font-bold leading-[1.85]">
          わたしたちは、たくさんいた人類のうち、たまたま最後まで残った一種類。優秀だから残ったというより、いろんな偶然と条件が重なった結果なのかもしれません。そう考えると、「今ここに自分がいること」自体が、けっこうな奇跡に思えてきますね。
        </p>
      </SummaryBox>

      <BackToMagazine href="/magazine/rekishi" />
    </ArticleShell>
  );
}

function LastHumansSidebar() {
  return <ComingSoon className="flex-1 min-h-[420px] border-[4px]" />;
}

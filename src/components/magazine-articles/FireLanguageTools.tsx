import {
  ArticleShell, ArticleHeader, LeadBox, ArticleP, ArticleSection,
  InfoBox, Callout, SummaryBox, BackToMagazine, RelatedBook,
} from "@/components/MagazineArticleLayout";
import { ComingSoon } from "@/components/ui";

export function FireLanguageTools() {
  return (
    <ArticleShell volLabel="vol.1" backHref="/magazine/rekishi" sidebar={<FireLanguageToolsSidebar />}>
      <ArticleHeader category="歴史コラム" num={1} title="火・言葉・道具 ― 人類を変えた三大発明" />

      <LeadBox kicker="巻頭特集">たった3つの「わざ」が、弱い猿を地球の支配者に変えた</LeadBox>

      <ArticleP>
        皆さん、こんにちは！シャカマガ編集部です。今から数百万年前、人類の祖先は、するどい牙もキバも持たない、決して強い生き物ではありませんでした。それなのに、なぜ人類は地球上のあらゆる場所に広がり、文明を築くまでになったのでしょうか？
      </ArticleP>
      <ArticleP>
        その答えは「火」「言葉」「道具」という3つの発明にあります。この3つがそろったことで、人類はほかの動物には真似できないスピードで進化し、社会を作り上げていきました。今回はその秘密に迫ります！
      </ArticleP>

      <ArticleSection icon="🔥" heading="発明1：「火」を手に入れ、命と時間を守る">
        <ArticleP>原人の時代に使い始めたとされる「火」は、人類の生活を根本から変えました。</ArticleP>
        <InfoBox head="🍖 食べ物を「加熱」できる">
          肉や木の実を焼いたり煮たりできるようになり、消化しやすく栄養も取りやすくなりました。これが脳の発達を支えたと考えられています。
        </InfoBox>
        <InfoBox head="🛡️ 寒さと猛獣から身を守る">
          暖をとることで寒い地域にも住めるようになり、夜も明かりで猛獣を遠ざけられるようになりました。
        </InfoBox>
        <Callout>→ 火は「食」と「安全」を同時に手に入れる、最初の大発明でした。</Callout>
      </ArticleSection>

      <ArticleSection icon="🗣️" heading="発明2：「言葉」で知恵を未来へつなぐ">
        <ArticleP>原人から新人へと進化する中で発達した「言葉」は、人類だけが持つ最強の道具です。</ArticleP>
        <InfoBox head="🤝 仲間と協力できる">
          「あそこに獲物がいる」「あの場所は危ない」など情報を伝え合うことで、集団で狩りをしたり、危険を避けたりできるようになりました。
        </InfoBox>
        <InfoBox head="📚 知恵を次の世代に伝えられる">
          一人の発見や失敗を、言葉で子や孫に伝えられるようになりました。一人の一生では終わらない「知恵の積み重ね」が始まったのです。
        </InfoBox>
        <Callout>→ 言葉があったから、人類は「一人の力」ではなく「みんなの知恵」で生きられるようになりました。</Callout>
      </ArticleSection>

      <ArticleSection icon="🪨" heading="発明3：「道具」で体の弱さを補う">
        <ArticleP>
          人類は自分の体だけでは強い牙も鋭いツメも持っていません。その弱さを「道具」でおぎないました。
        </ArticleP>
        <InfoBox head="🪓 打製石器から磨製石器へ">
          石を打ち欠いた打製石器で狩りや解体を行い、やがて表面をみがいた磨製石器へと進化。切る・削る・掘るといった作業の効率が大きく上がりました。
        </InfoBox>
        <InfoBox head="🌾 農耕・牧畜への扉を開いた">
          道具の発達は土を耕す農耕や、動物を飼う牧畜も可能にしました。これにより人々は移動生活から「定住」へと生活を変えていきます。
        </InfoBox>
        <Callout>→ 道具は、弱い体を持つ人類が自然を切り開く「手の延長」になりました。</Callout>
      </ArticleSection>

      <SummaryBox label="まとめ">
        「火」で命と栄養を、「言葉」で知恵と協力を、「道具」で自然を切り開く力を手に入れた人類。この3つの発明が重なり合ったからこそ、弱かった祖先が地球中に広がり、文明を築くまでになったんだね！
      </SummaryBox>

      <BackToMagazine href="/magazine/rekishi" />
    </ArticleShell>
  );
}

function FireLanguageToolsSidebar() {
  return (
    <>
      <RelatedBook
        emoji="🔥"
        title="人類の進化 大図鑑"
        subtitle="火・言葉・道具の発見をたどる"
        amazonUrl="https://www.amazon.co.jp/s?k=%E4%BA%BA%E9%A1%9E%E3%81%AE%E9%80%B2%E5%8C%96%20%E5%9B%B3%E9%91%91%20%E5%AD%90%E4%BE%9B"
      />
      <ComingSoon className="min-h-[200px] border-[4px]" />
    </>
  );
}

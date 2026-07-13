import Image from "next/image";
import {
  ArticleShell, ArticleHeader, LeadBox, ArticleP, ArticleSection,
  InfoBox, ComparisonRow, Callout, SummaryBox, BackToMagazine, RelatedBook,
} from "@/components/MagazineArticleLayout";
import { ComingSoon } from "@/components/ui";

export function Seasons() {
  return (
    <ArticleShell volLabel="vol.1" backHref="/magazine/chiri" sidebar={<SeasonsSidebar />}>
      <ArticleHeader category="地理コラム" num={1} title="当たり前じゃない!? 日本に「春夏秋冬」がある4つの理由" />

      <Image
        src="/images/mag1-seasons.png"
        alt="春夏秋冬の風景イラスト"
        width={1280}
        height={720}
        className="w-full aspect-video object-cover border-[3px] border-ink rounded-2xl block"
      />

      <LeadBox kicker="巻頭特集">奇跡のバランス！日本の美しい「四季」はどうやって作られる？</LeadBox>

      <ArticleP>
        皆さん、こんにちは！シャカマガ編集部です。春の桜、夏の海、秋の紅葉、冬の雪……。私たちにとって「春夏秋冬」があるのは当たり前ですよね。でも、世界地図を広げてみると、一年中暑い国や、ずっと氷に覆われている国もあります。
      </ArticleP>
      <ArticleP>
        では、なぜ日本にはこんなにもハッキリとした「4つの季節」があるのでしょうか？実はそれ、宇宙レベルの偶然と、日本列島ならではの絶妙な地理条件が重なり合った「奇跡のコラボレーション」だったんです！その秘密を、4つの理由に分けて解き明かしていきましょう！
      </ArticleP>

      <ArticleSection icon="🌍" heading="理由1：地球が「ナナメ」に傾いて回っているから">
        <ArticleP>季節ができる最も根本的な理由は、地球の「動き方」にあります。</ArticleP>
        <InfoBox head="🌐 地軸の傾き">
          地球は自転しながら、1年かけて太陽の周りを回って（公転）います。このとき地軸はまっすぐではなく、約23.4度ナナメに傾いたまま回っているんです。
        </InfoBox>
        <InfoBox head="☀️ 太陽の光の当たり方が変わる">
          傾いているため、地球の位置によって太陽の光の角度（南中高度）や昼の長さが変わります。
        </InfoBox>
        <ComparisonRow
          items={[
            { label: "夏", body: "光がほぼ真上から当たり、地面が強く熱せられて昼も長い。" },
            { label: "冬", body: "光がナナメから弱く当たり、地面が温まらず昼も短い。" },
          ]}
        />
        <Callout>→ これが、地球規模で見たときの「夏は暑く、冬は寒い」理由です。</Callout>
      </ArticleSection>

      <ArticleSection icon="📍" heading="理由2：日本が「中緯度」にあるから">
        <ArticleP>
          地球が傾いているからといって、どこでも四季ができるわけではありません。日本の「場所」がポイントです。
        </ArticleP>
        <InfoBox head="🔥 赤道付近（低緯度）">太陽の光が一年中強く当たるため、ずっと「夏」のような気候です。</InfoBox>
        <InfoBox head="❄️ 北極・南極（高緯度）">
          太陽の光が一年中ナナメからしか当たらないため、ずっと「冬」のような気候です。
        </InfoBox>
        <InfoBox head="🗾 日本の位置（中緯度）">
          赤道と北極のちょうど中間あたり（北緯約20〜45度）の「中緯度」に位置しています。
        </InfoBox>
        <Callout>
          → 中緯度は光の当たり方が1年で最もダイナミックに変化するエリア。だから暑すぎず寒すぎず、メリハリのある春夏秋冬が生まれます。
        </Callout>
      </ArticleSection>

      <ArticleSection icon="🌬️" heading="理由3：季節を運ぶ「モンスーン（季節風）」があるから">
        <ArticleP>日本のはっきりとした季節感を決定づけているのが、日本周辺に吹く風です。</ArticleP>
        <InfoBox head="🔄 モンスーン（季節風）とは">
          季節によって吹く方向が逆になる風のこと。海と陸の「温まりやすさ・冷めやすさ」の違いから生まれます。
        </InfoBox>
        <InfoBox head="🌀 夏の日本（南東からの風）">
          太平洋側から「暖かく湿った季節風」が吹き込み、日本の夏特有の「むし暑さ」や多くの雨をもたらします。
        </InfoBox>
        <InfoBox head="🌨️ 冬の日本（北西からの風）">
          大陸から「冷たく乾いた季節風」が吹き込みます。日本海を渡るときに水分を吸い込み、山脈にぶつかって日本海側に大雪を降らせます（太平洋側は乾いた晴れが続きます）。
        </InfoBox>
        <Callout>→ このモンスーンのおかげで、日本の夏と冬のカラーが全くちがうものになっています。</Callout>
      </ArticleSection>

      <ArticleSection icon="🌊" heading="理由4：海流と地形のスペシャルコンボ">
        <ArticleP>
          最後に、日本がユーラシア大陸の東の端にあり、海に囲まれた島国であることも欠かせない要素です。
        </ArticleP>
        <InfoBox head="🌊 海流のぶつかり合い">
          南からの暖流（黒潮・対馬海流）と、北からの寒流（親潮・リマン海流）が流れています。これが気温や降水量に影響し、春や秋の「長雨（梅雨や秋雨）」の要因の一つにもなります。
        </InfoBox>
        <InfoBox head="⛰️ 背骨のような山脈">
          列島の中央には高く険しい山脈が連なります。この山脈が季節風をブロックするため、「日本海側」と「太平洋側」でまったくちがう冬の景色を作り出します。
        </InfoBox>
      </ArticleSection>

      <SummaryBox label="まとめ">
        「地軸の傾き」×「中緯度」×「季節風」×「海流と地形」。この4つの奇跡が重なって、日本の美しい春夏秋冬は生まれているんだね！
      </SummaryBox>

      <BackToMagazine href="/magazine/chiri" />
    </ArticleShell>
  );
}

function SeasonsSidebar() {
  return (
    <>
      <RelatedBook
        emoji="🌍"
        title="図解 世界の気候と暮らし"
        subtitle="四季と気候帯をやさしく解説"
        amazonUrl="https://www.amazon.co.jp/s?k=%E4%B8%96%E7%95%8C%E3%81%AE%E6%B0%97%E5%80%99%E3%81%A8%E6%9A%AE%E3%82%89%E3%81%97%20%E5%9B%B3%E9%91%91"
      />
      <ComingSoon className="min-h-[200px] border-[4px]" />
    </>
  );
}

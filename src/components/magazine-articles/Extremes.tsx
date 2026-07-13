import Image from "next/image";
import {
  ArticleShell, ArticleHeader, LeadBox, ArticleP, ArticleSection,
  InfoBox, Callout, SummaryBox, BackToMagazine, RelatedBook,
} from "@/components/MagazineArticleLayout";
import { ComingSoon } from "@/components/ui";

export function Extremes() {
  return (
    <ArticleShell volLabel="vol.2" backHref="/magazine/chiri" sidebar={<ExtremesSidebar />}>
      <ArticleHeader category="地理コラム" num={2} title="地球の限界に挑む！世界一「暑い」場所と「寒い」場所" />

      <Image
        src="/images/mag2-extremes.png"
        alt="灼熱の谷と極寒の村のイラスト"
        width={1280}
        height={720}
        className="w-full aspect-video object-cover border-[3px] border-ink rounded-2xl block"
      />

      <LeadBox kicker="巻頭特集">信じられない温度差！灼熱の谷と極寒の村のサバイバル</LeadBox>

      <ArticleP>
        皆さん、こんにちは！シャカマガ編集部です。日本の夏も「暑すぎる！」と毎年話題になりますが、世界には私たちの想像をはるかに超える「極限の気候」を持つ場所があります。
      </ArticleP>
      <ArticleP>
        地球上で一番気温が高かった場所は？逆に、一番低かった場所は？そして「なぜそこまで極端な気温になるのか？」今回は、地球の限界とも言える2つの地域をクローズアップし、その驚きの地理的理由に迫ります！
      </ArticleP>

      <ArticleSection icon="🔥" heading="世界一「暑い」場所：アメリカ・デスバレー（死の谷）">
        <ArticleP>
          公式な世界最高気温の記録を持つのは、アメリカ・カリフォルニア州にある「デスバレー（Death Valley）」。1913年になんと
          <span className="font-black text-accent">56.7℃</span>
          という、お風呂のお湯よりも熱いとんでもない気温を記録しました（現在も世界記録としてギネス認定）。
        </ArticleP>
        <div className="bg-mint border-[3px] border-ink rounded-2xl px-3.5 py-3 text-[13.5px] font-bold leading-relaxed text-ink">
          ※ ちなみに日本の最高気温記録は41.8℃（群馬県など）です。
        </div>
        <InfoBox head="🏜️ 暑さの理由1：熱を逃がさない「巨大なオーブン」">
          デスバレーは高い山々に囲まれた「盆地」で、一番低い場所は海面より86mも低い（海抜マイナス86m）すり鉢の底のような地形。熱せられた空気が山にブロックされて逃げられず、谷の底で熱気を増していきます。
        </InfoBox>
        <InfoBox head="☀️ 暑さの理由2：雨を降らせない「フェーン現象」">
          西側の山脈を越えるとき、海からの湿った風は雨を降らせてしまいます。山を越えて吹き下ろす風は「カラカラに乾いた熱風」に（フェーン現象）。雲ができず、強烈な直射日光が一日中地面を照りつけ続けます。
        </InfoBox>
      </ArticleSection>

      <ArticleSection icon="❄️" heading="世界一「寒い」場所：ロシア・オイミャコン村">
        <ArticleP>
          人が定住している場所として世界一寒いのが、ロシア・サハ共和国の「オイミャコン村」。1926年に
          <span className="font-black text-accent">マイナス67.8℃</span>
          という信じられない記録を打ち立てました（人が住まない南極大陸ではマイナス89.2℃の記録も）。
        </ArticleP>
        <div className="bg-mint border-[3px] border-ink rounded-2xl px-3.5 py-3 text-[13.5px] font-bold leading-relaxed text-ink">
          マイナス50℃を下回ると、外で吐いた息が「シュッ」と凍る音が聞こえ、まつ毛や髪の毛も一瞬で凍りつきます。
        </div>
        <InfoBox head="🏔️ 寒さの理由1：冷気がたまる「巨大な冷凍庫」">
          オイミャコンもデスバレーと同じ「山に囲まれた盆地」。冬はシベリアの冷たい空気が盆地の底に沈み込んでたまり、周りの山が壁になって逃げず、巨大な冷凍庫のように底冷えします。（「暑い盆地」と「寒い盆地」、地形の理由は似ていますね！）
        </InfoBox>
        <InfoBox head="🌬️ 寒さの理由2：冬を支配する「シベリア高気圧」">
          冬、ユーラシア大陸北部は非常に冷たく重い「シベリア高気圧」に覆われます。オイミャコンはこの強力な寒気団のど真ん中。太陽の光が弱い冬の間は、とてつもない寒さに閉ざされます。
        </InfoBox>
      </ArticleSection>

      <SummaryBox label="まとめ">
        暑い谷も寒い村も、ヒミツは同じ「盆地」の地形！ そこに「フェーン現象」や「シベリア高気圧」が重なって、地球の限界の気温が生まれているんだね。
      </SummaryBox>

      <BackToMagazine href="/magazine/chiri" />
    </ArticleShell>
  );
}

function ExtremesSidebar() {
  return (
    <>
      <RelatedBook
        emoji="🌡️"
        title="世界の気温 記録図鑑"
        subtitle="暑い場所・寒い場所を写真でめぐる"
        amazonUrl="https://www.amazon.co.jp/s?k=%E4%B8%96%E7%95%8C%E3%81%AE%E6%B0%97%E6%B8%A9%20%E8%A8%98%E9%8C%B2%20%E5%9B%B3%E9%91%91"
      />
      <ComingSoon className="min-h-[200px] border-[4px]" />
    </>
  );
}

// シャカマガ (magazine) article index — mirrors magArticleIndex from ホーカゴシャカイ.dc.html.
// Article body content lives in per-article components under src/app/magazine/[subject]/[article]/.

import type { SubjectKey } from "./units";

export interface MagArticleMeta {
  id: number;
  /** Article number within its subject track (シャカマガ ＃N) — restarts per subject. */
  num: number;
  slug: string;
  emoji: string;
  subjectKey: SubjectKey;
  title: string;
  /** Extra keywords baked into the original search index, not shown in the UI. */
  keywords: string;
}

export const magArticleIndex: MagArticleMeta[] = [
  {
    id: 1, num: 1, slug: "seasons", emoji: "🗺️", subjectKey: "chiri",
    title: "日本に「春夏秋冬」がある4つの理由",
    keywords: "地理コラム 春夏秋冬 四季 季節 地球 地軸 傾き 公転 自転 太陽 南中高度 中緯度 赤道 北極 南極 モンスーン 季節風 暖流 寒流 黒潮 対馬海流 親潮 リマン海流 海流 山脈 梅雨 秋雨 気候 気温",
  },
  {
    id: 2, num: 2, slug: "extremes", emoji: "🌡️", subjectKey: "chiri",
    title: "世界一「暑い」場所と「寒い」場所",
    keywords: "地理コラム 気温 暑い 寒い デスバレー 死の谷 アメリカ カリフォルニア 世界最高気温 盆地 フェーン現象 山脈 乾燥 オイミャコン村 ロシア サハ共和国 世界最低気温 シベリア高気圧 冷気 気候 地形",
  },
  {
    id: 3, num: 1, slug: "fire-language-tools", emoji: "🔥", subjectKey: "rekishi",
    title: "火・言葉・道具 ― 人類を変えた三大発明",
    keywords: "歴史コラム 人類 進化 火 言葉 道具 原人 新人 猿人 打製石器 磨製石器 農耕 牧畜 定住 狩り 脳の発達 知恵 協力 文明",
  },
  {
    id: 4, num: 2, slug: "last-humans", emoji: "🧬", subjectKey: "rekishi",
    title: "わたしたちは\"最後の人類\"だった ― 消えた親戚たちのミステリー",
    keywords: "歴史コラム 人類 進化 ホモ・サピエンス ネアンデルタール人 デニソワ人 枝分かれ 絶滅 DNA 遺伝子 混血 言葉 協力 環境変化 適応 運",
  },
  {
    id: 5, num: 1, slug: "allowance-inflation", emoji: "🏷️", subjectKey: "koumin",
    title: "きみのお小遣い、なぜ「値上がり」に負けるのか？",
    keywords: "公民コラム 経済 お小遣い 物価 値段 需要 供給 インフレ インフレーション デフレ デフレーション 中央銀行 日本銀行 日銀 お金の価値",
  },
];

export function articlesForSubject(subjectKey: SubjectKey): MagArticleMeta[] {
  return magArticleIndex.filter((a) => a.subjectKey === subjectKey);
}

export function findArticle(subjectKey: string, slug: string): MagArticleMeta | undefined {
  return magArticleIndex.find((a) => a.subjectKey === subjectKey && a.slug === slug);
}

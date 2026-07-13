// Maps every selectable unit title -> its slide deck + quiz bank + nav region label.
// Mirrors currentDeck() / baseQuiz() from the original ホーカゴシャカイ.dc.html.

import type { Slide, QuizQuestion } from "./types";

import {
  asiaSlides, asiaQuiz,
  europeSlides, euroQuiz,
  africaSlides, africaQuiz,
  naSlides, naQuiz,
  climateSlides, climateQuiz,
  saSlides, saQuiz,
  oceaniaSlides, oceaniaQuiz,
} from "./geo-world";

import {
  kyushuSlides, kyushuQuiz,
  chugokuShikokuSlides, chugokuShikokuQuiz,
  kinkiSlides, kinkiQuiz,
  chubuSlides, chubuQuiz,
  kantoSlides, kantoQuiz,
  tohokuSlides, tohokuQuiz,
  hokkaidoSlides, hokkaidoQuiz,
  worldJapanSlides, worldJapanQuiz,
  japanGeoSlides, japanGeoQuiz,
  japanPopIndSlides, japanPopIndQuiz,
} from "./geo-japan";

import {
  azuchiMomoyamaSlides, azuchiMomoyamaQuiz,
  edoEarlySlides, edoEarlyQuiz,
  edoMidSlides, edoMidQuiz,
  edoLateSlides, edoLateQuiz,
  modernWestSlides, modernWestQuiz,
  meijiEarlySlides, meijiEarlyQuiz,
  meijiMidSlides, meijiMidQuiz,
  meijiLateSlides, meijiLateQuiz,
} from "./history-1";

import {
  taishoEarlySlides, taishoEarlyQuiz,
  taishoLateSlides, taishoLateQuiz,
  showaPrewarEarlySlides, showaPrewarEarlyQuiz,
  showaPrewarMidSlides, showaPrewarMidQuiz,
  showaPrewarLateSlides, showaPrewarLateQuiz,
  showaPostwarEarlySlides, showaPostwarEarlyQuiz,
  showaPostwarMidSlides, showaPostwarMidQuiz,
  showaPostwarLateSlides, showaPostwarLateQuiz,
  ancientSlides, ancientQuiz,
  jomonSlides, jomonQuiz,
  asukaSlides, asukaQuiz,
  kamakuraSlides, kamakuraQuiz,
  muromachiSlides, muromachiQuiz,
} from "./history-2";

import {
  kouminSocietySlides, kouminSocietyQuiz,
  kouminConstitutionSlides, kouminConstitutionQuiz,
  kcConstSlides, kcConstQuiz,
  kcRights1Slides, kcRights1Quiz,
  kcRights2Slides, kcRights2Quiz,
  kcPolitics1Slides, kcPolitics1Quiz,
  kcPolitics2Slides, kcPolitics2Quiz,
} from "./civics-1";

import {
  ecoHouseholdSlides, ecoHouseholdQuiz,
  ecoMarketSlides, ecoMarketQuiz,
  ecoFinanceSlides, ecoFinanceQuiz,
  ecoBusinessCycleSlides, ecoBusinessCycleQuiz,
  ecoFiscalSlides, ecoFiscalQuiz,
  ecoWelfareSlides, ecoWelfareQuiz,
  globalIntlSlides, globalIntlQuiz,
  globalPeaceSlides, globalPeaceQuiz,
  globalIssuesSlides, globalIssuesQuiz,
} from "./civics-2";

export interface UnitContent {
  /** URL slug for this unit, used in /slides/[subject]/[unit] and /quiz/[subject]/[unit]. */
  slug: string;
  /** Nav pill label (region/era tag shown at the top of slides & quiz screens). */
  region: string;
  slides: Slide[];
  quiz: QuizQuestion[];
}

// Keyed by the exact Japanese unit title as it appears in units.ts.
export const contentMap: Record<string, UnitContent> = {
  // --- 地理：世界の様々な地域 ---
  "世界と日本の地域構成": { slug: "world-japan", region: "世界と日本の地域構成", slides: worldJapanSlides, quiz: worldJapanQuiz },
  "世界の気候と人々の生活": { slug: "climate", region: "世界の気候と人々の生活", slides: climateSlides, quiz: climateQuiz },
  "アジア州": { slug: "asia", region: "アジア州", slides: asiaSlides, quiz: asiaQuiz },
  "ヨーロッパ州": { slug: "europe", region: "ヨーロッパ州", slides: europeSlides, quiz: euroQuiz },
  "アフリカ州": { slug: "africa", region: "アフリカ州", slides: africaSlides, quiz: africaQuiz },
  "北アメリカ州": { slug: "north-america", region: "北アメリカ州", slides: naSlides, quiz: naQuiz },
  "南アメリカ州": { slug: "south-america", region: "南アメリカ州", slides: saSlides, quiz: saQuiz },
  "オセアニア州": { slug: "oceania", region: "オセアニア州", slides: oceaniaSlides, quiz: oceaniaQuiz },

  // --- 地理：日本の様々な地域 ---
  "日本の地域構成と自然環境": { slug: "japan-geo", region: "日本の地域構成と自然環境", slides: japanGeoSlides, quiz: japanGeoQuiz },
  "日本の人口と資源・産業": { slug: "japan-pop-ind", region: "日本の人口と資源・産業", slides: japanPopIndSlides, quiz: japanPopIndQuiz },
  "九州地方": { slug: "kyushu", region: "九州・沖縄地方", slides: kyushuSlides, quiz: kyushuQuiz },
  "中国・四国地方": { slug: "chugoku-shikoku", region: "中国・四国地方", slides: chugokuShikokuSlides, quiz: chugokuShikokuQuiz },
  "近畿地方": { slug: "kinki", region: "近畿地方", slides: kinkiSlides, quiz: kinkiQuiz },
  "中部地方": { slug: "chubu", region: "中部地方", slides: chubuSlides, quiz: chubuQuiz },
  "関東地方": { slug: "kanto", region: "関東地方", slides: kantoSlides, quiz: kantoQuiz },
  "東北地方": { slug: "tohoku", region: "東北地方", slides: tohokuSlides, quiz: tohokuQuiz },
  "北海道": { slug: "hokkaido", region: "北海道", slides: hokkaidoSlides, quiz: hokkaidoQuiz },

  // --- 歴史：古代〜中世 ---
  "人類の誕生と古代文明": { slug: "ancient", region: "人類の誕生と古代文明", slides: ancientSlides, quiz: ancientQuiz },
  "縄文・弥生・古墳時代": { slug: "jomon", region: "縄文・弥生・古墳時代", slides: jomonSlides, quiz: jomonQuiz },
  "飛鳥・奈良・平安時代": { slug: "asuka", region: "飛鳥・奈良・平安時代", slides: asukaSlides, quiz: asukaQuiz },
  "鎌倉時代": { slug: "kamakura", region: "鎌倉時代", slides: kamakuraSlides, quiz: kamakuraQuiz },
  "室町時代": { slug: "muromachi", region: "室町時代", slides: muromachiSlides, quiz: muromachiQuiz },

  // --- 歴史：近世 ---
  "安土桃山時代": { slug: "azuchi-momoyama", region: "安土桃山時代", slides: azuchiMomoyamaSlides, quiz: azuchiMomoyamaQuiz },
  "江戸時代　～前期～": { slug: "edo-early", region: "江戸時代　～前期～", slides: edoEarlySlides, quiz: edoEarlyQuiz },
  "江戸時代　～中期～": { slug: "edo-mid", region: "江戸時代　～中期～", slides: edoMidSlides, quiz: edoMidQuiz },
  "江戸時代　～後期～": { slug: "edo-late", region: "江戸時代　～後期～", slides: edoLateSlides, quiz: edoLateQuiz },

  // --- 歴史：近代 ---
  "欧米における近代社会の成立": { slug: "modern-west", region: "欧米における近代社会の成立", slides: modernWestSlides, quiz: modernWestQuiz },
  "明治時代　〜前期〜": { slug: "meiji-early", region: "明治時代　〜前期〜", slides: meijiEarlySlides, quiz: meijiEarlyQuiz },
  "明治時代　〜中期〜": { slug: "meiji-mid", region: "明治時代　〜中期〜", slides: meijiMidSlides, quiz: meijiMidQuiz },
  "明治時代　〜後期〜": { slug: "meiji-late", region: "明治時代　〜後期〜", slides: meijiLateSlides, quiz: meijiLateQuiz },

  // --- 歴史：二つの世界大戦 ---
  "大正時代　〜前期〜": { slug: "taisho-early", region: "大正時代　〜前期〜", slides: taishoEarlySlides, quiz: taishoEarlyQuiz },
  "大正時代　〜後期〜": { slug: "taisho-late", region: "大正時代　〜後期〜", slides: taishoLateSlides, quiz: taishoLateQuiz },
  "昭和時代［戦前・戦中］　〜前期〜": { slug: "showa-prewar-early", region: "昭和時代［戦前・戦中］　〜前期〜", slides: showaPrewarEarlySlides, quiz: showaPrewarEarlyQuiz },
  "昭和時代［戦前・戦中］　〜中期〜": { slug: "showa-prewar-mid", region: "昭和時代［戦前・戦中］　〜中期〜", slides: showaPrewarMidSlides, quiz: showaPrewarMidQuiz },
  "昭和時代［戦前・戦中］　〜後期〜": { slug: "showa-prewar-late", region: "昭和時代［戦前・戦中］　〜後期〜", slides: showaPrewarLateSlides, quiz: showaPrewarLateQuiz },

  // --- 歴史：現代 ---
  "昭和時代［戦後］〜現代　〜前期〜": { slug: "showa-postwar-early", region: "昭和時代［戦後］〜現代　〜前期〜", slides: showaPostwarEarlySlides, quiz: showaPostwarEarlyQuiz },
  "昭和時代［戦後］〜現代　〜中期〜": { slug: "showa-postwar-mid", region: "昭和時代［戦後］〜現代　〜中期〜", slides: showaPostwarMidSlides, quiz: showaPostwarMidQuiz },
  "昭和時代［戦後］〜現代　〜後期〜": { slug: "showa-postwar-late", region: "昭和時代［戦後］〜現代　〜後期〜", slides: showaPostwarLateSlides, quiz: showaPostwarLateQuiz },

  // --- 公民：私たちが生きる現代社会 ---
  "現代社会の特色": { slug: "koumin-society", region: "私たちが生きる現代社会", slides: kouminSocietySlides, quiz: kouminSocietyQuiz },

  // --- 公民：個人の尊重と日本国憲法 ---
  "人権と日本国憲法のあゆみ": { slug: "koumin-constitution", region: "個人の尊重と日本国憲法", slides: kouminConstitutionSlides, quiz: kouminConstitutionQuiz },
  "日本国憲法の三大原則と平和主義": { slug: "kc-const", region: "個人の尊重と日本国憲法", slides: kcConstSlides, quiz: kcConstQuiz },
  "基本的人権①（自由権・平等権・社会権）": { slug: "kc-rights1", region: "個人の尊重と日本国憲法", slides: kcRights1Slides, quiz: kcRights1Quiz },
  "基本的人権②と国際社会の人権": { slug: "kc-rights2", region: "個人の尊重と日本国憲法", slides: kcRights2Slides, quiz: kcRights2Quiz },
  "政治参加・選挙と国会のしくみ": { slug: "kc-politics1", region: "個人の尊重と日本国憲法", slides: kcPolitics1Slides, quiz: kcPolitics1Quiz },
  "内閣・裁判所と地方自治": { slug: "kc-politics2", region: "個人の尊重と日本国憲法", slides: kcPolitics2Slides, quiz: kcPolitics2Quiz },

  // --- 公民：私たちの暮らしと経済 ---
  "家計と企業のしくみ（消費生活・株式会社）": { slug: "eco-household", region: "私たちの暮らしと経済", slides: ecoHouseholdSlides, quiz: ecoHouseholdQuiz },
  "市場経済と価格の決まり方": { slug: "eco-market", region: "私たちの暮らしと経済", slides: ecoMarketSlides, quiz: ecoMarketQuiz },
  "金融のしくみと為替（日本銀行・貿易）": { slug: "eco-finance", region: "私たちの暮らしと経済", slides: ecoFinanceSlides, quiz: ecoFinanceQuiz },
  "景気変動と物価（GDP・インフレ）": { slug: "eco-business-cycle", region: "私たちの暮らしと経済", slides: ecoBusinessCycleSlides, quiz: ecoBusinessCycleQuiz },
  "財政と税金のしくみ": { slug: "eco-fiscal", region: "私たちの暮らしと経済", slides: ecoFiscalSlides, quiz: ecoFiscalQuiz },
  "国民生活と社会保障・労働・環境": { slug: "eco-welfare", region: "私たちの暮らしと経済", slides: ecoWelfareSlides, quiz: ecoWelfareQuiz },

  // --- 公民：地球社会と私たち ---
  "国際社会のしくみと国際連合": { slug: "global-intl", region: "地球社会と私たち", slides: globalIntlSlides, quiz: globalIntlQuiz },
  "世界平和と文化の多様性（紛争・核・軍縮）": { slug: "global-peace", region: "地球社会と私たち", slides: globalPeaceSlides, quiz: globalPeaceQuiz },
  "地球規模の課題（環境・資源・貧困）": { slug: "global-issues", region: "地球社会と私たち", slides: globalIssuesSlides, quiz: globalIssuesQuiz },
};

// Reverse lookup: slug -> unit title, needed by dynamic [unit] routes.
export const unitTitleBySlug: Record<string, string> = Object.fromEntries(
  Object.entries(contentMap).map(([title, c]) => [c.slug, title])
);

export function getUnitContent(slug: string): (UnitContent & { title: string }) | undefined {
  const title = unitTitleBySlug[slug];
  if (!title) return undefined;
  return { ...contentMap[title], title };
}

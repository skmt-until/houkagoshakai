// Subject / unit menu structure — mirrors geoUnits / histUnits / kouminUnits / subjects
// from the original design (ホーカゴシャカイ.dc.html).

export type SubjectKey = "chiri" | "rekishi" | "koumin";

export interface Subject {
  key: SubjectKey;
  name: string;
  emoji: string;
  sub: string;
  bg: string;
}

export const subjects: Subject[] = [
  { key: "chiri", name: "地理", emoji: "🌏", sub: "世界と日本のすがた", bg: "#E6F1E9" },
  { key: "rekishi", name: "歴史", emoji: "🏯", sub: "時代の移りかわり", bg: "#DCEDE2" },
  { key: "koumin", name: "公民", emoji: "⚖️", sub: "くらしと社会のしくみ", bg: "#E9F2EC" },
];

export interface UnitRef {
  /** Exact Japanese unit title — also the primary key into contentMap. */
  title: string;
  sub?: string;
}

export interface UnitGroup {
  group: string;
  items: UnitRef[];
}

export const geoUnits: UnitGroup[] = [
  {
    group: "世界の様々な地域",
    items: [
      { title: "世界と日本の地域構成", sub: "地球の姿、緯度・経度、世界の国々" },
      { title: "世界の気候と人々の生活", sub: "気候帯、宗教、生活文化" },
      { title: "アジア州", sub: "経済成長、人口問題、多様な文化" },
      { title: "ヨーロッパ州", sub: "EU、環境問題、農業・工業" },
      { title: "アフリカ州", sub: "モノカルチャー経済、発展と課題" },
      { title: "北アメリカ州", sub: "大量生産・大量消費、多民族国家" },
      { title: "南アメリカ州", sub: "熱帯林の開発と保全、日系人" },
      { title: "オセアニア州", sub: "多文化社会、鉱産資源" },
    ],
  },
  {
    group: "日本の様々な地域",
    items: [
      { title: "日本の地域構成と自然環境", sub: "地形、気候、自然災害と防災" },
      { title: "日本の人口と資源・産業", sub: "少子高齢化、エネルギー問題、農林水産業・工業・商業" },
      { title: "九州地方", sub: "自然環境と防災、農業、環境保全" },
      { title: "中国・四国地方", sub: "過疎化と町おこし、交通網の発達" },
      { title: "近畿地方", sub: "歴史的景観の保全、都市問題" },
      { title: "中部地方", sub: "地場産業、東海工業地域、高冷地農業" },
      { title: "関東地方", sub: "首都圏の役割、都市の過密、近郊農業" },
      { title: "東北地方", sub: "伝統的工芸品、稲作、東日本大震災からの復興" },
      { title: "北海道", sub: "大規模農業、アイヌの文化、自然環境の保全" },
    ],
  },
];

export const histUnits: UnitGroup[] = [
  {
    group: "古代までの日本",
    items: [
      { title: "人類の誕生と古代文明" },
      { title: "縄文・弥生・古墳時代" },
      { title: "飛鳥・奈良・平安時代" },
    ],
  },
  {
    group: "中世の日本",
    items: [{ title: "鎌倉時代" }, { title: "室町時代" }],
  },
  {
    group: "近世の日本",
    items: [
      { title: "安土桃山時代" },
      { title: "江戸時代　～前期～" },
      { title: "江戸時代　～中期～" },
      { title: "江戸時代　～後期～" },
    ],
  },
  {
    group: "近代の日本と世界",
    items: [
      { title: "欧米における近代社会の成立" },
      { title: "明治時代　〜前期〜" },
      { title: "明治時代　〜中期〜" },
      { title: "明治時代　〜後期〜" },
    ],
  },
  {
    group: "二つの世界大戦と日本",
    items: [
      { title: "大正時代　〜前期〜" },
      { title: "大正時代　〜後期〜" },
      { title: "昭和時代［戦前・戦中］　〜前期〜" },
      { title: "昭和時代［戦前・戦中］　〜中期〜" },
      { title: "昭和時代［戦前・戦中］　〜後期〜" },
    ],
  },
  {
    group: "現代の日本と世界",
    items: [
      { title: "昭和時代［戦後］〜現代　〜前期〜" },
      { title: "昭和時代［戦後］〜現代　〜中期〜" },
      { title: "昭和時代［戦後］〜現代　〜後期〜" },
    ],
  },
];

export const kouminUnits: UnitGroup[] = [
  {
    group: "私たちが生きる現代社会",
    items: [{ title: "現代社会の特色" }],
  },
  {
    group: "個人の尊重と日本国憲法",
    items: [
      { title: "人権と日本国憲法のあゆみ" },
      { title: "日本国憲法の三大原則と平和主義" },
      { title: "基本的人権①（自由権・平等権・社会権）" },
      { title: "基本的人権②と国際社会の人権" },
      { title: "政治参加・選挙と国会のしくみ" },
      { title: "内閣・裁判所と地方自治" },
    ],
  },
  {
    group: "私たちの暮らしと経済",
    items: [
      { title: "家計と企業のしくみ（消費生活・株式会社）" },
      { title: "市場経済と価格の決まり方" },
      { title: "金融のしくみと為替（日本銀行・貿易）" },
      { title: "景気変動と物価（GDP・インフレ）" },
      { title: "財政と税金のしくみ" },
      { title: "国民生活と社会保障・労働・環境" },
    ],
  },
  {
    group: "地球社会と私たち",
    items: [
      { title: "国際社会のしくみと国際連合" },
      { title: "世界平和と文化の多様性（紛争・核・軍縮）" },
      { title: "地球規模の課題（環境・資源・貧困）" },
    ],
  },
];

export const unitGroupsBySubject: Record<SubjectKey, UnitGroup[]> = {
  chiri: geoUnits,
  rekishi: histUnits,
  koumin: kouminUnits,
};

export const selMeta = {
  slides: { icon: "📖", label: "スライドで知識をカクニン！" },
  quiz: { icon: "🎮", label: "クイズで実力をカクニン！" },
  mag: { icon: "📰", label: "シャカマガ" },
} as const;

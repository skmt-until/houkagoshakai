// おすすめ教材ガイド data — mirrors materialGroups from ホーカゴシャカイ.dc.html verbatim.

export interface MaterialItem {
  cover: string;
  tag: string;
  title: string;
  blurb: string;
}

export interface MaterialGroup {
  icon: string;
  label: string;
  items: MaterialItem[];
}

export const materialGroups: MaterialGroup[] = [
  {
    icon: "📚", label: "全教科で使える", items: [
      { cover: "📕", tag: "一問一答", title: "中学社会 一問一答", blurb: "第1条の「思い出す練習」に最適。すきま時間にくり返し自己テストできる定番。" },
      { cover: "📗", tag: "まとめ", title: "スピードチェック 要点整理", blurb: "習った日の夜に5分でおさらい。第2条の「こまめな復習」にぴったり。" },
      { cover: "🗂️", tag: "カード", title: "書いて覚える 暗記カード", blurb: "間違えた問題に印をつけて反復。覚えていない所だけを効率よく回せる。" },
    ],
  },
  {
    icon: "🗾", label: "地理", items: [
      { cover: "🗺️", tag: "地図", title: "書き込み式 白地図ノート", blurb: "第4条「図とセット」を実践。地名を場所と一緒に手で書いて覚えられる。" },
      { cover: "📊", tag: "資料", title: "中学地理 データブック", blurb: "グラフや統計から「なぜ？」を読み取る力がつく。資料問題対策に。" },
    ],
  },
  {
    icon: "📜", label: "歴史", items: [
      { cover: "📜", tag: "年表", title: "流れがわかる 歴史年表", blurb: "出来事の順番と前後関係を一目で確認。第4条の年表学習にそのまま使える。" },
      { cover: "📚", tag: "まんが", title: "まんがで学ぶ 日本の歴史", blurb: "「なぜ起きたか」をストーリーで理解。丸暗記をやめる第3条に効く。" },
      { cover: "📕", tag: "一問一答", title: "歴史 一問一答ドリル", blurb: "人物・年号をテスト形式で定着。年表とセットで使うと効果アップ。" },
    ],
  },
  {
    icon: "⚖️", label: "公民", items: [
      { cover: "📰", tag: "時事", title: "ニュースで学ぶ 公民", blurb: "身近な話題から仕組みを理解。「なぜ？」をセットで覚える第3条向き。" },
      { cover: "📘", tag: "図解", title: "図解でわかる 政治・経済", blurb: "関係図や矢印で仕組みを整理。文字だけに頼らない第4条の学習に。" },
    ],
  },
];

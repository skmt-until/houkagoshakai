# 暮らしと経済の学習内容

_Started 2026-07-12 20:55 UTC_

---

## User

以下の内容を参考にして、スライドとクイズを●私たちの暮らしと経済の下のボタンに追加してください。今あるボタンの個数や名前、分類の仕方はあなたで考えてもいいですし、質問してくれてもいいです。以下内容になります。

私たちの生活と経済（家計・企業）

経済活動（生産・流通・消費）
家計
消費支出・貯蓄
契約（消費者契約）
消費者の権利（消費者基本法）
クーリング・オフ制度
製造物責任法（PL法）
企業（公企業・私企業）
株式会社
株式・株主
株主総会
配当
証券取引所
企業の社会的責任（CSR）
中小企業・大企業

市場経済のしくみ

市場経済
需要と供給
均衡価格
市場価格
独占価格・寡占価格
独占禁止法
公正取引委員会
公共料金
流通（卸売・小売）
POSシステム

金融のしくみ

金融（直接金融・間接金融）
銀行
日本銀行（中央銀行）
発券銀行・銀行の銀行・政府の銀行
金融政策（公開市場操作）
円高・円安
為替相場（外国為替）
貿易

景気と物価

景気変動（好況・不況）
インフレーション
デフレーション
国内総生産（GDP）
経済成長率

財政のしくみ

財政
歳入・歳出
租税（直接税・間接税）
累進課税
消費税
公債（国債・地方債）
財政政策
大きな政府・小さな政府
地方財政
地方交付税交付金

国民生活と福祉

社会保障制度
社会保険
公的扶助
社会福祉
公衆衛生
少子高齢社会と社会保障
労働基準法
労働組合法
労働三法
非正規雇用（パート・派遣・契約社員）
ワーク・ライフ・バランス
公害
四大公害病
環境基本法
循環型社会

## Assistant

まず既存のファイル構造を確認します。

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

Let me look at a fully-populated slides array to learn the schema.

_[tool: grep]_

_[tool: read_file]_

Now let me see the mapping functions fully.

_[tool: read_file]_

I now understand the full structure. The 私たちの暮らしと経済 group has 4 buttons, all currently pointing to empty `kouminEconomySlides`/`kouminEconomyQuiz`. Your content divides naturally into 6 topics, so I'll reorganize into 6 buttons — one per section — each with its own slides and quiz.

Let me make the edits. First, the button list:

_[tool: str_replace_edit]_

Now replace the empty slides/quiz block with 6 populated topic arrays:

_[tool: str_replace_edit]_

Now update the two mapping functions. First `unitContent()`:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

All references updated cleanly. Let me verify it loads and renders the new economy content.

_[tool: show_html]_

_[tool: ready_for_verification]_

「私たちの暮らしと経済」を6つのボタンに再編し、それぞれにスライドとクイズを追加しました。

- 家計と企業のしくみ（消費生活・株式会社）
- 市場経済と価格の決まり方
- 金融のしくみと為替（日本銀行・貿易）
- 景気変動と物価（GDP・インフレ）
- 財政と税金のしくみ
- 国民生活と社会保障・労働・環境

いただいた6つの内容に沿って分類しました。各ボタンに導入スライド＋解説スライドと8〜10問のクイズが入っています。ボタン名や分け方を変えたい場合は言ってください。

## User

単元のまとまりの「●現代の民主政治と社会」とそれに含まれるボタンは、消してください。

## Assistant

_[tool: str_replace_edit]_

「現代の民主政治と社会」のまとまりと、その4つのボタンを削除しました。

## User

以下の内容を参考にして、スライドとクイズを●地球社会と私たち　の下のボタンに追加してください。今あるボタンの個数や名前、分類の仕方はあなたで考えてもいいですし、質問してもいいです。

国際社会
中学校社会 公民/国際社会における国家
中学校社会 公民/国際連合のはたらき
中学校社会 公民/国際連合以外の国際組織
中学校社会 公民/文化の多様性の大切さ
中学校社会 公民/紛争とテロ
中学校社会 公民/核問題と軍縮
地球規模の問題
中学校社会 公民/地球環境問題
中学校社会 公民/資源問題、エネルギー問題、食料問題
中学校社会 公民/国際的な貧困問題

## Assistant

_[tool: grep]_

_[tool: read_file]_

I'll organize into 3 buttons. First the button list:

_[tool: str_replace_edit]_

Now read the empty global slides/quiz block to replace it:

_[tool: read_file]_

_[tool: str_replace_edit]_

Now update the mapping functions:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

「地球社会と私たち」を3つのボタンに再編し、スライドとクイズを追加しました。

- 国際社会のしくみと国際連合
- 世界平和と文化の多様性（紛争・核・軍縮）
- 地球規模の課題（環境・資源・貧困）

いただいた「国際社会」「地球規模の問題」の内容をもとに分類しています。ボタン名や分け方の調整が必要なら言ってください。

## User

「お問い合わせ」を押したら、以下のグーグルフォームページに飛ぶようにして。

https://docs.google.com/forms/d/e/1FAIpQLSee7R2jCMLwBkz-d_tWPDFFJrJhdOujNapTyO1VZ7B7itf4sw/viewform?usp=dialog

## Assistant

_[tool: grep]_

_[tool: read_file]_

I'll change the "お問い合わせ" footer button into a link that opens the Google Form in a new tab.

_[tool: str_replace_edit]_

「お問い合わせ」を押すと、指定のGoogleフォームが新しいタブで開くようにしました。

## User

「PRおすすめ教材」の枠だけ残して、内容をいったん消してください。

## Assistant

_[tool: grep]_

_[tool: read_file]_

「PRおすすめ教材」の枠を残し、中の説明文・教材2点・ボタンを削除してプレースホルダーだけにします。

_[tool: str_replace_edit]_

「PRおすすめ教材」の枠とPRラベルは残し、中身（説明文・教材2点・ボタン）を消して「準備中」のプレースホルダーにしました。

## User

「PRおすすめ教材」という文字も消していいです。

## Assistant

_[tool: str_replace_edit]_

「PRおすすめ教材」の文字も削除し、枠だけ残しました。

## User

アフィリエイト広告・SPONSOREDという文字も消して、空欄の中には「準備中」という文字を追加して

## Assistant

_[tool: str_replace_edit]_

「SPONSORED」と「アフィリエイト広告」を消し、代わりに「準備中」を表示しました。

## User

トップ画面の空欄にも「準備中」を追加

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Both top-level empty boxes get a「準備中」label added.

_[tool: str_replace_edit]_

_[tool: read_file]_

I'll use the distinct preceding lines to target each uniquely.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

トップ画面と分野選択画面の空欄の広告スペースに「準備中」を追加しました。

## User

どのページの「SPONSORED」やそれとともにある📢の絵文字も消して、空欄の中には「準備中」という文字を追加して

## Assistant

All ad boxes cleaned up in one pass — removing every SPONSORED label and 📢 emoji, and ensuring each shows「準備中」.

_[tool: run_script]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: grep]_

Remaining 📢 are legitimate content icons, not ad boxes. Copying the cleaned file back.

_[tool: copy_files]_

_[tool: ready_for_verification]_

すべてのページの広告枠から「SPONSORED」と📢の絵文字を削除し、中身が空になった枠には「準備中」を表示しました。（本文中で使われている📢アイコンはそのまま残しています。）

## User

広告スペースという文字も消して。どのページの点線の空欄の中には「準備中」の文字を入れて

## Assistant

_[tool: copy_files]_

_[tool: run_script]_

_[tool: copy_files]_

_[tool: read_file]_

_[tool: read_file]_

Confirmed — each dashed box now contains just「準備中」.

「広告スペース」の文字も削除し、すべての点線の空欄には「準備中」だけが表示されるようにしました。

## User

この５つのボタンを少し右の広くして。点線の枠は少し細くする

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

5つのボタンの列を広げ、右の点線枠を細く・狭くします。

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

5つのボタンの列を広げて右に伸ばし、右側の点線枠を細く（4px→2px）・狭くしました。

## User

この枠の中に「準備中」の文字を追加

## Assistant

This is the home-screen right-side dashed box. I'll add「準備中」centered inside it.

_[tool: str_replace_edit]_

右側の点線枠の中央に「準備中」を追加しました。

## User

保護者の方への画面の４カ条をもう少し右に横広にして。その右の枠は少し細く

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

保護者向け画面の4ヶ条の列を横に広げ、右のサイド枠を細くしました。


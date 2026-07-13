import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata = { title: "プライバシーポリシー｜ホーカゴシャカイ" };

export default function PrivacyPage() {
  return (
    <LegalLayout icon="📄" title="プライバシーポリシー">
      <h1 className="m-0 text-[26px] font-black text-ink">プライバシーポリシー</h1>
      <p className="m-0 text-[14.5px] font-medium leading-[1.9] text-ink">
        「ホーカゴシャカイ」（以下、「当サイト」といいます）における、利用者の個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
      </p>

      <LegalSection heading="個人情報の利用目的">
        当サイトでは、お問い合わせの際に、お名前・メールアドレス等の個人情報をご登録いただく場合があります。これらの個人情報は、お問い合わせに対する回答や必要な情報を電子メール等でご連絡する場合に利用させていただくものであり、それ以外の目的では利用いたしません。
      </LegalSection>

      <LegalSection heading="広告について">
        当サイトでは、第三者配信の広告サービス（Googleアドセンス、各種アフィリエイトプログラムなど）を将来的に利用する予定です。このような広告配信事業者は、利用者の興味に応じた商品やサービスの広告を表示するため、当サイトや他のサイトへのアクセスに関する情報「Cookie（クッキー）」（氏名、住所、メールアドレス、電話番号は含まれません）を使用することがあります。Cookieを無効にする方法やGoogleアドセンスに関する詳細は、「広告 – ポリシーと規約 – Google」（
        <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener" className="text-accent">
          https://policies.google.com/technologies/ads?hl=ja
        </a>
        ）をご確認ください。
      </LegalSection>

      <LegalSection heading="アクセス解析ツールについて">
        当サイトでは、サイトの利用状況を把握するために、Googleが提供するアクセス解析ツール「Googleアナリティクス」を将来的に利用する予定です。Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
      </LegalSection>

      <LegalSection heading="免責事項">
        当サイトに掲載する情報については、正確な情報を提供できるよう努めておりますが、その内容の正確性や安全性を保証するものではありません。当サイトの情報を利用することで生じたいかなる損害についても、当サイトは一切の責任を負いかねます。当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について当サイトは一切の責任を負いません。
      </LegalSection>

      <LegalSection heading="著作権について">
        当サイトに掲載されている文章・画像等のコンテンツの著作権は、原則として当サイトの運営者に帰属します。法的に認められている引用の範囲を超えて、これらを無断で転載・複製・改変することを禁じます。当サイトへのリンクは自由です。
      </LegalSection>

      <LegalSection heading="プライバシーポリシーの変更について">
        当サイトは、法令の変更や運営方針の見直しに応じて、本ポリシーの内容を予告なく変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
      </LegalSection>

      <LegalSection heading="お問い合わせ">
        本ポリシーに関するお問い合わせは、当サイトの「お問い合わせ」ページよりお願いいたします。
      </LegalSection>

      <div className="mt-2 pt-3.5 border-t-2 border-dashed border-ink flex flex-col gap-0.5">
        <span className="text-[13px] font-bold text-ink opacity-65">制定日：2026年7月10日</span>
        <span className="text-[13px] font-bold text-ink opacity-65">運営者：なおさん</span>
      </div>
    </LegalLayout>
  );
}

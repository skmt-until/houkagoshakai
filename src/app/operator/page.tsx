import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata = { title: "運営者情報｜ホーカゴシャカイ" };

export default function OperatorPage() {
  return (
    <LegalLayout icon="🧑" title="運営者情報">
      <h1 className="m-0 text-[26px] font-black text-ink">運営者情報</h1>

      <LegalSection heading="このサイトについて">
        「ホーカゴシャカイ」は、中学生が放課後や自宅で、スマートフォンから手軽に社会科（地理・歴史・公民）を学べる学習サイトです。
      </LegalSection>
      <p className="m-0 -mt-3 text-[14.5px] font-medium leading-[1.9] text-ink">
        一問一答のクイズや、要点をまとめたスライド教材、読み物コンテンツ「シャカマガ」などを通して、「授業で習ったことを、すきま時間にサクッと復習できる」ことを目指してつくっています。
      </p>
      <p className="m-0 -mt-3 text-[14.5px] font-medium leading-[1.9] text-ink">
        教科書に載っている内容を、できるだけやさしく・楽しく・記憶に残る形で届けたい。そんな思いから生まれたサイトです。
      </p>

      <LegalSection heading="運営者プロフィール">
        <span className="block text-[15px] font-black leading-[1.9] text-ink mb-1">なおさん</span>
        中学校の教壇で社会科を担当し、日々の授業づくりや教材開発に取り組んできました。ICT（情報通信技術）を活用した授業や、生徒が主体的に学べる教材づくりに関心を持って実践を重ねています。
      </LegalSection>
      <p className="m-0 -mt-3 text-[14.5px] font-medium leading-[1.9] text-ink">
        「ホーカゴシャカイ」は、教室での指導経験をもとに、「生徒が自分のペースで、くり返し学べる場をつくりたい」という思いから制作しました。実際の授業で感じた「ここがつまずきやすい」「こう説明するとわかりやすい」といった気づきを、コンテンツに反映しています。
      </p>

      <LegalSection heading="運営方針">
        当サイトは、中学生の学習の役に立つことを第一に運営しています。掲載する情報は、学習指導要領や教科書の内容に沿うよう努め、できるだけ正確でわかりやすいものになるよう心がけています。内容に誤りを見つけた場合や、「こんなコンテンツがほしい」といったご要望がありましたら、お問い合わせページよりお気軽にお知らせください。
      </LegalSection>

      <LegalSection heading="お問い合わせ">
        当サイトへのご意見・ご感想・お問い合わせは、お問い合わせページよりお願いいたします。
      </LegalSection>

      <div className="mt-2 pt-3.5 border-t-2 border-dashed border-ink flex flex-col gap-0.5">
        <span className="text-[13px] font-bold text-ink opacity-65">運営者：なおさん</span>
        <span className="text-[13px] font-bold text-ink opacity-65">サイト名：ホーカゴシャカイ</span>
      </div>
    </LegalLayout>
  );
}

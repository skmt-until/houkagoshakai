import { SubjectSelect } from "@/components/SubjectSelect";
import { selMeta } from "@/data/units";

export const metadata = { title: "スライドで知識をカクニン！｜ホーカゴシャカイ" };

export default function SlidesSubjectSelectPage() {
  return <SubjectSelect icon={selMeta.slides.icon} label={selMeta.slides.label} basePath="/slides" />;
}

import { SubjectSelect } from "@/components/SubjectSelect";
import { selMeta } from "@/data/units";

export const metadata = { title: "クイズで実力をカクニン！｜ホーカゴシャカイ" };

export default function QuizSubjectSelectPage() {
  return <SubjectSelect icon={selMeta.quiz.icon} label={selMeta.quiz.label} basePath="/quiz" />;
}

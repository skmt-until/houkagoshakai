import { UnitSelect } from "@/components/UnitSelect";
import { selMeta } from "@/data/units";

export default async function QuizUnitSelectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  return (
    <UnitSelect
      subjectKey={subject}
      icon={selMeta.quiz.icon}
      label={selMeta.quiz.label}
      basePath="/quiz"
      selectBasePath="/quiz"
    />
  );
}

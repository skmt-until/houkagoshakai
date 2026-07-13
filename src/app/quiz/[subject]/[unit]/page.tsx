import { notFound } from "next/navigation";
import { QuizPlayer } from "@/components/QuizPlayer";
import { getUnitContent } from "@/data/content-map";

export default async function QuizPage({ params }: { params: Promise<{ subject: string; unit: string }> }) {
  const { subject, unit } = await params;
  const content = getUnitContent(unit);
  if (!content) return notFound();

  return (
    <QuizPlayer
      questions={content.quiz}
      region={content.region}
      homeHref="/"
      backHref={`/quiz/${subject}`}
    />
  );
}

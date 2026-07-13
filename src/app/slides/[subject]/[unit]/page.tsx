import { notFound } from "next/navigation";
import { SlidePlayer } from "@/components/SlidePlayer";
import { getUnitContent } from "@/data/content-map";

export default async function SlidesPage({ params }: { params: Promise<{ subject: string; unit: string }> }) {
  const { subject, unit } = await params;
  const content = getUnitContent(unit);
  if (!content) return notFound();

  return (
    <SlidePlayer
      slides={content.slides}
      region={content.region}
      homeHref="/"
      backHref={`/slides/${subject}`}
      quizHref={`/quiz/${subject}/${unit}`}
    />
  );
}

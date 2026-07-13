import { notFound } from "next/navigation";
import { findArticle } from "@/data/magazine";
import { Seasons } from "@/components/magazine-articles/Seasons";
import { Extremes } from "@/components/magazine-articles/Extremes";
import { FireLanguageTools } from "@/components/magazine-articles/FireLanguageTools";
import { LastHumans } from "@/components/magazine-articles/LastHumans";
import { AllowanceInflation } from "@/components/magazine-articles/AllowanceInflation";

export default async function MagazineArticlePage({
  params,
}: {
  params: Promise<{ subject: string; article: string }>;
}) {
  const { subject, article } = await params;
  const meta = findArticle(subject, article);
  if (!meta) return notFound();

  switch (meta.slug) {
    case "seasons":
      return <Seasons />;
    case "extremes":
      return <Extremes />;
    case "fire-language-tools":
      return <FireLanguageTools />;
    case "last-humans":
      return <LastHumans />;
    case "allowance-inflation":
      return <AllowanceInflation />;
    default:
      return notFound();
  }
}

import { UnitSelect } from "@/components/UnitSelect";
import { selMeta } from "@/data/units";

export default async function SlidesUnitSelectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  return (
    <UnitSelect
      subjectKey={subject}
      icon={selMeta.slides.icon}
      label={selMeta.slides.label}
      basePath="/slides"
      selectBasePath="/slides"
    />
  );
}

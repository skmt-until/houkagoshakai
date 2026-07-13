import { SubjectSelect } from "@/components/SubjectSelect";

export const metadata = { title: "シャカマガ｜ホーカゴシャカイ" };

export default function MagazineSubjectSelectPage() {
  return <SubjectSelect icon="📰" label="シャカマガ" basePath="/magazine" search />;
}

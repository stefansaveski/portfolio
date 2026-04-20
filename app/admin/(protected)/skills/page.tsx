import { getSkillCategories } from "@/lib/data";
import SkillsAdmin from "./SkillsAdmin";

export default async function SkillsPage() {
  const categories = await getSkillCategories();
  return <SkillsAdmin initialCategories={categories} />;
}

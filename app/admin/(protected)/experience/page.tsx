import { getExperiences } from "@/lib/data";
import ExperienceAdmin from "./ExperienceAdmin";

export default async function ExperiencePage() {
  const experiences = await getExperiences();
  return <ExperienceAdmin initialExperiences={experiences} />;
}

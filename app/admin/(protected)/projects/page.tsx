import { getProjects } from "@/lib/data";
import ProjectsAdmin from "./ProjectsAdmin";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsAdmin initialProjects={projects} />;
}

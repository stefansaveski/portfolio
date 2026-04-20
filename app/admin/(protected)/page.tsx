import { getProjects, getExperiences, getSkillCategories } from "@/lib/data";
import Link from "next/link";

export default async function AdminDashboard() {
  const [projects, experiences, skills] = await Promise.all([
    getProjects(),
    getExperiences(),
    getSkillCategories(),
  ]);

  const cards = [
    { label: "Projects", count: projects.length, href: "/admin/projects", desc: "Add, edit, or remove projects" },
    { label: "Experience", count: experiences.length, href: "/admin/experience", desc: "Manage work experience" },
    { label: "Skill Categories", count: skills.length, href: "/admin/skills", desc: "Edit your tech stack" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Manage your portfolio content.</p>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-4xl font-bold mb-1">{card.count}</div>
            <div className="font-semibold">{card.label}</div>
            <div className="text-sm text-muted-foreground mt-1">{card.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

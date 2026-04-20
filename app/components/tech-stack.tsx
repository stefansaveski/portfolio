import { Card } from "@/components/ui/card";
import {
  Brain, Boxes, Code, Code2, Cloud, Cpu, Database, FileCode, FileJson,
  GitBranch, Globe, Hammer, Layers, Palette, Server, Settings, Triangle, Zap,
} from "lucide-react";
import type { SkillCategory } from "@/lib/types";
import type { ReactNode } from "react";

const CATEGORY_ICON: Record<string, ReactNode> = {
  Languages: <Code2 className="h-5 w-5 text-primary" />,
  Frontend: <Globe className="h-5 w-5 text-primary" />,
  "Backend & APIs": <Server className="h-5 w-5 text-primary" />,
  "Data & ML": <Brain className="h-5 w-5 text-primary" />,
  Databases: <Database className="h-5 w-5 text-primary" />,
  "Cloud & Tooling": <Cloud className="h-5 w-5 text-primary" />,
};

const SKILL_ICON: Record<string, ReactNode> = {
  TypeScript: <Code2 className="h-4 w-4" />,
  JavaScript: <FileJson className="h-4 w-4" />,
  Python: <FileCode className="h-4 w-4" />,
  Java: <Cpu className="h-4 w-4" />,
  Rust: <Settings className="h-4 w-4" />,
  "C#": <Settings className="h-4 w-4" />,
  SQL: <Database className="h-4 w-4" />,
  React: <Zap className="h-4 w-4" />,
  "Next.js": <Triangle className="h-4 w-4" />,
  SvelteKit: <Layers className="h-4 w-4" />,
  TailwindCSS: <Palette className="h-4 w-4" />,
  Bootstrap: <Boxes className="h-4 w-4" />,
  "HTML/CSS": <Globe className="h-4 w-4" />,
  "Node.js": <Layers className="h-4 w-4" />,
  ".NET": <Settings className="h-4 w-4" />,
  "Spring Boot": <Cpu className="h-4 w-4" />,
  Flask: <Server className="h-4 w-4" />,
  aiohttp: <Zap className="h-4 w-4" />,
  Pydantic: <FileCode className="h-4 w-4" />,
  "REST APIs": <Code className="h-4 w-4" />,
  NumPy: <Cpu className="h-4 w-4" />,
  Pandas: <FileJson className="h-4 w-4" />,
  "Neural Networks": <Brain className="h-4 w-4" />,
  Pygame: <Boxes className="h-4 w-4" />,
  PostgreSQL: <Database className="h-4 w-4" />,
  MySQL: <Database className="h-4 w-4" />,
  "Microsoft Azure": <Cloud className="h-4 w-4" />,
  Docker: <Boxes className="h-4 w-4" />,
  Vercel: <Triangle className="h-4 w-4" />,
  "Git/GitHub": <GitBranch className="h-4 w-4" />,
  Judge0: <Code className="h-4 w-4" />,
  "VS Code": <Hammer className="h-4 w-4" />,
};

const DEFAULT_SKILL_ICON = <Code className="h-4 w-4" />;
const DEFAULT_CATEGORY_ICON = <Code2 className="h-5 w-5 text-primary" />;

export default function TechStack({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((tech) => (
        <Card key={tech.category} className="p-6">
          <div className="flex items-center gap-2 mb-4">
            {CATEGORY_ICON[tech.category] ?? DEFAULT_CATEGORY_ICON}
            <h3 className="text-lg font-semibold">{tech.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {SKILL_ICON[skill] ?? DEFAULT_SKILL_ICON}
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

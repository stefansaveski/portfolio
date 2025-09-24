import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Server,
  Layers,
  Cpu,
  Globe,
  FileCode,
  Flame,
  Boxes,
  Palette,
  Braces,
  Hammer,
  Rocket,
  Triangle,
  Code2,
  FileJson,
  Zap,
  GitBranch,
  Settings,
} from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5 text-primary" />,
    skills: [
      { name: "React", icon: <Zap className="h-4 w-4" /> },
      { name: "Next.js", icon: <Triangle className="h-4 w-4" /> },
      { name: "TailwindCSS", icon: <Palette className="h-4 w-4" /> },
      { name: "Bootstrap", icon: <Boxes className="h-4 w-4" /> },
      { name: "JavaScript", icon: <FileJson className="h-4 w-4" /> },
      { name: "TypeScript", icon: <Code2 className="h-4 w-4" /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5 text-primary" />,
    skills: [
      { name: "Node.js", icon: <Layers className="h-4 w-4" /> },
      { name: ".NET", icon: <Settings className="h-4 w-4" /> },
      { name: "Spring Boot", icon: <Cpu className="h-4 w-4" /> },
      { name: "Python Scripting", icon: <FileCode className="h-4 w-4" /> },

    ],
  },
  {
    category: "Databases",
    icon: <Database className="h-5 w-5 text-primary" />,
    skills: [
      { name: "MySQL", icon: <Database className="h-4 w-4" /> },
      { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
      { name: "Firebase", icon: <Flame className="h-4 w-4" /> },
    ],
  },
  {
    category: "Tools & APIs",
    icon: <Hammer className="h-5 w-5 text-primary" />,
    skills: [
      { name: "Judge0", icon: <Code className="h-4 w-4" /> },
      { name: "Git", icon: <GitBranch className="h-4 w-4" /> },
      { name: "VS Code", icon: <Code2 className="h-4 w-4" /> },
      { name: "Vercel", icon: <Triangle className="h-4 w-4" /> },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <div className="flex items-center gap-2 mb-4">
            {tech.icon}
            <h3 className="text-lg font-semibold">{tech.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

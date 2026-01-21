import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Image from "next/image"
import ExperienceSection from "./components/experience-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-center px-4 md:px-6">
          <div className="hidden md:flex items-center gap-6">
            <Link className="flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Stefan Saveski</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Image src="/pfp.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full mx-auto" width={192} height={192} />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Software Engineer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-10">
                👋 Hi! I&apos;m Stefan, a computer science student passionate about programming. I love solving challenges, learning, and creating impactful software. Beyond coding, I enjoy exploring new experiences and balancing work with hobbies.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="https://github.com/stefansaveski" target="_blank">
                <Button variant="outline" size="icon" className="hover:cursor-pointer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/stefan-saveski-1a360027b/" target="_blank">
                <Button variant="outline" size="icon" className="hover:cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:stefansaveski19@gmail.com">
                <Button variant="outline" size="icon" className="hover:cursor-pointer">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <ExperienceSection />

        <section id="projects" className="py-12 md:py-24 lg:py-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Iknow - University Management System"
              description="Modern recreation of the widely used student information system by all faculties in Macedonia."
              image="https://i.postimg.cc/XJvXcS7X/iknow-ss.png"
              link="https://github.com/stefansaveski/iknow-remaster"
              siteLink="https://iknow-remaster.vercel.app/"
              tags={["Next.js", "TailwindCSS", ".NET", "postgreSQL",]}
            />
            <ProjectCard
              title="Kodrum.mk - Education Center"
              description="IT education hub website for events and private tutoring, featuring modern web technologies. Deployed and availabe at kodrum.mk with future updates in development."
              image="https://i.postimg.cc/MTw5kZXv/kodrum-ss.png"
              link="https://github.com/stefansaveski/kodrum.mk"
              siteLink="https://kodrum.mk"
              tags={["Next.js", "TailwindCSS", "PostgreSQL", ".NET"]}
            />
            <ProjectCard
              title="CleanCode - Problem Solving Platform"
              description="A web platform for CS students to practice coding skills. Published at CIIT 2024 conference. The project was finished but discontinued, awaiting faculty collboration for deployment."
              image="https://i.postimg.cc/Gp7nHG1b/test.png"
              link="https://github.com/imbrsk/CleanCode"
              tags={["Rust", "React.js", "MySQL", "Judge0"]}
            />
            <ProjectCard
              title="Back to Basics - Code Testing Web App"
              description="A code testing platform used for a 3-day event with Flask backend and Judge0 integration. Deployed with 70+ concurrent users."
              image="https://i.postimg.cc/CxxvdtMf/image-2025-04-20-224939988.png"
              link="https://github.com/stefansaveski/b2b-py"
              tags={["Flask", "Bootstrap", "Judge0", "Python"]}
            />
            <ProjectCard
              title="Battleship - AI Agents"
              description="Built multiple AI agents to play the popular board game Battleship. Expectimax, Heatmap and Monte Carlo models."
              image="https://i.postimg.cc/FRx8v8jb/battleship.png"
              link="https://github.com/stefansaveski/battleship-ai"
              tags={["Python", "Pygame", "Pandas", "NumPy"]}
            />

            <ProjectCard
              title="Accelerate.js - Modern JS Framework"
              description="Bottom-up full constructed JS framework, goal was to fully understand how modern frameworks work."
              image="https://i.postimg.cc/ZRPf0BX8/accelerate.png"
              link="https://github.com/stefansaveski/accelerate.js"
              tags={["JavaScript", "HTML", "CSS"]}
            />
            <ProjectCard
              title="FinX - Finance Management App"
              description="A personal finance management app built with Next.js and .NET 9 for tracking expenses and budgeting."
              image="https://i.postimg.cc/SxJzgn7R/finx-logo.png"
              link="https://github.com/stefansaveski/finxacces-api"
              tags={["Next.js", ".NET", "mySQL", "C#"]}
            />
            <ProjectCard
              title="CNN Model - NumPy 1/0 Classifier"
              description="CNN - Neural network from scratch using NumPy to identify if image is 0 or 1."
              image="https://i.postimg.cc/sD2t0zBG/cnnmodel.png"
              link="https://github.com/stefansaveski/cnn-1-0-classifier"
              tags={["NumPy", "Python", "Neural Networks"]}
            />
            <ProjectCard
              title="LabelAI - AI Image Annotation Tool"
              description="Web application for image annotation using multiple powerful AI models."
              image="https://i.postimg.cc/VNGmLPGL/Label-AI.png"
              link=""
              tags={["NumPy", "Python", "Neural Networks"]}
            />
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Tech Stack
          </h2>
          <TechStack />
        </section>

      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 shrink-0 items-center sm:flex-row md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Stefan Saveski. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

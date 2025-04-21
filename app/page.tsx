import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center flex justify-center items-center">
          <div className="mr-4 hidden md:flex ">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Stefan Saveski</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <img src="/pfp.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full mx-auto" />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Software Engineering Student
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-10">
                  👋 Hi! I'm Stefan, a computer science student passionate about programming. I love solving challenges, learning, and creating impactful software. Beyond coding, I enjoy exploring new experiences and balancing work with hobbies.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/stefansaveski" target="_blank" >
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
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="CleanCode - Problem Solving Platform"
                description="A web platform for CS students to practice coding skills. Published at CIIT 2024 conference."
                image="https://i.postimg.cc/Gp7nHG1b/test.png"
                link="https://github.com/imbrsk/CleanCode"
                tags={["Rust", "React", "MySQL", "Judge0"]}
              />
              <ProjectCard
                title="Baack to Basics - Code Testing Web App"
                description="A code testing platform used for a 3-day event with Flask backend and Judge0 integration."
                image="https://i.postimg.cc/CxxvdtMf/image-2025-04-20-224939988.png"
                link="https://github.com/stefansaveski/b2b-py"
                tags={["Flask", "Bootstrap", "Judge0", "Python"]}
              />
              <ProjectCard
                title="Kodrum - Education Center"
                description="IT education hub website for events and private tutoring, featuring modern web technologies."
                image="https://i.postimg.cc/MGcdmQQ6/491004012-3669230636707791-534478548953838146-n.png"
                link="#"
                tags={["Next.js", "TailwindCSS", "Firebase"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
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

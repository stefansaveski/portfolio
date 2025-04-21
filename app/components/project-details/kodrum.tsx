import { Code, Lightbulb, GraduationCap, CheckCircle } from "lucide-react"

export default function KodrumDetails() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        KODRUM is an IT hub education center run by Stefan Saveski, offering events and private tutoring in programming
        and technology skills.
      </p>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Education Center</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">
          A hub for IT education, providing both organized events and personalized tutoring services.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Services</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground ml-7">
          <li>• Technology workshops and events</li>
          <li>• Private tutoring sessions</li>
          <li>• Programming skills development</li>
          <li>• IT career guidance</li>
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Code className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Website Tech Stack</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">
          Frontend: Next.js | Styling: TailwindCSS | Backend: Firebase
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Mission</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">
          To provide accessible, high-quality IT education and foster a community of technology enthusiasts and
          professionals.
        </p>
      </div>
    </div>
  )
}

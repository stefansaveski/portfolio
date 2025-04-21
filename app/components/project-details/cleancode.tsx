import { Code, Users, Award, CheckCircle } from "lucide-react"

export default function CleanCodeDetails() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        CleanCode is a web platform built for Faculty of Computer Science students to practice and improve their coding
        skills. It offers a complete environment for solving problems, submitting code, and tracking progress — all
        through a beautiful, fully functional web application.
      </p>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Award className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Publication</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">
          Published as a student paper and presented at the International Conference on Informatics and Information
          Technologies (CIIT) in April 2024.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Key Features</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground ml-7">
          <li>• Ranked leaderboard of users with the most solved problems</li>
          <li>• Authentication with email verification</li>
          <li>• Browse subjects with categorized problems</li>
          <li>• Built-in code editor with instant feedback</li>
          <li>• Profile page to track progress</li>
          <li>• Admin dashboard for problem management</li>
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Code className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Tech Stack</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">
          Backend: Rust Rocket | Frontend: React.js | Code Execution: Judge0 API | Database: MySQL
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Developed By</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">Stefan Saveski and Boris Gjorgjievski</p>
      </div>
    </div>
  )
}

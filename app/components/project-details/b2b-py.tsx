import { Code, Calendar, Server, CheckCircle } from "lucide-react"

export default function B2BDetails() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        A code testing website developed for a 3-day event. The platform allowed participants to submit and test their
        code solutions against predefined test cases.
      </p>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Event</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">
          Used for a 3-day coding event where problems were provided for each day.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Features</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground ml-7">
          <li>• Self-hosted Judge0 for code execution</li>
          <li>• Problem statements for each day</li>
          <li>• Code submission and testing</li>
          <li>• Input testing for each problem</li>
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Code className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Tech Stack</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">
          Backend: Flask (Python) | Frontend: Bootstrap | Code Execution: Judge0
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Server className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Implementation</h3>
        </div>
        <p className="text-sm text-muted-foreground ml-7">
          The website required hosting Judge0 for code execution. Problem texts and test inputs were configured in
          separate files.
        </p>
      </div>
    </div>
  )
}

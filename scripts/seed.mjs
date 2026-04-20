import admin from "firebase-admin";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse .env.local
const envContent = readFileSync(join(__dirname, "..", ".env.local"), "utf-8");
const env = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const idx = trimmed.indexOf("=");
  if (idx === -1) continue;
  const key = trimmed.slice(0, idx).trim();
  let value = trimmed.slice(idx + 1).trim();
  if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
  env[key] = value;
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
});

const db = admin.firestore();

const projects = [
  {
    title: "Iknow - University Management System",
    description: "Modern recreation of the widely used student information system by all faculties in Macedonia.",
    image: "https://i.postimg.cc/XJvXcS7X/iknow-ss.png",
    link: "https://github.com/stefansaveski/iknow-remaster",
    siteLink: "https://iknow-remaster.vercel.app/",
    tags: ["Next.js", "TailwindCSS", ".NET", "postgreSQL"],
    order: 1,
  },
  {
    title: "Kodrum.mk - Education Center",
    description: "IT education hub website for events and private tutoring, featuring modern web technologies. Deployed and availabe at kodrum.mk with future updates in development.",
    image: "https://i.postimg.cc/MTw5kZXv/kodrum-ss.png",
    link: "https://github.com/stefansaveski/kodrum.mk",
    siteLink: "https://kodrum.mk",
    tags: ["Next.js", "TailwindCSS", "PostgreSQL", ".NET"],
    order: 2,
  },
  {
    title: "CleanCode - Problem Solving Platform",
    description: "A web platform for CS students to practice coding skills. Published at CIIT 2024 conference. The project was finished but discontinued, awaiting faculty collboration for deployment.",
    image: "https://i.postimg.cc/Gp7nHG1b/test.png",
    link: "https://github.com/imbrsk/CleanCode",
    siteLink: "",
    tags: ["Rust", "React.js", "MySQL", "Judge0"],
    order: 3,
  },
  {
    title: "Back to Basics - Code Testing Web App",
    description: "A code testing platform used for a 3-day event with Flask backend and Judge0 integration. Deployed with 70+ concurrent users.",
    image: "https://i.postimg.cc/CxxvdtMf/image-2025-04-20-224939988.png",
    link: "https://github.com/stefansaveski/b2b-py",
    siteLink: "",
    tags: ["Flask", "Bootstrap", "Judge0", "Python"],
    order: 4,
  },
  {
    title: "Battleship - AI Agents",
    description: "Built multiple AI agents to play the popular board game Battleship. Expectimax, Heatmap and Monte Carlo models.",
    image: "https://i.postimg.cc/FRx8v8jb/battleship.png",
    link: "https://github.com/stefansaveski/battleship-ai",
    siteLink: "",
    tags: ["Python", "Pygame", "Pandas", "NumPy"],
    order: 5,
  },
  {
    title: "Accelerate.js - Modern JS Framework",
    description: "Bottom-up full constructed JS framework, goal was to fully understand how modern frameworks work.",
    image: "https://i.postimg.cc/ZRPf0BX8/accelerate.png",
    link: "https://github.com/stefansaveski/accelerate.js",
    siteLink: "",
    tags: ["JavaScript", "HTML", "CSS"],
    order: 6,
  },
  {
    title: "FinX - Finance Management App",
    description: "A personal finance management app built with Next.js and .NET 9 for tracking expenses and budgeting.",
    image: "https://i.postimg.cc/SxJzgn7R/finx-logo.png",
    link: "https://github.com/stefansaveski/finxacces-api",
    siteLink: "",
    tags: ["Next.js", ".NET", "mySQL", "C#"],
    order: 7,
  },
  {
    title: "CNN Model - NumPy 1/0 Classifier",
    description: "CNN - Neural network from scratch using NumPy to identify if image is 0 or 1.",
    image: "https://i.postimg.cc/sD2t0zBG/cnnmodel.png",
    link: "https://github.com/stefansaveski/cnn-1-0-classifier",
    siteLink: "",
    tags: ["NumPy", "Python", "Neural Networks"],
    order: 8,
  },
  {
    title: "LabelAI - AI Image Annotation Tool",
    description: "Web application for image annotation using multiple powerful AI models.",
    image: "https://i.postimg.cc/VNGmLPGL/Label-AI.png",
    link: "",
    siteLink: "",
    tags: ["NumPy", "Python", "Neural Networks"],
    order: 9,
  },
];

const experience = [
  {
    company: "Cyberette",
    logo: "/experience/cyberette-logo.png",
    employmentType: "Internship",
    totalDuration: "3 mos",
    location: "Amsterdam, North Holland, Netherlands · Remote",
    roles: [
      {
        title: "Software Engineer Intern",
        duration: "Nov 2025 - Present · 3 mos",
        locationType: "Remote",
        bulletPoints: [
          "Developing a Python SDK to simplify client API integration using an async-first architecture built on aiohttp, supporting batch processing, real-time event handling, custom thresholds and label assignment, type-safe Pydantic models, and backed by 107 unit tests with 92% code coverage and full public documentation.",
          "Built a containerized API gateway deployed on Microsoft Azure that communicates with the SDK, performs media type classification, and intelligently detects audio in videos to route requests to the appropriate processing endpoints.",
          "Developed the authentication layer of the web application using SvelteKit as a single-page application, implementing multiple user views, responsive design, and robust email and password validation for a secure and smooth user experience.",
        ],
        description: "",
      },
    ],
    skills: "Python (Programming Language), API Development and +5 skills",
    link: "",
    linkLabel: "",
    order: 1,
  },
  {
    company: "Kodrum",
    logo: "/experience/kodrum-white.jpg",
    employmentType: "Self-employed",
    totalDuration: "6 mos",
    location: "Aerodrom, Skopje Statistical Region, North Macedonia",
    roles: [
      {
        title: "Co-Founder",
        duration: "Aug 2025 - Present · 6 mos",
        locationType: "On-site",
        bulletPoints: [],
        description: "Kodrum is an educational center founded by me and my brother, with the mission to support students from various faculties in their learning journey. We are currently developing an innovative e-learning platform.",
      },
      {
        title: "Lecturer",
        duration: "Aug 2025 - Present · 6 mos",
        locationType: "Hybrid",
        bulletPoints: [],
        description: "Teaching college subjects such as Structural Programming, Object-Oriented Programming, Algorithms and Data Structures, Artificial Intelligence, etc.",
      },
    ],
    skills: "Higher Education Teaching, Higher Education and +2 skills",
    link: "https://kodrum.mk",
    linkLabel: "Kodrum.mk - Education Center",
    order: 2,
  },
];

const skills = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Rust", "C#", "SQL"],
    order: 1,
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "SvelteKit", "TailwindCSS", "Bootstrap", "HTML/CSS"],
    order: 2,
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", ".NET", "Spring Boot", "Flask", "aiohttp", "Pydantic", "REST APIs"],
    order: 3,
  },
  {
    category: "Data & ML",
    skills: ["NumPy", "Pandas", "Neural Networks", "Pygame"],
    order: 4,
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL"],
    order: 5,
  },
  {
    category: "Cloud & Tooling",
    skills: ["Microsoft Azure", "Docker", "Vercel", "Git/GitHub", "Judge0", "VS Code"],
    order: 6,
  },
];

async function seed() {
  console.log("Seeding projects...");
  for (const project of projects) {
    await db.collection("projects").add(project);
  }

  console.log("Seeding experience...");
  for (const exp of experience) {
    await db.collection("experience").add(exp);
  }

  console.log("Seeding skills...");
  for (const skill of skills) {
    await db.collection("skills").add(skill);
  }

  console.log("Done! Firestore seeded successfully.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});

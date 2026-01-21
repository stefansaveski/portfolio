"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseBusiness, ExternalLink, MapPin, Tag } from "lucide-react"
import type { ReactNode } from "react"
import { useState } from "react"
import Image from "next/image"

function CompanyLogo({
  name,
  src,
}: {
  name: string
  src: string
}) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-muted/20 overflow-hidden">
      <Image
        src={src}
        alt={`${name} logo`}
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
        unoptimized
      />
    </div>
  )
}

function MetaRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-sm text-muted-foreground">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

export default function ExperienceSection() {
  const [cyberetteExpanded, setCyberetteExpanded] = useState(false)
  const [kodrumExpanded, setKodrumExpanded] = useState(false)

  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Experience</h2>

      <div className="mx-auto max-w-4xl space-y-6">
          {/* Cyberette */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <CompanyLogo name="Cyberette" src="/experience/cyberette-logo.png" />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="font-semibold text-lg leading-snug">Software Engineer Intern</div>
                      <div className="text-sm text-muted-foreground">Cyberette · Internship</div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    <MetaRow icon={<BriefcaseBusiness className="h-4 w-4" />}>
                      Nov 2025 - Present · 3 mos
                    </MetaRow>
                    <MetaRow icon={<MapPin className="h-4 w-4" />}>
                      Amsterdam, North Holland, Netherlands · Remote
                    </MetaRow>
                  </div>

                  <ul
                    className={
                      "mt-4 list-disc pl-5 space-y-2 text-sm leading-relaxed sm:max-h-none sm:overflow-visible " +
                      (cyberetteExpanded ? "max-h-[1000px]" : "max-h-28 overflow-hidden")
                    }
                  >
                    <li>
                      Developing a Python SDK to simplify client API integration using an async-first architecture built on aiohttp, supporting batch processing, real-time event handling, custom thresholds and label assignment, type-safe Pydantic models, and backed by 107 unit tests with 92% code coverage and full public documentation.
                    </li>
                    <li>
                      Built a containerized API gateway deployed on Microsoft Azure that communicates with the SDK, performs media type classification, and intelligently detects audio in videos to route requests to the appropriate processing endpoints.
                    </li>
                    <li>
                      Developed the authentication layer of the web application using SvelteKit as a single-page application, implementing multiple user views, responsive design, and robust email and password validation for a secure and smooth user experience.
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="mt-3 text-sm font-medium text-primary underline-offset-4 hover:underline sm:hidden"
                    onClick={() => setCyberetteExpanded((v) => !v)}
                  >
                    {cyberetteExpanded ? "Show less" : "Show more"}
                  </button>

                  <div className="mt-4">
                    <MetaRow icon={<Tag className="h-4 w-4" />}>
                      Python (Programming Language), API Development and +5 skills
                    </MetaRow>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kodrum */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <CompanyLogo name="Kodrum" src="/experience/kodrum-white.jpg" />

                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-lg leading-snug">Kodrum</div>
                  <div className="text-sm text-muted-foreground">Self-employed · 6 mos</div>

                  <div className="mt-3 space-y-1">
                    <MetaRow icon={<MapPin className="h-4 w-4" />}>
                      Aerodrom, Skopje Statistical Region, North Macedonia
                    </MetaRow>
                  </div>

                  <div className="relative mt-5 pl-6">
                    <div className="absolute left-2 top-1 bottom-1 w-px bg-border" />

                    {/* Co-Founder */}
                    <div className="relative pb-6">
                      <div className="font-semibold">Co-Founder</div>
                      <div className="mt-1 space-y-1">
                        <div className="text-sm text-muted-foreground">Aug 2025 - Present · 6 mos</div>
                        <div className="text-sm text-muted-foreground">On-site</div>
                      </div>
                      <p
                        className={
                          "mt-3 text-sm leading-relaxed sm:max-h-none sm:overflow-visible " +
                          (kodrumExpanded ? "max-h-[1000px]" : "max-h-16 overflow-hidden")
                        }
                      >
                        Kodrum is an educational center founded by me and my brother, with the mission to support students from various faculties in their learning journey. We are currently developing an innovative e-learning platform.
                      </p>

                      <button
                        type="button"
                        className="mt-2 text-sm font-medium text-primary underline-offset-4 hover:underline sm:hidden"
                        onClick={() => setKodrumExpanded((v) => !v)}
                      >
                        {kodrumExpanded ? "Show less" : "Show more"}
                      </button>
                    </div>

                    {/* Lecturer */}
                    <div className="relative">
                      <div className="font-semibold">Lecturer</div>
                      <div className="mt-1 space-y-1">
                        <div className="text-sm text-muted-foreground">Aug 2025 - Present · 6 mos</div>
                        <div className="text-sm text-muted-foreground">Hybrid</div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed">
                        Teaching college subjects such as Structural Programming, Object-Oriented Programming, Algorithms and Data Structures, Artificial Intelligence, etc.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <MetaRow icon={<Tag className="h-4 w-4" />}>
                      Higher Education Teaching, Higher Education and +2 skills
                    </MetaRow>

                    <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3">
                      <div className="min-w-0">
                        <div className="text-sm font-medium">Kodrum.mk - Education Center</div>
                      </div>
                      <Link
                        href="https://kodrum.mk"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <span className="hidden sm:inline">Visit</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    </section>
  )
}

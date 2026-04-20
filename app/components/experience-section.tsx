"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, ExternalLink, MapPin, Tag } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import type { Experience } from "@/lib/types";

function MetaRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-sm text-muted-foreground">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function CompanyLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-muted/20 overflow-hidden">
      <Image src={src} alt={`${name} logo`} width={48} height={48} className="h-12 w-12 object-contain" unoptimized />
    </div>
  );
}

function SingleRoleCard({ exp }: { exp: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const role = exp.roles[0];

  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <CompanyLogo name={exp.company} src={exp.logo} />
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-lg leading-snug">{role.title}</div>
            <div className="text-sm text-muted-foreground">{exp.company} · {exp.employmentType}</div>
            <div className="mt-3 space-y-1">
              <MetaRow icon={<BriefcaseBusiness className="h-4 w-4" />}>{role.duration}</MetaRow>
              <MetaRow icon={<MapPin className="h-4 w-4" />}>{exp.location}</MetaRow>
            </div>

            {role.bulletPoints && role.bulletPoints.length > 0 && (
              <>
                <ul className={`mt-4 list-disc pl-5 space-y-2 text-sm leading-relaxed sm:max-h-none sm:overflow-visible ${expanded ? "max-h-[1000px]" : "max-h-28 overflow-hidden"}`}>
                  {role.bulletPoints.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
                <button
                  type="button"
                  className="mt-3 text-sm font-medium text-primary underline-offset-4 hover:underline sm:hidden"
                  onClick={() => setExpanded((v) => !v)}
                >
                  {expanded ? "Show less" : "Show more"}
                </button>
              </>
            )}

            {role.description && (
              <p className={`mt-4 text-sm leading-relaxed sm:max-h-none sm:overflow-visible ${expanded ? "max-h-[1000px]" : "max-h-28 overflow-hidden"}`}>
                {role.description}
              </p>
            )}

            <div className="mt-4">
              <MetaRow icon={<Tag className="h-4 w-4" />}>{exp.skills}</MetaRow>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MultiRoleCard({ exp }: { exp: Experience }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <CompanyLogo name={exp.company} src={exp.logo} />
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-lg leading-snug">{exp.company}</div>
            <div className="text-sm text-muted-foreground">{exp.employmentType} · {exp.totalDuration}</div>
            <div className="mt-3 space-y-1">
              <MetaRow icon={<MapPin className="h-4 w-4" />}>{exp.location}</MetaRow>
            </div>

            <div className="relative mt-5 pl-6">
              <div className="absolute left-2 top-1 bottom-1 w-px bg-border" />
              {exp.roles.map((role, i) => (
                <div key={i} className={`relative ${i < exp.roles.length - 1 ? "pb-6" : ""}`}>
                  <div className="font-semibold">{role.title}</div>
                  <div className="mt-1 space-y-1">
                    <div className="text-sm text-muted-foreground">{role.duration}</div>
                    <div className="text-sm text-muted-foreground">{role.locationType}</div>
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed sm:max-h-none sm:overflow-visible ${expanded ? "max-h-[1000px]" : "max-h-16 overflow-hidden"}`}>
                    {role.description}
                  </p>
                  {i === 0 && (
                    <button
                      type="button"
                      className="mt-2 text-sm font-medium text-primary underline-offset-4 hover:underline sm:hidden"
                      onClick={() => setExpanded((v) => !v)}
                    >
                      {expanded ? "Show less" : "Show more"}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              <MetaRow icon={<Tag className="h-4 w-4" />}>{exp.skills}</MetaRow>
              {exp.link && exp.linkLabel && (
                <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3">
                  <div className="text-sm font-medium">{exp.linkLabel}</div>
                  <Link href={exp.link} target="_blank" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <span className="hidden sm:inline">Visit</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Experience</h2>
      <div className="mx-auto max-w-4xl space-y-6">
        {experiences.map((exp) =>
          exp.roles.length === 1
            ? <SingleRoleCard key={exp.id} exp={exp} />
            : <MultiRoleCard key={exp.id} exp={exp} />
        )}
      </div>
    </section>
  );
}

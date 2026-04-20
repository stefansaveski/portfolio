"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Experience } from "@/lib/types";
import { createExperience, updateExperience, deleteExperience } from "../actions";

type RoleForm = {
  title: string;
  duration: string;
  locationType: string;
  useBullets: boolean;
  bulletsText: string;
  description: string;
};

type ExpForm = {
  company: string;
  logo: string;
  employmentType: string;
  totalDuration: string;
  location: string;
  skills: string;
  link: string;
  linkLabel: string;
  order: number;
  roles: RoleForm[];
};

function emptyRole(): RoleForm {
  return { title: "", duration: "", locationType: "On-site", useBullets: false, bulletsText: "", description: "" };
}

function emptyForm(): ExpForm {
  return {
    company: "", logo: "", employmentType: "", totalDuration: "", location: "",
    skills: "", link: "", linkLabel: "", order: 1, roles: [emptyRole()],
  };
}

function expToForm(exp: Experience): ExpForm {
  return {
    company: exp.company,
    logo: exp.logo,
    employmentType: exp.employmentType,
    totalDuration: exp.totalDuration,
    location: exp.location,
    skills: exp.skills,
    link: exp.link ?? "",
    linkLabel: exp.linkLabel ?? "",
    order: exp.order,
    roles: exp.roles.map((r) => ({
      title: r.title,
      duration: r.duration,
      locationType: r.locationType,
      useBullets: !!(r.bulletPoints && r.bulletPoints.length > 0),
      bulletsText: r.bulletPoints?.join("\n") ?? "",
      description: r.description ?? "",
    })),
  };
}

function formToExp(form: ExpForm): Omit<Experience, "id"> {
  return {
    company: form.company,
    logo: form.logo,
    employmentType: form.employmentType,
    totalDuration: form.totalDuration,
    location: form.location,
    skills: form.skills,
    link: form.link || undefined,
    linkLabel: form.linkLabel || undefined,
    order: Number(form.order),
    roles: form.roles.map((r) => ({
      title: r.title,
      duration: r.duration,
      locationType: r.locationType,
      bulletPoints: r.useBullets ? r.bulletsText.split("\n").map((s) => s.trim()).filter(Boolean) : undefined,
      description: r.useBullets ? undefined : r.description,
    })),
  };
}

function ExperienceForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Experience;
  onSave: (data: Omit<Experience, "id">) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<ExpForm>(initial ? expToForm(initial) : emptyForm());
  const [saving, setSaving] = useState(false);

  function setField(key: keyof ExpForm, value: unknown) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function setRole(i: number, key: keyof RoleForm, value: unknown) {
    setForm((f) => {
      const roles = [...f.roles];
      roles[i] = { ...roles[i], [key]: value };
      return { ...f, roles };
    });
  }

  function addRole() {
    setForm((f) => ({ ...f, roles: [...f.roles, emptyRole()] }));
  }

  function removeRole(i: number) {
    setForm((f) => ({ ...f, roles: f.roles.filter((_, idx) => idx !== i) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formToExp(form));
    } finally {
      setSaving(false);
    }
  }

  const inputCls = "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";
  const labelCls = "text-sm font-medium";

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border bg-card p-6 space-y-6">
      <h2 className="font-semibold text-lg">{initial ? "Edit Experience" : "Add Experience"}</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelCls}>Company</label>
          <input value={form.company} onChange={(e) => setField("company", e.target.value)} className={inputCls} required />
        </div>
        <div>
          <label className={labelCls}>Employment Type</label>
          <input value={form.employmentType} onChange={(e) => setField("employmentType", e.target.value)} className={inputCls} placeholder="Internship, Self-employed…" />
        </div>
        <div>
          <label className={labelCls}>Logo Path / URL</label>
          <input value={form.logo} onChange={(e) => setField("logo", e.target.value)} className={inputCls} placeholder="/experience/logo.png" />
        </div>
        <div>
          <label className={labelCls}>Total Duration</label>
          <input value={form.totalDuration} onChange={(e) => setField("totalDuration", e.target.value)} className={inputCls} placeholder="3 mos" />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Location</label>
          <input value={form.location} onChange={(e) => setField("location", e.target.value)} className={inputCls} />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Skills (display text)</label>
          <input value={form.skills} onChange={(e) => setField("skills", e.target.value)} className={inputCls} placeholder="Python, API Development and +5 skills" />
        </div>
        <div>
          <label className={labelCls}>Link URL (optional)</label>
          <input value={form.link} onChange={(e) => setField("link", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Link Label (optional)</label>
          <input value={form.linkLabel} onChange={(e) => setField("linkLabel", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Order</label>
          <input type="number" value={form.order} onChange={(e) => setField("order", e.target.value)} className={inputCls} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Roles</h3>
          <button type="button" onClick={addRole} className="text-sm text-primary hover:underline">
            + Add Role
          </button>
        </div>
        {form.roles.map((role, i) => (
          <div key={i} className="rounded-lg border p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Role {i + 1}</span>
              {form.roles.length > 1 && (
                <button type="button" onClick={() => removeRole(i)} className="text-xs text-red-500 hover:underline">
                  Remove
                </button>
              )}
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <div>
                <label className={labelCls}>Title</label>
                <input value={role.title} onChange={(e) => setRole(i, "title", e.target.value)} className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Duration</label>
                <input value={role.duration} onChange={(e) => setRole(i, "duration", e.target.value)} className={inputCls} placeholder="Jan 2025 - Present · 3 mos" />
              </div>
              <div>
                <label className={labelCls}>Location Type</label>
                <select value={role.locationType} onChange={(e) => setRole(i, "locationType", e.target.value)} className={inputCls}>
                  <option>On-site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`bullets-${i}`}
                checked={role.useBullets}
                onChange={(e) => setRole(i, "useBullets", e.target.checked)}
                className="rounded"
              />
              <label htmlFor={`bullets-${i}`} className="text-sm font-medium">Use bullet list</label>
            </div>
            {role.useBullets ? (
              <div>
                <label className={labelCls}>Bullet Points (one per line)</label>
                <textarea
                  value={role.bulletsText}
                  onChange={(e) => setRole(i, "bulletsText", e.target.value)}
                  rows={5}
                  className={inputCls}
                  placeholder="First bullet point&#10;Second bullet point&#10;Third bullet point"
                />
              </div>
            ) : (
              <div>
                <label className={labelCls}>Description</label>
                <textarea value={role.description} onChange={(e) => setRole(i, "description", e.target.value)} rows={3} className={inputCls} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button type="submit" disabled={saving} className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50">
          {saving ? "Saving…" : "Save"}
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-md border text-sm font-medium hover:bg-muted">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function ExperienceAdmin({ initialExperiences }: { initialExperiences: Experience[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<Experience | null>(null);
  const [adding, setAdding] = useState(false);

  async function handleSave(data: Omit<Experience, "id">) {
    if (editing) {
      await updateExperience(editing.id, data);
      setEditing(null);
    } else {
      await createExperience(data);
      setAdding(false);
    }
    router.refresh();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this experience?")) return;
    await deleteExperience(id);
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Experience</h1>
        {!adding && !editing && (
          <button
            onClick={() => setAdding(true)}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90"
          >
            + Add Experience
          </button>
        )}
      </div>

      {(adding || editing) && (
        <ExperienceForm
          initial={editing ?? undefined}
          onSave={handleSave}
          onCancel={() => { setAdding(false); setEditing(null); }}
        />
      )}

      <div className="space-y-4">
        {initialExperiences.map((exp) => (
          <div key={exp.id} className="rounded-xl border bg-card p-5 flex items-start justify-between gap-4">
            <div>
              <div className="font-semibold">{exp.company}</div>
              <div className="text-sm text-muted-foreground">{exp.employmentType} · {exp.totalDuration}</div>
              <div className="text-sm text-muted-foreground mt-1">{exp.location}</div>
              <div className="mt-2 flex gap-1 flex-wrap">
                {exp.roles.map((r, i) => (
                  <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded">{r.title}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => { setEditing(exp); setAdding(false); }}
                className="px-3 py-1.5 border rounded text-sm hover:bg-muted"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(exp.id)}
                className="px-3 py-1.5 border border-red-200 text-red-600 rounded text-sm hover:bg-red-50 dark:hover:bg-red-950"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

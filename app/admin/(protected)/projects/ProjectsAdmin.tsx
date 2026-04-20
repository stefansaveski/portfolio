"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/lib/types";
import { createProject, updateProject, deleteProject } from "../actions";

type FormData = {
  title: string;
  description: string;
  image: string;
  link: string;
  siteLink: string;
  tagsInput: string;
  order: number;
};

function emptyForm(): FormData {
  return { title: "", description: "", image: "", link: "", siteLink: "", tagsInput: "", order: 1 };
}

function projectToForm(p: Project): FormData {
  return {
    title: p.title,
    description: p.description,
    image: p.image,
    link: p.link,
    siteLink: p.siteLink ?? "",
    tagsInput: p.tags.join(", "),
    order: p.order,
  };
}

function ProjectForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Project;
  onSave: (data: Omit<Project, "id">) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<FormData>(initial ? projectToForm(initial) : emptyForm());
  const [saving, setSaving] = useState(false);

  function set(key: keyof FormData, value: string | number) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave({
        title: form.title,
        description: form.description,
        image: form.image,
        link: form.link,
        siteLink: form.siteLink || undefined,
        tags: form.tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
        order: Number(form.order),
      });
    } finally {
      setSaving(false);
    }
  }

  const inputCls = "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";
  const labelCls = "text-sm font-medium";

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border bg-card p-6 space-y-4">
      <h2 className="font-semibold text-lg">{initial ? "Edit Project" : "Add Project"}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelCls}>Title</label>
          <input value={form.title} onChange={(e) => set("title", e.target.value)} className={inputCls} required />
        </div>
        <div>
          <label className={labelCls}>Order</label>
          <input type="number" value={form.order} onChange={(e) => set("order", e.target.value)} className={inputCls} required />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Description</label>
          <textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={3} className={inputCls} required />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Image URL</label>
          <input value={form.image} onChange={(e) => set("image", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>GitHub Link</label>
          <input value={form.link} onChange={(e) => set("link", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Site Link (optional)</label>
          <input value={form.siteLink} onChange={(e) => set("siteLink", e.target.value)} className={inputCls} />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Tags (comma-separated)</label>
          <input value={form.tagsInput} onChange={(e) => set("tagsInput", e.target.value)} className={inputCls} placeholder="Next.js, TypeScript, ..." />
        </div>
      </div>
      <div className="flex gap-2 pt-2">
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

export default function ProjectsAdmin({ initialProjects }: { initialProjects: Project[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<Project | null>(null);
  const [adding, setAdding] = useState(false);

  async function handleSave(data: Omit<Project, "id">) {
    if (editing) {
      await updateProject(editing.id, data);
      setEditing(null);
    } else {
      await createProject(data);
      setAdding(false);
    }
    router.refresh();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this project?")) return;
    await deleteProject(id);
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        {!adding && !editing && (
          <button
            onClick={() => setAdding(true)}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90"
          >
            + Add Project
          </button>
        )}
      </div>

      {(adding || editing) && (
        <ProjectForm
          initial={editing ?? undefined}
          onSave={handleSave}
          onCancel={() => { setAdding(false); setEditing(null); }}
        />
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {initialProjects.map((project) => (
          <div key={project.id} className="rounded-xl border bg-card p-4 flex flex-col gap-3">
            <div>
              <div className="font-semibold">{project.title}</div>
              <div className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</div>
            </div>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-muted px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => { setEditing(project); setAdding(false); }}
                className="flex-1 px-3 py-1.5 border rounded text-sm hover:bg-muted"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="flex-1 px-3 py-1.5 border border-red-200 text-red-600 rounded text-sm hover:bg-red-50 dark:hover:bg-red-950"
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

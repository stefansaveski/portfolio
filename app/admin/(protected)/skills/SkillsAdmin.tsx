"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SkillCategory } from "@/lib/types";
import { createSkillCategory, updateSkillCategory, deleteSkillCategory } from "../actions";

type CatForm = {
  category: string;
  order: number;
  skills: string[];
  newSkill: string;
};

function emptyForm(): CatForm {
  return { category: "", order: 1, skills: [], newSkill: "" };
}

function catToForm(cat: SkillCategory): CatForm {
  return { category: cat.category, order: cat.order, skills: [...cat.skills], newSkill: "" };
}

function CategoryForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: SkillCategory;
  onSave: (data: Omit<SkillCategory, "id">) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<CatForm>(initial ? catToForm(initial) : emptyForm());
  const [saving, setSaving] = useState(false);

  function addSkill() {
    const s = form.newSkill.trim();
    if (!s || form.skills.includes(s)) return;
    setForm((f) => ({ ...f, skills: [...f.skills, s], newSkill: "" }));
  }

  function removeSkill(skill: string) {
    setForm((f) => ({ ...f, skills: f.skills.filter((s) => s !== skill) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave({ category: form.category, order: Number(form.order), skills: form.skills });
    } finally {
      setSaving(false);
    }
  }

  const inputCls = "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";
  const labelCls = "text-sm font-medium";

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border bg-card p-6 space-y-4">
      <h2 className="font-semibold text-lg">{initial ? "Edit Category" : "Add Category"}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelCls}>Category Name</label>
          <input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className={inputCls} required />
        </div>
        <div>
          <label className={labelCls}>Order</label>
          <input type="number" value={form.order} onChange={(e) => setForm((f) => ({ ...f, order: +e.target.value }))} className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Skills</label>
        <div className="mt-2 flex flex-wrap gap-2 min-h-[2rem]">
          {form.skills.map((skill) => (
            <span key={skill} className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              {skill}
              <button type="button" onClick={() => removeSkill(skill)} className="ml-1 hover:text-red-500 font-bold leading-none">×</button>
            </span>
          ))}
        </div>
        <div className="mt-2 flex gap-2">
          <input
            value={form.newSkill}
            onChange={(e) => setForm((f) => ({ ...f, newSkill: e.target.value }))}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSkill(); } }}
            placeholder="Type a skill and press Enter or Add"
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="button" onClick={addSkill} className="px-3 py-2 border rounded-md text-sm hover:bg-muted">
            Add
          </button>
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

export default function SkillsAdmin({ initialCategories }: { initialCategories: SkillCategory[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<SkillCategory | null>(null);
  const [adding, setAdding] = useState(false);

  async function handleSave(data: Omit<SkillCategory, "id">) {
    if (editing) {
      await updateSkillCategory(editing.id, data);
      setEditing(null);
    } else {
      await createSkillCategory(data);
      setAdding(false);
    }
    router.refresh();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this category?")) return;
    await deleteSkillCategory(id);
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Skills</h1>
        {!adding && !editing && (
          <button
            onClick={() => setAdding(true)}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90"
          >
            + Add Category
          </button>
        )}
      </div>

      {(adding || editing) && (
        <CategoryForm
          initial={editing ?? undefined}
          onSave={handleSave}
          onCancel={() => { setAdding(false); setEditing(null); }}
        />
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {initialCategories.map((cat) => (
          <div key={cat.id} className="rounded-xl border bg-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{cat.category}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => { setEditing(cat); setAdding(false); }}
                  className="px-3 py-1 border rounded text-sm hover:bg-muted"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="px-3 py-1 border border-red-200 text-red-600 rounded text-sm hover:bg-red-50 dark:hover:bg-red-950"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span key={skill} className="text-xs bg-muted px-2 py-0.5 rounded">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

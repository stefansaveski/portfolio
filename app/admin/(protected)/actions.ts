"use server";
import { adminDb } from "@/lib/firebase-admin";
import { revalidatePath } from "next/cache";
import type { Project, Experience, SkillCategory } from "@/lib/types";

// ─── Projects ───────────────────────────────────────────────────────────────

export async function createProject(data: Omit<Project, "id">) {
  await adminDb.collection("projects").add(data);
  revalidatePath("/");
  revalidatePath("/admin/projects");
}

export async function updateProject(id: string, data: Omit<Project, "id">) {
  await adminDb.collection("projects").doc(id).update(data);
  revalidatePath("/");
  revalidatePath("/admin/projects");
}

export async function deleteProject(id: string) {
  await adminDb.collection("projects").doc(id).delete();
  revalidatePath("/");
  revalidatePath("/admin/projects");
}

// ─── Experience ──────────────────────────────────────────────────────────────

export async function createExperience(data: Omit<Experience, "id">) {
  await adminDb.collection("experience").add(data);
  revalidatePath("/");
  revalidatePath("/admin/experience");
}

export async function updateExperience(id: string, data: Omit<Experience, "id">) {
  await adminDb.collection("experience").doc(id).update(data);
  revalidatePath("/");
  revalidatePath("/admin/experience");
}

export async function deleteExperience(id: string) {
  await adminDb.collection("experience").doc(id).delete();
  revalidatePath("/");
  revalidatePath("/admin/experience");
}

// ─── Skills ──────────────────────────────────────────────────────────────────

export async function createSkillCategory(data: Omit<SkillCategory, "id">) {
  await adminDb.collection("skills").add(data);
  revalidatePath("/");
  revalidatePath("/admin/skills");
}

export async function updateSkillCategory(id: string, data: Omit<SkillCategory, "id">) {
  await adminDb.collection("skills").doc(id).update(data);
  revalidatePath("/");
  revalidatePath("/admin/skills");
}

export async function deleteSkillCategory(id: string) {
  await adminDb.collection("skills").doc(id).delete();
  revalidatePath("/");
  revalidatePath("/admin/skills");
}

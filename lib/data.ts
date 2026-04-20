import { adminDb } from "./firebase-admin";
import type { Project, Experience, SkillCategory } from "./types";

export async function getProjects(): Promise<Project[]> {
  const snapshot = await adminDb.collection("projects").orderBy("order").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Project));
}

export async function getExperiences(): Promise<Experience[]> {
  const snapshot = await adminDb.collection("experience").orderBy("order").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Experience));
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  const snapshot = await adminDb.collection("skills").orderBy("order").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as SkillCategory));
}

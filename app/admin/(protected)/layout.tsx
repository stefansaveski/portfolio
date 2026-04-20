import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminAuth } from "@/lib/firebase-admin";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) redirect("/admin/login");

  try {
    await adminAuth.verifySessionCookie(session, true);
  } catch {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex h-14 items-center gap-6">
          <span className="font-bold text-sm">Portfolio Admin</span>
          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link href="/admin" className="transition-colors hover:text-foreground/80">
              Dashboard
            </Link>
            <Link href="/admin/projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="/admin/experience" className="transition-colors hover:text-foreground/80">
              Experience
            </Link>
            <Link href="/admin/skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
          </nav>
          <div className="ml-auto">
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">{children}</main>
    </div>
  );
}

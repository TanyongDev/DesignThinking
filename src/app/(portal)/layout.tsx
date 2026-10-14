import { AppShell } from "@/components/layout/AppShell";
import { getStudentProfile } from "@/features/profile/services/profileService";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const student = await getStudentProfile();
  return <AppShell student={student}>{children}</AppShell>;
}

import { PageHeader } from "@/components/layout/PageHeader";
import { ProfileCard } from "@/features/profile/components/ProfileCard";
import { getStudentProfile } from "@/features/profile/services/profileService";

export const metadata = { title: "บัญชีผู้ใช้" };

export default async function ProfilePage() {
  const profile = await getStudentProfile();
  return (
    <>
      <PageHeader title="บัญชีผู้ใช้" />
      <ProfileCard profile={profile} />
    </>
  );
}

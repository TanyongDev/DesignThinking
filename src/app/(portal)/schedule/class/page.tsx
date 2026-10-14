import { PageHeader } from "@/components/layout/PageHeader";
import { getStudentProfile } from "@/features/profile/services/profileService";
import { SchedulePage } from "@/features/schedule/components/SchedulePage";
import { getClassSessions } from "@/features/schedule/services/scheduleService";

export const metadata = { title: "ตารางเรียนส่วนบุคคล" };

export default async function ClassSchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ term?: string }>;
}) {
  const { term } = await searchParams;
  const student = await getStudentProfile();
  return (
    <>
      <PageHeader title="ตารางเรียนส่วนบุคคล" />
      <SchedulePage
        student={student}
        termId={term}
        loadSessions={getClassSessions}
        footerLabel="ตารางเรียน นักศึกษา"
      />
    </>
  );
}

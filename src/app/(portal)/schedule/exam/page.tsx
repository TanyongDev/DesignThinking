import { PageHeader } from "@/components/layout/PageHeader";
import { getStudentProfile } from "@/features/profile/services/profileService";
import { SchedulePage } from "@/features/schedule/components/SchedulePage";
import { getExamSessions } from "@/features/schedule/services/scheduleService";

export const metadata = { title: "ตารางสอบส่วนบุคคล" };

export default async function ExamSchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ term?: string }>;
}) {
  const { term } = await searchParams;
  const student = await getStudentProfile();
  return (
    <>
      <PageHeader title="ตารางสอบส่วนบุคคล" />
      <SchedulePage
        student={student}
        termId={term}
        loadSessions={getExamSessions}
        footerLabel="ตารางสอบ นักศึกษา"
      />
    </>
  );
}

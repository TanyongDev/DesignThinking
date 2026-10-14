import type { StudentSummary } from "@/types/student";
import { getTerms } from "../services/scheduleService";
import type { ClassSession } from "../types";
import { ScheduleTable } from "./ScheduleTable";
import { TermToolbar } from "./TermToolbar";
import { Timetable } from "./Timetable";

interface Props {
  student: StudentSummary;
  termId?: string;
  loadSessions: (termId: string) => Promise<ClassSession[]>;
  footerLabel: string;
}

/** ใช้ร่วมกันระหว่างตารางเรียนและตารางสอบ */
export async function SchedulePage({ student, termId, loadSessions, footerLabel }: Props) {
  const terms = await getTerms();
  const currentTermId = terms.find((t) => t.id === termId)?.id ?? terms[0].id;
  const sessions = await loadSessions(currentTermId);

  return (
    <>
      <section className="timetable-card">
        <TermToolbar
          terms={terms}
          currentTermId={currentTermId}
          student={student}
          updatedAt="29 กันยายน 2569 23:42:48"
        />
        <Timetable sessions={sessions} />
      </section>
      <div className="mt-4">
        <ScheduleTable
          sessions={sessions}
          footer={`${footerLabel} ${student.displayName} รหัสนักศึกษา ${student.studentCode}`}
        />
      </div>
    </>
  );
}

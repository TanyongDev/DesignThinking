import type { StudentSummary } from "@/types/student";

export function UserCard({ student }: { student: StudentSummary }) {
  return (
    <div className="user-card">
      <i className="bi bi-person-circle user-card__avatar" aria-hidden="true" />
      <div>
        <div className="user-card__name">{student.displayName}</div>
        <div className="user-card__meta">{student.levelLabel}</div>
        <div className="user-card__meta">รหัส: {student.studentCode}</div>
      </div>
    </div>
  );
}

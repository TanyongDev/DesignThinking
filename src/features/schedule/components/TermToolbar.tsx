"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Term } from "@/types/common";
import type { StudentSummary } from "@/types/student";

interface Props {
  terms: Term[];
  currentTermId: string;
  student: StudentSummary;
  updatedAt: string;
}

/** แถบเลือกภาคเรียน — เก็บค่าไว้ใน URL (?term=) เพื่อแชร์ลิงก์/รีเฟรชแล้วค่ายังอยู่ */
export function TermToolbar({ terms, currentTermId, student, updatedAt }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const current = terms.find((t) => t.id === currentTermId);

  return (
    <div className="timetable-toolbar">
      <label className="visually-hidden" htmlFor="term">
        ภาคเรียน
      </label>
      <select
        id="term"
        className="term-select"
        value={currentTermId}
        onChange={(e) => router.push(`${pathname}?term=${e.target.value}`)}
      >
        {terms.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
      {current && (
        <span className="chip chip--pink">ภาคเรียนปัจจุบัน: {current.label.replace("ภาคเรียนที่ ", "")}</span>
      )}
      <span className="chip chip--cyan">รหัสนักศึกษา: {student.studentCode}</span>
      <span className="chip chip--green">{student.displayName}</span>
      <span className="chip chip--amber ms-auto">ข้อมูล ณ: {updatedAt}</span>
      <button type="button" className="export-btn" disabled>
        jpg
      </button>
      <button type="button" className="export-btn" disabled>
        pdf
      </button>
    </div>
  );
}

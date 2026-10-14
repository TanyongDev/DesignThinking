import { WEEKDAYS } from "../constants";
import type { ClassSession } from "../types";

const dayLabel = (key: ClassSession["day"]) => WEEKDAYS.find((d) => d.key === key)?.th ?? key;

export function ScheduleTable({ sessions, footer }: { sessions: ClassSession[]; footer: string }) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>รหัสวิชา</th>
            <th>ชื่อวิชา</th>
            <th className="text-end">กลุ่ม</th>
            <th>วัน - เวลาเรียน</th>
            <th>ห้องเรียน</th>
            <th>อาจารย์ที่สอน</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr key={s.id}>
              <td>{s.courseCode}</td>
              <td className="col-name">{s.courseName}</td>
              <td className="col-num">{s.section}</td>
              <td className="col-day">
                {dayLabel(s.day)} {s.start} - {s.end}
              </td>
              <td className="col-room">{s.room}</td>
              <td>{s.instructors.join(" ")}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>{footer}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

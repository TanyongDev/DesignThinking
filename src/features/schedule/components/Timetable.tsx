import { toPercent } from "@/lib/time";
import { TIMETABLE_END_HOUR, TIMETABLE_START_HOUR, WEEKDAYS } from "../constants";
import type { ClassSession } from "../types";

const HOURS = Array.from(
  { length: TIMETABLE_END_HOUR - TIMETABLE_START_HOUR + 1 },
  (_, i) => TIMETABLE_START_HOUR + i,
);

export function Timetable({ sessions }: { sessions: ClassSession[] }) {
  const cols = TIMETABLE_END_HOUR - TIMETABLE_START_HOUR;

  return (
    <div className="timetable" role="region" aria-label="ตารางเรียนรายสัปดาห์" tabIndex={0}>
      <div className="timetable__inner" style={{ ["--cols" as string]: cols }}>
        <div className="timetable__head">
          <div className="timetable__day">Time</div>
          <div className="timetable__hours">
            {HOURS.map((h) => (
              <span key={h} style={{ left: `${((h - TIMETABLE_START_HOUR) / cols) * 100}%` }}>
                {String(h).padStart(2, "0")}:00
              </span>
            ))}
          </div>
        </div>

        {WEEKDAYS.map((day) => (
          <div className="timetable__row" key={day.key}>
            <div className="timetable__day">{day.short}</div>
            <div className="timetable__track">
              {sessions
                .filter((s) => s.day === day.key)
                .map((s) => {
                  const left = toPercent(s.start, TIMETABLE_START_HOUR, TIMETABLE_END_HOUR);
                  const right = toPercent(s.end, TIMETABLE_START_HOUR, TIMETABLE_END_HOUR);
                  return (
                    <div
                      key={s.id}
                      className={`slot slot--${s.color}`}
                      style={{ left: `${left}%`, width: `${right - left}%` }}
                    >
                      <div>{s.courseCode}</div>
                      <div>{s.courseName}</div>
                      <div>กลุ่ม {s.section}</div>
                      {s.room !== "-" && <div>{s.room}</div>}
                      <span className="slot__time">
                        <i className="bi bi-clock me-1" aria-hidden="true" />
                        {s.start} - {s.end}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

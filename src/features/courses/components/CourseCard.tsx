import { CATEGORY_META } from "../constants";
import type { CourseOffering } from "../types";

interface Props {
  course: CourseOffering;
  onOpenDetail?: (course: CourseOffering) => void;
}

export function CourseCard({ course: c, onOpenDetail }: Props) {
  const remaining = c.capacity - c.enrolled;
  const meta = CATEGORY_META[c.category];

  return (
    <article className="course-card">
      <div className="course-card__head">
        <div>
          <div className="course-card__code">
            <span className="course-card__icon" aria-hidden="true">
              <i className={`bi ${meta.icon}`} />
            </span>
            รหัสวิชา : {c.code}
          </div>
          <div className="course-card__sub">
            <span>คณะ: {c.faculty}</span>
            <span>สาขา: {c.major}</span>
          </div>
        </div>
        <div>
          <div className="course-card__type">ประเภทวิชา : {meta.label}</div>
          <div className={`text-end ${c.conflict ? "conflict" : "no-conflict"}`}>
            <i
              className={`bi ${c.conflict ? "bi-exclamation-octagon-fill" : "bi-check-square-fill"} me-1`}
              aria-hidden="true"
            />
            {c.conflict ? "ชนตารางเรียน !!" : "ไม่ชนตารางเรียน"}
          </div>
        </div>
      </div>

      <div className="course-card__body">
        <div className="course-card__box">
          <div>ชื่อวิชา : {c.name}</div>
          <div>
            กลุ่ม : {c.section} &nbsp;&nbsp; หน่วยกิต : {c.credits}
          </div>
          <div>สถานที่เรียน : {c.location}</div>
          <div>เวลาที่เรียน : {c.schedule}</div>
          <div>วันสอบ : {c.exam}</div>
          <div>รายชื่ออาจารย์ : {c.instructors.join(", ")}</div>
        </div>
        <div className="course-card__box">
          <div>จำนวนรับ: {c.capacity}</div>
          <div>ลงล่วงหน้า: {c.enrolled}</div>
          <div>
            ที่นั่งเหลือ:{" "}
            <span className={remaining > 0 ? "ok" : "full"}>{remaining > 0 ? remaining : "full"}</span>
          </div>
          <div>
            หมายเหตุ: <span className="note-link">{c.note}</span>
          </div>
          <div>เงื่อนไข : {c.condition}</div>
        </div>
      </div>

      {onOpenDetail && (
        <div className="text-end mt-2">
          <button type="button" className="course-card__more" onClick={() => onOpenDetail(c)}>
            ดูรายละเอียดรายวิชา <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </article>
  );
}

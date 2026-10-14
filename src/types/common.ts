export type Weekday = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

/** ชื่อสีที่ใช้ใน Timetable (map เป็นคลาส SCSS ใน _timetable.scss) */
export type SlotColor = "blue" | "red" | "orange" | "yellow" | "cyan" | "green";

export interface Term {
  /** รูปแบบ "1-2569" = ภาคเรียนที่ 1 ปีการศึกษา 2569 */
  id: string;
  label: string;
}

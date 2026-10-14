import type { SlotColor, Weekday } from "@/types/common";

export interface ClassSession {
  id: string;
  courseCode: string;
  courseName: string;
  section: number;
  day: Weekday;
  /** "HH:mm" 24 ชม. */
  start: string;
  end: string;
  room: string;
  instructors: string[];
  color: SlotColor;
}

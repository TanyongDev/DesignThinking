import type { Weekday } from "@/types/common";

export const WEEKDAYS: { key: Weekday; short: string; th: string }[] = [
  { key: "sun", short: "Sun", th: "อาทิตย์" },
  { key: "mon", short: "Mon", th: "จันทร์" },
  { key: "tue", short: "Tue", th: "อังคาร" },
  { key: "wed", short: "Wed", th: "พุธ" },
  { key: "thu", short: "Thu", th: "พฤหัส" },
  { key: "fri", short: "Fri", th: "ศุกร์" },
  { key: "sat", short: "Sat", th: "เสาร์" },
];

export const TIMETABLE_START_HOUR = 8;
export const TIMETABLE_END_HOUR = 20;

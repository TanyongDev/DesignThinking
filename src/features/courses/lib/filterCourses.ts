import type { CourseFilterState, CourseOffering } from "../types";

export const INITIAL_FILTERS: CourseFilterState = {
  category: "all",
  keyword: "",
  section: "all",
  faculty: "all",
  major: "all",
};

/** Pure function — เทสต์ง่าย ไม่ผูกกับ React */
export function filterCourses(courses: CourseOffering[], f: CourseFilterState): CourseOffering[] {
  const kw = f.keyword.trim().toLowerCase();
  return courses.filter((c) => {
    if (f.category !== "all" && c.category !== f.category) return false;
    if (f.section !== "all" && String(c.section) !== f.section) return false;
    if (f.faculty !== "all" && c.faculty !== f.faculty) return false;
    if (f.major !== "all" && c.major !== f.major) return false;
    if (kw && !`${c.code} ${c.name}`.toLowerCase().includes(kw)) return false;
    return true;
  });
}

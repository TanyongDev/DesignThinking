export type CourseCategory = "gened" | "free" | "faculty";

export interface CourseDescriptionItem {
  heading: string;
  body: string;
}

export interface CourseOffering {
  id: string;
  code: string;
  name: string;
  category: CourseCategory;
  section: number;
  credits: number;
  faculty: string;
  major: string;
  location: string;
  schedule: string;
  exam: string;
  instructors: string[];
  capacity: number;
  enrolled: number;
  note: string;
  condition: string;
  /** true = ชนกับตารางเรียนของนักศึกษา */
  conflict: boolean;
  /** รายละเอียดรายวิชา (แสดงใน popup) */
  description: CourseDescriptionItem[];
}

export interface CourseFilterState {
  category: CourseCategory | "all";
  keyword: string;
  section: string;
  faculty: string;
  major: string;
}

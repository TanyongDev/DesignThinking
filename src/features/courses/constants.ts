import type { CourseCategory } from "./types";

export const CATEGORY_META: Record<CourseCategory, { label: string; icon: string }> = {
  gened: { label: "gened", icon: "bi-briefcase-fill" },
  free: { label: "เสรี", icon: "bi-dice-5-fill" },
  faculty: { label: "คณะ", icon: "bi-box-fill" },
};

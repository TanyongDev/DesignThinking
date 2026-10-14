import { USE_MOCK, apiGet } from "@/lib/api";
import { MOCK_COURSES, MOCK_GUIDE_GROUPS } from "@/mocks/courses";
import type { CourseOffering } from "../types";

export async function getCourseOfferings(): Promise<CourseOffering[]> {
  return USE_MOCK ? MOCK_COURSES : apiGet<CourseOffering[]>("/courses");
}

export async function getGuideGroups() {
  return USE_MOCK ? MOCK_GUIDE_GROUPS : apiGet<typeof MOCK_GUIDE_GROUPS>("/courses/guide");
}

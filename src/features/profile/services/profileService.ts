import { cache } from "react";
import { USE_MOCK, apiGet } from "@/lib/api";
import { MOCK_STUDENT } from "@/mocks/student";
import type { StudentProfile } from "@/types/student";

/** cache() = เรียกซ้ำใน request เดียว (layout + page) จะยิงครั้งเดียว */
export const getStudentProfile = cache(async (): Promise<StudentProfile> => {
  return USE_MOCK ? MOCK_STUDENT : apiGet<StudentProfile>("/me");
});

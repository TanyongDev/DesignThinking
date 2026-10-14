import { USE_MOCK, apiGet } from "@/lib/api";
import { MOCK_CLASS_SESSIONS, MOCK_TERMS } from "@/mocks/schedule";
import type { Term } from "@/types/common";
import type { ClassSession } from "../types";

export async function getTerms(): Promise<Term[]> {
  return USE_MOCK ? MOCK_TERMS : apiGet<Term[]>("/terms");
}

export async function getClassSessions(termId: string): Promise<ClassSession[]> {
  return USE_MOCK ? MOCK_CLASS_SESSIONS : apiGet<ClassSession[]>(`/schedule/class?term=${termId}`);
}

export async function getExamSessions(termId: string): Promise<ClassSession[]> {
  // TODO: เปลี่ยนเป็น endpoint ตารางสอบเมื่อ API พร้อม
  return USE_MOCK ? MOCK_CLASS_SESSIONS.slice(0, 4) : apiGet<ClassSession[]>(`/schedule/exam?term=${termId}`);
}

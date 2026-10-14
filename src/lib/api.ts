const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

/** true เมื่อยังไม่ตั้งค่า API จริง → services จะคืน mock data */
export const USE_MOCK = BASE_URL === "";

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { cache: "no-store", ...init });
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  return (await res.json()) as T;
}

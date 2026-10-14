export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** ตำแหน่งแนวนอนเป็น % ภายในช่วงเวลาที่กำหนด */
export function toPercent(hhmm: string, startHour: number, endHour: number): number {
  const total = (endHour - startHour) * 60;
  return ((toMinutes(hhmm) - startHour * 60) / total) * 100;
}

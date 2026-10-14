import type { CourseOffering } from "@/features/courses/types";

const description: CourseOffering["description"] = [
  {
    heading: "ท่องกาลเวลาเบื้องหลังหน้าจอ:",
    body: "เจาะลึกจุดกำเนิดเทคโนโลยี ตั้งแต่ฟันเฟืองเครื่องคำนวณยุคโบราณ สู่มันสมองกลและ AI เปลี่ยนโลก",
  },
  {
    heading: "ไขลับนวัตกรระดับตำนาน:",
    body: "ถอดความคิดเหล่านวัตกรผู้เนรมิตอนาคต ว่าพวกเขาสร้างนวัตกรรมพลิกโลกขึ้นมาจากความว่างเปล่าได้อย่างไร",
  },
  {
    heading: "อ่านโค้ดลับแห่งประวัติศาสตร์:",
    body: 'ไม่ใช่แค่การท่องจำอดีต แต่เป็นการทำความเข้าใจ "รากฐาน" เพื่อมองเห็นทิศทางของเทคโนโลยีในอนาคต',
  },
  {
    heading: "จุดประกายไอเดียสุดท้าทาย:",
    body: "ค้นพบแรงบันดาลใจใหม่ๆ ในการต่อยอดอัลกอริทึมและระบบคอมพิวเตอร์ไปให้ไกลกว่าเดิม",
  },
  {
    heading: "เปลี่ยนมุมมองการเขียนโปรแกรม:",
    body: "ปลดล็อกความเข้าใจลึกซึ้ง ที่จะเปลี่ยนวิธีคิดและการมองโลกดิจิทัลของคุณไปตลอดกาล",
  },
];

const base: Omit<CourseOffering, "id" | "code" | "category" | "conflict"> = {
  description,
  name: "ABBCCDDEE for computer",
  section: 102,
  credits: 3,
  faculty: "-",
  major: "-",
  location: "ตึกพระเทพฯ-D ห้อง D-110",
  schedule: "ศุกร์ 09:30 - 10:30น.",
  exam: "จัดสอบเอง",
  instructors: ["ดร.xxx xxxxxx", "ศ.ดร. xxxxx xxxxxx"],
  capacity: 90,
  enrolled: 50,
  note: "รับเฉพาะสาขาที่กำหนดไว้",
  condition: "-",
};

export const MOCK_COURSES: CourseOffering[] = [
  { ...base, id: "c1", code: "05xxxxxxxxxxxx", category: "gened", conflict: true },
  { ...base, id: "c2", code: "05xxxxxxxxxxxx", category: "gened", conflict: false },
  { ...base, id: "c3", code: "05xxxxxxxxxxxx", category: "faculty", conflict: false, enrolled: 70 },
  { ...base, id: "c4", code: "05xxxxxxxxxxxx", category: "free", conflict: true },
  { ...base, id: "c5", code: "05xxxxxxxxxxxx", category: "faculty", conflict: false, enrolled: 70 },
  { ...base, id: "c6", code: "05xxxxxxxxxxxx", category: "free", conflict: true },
];

export const MOCK_GUIDE_GROUPS = [
  { id: "gen", title: "หมวดหมู่รายวิชาทั่วไป" },
  { id: "faculty", title: "หมวดหมู่รายวิชาเฉพาะภาค" },
  { id: "free", title: "หมวดหมู่รายวิชาเสรี" },
].map((g) => ({
  ...g,
  rows: [
    { code: "0XXXXXXXXX", name: "PROGRAMMING FUNDAMENTALS", teachers: "ดร. XXXXXXX XXXXX TA" },
    { code: "0XXXXXXXXX", name: "DISCRETE MATHEMATICS", teachers: "ผศ. ดร. XXXXXXX XXXXX" },
    { code: "0XXXXXXXXX", name: "AI DRIVEN", teachers: "ดร. XXXXXXX XXXXX" },
  ],
}));

# Architecture

## หลักการ 5 ข้อ

1. **`app/` บางที่สุด** — page ทำแค่: เรียก service → ส่งข้อมูลให้ component → วาง `<PageHeader>`
2. **แยกตามฟีเจอร์ ไม่ใช่ตามชนิดไฟล์** — ของที่เกี่ยวกับ courses อยู่ใน `features/courses/` ทั้งหมด
3. **Service เป็นประตูเดียวของข้อมูล** — component ไม่เรียก `fetch` เอง; สลับ mock ↔ API ที่ `services/*.ts`
4. **Server Component เป็นค่าเริ่มต้น** — ใส่ `"use client"` เฉพาะที่ต้องมี state/event (Sidebar, Modal, CourseCatalog, RegistrationWorkspace, TermToolbar)
5. **สี/ขนาดอยู่ที่ `styles/_variables.scss`** — ห้าม hard-code สีใน component

## Data flow

```
page.tsx (server) ──> features/*/services ──> (mock | apiGet)
        │
        └──> features/*/components  ──(props)──> client components (state, events)
```

ภาคเรียนที่เลือกเก็บใน URL (`?term=1-2569`) เพื่อแชร์ลิงก์/รีเฟรชได้

## เพิ่มหน้าใหม่ (ตัวอย่าง: `/grades`)

1. `src/features/grades/` → `types.ts`, `services/gradeService.ts`, `components/GradeTable.tsx`
2. `src/mocks/grades.ts` (ถ้ายังไม่มี API)
3. `src/app/(portal)/grades/page.tsx`

   ```tsx
   export const metadata = { title: "ผลการเรียน" };
   export default async function GradesPage() {
     const grades = await getGrades();
     return (
       <>
         <PageHeader title="ผลการเรียน" />
         <GradeTable rows={grades} />
       </>
     );
   }
   ```

4. เพิ่มเมนูใน `src/config/navigation.ts` (sidebar และ active state ทำงานเอง)
5. `yarn validate`

## ต่อ API จริง

1. ตั้ง `NEXT_PUBLIC_API_BASE_URL` ใน `.env.local`
2. แก้ endpoint ใน `features/*/services/*.ts`
3. response ต่างจาก types → map ใน service (อย่าแก้ component)

## Conventions

- ชื่อไฟล์ component = PascalCase, utility = camelCase
- Pure logic (เช่น `filterCourses`) แยกออกจาก React เพื่อเขียนเทสต์ง่าย
- Accessibility: ใช้ `<button>`/`<a>`/`<label>` จริง, ปุ่มไอคอนต้องมี `aria-label`
- ก่อนเปิด PR: `yarn validate`

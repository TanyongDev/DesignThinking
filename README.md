# Student Portal (Frontend)

Next.js 15 (App Router) · React 19 · TypeScript · Bootstrap 5 · SCSS — จัดการแพ็กเกจด้วย **Yarn**

## เริ่มใช้งาน

```bash
corepack enable            # (ครั้งเดียว) หรือ npm i -g yarn
yarn install               # ใช้ yarn เท่านั้น (npm/pnpm จะถูกบล็อกโดย preinstall)
cp .env.example .env.local # เว้น NEXT_PUBLIC_API_BASE_URL ว่าง = ใช้ mock data
yarn dev                   # http://localhost:3000
```

| คำสั่ง           | ทำอะไร                                     |
| ---------------- | ------------------------------------------ |
| `yarn dev`       | รัน dev server                             |
| `yarn build`     | build production                           |
| `yarn start`     | รัน production build                       |
| `yarn typecheck` | ตรวจ TypeScript                            |
| `yarn lint`      | ESLint                                     |
| `yarn format`    | จัดฟอร์แมตด้วย Prettier                    |
| `yarn validate`  | typecheck + lint + format:check (ใช้ใน CI) |

CI ควรใช้ `yarn install --frozen-lockfile`

## หน้าทั้งหมด (ตรงกับ `docs/design/`)

| Route                   | หน้า                               | รูปอ้างอิง |
| ----------------------- | ---------------------------------- | ---------- |
| `/`                     | หน้าหลัก                           | 01, 02     |
| `/profile`              | บัญชีผู้ใช้                        | 03, 03b    |
| `/schedule/class`       | ตารางเรียนส่วนบุคคล                | 05         |
| `/schedule/exam`        | ตารางสอบส่วนบุคคล                  | 04         |
| `/registration/guide`   | คำแนะนำการลงทะเบียน                | 09         |
| `/registration/pre`     | ลงทะเบียนเรียนล่วงหน้า             | 06         |
| `/registration/regular` | ลงทะเบียนเรียนปกติ                 | 07         |
| `/courses`              | หมวดวิชาเรียน (+ popup รายละเอียด) | 08, 10     |

## โครงสร้างโฟลเดอร์

```
src/
├─ app/                      # routing เท่านั้น: ดึงข้อมูล + ประกอบ component (ไม่ใส่ logic หนัก)
│  ├─ layout.tsx             # root: ฟอนต์, Bootstrap CSS, global styles
│  └─ (portal)/              # route group ที่ใช้ AppShell (sidebar) ร่วมกัน
├─ components/
│  ├─ layout/                # AppShell, Sidebar, PageHeader, UserCard, ShellContext
│  └─ common/                # ใช้ข้ามฟีเจอร์: Modal, PortalTile
├─ features/                 # แยกตามโดเมน (แต่ละอันมีของตัวเองครบ)
│  ├─ schedule/              # components/ services/ constants.ts types.ts
│  ├─ courses/               # + lib/filterCourses.ts (pure function)
│  ├─ registration/
│  └─ profile/
├─ config/navigation.ts      # เมนู sidebar + การ์ดหน้าหลัก (แก้ที่เดียว)
├─ lib/                      # api client, utilities (time)
├─ mocks/                    # ข้อมูลจำลอง — ลบได้เมื่อมี API จริง
├─ styles/                   # _variables.scss (design tokens) + partials แยกส่วน
└─ types/                    # types ที่ใช้ร่วมกัน
docs/
├─ ARCHITECTURE.md           # หลักการและขั้นตอนเพิ่มหน้า/ฟีเจอร์
└─ design/                   # ภาพ Figma อ้างอิง (ตั้งชื่อตามหน้า)
```

อ่านต่อที่ [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

## สิ่งที่ยังเป็น TODO

- รูปประกอบการ์ดหน้าหลัก: วางใน `public/images/` แล้วใส่ที่ field `image` ของ `HOME_TILES`
- ตารางสอบ: ใช้ข้อมูลชุดเดียวกับตารางเรียนชั่วคราว (ดู `scheduleService.ts`)
- ปุ่ม export jpg/pdf และปุ่มยืนยันการลงทะเบียนยังไม่ต่อ backend
- หน้า login ไม่อยู่ในดีไซน์ที่ได้รับ

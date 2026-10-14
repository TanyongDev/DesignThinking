export interface NavItem {
  label: string;
  href: string;
  icon: string; // bootstrap-icons class name
  children?: NavItem[];
}

/** แก้เมนูที่นี่ที่เดียว — Sidebar อ่านจากไฟล์นี้ */
export const NAV_ITEMS: NavItem[] = [
  { label: "หน้าหลัก", href: "/", icon: "bi-house-fill" },
  { label: "บัญชีผู้ใช้", href: "/profile", icon: "bi-people-fill" },
  {
    label: "ตารางเรียน / สอบ",
    href: "/schedule",
    icon: "bi-calendar-check-fill",
    children: [
      {
        label: "ตารางเรียนส่วนบุคคล",
        href: "/schedule/class",
        icon: "bi-journal-text",
      },
      {
        label: "ตารางสอบส่วนบุคคล",
        href: "/schedule/exam",
        icon: "bi-calendar2-week-fill",
      },
    ],
  },
  {
    label: "การลงทะเบียน",
    href: "/registration",
    icon: "bi-floppy-fill",
    children: [
      {
        label: "คำแนะนำการลงทะเบียน",
        href: "/registration/guide",
        icon: "bi-journal-bookmark-fill",
      },
      {
        label: "ลงทะเบียนเรียนล่วงหน้า",
        href: "/registration/pre",
        icon: "bi-shield-check",
      },
      {
        label: "ลงทะเบียนเรียนปกติ",
        href: "/registration/regular",
        icon: "bi-journal-check",
      },
    ],
  },
  { label: "หมวดวิชาเรียน", href: "/courses", icon: "bi-book-half" },
];

export interface PortalTileConfig {
  title: string;
  subtitle?: string;
  href: string;
  image?: string;
}

export const HOME_TILES: PortalTileConfig[] = [
  { title: "หน้าหลัก", href: "/", image: "/images/image 14.png" },
  {
    title: "ระบบสารสนเทศ ป.ตรี",
    subtitle: "ข้อมูลผลการเรียน",
    href: "#",
    image: "/images/image 20.png",
  },
  {
    title: "Digital Transcript",
    subtitle: "ขอเอกสารในรูปแบบออนไลน์",
    href: "#",
    image: "/images/image 19.png",
  },
  {
    title: "ระบบลงทะเบียนเรียน",
    subtitle: "ระบบลงทะเบียน/เพิ่ม/เปลี่ยน/ถอนรายวิชา",
    href: "/registration/regular",
    image: "/images/image 17.png",
  },
  {
    title: "สจล.1",
    subtitle: "ข้อมูลประวัติของนักศึกษา",
    href: "/profile",
    image: "/images/image 15.png",
  },
  {
    title: "ปฏิทินการศึกษา",
    subtitle: "ปฏิทินกิจกรรมตลอดปีการศึกษา",
    href: "#",
    image: "/images/image 16.png",
  },
  {
    title: "ตารางเรียนตารางสอบ",
    subtitle:
      "ตารางเรียนและตารางสอบของนักศึกษา และข้อมูลแต่ละรายวิชาในแต่ละปีการศึกษา",
    href: "/schedule/class",
    image: "/images/Screenshot 2026-09-28 224513 2.png",
  },
  { title: "ระบบสมัครเข้าศึกษา", href: "#", image: "/images/image 18.png", },
];

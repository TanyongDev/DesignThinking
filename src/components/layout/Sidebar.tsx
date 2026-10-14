// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { NAV_ITEMS, type NavItem } from "@/config/navigation";
// import type { StudentSummary } from "@/types/student";
// import { useShell } from "./ShellContext";
// import { UserCard } from "./UserCard";

// function isActive(pathname: string, href: string): boolean {
//   return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
// }

// function NavLink({ item, pathname, sub = false }: { item: NavItem; pathname: string; sub?: boolean }) {
//   const active = isActive(pathname, item.href);
//   // เมนูที่มีลูก: ตัวแม่เป็นแค่หัวข้อ ไม่ใช่ลิงก์ไปหน้าจริง
//   const hasChildren = !!item.children?.length;
//   const className = active && (!hasChildren || sub) ? "is-active" : undefined;

//   return (
//     <li>
//       {hasChildren ? (
//         <span className={`d-flex align-items-center gap-2 p-2 ${active ? "fw-semibold" : ""}`}>
//           <i className={`bi ${item.icon}`} aria-hidden="true" />
//           {item.label}
//         </span>
//       ) : (
//         <Link href={item.href} className={className} aria-current={active ? "page" : undefined}>
//           <i className={`bi ${item.icon}`} aria-hidden="true" />
//           {item.label}
//         </Link>
//       )}
//       {hasChildren && active && (
//         <ul className="nav-menu__sub">
//           {item.children!.map((c) => (
//             <NavLink key={c.href} item={c} pathname={pathname} sub />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }

// export function Sidebar({ student }: { student: StudentSummary }) {
//   const pathname = usePathname();
//   const { sidebarOpen } = useShell();

//   return (
//     <aside className={`sidebar ${sidebarOpen ? "" : "is-closed"}`} aria-label="เมนูหลัก">
//       <UserCard student={student} />
//       <hr className="border-white opacity-100 m-0" />
//       <nav>
//         <ul className="nav-menu">
//           {NAV_ITEMS.map((item) => (
//             <NavLink key={item.href} item={item} pathname={pathname} />
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// }

"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, type NavItem } from "@/config/navigation";
import type { StudentSummary } from "@/types/student";
import { useShell } from "./ShellContext";
import { UserCard } from "./UserCard";

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** เมนูธรรมดา (ลิงก์ไปหน้าจริง) — ใช้ทั้งระดับบนและระดับย่อย */
function NavLeaf({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item.href);
  return (
    <li>
      <Link
        href={item.href}
        className={active ? "is-active" : undefined}
        aria-current={active ? "page" : undefined}
      >
        <i className={`bi ${item.icon}`} aria-hidden="true" />
        {item.label}
      </Link>
    </li>
  );
}

/** เมนูที่มีเมนูย่อย — กดเพื่อเปิด/ปิดได้ และเปิดอัตโนมัติเมื่ออยู่ในหมวดนี้ */
function NavGroup({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item.href);
  const [open, setOpen] = useState(active);
  const panelId = useId();

  useEffect(() => {
    if (active) setOpen(true);
  }, [active]);

  return (
    <li>
      <button
        type="button"
        className={`nav-menu__parent ${active ? "is-current" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <i className={`bi ${item.icon}`} aria-hidden="true" />
        <span>{item.label}</span>
        <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"} ms-auto`} aria-hidden="true" />
      </button>
      {open && (
        <ul className="nav-menu__sub" id={panelId}>
          {item.children!.map((c) => (
            <NavLeaf key={c.href} item={c} pathname={pathname} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function Sidebar({ student }: { student: StudentSummary }) {
  const pathname = usePathname();
  const { sidebarOpen } = useShell();

  return (
    <aside className={`sidebar ${sidebarOpen ? "" : "is-closed"}`} aria-label="เมนูหลัก">
      <UserCard student={student} />
      <hr className="border-white opacity-100 m-0" />
      <nav>
        <ul className="nav-menu">
          {NAV_ITEMS.map((item) =>
            item.children?.length ? (
              <NavGroup key={item.href} item={item} pathname={pathname} />
            ) : (
              <NavLeaf key={item.href} item={item} pathname={pathname} />
            ),
          )}
        </ul>
      </nav>
    </aside>
  );
}

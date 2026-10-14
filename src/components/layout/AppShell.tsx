"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { StudentSummary } from "@/types/student";
import { ShellContext } from "./ShellContext";
import { Sidebar } from "./Sidebar";

const DESKTOP_MIN = 992;

export function AppShell({ student, children }: { student: StudentSummary; children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  // มือถือ/แท็บเล็ต: เริ่มแบบปิด และปิดเมื่อเปลี่ยนหน้า
  useEffect(() => {
    if (window.innerWidth < DESKTOP_MIN) setSidebarOpen(false);
  }, [pathname]);

  const toggleSidebar = useCallback(() => setSidebarOpen((v) => !v), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const value = useMemo(
    () => ({ sidebarOpen, toggleSidebar, closeSidebar }),
    [sidebarOpen, toggleSidebar, closeSidebar],
  );

  return (
    <ShellContext.Provider value={value}>
      <div className="shell">
        <Sidebar student={student} />
        {sidebarOpen && <div className="backdrop" onClick={closeSidebar} aria-hidden="true" />}
        <main className="content">{children}</main>
      </div>
    </ShellContext.Provider>
  );
}

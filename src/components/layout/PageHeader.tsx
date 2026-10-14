"use client";

import { useShell } from "./ShellContext";

export function PageHeader({ title }: { title: string }) {
  const { toggleSidebar, sidebarOpen } = useShell();
  return (
    <header className="page-header">
      <button
        type="button"
        className="menu-toggle"
        onClick={toggleSidebar}
        aria-label="สลับเมนู"
        aria-expanded={sidebarOpen}
      >
        <i className="bi bi-list" aria-hidden="true" />
      </button>
      <h1>{title}</h1>
    </header>
  );
}

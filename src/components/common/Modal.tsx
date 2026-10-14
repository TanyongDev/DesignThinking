"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title: ReactNode;
  onClose: () => void;
  children: ReactNode;
  /** คลาสเพิ่มเติมของ .modal-dialog เช่น modal-lg */
  size?: "sm" | "lg" | "xl";
}

/**
 * Modal แบบ accessible ใช้ markup/สไตล์ของ Bootstrap (ไม่ต้องโหลด JS ของ Bootstrap)
 * - ปิดด้วย Esc / คลิกพื้นหลัง / ปุ่มปิด
 * - ล็อกการ scroll ของ body และคืน focus ให้ element เดิมเมื่อปิด
 */
export function Modal({ open, title, onClose, children, size = "lg" }: ModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.classList.add("modal-open");
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className={`modal-dialog modal-${size} modal-dialog-centered modal-dialog-scrollable`}>
          <div className="modal-content app-modal">
            <div className="modal-header app-modal__header">
              <h2 className="modal-title fs-5" id={titleId}>
                {title}
              </h2>
              <button ref={closeRef} type="button" className="btn-close" aria-label="ปิด" onClick={onClose} />
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

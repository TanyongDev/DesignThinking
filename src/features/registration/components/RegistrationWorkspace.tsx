"use client";

import { useMemo, useState } from "react";
import { Timetable } from "@/features/schedule/components/Timetable";
import type { ClassSession } from "@/features/schedule/types";
import { WEEKDAYS } from "@/features/schedule/constants";

export type RegistrationMode = "pre" | "regular";

type ChangeKind = "add" | "drop";
interface PendingChange {
  id: string;
  label: string;
  kind: ChangeKind;
}

interface Props {
  /** pre = ลงทะเบียนล่วงหน้า, regular = ลงทะเบียนเรียนปกติ (UI เหมือนกัน ต่างกันที่ endpoint ตอนต่อ API) */
  mode: RegistrationMode;
  enrolled: ClassSession[];
  catalog: { id: string; label: string }[];
}

export function RegistrationWorkspace({ mode, enrolled, catalog }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [pending, setPending] = useState<PendingChange[]>([]);
  const [keyword, setKeyword] = useState("");

  const results = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return catalog.filter((c) => !kw || c.label.toLowerCase().includes(kw));
  }, [catalog, keyword]);

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const queue = (change: PendingChange) =>
    setPending((p) => (p.some((x) => x.id === change.id) ? p : [...p, change]));

  const cancel = (id: string) => setPending((p) => p.filter((x) => x.id !== id));

  const dayTh = (k: ClassSession["day"]) => WEEKDAYS.find((d) => d.key === k)?.th ?? k;

  return (
    <div data-registration-mode={mode}>
      <section className="timetable-card">
        <Timetable sessions={enrolled} />
      </section>

      <div className="data-table-wrap mt-4">
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: 40 }}>
                <span className="visually-hidden">เลือก</span>
              </th>
              <th>รหัสวิชา</th>
              <th>ชื่อวิชา</th>
              <th className="text-end">กลุ่ม</th>
              <th>วัน - เวลาเรียน</th>
              <th>ห้องเรียน</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((s) => (
              <tr key={s.id}>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selected.has(s.id)}
                    onChange={() => toggle(s.id)}
                    aria-label={`เลือก ${s.courseName}`}
                  />
                </td>
                <td>{s.courseCode}</td>
                <td className="col-name">{s.courseName}</td>
                <td className="col-num">{s.section}</td>
                <td className="col-day">
                  {dayTh(s.day)} {s.start} - {s.end}
                </td>
                <td className="col-room">{s.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3">
        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          disabled={selected.size === 0}
          onClick={() => {
            enrolled
              .filter((s) => selected.has(s.id))
              .forEach((s) => queue({ id: s.id, label: `${s.courseCode} ${s.courseName}`, kind: "drop" }));
            setSelected(new Set());
          }}
          aria-label="ถอนรายวิชาที่เลือก"
        >
          <i className="bi bi-trash3-fill" aria-hidden="true" /> ถอนที่เลือก
        </button>
      </div>

      {pending.length > 0 && (
        <div className="pre-reg-cart" aria-live="polite">
          {pending.map((p) => (
            <div className="pre-reg-cart__item" key={p.id}>
              <span>{p.label}</span>
              <span className="d-flex gap-2">
                <button type="button" className={p.kind === "add" ? "btn-add" : "btn-drop"}>
                  {p.kind === "add" ? "เพิ่มรายวิชา" : "ถอนรายวิชา"}
                </button>
                <button type="button" className="btn-cancel" onClick={() => cancel(p.id)}>
                  ยกเลิก
                </button>
              </span>
            </div>
          ))}
        </div>
      )}

      <section className="search-panel">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-sliders" aria-hidden="true" />
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="ค้นหารายวิชา"
            aria-label="ค้นหารายวิชา"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="search-panel__results">
          {results.map((c) => (
            <button
              key={c.id}
              type="button"
              className="search-panel__result"
              onClick={() => queue({ id: c.id, label: c.label, kind: "add" })}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

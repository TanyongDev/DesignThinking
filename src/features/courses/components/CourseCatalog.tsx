"use client";

import { useMemo, useState } from "react";
import { INITIAL_FILTERS, filterCourses } from "../lib/filterCourses";
import { CATEGORY_META } from "../constants";
import type { CourseCategory, CourseFilterState, CourseOffering } from "../types";
import { CourseCard } from "./CourseCard";
import { CourseDetailModal } from "./CourseDetailModal";

const CATEGORIES: (CourseCategory | "all")[] = ["all", "gened", "free", "faculty"];

export function CourseCatalog({ courses }: { courses: CourseOffering[] }) {
  const [filters, setFilters] = useState<CourseFilterState>(INITIAL_FILTERS);
  const [selected, setSelected] = useState<CourseOffering | null>(null);
  const visible = useMemo(() => filterCourses(courses, filters), [courses, filters]);
  const set = <K extends keyof CourseFilterState>(key: K, value: CourseFilterState[K]) =>
    setFilters((f) => ({ ...f, [key]: value }));

  const sections = [...new Set(courses.map((c) => String(c.section)))];

  return (
    <>
      <div className="filter-bar" role="group" aria-label="กรองประเภทวิชา">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`pill ${filters.category === cat ? "is-active" : ""}`}
            onClick={() => set("category", cat)}
          >
            {cat === "all" ? "หมวดรวม" : CATEGORY_META[cat].label}
          </button>
        ))}
        <div className="search input-group input-group-sm">
          <input
            type="search"
            className="form-control"
            placeholder="ค้นหา"
            aria-label="ค้นหารายวิชา"
            value={filters.keyword}
            onChange={(e) => set("keyword", e.target.value)}
          />
          <span className="input-group-text bg-white">
            <i className="bi bi-search" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-3">
        <select className="form-select select-peach" aria-label="ปีการศึกษา" defaultValue="2569">
          <option value="2569">ปีการศึกษา 2569</option>
        </select>
        <select
          className="form-select select-peach"
          aria-label="กลุ่มเรียน"
          value={filters.section}
          onChange={(e) => set("section", e.target.value)}
        >
          <option value="all">กลุ่มเรียนรวม</option>
          {sections.map((s) => (
            <option key={s} value={s}>
              กลุ่ม {s}
            </option>
          ))}
        </select>
        <select
          className="form-select select-peach"
          aria-label="คณะ"
          value={filters.faculty}
          onChange={(e) => set("faculty", e.target.value)}
        >
          <option value="all">คณะรวม</option>
        </select>
        <select
          className="form-select select-peach"
          aria-label="สาขา"
          value={filters.major}
          onChange={(e) => set("major", e.target.value)}
        >
          <option value="all">สาขา -</option>
        </select>
      </div>

      {visible.length === 0 ? (
        <p className="text-muted mt-4">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        <div className="course-grid">
          {visible.map((c) => (
            <CourseCard key={c.id} course={c} onOpenDetail={setSelected} />
          ))}
        </div>
      )}

      <CourseDetailModal course={selected} onClose={() => setSelected(null)} />
    </>
  );
}

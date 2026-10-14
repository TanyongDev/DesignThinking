"use client";

import { Modal } from "@/components/common/Modal";
import { CATEGORY_META } from "../constants";
import type { CourseOffering } from "../types";

interface Props {
  course: CourseOffering | null;
  onClose: () => void;
}

export function CourseDetailModal({ course, onClose }: Props) {
  const meta = course ? CATEGORY_META[course.category] : null;

  return (
    <Modal
      open={course !== null}
      onClose={onClose}
      title={
        course && meta ? (
          <span className="d-inline-flex align-items-center gap-2">
            <i className={`bi ${meta.icon}`} aria-hidden="true" />
            {course.name}
          </span>
        ) : null
      }
    >
      {course && (
        <ul className="course-desc">
          {course.description.map((d) => (
            <li key={d.heading}>
              <strong>{d.heading}</strong>
              <span>{d.body}</span>
            </li>
          ))}
        </ul>
      )}
    </Modal>
  );
}

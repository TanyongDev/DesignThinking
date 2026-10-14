import { PageHeader } from "@/components/layout/PageHeader";
import { CourseCatalog } from "@/features/courses/components/CourseCatalog";
import { getCourseOfferings } from "@/features/courses/services/courseService";

export const metadata = { title: "หมวดวิชาเรียน" };

export default async function CoursesPage() {
  const courses = await getCourseOfferings();
  return (
    <>
      <PageHeader title="หมวดวิชาเรียน" />
      <CourseCatalog courses={courses} />
    </>
  );
}

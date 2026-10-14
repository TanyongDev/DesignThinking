import { PageHeader } from "@/components/layout/PageHeader";
import { GuideTable } from "@/features/courses/components/GuideTable";
import { getGuideGroups } from "@/features/courses/services/courseService";

export const metadata = { title: "คำแนะนำการลงทะเบียน" };

export default async function RegistrationGuidePage() {
  const groups = await getGuideGroups();
  return (
    <>
      <PageHeader title="คำแนะนำการลงทะเบียน" />
      <div className="filter-bar">
        <span className="pill is-active">คำแนะนำรายวิชาเรียนแยกคณะ</span>
        <a className="pill text-decoration-none text-dark" href="#">
          คู่มือการลงทะเบียนเรียน
        </a>
        <a className="pill text-decoration-none text-dark" href="#">
          คู่มือการดูรหัสวิชา /รายวิชา
        </a>
      </div>
      {groups.map((g) => (
        <GuideTable key={g.id} title={g.title} rows={g.rows} />
      ))}
    </>
  );
}

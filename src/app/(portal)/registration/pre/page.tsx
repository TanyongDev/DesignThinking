import { PageHeader } from "@/components/layout/PageHeader";
import { getCourseOfferings } from "@/features/courses/services/courseService";
import { RegistrationWorkspace } from "@/features/registration/components/RegistrationWorkspace";
import { getClassSessions, getTerms } from "@/features/schedule/services/scheduleService";

export const metadata = { title: "ลงทะเบียนเรียนล่วงหน้า" };

export default async function PreRegistrationPage() {
  const terms = await getTerms();
  const [enrolled, offerings] = await Promise.all([getClassSessions(terms[0].id), getCourseOfferings()]);
  const catalog = offerings.map((c) => ({ id: c.id, label: `${c.code} ${c.name}` }));

  return (
    <>
      <PageHeader title="ลงทะเบียนเรียนล่วงหน้า" />
      <RegistrationWorkspace mode="pre" enrolled={enrolled} catalog={catalog} />
    </>
  );
}

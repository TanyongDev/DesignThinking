import { PageHeader } from "@/components/layout/PageHeader";
import { getCourseOfferings } from "@/features/courses/services/courseService";
import { RegistrationWorkspace } from "@/features/registration/components/RegistrationWorkspace";
import { getClassSessions, getTerms } from "@/features/schedule/services/scheduleService";

export const metadata = { title: "ลงทะเบียนเรียนปกติ" };

export default async function RegularRegistrationPage() {
  const terms = await getTerms();
  const [enrolled, offerings] = await Promise.all([getClassSessions(terms[0].id), getCourseOfferings()]);
  const catalog = offerings.map((c) => ({ id: c.id, label: `${c.code} ${c.name}` }));

  return (
    <>
      <PageHeader title="ลงทะเบียนเรียนปกติ" />
      <RegistrationWorkspace mode="regular" enrolled={enrolled} catalog={catalog} />
    </>
  );
}

import type { StudentProfile } from "@/types/student";

interface FieldProps {
  id: string;
  label: string;
  defaultValue?: string;
  readOnly?: boolean;
  /** ซ่อน label ด้วยสายตาแต่ยังให้ screen reader อ่านได้ (ช่องที่ดีไซน์ไม่มีป้ายกำกับ) */
  hideLabel?: boolean;
}

function Field({ id, label, defaultValue = "", readOnly = true, hideLabel = false }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={hideLabel ? "visually-hidden" : "form-label mb-1"}>
        {label}
      </label>
      <input id={id} className="form-control field-input" defaultValue={defaultValue} readOnly={readOnly} />
    </div>
  );
}

function TextAreaField({ id, label, rows }: { id: string; label: string; rows: number }) {
  return (
    <div>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <textarea id={id} rows={rows} className="form-control field-input" />
    </div>
  );
}

export function ProfileCard({ profile }: { profile: StudentProfile }) {
  return (
    <section className="profile-card">
      <div className="profile-card__head">
        <i className="bi bi-mortarboard-fill fs-5" aria-hidden="true" />
        <span>นักศึกษา: ปริญญาตรี กำลังศึกษาอยู่ชั้น ปีที่ 1</span>
        <span className="ms-auto d-flex gap-2">
          <button type="button" className="btn-profile">
            Profile <i className="bi bi-people-fill ms-1" aria-hidden="true" />
          </button>
          <button type="button" className="btn-setting">
            Setting <i className="bi bi-gear-fill ms-1" aria-hidden="true" />
          </button>
        </span>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-4 col-xl-3">
          <div className="profile-card__photo" aria-hidden="true">
            <i className="bi bi-person-badge-fill" />
          </div>
          <div className="d-grid gap-3">
            <Field id="studentCode" label="รหัสนักศึกษา" defaultValue={profile.studentCode} />
            <Field id="faculty" label="คณะ" defaultValue={profile.faculty} />
            <Field id="major" label="สาขา" defaultValue={profile.major} />
          </div>
        </div>

        <div className="col-12 col-md-8 col-xl-9">
          <div className="profile-card__main">
            <div className="row g-3">
              <div className="col-12 col-lg-7">
                <Field id="nameTh" label="ชื่อ - นามสกุล" defaultValue={profile.firstNameTh} />
              </div>
              <div className="col-12 col-lg-5">
                <Field id="nameEn" label="firstname - lastname" defaultValue={profile.lastNameEn} />
              </div>
              <div className="col-6 col-lg-3">
                <Field id="nationality" label="สัญชาติ" defaultValue={profile.nationality} />
              </div>
              <div className="col-6 col-lg-3">
                <Field id="ethnicity" label="เชื้อชาติ" defaultValue={profile.ethnicity} />
              </div>
              <div className="col-6 col-lg-3">
                <Field id="blood" label="กรุ๊ปเลือด" defaultValue={profile.bloodGroup} />
              </div>
              <div className="col-6 col-lg-3">
                <Field id="religion" label="ศาสนาพุทธ" defaultValue={profile.religion} />
              </div>
            </div>

            <h2 className="profile-card__subtitle">ใส่รายละเอียดได้</h2>
            <div className="row g-3">
              <div className="col-12 col-xl-6">
                <div className="row g-3">
                  <div className="col-8">
                    <TextAreaField id="detail1" label="รายละเอียด 1" rows={2} />
                  </div>
                  <div className="col-4">
                    <TextAreaField id="detail2" label="รายละเอียด 2" rows={2} />
                  </div>
                  <div className="col-12">
                    <TextAreaField id="detail3" label="รายละเอียด 3" rows={2} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <TextAreaField id="detail4" label="รายละเอียดเพิ่มเติม" rows={5} />
              </div>
              <div className="col-12 col-xl-6">
                <TextAreaField id="detail5" label="รายละเอียด 5" rows={2} />
              </div>
              <div className="col-12 col-xl-6">
                <TextAreaField id="detail6" label="รายละเอียด 6" rows={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

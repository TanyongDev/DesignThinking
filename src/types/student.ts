export interface StudentSummary {
  id: string;
  displayName: string;
  levelLabel: string;
  studentCode: string;
}

export interface StudentProfile extends StudentSummary {
  firstNameTh: string;
  lastNameEn: string;
  nationality: string;
  ethnicity: string;
  bloodGroup: string;
  religion: string;
  faculty: string;
  major: string;
}

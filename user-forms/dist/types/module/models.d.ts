export declare class UserForm {
  financialInformation: FinancialInformation;
  references: References;
}
export declare class UserFormEmployee extends UserForm {
}
export declare class UserFormIndependend extends UserForm {
}
export interface PersonalInformation {
  firstName: string;
  middleName: string;
  surName: string;
  secondSurName: string;
  documentType: string;
  documentNumber: string;
  expeditionDate: string;
  expeditionDepartment: string;
  expeditionCity: string;
  mobilePhone: string;
  phone: string;
  email: string;
  birthDate: string;
  nationality: string;
  cityOfBirth: string;
  departmentOfBirth: string;
  gender: string;
}
export interface PersonalInformation2 {
  academicLevel: string;
  childrenNumber: number;
  dependents: number;
  civilState: string;
  cityOfResidence: string;
  departmentOfResidence: string;
  address: string;
  stratus: number;
  dwellingType: string;
  rent: number;
  residenceTime: string;
  employment: string;
}
export interface WorkingInformation {
  companyName: string;
  position: string;
  companyType: string;
  companySeniority: string;
  contractType: string;
  companyActivity: string;
  creditDestination: string;
  companyPhone: string;
  companyPhoneExtension: string;
  otherPhone: string;
}
export interface FinancialInformation {
  salaryIncome: number;
  variableSalaryIncome: number;
  otherIncomes: number;
  otherIncomesDescription: string;
  totalIncomes: number;
  personalExpenses: number;
  rentExpenses: number;
  debtExpenses: number;
  otherExpenses: number;
  otherExpensesDescription: string;
  totalExpenses: number;
  totalAssets: number;
  totalLiabilities: number;
}
export interface References {
  familyContactName: string;
  familyContactPhone: string;
  familyContactRelationship: string;
  friendContactName: string;
  friendContactPhone: string;
  friendContactRelationship: string;
}

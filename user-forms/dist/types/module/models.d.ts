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
  birthDate: string;
  expeditionDate: string;
  nationality: string;
  departmentOfBirth: string;
  cityOfBirth: string;
  expeditionDepartment: string;
  expeditionCity: string;
  mobilePhone: string;
  phone: string;
  email: string;
  gender: string;
}
export interface PersonalInformation2 {
  academicLevel: string;
  childrenNumber: string;
  dependents: string;
  civilState: string;
  departmentOfResidence: string;
  cityOfResidence: string;
  address: string;
  place: string;
  stratus: number;
  dwellingType: string;
  rent: number;
  residenceTime: string;
  employment: string;
}
export interface CompanyInformation {
  companyName: string;
  companyLocation: string;
  address: string;
  place: string;
  departmentOfResidence: string;
  cityOfResidence: string;
  stratus: number;
  dwellingType: string;
  rent: number;
  companyType: string;
  nit: string;
  foundatingDate: string;
  companyActivity: string;
  point: string;
  onlineShop: string;
  salePercentage: string;
  employees: string;
  destiny: string;
  otherDestiny: string;
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
  otherPhone: string;
  companyPhoneExtension: string;
}
export interface FinancialInformation {
  salaryIncome: number;
  otherIncomes: number;
  variableSalaryIncome: number;
  otherIncomesDescription: string;
  personalExpenses: number;
  rentExpenses: number;
  debtExpenses: number;
  otherExpenses: number;
  otherExpensesDescription: string;
  totalIncomes: number;
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
export interface BankInformation {
  bankName: string;
  accountType: string;
  accountNumber: string;
}

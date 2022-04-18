const expresiones = {
  alfanumerico: /^[a-zA-Z0-9\(\)\_\-\#\s\.\,\a-zA-ZÀ-ÿ]{1,150}$/,
  alfanumericoOpcional: /^[a-zA-Z0-9\_\-\#\s\.\a-zA-ZÀ-ÿ]{0,50}$/,
  texto: /^[a-zA-ZÀ-ÿ\.\s]{1,100}$/,
  textoOpcional: /^[a-zA-ZÀ-ÿ\s]{0,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  numerico: /^\d{1,14}$/,
  numericoOpcional: /^[\d\.]{0,14}$/,
  numericoSimbolo: /^[\d\>\<\-]{1,14}$/,
  celular: /^\d{6,10}$/,
  celularOpcional: /^(\d{7,10})*$/,
  arriendo: /^[\d\.]{4,}$/,
};
const personalInformation = {
  firstName: 'texto',
  middleName: 'textoOpcional',
  surName: 'texto',
  secondSurName: 'texto',
  documentType: 'alfanumerico',
  documentNumber: 'numerico',
  expeditionDate: 'alfanumerico',
  expeditionDepartment: 'texto',
  expeditionCity: 'texto',
  mobilePhone: 'celular',
  phone: 'celularOpcional',
  email: 'correo',
  birthDate: 'alfanumerico',
  nationality: 'texto',
  cityOfBirth: 'texto',
  departmentOfBirth: 'texto',
  gender: 'texto',
};
const personalInformation2 = {
  academicLevel: 'alfanumerico',
  childrenNumber: 'numericoSimbolo',
  dependents: 'numericoSimbolo',
  civilState: 'alfanumerico',
  cityOfResidence: 'texto',
  departmentOfResidence: 'texto',
  address: 'alfanumerico',
  place: 'alfanumericoOpcional',
  stratus: 'numerico',
  dwellingType: 'texto',
  residenceTime: 'numericoSimbolo',
  employment: 'texto',
};
const financialInformation = {
  salaryIncome: 'numerico',
  variableSalaryIncome: 'numericoOpcional',
  otherIncomes: 'numericoOpcional',
  otherIncomesDescription: 'texto',
  totalIncomes: 'numerico',
  personalExpenses: 'numerico',
  rentExpenses: 'numericoOpcional',
  debtExpenses: 'numerico',
  otherExpenses: 'numericoOpcional',
  otherExpensesDescription: 'texto',
  totalExpenses: 'numerico',
  totalAssets: 'numerico',
  totalLiabilities: 'numerico',
};
const references = {
  familyContactName: 'texto',
  familyContactPhone: 'celular',
  familyContactRelationship: 'texto',
  friendContactName: 'texto',
  friendContactPhone: 'celular',
  friendContactRelationship: 'texto',
};
const workingInformation = {
  companyName: 'alfanumerico',
  position: 'texto',
  companyType: 'texto',
  companySeniority: 'numericoSimbolo',
  contractType: 'alfanumerico',
  companyActivity: 'alfanumerico',
  creditDestination: 'alfanumerico',
  companyPhone: 'celular',
  companyPhoneExtension: 'numericoOpcional',
  otherDestiny: 'alfanumerico',
};
const companyInformation = {
  companyName: 'alfanumerico',
  companyLocation: 'texto',
  address: 'alfanumerico',
  place: 'alfanumericoOpcional',
  departmentOfResidence: 'texto',
  cityOfResidence: 'texto',
  stratus: 'numerico',
  dwellingType: 'texto',
  rent: 'arriendo',
  companyType: 'alfanumerico',
  nit: 'numerico',
  foundatingDate: 'alfanumerico',
  companyActivity: 'alfanumerico',
  point: 'texto',
  onlineShop: 'texto',
  salePercentage: 'numericoSimbolo',
  employees: 'alfanumerico',
  destiny: 'alfanumerico',
  otherDestiny: 'alfanumerico',
};
const informationProfile = {
  firstName: 'texto',
  middleName: 'textoOpcional',
  surName: 'texto',
  secondSurName: 'texto',
  mobilePhone: 'celular',
  email: 'correo',
  academicLevel: 'alfanumerico',
  childrenNumber: 'numericoSimbolo',
  dependents: 'numericoSimbolo',
  civilState: 'alfanumerico',
  cityOfResidence: 'texto',
  departmentOfResidence: 'texto',
  address: 'alfanumerico',
  place: 'alfanumericoOpcional',
  stratus: 'numerico',
  dwellingType: 'texto',
};
const companyProfile = {
  companyName: 'alfanumerico',
  companyLocation: 'texto',
  address: 'alfanumerico',
  place: 'alfanumericoOpcional',
  departmentOfResidence: 'texto',
  cityOfResidence: 'texto',
  stratus: 'numerico',
  dwellingType: 'texto',
  companyActivity: 'alfanumerico',
  point: 'texto',
  onlineShop: 'texto',
  employees: 'alfanumerico',
};
const financialCompanyInformation = {
  salesIncome: 'numerico',
  rentIncome: 'numerico',
  activityIncome: 'numericoOpcional',
  otherIncomes: 'numericoOpcional',
  otherIncomesDescription: 'texto',
  incomeSupport: 'alfanumerico',
  otherExpenses: 'numericoOpcional',
  otherExpensesDescription: 'texto',
  personalExpenses: 'numerico',
  rentExpenses: 'numerico',
  debtExpenses: 'numerico',
  businessExpenses: 'numerico',
  totalIncomes: 'numerico',
  totalExpenses: 'numerico',
  totalAssets: 'numerico',
  totalLiabilities: 'numerico',
};
const bankInformation = {
  bankName: 'alfanumerico',
  accountType: 'texto',
  accountNumber: 'numerico',
};
function checkData(model) {
  const campo = [personalInformation, personalInformation2, financialInformation, references, workingInformation, companyInformation, financialCompanyInformation].find(e => JSON.stringify(Object.keys(model)) === JSON.stringify(Object.keys(e)));
  const prueba = Object.entries(model).filter(entry => {
    const value = entry[1] === null ? '' : entry[1];
    return expresiones[campo[`${entry[0]}`]].test(value) === false;
  });
  return prueba.map(value => value[0]);
}
function checkData2(model, fieldName) {
  const fields = {
    'personalInformation': personalInformation,
    'personalInformation2': personalInformation2,
    'financialInformation': financialInformation,
    'references': references,
    'workingInformation': workingInformation,
    'companyInformation': companyInformation,
    'informationProfile': informationProfile,
    'companyProfile': companyProfile,
    'bankInformation': bankInformation,
  };
  const campo = fields[fieldName];
  const prueba = Object.entries(campo).filter(entry => {
    return expresiones[campo[`${entry[0]}`]].test(model[`${entry[0]}`]) === false;
  });
  return prueba.map(value => value[0]);
  // return [];
}

export { checkData as a, checkData2 as c };

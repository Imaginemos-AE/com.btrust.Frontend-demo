const expresiones = {
  alfanumerico: /^[a-zA-Z0-9\_\-\#\s\.]{1,50}$/,
  alfanumericoOpcional: /^[a-zA-Z0-9\_\-\#\s\.]{0,50}$/,
  texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  textoOpcional: /^[a-zA-ZÀ-ÿ\s]{0,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  numerico: /^\d{1,14}$/,
  numericoOpcional: /^\d{0,14}$/,
  numericoSimbolo: /^[\d\>\<\-]{1,14}$/,
  celular: /^\d{6,10}$/,
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
  phone: 'celular',
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
  rent: 'numerico',
  residenceTime: 'numericoSimbolo',
  employment: 'texto',
};
const financialInformation = {
  salaryIncome: 'numerico',
  variableSalaryIncome: 'numerico',
  otherIncomes: 'numericoOpcional',
  otherIncomesDescription: 'textoOpcional',
  totalIncomes: 'numerico',
  personalExpenses: 'numerico',
  rentExpenses: 'numerico',
  debtExpenses: 'numerico',
  otherExpenses: 'numericoOpcional',
  otherExpensesDescription: 'textoOpcional',
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
  otherPhone: 'numericoOpcional',
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
  rent: 'numerico',
  companyType: 'alfanumerico',
  nit: 'numerico',
  foundatingDate: 'alfanumerico',
  companyActivity: 'alfanumerico',
  point: 'texto',
  onlineShop: 'texto',
  salePercentage: 'numericoSimbolo',
  employees: 'alfanumerico',
  destiny: 'alfanumerico',
  otherDestiny: 'alfanumericoOpcional',
};
function checkData(model) {
  const campo = [personalInformation, personalInformation2, financialInformation, references, workingInformation, companyInformation].find(e => JSON.stringify(Object.keys(model)) === JSON.stringify(Object.keys(e)));
  const prueba = Object.entries(model).filter(entry => {
    const value = typeof entry[1] === 'string' ? entry[1] : parseFloat(`${entry[1]}`);
    return expresiones[campo[`${entry[0]}`]].test(value) === false;
  });
  return prueba.map(value => value[0]);
  // return [];
}

export { checkData as c };

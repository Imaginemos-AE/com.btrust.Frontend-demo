import { r as registerInstance, h, H as Host } from './index-8397afa9.js';
import { l as loadCSS, a as loadScript } from './utils-84851d0f.js';

async function userAdminInformation(id) {
  const myHeaders = new Headers();
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append('Content-Type', 'application/json');
  try {
    const result = await fetch(`https://credito.muii.com.co/api/DataManager/${id}/`, {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      redirect: 'follow',
    });
    if (result.status === 200) {
      return result.json();
    }
    if (result.status === 404) {
      return null;
    }
  }
  catch (e) {
    console.log(e);
  }
}
function getInformacionPersonal(data) {
  return {
    firstName: data['primerNombre'],
    middleName: data['segundoNombre'],
    surName: data['primerApellido'],
    secondSurName: data['segundoApellido'],
    documentType: data['tipoDocumento'],
    documentNumber: data['documento'],
    expeditionDate: data['fechaExpedicion'],
    birthDate: data['fechaNacimiento'],
    nationality: data['nacionalidad'],
    departmentOfBirth: data['departamentoNacimiento'],
    cityOfBirth: data['ciudadNacimiento'],
    expeditionDepartment: data['departamentoExpedicion'],
    expeditionCity: data['municipioExpedicion'],
    telefono: data['telefono'],
    mobilePhone: data['celular'],
    email: data['correo'],
    gender: data['genero'],
  };
}
function getInfoSocioDemografica(data) {
  return {
    academicLevel: data['nivelAcademico'],
    childrenNumber: data['numHijos'],
    dependents: data['personasACargo'],
    civilState: data['estadoCivil'],
    departmentOfResidence: data['departamentoResidencia'],
    cityOfResidence: data['municipioRecidencia'],
    address: data['direccion'],
    place: data['torre_Apt'],
    stratus: data['estrato'],
    dwellingType: data['tipoVivienda'],
    rent: data['arriendo'],
    residenceTime: data['tiempo'],
    employment: data['ocupacion'],
  };
}
function getCompanyInformation(data) {
  var _a, _b;
  if (!data)
    return '';
  return {
    companyName: data['nombreCompania'],
    companyLocation: data['ubicacionCompania'],
    address: data['direccion'],
    place: data['barrio'],
    departmentOfResidence: data['departamentoResidencia'],
    cityOfResidence: data['ciudadResidencia'],
    stratus: (_a = data['estrato']) !== null && _a !== void 0 ? _a : 0,
    dwellingType: data['tipoVivienda'],
    rent: (_b = parseFloat(data['renta'])) !== null && _b !== void 0 ? _b : 0,
    companyType: data['tipoCompania'],
    nit: data['nit'],
    foundatingDate: data['fechaExposito'],
    companyActivity: data['actividadCompania'],
    point: data['punto'],
    onlineShop: data['tiendaOnline'],
    salePercentage: data['porcentajeVentas'],
    employees: data['empleado'],
    destiny: data['destino'],
    otherDestiny: data['otroDestino'],
  };
}
function getReferencias(data) {
  return {
    familyContactName: data['nombreContactoFamiliar'],
    familyContactPhone: data['celularContactoFamiliar'],
    familyContactRelationship: data['relacionContactoFamiliar'],
    friendContactName: data['nombreContactoAmigo'],
    friendContactPhone: data['celularContactoAmigo'],
    friendContactRelationship: data['relacionContactoAmigo'],
  };
}
function getInfoBancaria(data) {
  if (!data)
    return '';
  return {
    nombreBanco: data['bankName'],
    accountType: data['tipoCuenta'],
    accountNumber: data['numeroCuenta'],
  };
}
function getInfoEconomicaCompania(data) {
  if (!data)
    return '';
  return {
    salesIncome: data['ingresosVentas'],
    ingresosActividad: data['ingresosActividad'],
    otherIncomes: data['activityIncome'],
    otherIncomesDescription: data['descripcionIngresos'],
    incomeSupport: data['soporte'],
    businessExpenses: data['egresosGastosNegocio'],
    egresosArriendo: data['rentExpenses'],
    egresosDeudas: data['debtExpenses'],
    personalExpenses: data['egresosPersonal'],
    otherExpenses: data['otrosEgresos'],
    otherExpensesDescription: data['descripcionEgresos'],
    totalAssets: data['activos'],
    totalLiabilities: data['pasivos'],
    totalIncomes: data['totalIngresos'],
    totalExpenses: data['totalGastos'],
  };
}
function getInfoEconomica(data) {
  if (!data)
    return '';
  return {
    salaryIncome: data['ingresosSalario'],
    otherIncomes: data['ingresosOtros'],
    variableSalaryIncome: data['ingresosSalarioVariable'],
    otherIncomesDescription: data['descripcionIngresos'],
    personalExpenses: data['egresos'],
    rentExpenses: data['arriendo'],
    debtExpenses: data['egresosDeudas'],
    otherExpenses: data['otrosEgresos'],
    otherExpensesDescription: data['descripcionEgresos'],
    totalAssets: data['activos'],
    totalLiabilities: data['pasivos'],
    totalIncomes: data['totalIngresos'],
    totalExpenses: data['totalGastos'],
  };
}
async function getUserModelsInformation(id) {
  const userData = await userAdminInformation(id);
  if (userData) {
    const flow = userData === null || userData === void 0 ? void 0 : userData.tipoCliente;
    const informacionPersonal = getInformacionPersonal(userData);
    const infoReferencias = getReferencias(userData['infoReferencias']);
    const infoSocioDemografica = getInfoSocioDemografica(userData['infoSocioDemografica']);
    const infoEconomica = getInfoEconomica(userData['infoEconomica']);
    const infoEconomicaCompania = getInfoEconomicaCompania(userData['infoEconomicaCompania']);
    const infoBancaria = getInfoBancaria(userData['infoBancaria']);
    const infoCompania = getCompanyInformation(userData['infoCompania']);
    return {
      personalInformation: informacionPersonal,
      personalInformation2: infoSocioDemografica,
      companyInformation: infoCompania,
      references: infoReferencias,
      bankInformation: infoBancaria,
      financialInformation: infoEconomica,
      financialCompanyInformation: infoEconomicaCompania,
      flow,
    };
  }
  else {
    return userData;
  }
}

const emprenderUserAdministrativeCss = "";

const EmprenderUfWorkingInformation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.documentId = '';
  }
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    this.userInformation = await getUserModelsInformation(this.documentId);
  }
  getResponse() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (this.userInformation) {
      return (h(Host, null, h("emprender-uf-personal-information-3", { model: (_a = this.userInformation) === null || _a === void 0 ? void 0 : _a.personalInformation, model2: (_b = this.userInformation) === null || _b === void 0 ? void 0 : _b.personalInformation2, model3: (_c = this.userInformation) === null || _c === void 0 ? void 0 : _c.bankInformation, adminZone: true }), ((_d = this.userInformation) === null || _d === void 0 ? void 0 : _d.flow) === 'employee' || (h("emprender-uf-company-profile", { model: (_e = this.userInformation) === null || _e === void 0 ? void 0 : _e.companyInformation, adminZone: true })), ((_f = this.userInformation) === null || _f === void 0 ? void 0 : _f.flow) === 'independent' ? (h("emprender-uf-financial-company", { adminZone: true, model: (_g = this.userInformation) === null || _g === void 0 ? void 0 : _g.financialCompanyInformation })) : (h("emprender-uf-financial-information", { adminZone: true, model: (_h = this.userInformation) === null || _h === void 0 ? void 0 : _h.financialInformation })), h("emprender-uf-references", { model: (_j = this.userInformation) === null || _j === void 0 ? void 0 : _j.references, flow: (_k = this.userInformation) === null || _k === void 0 ? void 0 : _k.flow, viewRegistration: false, adminZone: true })));
    }
    else {
      return null;
    }
  }
  render() {
    return this.getResponse();
  }
};
EmprenderUfWorkingInformation.style = emprenderUserAdministrativeCss;

export { EmprenderUfWorkingInformation as emprender_user_administrative };

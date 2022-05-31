import { setUserInformation } from '../module/store';
function getInformacionPersonal(data, flowType) {
  return {
    primerNombre: data['firstName'],
    segundoNombre: data['middleName'],
    primerApellido: data['surName'],
    segundoApellido: data['secondSurName'],
    tipoDocumento: data['documentType'],
    documento: data['documentNumber'],
    fechaExpedicion: data['expeditionDate'],
    fechaNacimiento: data['birthDate'],
    nacionalidad: data['nationality'],
    departamentoNacimiento: data['departmentOfBirth'],
    ciudadNacimiento: data['cityOfBirth'],
    departamentoExpedicion: data['expeditionDepartment'],
    municipioExpedicion: data['expeditionCity'],
    telefono: data['mobilePhone'],
    celular: data['phone'],
    correo: data['email'],
    genero: data['gender'],
    tipoCliente: flowType
  };
}
function getInfoSocioDemografica(data) {
  var _a, _b;
  return {
    nivelAcademico: data['academicLevel'],
    numHijos: data['childrenNumber'],
    personasACargo: data['dependents'],
    estadoCivil: data['civilState'],
    departamentoResidencia: data['departmentOfResidence'],
    municipioRecidencia: data['cityOfResidence'],
    direccion: data['address'],
    torre_Apt: data['place'],
    estrato: (_a = data['stratus']) !== null && _a !== void 0 ? _a : 0,
    tipoVivienda: data['dwellingType'],
    arriendo: (_b = parseFloat(data['rent'])) !== null && _b !== void 0 ? _b : 0,
    tiempo: data['residenceTime'],
    ocupacion: data['employment'],
  };
}
function getInfoLaboral(data) {
  return {
    nombreEmpresa: data['companyName'],
    cargo: data['position'],
    esPublica: data['companyType'],
    antiguedad: data['companySeniority'],
    tipoontrato: data['contractType'],
    actividad: data['companyActivity'],
    destinoPrestamo: data['creditDestination'],
    telefono: data['companyPhone'],
    otroNumero: data['otherPhone'],
    extencion: data['companyPhoneExtension'],
  };
}
function getInfoEconomica(data) {
  return {
    ingresosSalario: parseFloat(data['salaryIncome']),
    ingresosOtros: data['otherIncomes'] === '' || data['otherIncomes'] === null ? 0 : parseFloat(data['otherIncomes']),
    ingresosSalarioVariable: data['variableSalaryIncome'] === '' || data['variableSalaryIncome'] === null ? 0 : parseFloat(data['variableSalaryIncome']),
    descripcionIngresos: data['otherIncomesDescription'],
    egresos: parseFloat(data['personalExpenses']),
    arriendo: parseFloat(data['rentExpenses']),
    egresosDeudas: parseFloat(data['debtExpenses']),
    otrosEgresos: data['otherExpenses'] === '' || data['otherExpenses'] === null ? 0 : parseFloat(data['otherExpenses']),
    descripcionEgresos: data['otherExpensesDescription'],
    activos: parseFloat(data['totalAssets']),
    pasivos: parseFloat(data['totalLiabilities']),
    totalIngresos: parseFloat(data['totalIncomes']),
    totalGastos: parseFloat(data['totalExpenses']),
  };
}
function getCompanyInformation(data) {
  var _a, _b;
  return {
    nombreCompania: data['companyName'],
    ubicacionCompania: data['companyLocation'],
    direccion: data['address'],
    barrio: data['place'],
    departamentoResidencia: data['departmentOfResidence'],
    ciudadResidencia: data['cityOfResidence'],
    estrato: (_a = data['stratus']) !== null && _a !== void 0 ? _a : 0,
    tipoVivienda: data['dwellingType'],
    renta: (_b = parseFloat(data['rent'])) !== null && _b !== void 0 ? _b : 0,
    tipoCompania: data['companyType'],
    nit: data['nit'],
    fechaExposito: data['foundatingDate'],
    actividadCompania: data['companyActivity'],
    punto: data['point'],
    tiendaOnline: data['onlineShop'],
    porcentajeVentas: data['salePercentage'],
    empleado: data['employees'],
    destino: data['destiny'],
    otroDestino: data['otherDestiny'],
  };
}
function getReferencias(data) {
  return {
    nombreContactoFamiliar: data['familyContactName'],
    celularContactoFamiliar: data['familyContactPhone'],
    relacionContactoFamiliar: data['familyContactRelationship'],
    nombreContactoAmigo: data['friendContactName'],
    celularContactoAmigo: data['friendContactPhone'],
    relacionContactoAmigo: data['friendContactRelationship']
  };
}
function getInfoEconomicaCompania(data) {
  return {
    ingresosVentas: parseFloat(data['salesIncome']),
    ingresosArriendo: parseFloat(data['rentIncome']),
    ingresosActividad: parseFloat(data['activityIncome']),
    ingresosOtros: data['otherIncomes'] === '' || data['otherIncomes'] === null ? 0 : parseFloat(data['otherIncomes']),
    descripcionIngresos: data['otherIncomesDescription'],
    soporte: data['incomeSupport'],
    egresosGastosNegocio: parseFloat(data['businessExpenses']),
    egresosArriendo: parseFloat(data['rentExpenses']),
    egresosDeudas: parseFloat(data['debtExpenses']),
    egresosPersonal: parseFloat(data['personalExpenses']),
    otrosEgresos: data['otherExpenses'] === '' || data['otherExpenses'] === null ? 0 : parseFloat(data['otherExpenses']),
    descripcionEgresos: data['otherExpensesDescription'],
    activos: parseFloat(data['totalAssets']),
    pasivos: parseFloat(data['totalLiabilities']),
    totalIngresos: parseFloat(data['totalIncomes']),
    totalGastos: parseFloat(data['totalExpenses']),
  };
}
export function getJsonModelData(stateData, flowType) {
  let informacionPersonal = getInformacionPersonal(stateData['personalInformation'], flowType);
  let infoReferencias = getReferencias(stateData['references']);
  let infoSocioDemografica = getInfoSocioDemografica(stateData['personalInformation2']);
  let data;
  if (flowType === 'employee') {
    let infoEconomica = getInfoEconomica(stateData['financialInformation']);
    let infoLaboral = getInfoLaboral(stateData['workingInformation']);
    data = Object.assign(Object.assign({}, informacionPersonal), { infoReferencias, infoEconomica, infoSocioDemografica, infoLaboral });
  }
  else {
    let infoCompania = getCompanyInformation(stateData['companyInformation']);
    let infoEconomicaCompania = getInfoEconomicaCompania(stateData['financialCompany']);
    data = Object.assign(Object.assign({}, informacionPersonal), { infoReferencias, infoEconomicaCompania, infoCompania, infoSocioDemografica });
  }
  var myHeaders = new Headers();
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append('GET', 'POST');
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify(data);
  fetch('https://credito.muii.com.co/api/DataManager/', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  })
    .then(data => console.log(data));
}
export function setBankInformation(bankData) {
  setUserInformation('bankInformation', bankData);
  // hacer un fetch PUT
}

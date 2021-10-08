function getInformacionPersonal(data) {
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
    Direccion: data['companyLocation'],
    Barrio: data['address'],
    DepartamentoResidencia: data['place'],
    CiudadResidencia: data['departmentOfResidence'],
    cityOfResidence: data['cityOfResidence'],
    Estrato: (_a = data['stratus']) !== null && _a !== void 0 ? _a : 0,
    TipoVivienda: data['dwellingType'],
    Renta: (_b = parseFloat(data['rent'])) !== null && _b !== void 0 ? _b : 0,
    TipoCompania: data['companyType'],
    Nit: data['nit'],
    FechaExposito: data['foundatingDate'],
    ActividadCompania: data['companyActivity'],
    Punto: data['point'],
    TiendaOnline: data['onlineShop'],
    PorcentajeVentas: data['salePercentage'],
    Empleado: data['employees'],
    Destino: data['destiny'],
    OtroDestino: data['otherDestiny'],
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
export function getJsonModelData(stateData, flowType) {
  let informacionPersonal = getInformacionPersonal(stateData['personalInformation']);
  let referencias = getReferencias(stateData['references']);
  let infoEconomica = getInfoEconomica(stateData['financialInformation']);
  let data;
  if (flowType === 'employee') {
    let infoSocioDemografica = getInfoSocioDemografica(stateData['personalInformation2']);
    let infoLaboral = getInfoLaboral(stateData['workingInformation']);
    data = Object.assign(Object.assign({}, informacionPersonal), { referencias, infoEconomica, infoSocioDemografica, infoLaboral });
  }
  else {
    let informacionCompania = getCompanyInformation(stateData['companyInformation']);
    data = Object.assign(Object.assign({}, informacionPersonal), { referencias, infoEconomica, informacionCompania });
  }
  // console.log(JSON.stringify(data))
  console.log(data);
  var myHeaders = new Headers();
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append('GET', 'POST');
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify(data);
  // console.log(raw)
  fetch('https://credito.muii.com.co/api/DataManager/', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  })
    .then(data => console.log(data));
}

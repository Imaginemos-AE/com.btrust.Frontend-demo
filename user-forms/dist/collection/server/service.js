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
    ingresosOtros: data['otherIncomes'] === '' ? 0 : parseFloat(data['otherIncomes']),
    ingresosSalarioVariable: parseFloat(data['variableSalaryIncome']),
    descripcionIngresos: data['otherIncomesDescription'],
    egresos: parseFloat(data['personalExpenses']),
    arriendo: parseFloat(data['rentExpenses']),
    egresosDeudas: parseFloat(data['debtExpenses']),
    otrosEgresos: data['otherExpenses'] === '' ? 0 : parseFloat(data['otherExpenses']),
    descripcionEgresos: data['otherExpensesDescription'],
    activos: parseFloat(data['totalAssets']),
    pasivos: parseFloat(data['totalLiabilities']),
    totalIngresos: parseFloat(data['totalIncomes']),
    totalGastos: parseFloat(data['totalExpenses']),
  };
}
export function getJsonModelData(stateData) {
  let informacionPersonal = getInformacionPersonal(stateData['personalInformation']);
  let infoSocioDemografica = getInfoSocioDemografica(stateData['personalInformation2']);
  let infoLaboral = getInfoLaboral(stateData['workingInformation']);
  let infoEconomica = getInfoEconomica(stateData['financialInformation']);
  console.log(Object.assign(Object.assign({}, informacionPersonal), { infoSocioDemografica, infoLaboral, infoEconomica }));
  var myHeaders = new Headers();
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append('GET', 'POST');
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify(Object.assign(Object.assign({}, informacionPersonal), { infoSocioDemografica, infoLaboral, infoEconomica }));
  fetch('https://credito.muii.com.co/api/DataManager/', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  });
}

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
function getInfoLaboral(data) {
  return {
    companyName: data['nombreEmpresa'],
    position: data['cargo'],
    companyType: data['esPublica'],
    companySeniority: data['antiguedad'],
    contractType: data['tipoontrato'],
    companyActivity: data['actividad'],
    creditDestination: data['destinoPrestamo'],
    companyPhone: data['telefono'],
    otherPhone: data['otroNumero'],
    companyPhoneExtension: data['extencion'],
  };
}
function getCompanyInformation(data) {
  var _a, _b;
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
  return {
    nombreBanco: data['bankName'],
    accountType: data['tipoCuenta'],
    accountNumber: data['numeroCuenta'],
  };
}
function getUserModelsInformation(userData) {
  const informacionPersonal = getInformacionPersonal(userData);
  const infoReferencias = getReferencias(userData['infoReferencias']);
  const infoCompania = getCompanyInformation(userData['infoCompania']);
  let infoLaboral = getInfoLaboral(userData['infoLaboral']);
  let infoBancaria = getInfoBancaria(userData['infoBancaria']);
  return {
    personalInformation: informacionPersonal,
    personalInformation2: infoLaboral,
    companyInformation: infoCompania,
    references: infoReferencias,
    bankInformation: infoBancaria,
  };
}
export function userAdminInformation(id) {
  let userInformation;
  const myHeaders = new Headers();
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append('GET', 'POST');
  myHeaders.append('Content-Type', 'application/json');
  fetch(`https://localhost:44306/api/DataManager/${id}/`, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  })
    .then(res => {
    return res.json();
  })
    .then(data => {
    console.log(data);
    userInformation = getUserModelsInformation(data);
  });
  return userInformation;
}

import { g as getRenderingRef, i as forceUpdate } from './index-91c8a86a.js';
import { g as getData, s as setData } from './helper-d3d03427.js';

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = ({ on }) => {
    const elmsToUpdate = new Map();
    if (typeof getRenderingRef === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', () => {
            elmsToUpdate.clear();
        });
        on('get', (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        });
    }
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => subscriptions.forEach((subscription) => {
        if (subscription.set) {
            on('set', subscription.set);
        }
        if (subscription.get) {
            on('get', subscription.get);
        }
        if (subscription.reset) {
            on('reset', subscription.reset);
        }
    });
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    stencilSubscription(map);
    return map;
};

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
    nivelAcademico: data['academiLevel'],
    numHijos: data['childrenNumber'],
    personasACargo: data['dependents'],
    estadoCivil: data['civilState'],
    departamentoResidencia: data['departmentOfResidence'],
    municipioRecidencia: data['cityOfResidence'],
    direccion: data['address'],
    torre_Apt: data['address2'],
    estrato: (_a = data['stratus']) !== null && _a !== void 0 ? _a : 0,
    tipoVivienda: data['dwellingType'],
    arriendo: (_b = data['rent']) !== null && _b !== void 0 ? _b : 0,
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
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
  return {
    ingresosSalario: (_a = data['salaryIncome']) !== null && _a !== void 0 ? _a : 0,
    ingresosOtros: (_b = data['otherIncomes']) !== null && _b !== void 0 ? _b : 0,
    ingresosSalarioVariable: (_c = data['variableSalaryIncome']) !== null && _c !== void 0 ? _c : 0,
    descripcionIngresos: data['otherIncomesDescription'],
    egresos: (_d = data['personalExpenses']) !== null && _d !== void 0 ? _d : 0,
    arriendo: (_e = data['rentExpenses']) !== null && _e !== void 0 ? _e : 0,
    egresosDeudas: (_f = data['debtExpenses']) !== null && _f !== void 0 ? _f : 0,
    otrosEgresos: (_g = data['otherExpenses']) !== null && _g !== void 0 ? _g : 0,
    descripcionEgresos: data['otherExpensesDescription'],
    activos: (_h = data['totalAssets']) !== null && _h !== void 0 ? _h : 0,
    pasivos: (_j = data['totalLiabilities']) !== null && _j !== void 0 ? _j : 0,
    totalIngresos: (_k = data['totalIncomes']) !== null && _k !== void 0 ? _k : 0,
    totalGastos: (_l = data['totalExpenses']) !== null && _l !== void 0 ? _l : 0,
  };
}
function getJsonModelData(stateData) {
  let informacionPersonal = getInformacionPersonal(stateData['personalInformation']);
  let infoSocioDemografica = getInfoSocioDemografica(stateData['personalInformation2']);
  let infoLaboral = getInfoLaboral(stateData['workingInformation']);
  let infoEconomica = getInfoEconomica(stateData['financialInformation']);
  console.log(JSON.stringify(Object.assign(Object.assign({}, informacionPersonal), { infoSocioDemografica, infoLaboral, infoEconomica })));
  // var myHeaders = new Headers();
  // myHeaders.append('Access-Control-Allow-Origin', '*');
  // myHeaders.append('Access-Control-Allow-Credentials', 'true');
  // myHeaders.append('GET', 'POST');
  // myHeaders.append('Content-Type', 'application/json');
  // var raw = JSON.stringify({...informacionPersonal,infoSocioDemografica,infoLaboral,infoEconomica});
  // fetch('http://localhost:5297/api/DataManager', {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow',
  // })
  //   .then(response => response.text())
  //   .then(result => console.log(JSON.parse(result)))
  //   .catch(error => console.log('error', error));
}
// const informacionPersonalModel = {
//   primerNombre: '',
//   segundoNombre: '',
//   primerApellido: '',
//   segundoApellido: '',
//   tipoDocumento: '',
//   documento: '',
//   fechaExpedicion: '',
//   fechaNacimiento: '',
//   nacionalidad: '',
//   departamentoNacimiento: '',
//   ciudadNacimiento: '',
//   departamentoExpedicion: '',
//   municipioExpedicion: '',
//   telefono: '',
//   celular: '',
//   correo: '',
//   genero: '',
// };
// const infoSocioDemograficaModel = {
//   nivelAcademico: '',
//   numHijos: '',
//   personasACargo: '',
//   estadoCivil: '',
//   departamentoResidencia: '',
//   municipioRecidencia: '',
//   direccion: '',
//   torre_Apt: '',
//   estrato: 0,
//   tipoVivienda: '',
//   arriendo: 0,
//   tiempo: '',
//   ocupacion: '',
// };
// const infoLaboralModel = {
//   nombreEmpresa: '',
//   cargo: '',
//   esPublica: '',
//   antiguedad: '',
//   tipoontrato: '',
//   actividad: '',
//   destinoPrestamo: '',
//   telefono: '',
//   otroNumero: '',
//   extencion: '',
// };
// const infoEconomicaModel = {
//   ingresosSalario: 0,
//   ingresosOtros: 0,
//   ingresosSalarioVariable: 0,
//   descripcionIngresos: '',
//   egresos: 0,
//   arriendo: 0,
//   egresosDeudas: 0,
//   otrosEgresos: 0,
//   descripcionEgresos: '',
//   activos: 0,
//   pasivos: 0,
//   totalIngresos: 0,
//   totalGastos: 0,
// };
// function setInformationFormat(data: any, newData: any) {
//   const keysCollect = Object.keys(newData);
//   let index = 0;
//   for (let i in data) {
//     data[i] = typeof data[i] === 'number' ? numericFormat(newData[keysCollect[index]]) : newData[keysCollect[index]];
//     index++;
//   }
//   return data;
// }
// function numericFormat(num: string) {
//   return num === null ? 0 : parseFloat(num);
// }
// export function getJsonModelData(stateData: any) {
//   let informacionPersonal = stateData.hasOwnProperty('personalInformation')
//     ? setInformationFormat(informacionPersonalModel, stateData['personalInformation'])
//     : informacionPersonalModel;
//   let infoSocioDemografica = stateData.hasOwnProperty('personalInformation2')
//     ? setInformationFormat(infoSocioDemograficaModel, stateData['personalInformation2'])
//     : infoSocioDemograficaModel;
//   let infoEconomica = stateData.hasOwnProperty('financialInformation') ? setInformationFormat(infoEconomicaModel, stateData['financialInformation']) : infoEconomicaModel;
//   let infoLaboral = stateData.hasOwnProperty('workingInformation') ? setInformationFormat(infoLaboralModel, stateData['workingInformation']) : infoLaboralModel;
//   infoEconomica["descripcionEgresos"]="";
//   infoEconomica["activos"]=0;
//   var myHeaders = new Headers();
//   myHeaders.append('Access-Control-Allow-Origin', '*');
//   myHeaders.append('Access-Control-Allow-Credentials', 'true');
//   myHeaders.append('GET', 'POST');
//   myHeaders.append('Content-Type', 'application/json');
//   var raw = JSON.stringify({ ...informacionPersonal, infoSocioDemografica, infoLaboral, infoEconomica });
//   fetch('https://credito.muii.com.co/api/DataManager/', {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow',
//   })
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

const { state } = createStore({
  currentUserInformation: {}
});
function loadDefaultData() {
  state.currentUserInformation = getData();
}
function setUserInformation(field, newData) {
  state.currentUserInformation = Object.assign(Object.assign({}, state.currentUserInformation), { [field]: newData });
  setData(state.currentUserInformation);
}
function sendFetch() {
  getJsonModelData(state.currentUserInformation);
}

export { setUserInformation as a, sendFetch as b, loadDefaultData as l, state as s };